// Site shell behaviour: skins, the motion switch, mobile menu, command
// palette, scroll progress, scroll reveals, copy-to-clipboard and the
// magnetic contact button.
// The header and footer are replaced on every client-side navigation, so
// element-level listeners are re-bound on `astro:page-load`; document-level
// listeners are registered once.

import { motionOff, setMotion } from './motion.js';

const SWATCH = { paper: '#F9F8F6', ink: '#141210', blueprint: '#0B2545' };

/* ---------- Skins ---------- */

function currentSkin() {
  return document.documentElement.dataset.skin || 'paper';
}

function syncSkinUI() {
  const skin = currentSkin();
  document.querySelectorAll('[data-skin-set]').forEach((el) => {
    el.setAttribute('aria-pressed', String(el.dataset.skinSet === skin));
  });
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', SWATCH[skin] || SWATCH.paper);
}

function setSkin(id, event) {
  if (id === currentSkin()) return;
  const apply = () => {
    document.documentElement.dataset.skin = id;
    try { localStorage.setItem('skin', id); } catch (e) {}
    syncSkinUI();
    document.dispatchEvent(new CustomEvent('skinchange', { detail: id }));
  };

  if (!document.startViewTransition || motionOff()) return apply();

  const x = event?.clientX || window.innerWidth / 2;
  const y = event?.clientY || 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const root = document.documentElement;
  root.classList.add('skinning');
  const transition = document.startViewTransition(apply);
  transition.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' }
    );
  });
  transition.finished.finally(() => root.classList.remove('skinning'));
}

/* ---------- Motion switch ---------- */

function syncMotionUI() {
  const off = motionOff();
  document.querySelectorAll('[data-motion-toggle]').forEach((el) => {
    // The palette item is a listbox option; it reads its state from its label.
    if (el.getAttribute('role') !== 'option') el.setAttribute('aria-pressed', String(off));
    const label = el.querySelector('[data-motion-label]') || (el.children.length === 0 ? el : null);
    if (label) label.textContent = off ? 'Resume animations' : 'Pause animations';
    if (el.title) el.title = off ? 'Resume animations' : 'Pause animations';
    const sr = el.querySelector('.sr-only');
    if (sr) sr.textContent = off ? 'Resume animations' : 'Pause animations';
  });
}

document.addEventListener('click', (event) => {
  const skinControl = event.target.closest('[data-skin-set]');
  if (skinControl) {
    setSkin(skinControl.dataset.skinSet, event);
    if (skinControl.closest('#palette')) closePalette();
    return;
  }
  const motionControl = event.target.closest('[data-motion-toggle]');
  if (motionControl) {
    setMotion(!motionOff());
    if (motionControl.closest('#palette')) closePalette();
    return;
  }
  const copyControl = event.target.closest('[data-copy]');
  if (copyControl) copy(copyControl);
});

document.addEventListener('motionchange', () => {
  syncMotionUI();
  revealAll();
});

/* ---------- Copy to clipboard ---------- */

async function copy(control) {
  const label = control.querySelector('[data-copy-label]') || control;
  const original = label.dataset.original || label.textContent;
  label.dataset.original = original;
  try {
    await navigator.clipboard.writeText(control.dataset.copy);
    label.textContent = 'Copied';
  } catch (e) {
    label.textContent = control.dataset.copy;
  }
  clearTimeout(control._copyTimer);
  control._copyTimer = setTimeout(() => { label.textContent = original; }, 2400);
}

/* ---------- Mobile menu ---------- */

function setMenu(open) {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
  // Keep focus inside the open menu.
  ['main', 'contact'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.inert = open;
  });
}

/* ---------- Command palette ---------- */

const palette = () => document.getElementById('palette');
const paletteInput = () => document.getElementById('palette-input');

function paletteItems() {
  return [...document.querySelectorAll('#palette-list .palette-item')].filter((el) => !el.parentElement.hidden);
}

function setActive(index) {
  const items = paletteItems();
  document.querySelectorAll('#palette-list .palette-item').forEach((el) => {
    el.classList.remove('active');
    el.setAttribute('aria-selected', 'false');
  });
  const item = items[index];
  const input = paletteInput();
  if (!item) {
    input?.removeAttribute('aria-activedescendant');
    return;
  }
  item.classList.add('active');
  item.setAttribute('aria-selected', 'true');
  input?.setAttribute('aria-activedescendant', item.id);
  item.scrollIntoView({ block: 'nearest' });
}

function filterPalette(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll('#palette-list .palette-item').forEach((el) => {
    el.parentElement.hidden = q !== '' && !el.dataset.label.includes(q);
  });
  document.querySelectorAll('#palette-list [data-group]').forEach((group) => {
    let next = group.nextElementSibling;
    let any = false;
    while (next && !next.hasAttribute('data-group')) {
      if (!next.hidden) any = true;
      next = next.nextElementSibling;
    }
    group.hidden = !any;
  });
  setActive(0);
}

function openPalette() {
  const dialog = palette();
  if (!dialog || dialog.open) return;
  setMenu(false);
  syncMotionUI();
  dialog.showModal();
  const input = paletteInput();
  input.value = '';
  filterPalette('');
  input.focus();
}

function closePalette() {
  const dialog = palette();
  if (dialog?.open) dialog.close();
}

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    palette()?.open ? closePalette() : openPalette();
    return;
  }
  if (event.key === 'Escape') setMenu(false);

  if (!palette()?.open) return;
  const items = paletteItems();
  const index = items.findIndex((el) => el.classList.contains('active'));
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    setActive((index + 1) % items.length);
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    setActive((index - 1 + items.length) % items.length);
  } else if (event.key === 'Enter') {
    event.preventDefault();
    items[index]?.click();
  }
});

/* ---------- Scroll progress ---------- */

let progressTicking = false;
function updateProgress() {
  progressTicking = false;
  const bar = document.getElementById('pb');
  if (!bar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
}
window.addEventListener(
  'scroll',
  () => {
    if (progressTicking) return;
    progressTicking = true;
    requestAnimationFrame(updateProgress);
  },
  { passive: true }
);

/* ---------- Scroll reveals ----------
   Nothing is hidden by default. Only elements that start below the fold
   are armed (hidden without a transition), then released as they enter. */

let revealObserver;

function revealAll() {
  revealObserver?.disconnect();
  document.querySelectorAll('[data-reveal].reveal-wait').forEach((el) => el.classList.remove('reveal-wait'));
}

function initReveals() {
  revealAll();
  if (motionOff()) return;
  const below = [...document.querySelectorAll('[data-reveal]')].filter((el) => el.getBoundingClientRect().top > window.innerHeight);
  if (!below.length) return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Anything already above the viewport (restored scroll, #anchor
        // links) is shown at once so scrolling back up never meets a gap.
        if (!entry.isIntersecting && entry.boundingClientRect.bottom > 0) return;
        entry.target.classList.remove('reveal-wait');
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  const root = document.documentElement;
  root.classList.add('reveal-arming');
  below.forEach((el) => el.classList.add('reveal-wait'));
  void root.offsetHeight;
  root.classList.remove('reveal-arming');
  below.forEach((el) => revealObserver.observe(el));
}

/* ---------- Disclosures opened by a link ---------- */

function openTarget() {
  if (!location.hash) return;
  let target;
  try { target = document.querySelector(decodeURIComponent(location.hash)); } catch (e) { return; }
  const details = target?.closest('details');
  if (details && !details.open) {
    details.open = true;
    target.scrollIntoView({ block: 'start' });
  }
}
window.addEventListener('hashchange', openTarget);

/* ---------- Per-page init ---------- */

function init() {
  syncSkinUI();
  syncMotionUI();
  updateProgress();
  setMenu(false);
  openTarget();

  document.getElementById('menu-toggle')?.addEventListener('click', (event) => {
    setMenu(event.currentTarget.getAttribute('aria-expanded') !== 'true');
  });

  document.querySelectorAll('[data-palette-open]').forEach((el) => el.addEventListener('click', openPalette));

  const dialog = palette();
  if (dialog) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closePalette();
    });
    dialog.querySelectorAll('a.palette-item').forEach((el) => el.addEventListener('click', closePalette));
    paletteInput()?.addEventListener('input', (event) => filterPalette(event.target.value));
  }

  initReveals();

  // Magnetic button
  if (!motionOff() && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s';
      el.addEventListener('mousemove', (event) => {
        if (motionOff()) return;
        const rect = el.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
}

document.addEventListener('astro:page-load', init);
