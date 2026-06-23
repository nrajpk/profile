import React from 'react';
const lines = [
  { key: 'source', value: 'public_source.csv loaded' },
  { key: 'normalize', value: 'fields cleaned and tagged' },
  { key: 'route', value: 'records prepared for CRM workflow' },
  { key: 'status', value: 'ready for review' }
];

export default function InteractiveTerminal() {
  return (
    <div className="rounded-[28px] border border-stone-800 bg-stone-950 p-5 font-mono text-xs text-stone-400 shadow-xl shadow-stone-900/10">
      <div className="mb-5 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <div className="space-y-3">
        {lines.map((line) => (
          <p key={line.key}>
            <span className="text-accent">{line.key}</span>
            <span className="text-stone-600"> / </span>
            <span>{line.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
