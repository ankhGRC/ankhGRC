import Link from "next/link";

const challenges = [
  {
    title: "Regulatory Complexity",
    text: "Navigate expanding global privacy regulations across Europe, Asia, Americas, and Middle East.",
  },
  {
    title: "AI Governance",
    text: "Ensure responsible AI deployment with privacy controls, fairness assessments, and compliance monitoring.",
  },
  {
    title: "Data Risk Management",
    text: "Identify, classify, and manage personal data across business applications, cloud, and third parties.",
  },
  {
    title: "Third-Party Oversight",
    text: "Assess and monitor privacy risks from vendors, processors, and AI model providers.",
  },
  {
    title: "Compliance Readiness",
    text: "Prepare for regulatory audits and demonstrate accountability across the organization.",
  },
  {
    title: "Stakeholder Trust",
    text: "Communicate transparently with customers, employees, and regulators about data protection.",
  },
];

const domains = [
  ["01", "Privacy Governance & Accountability", "Establish governance structures that define ownership, accountability, and oversight across the organization."],
  ["02", "Regulatory Compliance Management", "Identify and comply with applicable privacy laws and regulations globally."],
  ["03", "Data Discovery & Classification", "Identify and classify personal and sensitive information across the organization."],
  ["04", "Data Mapping & RoPA", "Create visibility over data processing activities and records of processing."],
  ["05", "Consent & Preference Management", "Manage lawful processing and consent obligations effectively."],
  ["06", "Privacy Notices & Transparency", "Ensure organizations communicate clearly with stakeholders regarding personal data use."],
  ["07", "Data Subject Rights Management", "Enable individuals to exercise privacy rights efficiently and track requests."],
  ["08", "Privacy by Design & Impact Assessments", "Embed privacy requirements into business and technology initiatives early."],
  ["09", "Third-Party Privacy Risk Management", "Manage privacy risks arising from suppliers, vendors, and partners."],
  ["10", "Cross-Border Transfers & Residency", "Ensure lawful international movement of personal information and data sovereignty."],
  ["11", "Privacy Incident & Breach Management", "Establish privacy response capabilities and crisis management protocols."],
  ["12", "AI & Emerging Technology Privacy", "Proactively manage privacy risks from AI, ML, and advanced analytics adoption."],
  ["13", "Privacy Assurance & Continuous Monitoring", "Maintain long-term compliance effectiveness through audits and monitoring."],
] as const;

const regions = [
  {
    title: "Europe",
    items: ["GDPR", "ePrivacy Requirements", "UK GDPR", "Data Protection Act 2018"],
  },
  {
    title: "Asia Pacific",
    items: ["APPI (Japan)", "PIPL (China)", "PDPA (Singapore)", "PIPA (South Korea)"],
  },
  {
    title: "North America",
    items: ["CCPA / CPRA", "HIPAA", "PIPEDA (Canada)", "State Privacy Laws"],
  },
  {
    title: "Middle East",
    items: ["PDPL (Saudi Arabia)", "Federal PDPL (UAE)", "Qatar, Bahrain", "Oman, Kuwait"],
  },
  {
    title: "South America & Africa",
    items: ["LGPD (Brazil)", "POPIA (South Africa)", "Privacy Act (Australia)", "Emerging Standards"],
  },
  {
    title: "AI Governance",
    items: ["EU AI Act", "ISO/IEC 42001", "NIST AI Risk Framework", "OECD AI Principles"],
  },
];

const outcomes = [
  {
    title: "Regulatory Compliance",
    text: "Improved privacy compliance maturity and reduced regulatory and legal risk.",
  },
  {
    title: "Trust & Transparency",
    text: "Enhanced stakeholder trust and increased transparency with customers and regulators.",
  },
  {
    title: "Data Governance",
    text: "Stronger data governance and better understanding of personal data flows.",
  },
  {
    title: "Audit Readiness",
    text: "Better audit readiness and improved ability to demonstrate accountability.",
  },
  {
    title: "Third-Party Risk",
    text: "Improved third-party oversight and vendor management effectiveness.",
  },
  {
    title: "AI Confidence",
    text: "Effective AI governance and confidence in digital transformation initiatives.",
  },
];

export default function PrivacyDataProtectionPage() {
  return (
    <main className="min-h-screen bg-[#171b19] text-[#f4f1ea] selection:bg-orange-500/30 selection:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(244,103,12,0.14),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.05),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10 lg:pb-32 lg:pt-12">
          <div className="flex items-center justify-between bg-white border-b border-black/10 px-6 py-4 lg:px-10">
<a href="/" className="relative flex h-8 w-[150px] items-center overflow-visible">
  <img
    src="/ankhgrc-logo.png"
    alt="ANKH GRC"
    className="absolute left-0 top-1/2 h-auto w-[130px] -translate-y-1/2 scale-[1.8] origin-left object-contain"
  />
</a>
            <Link
              href="/"
              className="text-sm text-black/70 transition hover:text-orange-500"
            >
              Back to Home
            </Link>
          </div>

          <div className="grid gap-14 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pt-28">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
                Protect Privacy. Build Trust. Govern AI Responsibly.
              </p>

              <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                Privacy, Data Protection &amp; AI Governance Framework
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 lg:text-xl">
                Establish end-to-end governance programs that align with global
                regulations, industry best practices, and responsible AI adoption.
                Enable compliance, transparency, and sustainable growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  Get Started <span>→</span>
                </a>

                <a
                  href="#framework"
                  className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
                >
                  Learn More <span>↓</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-orange-500/60 pl-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  ANKH GRC
                </p>
                <p className="mt-5 text-3xl font-medium leading-tight">
                  Privacy
                  <br />
                  <span className="text-white/45">by design.</span>
                </p>
                <div className="mt-8 h-px w-24 bg-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-b border-white/10 bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                01 / The Need
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Why Organizations Need This Framework
              </h2>
            </div>

            <div>
              <p className="max-w-4xl text-lg leading-8 text-black/60">
                Organizations today face unprecedented pressure from evolving
                regulations, expanding AI adoption, and growing stakeholder
                expectations around responsible data use and governance.
              </p>

              <div className="mt-12 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                {challenges.map((item, index) => (
                  <article
                    key={item.title}
                    className="border-b border-r border-black/10 px-6 py-8 first:pl-0 lg:[&:nth-child(3n)]:border-r-0"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-orange-600">
                      0{index + 1}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/55">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="relative overflow-hidden bg-[#111412] py-20 lg:py-24">
  {/* Section heading */}
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
      Privacy • Data Protection • AI Governance
    </p>

    <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] text-[#f4f1eb] sm:text-5xl lg:text-6xl">
      Privacy by design.
      <br />
      Trust by default.
    </h2>
  </div>

  {/* Horizontal scrollable cards */}
  <div className="relative mt-14">
    <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#111412] to-transparent lg:w-28" />
    <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#111412] to-transparent lg:w-28" />

    <div
      className="
        flex gap-5 overflow-x-auto
        px-[7vw] pb-8 pt-6
        snap-x snap-mandatory
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      {domains.map(([number, title, text], index) => (
        <article
          key={number}
          className="
            group relative
            h-[470px] w-[350px] shrink-0 snap-center
            overflow-hidden rounded-[28px]
            border border-[#f4f1eb]/10
            bg-[#151916]
            transition-all duration-500 ease-out
            hover:-translate-y-2
            hover:border-[#ff6a00]/50
            sm:h-[480px] sm:w-[380px]
            lg:w-[400px]
          "
        >
          {/* Soft orange atmosphere */}
          <div
            className="
              pointer-events-none absolute
              -bottom-40 -left-24
              h-[380px] w-[500px]
              rounded-full
              bg-[#ff6a00]/[0.055]
              blur-[75px]
              transition-all duration-700
              group-hover:bg-[#ff6a00]/[0.10]
            "
          />

          {/* Decorative curved line */}
          <div
            className="
              pointer-events-none absolute
              -bottom-[250px] -left-[110px]
              h-[450px] w-[620px]
              rounded-full
              border border-[#ff6a00]/20
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          {/* Large background number */}
          <div
            className="
              pointer-events-none absolute
              -right-4 -top-6
              select-none
              text-[170px] font-semibold leading-none
              tracking-[-0.1em]
              text-[#f4f1eb]/[0.025]
              transition-colors duration-500
              group-hover:text-[#ff6a00]/[0.045]
              sm:text-[190px]
            "
          >
            {number}
          </div>

          <div className="relative z-10 flex h-full flex-col p-7 sm:p-8">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-[0.2em] text-[#ff6a00]">
                {number}
              </span>

              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-[#f4f1eb]/10
                  text-sm text-[#f4f1eb]/45
                  transition-all duration-500
                  group-hover:border-[#ff6a00]
                  group-hover:bg-[#ff6a00]
                  group-hover:text-[#111412]
                "
              >
                ↗
              </span>
            </div>

            {/* Content */}
            <div className="mt-auto">
              <div className="mb-5 h-px w-10 bg-[#ff6a00] transition-all duration-500 group-hover:w-16" />

              <h3
                className="
                  max-w-[330px]
                  text-[24px] font-medium leading-[1.12]
                  tracking-[-0.025em]
                  text-[#f4f1eb]
                  sm:text-[26px]
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-4 max-w-[335px]
                  text-[14px] leading-6
                  text-[#f4f1eb]/55
                  sm:text-[15px] sm:leading-7
                "
              >
                {text}
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-7 flex items-end justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#f4f1eb]/25">
                ANKH GRC
              </span>

              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4f1eb]/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4f1eb]/20" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Scroll indicator */}
    <div className="mt-1 flex items-center justify-center gap-3">
      <div className="h-[2px] w-8 rounded-full bg-[#ff6a00]" />

      <div className="flex gap-1.5">
        {domains.map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#f4f1eb]/20"
          />
        ))}
      </div>

      <span className="ml-2 text-[10px] uppercase tracking-[0.25em] text-[#f4f1eb]/30">
        Scroll to explore
      </span>
    </div>
  </div>
</section>

      {/* Global Coverage */}
      <section id="coverage" className="border-b border-white/10 bg-[#242825]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                03 / Global Coverage
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Global Regulatory Coverage
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/50">
              Comprehensive expertise across privacy laws and AI governance
              frameworks worldwide.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <article key={region.title} className="bg-[#242825] p-8 lg:min-h-[250px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <h3 className="text-xl font-medium">{region.title}</h3>
                  <span className="text-orange-500">↗</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {region.items.map((item) => (
                    <li key={item} className="text-sm text-white/55">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                04 / Outcomes
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Business Outcomes
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                Build a Privacy and AI Governance program that drives business
                value while reducing risk.
              </p>

              <div className="mt-12 grid border-t border-black/10 md:grid-cols-2">
                {outcomes.map((item, index) => (
                  <article
                    key={item.title}
                    className="border-b border-black/10 py-8 md:pr-10"
                  >
                    <div className="flex gap-5">
                      <span className="font-mono text-sm text-orange-600">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-black/55">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-orange-500 text-black">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[70px] border-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
            ANKH GRC / TRUSTED GOVERNANCE
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-none tracking-[-0.05em] lg:text-8xl">
            Build Trust Through Privacy &amp; Responsible AI
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-black/65">
            Whether you are establishing a privacy program, preparing for
            regulatory compliance, implementing AI solutions, or strengthening
            existing controls, Ankh GRC can help you develop a scalable
            framework that protects data, supports innovation, and enables
            business growth.
          </p>

          <a
            href="mailto:contact@ankhgrc.com"
            className="mt-10 inline-flex items-center gap-4 border border-black bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-transparent hover:text-black"
          >
            Contact Ankh GRC Today <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111412]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-white/40 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap gap-6">
            <a href="#framework" className="transition hover:text-orange-500">
              Framework
            </a>
            <a href="#coverage" className="transition hover:text-orange-500">
              Global Coverage
            </a>
            <a href="#outcomes" className="transition hover:text-orange-500">
              Outcomes
            </a>
            <a href="#contact" className="transition hover:text-orange-500">
              Contact
            </a>
          </div>

          <p>© 2026 Ankh GRC. All rights reserved. | Privacy. Trust. Governance.</p>
        </div>
      </footer>
    </main>
  );
}


