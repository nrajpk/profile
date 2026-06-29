import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BellRing,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  FileText,
  Filter,
  Gauge,
  Globe2,
  Mail,
  Menu,
  MousePointer2,
  Network,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';

const navLinks = [
  { label: 'Overview', href: '#zoho-overview' },
  { label: 'Automate', href: '#zoho-journey' },
  { label: 'Control', href: '#zoho-systems' },
  { label: 'Scale', href: '#zoho-proof' },
  { label: 'Lab', href: '#zoho-lab' },
  { label: 'FAQ', href: '#zoho-faq' },
];

const relatedProducts = [
  { label: 'Signal Mining', note: 'Public sources into clean records', icon: Database },
  { label: 'CRM Operations', note: 'Fields, stages and ownership logic', icon: Network },
  { label: 'Workflow Routing', note: 'Webhooks, review gates and alerts', icon: Workflow },
  { label: 'Analytics Layer', note: 'GA4, GTM and dashboard clarity', icon: BarChart3 },
];

const trustItems = [
  'Python',
  'Apify',
  'n8n',
  'REST APIs',
  'Webhooks',
  'Salesforce',
  'Zoho',
  'GA4',
  'GTM',
  'LinkedIn Ads',
  'Power BI',
  'Figma',
  'GitHub',
  'Prompt Specs',
  'CRM Payloads',
];

const journeyModes = {
  automate: {
    label: 'Automate',
    title: 'Automation that enhances the operator experience.',
    kicker: 'Clean handoffs instead of copy-paste heroics',
    trip: 'Campaign sourcing run',
    planTitle: 'Plan workflow',
    plan: ['Source map', 'ICP rules', 'Output schema'],
    approver: 'Human review gate',
    approverRole: 'Quality control',
    eventLabel: 'Signal captured',
    meetupLabel: 'Enrichment pass',
    reportTitle: 'Add to CRM',
    report: ['Owner assigned', 'Status logged', 'Next action queued'],
    sideNote: 'Automate the repeatable parts. Keep judgment visible.',
  },
  control: {
    label: 'Control',
    title: 'Control that keeps messy growth from leaking downstream.',
    kicker: 'Rules, exclusions and checkpoints where they matter',
    trip: 'Lead quality review',
    planTitle: 'Check filters',
    plan: ['Role match', 'Region fit', 'Exclusion rules'],
    approver: 'Decision checkpoint',
    approverRole: 'Manual override',
    eventLabel: 'Mismatch flagged',
    meetupLabel: 'Record repaired',
    reportTitle: 'Release clean record',
    report: ['Reason attached', 'Source preserved', 'Audit trail saved'],
    sideNote: 'Control is not bureaucracy. It is fewer surprises later.',
  },
  scale: {
    label: 'Scale',
    title: 'Scale that stays understandable when volume increases.',
    kicker: 'Reporting, routing and proof trails built for repeat use',
    trip: 'Multi-market GTM loop',
    planTitle: 'Set operating model',
    plan: ['Input standard', 'Routing logic', 'Dashboard view'],
    approver: 'Leadership view',
    approverRole: 'Pipeline clarity',
    eventLabel: 'Market signal',
    meetupLabel: 'Sales handoff',
    reportTitle: 'Report outcome',
    report: ['Channel view', 'Quality trend', 'Action summary'],
    sideNote: 'Scale should make the system clearer, not louder.',
  },
};

const systemTabs = {
  source: {
    label: 'Source',
    title: 'Find useful public signals before they become messy spreadsheets.',
    eyebrow: 'Data intake layer',
    desc: 'Searchable sources, keyword logic, structured extraction and clean field naming so GTM work starts with usable inputs.',
    bullets: ['Public source map', 'Apify/Python extraction', 'CSV/JSON cleanup', 'Source confidence tags'],
    metric: '01',
  },
  shape: {
    label: 'Shape',
    title: 'Turn raw records into campaign-ready operating data.',
    eyebrow: 'Normalization layer',
    desc: 'Company, contact, domain, role and region fields are cleaned before they touch CRM, dashboards or enrichment tools.',
    bullets: ['Field normalization', 'Duplicate checks', 'ICP rules', 'Exclusion filters'],
    metric: '02',
  },
  route: {
    label: 'Route',
    title: 'Move the right record to the right workflow with fewer loose ends.',
    eyebrow: 'Workflow layer',
    desc: 'Webhooks, status checks, Slack-style alerts and human approval points keep automation useful instead of theatrical.',
    bullets: ['Webhook payloads', 'Routing rules', 'Review queue', 'Failure states'],
    metric: '03',
  },
  report: {
    label: 'Report',
    title: 'Make the output explainable enough for sales and leadership.',
    eyebrow: 'Decision layer',
    desc: 'The useful end state is not a pretty dashboard. It is a clean answer to what changed, why it changed and what to do next.',
    bullets: ['Attribution logic', 'Pipeline status', 'Source analysis', 'Next-step clarity'],
    metric: '04',
  },
};

const proofCards = [
  {
    title: 'B2G Procurement Signal Workflow',
    summary: 'Public procurement and fleet-related signals converted into cleaner sourcing records.',
    tags: ['Python', 'Apify', 'CRM-ready CSV'],
    flow: ['Source map', 'Extraction', 'Cleanup', 'Review', 'Campaign handoff'],
  },
  {
    title: 'CRM Product Ownership',
    summary: 'Long-cycle B2B/B2G pipeline logic, fields, dashboards and lifecycle visibility.',
    tags: ['Custom CRM', 'Salesforce', 'Power BI'],
    flow: ['Fields', 'Stages', 'Views', 'Ownership', 'Reporting'],
  },
  {
    title: 'Ads + Analytics Operating Setup',
    summary: 'Paid acquisition tracking connected to GA4/GTM and campaign-quality review.',
    tags: ['Google Ads', 'GA4', 'GTM'],
    flow: ['UTM logic', 'Events', 'Conversions', 'Dashboard', 'Review'],
  },
];

const labCards = [
  {
    icon: Code2,
    title: 'Enrichment waterfall',
    status: 'Building',
    desc: 'Fallback logic across enrichment providers with clean output tagging.',
  },
  {
    icon: BellRing,
    title: 'Lead router',
    status: 'Prototype',
    desc: 'Webhook-style routing from parsed request to alert, owner and next action.',
  },
  {
    icon: Filter,
    title: 'ICP review engine',
    status: 'Planned',
    desc: 'Rules-first scoring, exclusions and explainable qualification notes.',
  },
];

const testimonialSlides = [
  {
    quote: 'The value is not the tool list. It is the way records move from source to decision without losing context.',
    name: 'Operating principle',
    role: 'GTM systems layer',
  },
  {
    quote: 'Good automation keeps the human review point visible. Bad automation just hides the mess faster.',
    name: 'Build standard',
    role: 'Workflow governance',
  },
  {
    quote: 'A dashboard is only useful when the upstream definitions are boring, stable and shared.',
    name: 'Reporting rule',
    role: 'Analytics discipline',
  },
];

const faqs = [
  {
    q: 'Is this page replacing the current homepage?',
    a: 'No. This is an additional Astro route at /zoho. The current nrajpk.com homepage stays as it is.',
  },
  {
    q: 'What is copied from Zoho?',
    a: 'Nothing proprietary. The page borrows UX patterns: product-style navigation, jump links, journey visualization, CTA drawer, tabs, testimonials and FAQ behavior.',
  },
  {
    q: 'What is the positioning?',
    a: 'Marketing Operations & GTM Systems Builder: data extraction, CRM workflows, campaign systems, analytics and automation with visible proof trails.',
  },
  {
    q: 'What should be added later?',
    a: 'Real proof assets: blurred dashboards, architecture screenshots, sanitized logs, sample CSVs and GitHub repo links. Without evidence, UI polish is just expensive confetti.',
  },
];

function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ZohoNav({ onCallback }) {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <div className="zoho-progress" style={{ width: `${progress}%` }} />
      <header className="zoho-topbar">
        <div className="zoho-topbar-inner">
          <div className="zoho-brand-row">
            <button className="zoho-icon-button md:hidden" aria-label="Open menu" onClick={() => setOpen(true)} type="button">
              <Menu size={18} />
            </button>
            <a className="zoho-brand" href="/">
              nrajpk<span>_</span>
            </a>
            <button className="zoho-related hidden lg:inline-flex" onClick={() => setMega(!mega)} aria-expanded={mega} type="button">
              Systems map <ChevronDown size={14} />
            </button>
          </div>

          <nav className="zoho-nav-links hidden md:flex" aria-label="Zoho profile navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="zoho-actions">
            <a href="mailto:nrajpk@outlook.com" className="zoho-login hidden sm:inline-flex">
              Email
            </a>
            <button className="zoho-signup" onClick={onCallback} type="button">
              Request map
            </button>
          </div>
        </div>

        {mega && (
          <div className="zoho-mega">
            <div className="zoho-mega-search">
              <Search size={16} />
              <span>I’m looking for cleaner GTM handoffs...</span>
            </div>
            <div className="zoho-mega-grid">
              {relatedProducts.map(({ label, note, icon: Icon }) => (
                <button key={label} onClick={() => scrollToHash('#zoho-systems')} type="button">
                  <Icon size={18} />
                  <span>{label}</span>
                  <small>{note}</small>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {open && (
        <div className="zoho-mobile-shell" role="dialog" aria-modal="true">
          <div className="zoho-mobile-panel">
            <div className="zoho-mobile-head">
              <span>nrajpk systems menu</span>
              <button className="zoho-icon-button" aria-label="Close menu" onClick={() => setOpen(false)} type="button">
                <X size={18} />
              </button>
            </div>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                <ArrowRight size={14} />
              </a>
            ))}
            <button className="zoho-mobile-cta" onClick={onCallback} type="button">
              Request workflow map
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Hero({ onCallback }) {
  return (
    <section id="zoho-overview" className="zoho-hero">
      <div className="zoho-hero-copy">
        <div className="zoho-kicker">
          <span /> GTM Systems Profile
        </div>
        <h1>Marketing works better when the operating layer is clean.</h1>
        <p>
          I connect data extraction, campaign logic, CRM workflows, analytics and AI-assisted review into systems that make growth easier to track, control and scale.
        </p>
        <div className="zoho-hero-actions">
          <a href="#zoho-journey" className="zoho-primary-btn">
            See the journey <ArrowRight size={16} />
          </a>
          <button className="zoho-secondary-btn" onClick={onCallback} type="button">
            Request workflow map
          </button>
        </div>
        <div className="zoho-hero-stats">
          {[
            ['Public → CRM', 'Signal pipeline'],
            ['Human review', 'Control preserved'],
            ['GTM systems', 'Current focus'],
          ].map(([value, label]) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="zoho-hero-card" aria-label="Profile workflow mockup">
        <div className="zoho-card-topline">
          <span>LIVE OPERATING VIEW</span>
          <span className="zoho-live-dot" />
        </div>
        <div className="zoho-profile-chip">
          <img src="/dp.jpeg" alt="Nikhil Raj PK" />
          <div>
            <strong>Nikhil Raj PK</strong>
            <span>Marketing Operations & GTM Systems Builder</span>
          </div>
        </div>
        <div className="zoho-mini-flow">
          {['Source', 'Shape', 'Route', 'Report'].map((step, i) => (
            <div key={step} className="zoho-mini-step">
              <span>{`0${i + 1}`}</span>
              <strong>{step}</strong>
              <small>{i === 0 ? 'Public signals' : i === 1 ? 'Clean fields' : i === 2 ? 'Review gate' : 'Decision view'}</small>
            </div>
          ))}
        </div>
        <div className="zoho-hero-console">
          <span>&gt; workflow.status</span>
          <strong>reviewable_output_ready</strong>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const row = [...trustItems, ...trustItems];
  return (
    <section className="zoho-trust-strip" aria-label="GTM stack strip">
      <div className="zoho-trust-title">Production and lab stack</div>
      <div className="zoho-marquee-wrap">
        <div className="zoho-marquee-track">
          {row.map((item, idx) => (
            <span key={`${item}-${idx}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const [mode, setMode] = useState('automate');
  const active = journeyModes[mode];

  return (
    <section id="zoho-journey" className="zoho-journey-section">
      <div className="zoho-jump-links" aria-label="Automate control scale jump links">
        {Object.entries(journeyModes).map(([key, item]) => (
          <button key={key} className={mode === key ? 'active' : ''} onClick={() => setMode(key)} type="button">
            {item.label}
          </button>
        ))}
      </div>

      <div className="zoho-section-head centered">
        <span>Automate / Control / Scale</span>
        <h2>{active.title}</h2>
        <p>{active.kicker}</p>
      </div>

      <div className={`zoho-journey-canvas mode-${mode}`}>
        <div className="zoho-canvas-grid" />
        <div className="zoho-journey-spine" />

        <div className="zoho-hand-note note-left">
          pre-work
          <svg viewBox="0 0 110 72" aria-hidden="true"><path d="M12 6c8 31 34 48 72 42m0 0-17-12m17 12-14 16" /></svg>
        </div>
        <div className="zoho-hand-note note-right">
          active loop
          <svg viewBox="0 0 112 72" aria-hidden="true"><path d="M92 7c-28 0-52 16-64 44m0 0 3-20m-3 20 20-8" /></svg>
        </div>
        <div className="zoho-hand-note note-bottom">
          post-handoff
          <svg viewBox="0 0 112 72" aria-hidden="true"><path d="M10 10c14 34 43 45 88 36m0 0-16-11m16 11-13 16" /></svg>
        </div>

        <div className="journey-pill top-pill">{active.trip}</div>
        <div className="journey-avatar">
          <img src="/dp.jpeg" alt="Nikhil Raj PK" />
          <span><Workflow size={22} /></span>
        </div>

        <div className="journey-card plan-card">
          <h3>{active.planTitle}</h3>
          <ul>
            {active.plan.map((item) => (
              <li key={item}><Check size={16} /> {item}</li>
            ))}
          </ul>
          <div className="journey-approval">
            <div className="approval-avatar"><ShieldCheck size={20} /></div>
            <div>
              <strong>{active.approver}</strong>
              <span>{active.approverRole}</span>
            </div>
            <Check size={18} />
          </div>
        </div>

        <div className="journey-map">
          <svg className="route-line" viewBox="0 0 900 360" preserveAspectRatio="none" aria-hidden="true">
            <path d="M420 0 L420 82 L94 82 C36 82 36 176 94 176 L795 176 C850 176 850 268 795 268 L420 268 L420 360" />
          </svg>
          <div className="map-lines" />
          <div className="map-pin pin-one"><span>{active.eventLabel}</span></div>
          <div className="map-pin pin-two"><span>{active.meetupLabel}</span></div>
        </div>

        <div className="journey-card report-card">
          <h3>{active.reportTitle}</h3>
          <ul>
            {active.report.map((item) => (
              <li key={item}><Check size={16} /> {item}</li>
            ))}
          </ul>
          <p>{active.sideNote}</p>
        </div>
      </div>
    </section>
  );
}

function SystemsTabs() {
  const [active, setActive] = useState('source');
  const tab = systemTabs[active];

  return (
    <section id="zoho-systems" className="zoho-systems">
      <div className="zoho-section-head">
        <span>Control layer</span>
        <h2>Everything that happens before the dashboard matters.</h2>
        <p>Zoho’s page is scannable because each section owns one job. This profile route uses the same logic for GTM systems: source, shape, route, report.</p>
      </div>

      <div className="zoho-system-shell">
        <div className="zoho-system-nav">
          {Object.keys(systemTabs).map((key) => (
            <button key={key} className={active === key ? 'active' : ''} onClick={() => setActive(key)} type="button">
              <span>{systemTabs[key].metric}</span>
              {systemTabs[key].label}
            </button>
          ))}
        </div>

        <div className="zoho-system-panel">
          <div>
            <span className="zoho-panel-eyebrow">{tab.eyebrow}</span>
            <h3>{tab.title}</h3>
            <p>{tab.desc}</p>
            <a href="#zoho-proof" className="zoho-link-line">
              See proof layer <ArrowRight size={16} />
            </a>
          </div>
          <div className="zoho-check-grid">
            {tab.bullets.map((item) => (
              <div key={item}>
                <Check size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section id="zoho-proof" className="zoho-proof">
      <div className="zoho-section-head light">
        <span>Scale layer</span>
        <h2>Built work shown as flows, not résumé confetti.</h2>
        <p>The goal is to let a busy visitor scan what was built, how it moves, and what proof should be shown next.</p>
      </div>
      <div className="zoho-proof-grid">
        {proofCards.map((card) => (
          <article key={card.title} className="zoho-proof-card">
            <div className="zoho-proof-status"><span /> Built</div>
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
            <div className="zoho-flow-list">
              {card.flow.map((step, idx) => (
                <div key={step}>
                  <small>{`0${idx + 1}`}</small>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <div className="zoho-tags">
              {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LabSection() {
  return (
    <section id="zoho-lab" className="zoho-lab">
      <div className="zoho-section-head">
        <span>GTM lab</span>
        <h2>Small systems, visible mechanics.</h2>
        <p>Interactive lab cards show the kind of operating details that make a profile credible instead of just pretty.</p>
      </div>
      <div className="zoho-lab-grid">
        {labCards.map(({ icon: Icon, title, status, desc }) => (
          <article key={title}>
            <div className="zoho-lab-icon"><Icon size={20} /></div>
            <span className="zoho-lab-status">{status}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="zoho-code-strip">
              <span>&gt;</span> output.schema.validated
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialSection() {
  const [active, setActive] = useState(0);
  const slide = testimonialSlides[active];

  const next = () => setActive((prev) => (prev + 1) % testimonialSlides.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonialSlides.length) % testimonialSlides.length);

  return (
    <section className="zoho-testimonials">
      <div className="zoho-quote-card">
        <Sparkles size={26} />
        <p>“{slide.quote}”</p>
        <div>
          <strong>{slide.name}</strong>
          <span>{slide.role}</span>
        </div>
      </div>
      <div className="zoho-slider-controls">
        <button onClick={prev} type="button" aria-label="Previous principle"><ChevronLeft size={18} /></button>
        <div>{testimonialSlides.map((_, idx) => <span key={idx} className={idx === active ? 'active' : ''} />)}</div>
        <button onClick={next} type="button" aria-label="Next principle"><ChevronRight size={18} /></button>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="zoho-faq" className="zoho-faq">
      <div className="zoho-section-head centered">
        <span>FAQ</span>
        <h2>More about this profile route.</h2>
      </div>
      <div className="zoho-faq-list">
        {faqs.map((item, idx) => (
          <article key={item.q} className={open === idx ? 'active' : ''}>
            <button onClick={() => setOpen(open === idx ? -1 : idx)} type="button">
              {item.q}
              <ChevronDown size={18} />
            </button>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoDrawer({ open, onClose }) {
  return (
    <div className={`zoho-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="zoho-drawer-panel">
        <button className="zoho-drawer-close" onClick={onClose} type="button" aria-label="Close workflow drawer">
          <X size={18} />
        </button>
        <span className="zoho-panel-eyebrow">Workflow map request</span>
        <h3>Send me the system you want cleaned.</h3>
        <p>Best fit: public-source research, CRM handoffs, lead review, enrichment logic, attribution cleanup or reporting systems.</p>
        <div className="zoho-drawer-checks">
          {['Input sources', 'Current bottleneck', 'Desired output', 'Human review point'].map((item) => (
            <div key={item}><Check size={16} /> {item}</div>
          ))}
        </div>
        <a href="mailto:nrajpk@outlook.com?subject=Workflow%20map%20request" className="zoho-primary-btn">
          Email workflow brief <Mail size={16} />
        </a>
      </div>
    </div>
  );
}

export default function ZohoProfilePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="zoho-profile-page">
      <ZohoNav onCallback={() => setDrawerOpen(true)} />
      <main>
        <Hero onCallback={() => setDrawerOpen(true)} />
        <TrustStrip />
        <JourneySection />
        <SystemsTabs />
        <ProofSection />
        <LabSection />
        <TestimonialSection />
        <FAQSection />
        <section className="zoho-final-cta">
          <h2>Growth should not depend on fragile handoffs.</h2>
          <p>Bring me the workflow. I’ll map the inputs, control points and output path.</p>
          <button className="zoho-primary-btn" onClick={() => setDrawerOpen(true)} type="button">
            Request workflow map <ArrowUpRight size={16} />
          </button>
        </section>
      </main>
      <button className="zoho-sticky-demo" onClick={() => setDrawerOpen(true)} type="button">
        <MousePointer2 size={15} /> Map workflow
      </button>
      <DemoDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <footer className="zoho-footer">© {year} Nikhil Raj PK · Zoho-inspired profile route · <a href="/">Back to main profile</a></footer>
    </div>
  );
}
