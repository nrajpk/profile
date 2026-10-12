// Site shell behaviour: skins, mobile menu, command palette, scroll
// progress, scroll reveals and the magnetic contact button.
// The header and footer are replaced on every client-side navigation, so
// element-level listeners are re-bound on `astro:page-load`; document-level
// listeners are registered once.

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Skins ---------- */

function currentSkin() {
  return document.documentElement.dataset.skin || 'paper';
}

function syncSkinUI() {
  const skin = currentSkin();
  document.querySelectorAll('[data-skin-set]').forEach((el) => {
    el.setAttribute('aria-pressed', String(el.dataset.skinSet === skin));
  });
}

function setSkin(id, event) {
  if (id === currentSkin()) return;
  const apply = () => {
    document.documentElement.dataset.skin = id;
    try { localStorage.setItem('skin', id); } catch (e) {}
    syncSkinUI();
    document.dispatchEvent(new CustomEvent('skinchange', { detail: id }));
  };

  if (!document.startViewTransition || reduceMotion()) return apply();

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

document.addEventListener('click', (event) => {
  const control = event.target.closest('[data-skin-set]');
  if (!control) return;
  setSkin(control.dataset.skinSet, event);
  if (control.closest('#palette')) closePalette();
});

/* ---------- Mobile menu ---------- */

function setMenu(open) {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}

/* ---------- Command palette ---------- */

const palette = () => document.getElementById('palette');

function paletteItems() {
  return [...document.querySelectorAll('#palette-list .palette-item')].filter((el) => !el.parentElement.hidden);
}

function setActive(index) {
  const items = paletteItems();
  items.forEach((el, i) => el.classList.toggle('active', i === index));
  items[index]?.scrollIntoView({ block: 'nearest' });
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
  dialog.showModal();
  const input = document.getElementById('palette-input');
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

/* ---------- Per-page init ---------- */

let revealObserver;

function init() {
  syncSkinUI();
  updateProgress();
  document.body.style.overflow = '';

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
    document.getElementById('palette-input')?.addEventListener('input', (event) => filterPalette(event.target.value));
  }

  // Scroll reveals
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Anything already above the viewport (restored scroll, #anchor
        // links) is shown at once so scrolling back up never meets a gap.
        if (!entry.isIntersecting && entry.boundingClientRect.bottom > 0) return;
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

  // Magnetic button
  if (!reduceMotion() && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s';
      el.addEventListener('mousemove', (event) => {
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
