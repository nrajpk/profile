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
  { label: 'Systems', href: '#zoho-systems' },
  { label: 'Proof', href: '#zoho-proof' },
  { label: 'Lab', href: '#zoho-lab' },
  { label: 'FAQ', href: '#zoho-faq' },
];

const relatedProducts = [
  { label: 'Data Mining', note: 'Public signals → clean records', icon: Database },
  { label: 'CRM Ops', note: 'Stages, assignment, governance', icon: Network },
  { label: 'Automation', note: 'Webhooks, routing, review loops', icon: Workflow },
  { label: 'Analytics', note: 'GA4, GTM, dashboards, source logic', icon: BarChart3 },
];

const heroStats = [
  { value: 'Public → CRM', label: 'Signal pipeline' },
  { value: 'Human review', label: 'Control preserved' },
  { value: 'GTM systems', label: 'Current focus' },
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
    a: 'Nothing proprietary. The page borrows UX patterns: sticky product-style nav, scannable sections, CTA drawer, tabs, proof strip, testimonials and FAQ behavior.',
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
            <button className="zoho-icon-button md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu size={18} />
            </button>
            <a className="zoho-brand" href="/">
              nrajpk<span>_</span>
            </a>
            <button className="zoho-related hidden lg:inline-flex" onClick={() => setMega(!mega)} aria-expanded={mega}>
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
            <button className="zoho-signup" onClick={onCallback}>
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
                <button key={label} onClick={() => scrollToHash('#zoho-systems')}>
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
              <button className="zoho-icon-button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                <ArrowRight size={15} />
              </a>
            ))}
            <button className="zoho-mobile-cta" onClick={() => { setOpen(false); onCallback(); }}>
              Request systems map
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Hero({ onCallback }) {
  return (
    <section className="zoho-hero" id="zoho-overview">
      <div className="zoho-hero-copy">
        <div className="zoho-eyebrow">Zoho-style profile route / ultra-scannable GTM systems page</div>
        <h1>Marketing works better when the operating system behind it is clean.</h1>
        <p>
          I build practical GTM systems across public data extraction, CRM workflows, campaign tracking,
          enrichment logic, reporting views and AI-assisted review loops.
        </p>
        <div className="zoho-hero-actions">
          <a href="#zoho-proof" className="zoho-primary-btn">
            View built work <ArrowUpRight size={15} />
          </a>
          <button className="zoho-secondary-btn" onClick={onCallback}>
            <Play size={14} /> Map my workflow
          </button>
        </div>
        <div className="zoho-hero-statrow">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="zoho-hero-panel" aria-label="Systems readiness panel">
        <div className="zoho-panel-top">
          <span>GTM operating layer</span>
          <span className="zoho-live-dot">live map</span>
        </div>
        <div className="zoho-flow-card active">
          <Database size={20} />
          <div>
            <strong>Source signal</strong>
            <span>Public records, LinkedIn search, campaign context</span>
          </div>
        </div>
        <div className="zoho-flow-card">
          <Filter size={20} />
          <div>
            <strong>Clean + qualify</strong>
            <span>ICP rules, exclusions, dedupe, field structure</span>
          </div>
        </div>
        <div className="zoho-flow-card">
          <Workflow size={20} />
          <div>
            <strong>Route to action</strong>
            <span>CRM payload, owner, alert, proof trail</span>
          </div>
        </div>
        <div className="zoho-mini-console">
          <span>&gt; request parsed</span>
          <span>&gt; filters mapped</span>
          <span>&gt; human review preserved</span>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [...trustItems, ...trustItems];
  return (
    <section className="zoho-trust" aria-label="Tool and workflow strip">
      <span className="zoho-trust-title">Stack signals</span>
      <div className="zoho-trust-window">
        <div className="zoho-trust-track">
          {items.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemsTabs() {
  const [activeKey, setActiveKey] = useState('source');
  const active = systemTabs[activeKey];

  return (
    <section className="zoho-systems" id="zoho-systems">
      <div className="zoho-section-head">
        <span>Expense-control tabs → profile systems tabs</span>
        <h2>Four checks before a workflow deserves automation.</h2>
        <p>Zoho makes dense product capability scannable through progressive panels. Here the same pattern maps your GTM work into source, shape, route and report.</p>
      </div>

      <div className="zoho-system-shell">
        <div className="zoho-system-nav" role="tablist" aria-label="GTM system layers">
          {Object.entries(systemTabs).map(([key, item]) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeKey === key}
              className={activeKey === key ? 'active' : ''}
              onClick={() => setActiveKey(key)}
            >
              <span>{item.metric}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="zoho-system-panel">
          <div className="zoho-system-copy">
            <span>{active.eyebrow}</span>
            <h3>{active.title}</h3>
            <p>{active.desc}</p>
          </div>
          <div className="zoho-system-list">
            {active.bullets.map((bullet) => (
              <div key={bullet}>
                <Check size={15} />
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofCards() {
  return (
    <section className="zoho-proof" id="zoho-proof">
      <div className="zoho-section-head light">
        <span>Customer logo slider → built-work proof cards</span>
        <h2>Production work, kept factual and fast to scan.</h2>
        <p>No invented revenue numbers. No hero cosplay. Just the system, flow, tools and proof trail that should be shown.</p>
      </div>
      <div className="zoho-proof-grid">
        {proofCards.map((card) => (
          <article key={card.title} className="zoho-proof-card">
            <div className="zoho-proof-icon">
              <ShieldCheck size={22} />
              <span>Built</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
            <div className="zoho-proof-flow">
              {card.flow.map((step, index) => (
                <React.Fragment key={step}>
                  <span>{step}</span>
                  {index < card.flow.length - 1 && <i />}
                </React.Fragment>
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
    <section className="zoho-lab" id="zoho-lab">
      <div className="zoho-lab-left">
        <span>Journey animation → lab workflow path</span>
        <h2>From raw signal to usable decision.</h2>
        <p>
          The lab section behaves like a product walkthrough: compact, visual and structured around the actual operating path.
        </p>
        <div className="zoho-journey">
          {['Request', 'Parse', 'Qualify', 'Route', 'Report'].map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="zoho-lab-grid">
        {labCards.map(({ icon: Icon, title, status, desc }) => (
          <article key={title}>
            <div>
              <Icon size={20} />
              <span>{status}</span>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialPanel() {
  const [index, setIndex] = useState(0);
  const slide = testimonialSlides[index];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonialSlides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="zoho-testimonial" aria-label="Profile principles carousel">
      <div className="zoho-quote-mark">“</div>
      <p>{slide.quote}</p>
      <div className="zoho-testimonial-bottom">
        <div>
          <strong>{slide.name}</strong>
          <span>{slide.role}</span>
        </div>
        <div className="zoho-slider-controls">
          <button onClick={() => setIndex((index - 1 + testimonialSlides.length) % testimonialSlides.length)} aria-label="Previous principle">
            <ChevronLeft size={16} />
          </button>
          {testimonialSlides.map((item, i) => (
            <button
              key={item.name}
              className={i === index ? 'active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`Show principle ${i + 1}`}
            />
          ))}
          <button onClick={() => setIndex((index + 1) % testimonialSlides.length)} aria-label="Next principle">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="zoho-faq" id="zoho-faq">
      <div className="zoho-section-head">
        <span>Zoho FAQ accordion → route clarity</span>
        <h2>Questions this page answers before anyone gets irritated.</h2>
      </div>
      <div className="zoho-faq-list">
        {faqs.map((item, index) => (
          <article key={item.q} className={open === index ? 'open' : ''}>
            <button onClick={() => setOpen(open === index ? -1 : index)}>
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

function CallbackDrawer({ open, setOpen }) {
  return (
    <>
      <button className={`zoho-floating-demo ${open ? 'hide' : ''}`} onClick={() => setOpen(true)} aria-label="Open workflow drawer">
        <span>Workflow map</span>
        <MousePointer2 size={18} />
      </button>
      <aside className={`zoho-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="zoho-drawer-close" onClick={() => setOpen(false)} aria-label="Close drawer">
          <X size={18} />
        </button>
        <span className="zoho-drawer-eyebrow">Request callback pattern → profile CTA drawer</span>
        <h3>Map the workflow before adding more tools.</h3>
        <p>Use this route to show how your profile page can feel product-like without turning into a circus of cards, sliders and startup incense.</p>
        <div className="zoho-drawer-checks">
          {['Source quality', 'CRM handoff', 'Human review', 'Reporting clarity'].map((item) => (
            <div key={item}><Check size={14} /> {item}</div>
          ))}
        </div>
        <a href="mailto:nrajpk@outlook.com" className="zoho-primary-btn">Email Nikhil <Mail size={15} /></a>
      </aside>
    </>
  );
}

export default function ZohoProfilePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const mapping = useMemo(() => [
    ['Zoho global header / product nav', 'Fixed profile nav + systems mega menu'],
    ['Hero CTA and product panel', 'GTM systems hero + workflow readiness card'],
    ['Trusted-by horizontal strip', 'Tool and workflow signal marquee'],
    ['Feature control tabs', 'Source / Shape / Route / Report tabs'],
    ['Customer proof cards', 'Built-work proof cards'],
    ['Journey animation', 'Raw signal → decision lab path'],
    ['Demo request drawer', 'Workflow map drawer'],
    ['FAQ accordion', 'Route and positioning FAQ'],
  ], []);

  return (
    <div className="zoho-profile-page">
      <ZohoNav onCallback={() => setDrawerOpen(true)} />
      <main>
        <Hero onCallback={() => setDrawerOpen(true)} />
        <section className="zoho-mapping" aria-label="Zoho to profile UI mapping">
          <div className="zoho-mapping-head">
            <Sparkles size={18} />
            <span>Precise UI mapping</span>
          </div>
          <div className="zoho-mapping-grid">
            {mapping.map(([zoho, profile]) => (
              <div key={zoho}>
                <small>{zoho}</small>
                <strong>{profile}</strong>
              </div>
            ))}
          </div>
        </section>
        <TrustStrip />
        <SystemsTabs />
        <ProofCards />
        <LabSection />
        <TestimonialPanel />
        <FAQ />
        <section className="zoho-final-cta">
          <FileText size={24} />
          <h2>Same profile. Faster scan. More product-like proof.</h2>
          <p>The route is designed to sit at <strong>/zoho</strong> while your existing homepage remains untouched.</p>
          <a href="mailto:nrajpk@outlook.com">Start a systems conversation</a>
        </section>
      </main>
      <CallbackDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </div>
  );
}
