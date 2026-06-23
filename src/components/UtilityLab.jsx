import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Database,
  Activity,
  Play,
  Code2,
  Terminal,
  Route,
  Bot,
  BellRing,
  ScanSearch,
  Github,
  FileText,
  ExternalLink,
  CheckCircle2,
  Clock3,
  CircleDashed
} from "lucide-react";

const statusStyles = {
  available: {
    label: "Available",
    className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    icon: <CheckCircle2 size={12} />
  },
  building: {
    label: "Building",
    className: "bg-zapier/10 text-zapier border-zapier/20",
    icon: <Clock3 size={12} />
  },
  planned: {
    label: "Planned",
    className: "bg-stone-100 text-stone-400 border-stone-200",
    icon: <CircleDashed size={12} />
  }
};

const AssetIcon = ({ type }) => {
  const className = "w-4 h-4";

  switch (type) {
    case "repo":
      return <Github className={className} />;
    case "workflow":
      return <Route className={className} />;
    case "backend":
      return <Code2 className={className} />;
    case "data":
      return <Database className={className} />;
    case "diagram":
      return <BarChart3 className={className} />;
    case "video":
      return <Play className={className} />;
    case "terminal":
      return <Terminal className={className} />;
    case "proof":
      return <Activity className={className} />;
    default:
      return <FileText className={className} />;
  }
};

const StatusPill = ({ status }) => {
  const config = statusStyles[status] || statusStyles.planned;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[8px] font-bold uppercase tracking-widest ${config.className}`}
    >
      {config.icon}
      {config.label}
    </span>
  );
};

const AssetItem = ({ asset }) => {
  const content = (
    <div className="flex items-start justify-between gap-4 w-full">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 h-8 w-8 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-zapier transition-colors">
          <AssetIcon type={asset.type} />
        </div>

        <div>
          <p className="text-sm font-bold text-stone-900 leading-tight">
            {asset.label}
          </p>

          {asset.note && (
            <p className="text-xs text-stone-400 mt-1 leading-relaxed">
              {asset.note}
            </p>
          )}
        </div>
      </div>

      <StatusPill status={asset.status} />
    </div>
  );

  if (asset.href && asset.href !== "#") {
    return (
      <a
        href={asset.href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-start justify-between gap-4 p-4 bg-stone-50 hover:bg-white border border-stone-100 rounded-2xl transition-all duration-300"
      >
        {content}
        <ExternalLink size={14} className="text-stone-300 group-hover:text-zapier transition-colors" />
      </a>
    );
  }

  return (
    <div className="group flex items-start justify-between gap-4 p-4 bg-stone-50 border border-stone-100 rounded-2xl transition-all duration-300">
      {content}
    </div>
  );
};

const AssetGroup = ({ title, intro, items }) => (
  <div>
    <div className="mb-4">
      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-stone-400">
        {title}
      </p>

      {intro && (
        <p className="text-xs text-stone-400 leading-relaxed mt-2">
          {intro}
        </p>
      )}
    </div>

    <div className="grid grid-cols-1 gap-3">
      {items.map((asset) => (
        <AssetItem key={asset.label} asset={asset} />
      ))}
    </div>
  </div>
);

const EnrichmentDemo = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-4 border border-stone-800 group/demo">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">
          enrichment_waterfall.py
        </span>

        <button
          onClick={() => setActive(!active)}
          className="text-zapier hover:text-white transition-colors"
          aria-label="Run demo"
          type="button"
        >
          <Play size={12} fill={active ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="space-y-1.5 overflow-hidden">
        <p className="text-stone-600 font-bold leading-none animate-pulse italic">
          &gt; reading raw_contacts.csv...
        </p>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              className="space-y-1 text-blue-400 border-l border-blue-900/50 pl-2 ml-1"
            >
              <p>&gt; Provider_A: no email found</p>
              <p>&gt; routing fallback to Provider_B</p>
              <p className="text-green-400 font-bold">
                &gt; output: enriched_record.csv
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const RouterDemo = () => (
  <div className="mt-4 p-4 bg-stone-950 rounded-xl border border-stone-800 font-mono text-[9px]">
    <div className="flex items-center gap-2 mb-3">
      <div className="px-1.5 py-0.5 bg-zapier/20 text-zapier rounded border border-zapier/30">
        WEBHOOK
      </div>

      <span className="text-stone-600">→</span>

      <span className="text-blue-400 font-bold uppercase tracking-tighter">
        Slack Alert
      </span>
    </div>

    <div className="space-y-2">
      <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "74%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-full bg-zapier"
        />
      </div>

      <div className="flex justify-between text-stone-500 uppercase tracking-widest">
        <span>Lead parsed</span>
        <span>route: gcc</span>
      </div>
    </div>
  </div>
);

const ScoringDemo = () => {
  const [active, setActive] = useState("score");

  return (
    <div className="mt-4 p-4 bg-stone-50 rounded-xl border border-stone-200 font-mono text-[9px]">
      <div className="flex gap-2 mb-3">
        {["score", "rules"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            type="button"
            className={`px-2 py-1 rounded uppercase font-bold ${
              active === tab
                ? "bg-stone-900 text-white"
                : "bg-white text-stone-400 border border-stone-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
        >
          {active === "score" ? (
            <div className="text-stone-500 leading-relaxed">
              &#123; "fit_score": 78,
              <br />
              "reason": "fleet and procurement signal present" &#125;
            </div>
          ) : (
            <div className="text-stone-500 leading-relaxed">
              rules: title_match, market_fit,
              <br />
              public_signal, exclusion_filter
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SignalHarvesterDemo = () => (
  <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl font-mono text-[8px] text-stone-400 uppercase tracking-[0.18em] bg-white">
    <div className="flex items-center gap-2 mb-3">
      <ScanSearch size={12} className="text-zapier animate-pulse" />
      Public signal monitor
    </div>

    <div className="space-y-2">
      {["source_url", "rfp_keyword", "company_domain"].map((item) => (
        <div
          key={item}
          className="flex justify-between border-b border-stone-100 pb-1"
        >
          <span>{item}</span>
          <span className="text-stone-300">queued</span>
        </div>
      ))}
    </div>
  </div>
);

const labProjects = [
  {
    id: "enrichment-waterfall",
    title: "Custom Enrichment Waterfall",
    desc: "A Python-based workflow for testing fallback logic across multiple enrichment sources.",
    status: "Building",
    tech: "Python / REST APIs / CSV",
    icon: <Database size={20} />,
    proof: "Code log, fallback diagram, terminal output and sample enriched CSV.",
    systemLine:
      "Shows how raw prospect records move through provider checks, fallback logic, and clean output generation.",
    workflow: [
      "Read raw contact CSV",
      "Query Provider A",
      "Check response quality",
      "Route missing records to Provider B",
      "Export enriched record with source tag"
    ],
    assets: {
      build: [
        {
          label: "GitHub Repo",
          type: "repo",
          status: "building",
          note: "Clean README, setup steps, sample script and .env example."
        },
        {
          label: "Python Fallback Script",
          type: "backend",
          status: "building",
          note: "Provider routing logic and output writer."
        },
        {
          label: "Sample Input CSV",
          type: "data",
          status: "available",
          note: "Small anonymized dataset for local testing."
        },
        {
          label: "Sample Output CSV",
          type: "data",
          status: "planned",
          note: "Enriched output with provider source tag."
        },
        {
          label: "Waterfall Architecture Diagram",
          type: "diagram",
          status: "planned",
          note: "Visual map of provider fallback flow."
        }
      ],
      proof: [
        {
          label: "Terminal Run",
          type: "terminal",
          status: "planned",
          note: "Screen capture showing fallback routing."
        },
        {
          label: "Code Log",
          type: "proof",
          status: "building",
          note: "Short development notes and commits."
        },
        {
          label: "Demo Walkthrough",
          type: "video",
          status: "planned",
          note: "Short video showing input, run and output."
        }
      ]
    },
    demo: <EnrichmentDemo />
  },
  {
    id: "procurement-signal-harvester",
    title: "B2B Procurement Signal Harvester",
    desc: "A lab version of the sourcing workflow, focused on public procurement and business signals.",
    status: "Building",
    tech: "Python / Apify / n8n / CRM Prep",
    icon: <ScanSearch size={20} />,
    proof: "Source map, extraction log, sanitized output structure and workflow screenshot.",
    systemLine:
      "Maps public source monitoring, extraction, normalization and CRM-ready output into one visible build trail.",
    workflow: [
      "Monitor public sources",
      "Extract signal payload",
      "Normalize source data",
      "Prepare CRM-ready record",
      "Log proof output"
    ],
    assets: {
      build: [
        {
          label: "GitHub Repo",
          type: "repo",
          status: "building",
          note: "Project README, source map, parser and sample output."
        },
        {
          label: "n8n Workflow",
          type: "workflow",
          status: "planned",
          note: "Scheduled trigger, source monitor, parser and output node."
        },
        {
          label: "Python Parser",
          type: "backend",
          status: "building",
          note: "Payload cleanup and field normalization."
        },
        {
          label: "Source Map CSV",
          type: "data",
          status: "available",
          note: "List of public sources and keywords to monitor."
        },
        {
          label: "Architecture Diagram",
          type: "diagram",
          status: "available",
          note: "Source to scraper to parser to CRM-prep flow."
        }
      ],
      proof: [
        {
          label: "Extraction Log",
          type: "terminal",
          status: "planned",
          note: "Sanitized run log from scraper or parser."
        },
        {
          label: "n8n Execution Screenshot",
          type: "workflow",
          status: "planned",
          note: "Workflow run showing successful node execution."
        },
        {
          label: "Demo Video",
          type: "video",
          status: "planned",
          note: "35 to 45 second walkthrough for website embed."
        }
      ]
    },
    demo: <SignalHarvesterDemo />
  },
  {
    id: "inbound-signal-router",
    title: "Real-Time Inbound Signal Router",
    desc: "Webhook-based routing for form submissions, rule checks and instant team alerts.",
    status: "Planned",
    tech: "Webhooks / n8n / Slack API",
    icon: <BellRing size={20} />,
    proof: "Form demo, Slack alert screenshot, routing logic and CRM update view.",
    systemLine:
      "Makes speed-to-lead visible through form capture, rule-based routing and alert delivery.",
    workflow: [
      "Capture web form payload",
      "Parse lead fields",
      "Apply routing rules",
      "Send Slack alert",
      "Prepare CRM update"
    ],
    assets: {
      build: [
        {
          label: "Demo Form",
          type: "code",
          status: "planned",
          note: "Simple HTML form for triggering the workflow."
        },
        {
          label: "n8n Router Workflow",
          type: "workflow",
          status: "planned",
          note: "Webhook, rule logic, Slack alert and CRM-prep nodes."
        },
        {
          label: "Routing Rules JSON",
          type: "data",
          status: "planned",
          note: "Region, company type and urgency mapping."
        },
        {
          label: "Slack Alert Template",
          type: "proof",
          status: "planned",
          note: "Formatted alert with lead and assignment details."
        }
      ],
      proof: [
        {
          label: "Form Submission Demo",
          type: "video",
          status: "planned",
          note: "Screen recording of form to alert flow."
        },
        {
          label: "Slack Alert Screenshot",
          type: "proof",
          status: "planned",
          note: "Visual proof of instant notification."
        },
        {
          label: "Workflow Screenshot",
          type: "workflow",
          status: "planned",
          note: "n8n execution view."
        }
      ]
    },
    demo: <RouterDemo />
  },
  {
    id: "llm-account-qualification",
    title: "LLM Account Qualification Engine",
    desc: "GPT-4o API workflow for evaluating company profiles against defined ICP criteria.",
    status: "Planned",
    tech: "OpenAI API / JSON / ICP Rules",
    icon: <Bot size={20} />,
    proof: "Prompt constraints, JSON output, scoring rules and test dataset.",
    systemLine:
      "Turns unstructured company information into a structured fit score with clear reasoning and qualification rules.",
    workflow: [
      "Input company profile",
      "Apply ICP rule prompt",
      "Call GPT-4o API",
      "Parse JSON response",
      "Output score and reason"
    ],
    assets: {
      build: [
        {
          label: "Prompt Spec",
          type: "proof",
          status: "building",
          note: "System prompt, scoring criteria and exclusion rules."
        },
        {
          label: "Python API Script",
          type: "backend",
          status: "planned",
          note: "CSV reader, API call and JSON parser."
        },
        {
          label: "Test Dataset",
          type: "data",
          status: "planned",
          note: "Small sample of company profiles for scoring."
        },
        {
          label: "Scoring Output JSON",
          type: "data",
          status: "planned",
          note: "Fit score, reason and rule matches."
        }
      ],
      proof: [
        {
          label: "Prompt Constraint Screenshot",
          type: "proof",
          status: "planned",
          note: "Shows how the model is controlled."
        },
        {
          label: "JSON Output Sample",
          type: "data",
          status: "planned",
          note: "Valid structured output from test companies."
        },
        {
          label: "Demo Walkthrough",
          type: "video",
          status: "planned",
          note: "Short recording of scoring workflow."
        }
      ]
    },
    demo: <ScoringDemo />
  }
];

const LabProjectCard = ({ project, isActive, onSelect, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08 }}
    viewport={{ once: true }}
    className={`p-7 bg-white border rounded-[32px] flex flex-col justify-between group transition-all duration-500 cursor-pointer ${
      isActive
        ? "border-zapier shadow-2xl shadow-orange-500/10"
        : "border-stone-200 hover:border-zapier hover:shadow-2xl hover:shadow-orange-500/5"
    }`}
    onClick={onSelect}
  >
    <div>
      <div className="flex justify-between items-start mb-7">
        <div
          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors border ${
            isActive
              ? "bg-zapier text-white border-zapier"
              : "bg-paper text-stone-400 group-hover:text-zapier border-stone-100"
          }`}
        >
          {project.icon}
        </div>

        <span
          className={`px-2 py-1 rounded-full font-mono text-[8px] font-bold uppercase tracking-widest ${
            project.status === "Building"
              ? "bg-zapier/10 text-zapier"
              : "bg-stone-100 text-stone-400"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h4 className="font-bold text-stone-900 text-lg mb-2 leading-tight">
        {project.title}
      </h4>

      <p className="text-stone-500 text-sm leading-relaxed mb-5">
        {project.desc}
      </p>

      <p className="font-mono text-[8px] text-stone-400 uppercase tracking-widest font-bold mb-2">
        Proof target
      </p>

      <p className="text-xs text-stone-400 leading-relaxed mb-5">
        {project.proof}
      </p>

      {project.demo}
    </div>

    <div className="mt-8 pt-6 border-t border-stone-50 flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-widest gap-4">
      <span className="text-stone-400">{project.tech}</span>
      <button
        type="button"
        className={`whitespace-nowrap transition-colors ${
          isActive ? "text-zapier" : "text-stone-400 group-hover:text-zapier"
        }`}
      >
        View System
      </button>
    </div>
  </motion.div>
);

const SystemEvidencePanel = ({ project }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10 bg-white border border-stone-200 rounded-[40px] overflow-hidden shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-8 md:p-10 bg-stone-950 text-white relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-zapier block mb-4">
              Selected System
            </span>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-5">
              {project.title}
            </h3>

            <p className="text-stone-400 text-sm leading-relaxed mb-8">
              {project.systemLine}
            </p>

            <div className="space-y-3">
              {project.workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 rounded-2xl"
                >
                  <span className="font-mono text-[9px] text-zapier font-bold mt-0.5">
                    0{index + 1}
                  </span>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Route className="absolute -right-16 -bottom-16 w-56 h-56 text-white/5 rotate-12" />
        </div>

        <div className="lg:col-span-8 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 block mb-3">
                Evidence Map
              </span>

              <h4 className="text-2xl font-bold tracking-tight text-stone-900">
                Every project is a system with visible build evidence.
              </h4>

              <p className="text-stone-500 text-sm leading-relaxed mt-3 max-w-xl">
                The card shows the idea. This panel shows what sits behind it:
                repo, workflow, backend logic, data, screenshots and demo proof.
              </p>
            </div>

            <div className="flex-shrink-0">
              <span
                className={`px-3 py-1 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest ${
                  project.status === "Building"
                    ? "bg-zapier/10 text-zapier"
                    : "bg-stone-100 text-stone-400"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <AssetGroup
              title="Build Assets"
              intro="The technical files, workflows and datasets that make the system real."
              items={project.assets.build}
            />

            <AssetGroup
              title="Proof Assets"
              intro="The visible evidence that shows the workflow has been built, tested or planned honestly."
              items={project.assets.proof}
            />
          </div>

          <div className="mt-8 p-5 bg-paper border border-stone-100 rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-stone-400 mb-1">
                Publishing Rule
              </p>
              <p className="text-sm text-stone-500 leading-relaxed">
                Available means it can be shown. Building means in progress.
                Planned means it is not claimed as completed.
              </p>
            </div>

            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zapier">
              Proof over decoration
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

const MatrixHub = () => {
  const [activeMetric, setActiveMetric] = useState("handoff");
  const [activeTool, setActiveTool] = useState("crm");

  const metricConfig = {
    handoff: { label: "Lead Handoff", values: [34, 54, 72, 88, 78, 92] },
    tracking: { label: "Tracking Readiness", values: [42, 48, 64, 70, 82, 90] },
    hygiene: { label: "Data Hygiene", values: [55, 58, 61, 74, 80, 86] }
  };

  const toolConfig = {
    crm: {
      name: "CRM",
      color: "bg-blue-500",
      text: "text-blue-400",
      fileExt: "_workflow.json"
    },
    analytics: {
      name: "GA4",
      color: "bg-zapier",
      text: "text-zapier",
      fileExt: "_events.json"
    },
    report: {
      name: "Power BI",
      color: "bg-emerald-500",
      text: "text-emerald-400",
      fileExt: "_view.pbix"
    }
  };

  const currentTheme = toolConfig[activeTool];
  const metric = metricConfig[activeMetric];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 p-8 md:p-12 bg-stone-900 rounded-[40px] text-white border border-white/5 shadow-2xl relative overflow-hidden"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-white/5 ${currentTheme.text}`}>
                <BarChart3 size={20} />
              </div>

              <h4 className="font-bold text-xl uppercase tracking-tighter">
                Systems Visibility Hub
              </h4>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed mb-8">
              A compact operating view for the work behind campaigns: routing,
              tracking, hygiene and reporting readiness.
            </p>

            <div className="space-y-2">
              {Object.keys(metricConfig).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveMetric(key)}
                  type="button"
                  className={`w-full text-left px-5 py-3 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex justify-between items-center ${
                    activeMetric === key
                      ? "bg-white text-stone-900 shadow-xl"
                      : "bg-white/5 text-stone-500 hover:bg-white/10"
                  }`}
                >
                  <span>{metricConfig[key].label}</span>
                  {activeMetric === key && (
                    <Activity size={12} className="animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest mb-3 block">
              Rendering Layer
            </span>

            <div className="flex flex-wrap gap-2">
              {Object.keys(toolConfig).map((tool) => (
                <button
                  key={tool}
                  onClick={() => setActiveTool(tool)}
                  type="button"
                  className={`px-4 py-2 rounded-lg font-mono text-[9px] font-bold uppercase tracking-widest transition-all border ${
                    activeTool === tool
                      ? `border-white/20 bg-white/10 ${toolConfig[tool].text}`
                      : "border-transparent text-stone-500 hover:text-stone-300 hover:bg-white/5"
                  }`}
                >
                  {toolConfig[tool].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-black/40 rounded-3xl p-8 border border-white/5 flex flex-col min-h-[360px] relative">
          <div className="flex justify-between items-center mb-8 gap-6">
            <div className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full animate-pulse ${currentTheme.color}`} />

              <div>
                <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">
                  Data_Source
                </span>

                <span className="font-mono text-[10px] text-stone-300 uppercase">
                  {activeMetric}
                  {currentTheme.fileExt}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">
                Active_View
              </span>

              <span className={`font-mono text-[10px] font-bold uppercase ${currentTheme.text}`}>
                {metric.label}
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-end gap-3 w-full">
            {metric.values.map((value, index) => (
              <motion.div
                key={`${activeMetric}-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${value}%`, opacity: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex-1 bg-white/10 rounded-t-xl relative overflow-hidden border border-white/5"
              >
                <div
                  className={`absolute inset-x-0 bottom-0 ${currentTheme.color} opacity-70`}
                  style={{ height: "42%" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Route
        className={`absolute -right-20 -bottom-20 opacity-[0.04] pointer-events-none w-[420px] h-[420px] ${currentTheme.text}`}
      />
    </motion.div>
  );
};

export default function UtilityLab() {
  const [activeProjectId, setActiveProjectId] = useState(labProjects[0].id);
  const activeProject =
    labProjects.find((project) => project.id === activeProjectId) || labProjects[0];

  return (
    <section id="lab" className="py-32 px-6 bg-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">
              GTM Systems Lab
            </span>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 italic font-serif">
              Systems with visible build evidence.
            </h2>

            <p className="mt-6 text-stone-500 text-lg leading-relaxed max-w-xl">
              Every project is more than a card. Each lab system is mapped with
              the files, workflows, datasets, screenshots and demo proof needed
              to make the build traceable.
            </p>
          </div>

          <div className="px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zapier animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-stone-400 uppercase">
              Proof mapped by status
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labProjects.map((project, index) => (
            <LabProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeProjectId === project.id}
              onSelect={() => setActiveProjectId(project.id)}
            />
          ))}
        </div>

        <SystemEvidencePanel project={activeProject} />

        <MatrixHub />
      </div>
    </section>
  );
}