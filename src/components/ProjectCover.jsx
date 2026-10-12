import React from "react";

// Diagram covers. Each one is drawn from the documented structure of its
// system (see the matching case study) — they are diagrams, not screenshots.
// Motion lives in global.css under ".cover" so the SVG renders statically
// from Astro without hydration.

const PipelineCover = () => {
  const nodes = [
    { x: 40, label: "Source" },
    { x: 104, label: "Validate" },
    { x: 168, label: "Qualify" },
    { x: 232, label: "Approve", gate: true },
    { x: 296, label: "Send" },
    { x: 360, label: "Report" },
  ];
  return (
    <>
      <text x="40" y="44">B2G outbound · event-driven</text>
      <text x="360" y="44" textAnchor="end" className="hot-text">Stop on reply</text>
      <line x1="40" y1="125" x2="360" y2="125" className="line dash" strokeWidth="1.5" />
      {nodes.map((n) => (
        <g key={n.label}>
          {n.gate && <circle cx={n.x} cy="125" r="17" className="hot-stroke gate" strokeWidth="1.5" />}
          <circle cx={n.x} cy="125" r={n.gate ? 9 : 6} className={n.gate ? "hot" : "node"} strokeWidth="1.5" />
          <text x={n.x} y="160" textAnchor="middle" className={n.gate ? "hot-text" : undefined}>{n.label}</text>
        </g>
      ))}
      <text x="232" y="92" textAnchor="middle" className="hot-text">A human decides</text>
      <circle r="4.5" className="hot travel" />
      <text x="40" y="214">AI qualifies</text>
      <text x="360" y="214" textAnchor="end">Nothing sends unapproved</text>
      <line x1="40" y1="196" x2="360" y2="196" className="line" strokeWidth="1" />
    </>
  );
};

const CrmCover = () => {
  const cols = [30, 122, 214, 306];
  const cards = [
    [96, 122],
    [70, 122],
    [96, 122, 148],
    [70],
  ];
  return (
    <>
      <text x="30" y="34">Lifecycle stages · custom fields</text>
      {cols.map((x, c) => (
        <g key={x}>
          <rect x={x} y="44" width="64" height="150" rx="6" className="softer" strokeWidth="1" />
          <text x={x + 8} y="60">Stage 0{c + 1}</text>
          {cards[c].map((y) => (
            <rect key={y} x={x + 7} y={y} width="50" height="20" rx="4" className="soft" />
          ))}
        </g>
      ))}
      <g className="deal">
        <rect x="37" y="70" width="50" height="20" rx="4" className="hot" />
        <rect x="43" y="77" width="26" height="2.5" rx="1.25" fill="#fff" opacity="0.9" />
        <rect x="43" y="82.5" width="16" height="2.5" rx="1.25" fill="#fff" opacity="0.6" />
      </g>
      <line x1="30" y1="210" x2="370" y2="210" className="line" strokeWidth="1" />
      <text x="30" y="228">One record, tracked across the whole sales cycle</text>
    </>
  );
};

const TenderCover = () => {
  const rows = [0, 1, 2, 3, 4];
  const colsX = [228, 276, 324];
  let i = 0;
  return (
    <>
      <text x="40" y="34">Tender PDF</text>
      <text x="228" y="34">Compliance matrix</text>
      <rect x="40" y="44" width="124" height="176" rx="6" className="softer" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((r) => (
        <rect key={r} x="52" y={60 + r * 17} width={r % 3 === 2 ? 62 : 98} height="4" rx="2" className="soft" />
      ))}
      <rect x="40" y="46" width="124" height="3" className="hot scan" />
      <path d="M176 132 H214 M206 125 l8 7 -8 7" className="line dash" strokeWidth="1.5" fill="none" />
      {rows.map((r) =>
        colsX.map((x, c) => {
          const hold = r === 2 && c === 2;
          const idx = i++;
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={46 + r * 30}
              width="42"
              height="24"
              rx="4"
              className={hold ? "hot-stroke cell" : "soft cell"}
              strokeWidth="1.5"
              style={{ "--i": idx }}
            />
          );
        })
      )}
      <text x="345" y="121" textAnchor="middle" className="hot-text">Hold</text>
      <text x="228" y="214" className="hot-text">37/37 tests passing</text>
      <text x="228" y="228">Safety hold cannot be overridden</text>
    </>
  );
};

const TrackerCover = () => {
  const ticks = Array.from({ length: 14 }, (_, k) => 31 + k * 26);
  const bars = [38, 62, 30, 54, 44, 70, 26];
  return (
    <>
      <text x="31" y="40">Order → delivery</text>
      <text x="369" y="40" textAnchor="end" className="hot-text">14-stage rail</text>
      <line x1="31" y1="96" x2="369" y2="96" className="line" strokeWidth="2" />
      <rect x="31" y="95" width="338" height="2" className="hot fill" />
      {ticks.map((x, k) => (
        <g key={x}>
          <circle cx={x} cy="96" r="4" className="node" strokeWidth="1.5" />
          <text x={x} y="78" textAnchor="middle">{String(k + 1).padStart(2, "0")}</text>
        </g>
      ))}
      <circle cx="31" cy="96" r="6" className="hot unit" />
      {bars.map((h, k) => (
        <rect key={k} x={31 + k * 26} y={206 - h} width="16" height={h} rx="2" className="soft bar" style={{ "--i": k }} />
      ))}
      <line x1="31" y1="206" x2="213" y2="206" className="line" strokeWidth="1" />
      <text x="369" y="176" textAnchor="end">Stage updates via RPC only</text>
      <text x="369" y="192" textAnchor="end">5 views · 3 RPCs</text>
      <text x="369" y="208" textAnchor="end" className="hot-text">Stalls get flagged</text>
    </>
  );
};

const covers = {
  pipeline: { el: <PipelineCover />, label: "Diagram: a lead moves through source, validate and AI qualification, waits at a human approval gate, then sends and reports." },
  crm: { el: <CrmCover />, label: "Diagram: one record moving across four lifecycle stage columns." },
  tender: { el: <TenderCover />, label: "Diagram: a tender PDF is scanned into a compliance matrix, with one cell held for human review." },
  tracker: { el: <TrackerCover />, label: "Diagram: a vehicle advancing along a 14-stage production rail with stage distribution bars." },
};

export default function ProjectCover({ kind, className = "" }) {
  const cover = covers[kind];
  if (!cover) return null;
  return (
    <svg viewBox="0 0 400 250" role="img" aria-label={cover.label} className={`cover block w-full h-auto ${className}`}>
      {cover.el}
    </svg>
  );
}
