"use client";

import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import { motion } from "framer-motion";
const challenges = [
  {
    number: "01",
    title: "Regulatory Complexity",
    text: "Navigate evolving AI regulations and emerging compliance obligations worldwide.",
  },
  {
    number: "02",
    title: "AI Risk Exposure",
    text: "Manage risks associated with bias, hallucinations, explainability, model drift, and unintended outcomes.",
  },
  {
    number: "03",
    title: "Data Governance",
    text: "Ensure AI systems are built on trusted, accurate, secure, and compliant data.",
  },
  {
    number: "04",
    title: "AI Security",
    text: "Protect AI models and environments against adversarial attacks, prompt injection, and model manipulation.",
  },
  {
    number: "05",
    title: "Transparency & Trust",
    text: "Provide clear explanations for AI-driven decisions and recommendations.",
  },
  {
    number: "06",
    title: "Third-Party AI Oversight",
    text: "Manage risks associated with foundation models, AI vendors, and external AI platforms.",
  },
  {
    number: "07",
    title: "Executive Accountability",
    text: "Establish governance structures that provide board-level visibility and oversight.",
  },
  {
    number: "08",
    title: "Responsible Innovation",
    text: "Balance innovation with ethical, secure, and responsible AI adoption.",
  },
];

const domains = [
  {
    number: "01",
    title: "AI Governance & Oversight",
    text: "Establish governance structures, decision-making frameworks, accountability models, and executive oversight for AI programs and initiatives.",
  },
  {
    number: "02",
    title: "AI Strategy & Risk Management",
    text: "Align AI initiatives with organizational objectives while managing strategic, operational, legal, regulatory, and reputational risks.",
  },
  {
    number: "03",
    title: "AI Inventory & Use Case Management",
    text: "Develop an enterprise-wide inventory of AI systems, models, use cases, and associated risk classifications.",
  },
  {
    number: "04",
    title: "Regulatory Compliance & Responsible AI",
    text: "Align AI programs with ISO/IEC 42001, ISO 23894, EU AI Act, NIST AI RMF, OECD AI Principles, and industry-specific requirements.",
  },
  {
    number: "05",
    title: "AI Ethics & Responsible AI Principles",
    text: "Embed fairness, accountability, transparency, safety, inclusiveness, and human-centric AI throughout the AI lifecycle.",
  },
  {
    number: "06",
    title: "Data Governance for AI",
    text: "Ensure data quality, lineage, ownership, privacy, security, retention, and compliance requirements support trustworthy AI.",
  },
  {
    number: "07",
    title: "Model Development & Validation",
    text: "Implement controls governing model development, training, testing, validation, deployment, and retirement.",
  },
  {
    number: "08",
    title: "Explainability & Transparency",
    text: "Ensure AI outputs can be understood, challenged, and explained to regulators, customers, employees, and business stakeholders.",
  },
  {
    number: "09",
    title: "AI Security & Adversarial Risk Management",
    text: "Protect AI systems from prompt injection, data poisoning, model theft, adversarial attacks, unauthorized access, and AI misuse.",
  },
  {
    number: "10",
    title: "Human Oversight & Decision Governance",
    text: "Establish appropriate human review, intervention, escalation, and accountability mechanisms for AI-assisted decisions.",
  },
  {
    number: "11",
    title: "Third-Party AI Risk Management",
    text: "Assess and monitor AI vendors, foundation models, SaaS AI providers, cloud platforms, and external AI services.",
  },
  {
    number: "12",
    title: "AI Monitoring, Assurance & Continuous Compliance",
    text: "Continuously monitor performance, bias, drift, security, compliance, and operational risk throughout the AI lifecycle.",
  },
];

const coverage = [
  {
    title: "International Standards",
    items: [
      "ISO/IEC 42001",
      "ISO 23894",
      "ISO 27001",
      "ISO 27701",
      "ISO 31000",
    ],
  },
  {
    title: "European Union",
    items: [
      "EU AI Act",
      "GDPR",
      "Digital Services Act",
    ],
  },
  {
    title: "United States",
    items: [
      "NIST AI Risk Management Framework",
      "Executive AI Guidance",
      "Sector-Specific AI Requirements",
    ],
  },
  {
    title: "United Kingdom",
    items: [
      "UK AI Principles",
      "ICO AI Guidance",
    ],
  },
  {
    title: "Middle East",
    items: [
      "UAE AI Governance Principles",
      "UAE Responsible AI Guidance",
      "Saudi AI Ethics Principles",
    ],
  },
  {
    title: "Global Frameworks",
    items: [
      "OECD AI Principles",
      "UNESCO AI Ethics Framework",
      "Future Regulatory Frameworks",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "AI Governance Maturity Assessment",
    text: "Measure current governance maturity and identify capability gaps.",
  },
  {
    number: "02",
    title: "AI Risk Assessments",
    text: "Evaluate AI-related legal, regulatory, ethical, privacy, cybersecurity, and operational risks.",
  },
  {
    number: "03",
    title: "Responsible AI Framework Development",
    text: "Develop policies, standards, procedures, and governance structures.",
  },
  {
    number: "04",
    title: "ISO/IEC 42001 Readiness",
    text: "Prepare organizations for AI Management System implementation and certification readiness.",
  },
  {
    number: "05",
    title: "AI Vendor Risk Assessments",
    text: "Perform third-party AI due diligence and risk evaluations.",
  },
  {
    number: "06",
    title: "AI Policy Development",
    text: "Design enterprise-wide AI governance and responsible AI policies.",
  },
  {
    number: "07",
    title: "AI Governance Office Implementation",
    text: "Establish governance committees, reporting structures, and accountability models.",
  },
  {
    number: "08",
    title: "AI Assurance Reviews",
    text: "Conduct independent reviews of AI systems, controls, and governance practices.",
  },
];

const outcomes = [
  {
    number: "01",
    title: "Regulatory Readiness",
    text: "Prepare for evolving AI regulations and compliance obligations.",
  },
  {
    number: "02",
    title: "Responsible Innovation",
    text: "Accelerate AI adoption while maintaining appropriate safeguards.",
  },
  {
    number: "03",
    title: "Risk Reduction",
    text: "Reduce legal, regulatory, operational, and reputational exposure.",
  },
  {
    number: "04",
    title: "Enhanced Trust",
    text: "Strengthen confidence among customers, regulators, employees, and investors.",
  },
  {
    number: "05",
    title: "Executive Visibility",
    text: "Provide leadership with measurable oversight over AI initiatives.",
  },
  {
    number: "06",
    title: "Sustainable AI Adoption",
    text: "Enable long-term, scalable AI transformation programs.",
  },
  {
    number: "07",
    title: "Competitive Advantage",
    text: "Differentiate through trustworthy and responsible AI practices.",
  },
  {
    number: "08",
    title: "Strong Governance",
    text: "Integrate AI seamlessly into enterprise governance, risk, and compliance frameworks.",
  },
];

const heroAnimationStyles = `
@keyframes scan {
  0%, 100% { transform: translateX(-110%); }
  50% { transform: translateX(500%); }
}
`;

export default function AIGovernancePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111412] text-[#f4f2ec]">
      <style dangerouslySetInnerHTML={{ __html: heroAnimationStyles }} />
      <Navigation />

      {/* HERO */}
      <motion.section initial={{ opacity: 0, y: 70, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} className=" h-[980px] relative overflow-hidden bg-[#111412] pt-20">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#ff6a00]/[0.06] blur-[120px]" />

<div className="mx-auto grid min-h-[800px] w-full max-w-7xl items-center gap-24 px-8 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-28">          <div>
            <p className="mb-7 pt-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6a00]">
              Govern AI. Build Trust. Enable Innovation.
            </p>

            <h1 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Enterprise AI
              <br />
              Governance
              <br />
              Framework
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 lg:text-xl">
              Artificial Intelligence is transforming industries and
              decision-making processes. As organizations accelerate AI
              adoption, robust governance becomes critical to ensure AI
              systems remain trustworthy, transparent, secure, compliant, and
              aligned with business objectives.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#framework"
                className="inline-flex items-center gap-3 bg-[#ff6a00] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7b20]"
              >
                Assess AI Governance Maturity
                
              </a>

              <a
                href="#framework"
                className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
              >
                Explore the Framework
                
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto h-[520px] w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-[#161916]">
              {/* Subtle architectural grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.16]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "54px 54px",
                  maskImage:
                    "radial-gradient(circle at center, black 0%, transparent 72%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 0%, transparent 72%)",
                }}
              />

              {/* Slow moving accent */}
              <div className="pointer-events-none absolute left-[12%] top-[13%] h-px w-[76%] overflow-hidden bg-white/10">
                <div className="h-full w-20 bg-[#ff6a00] animate-[scan_4s_ease-in-out_infinite]" />
              </div>

              <div className="pointer-events-none absolute left-[18%] top-[52%] h-px w-[64%] bg-white/10" />
              <div className="pointer-events-none absolute left-[28%] top-[68%] h-px w-[44%] bg-white/10" />

              {/* Connected governance structure */}
              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_18s_linear_infinite]" />
                <div className="absolute inset-[28px] rounded-full border border-white/10 animate-[spin_14s_linear_infinite_reverse]" />
                <div className="absolute inset-[62px] rounded-full border border-[#ff6a00]/30 animate-[pulse_3s_ease-in-out_infinite]" />

                <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-[#ff6a00]/50" />
                <div className="absolute left-1/2 bottom-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-t from-transparent via-white/20 to-[#ff6a00]/50" />
                <div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-[#ff6a00]/50" />
                <div className="absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/20 to-[#ff6a00]/50" />

                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00] shadow-[0_0_28px_rgba(255,106,0,0.45)] animate-[pulse_2.4s_ease-in-out_infinite]" />

                <div className="absolute left-1/2 top-[-14px] -translate-x-1/2 text-[9px] uppercase tracking-[0.28em] text-white/35">
                  Oversight
                </div>
                <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.28em] text-white/35">
                  Assurance
                </div>
                <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.28em] text-white/35">
                  Risk
                </div>
                <div className="absolute right-[-34px] top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.28em] text-white/35">
                  Control
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                    Governance Architecture
                  </p>
                  <div className="mt-3 h-px w-28 bg-[#ff6a00]" />
                </div>
                <span className="text-[10px] tracking-[0.3em] text-white/20">
                  ANKH
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHY */}
      <motion.section initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="why-ai-governance"
        className="bg-[#f3f0e9] text-[#111412]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5f00]">
                01 / THE NEED
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Why
                <br />
                Organizations
                <br />
                Need AI
                <br />
                Governance
              </h2>
            </div>

            <div>
              <p className="max-w-4xl text-lg leading-8 text-black/60">
                Organizations increasingly rely on AI-driven systems for
                automation, decision-making, customer engagement, risk
                evaluation, and strategic planning. Without proper governance,
                AI introduces significant legal, ethical, operational,
                cybersecurity, and reputational risks.
              </p>

              <div className="mt-12 max-w-full overflow-hidden grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                {challenges.map((item) => (
                  <motion.article initial={{ opacity: 0, x: -45, y: 35, scale: 0.94 }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.0, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -8, scale: 1.015 }}
                    key={item.number}
                    className="min-h-[235px] border-b border-r border-black/10 p-7 lg:p-8"
                  >
                    

                    <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-black/55">
                      {item.text}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CORE DOMAINS — CONTAINED GRID */}
      <motion.section initial={{ opacity: 0, y: 80, rotateX: 4 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} id="framework" className="bg-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
            02 / AI GOVERNANCE FRAMEWORK
          </p>

          <div className="mt-5">
            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              The 12 Core
              <br />
              Domains Framework
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/45">
              A comprehensive framework covering governance, risk management,
              compliance, security, ethics, and assurance across the complete
              AI lifecycle.
            </p>
          </div>

          {/* CONTAINED HORIZONTAL SCROLL — scrollbar stays inside this section */}
          <div className="mx-auto mt-14 w-full max-w-[1400px] overflow-hidden">
            <div
              className="flex w-full max-w-full gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-5 pr-2"
              style={{ scrollbarGutter: "stable" }}
            >
              {domains.map((item) => (
                <motion.article initial={{ opacity: 0, x: 45, y: 35, scale: 0.94 }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.055, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -8, scale: 1.015 }}
                  key={item.number}
                  className="group relative flex min-h-[400px] w-[330px] shrink-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#171a18] p-8 transition-all duration-500 hover:border-[#ff6a00]/60 hover:bg-[#1b1e1c] sm:w-[380px] lg:w-[410px]"
                >
                  <div className="relative z-10">
                    <div className="h-px w-20 bg-[#ff6a00] transition-all duration-500 group-hover:w-32" />
                    <div className="mt-3 h-px w-full bg-white/10" />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="mb-6 h-px w-full bg-white/10" />

                    <h3 className="max-w-[90%] text-[28px] font-medium leading-tight tracking-[-0.025em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[20px] leading-7 text-white/45">
                      {item.text}
                    </p>

                    <div className="mt-7 flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-[#ff6a00]" />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                        AI GOVERNANCE
                      </span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* GLOBAL COVERAGE */}
      <motion.section initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="coverage"
        className="bg-[#f3f0e9] text-[#111412]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5f00]">
                03 / GLOBAL COVERAGE
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Global AI
                <br />
                Governance
                <br />
                Coverage
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Aligned with leading international standards, regulations, and
                responsible AI frameworks.
              </p>

              <div className="mt-12 max-w-full overflow-hidden grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
                {coverage.map((item) => (
                  <motion.article initial={{ opacity: 0, x: -45, y: 35, scale: 0.94 }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.11, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -8, scale: 1.015 }}
                    key={item.title}
                    className="min-h-[250px] border-b border-r border-black/10 p-7 lg:p-8"
                  >
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <div className="mt-5 h-px w-8 bg-[#ff5f00]" />

                    <ul className="mt-6 space-y-3">
                      {item.items.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-[14px] leading-6 text-black/55"
                        >
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5f00]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES — CONTAINED GRID */}
      <motion.section initial={{ opacity: 0, y: 65, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} id="services" className="bg-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
            04 / ANKH GRC SERVICES
          </p>

          <div className="mt-5">
            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Ankh GRC AI
              <br />
              Governance Services
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/45">
              Helping organizations operationalize responsible, secure, and
              compliant AI.
            </p>
          </div>

          {/* IMPORTANT: NO HORIZONTAL SCROLL */}
          <div className="mx-auto mt-14 w-full max-w-[1400px] overflow-hidden">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <motion.article initial={{ opacity: 0, x: 45, y: 35, scale: 0.94 }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.165, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -8, scale: 1.015 }}
                key={item.number}
                className="group relative flex min-h-[300px] flex-col overflow-hidden border border-white/10 bg-[#171a18] p-8 transition-all duration-500 hover:border-[#ff6a00]/60 hover:bg-[#1b1e1c]" style={{ borderRadius: "20px" }}
              >
                <div className="relative z-10">
                  <div className="h-px w-20 bg-[#ff6a00] transition-all duration-500 group-hover:w-32" />
                  <div className="mt-3 h-px w-full bg-white/10" />
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="mb-6 h-px w-full bg-white/10" />

                  <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[20px] leading-7 text-white/45">
                    {item.text}
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 bg-[#ff6a00]" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      ANKH GRC SERVICES
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* BUSINESS OUTCOMES */}
      <motion.section initial={{ opacity: 0, x: -70, scale: 0.98 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="bg-[#f3f0e9] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5f00]">
                05 / BUSINESS OUTCOMES
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Business
                <br />
                Outcomes
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Deliver trusted, scalable, and compliant AI adoption.
              </p>

              <div className="mt-12 max-w-full overflow-hidden grid border-l border-t border-black/10 md:grid-cols-2">
                {outcomes.map((item) => (
                  <motion.article initial={{ opacity: 0, x: -45, y: 35, scale: 0.94 }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -8, scale: 1.015 }}
                    key={item.number}
                    className="min-h-[220px] border-b border-r border-black/10 p-7 lg:p-8"
                  >
                   

                    <h3 className="mt-7 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-black/55">
                      {item.text}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHY ANKH */}
      <motion.section initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="bg-white text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5f00]">
            06 / WHY ANKH GRC
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Why Ankh GRC
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-black/55">
            Ankh GRC combines expertise in Governance, Risk, Compliance,
            Cybersecurity, Privacy, AI Governance, Internal Audit, Third-Party
            Risk Management, and Regulatory Compliance to help organizations
            establish practical, scalable, and business-oriented AI governance
            programs.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-black/55">
            Our approach bridges the gap between innovation and assurance,
            helping organizations adopt AI confidently while maintaining
            security, trust, and accountability.
          </p>
        </div>
      </motion.section>

      {/* CONTACT — ORANGE */}
      <motion.section initial={{ opacity: 0, y: 70, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        id="contact"
        className="bg-[#ff6500] text-black"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.35em]">
            07 / NEXT STEP
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Build Trustworthy
            <br />
            AI at Scale
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-black/70">
            Whether your organization is exploring Generative AI,
            implementing AI-powered business solutions, establishing an AI
            Governance Office, preparing for ISO/IEC 42001 readiness, or
            responding to emerging AI regulations, Ankh GRC can help you
            operationalize AI governance that enables innovation while
            managing risk.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-4 bg-[#111412] px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Contact Ankh GRC Today
            
          </a>
        </div>
      </motion.section>

      {/* FOOTER */}
     <Footer/>
    </main>
  );
}