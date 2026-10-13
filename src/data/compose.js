// How the separate builds line up into larger systems, and the design
// principles that repeat across them. Every stage line is taken from that
// project's own README, product notes or case study. Statuses are honest:
// a chain can contain a live system next to a prototype.
//
// status: live | internal | built | build | pilot | prototype

export const chains = [
  {
    id: 'sales',
    tab: 'Sales automation',
    title: 'Signal to service, in nine handoffs.',
    thesis:
      'A public procurement signal becomes a qualified lead, a tracked deal, a released work order, a built vehicle and a supported customer. Each handoff has its own system.',
    note: 'These were built as separate systems and sit at different stages of maturity. The map shows how they line up, not one integrated product.',
    sequence: true,
    stages: [
      {
        verb: 'Attract',
        project: 'mahindraarmored.com & the brand film',
        line: 'The vehicle range, certifications and an enquiry form in four languages; a 65-second film for the top of the funnel.',
        status: 'live',
        href: '/work#mahindraarmored-com',
      },
      {
        verb: 'Sense',
        project: 'defense.auto',
        line: 'Procurement programmes collected from official sources, reviewed by an editor, and mapped across 194 countries.',
        status: 'pilot',
        href: '/work#defense-auto',
      },
      {
        verb: 'Source & reach',
        project: 'MEVA Console · B2G pipeline',
        line: 'Prospects searched, validated and scored against ICP rules. A person approves each one before a capped, stop-on-reply sequence sends.',
        status: 'live',
        href: '/work/b2g-gtm-pipeline',
      },
      {
        verb: 'Respond',
        project: 'Tender Compliance Engine',
        line: 'Tender PDFs turned into reviewed compliance matrices, with a safety hold that cannot be overridden.',
        status: 'built',
        href: '/work/tender-compliance-engine',
      },
      {
        verb: 'Track',
        project: 'Custom CRM',
        line: 'Leads and opportunities as separate objects, dated follow-ups, a tender calendar and targets counted in units.',
        status: 'live',
        href: '/work/crm-product-ownership',
      },
      {
        verb: 'Convert',
        project: 'MEVAConnect',
        line: 'Onboarding, finance and accounts, then work-order release, each behind a stage gate with an audit trail.',
        status: 'prototype',
        href: '/work#meva-connect',
      },
      {
        verb: 'Build',
        project: 'Vehicle Production Tracker',
        line: 'Every order broken into units on a 14-stage rail, with stalls flagged on a decision dashboard.',
        status: 'built',
        href: '/work/production-tracker',
      },
      {
        verb: 'Account',
        project: 'MEVA Finance',
        line: 'Bank statements imported, checked for continuity and classified into liquidity and cash-flow reports.',
        status: 'internal',
        href: '/work#meva-finance',
      },
      {
        verb: 'Support',
        project: 'Global Service Network map',
        line: 'Where a delivered vehicle can be serviced, by region, on the public support site.',
        status: 'live',
        href: '/work#service-network-map',
      },
    ],
  },
  {
    id: 'treasury',
    tab: 'Treasury',
    title: 'An internal tool, then a product.',
    thesis:
      'The finance workspace was built for one company’s bank accounts. Ledge & Keel is the same discipline with every company-specific assumption moved into configuration.',
    note: 'MEVA Finance is an internal tool. Ledge & Keel is in development.',
    sequence: true,
    stages: [
      { verb: 'Import', project: 'MEVA Finance', line: 'Bank statements parsed per account stream, previewed before anything is saved.', status: 'internal', href: '/work#meva-finance' },
      { verb: 'Control', project: 'MEVA Finance', line: 'Duplicate checks, balance-continuity checks and explicit acknowledgement of any break.', status: 'internal', href: '/work#meva-finance' },
      { verb: 'Classify', project: 'MEVA Finance', line: 'Categories, counterparties and splits, with a record of every reclassification.', status: 'internal', href: '/work#meva-finance' },
      { verb: 'Report', project: 'MEVA Finance', line: 'Liquidity views and Excel-ready cash-flow and fund-position outputs.', status: 'internal', href: '/work#meva-finance' },
      { verb: 'Generalise', project: 'Ledge & Keel', line: 'Organisations, banks, currencies and import formats become configuration; each organisation’s data is isolated at the database; the whole thing self-hosts.', status: 'build', href: '/work#ledge-keel' },
    ],
  },
  {
    id: 'custody',
    tab: 'Operations custody',
    title: 'Rules first, software second.',
    thesis:
      'For a stock-and-cash system, the business rules were proven in a prototype, frozen into a contract, and only then built for real, so the backend can be checked line by line against what was agreed.',
    note: 'A client build in progress. The reference server runs today; the production backend is being built against it.',
    sequence: true,
    stages: [
      { verb: 'Prove', project: 'Prototype', line: '46 business rules for stock, transfers, production, cash handovers and discrepancies, worked through as a clickable prototype.', status: 'prototype', href: '/work#upholstery-ops' },
      { verb: 'Contract', project: 'API contract', line: 'Every endpoint and payload, a role-to-action permission map, and all 154 refusal messages written out word for word.', status: 'build', href: '/work#upholstery-ops' },
      { verb: 'Reference', project: 'Reference server', line: 'A small server that implements the contract over the original rules, so real responses can be compared against it.', status: 'build', href: '/work#upholstery-ops' },
      { verb: 'Client', project: 'React PWA', line: 'Screens with no business logic and no stored state. It asks the server and shows the answer.', status: 'build', href: '/work#upholstery-ops' },
      { verb: 'Backend', project: 'Laravel + PostgreSQL', line: 'Server-enforced permissions for all 46 actions and an append-only audit ledger. 11 tests, 145 assertions.', status: 'build', href: '/work#upholstery-ops' },
    ],
  },
  {
    id: 'collection',
    tab: 'Signal collection',
    title: 'One collection pattern, four uses.',
    thesis:
      'Read public sources on a schedule, de-duplicate, keep the original source, and put a person between what was collected and what is asserted. The same pattern runs under four different jobs.',
    note: 'Listed from the most established use to the most experimental.',
    sequence: false,
    stages: [
      { verb: 'Tenders', project: 'Tender discovery in the CRM', line: 'System-found tenders appear on the same calendar as the pipeline, so an RFP always has an owner.', status: 'live', href: '/work/crm-product-ownership' },
      { verb: 'Prospects', project: 'MEVA Console', line: 'Extraction with field validation and rate-limit guardrails before any AI step, and a search signature so re-runs never repeat a segment.', status: 'live', href: '/work/b2g-gtm-pipeline' },
      { verb: 'Programmes', project: 'defense.auto', line: 'Five source connectors feed an evidence inbox. Capturing a document never asserts a fact on its own; an editor publishes.', status: 'pilot', href: '/work#defense-auto' },
      { verb: 'Roles', project: 'Hunt', line: 'Public job-board feeds every six hours, de-duplicated by source and content fingerprint, with persistent run records.', status: 'pilot', href: '/work#hunt' },
    ],
  },
  {
    id: 'product',
    tab: 'Consumer product',
    title: 'One product, owned whole.',
    thesis:
      'Let’s Go carries a trip from plan to travel to memory. It is the one build here with no client and no employer: product, design system, mobile app, API and web, all by one person.',
    note: 'In development. iOS first; not yet released.',
    sequence: false,
    stages: [
      { verb: 'Product', project: 'Let’s Go', line: 'Plan, travel, relive. The plan and the journal of what actually happened are separate records.', status: 'build', href: '/work#letsgo' },
      { verb: 'Design', project: 'Design system', line: 'Colour, type, motion and surface rules written down, with tests that enforce them.', status: 'build', href: '/work#letsgo' },
      { verb: 'Mobile', project: 'Expo app', line: 'Portrait, iOS-first, built to Apple’s interface guidelines.', status: 'build', href: '/work#letsgo' },
      { verb: 'API', project: 'Fastify + Prisma', line: 'One API behind both clients, with 321 test files across the workspace.', status: 'build', href: '/work#letsgo' },
      { verb: 'Web', project: 'Tripstory', line: 'A standalone browser interface on the same API, with a sample mode that needs no account.', status: 'build', href: '/work#letsgo' },
    ],
  },
];

export const chainStatus = {
  live: 'Live',
  internal: 'Internal',
  built: 'Built',
  build: 'In development',
  pilot: 'Pilot',
  prototype: 'Prototype',
};

// Design decisions that show up again and again, with where each one lives.
export const principles = [
  {
    title: 'A person makes the call.',
    body: 'Automation does the collecting, scoring and drafting. The decision that carries risk stays with someone accountable.',
    where: [
      ['B2G pipeline', 'Nothing sends until a lead is approved in the review queue.'],
      ['Tender engine', 'Human review, plus a ballistic-requirement hold nobody can override.'],
      ['defense.auto', 'Captured evidence waits in an inbox until an editor publishes it.'],
      ['Grab & Hunt', 'Emails are drafted for you to edit. No automatic applications.'],
    ],
  },
  {
    title: 'The server is the only authority.',
    body: 'The screen asks; the database decides. Rules are enforced where they cannot be bypassed.',
    where: [
      ['Production tracker', 'Stage updates go through database procedures only.'],
      ['Upholstery operations', 'Every one of 46 actions is permission-checked on the server. PINs are stored only as hashes.'],
      ['Ledge & Keel', 'Each organisation’s rows are isolated at the database, and the browser never sees a credential.'],
    ],
  },
  {
    title: 'Every change leaves a trail.',
    body: 'If a number or a record changed, you can find out when, and from what.',
    where: [
      ['Upholstery operations', 'An append-only audit ledger.'],
      ['Ledge & Keel', 'Original statement files kept with their lineage; reclassifications and deletions recorded.'],
      ['Tender engine', 'The generated document traces each answer back to its requirement.'],
      ['MEVAConnect', 'An audit trail across every stage gate.'],
    ],
  },
  {
    title: 'Samples are labelled as samples.',
    body: 'Illustrative content is marked where the reader meets it, not in a footnote.',
    where: [
      ['Duchè Gebba', 'Sample listings carry a sample label in the shop itself.'],
      ['Northline Rover Works', 'The case-study section is marked as sample content.'],
      ['Tripstory', 'Opens in a named sample mode.'],
      ['This site', 'Diagrams are called diagrams. Prototypes are called prototypes.'],
    ],
  },
];
