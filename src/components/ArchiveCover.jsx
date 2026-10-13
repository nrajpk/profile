import React from "react";

// Diagram covers for the wider body of work. Same drawing language and
// motion classes as ProjectCover (see ".cover" in global.css). Each kind is
// parametric so several builds can share one diagram shape with their own
// labels. These are diagrams of how a system works, not screenshots.

const Flowline = ({ top, tag, nodes, gate, gateLabel, foot, foot2 }) => {
  const xs = nodes.map((_, i) => 40 + (320 / (nodes.length - 1)) * i);
  return (
    <>
      <text x="40" y="44">{top}</text>
      {tag && <text x="360" y="44" textAnchor="end" className="hot-text">{tag}</text>}
      <line x1="40" y1="125" x2="360" y2="125" className="line dash" strokeWidth="1.5" />
      {nodes.map((label, i) => {
        const isGate = gate === i;
        return (
          <g key={label}>
            {isGate && <circle cx={xs[i]} cy="125" r="17" className="hot-stroke gate" strokeWidth="1.5" />}
            <circle cx={xs[i]} cy="125" r={isGate ? 9 : 6} className={isGate ? "hot" : "node"} strokeWidth="1.5" />
            <text x={xs[i]} y="160" textAnchor="middle" className={isGate ? "hot-text" : undefined}>{label}</text>
          </g>
        );
      })}
      {gateLabel != null && gate != null && (
        <text x={Math.min(Math.max(xs[gate], 80), 320)} y="92" textAnchor="middle" className="hot-text">{gateLabel}</text>
      )}
      <circle r="4.5" className="hot travel-free" />
      <line x1="40" y1="196" x2="360" y2="196" className="line" strokeWidth="1" />
      <text x="40" y="214">{foot}</text>
      {foot2 && <text x="360" y="214" textAnchor="end">{foot2}</text>}
    </>
  );
};

const Ledger = ({ left, right, foot, foot2 }) => {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <text x="40" y="34">{left}</text>
      <text x="228" y="34">{right}</text>
      <rect x="40" y="44" width="124" height="176" rx="6" className="softer" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((r) => (
        <g key={r}>
          <rect x="52" y={60 + r * 17} width="58" height="4" rx="2" className="soft" />
          <rect x="128" y={60 + r * 17} width="24" height="4" rx="2" className="soft" />
        </g>
      ))}
      <rect x="40" y="46" width="124" height="3" className="hot scan" />
      <path d="M176 132 H214 M206 125 l8 7 -8 7" className="line dash" strokeWidth="1.5" fill="none" />
      {rows.map((r) => (
        <g key={r} className="cell" style={{ "--i": r * 2 }}>
          <rect x="228" y={48 + r * 26} width="8" height="16" rx="2" className={r === 3 ? "hot" : "soft"} />
          <rect x="244" y={48 + r * 26} width={[96, 70, 110, 84, 60, 100][r]} height="16" rx="3" className="soft" />
        </g>
      ))}
      <text x="228" y="214" className="hot-text">{foot}</text>
      <text x="228" y="228">{foot2}</text>
    </>
  );
};

const Board = ({ top, columns, foot }) => {
  const cols = [30, 122, 214, 306];
  const cards = [[96, 122], [70, 122], [96, 122, 148], [70]];
  return (
    <>
      <text x="30" y="34">{top}</text>
      {cols.map((x, c) => (
        <g key={x}>
          <rect x={x} y="44" width="64" height="150" rx="6" className="softer" strokeWidth="1" />
          <text x={x + 8} y="60">{columns[c]}</text>
          {cards[c].map((y) => (
            <rect key={y} x={x + 7} y={y} width="50" height="20" rx="4" className="soft" />
          ))}
          {c < 3 && <rect x={x + 76} y="100" width="4" height="38" rx="2" className="hot gate" />}
        </g>
      ))}
      <g className="deal">
        <rect x="37" y="70" width="50" height="20" rx="4" className="hot" />
        <rect x="43" y="77" width="26" height="2.5" rx="1.25" fill="#fff" opacity="0.9" />
        <rect x="43" y="82.5" width="16" height="2.5" rx="1.25" fill="#fff" opacity="0.6" />
      </g>
      <line x1="30" y1="210" x2="370" y2="210" className="line" strokeWidth="1" />
      <text x="30" y="228">{foot}</text>
    </>
  );
};

const Tiles = ({ top, tag, labels }) => (
  <>
    <text x="30" y="40">{top}</text>
    {tag && <text x="370" y="40" textAnchor="end" className="hot-text">{tag}</text>}
    {labels.map((label, i) => {
      const x = 30 + (i % 4) * 87;
      const y = 58 + Math.floor(i / 4) * 84;
      return (
        <g key={label}>
          <rect x={x} y={y} width="79" height="72" rx="6" className="softer" strokeWidth="1" />
          <rect x={x + 9} y={y + 10} width="61" height="30" rx="4" className={i === 2 ? "hot cell" : "soft cell"} style={{ "--i": i }} />
          <text x={x + 9} y={y + 58}>{label}</text>
        </g>
      );
    })}
  </>
);

// A dotted field suggesting a world map, with service hubs pulsing by region.
const Map = () => {
  const dots = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 26; c++) {
      const x = 44 + c * 12.5;
      const y = 62 + r * 14;
      const nx = (c - 12.5) / 13;
      const ny = (r - 4) / 4.6;
      if (nx * nx + ny * ny > 1) continue;
      if ((c === 8 || c === 9 || c === 17) && r > 2 && r < 7) continue; // oceans
      dots.push([x, y]);
    }
  }
  const hubs = [[106, 104], [132, 146], [206, 90], [224, 118], [244, 132], [296, 104], [322, 146]];
  return (
    <>
      <text x="44" y="38">Service hubs · support centres</text>
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" className="soft" />
      ))}
      {hubs.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" className="hot-stroke gate" strokeWidth="1.2" style={{ animationDelay: `${i * 0.35}s` }} />
          <circle cx={x} cy={y} r="3.5" className="hot" />
        </g>
      ))}
      <line x1="44" y1="200" x2="356" y2="200" className="line" strokeWidth="1" />
      <text x="96" y="220" textAnchor="middle">AMER</text>
      <text x="212" y="220" textAnchor="middle" className="hot-text">EMEA</text>
      <text x="318" y="220" textAnchor="middle">APAC</text>
    </>
  );
};

const Phone = () => (
  <>
    <rect x="150" y="22" width="100" height="206" rx="16" className="softer" strokeWidth="1.5" />
    <rect x="186" y="30" width="28" height="5" rx="2.5" className="soft" />
    {[0, 1, 2, 3].map((r) => (
      <g key={r} className="cell" style={{ "--i": r * 2 }}>
        <circle cx="166" cy={66 + r * 34} r="4" className={r === 1 ? "hot" : "soft"} />
        <rect x="178" y={60 + r * 34} width="58" height="5" rx="2.5" className="soft" />
        <rect x="178" y={70 + r * 34} width="36" height="4" rx="2" className="soft" />
      </g>
    ))}
    <line x1="166" y1="72" x2="166" y2="162" className="line dash" strokeWidth="1" />
    <rect x="162" y="196" width="76" height="18" rx="9" className="hot" />
    <text x="60" y="88" textAnchor="middle">Plan</text>
    <text x="60" y="130" textAnchor="middle" className="hot-text">Travel</text>
    <text x="60" y="172" textAnchor="middle">Relive</text>
    <path d="M90 84 H140 M90 126 H140 M90 168 H140" className="line dash" strokeWidth="1.2" fill="none" />
    <text x="340" y="88" textAnchor="middle">Days</text>
    <text x="340" y="130" textAnchor="middle">Stops</text>
    <text x="340" y="172" textAnchor="middle">Journal</text>
    <path d="M260 84 H310 M260 126 H310 M260 168 H310" className="line" strokeWidth="1" fill="none" />
  </>
);

const Layers = ({ layers, foot }) => (
  <>
    {layers.map((label, i) => {
      const y = 28 + i * 34;
      const inset = i * 14;
      return (
        <g key={label}>
          <rect x={60 + inset} y={y} width={280 - inset * 2} height="26" rx="5" className={i === 0 ? "hot cell" : "softer cell"} strokeWidth="1" style={{ "--i": i * 2 }} />
          <text x="200" y={y + 17} textAnchor="middle" style={i === 0 ? { fill: "#fff" } : undefined}>{label}</text>
        </g>
      );
    })}
    <line x1="60" y1="208" x2="340" y2="208" className="line" strokeWidth="1" />
    <text x="200" y="226" textAnchor="middle" className="hot-text">{foot}</text>
  </>
);

const Countdown = ({ date, label }) => {
  const units = ["Days", "Hours", "Min", "Sec"];
  return (
    <>
      <text x="40" y="40">{label}</text>
      <text x="360" y="40" textAnchor="end" className="hot-text">{date}</text>
      {units.map((unit, i) => (
        <g key={unit}>
          <rect x={40 + i * 82} y="58" width="74" height="66" rx="6" className="softer" strokeWidth="1" />
          <rect x={56 + i * 82} y="78" width="42" height="18" rx="4" className={i === 3 ? "hot gate" : "soft"} />
          <text x={77 + i * 82} y="114" textAnchor="middle">{unit}</text>
        </g>
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={40 + i * 54.4} y="146" width="48" height="50" rx="4" className="soft cell" style={{ "--i": i }} />
      ))}
      <text x="40" y="220">Photo archive by category</text>
    </>
  );
};

const Route = () => (
  <>
    <text x="40" y="40">Order placed · paid</text>
    <text x="360" y="40" textAnchor="end" className="hot-text">Curbside handover</text>
    <path d="M56 190 C 120 190, 120 96, 200 96 S 290 150, 340 110" className="line dash" strokeWidth="1.5" fill="none" />
    <circle cx="340" cy="110" r="30" className="hot-stroke gate" strokeWidth="1" />
    <circle cx="340" cy="110" r="16" className="hot-stroke" strokeWidth="1" opacity="0.5" />
    <circle cx="340" cy="110" r="6" className="hot" />
    <circle cx="56" cy="190" r="6" className="node" strokeWidth="1.5" />
    <circle r="5" className="hot travel-curve" />
    <text x="56" y="214" textAnchor="middle">Customer</text>
    <text x="340" y="160" textAnchor="middle">Restaurant</text>
    <text x="200" y="80" textAnchor="middle">Location shared only on the way</text>
  </>
);

const kinds = {
  flowline: [Flowline, (p) => `Diagram: ${p.nodes.join(", then ")}.`],
  ledger: [Ledger, (p) => `Diagram: ${p.left} scanned into ${p.right}.`],
  board: [Board, (p) => `Diagram: one record moving across ${p.columns.join(", ")}.`],
  tiles: [Tiles, (p) => `Diagram: ${p.labels.join(", ")}.`],
  map: [Map, () => "Diagram: service hubs across the Americas, EMEA and Asia-Pacific."],
  phone: [Phone, () => "Diagram: a phone showing a trip as days and stops, between plan, travel and relive."],
  layers: [Layers, (p) => `Diagram: ${p.layers.join(", then ")}.`],
  countdown: [Countdown, (p) => `Diagram: a countdown to ${p.date} above a photo archive.`],
  route: [Route, () => "Diagram: a customer travelling to a restaurant, location shared only on the way."],
};

export default function ArchiveCover({ cover, className = "" }) {
  const entry = kinds[cover?.kind];
  if (!entry) return null;
  const [Component, label] = entry;
  return (
    <svg viewBox="0 0 400 250" role="img" aria-label={label(cover)} className={`cover block w-full h-auto ${className}`}>
      <Component {...cover} />
    </svg>
  );
}
