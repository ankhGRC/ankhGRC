"use client";

import { Navigation } from "@/components/landing/navigation";

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

export default function AIGovernancePage() {
  return (
    <main className="min-h-screen bg-[#111412] text-[#f4f2ec]">
      <Navigation />

      {/* HERO */}
      <section className=" h-[980px] relative overflow-hidden bg-[#111412] pt-20">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#ff6a00]/[0.06] blur-[120px]" />

<div className="mx-auto grid min-h-[800px] w-full max-w-[1720px] items-center gap-24 px-8 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-28">          <div>
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
                <span>→</span>
              </a>

              <a
                href="#framework"
                className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
              >
                Explore the Framework
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[32px] border border-white/10 bg-[#161916] p-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                ANKH GRC / AI GOVERNANCE
              </p>

              <div className="mt-10 space-y-3">
                {[
                  "Governance",
                  "Risk",
                  "Responsible AI",
                  "Security",
                  "Assurance",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <span className="text-sm text-white/65">{item}</span>
                    <span className="text-xs text-[#ff6a00]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-px bg-white/10">
                <div className="h-px w-[82%] bg-[#ff6a00]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section
        id="why-ai-governance"
        className="bg-[#f3f0e9] text-[#111412]"
      >
        <div className="mx-auto max-w-[1720px] px-6 py-24 lg:px-10 lg:py-32">
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

              <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                {challenges.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[235px] border-b border-r border-black/10 p-7 lg:p-8"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#ff5f00]">
                      {item.number}
                    </span>

                    <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-black/55">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DOMAINS — CONTAINED GRID */}
      <section id="framework" className="bg-[#111412]">
        <div className="mx-auto max-w-[1720px] px-6 py-24 lg:px-10 lg:py-32">
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

          {/* IMPORTANT: NO HORIZONTAL SCROLL */}
          <div className="mx-auto mt-14 grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((item) => (
              <article
                key={item.number}
                className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#171a18] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#ff6a00]/60"
              >
                <div className="pointer-events-none absolute -right-4 -top-8 text-[170px] font-semibold leading-none text-white/[0.025]">
                  {item.number}
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6a00]">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                    →
                  </span>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="mb-5 h-px w-10 bg-[#ff6a00] transition-all group-hover:w-20" />

                  <h3 className="text-[28px] font-medium leading-tight tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[20px] leading-7 text-white/45">
                    {item.text}
                  </p>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-white/20">
                    ANKH GRC
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL COVERAGE */}
      <section
        id="coverage"
        className="bg-[#f3f0e9] text-[#111412]"
      >
        <div className="mx-auto max-w-[1720px] px-6 py-24 lg:px-10 lg:py-32">
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

              <div className="mt-12 grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
                {coverage.map((item) => (
                  <article
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
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — CONTAINED GRID */}
      <section id="services" className="bg-[#111412]">
        <div className="mx-auto max-w-[1720px] px-6 py-24 lg:px-10 lg:py-32">
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
          <div className="mx-auto mt-14 grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.number}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#171a18] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#ff6a00]/60"
              >
                <div className="pointer-events-none absolute -right-4 -top-8 text-[150px] font-semibold leading-none text-white/[0.025]">
                  {item.number}
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6a00]">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                    +
                  </span>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="mb-5 h-px w-10 bg-[#ff6a00] transition-all group-hover:w-20" />

                  <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[20px] leading-7 text-white/45">
                    {item.text}
                  </p>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-white/20">
                    ANKH GRC
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS OUTCOMES */}
      <section className="bg-[#f3f0e9] text-[#111412]">
        <div className="mx-auto max-w-[1720px] px-6 py-24 lg:px-10 lg:py-32">
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

              <div className="mt-12 grid border-l border-t border-black/10 md:grid-cols-2">
                {outcomes.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[220px] border-b border-r border-black/10 p-7 lg:p-8"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#ff5f00]">
                      {item.number}
                    </span>

                    <h3 className="mt-7 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-black/55">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ANKH */}
      <section className="bg-white text-[#111412]">
        <div className="mx-auto max-w-[1720px] px-6 py-24 text-center lg:px-10 lg:py-28">
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
      </section>

      {/* CONTACT — ORANGE */}
      <section
        id="contact"
        className="bg-[#ff6500] text-black"
      >
        <div className="mx-auto max-w-[1720px] px-6 py-24 text-center lg:px-10 lg:py-32">
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
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111412] text-white">
        <div className="mx-auto max-w-[1680px] px-6 py-12 lg:px-10">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em]">
                <span className="text-[#ff6a00]">ANKH</span> GRC
              </p>

              <p className="mt-3 text-xs text-white/30">
                Govern AI. Build Trust. Enable Innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/40">
              <a href="/" className="transition hover:text-[#ff6a00]">
                Home
              </a>

              <a
                href="#framework"
                className="transition hover:text-[#ff6a00]"
              >
                Framework
              </a>

              <a
                href="#coverage"
                className="transition hover:text-[#ff6a00]"
              >
                Coverage
              </a>

              <a
                href="#services"
                className="transition hover:text-[#ff6a00]"
              >
                Services
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#ff6a00]"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/25 md:flex-row">
            <p>© 2024 Ankh GRC. All rights reserved.</p>

            <p>Govern AI. Build Trust. Enable Innovation.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}