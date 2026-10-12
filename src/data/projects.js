// Single source for the four documented systems. Copy is carried over from
// the original Built Work section — do not add claims here that the
// case-study pages cannot back up.
export const projects = [
  {
    slug: 'b2g-gtm-pipeline',
    cover: 'pipeline',
    label: 'B2G Extraction',
    title: 'B2G Procurement Data Extraction Workflow',
    desc: 'Automated workflows for sourcing and structuring defense and procurement-related contact data from public sources.',
    flow: ['Identify target sources', 'Run Python/Apify extraction', 'Clean fields', 'Prepare CRM-ready output', 'Campaign handoff'],
    tools: ['Python', 'Apify', 'LinkedIn Ads', 'CRM Workflows'],
    proof: 'Architecture diagram, sanitized extraction log, source map and cleaned output sample.',
    href: '/work/b2g-gtm-pipeline',
  },
  {
    slug: 'crm-product-ownership',
    cover: 'crm',
    label: 'Custom CRM',
    title: 'Custom CRM Product Ownership',
    desc: 'Structured CRM logic and dashboards for long-cycle global sales activity across B2B and B2G markets.',
    flow: ['Map sales stages', 'Define custom fields', 'Align lifecycle views', 'Support pipeline reporting', 'Management dashboard'],
    tools: ['Custom CRM', 'Salesforce', 'Zoho', 'Power BI'],
    proof: 'Sanitized CRM workflow map, lifecycle structure and pipeline reporting view.',
    href: '/work/crm-product-ownership',
  },
  {
    slug: 'tender-compliance-engine',
    cover: 'tender',
    label: 'Tender Engine',
    title: 'Tender Compliance Matrix Engine',
    desc: 'A shipped FastAPI + React system that turns defense tender PDFs into reviewed compliance matrices — with an un-overridable safety hold on ballistic requirements.',
    flow: ['Lock tender as case bible', 'Extract numbered requirements', 'Route through 6 deterministic stages', 'Human review + approved cache', 'Generate DOCX with traceability'],
    tools: ['FastAPI', 'PyMuPDF', 'React', 'Docker'],
    proof: '37/37 tests passing, e2e-verified flow, Dockerized deploy, documented limitations.',
    href: '/work/tender-compliance-engine',
  },
  {
    slug: 'production-tracker',
    cover: 'tracker',
    label: 'Production Tracker',
    title: 'Vehicle Production Tracker',
    desc: 'A Supabase-backed production console with a 14-stage rail, near-zero write access and database-enforced integrity — closing the loop from sale to delivery.',
    flow: ['Create order with unit breakdown', 'Vehicles enter 14-stage rail', 'Stage updates via RPC only', 'Views aggregate KPIs & distribution', 'Decision dashboard flags stalls'],
    tools: ['Next.js', 'Supabase', 'Vercel', 'React'],
    proof: 'Repository, schema contract (5 views, 3 RPCs), role model and deployed build.',
    href: '/work/production-tracker',
  },
];
