// sitemap.xml, generated from the page files so a new page is listed the
// moment it exists. No dependency needed for a site this size.
const pages = import.meta.glob('./**/*.astro');

export function GET({ site }) {
  const base = site ?? new URL('https://www.nrajpk.com');
  const routes = Object.keys(pages)
    // Trailing slash on every route, matching the canonical URLs the build emits.
    .map((file) => `${file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/?index$/, '')}/`.replace(/^\/\/$/, '/'))
    .filter((route) => !route.includes('[') && !route.startsWith('/404'))
    .sort();

  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, base).href}</loc></url>`)
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
