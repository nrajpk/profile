// The handoff chain — carried over from the original GTM Stack Map.
export const chain = [
  { n: '01', verb: 'Source', line: 'Find the signal', tools: ['Python', 'Apify', 'Apollo', 'LinkedIn'] },
  { n: '02', verb: 'Enrich', line: 'Complete the record', tools: ['REST APIs', 'Waterfall logic', 'CSV/JSON'] },
  { n: '03', verb: 'Qualify', line: 'Score against ICP', tools: ['LLM APIs', 'Prompt specs', 'JSON output'] },
  { n: '04', verb: 'Approve', line: 'A human decides', tools: ['Airtable', 'Review console'], human: true },
  { n: '05', verb: 'Send', line: 'Reach out, carefully', tools: ['Instantly', 'Smartlead', 'n8n', 'Webhooks'] },
  { n: '06', verb: 'Track', line: 'Measure what matters', tools: ['GA4', 'GTM', 'MS Clarity'] },
  { n: '07', verb: 'Report', line: 'One version of truth', tools: ['Power BI', 'Custom CRM', 'SQL'] },
];

export const craft = [
  'Google Ads', 'Meta Ads', 'LinkedIn Campaign Manager', 'GA4', 'GTM', 'MS Clarity',
  'Landing Pages / CRO', 'Email Campaigns', 'Figma', 'Adobe Suite', 'Content & Creative Ops',
];

export const ecosystem = [
  'Salesforce', 'Zoho', 'HubSpot', 'Clay', 'ZoomInfo', 'Clearbit', 'Make',
  'Zapier', '6sense', 'Gong', 'Snowflake', 'BigQuery', 'Google Ads',
  'Meta Ads', 'Figma', 'GitHub', 'Supabase', 'Next.js', 'FastAPI',
];

export const measurement = [
  { l: 'GTM Events', v: 'Configured per campaign' },
  { l: 'GA4 Conversions', v: 'Mapped to pipeline' },
  { l: 'Source Attribution', v: 'Campaign → CRM' },
  { l: 'Reporting Views', v: 'Built in Power BI' },
];
