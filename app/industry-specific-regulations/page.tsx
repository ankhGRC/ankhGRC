"use client";

import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import { motion } from "framer-motion";

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
  const reveal = {
    hidden: { opacity: 0, y: 45, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#171b19]">
      <Navigation />

      {/* HERO — compact, immediate motion */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden bg-[#111412] pt-24 text-[#f4f1eb] lg:min-h-[760px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.75, x: 120 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#e65300]/10 blur-[120px]"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6a00]">
              COMPLY. COMPETE. GROW.
            </p>
            <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Industry-Specific
              <br />
              Regulations
              <br />
              Framework
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-7 text-white/60 lg:text-lg">
              Navigate complex regulatory landscapes across healthcare,
              financial services, retail, technology, energy, and government.
              Achieve compliance while maintaining operational agility and
              competitive advantage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
                Get Started
              </a>
              <a href="#why-industry-regulations" className="inline-flex border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400">
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 3, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative rounded-[30px] border border-white/10 bg-[#151916] p-7">
              <motion.div
                animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(255,106,0,0.7)]"
              />
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">ANKH GRC</p>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/30">INDUSTRY COVERAGE</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Healthcare", "Finance", "Technology", "Energy"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="mb-5 text-2xl text-orange-500">+</div>
                    <p className="text-sm text-white/70">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/35">
                  <span>REGULATORY COVERAGE</span>
                  <span className="text-orange-500">GLOBAL</span>
                </div>
                <div className="mt-3 h-px w-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="h-px bg-orange-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY — horizontal scrolling, compact */}
      <section id="why-industry-regulations" className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">01 / THE NEED</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Why Industry Regulations Matter
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-8 max-w-3xl text-base leading-7 text-black/60"
          >
            Regulatory requirements vary dramatically by industry. A one-size-fits-all compliance approach fails. You need deep expertise across your specific regulations.
          </motion.p>

          <div className="-mx-6 overflow-x-auto px-6 pb-3 lg:-mx-10 lg:px-10">
            <div className="flex w-max gap-4">
              {reasons.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="w-[300px] rounded-[24px] border border-black/10 bg-white/40 p-6 sm:w-[340px]"
                >
                  <div className="h-px w-10 bg-orange-600" />
                  <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES — BENTO */}
      <section id="industries" className="relative overflow-hidden bg-[#111412] py-16 text-[#f4f1eb] lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">02 / INDUSTRY COVERAGE</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Industries & Key Regulations
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {industries.map((industry, index) => {
              const layouts = [
                "lg:col-span-7 lg:row-span-2",
                "lg:col-span-5",
                "lg:col-span-5",
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-4",
                "lg:col-span-5",
                "lg:col-span-7",
              ];
              return (
                <motion.article
                  key={industry.title}
                  initial={{ opacity: 0, y: 55, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  whileHover={{ y: -7, scale: 1.01 }}
                  className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#151916] p-6 lg:min-h-0 lg:p-7 ${layouts[index]}`}
                >
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: index * 0.06 + 0.15 }}
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/[0.055] blur-[70px]"
                  />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex justify-end text-2xl text-orange-500/80">{industry.icon}</div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 45 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: index * 0.06 + 0.2 }}
                      className="mt-3 h-px bg-orange-500"
                    />
                    <h3 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/45">{industry.description}</p>
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">KEY REGULATIONS</p>
                      <ul className="grid gap-1.5 sm:grid-cols-2">
                        {industry.regulations.map((regulation, regulationIndex) => (
                          <motion.li
                            key={regulation}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.05 }}
                            transition={{ duration: 0.3, delay: index * 0.05 + regulationIndex * 0.025 }}
                            className="flex gap-2 text-xs leading-5 text-white/50"
                          >
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                            <span>{regulation}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGULATIONS — horizontal table rail */}
      <section id="regulations" className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">03 / REGULATORY LANDSCAPE</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">Global Regulatory Landscape</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">Comprehensive regulatory coverage across regions, industries, and data types.</p>
          </motion.div>

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="flex w-max gap-4">
              {regulations.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="w-[270px] rounded-[22px] border border-black/10 bg-white/35 p-5"
                >
                  <p className="text-2xl font-semibold">{item.name}</p>
                  <span className="mt-3 inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700">{item.scope}</span>
                  <p className="mt-5 text-xs uppercase tracking-[0.15em] text-black/40">{item.focus}</p>
                  <p className="mt-2 text-sm leading-6 text-black/55">{item.requirements}</p>
                  <p className="mt-4 text-xs text-black/40">{item.reach}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE — asymmetric bento */}
      <section id="compliance" className="bg-[#111412] py-16 text-[#f4f1eb] lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">04 / COMPLIANCE REQUIREMENTS</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">Compliance Requirements Across Industries</h2>
          </motion.div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {complianceAreas.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 55, rotate: index % 2 ? 1.5 : -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`rounded-[24px] border border-white/10 bg-[#151916] p-6 ${index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                <div className="h-px w-10 bg-orange-500" />
                <h3 className="mt-6 text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/30">{item.subtitle}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.items.map((point) => (
                    <li key={point} className="flex gap-3 text-xs leading-5 text-white/50">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-orange-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION — compact timeline */}
      <section id="implementation" className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">05 / IMPLEMENTATION</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">Compliance Implementation Approach</h2>
          </motion.div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-[20px] border border-black/10 bg-white/30 p-5"
              >
                <div className="h-px w-8 bg-orange-600" />
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS — staggered bento */}
      <section className="bg-[#111412] py-16 text-[#f4f1eb] lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">06 / BUSINESS VALUE</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">Business Benefits of Regulatory Compliance</h2>
          </motion.div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.number}
                initial={{ opacity: 0, scale: 0.9, y: 35 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`rounded-[24px] border border-white/10 bg-[#151916] p-6 ${index === 0 ? "lg:row-span-2" : ""}`}
              >
                <div className="h-px w-10 bg-orange-500" />
                <h3 className="mt-7 text-xl font-medium">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{benefit.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-[#ff6a00] px-6 py-16 text-[#111412] lg:px-10 lg:py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">07 / NEXT STEP</p>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Build Industry-Compliant Operations
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-black/55">
            Whether you operate in healthcare, financial services, government,
            energy, retail, or technology, Ankh GRC has deep expertise in your
            industry's specific regulatory requirements. We help you achieve
            compliance, maintain audit readiness, and leverage compliance as a
            competitive advantage.
          </p>
          <a href="mailto:info@ankhgrc.com" className="mt-7 inline-flex bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90">
            Contact Ankh GRC
          </a>
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}
