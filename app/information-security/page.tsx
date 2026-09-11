"use client";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "Cyber Threat Evolution",
    text: "Advanced persistent threats, ransomware, and zero-day exploits evolve constantly. A structured security program enables rapid threat detection and response.",
  },
  {
    title: "Regulatory Compliance",
    text: "Navigate ISO 27001, NIST CSF, SOC 2, and emerging privacy regulations with a unified compliance framework.",
  },
  {
    title: "Critical Infrastructure Protection",
    text: "Protect customer data, intellectual property, and operational systems from breach, compromise, or loss.",
  },
  {
    title: "Third-Party Risk",
    text: "Assess and monitor security risks from vendors, suppliers, and service providers across the supply chain.",
  },
  {
    title: "Incident Readiness",
    text: "Establish detection, response, and recovery capabilities to minimize breach impact and demonstrate resilience.",
  },
  {
    title: "Stakeholder Trust",
    text: "Communicate security posture transparently to customers, investors, regulators, and employees.",
  },
];

const domains = [
  [
    "01",
    "Information Security Governance",
    "Establish governance structures that define security accountability, risk appetite, and board oversight across the organization.",
  ],
  [
    "02",
    "Asset Management & Inventory",
    "Identify, classify, and maintain visibility over information assets, hardware, software, and systems.",
  ],
  [
    "03",
    "Access Control & Identity Management",
    "Implement IAM, role-based access controls, and authentication mechanisms aligned with business needs.",
  ],
  [
    "04",
    "Cryptography & Data Protection",
    "Protect sensitive data in transit and at rest through encryption, key management, and secure data handling procedures.",
  ],
  [
    "05",
    "Threat Detection & Monitoring",
    "Implement SIEM, endpoint detection and response (EDR), and continuous monitoring to identify security events and anomalies.",
  ],
  [
    "06",
    "Incident Response & Management",
    "Establish incident response plans, playbooks, and crisis management procedures to minimize breach impact.",
  ],
  [
    "07",
    "Vulnerability Management",
    "Conduct vulnerability assessments, penetration testing, and patch management to reduce attack surface.",
  ],
  [
    "08",
    "Business Continuity & Disaster Recovery",
    "Maintain resilience through backup strategies, recovery time objectives (RTO), and continuity of critical services.",
  ],
  [
    "09",
    "Third-Party & Supply Chain Security",
    "Assess and monitor security risks from vendors, cloud providers, and critical service providers.",
  ],
  [
    "10",
    "Security Awareness & Culture",
    "Build a security-conscious culture through training, awareness, and accountability across all levels.",
  ],
] as const;

const standards = [
  [
    "ISO 27001",
    "Information Security Management System",
    "14 Domains | 114 Controls | Certifiable",
  ],
  [
    "NIST CSF 2.0",
    "Identify • Protect • Detect • Respond • Recover",
    "Risk-based cybersecurity framework",
  ],
  [
    "SOC 2 Type II",
    "Trust Services Criteria",
    "Security • Availability • Processing Integrity",
  ],
  [
    "CIS Controls",
    "Prioritized security best practices",
    "Actionable security framework",
  ],
  [
    "ISO 27701",
    "Privacy Information Management Systems",
    "Data protection focus",
  ],
  [
    "Industry-Specific",
    "HIPAA | PCI-DSS | FedRAMP | HITRUST",
    "Regulatory alignment",
  ],
] as const;

const pillars = [
  [
    "01",
    "People",
    "Security-conscious culture, trained teams, clear accountability, and executive leadership commitment.",
  ],
  [
    "02",
    "Process",
    "Documented policies, procedures, incident response playbooks, and continuous improvement processes.",
  ],
  [
    "03",
    "Technology",
    "Endpoint protection, threat detection tools, access controls, encryption, and security infrastructure.",
  ],
  [
    "04",
    "Metrics & Monitoring",
    "Real-time dashboards, KPIs, continuous monitoring, and data-driven security decision-making.",
  ],
  [
    "05",
    "Governance & Accountability",
    "Risk management, board oversight, regulatory compliance, and transparent reporting to stakeholders.",
  ],
] as const;

const outcomes = [
  [
    "Threat Detection & Response",
    "Faster threat identification and incident response, reducing dwell time and breach impact.",
  ],
  [
    "Regulatory Compliance",
    "Improved compliance with ISO 27001, NIST CSF, SOC 2, and industry-specific security standards.",
  ],
  [
    "Risk Reduction",
    "Quantifiable reduction in security incidents, vulnerabilities, and exposure to cyber threats.",
  ],
  [
    "Operational Resilience",
    "Reduced downtime, faster recovery from incidents, and continuity of critical business functions.",
  ],
  [
    "Customer & Stakeholder Trust",
    "Enhanced customer confidence through demonstrated security posture and transparent risk communication.",
  ],
  [
    "Competitive Advantage",
    "Differentiation through superior security posture and ability to win security-sensitive contracts.",
  ],
] as const;

export default function InformationSecurityStandardPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#171b19] text-[#f4f1ea] selection:bg-orange-500/30 selection:text-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(244,103,12,0.14),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.05),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10 lg:pb-32 lg:pt-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.28em]"
            >
              <span className="text-orange-500">ANKH</span> GRC
            </Link>

            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-orange-400"
            >
              Back to Home
            </Link>
          </div>

          <div className="grid gap-14 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pt-28">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
                Protect. Detect. Respond. Recover. Excel.
              </p>

              <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                Information Security Standard Framework
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 lg:text-xl">
                Build a resilient security program aligned with ISO 27001,
                NIST CSF, and SOC 2 standards. Enable threat detection, rapid
                response, and continuous improvement while maintaining
                competitive advantage.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  Get Started 
                </a>

                <a
                  href="#why-information-security"
                  className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
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
                  Security
                  <br />
                  <span className="text-white/45">by design.</span>
                </p>

                <div className="mt-8 h-px w-24 bg-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY — HORIZONTAL SCROLL */}
      <section
        id="why-information-security"
        className="border-b border-white/10 bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                01 / The Need
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Why Information Security Matters
              </h2>
            </motion.div>

            <div className="min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl text-lg leading-8 text-black/60"
              >
                Organizations face evolving cyber threats, regulatory
                pressure, and stakeholder expectations. A comprehensive
                information security program is essential for business
                continuity, customer trust, and competitive resilience.
              </motion.p>

              <div className="relative mt-12">
                <div
                  className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3"
                >
                  {challenges.map((item, index) => (
                    <motion.article
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: 120,
                        rotate: index % 2 === 0 ? 3 : -3,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        rotate: 0,
                        scale: 1,
                      }}
                      viewport={{ once: false, amount: 0.35 }}
                      transition={{
                        duration: 0.75,
                        delay: index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -10, scale: 1.025 }}
                      className="group min-h-[225px] border border-black/10 bg-white/45 p-7 transition-colors duration-500 hover:border-orange-500/50"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 42 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.55, delay: index * 0.1 + 0.15 }}
                        className="h-px bg-orange-600"
                      />

                      <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-black/55">
                        {item.text}
                      </p>
                    </motion.article>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SECURITY DOMAINS — BENTO GRID */}
      <section
        id="framework"
        className="relative overflow-hidden bg-[#111412] py-16 lg:py-20"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.035] blur-[120px]" />
          <div className="absolute bottom-[-15%] right-[-10%] h-[600px] w-[600px] rounded-full bg-orange-500/[0.025] blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
              Information Security • Governance • Resilience
            </p>

            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] text-[#f4f1eb] sm:text-5xl lg:text-7xl">
              The 10 Core Security Domains
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4f1eb]/50">
              A comprehensive, integrated approach to information security
              aligned with ISO 27001, NIST Cybersecurity Framework (CSF), and
              industry best practices. Each domain builds on the others to
              create a resilient security posture.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {domains.map(([number, title, description], index) => {
              const spans = "w-full";

              return (
                <motion.article
                  key={number}
                  initial={{
                    opacity: 0,
                    y: index % 2 === 0 ? 90 : -70,
                    x: index % 3 === 0 ? -60 : 60,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                  }}
                  viewport={{ once: false, amount: 0.18 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -9,
                    scale: 1.015,
                  }}
                  className={`group relative min-h-[245px] overflow-hidden rounded-2xl border border-white/10 bg-[#171b19] p-7 transition-all duration-500 hover:border-orange-500/45 lg:p-8 ${spans}`}
                >
                  <motion.div
                    className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/[0.05] blur-[75px]"
                    whileHover={{ scale: 1.35 }}
                    transition={{ duration: 0.8 }}
                  />

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: index === 0 ? 90 : 48 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.07 + 0.18,
                    }}
                    className="relative h-px bg-orange-500"
                  />

                  <div className="relative mt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                      Core Security Domain
                    </p>

                    <h3
                      className={
                        index === 0
                          ? "mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-0.035em] text-[#f4f1eb] sm:text-4xl lg:text-5xl"
                          : "mt-5 max-w-xl text-2xl font-medium leading-tight tracking-[-0.03em] text-[#f4f1eb] sm:text-3xl"
                      }
                    >
                      {title}
                    </h3>

                    <p
                      className={
                        index === 0
                          ? "mt-6 max-w-xl text-base leading-8 text-white/45 sm:text-lg"
                          : "mt-5 max-w-xl text-sm leading-7 text-white/45"
                      }
                    >
                      {description}
                    </p>
                  </div>

                  <motion.div
                    className="pointer-events-none absolute bottom-[-100px] left-[-80px] h-64 w-80 rounded-full border border-orange-500/10"
                    whileHover={{ scale: 1.18, rotate: 4 }}
                    transition={{ duration: 0.9 }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STANDARDS — CLEAN GRID */}
      <section
        id="standards"
        className="border-b border-white/10 bg-[#242825]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              03 / Global Standards
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
              Global Security Standards Coverage
            </h2>
            <p className="mt-6 text-base leading-7 text-white/50 lg:text-lg">
              Comprehensive expertise across international security frameworks
              and compliance standards.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {standards.map(([title, subtitle, detail], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="min-h-[235px] rounded-2xl border border-white/10 bg-[#171b19] p-7 transition-colors duration-300 hover:border-orange-500/40 lg:p-8"
              >
                <div className="h-px w-12 bg-orange-500" />
                <h3 className="mt-7 text-2xl font-medium tracking-[-0.025em]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-white/70">
                  {subtitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/40">
                  {detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE PILLARS — CLEAN GRID */}
      <section className="border-b border-white/10 bg-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              04 / Security Excellence
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
              Five Pillars of Security Excellence
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/50">
              A balanced approach to building enterprise-wide security
              resilience.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {pillars.map(([number, title, description], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="min-h-[220px] rounded-2xl border border-white/10 bg-[#141816] p-7 transition-colors duration-300 hover:border-orange-500/40 lg:p-8"
              >
                <div className="h-px w-11 bg-orange-500" />
                <h3 className="mt-7 text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES — REVEAL GRID */}
      <section
        id="outcomes"
        className="bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                05 / Outcomes
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Business Outcomes
              </h2>
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl text-lg leading-8 text-black/60"
              >
                A comprehensive information security program delivers
                measurable business value across resilience, compliance, risk
                reduction, and stakeholder trust.
              </motion.p>

              <div className="mt-12 space-y-3">
                {outcomes.map(([title, description], index) => (
                  <motion.article
                    key={title}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -90 : 90,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ x: 10 }}
                    className="group border-t border-black/10 py-7 transition-colors duration-300 hover:border-orange-500"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em]">
                          {title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/55">
                          {description}
                        </p>
                      </div>

                      <motion.div
                        className="mt-2 hidden h-2 w-2 shrink-0 rounded-full bg-orange-600 sm:block"
                        whileHover={{ scale: 2 }}
                      />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-orange-500 text-black"
      >
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[70px] border-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
            ANKH GRC / SECURITY RESILIENCE
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-5xl text-5xl font-medium leading-none tracking-[-0.05em] lg:text-8xl"
          >
            Build Enterprise-Wide Security Resilience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-8 max-w-4xl text-lg leading-8 text-black/65"
          >
            Whether you are establishing a security program, pursuing ISO 27001
            certification, implementing NIST CSF, achieving SOC 2 compliance,
            or strengthening existing controls, Ankh GRC can help you develop
            a scalable, effective information security framework.
          </motion.p>

          <a
            href="mailto:contact@ankhgrc.com"
            className="mt-10 inline-flex items-center gap-4 border border-black bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-transparent hover:text-black"
          >
            Contact Ankh GRC Today 
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}