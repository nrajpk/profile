// The motion switch. html.motion-off is set before first paint by the
// inline script in Layout.astro (visitor choice, else prefers-reduced-motion).
// Components listen for `motionchange` to start or stop their own loops.

export const motionOff = () => document.documentElement.classList.contains('motion-off');

export function setMotion(off) {
  const root = document.documentElement;
  root.classList.toggle('motion-off', off);
  root.classList.toggle('motion-on', !off);
  try { localStorage.setItem('motion', off ? 'off' : 'on'); } catch (e) {}
  document.dispatchEvent(new CustomEvent('motionchange', { detail: off }));
}
