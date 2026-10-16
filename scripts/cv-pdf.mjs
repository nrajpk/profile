// Renders /cv to public/<Name>-CV.pdf with headless Chrome, so the CV's
// "Download PDF" button serves one fixed file instead of depending on each
// visitor's print dialog (paper size, margins, scale, background graphics).
//
//   npm run cv:pdf
//
// Builds the site, serves it locally, prints the page at A4 with the page's
// own print styles, refuses to write anything but a single page, and saves
// the file into public/ so the next deploy ships it. Run it after changing
// career, project or contact data, then commit the PDF.
//
// Needs Google Chrome or Chromium. Set CHROME_PATH if it is not found.

import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { cvPdf } from '../src/data/site.js';

const PORT = 4329;
const DEBUG_PORT = 9339;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const chromePath = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].find((path) => path && existsSync(path));
if (!chromePath) {
  console.error('cv:pdf — Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.');
  process.exit(1);
}

async function waitFor(url, label) {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch {}
    await sleep(250);
  }
  throw new Error(`${label} did not respond at ${url}`);
}

console.log('cv:pdf — building the site');
const build = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit' });
if (build.status !== 0) process.exit(build.status ?? 1);

const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'ignore', detached: true });
const profile = mkdtempSync(join(tmpdir(), 'cv-pdf-'));
const chrome = spawn(chromePath, ['--headless=new', '--disable-gpu', `--remote-debugging-port=${DEBUG_PORT}`, `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });

// Chrome keeps writing to its profile for a moment after being told to
// quit, so wait for it to exit before removing the folder.
const cleanup = async () => {
  try { process.kill(-server.pid); } catch {}
  const exited = new Promise((resolve) => chrome.once('exit', resolve));
  chrome.kill();
  await Promise.race([exited, sleep(3000)]);
  // Chrome's crash reporter can hold the folder briefly; retry the delete.
  try { rmSync(profile, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 }); } catch {}
};

try {
  await waitFor(`http://localhost:${PORT}/cv/`, 'astro preview');
  const targets = await (await waitFor(`http://127.0.0.1:${DEBUG_PORT}/json`, 'Chrome')).json();
  const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve) => ws.addEventListener('open', resolve));

  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const n = ++id;
      pending.set(n, (msg) => (msg.error ? reject(new Error(`${method}: ${msg.error.message}`)) : resolve(msg.result)));
      ws.send(JSON.stringify({ id: n, method, params }));
    });

  console.log('cv:pdf — rendering /cv');
  await send('Page.enable');
  await send('Emulation.setEmulatedMedia', { media: 'print', features: [{ name: 'prefers-color-scheme', value: 'light' }] });
  await send('Page.navigate', { url: `http://localhost:${PORT}/cv/` });
  // Wait for web fonts and the photo, so the PDF never embeds fallbacks.
  await sleep(1000);
  await send('Runtime.evaluate', {
    awaitPromise: true,
    expression: `Promise.all([document.fonts.ready, ...[...document.images].map((img) => img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; }))])`,
  });

  const { data } = await send('Page.printToPDF', {
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: false,
    generateTaggedPDF: true,
  });
  ws.close();

  const pdf = Buffer.from(data, 'base64');
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  if (pages !== 1) throw new Error(`the CV rendered to ${pages} pages; tighten the print styles in src/pages/cv.astro`);

  writeFileSync(join('public', cvPdf), pdf);
  // The build above ran before this file existed; keep dist/ in step too.
  if (existsSync('dist')) writeFileSync(join('dist', cvPdf), pdf);
  console.log(`cv:pdf — wrote public/${cvPdf} (1 page, ${Math.round(pdf.length / 1024)} KB). Commit it; the next deploy ships it.`);
} catch (error) {
  console.error(`cv:pdf — ${error.message}`);
  process.exitCode = 1;
} finally {
  await cleanup();
}
