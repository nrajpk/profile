import React, { useEffect, useRef } from "react";

// The handoff chain as a living field. Records enter on the left, a share
// is dropped at Qualify, the rest queue at the human approval gate and
// leave it approved (accent colour) and faster. The cursor pushes records
// off their lane; they spring back. Canvas 2D, paused when off-screen or
// the tab is hidden, and a single still frame under reduced motion.

export const STAGES = ["Source", "Enrich", "Qualify", "Approve", "Send", "Track", "Report"];
export const stageAt = (i) => 0.08 + i * 0.14; // Approve sits at 0.5

const QUALIFY = stageAt(2);
const GATE = stageAt(3);
const DROP_SHARE = 0.3;

const gauss = (x, mu, sigma) => Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma));

export default function SystemField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let colors = { base: "#a8a29e", accent: "#ff4f00" };
    let raf = 0;
    let visible = true;
    let last = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const readColors = () => {
      const style = getComputedStyle(document.documentElement);
      colors = {
        base: style.getPropertyValue("--color-stone-400").trim() || "#a8a29e",
        accent: style.getPropertyValue("--color-zapier").trim() || "#ff4f00",
      };
    };

    // Lane geometry: a wide stream that pinches at the gate and fans out again.
    // Before the gate the stream runs wide under the copy; after it, the
    // approved records drop into a tight band along the foot of the hero so
    // they stay in view beside the portrait instead of passing behind it.
    const smooth = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
    const centre = (t) => {
      const fall = smooth((t - GATE) / 0.2);
      return height * (0.735 + 0.02 * Math.sin(t * Math.PI * 3) * (1 - fall) + 0.17 * fall);
    };
    const spread = (t) => {
      const wide = height * 0.15;
      const narrow = height * 0.02;
      if (t > GATE) return narrow + height * 0.012 * smooth((t - GATE) / 0.2);
      return wide - (wide - narrow) * gauss(t, GATE, 0.085);
    };

    const spawn = (p, fresh) => {
      p.t = fresh ? Math.random() : -Math.random() * 0.08;
      p.u = (Math.random() * 2 - 1) * (0.35 + Math.random() * 0.65);
      p.speed = 0.035 + Math.random() * 0.03;
      p.size = 0.9 + Math.random() * 1.3;
      p.drop = Math.random() < DROP_SHARE;
      p.ox = 0;
      p.oy = 0;
      p.vx = 0;
      p.vy = 0;
      p.phase = Math.random() * Math.PI * 2;
      if (fresh && p.drop && p.t > QUALIFY + 0.07) p.drop = false;
    };

    const build = () => {
      const count = Math.round(Math.min(340, Math.max(90, (width * height) / 5200)));
      particles = Array.from({ length: count }, () => {
        const p = {};
        spawn(p, true);
        return p;
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduce) draw(0);
    };

    const drawGate = () => {
      const x = GATE * width;
      const y = centre(GATE);
      const half = spread(GATE) + 16;
      ctx.strokeStyle = colors.accent;
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y - half);
      ctx.lineTo(x, y - spread(GATE) - 3);
      ctx.moveTo(x, y + spread(GATE) + 3);
      ctx.lineTo(x, y + half);
      ctx.stroke();
    };

    function draw(dt) {
      ctx.clearRect(0, 0, width, height);
      drawGate();

      for (const p of particles) {
        // Queue before the gate, release quickly after it.
        const slow = 1 - 0.82 * gauss(p.t, GATE - 0.035, 0.04);
        const boost = p.t > GATE ? 1.7 : 1;
        p.t += p.speed * slow * boost * dt;
        if (p.t > 1.04) spawn(p, false);

        let alpha = Math.min(1, Math.max(0, (p.t + 0.04) / 0.08)) * Math.min(1, (1.04 - p.t) / 0.1);
        if (p.drop) {
          const fade = 1 - (p.t - QUALIFY) / 0.07;
          if (fade <= 0) {
            spawn(p, false);
            continue;
          }
          if (p.t > QUALIFY) alpha *= fade;
        }

        const wobble = Math.sin(p.phase + p.t * 14) * 2.2;
        const bx = p.t * width;
        const by = centre(p.t) + p.u * spread(p.t) + wobble + (p.drop && p.t > QUALIFY ? (p.t - QUALIFY) * height * 1.4 : 0);

        // Cursor pushes records off their lane; a spring pulls them back.
        if (pointer.active) {
          const dx = bx + p.ox - pointer.x;
          const dy = by + p.oy - pointer.y;
          const dist2 = dx * dx + dy * dy;
          const radius = 130;
          if (dist2 < radius * radius) {
            const dist = Math.sqrt(dist2) || 1;
            const force = (1 - dist / radius) * 900;
            p.vx += (dx / dist) * force * dt;
            p.vy += (dy / dist) * force * dt;
          }
        }
        p.vx += -p.ox * 9 * dt;
        p.vy += -p.oy * 9 * dt;
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.ox += p.vx * dt;
        p.oy += p.vy * dt;

        const x = bx + p.ox;
        const y = by + p.oy;
        const approved = p.t > GATE && !p.drop;
        const streak = (approved ? 16 : 7) * slow + 1.5;

        ctx.globalAlpha = alpha * (approved ? 0.95 : 0.6);
        ctx.strokeStyle = approved ? colors.accent : colors.base;
        ctx.lineWidth = p.size * (approved ? 1.25 : 1);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x - streak, y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (reduce || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.y > -40 && pointer.y < rect.height + 40;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    const onSkin = () => {
      readColors();
      if (reduce) draw(0);
    };

    readColors();
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    });
    io.observe(canvas);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("skinchange", onSkin);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("skinchange", onSkin);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full pointer-events-none" />;
}
