"use client";

import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const reasons = [
  {
    title: "Industry Complexity",
    text: "Each industry has unique regulatory requirements: healthcare has HIPAA, financial services has PCI-DSS and SOX, energy has NERC-CIP, government has FedRAMP.",
  },
  {
    title: "Data Protection Mandates",
    text: "Regulations require specific controls around sensitive data: PHI (healthcare), PCI (payments), PII (government), trade secrets (manufacturing).",
  },
  {
    title: "Operational Requirements",
    text: "Industry rules mandate specific business processes: audit trails (financial), incident reporting (healthcare), breach notification (all industries).",
  },
  {
    title: "Penalties & Enforcement",
    text: "Non-compliance carries significant penalties: HIPAA violations up to $1.5M, PCI-DSS fines up to $100K per day, SOX criminal liability.",
  },
  {
    title: "Competitive Necessity",
    text: "Customers, investors, and regulators expect compliance certifications: SOC 2, ISO 27001, HITRUST, FedRAMP, PCI-DSS.",
  },
  {
    title: "Cross-Industry Convergence",
    text: "Companies often operate in multiple industries or have third-party risks: manage HIPAA + GDPR + PCI-DSS simultaneously.",
  },
];

const industries = [
  {
    number: "01",
    icon: "✚",
    title: "Healthcare",
    description:
      "Navigate healthcare-specific privacy, security, and regulatory requirements.",
    regulations: [
      "HIPAA (Privacy, Security, Breach Notification)",
      "HITECH Act (Enforcement)",
      "HITRUST CSF (Integrated Framework)",
      "State Privacy Laws (varies by state)",
      "CMS Conditions of Participation",
    ],
  },
  {
    number: "02",
    icon: "◈",
    title: "Financial Services",
    description:
      "Manage financial-sector controls, reporting, payment security, and regulatory obligations.",
    regulations: [
      "PCI-DSS (Payment Card Security)",
      "SOX (Sarbanes-Oxley)",
      "GLBA (Gramm-Leach-Bliley)",
      "FINRA (Broker-Dealer Rules)",
      "SEC Regulations (10b-5, Rule 17a-4)",
      "OCC & Federal Reserve Requirements",
    ],
  },
  {
    number: "03",
    icon: "▣",
    title: "Retail & E-Commerce",
    description:
      "Address payment, customer privacy, marketing, and consumer-data obligations.",
    regulations: [
      "PCI-DSS (Payment Processing)",
      "CAN-SPAM Act (Email)",
      "CCPA/CPRA (California Consumer Privacy)",
      "State Privacy Laws (20+ states)",
      "GDPR (EU Customer Data)",
      "FTC Safeguards Rule",
    ],
  },
  {
    number: "04",
    icon: "◇",
    title: "Technology & SaaS",
    description:
      "Build scalable compliance programs across security, privacy, cloud, and customer data.",
    regulations: [
      "SOC 2 Type II (Service Organization Control)",
      "ISO 27001 (Information Security)",
      "GDPR (Data Protection)",
      "CCPA/CPRA (Privacy)",
      "DPA (Data Processing Agreements)",
      "Industry-specific (HIPAA for health tech)",
    ],
  },
  {
    number: "05",
    icon: "↯",
    title: "Energy & Utilities",
    description:
      "Strengthen operational, infrastructure, environmental, and grid-security compliance.",
    regulations: [
      "NERC-CIP (Grid Security)",
      "FERC Reliability Standards",
      "State Energy Commission Rules",
      "Nuclear Regulatory Commission (NRC)",
      "Pipeline & Hazmat Safety",
      "Environmental Compliance (EPA)",
    ],
  },
  {
    number: "06",
    icon: "⌂",
    title: "Government & Defense",
    description:
      "Meet federal information security, cloud, defense, export, and classification requirements.",
    regulations: [
      "FedRAMP (Federal Cloud Security)",
      "FISMA (Federal Information Security)",
      "NIST SP 800 Series",
      "DFARS (Defense Federal Acquisition)",
      "EAR (Export Administration)",
      "Classification & Spillage Rules",
    ],
  },
  {
    number: "07",
    icon: "△",
    title: "Education",
    description:
      "Protect student information while addressing privacy, accessibility, and regulatory obligations.",
    regulations: [
      "FERPA (Student Privacy)",
      "COPPA (Children's Privacy)",
      "GDPR (International Students)",
      "State Privacy Laws",
      "Title IX (Student Rights)",
      "ADA Accessibility Requirements",
    ],
  },
  {
    number: "08",
    icon: "□",
    title: "Manufacturing",
    description:
      "Manage operational technology, supply-chain, information-security, and export-control risks.",
    regulations: [
      "NIST Cybersecurity Framework",
      "ISO 27001 (Information Security)",
      "OSHA Requirements",
      "Supply Chain Security (CFATS)",
      "Export Control (EAR/ITAR)",
      "Environmental Compliance",
    ],
  },
];

const regulations = [
  {
    name: "HIPAA",
    scope: "Healthcare",
    focus: "Protected Health Information",
    requirements:
      "Privacy, Security, Breach Notification, Audit Controls",
    reach: "USA",
  },
  {
    name: "PCI-DSS",
    scope: "Payment",
    focus: "Payment Card Data",
    requirements:
      "Cardholder Data Protection, Network Segmentation, Encryption",
    reach: "Global",
  },
  {
    name: "SOX",
    scope: "Finance",
    focus: "Financial Reporting",
    requirements:
      "Internal Controls, IT Governance, Audit Trails, Accountability",
    reach: "USA (Public Companies)",
  },
  {
    name: "GDPR",
    scope: "Privacy",
    focus: "Personal Data Protection",
    requirements:
      "Consent, Data Subject Rights, DPA, Breach Notification",
    reach: "EU/EEA",
  },
  {
    name: "CCPA/CPRA",
    scope: "Privacy",
    focus: "Consumer Privacy",
    requirements:
      "Opt-out Rights, Data Access, Deletion, Disclosure",
    reach: "California (expanding)",
  },
  {
    name: "FedRAMP",
    scope: "Government",
    focus: "Cloud Security",
    requirements:
      "NIST 800-53, ATO, Continuous Monitoring, Incident Response",
    reach: "USA Federal",
  },
  {
    name: "NERC-CIP",
    scope: "Energy",
    focus: "Grid Security",
    requirements:
      "Physical Security, System Security, Supply Chain Risk",
    reach: "North America (Electric Grid)",
  },
  {
    name: "FISMA",
    scope: "Government",
    focus: "Federal IT Security",
    requirements:
      "NIST Controls, Risk Assessment, System Authorization, Compliance",
    reach: "USA Federal",
  },
  {
    name: "FERPA",
    scope: "Education",
    focus: "Student Privacy",
    requirements:
      "Educational Records, Parental Rights, Data Disclosure, Audit",
    reach: "USA (Education)",
  },
  {
    name: "ISO 27001",
    scope: "Multi-Industry",
    focus: "Information Security",
    requirements:
      "ISMS, Risk Management, Controls, Certification, Audits",
    reach: "Global",
  },
];

const complianceAreas = [
  {
    title: "Data Protection & Privacy",
    subtitle: "Encrypt, Classify, Control",
    items: [
      "HIPAA: Encryption at rest/transit",
      "PCI-DSS: Cardholder data protection",
      "GDPR: Data subject rights & DPA",
      "SOX: Financial data classification",
      "FedRAMP: NIST 800-53 encryption",
    ],
  },
  {
    title: "Access Control & Identity",
    subtitle: "Authenticate, Authorize, Audit",
    items: [
      "HIPAA: Role-based access, audit logs",
      "PCI-DSS: Strong authentication, access controls",
      "SOX: Segregation of duties, access reviews",
      "FedRAMP: Multi-factor authentication (MFA)",
      "FISMA: Identity & access management",
    ],
  },
  {
    title: "Incident Response & Breach",
    subtitle: "Detect, Report, Contain",
    items: [
      "HIPAA: Breach notification (60 days)",
      "GDPR: Breach reporting (72 hours)",
      "CCPA: Breach notification required",
      "PCI-DSS: Incident response procedures",
      "SOX: Material incident disclosure",
    ],
  },
  {
    title: "Audit & Accountability",
    subtitle: "Track, Verify, Report",
    items: [
      "HIPAA: 6-year audit trail retention",
      "SOX: IT controls audit, audit logs",
      "PCI-DSS: Log review & monitoring",
      "FedRAMP: Continuous monitoring",
      "FISMA: Annual security assessment",
    ],
  },
  {
    title: "Risk Management",
    subtitle: "Assess, Mitigate, Monitor",
    items: [
      "HIPAA: Security risk assessment",
      "GDPR: Data protection impact assessment",
      "PCI-DSS: Vulnerability scanning",
      "NIST CSF: Risk framework",
      "FedRAMP: Continuous risk assessment",
    ],
  },
  {
    title: "Vendor & Third-Party Risk",
    subtitle: "Assess, Contract, Monitor",
    items: [
      "HIPAA: BAA (Business Associate Agreements)",
      "GDPR: Data Processing Agreements",
      "PCI-DSS: Third-party assessments",
      "SOX: Vendor risk management",
      "FedRAMP: Supply chain risk management",
    ],
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Industry & Regulatory Assessment",
    text: "Identify all applicable regulations based on industry, geography, data types, and business model.",
  },
  {
    number: "02",
    title: "Compliance Gap Analysis",
    text: "Assess current state against requirements. Identify control gaps, risks, and remediation priorities.",
  },
  {
    number: "03",
    title: "Control Design & Implementation",
    text: "Design and implement required controls aligned with specific regulatory requirements.",
  },
  {
    number: "04",
    title: "Documentation & Evidence",
    text: "Develop policies, procedures, and audit trails to demonstrate compliance and control effectiveness.",
  },
  {
    number: "05",
    title: "Testing & Validation",
    text: "Conduct internal assessments and independent audits to verify compliance maturity.",
  },
  {
    number: "06",
    title: "Certification & Audit",
    text: "Pursue required certifications (SOC 2, ISO 27001, FedRAMP ATO) and pass external audits.",
  },
  {
    number: "07",
    title: "Continuous Monitoring",
    text: "Establish ongoing monitoring, testing, and improvement processes to maintain compliance.",
  },
  {
    number: "08",
    title: "Regulatory Change Management",
    text: "Track regulatory updates, assess impact, and maintain continuous compliance as regulations evolve.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Risk Mitigation",
    text: "Reduce exposure to regulatory penalties, breach liability, and reputational damage.",
  },
  {
    number: "02",
    title: "Customer Trust",
    text: "Demonstrate compliance through certifications and audit reports. Competitive differentiator.",
  },
  {
    number: "03",
    title: "Business Enablement",
    text: "Enter regulated markets, win contracts requiring compliance, expand to regulated geographies.",
  },
  {
    number: "04",
    title: "Investor Confidence",
    text: "Board oversight, governance maturity, and compliance readiness improve investor perception.",
  },
  {
    number: "05",
    title: "Operational Resilience",
    text: "Incident response, disaster recovery, and business continuity ensure organizational resilience.",
  },
  {
    number: "06",
    title: "Data-Driven Decisions",
    text: "Compliance frameworks establish metrics, monitoring, and governance for security decision-making.",
  },
];

export default function IndustrySpecificRegulationsPage() {
  return (
    <main className="min-h-screen w-full bg-white text-[#171b19]">
      {/* =========================================================
          1. NAVBAR
      ========================================================= */}
      <Navigation />

      {/* =========================================================
          2. HERO - DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111412] text-[#f4f1eb] h-[980px]  pt-20">
        <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[600px] rounded-full bg-[#e65300]/10 blur-[120px]" />

<div className="mx-auto  grid min-h-[680px] w-full max-w-7xl items-center gap-24 px-8 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-28">          {/* LEFT */}
          <div >
            <p className="mb-7 pt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6a00]">
              COMPLY. COMPETE. GROW.
            </p>

            <h1 className="max-w-[1800px] text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Industry-Specific
              <br />
              Regulations
              <br />
              Framework
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 lg:text-xl">
              Navigate complex regulatory landscapes across healthcare,
              financial services, retail, technology, energy, and government.
              Achieve compliance while maintaining operational agility and
              competitive advantage.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 font-[20px]">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 "
              >
                Get Started <span>→</span>
              </a>

              <a
                href="#why-industry-regulations"
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
              >
                Learn More <span>↓</span>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:block">
            <div className="relative rounded-[32px] border border-white/10 bg-[#151916] p-8">
              <div className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(255,106,0,0.7)]" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                ANKH GRC
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/30">
                INDUSTRY COVERAGE
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Healthcare", "Finance", "Technology", "Energy"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                    >
                      <div className="mb-8 text-2xl text-orange-500">+</div>
                      <p className="text-sm text-white/70">{item}</p>
                    </div>
                  )
                )}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/35">
                  <span>REGULATORY COVERAGE</span>
                  <span className="text-orange-500">GLOBAL</span>
                </div>

                <div className="mt-4 h-px w-full bg-white/10">
                  <div className="h-px w-[82%] bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHY - WHITE
      ========================================================= */}
      <section
        id="why-industry-regulations"
        className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                01 / THE NEED
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Why Industry
                <br />
                Regulations
                <br />
                Matter
              </h2>
            </div>

            <div>
              <p className="max-w-4xl text-lg leading-8 text-black/60">
                Regulatory requirements vary dramatically by industry. A
                one-size-fits-all compliance approach fails. You need deep
                expertise across your specific regulations.
              </p>

              <div className="mt-12 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                {reasons.map((item, index) => (
                  <article
                    key={item.title}
                    className="border-b border-r border-black/10 px-6 py-8 lg:[&:nth-child(3n)]:border-r-0"
                  >
<h3 className="mt-5 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-base leading-6 text-black/55 ">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* =========================================================
    4. INDUSTRIES - DARK / GRID
========================================================= */}
<section
  id="industries"
  className="relative overflow-hidden bg-[#111412] py-24 text-[#f4f1eb] lg:py-32"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
      02 / INDUSTRY COVERAGE
    </p>

    <div className="flex items-end justify-between gap-8">
      <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
        Industries &
        <br />
        Key Regulations
      </h2>
    </div>

    {/* GRID - horizontal scrolling removed */}
    <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {industries.map((industry) => (
        <article
          key={industry.title}
          className="
            group
            relative
            flex
            min-h-[460px]
            w-full
            flex-col
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-[#151916]
            p-7
            transition
            duration-500
            hover:-translate-y-2
            hover:border-orange-500/60
          "
        >
{/* Top */}
          <div className="relative z-10 flex items-center justify-between">
          </div>

          {/* Content */}
          <div className="relative z-10 mt-auto">
            <div className="mb-5 text-3xl text-orange-500">
              {industry.icon}
            </div>

            <h3 className="max-w-[300px] text-2xl font-medium leading-tight tracking-[-0.025em]">
              {industry.title}
            </h3>

            <p className="mt-4 text-base leading-6 text-white/45">
              {industry.description}
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                KEY REGULATIONS
              </p>

              <div className="max-h-[105px] overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <ul className="space-y-2">
                  {industry.regulations.map((regulation) => (
                    <li
                      key={regulation}
                      className="flex gap-2 text-sm leading-5 text-white/55"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                      <span>{regulation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* =========================================================
          5. GLOBAL REGULATORY LANDSCAPE - WHITE
      ========================================================= */}
      <section
        id="regulations"
        className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                03 / REGULATORY LANDSCAPE
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Global
                <br />
                Regulatory
                <br />
                Landscape
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                Comprehensive regulatory coverage across regions, industries,
                and data types.
              </p>

              <div className="mt-10 overflow-x-auto border-t border-black/10">
                <table className="w-full min-w-[900px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-black/10">
                      <th className="px-4 py-5 pl-0 text-xs uppercase tracking-[0.15em] text-black/40">
                        Regulation
                      </th>
                      <th className="px-4 py-5 text-xs uppercase tracking-[0.15em] text-black/40">
                        Industry / Scope
                      </th>
                      <th className="px-4 py-5 text-xs uppercase tracking-[0.15em] text-black/40">
                        Primary Focus
                      </th>
                      <th className="px-4 py-5 text-xs uppercase tracking-[0.15em] text-black/40">
                        Key Requirements
                      </th>
                      <th className="px-4 py-5 pr-0 text-xs uppercase tracking-[0.15em] text-black/40">
                        Geographic Reach
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {regulations.map((item) => (
                      <tr
                        key={item.name}
                        className="border-b border-black/10 transition hover:bg-black/[0.025]"
                      >
                        <td className="px-4 py-5 pl-0 font-semibold">
                          {item.name}
                        </td>

                        <td className="px-4 py-5">
                          <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700">
                            {item.scope}
                          </span>
                        </td>

                        <td className="px-4 py-5 text-sm text-black/60">
                          {item.focus}
                        </td>

                        <td className="max-w-[300px] px-4 py-5 text-sm leading-6 text-black/60">
                          {item.requirements}
                        </td>

                        <td className="px-4 py-5 pr-0 text-sm text-black/55">
                          {item.reach}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. COMPLIANCE REQUIREMENTS - DARK
      ========================================================= */}
      <section
        id="compliance"
        className="bg-[#111412] py-24 text-[#f4f1eb] lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            04 / COMPLIANCE REQUIREMENTS
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Compliance Requirements
              <br />
              Across Industries
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/40">
              Common patterns and industry-specific compliance obligations.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {complianceAreas.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] lg:p-8"
              >
                  

                <h3 className="mt-7 text-xl font-medium tracking-[-0.02em]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/30">
                  {item.subtitle}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.items.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-white/50"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-orange-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. IMPLEMENTATION - WHITE
      ========================================================= */}
      <section
        id="implementation"
        className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                05 / IMPLEMENTATION
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Compliance
                <br />
                Implementation
                <br />
                Approach
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                A structured methodology for achieving and maintaining
                industry-specific compliance.
              </p>

              <div className="mt-12 grid border-t border-black/10 sm:grid-cols-2">
                {implementationSteps.map((step) => (
                  <article
                    key={step.number}
                    className="border-b border-r border-black/10 p-7  lg:p-8"
                  >
<h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. BUSINESS BENEFITS - DARK
      ========================================================= */}
      <section className="bg-[#111412] py-24 text-[#f4f1eb] lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            06 / BUSINESS VALUE
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Business Benefits
              <br />
              of Regulatory Compliance
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/40">
              Compliance creates competitive advantage, not just regulatory
              obligation.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="border-b border-r border-white/10 p-8 transition hover:bg-white/[0.025]"
              >
                <div className="flex items-center justify-between">
<span className="text-lg text-orange-500">+</span>
                </div>

                <h3 className="mt-12 text-xl font-medium">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          9. CTA
      ========================================================= */}
      <section
        id="contact"
        className="bg-[#ff6a00] px-6 py-24 text-[#111412] lg:px-10 lg:py-32 "
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] ">
            07 / NEXT STEP
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Build Industry-Compliant
            <br />
            Operations
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/55">
            Whether you operate in healthcare, financial services, government,
            energy, retail, or technology, Ankh GRC has deep expertise in your
            industry's specific regulatory requirements. We help you achieve
            compliance, maintain audit readiness, and leverage compliance as a
            competitive advantage.
          </p>

          <a
            href="mailto:info@ankhgrc.com"
            className="mt-10 inline-flex items-center gap-3 bg-[#111412] text-white px-7 py-4 text-sm font-semibold text-black transition "
          >
            Contact Ankh GRC
            <span>→</span>
          </a>
        </div>
      </section>

      {/* =========================================================
          10. FOOTER
      ========================================================= */}
     
      <Footer/>
    </main>
  );
}