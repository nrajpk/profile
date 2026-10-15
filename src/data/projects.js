// Single source for the four documented systems. Copy is carried over from
// the original Built Work section — do not add claims here that the
// case-study pages cannot back up.
//
// before / after: what changed once the system shipped. Every line is
// lifted from the system's own breakdown page; keep the two in step.
export const projects = [
  {
    slug: 'b2g-gtm-pipeline',
    cover: 'pipeline',
    label: 'B2G Extraction',
    status: 'Live in production',
    title: 'B2G Procurement Data Extraction Workflow',
    desc: 'Automated workflows for sourcing and structuring defense and procurement-related contact data from public sources.',
    before: 'Hours of manual research per batch, and no clean handoff from research to outreach.',
    after: 'Sourcing, AI qualification and human approval in one event-driven pipeline. One opportunity from the first 21 emails.',
    flow: ['Identify target sources', 'Run Python/Apify extraction', 'Clean fields', 'Prepare CRM-ready output', 'Campaign handoff'],
    tools: ['Python', 'Apify', 'LinkedIn Ads', 'CRM Workflows'],
    proof: 'Architecture diagram, sanitized extraction log, source map and cleaned output sample.',
    href: '/work/b2g-gtm-pipeline',
  },
  {
    slug: 'crm-product-ownership',
    cover: 'crm',
    label: 'Custom CRM',
    status: 'Live in production',
    title: 'Custom CRM Product Ownership',
    desc: 'Structured CRM logic and dashboards for long-cycle global sales activity across B2B and B2G markets.',
    before: 'Sales ran on Excel workbooks and an Access database, passed between users.',
    after: 'A multi-user CRM, live for the sales team, with source attribution and live funnel views per role.',
    flow: ['Map sales stages', 'Define custom fields', 'Align lifecycle views', 'Support pipeline reporting', 'Management dashboard'],
    tools: ['Custom CRM', 'Salesforce', 'Zoho', 'Power BI'],
    proof: 'Sanitized CRM workflow map, lifecycle structure and pipeline reporting view.',
    href: '/work/crm-product-ownership',
  },
  {
    slug: 'tender-compliance-engine',
    cover: 'tender',
    label: 'Tender Engine',
    status: 'Shipped v1',
    title: 'Tender Compliance Matrix Engine',
    desc: 'A shipped FastAPI + React system that turns defense tender PDFs into reviewed compliance matrices — with an un-overridable safety hold on ballistic requirements.',
    before: 'Each compliance matrix was built by hand, a row at a time, over days of expert time.',
    after: 'Tender PDF in, reviewed matrix and DOCX out, with every row traced to its source clause.',
    flow: ['Lock tender as case bible', 'Extract numbered requirements', 'Route through 6 deterministic stages', 'Human review + approved cache', 'Generate DOCX with traceability'],
    tools: ['FastAPI', 'PyMuPDF', 'React', 'Docker'],
    proof: '37/37 tests passing, e2e-verified flow, Dockerized deploy, documented limitations.',
    href: '/work/tender-compliance-engine',
  },
  {
    slug: 'production-tracker',
    cover: 'tracker',
    label: 'Production Tracker',
    status: 'Deployed',
    title: 'Vehicle Production Tracker',
    desc: 'A Supabase-backed production console with a 14-stage rail, near-zero write access and database-enforced integrity — closing the loop from sale to delivery.',
    before: 'Production status lived in free-text spreadsheet remarks that no one could aggregate.',
    after: 'Every vehicle on a 14-stage rail, written by two roles and read by everyone.',
    flow: ['Create order with unit breakdown', 'Vehicles enter 14-stage rail', 'Stage updates via RPC only', 'Views aggregate KPIs & distribution', 'Decision dashboard flags stalls'],
    tools: ['Next.js', 'Supabase', 'Vercel', 'React'],
    proof: 'Repository, schema contract (5 views, 3 RPCs), role model and deployed build.',
    href: '/work/production-tracker',
  },
];
