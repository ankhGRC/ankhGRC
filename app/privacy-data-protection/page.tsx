"use client";

import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import { motion } from "framer-motion";

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
    <main className="min-h-screen overflow-x-hidden bg-[#171b19] text-[#f4f1ea] selection:bg-orange-500/30 selection:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(244,103,12,0.14),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.05),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10 lg:pb-32 lg:pt-12">
          <div className="flex items-center justify-between bg-white border-b border-black/10 px-6 py-4 lg:px-10">
<Navigation />
        
          </div>

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-10 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pt-20"
          >
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
                  Get Started 
                </a>

                <a
                  href="#why-privacy"
                  className=" inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
                  
                >
                  Learn More 
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
          </motion.div>
        </div>
      </section>

      {/* Why — HORIZONTAL SCROLL */}
      <section id="why-privacy" className="border-b border-white/10 bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
          <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.7 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">01 / The Need</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] lg:text-5xl">Why Organizations Need This Framework</h2>
            </motion.div>
            <div>
              <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.65 }}
                className="max-w-3xl text-base leading-7 text-black/60">
                Organizations today face unprecedented pressure from evolving regulations, expanding AI adoption,
                and growing stakeholder expectations around responsible data use and governance.
              </motion.p>
              <div className="mt-7 overflow-hidden">
                <div className="flex gap-4 overflow-x-auto pb-3">
                  {challenges.map((item, index) => (
                    <motion.article key={item.title}
                      initial={{ opacity: 0, x: 80, scale: 0.92, rotate: index % 2 ? -2 : 2 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -7 }}
                      className="min-h-[220px] w-[285px] shrink-0 border border-black/10 bg-white/45 p-6 transition-colors duration-500 hover:border-orange-500/50 sm:w-[320px]">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: false }}
                        transition={{ duration: 0.4 }} className="h-px bg-orange-600" />
                      <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-black/55">{item.text}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY DOMAINS — BENTO GRID */}
      <section className="relative overflow-hidden bg-[#111412] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.75 }}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">Privacy • Data Protection • AI Governance</p>
            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] text-[#f4f1eb] sm:text-5xl lg:text-6xl">
              Privacy by design.<br />Trust by default.
            </h2>
          </motion.div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map(([number, title, description], index) => {
              const layouts = [
                "sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[310px]",
                "min-h-[205px]","min-h-[205px]","lg:col-span-2 min-h-[205px]",
                "min-h-[205px]","min-h-[205px]","lg:col-span-2 min-h-[205px]",
                "min-h-[205px]","min-h-[205px]","lg:col-span-2 min-h-[205px]",
                "min-h-[205px]","min-h-[205px]","lg:col-span-2 min-h-[205px]"
              ];
              return (
                <motion.article key={number}
                  initial={{ opacity: 0, y: index % 2 ? 45 : 65, x: index % 3 === 0 ? -35 : 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.14 }}
                  transition={{ duration: 0.65, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#151916] p-6 transition-colors duration-500 hover:border-[#ff6a00]/45 ${layouts[index]}`}>
                  <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-64 rounded-full bg-[#ff6a00]/[0.05] blur-[60px] transition-all duration-700 group-hover:bg-[#ff6a00]/[0.1]" />
                  <motion.div initial={{ width: 0 }} whileInView={{ width: index === 0 ? 65 : 40 }}
                    viewport={{ once: false }} transition={{ duration: 0.45 }} className="relative h-px bg-[#ff6a00]" />
                  <div className="relative mt-5">
                    <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/25">Core Domain</p>
                    <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.025em] text-[#f4f1eb] sm:text-2xl">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#f4f1eb]/50">{description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Coverage — HORIZONTAL SCROLL */}
      <section id="coverage" className="border-b border-white/10 bg-[#242825]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">03 / Global Coverage</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] lg:text-5xl">Global Regulatory Coverage</h2>
            </motion.div>
            <p className="max-w-xl text-sm leading-7 text-white/50">Comprehensive expertise across privacy laws and AI governance frameworks worldwide.</p>
          </div>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
            {regions.map((region, index) => (
              <motion.article key={region.title}
                initial={{ opacity: 0, x: 80, scale: 0.93 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -7 }}
                className="min-h-[205px] w-[285px] shrink-0 border border-white/10 bg-[#242825] p-6 transition-colors duration-500 hover:border-orange-500/45 sm:w-[310px]">
                <div className="border-b border-white/10 pb-4"><h3 className="text-xl font-medium">{region.title}</h3></div>
                <ul className="mt-5 space-y-2">
                  {region.items.map((item) => <li key={item} className="text-sm text-white/55"><span className="mr-2 text-orange-500">•</span>{item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — COMPACT BENTO */}
      <section id="outcomes" className="bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
          <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div initial={{ opacity: 0, x: -55 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.7 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">04 / Outcomes</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] lg:text-5xl">Business Outcomes</h2>
            </motion.div>
            <div>
              <p className="max-w-3xl text-base leading-7 text-black/60">Build a Privacy and AI Governance program that drives business value while reducing risk.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {outcomes.map((item, index) => (
                  <motion.article key={item.title}
                    initial={{ opacity: 0, y: index % 2 ? 40 : 55, x: index % 2 ? 25 : -25 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5 }}
                    className="border border-black/10 bg-white/35 p-6 transition-colors duration-500 hover:border-orange-500/45">
                    <div className="h-px w-9 bg-orange-600" />
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/55">{item.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-orange-500 text-black">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[70px] border-black/10" />

        <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
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
            Contact Ankh GRC Today 
          </a>
        </motion.div>
      </section>

      {/* Footer */}
    
      <Footer/>
    </main>
  );
}


