import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
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
  ["01", "Information Security Governance", "Establish governance structures that define security accountability, risk appetite, and board oversight across the organization."],
  ["02", "Asset Management & Inventory", "Identify, classify, and maintain visibility over information assets, hardware, software, and systems."],
  ["03", "Access Control & Identity Management", "Implement IAM, role-based access controls, and authentication mechanisms aligned with business needs."],
  ["04", "Cryptography & Data Protection", "Protect sensitive data in transit and at rest through encryption, key management, and secure data handling procedures."],
  ["05", "Threat Detection & Monitoring", "Implement SIEM, endpoint detection and response (EDR), and continuous monitoring to identify security events and anomalies."],
  ["06", "Incident Response & Management", "Establish incident response plans, playbooks, and crisis management procedures to minimize breach impact."],
  ["07", "Vulnerability Management", "Conduct vulnerability assessments, penetration testing, and patch management to reduce attack surface."],
  ["08", "Business Continuity & Disaster Recovery", "Maintain resilience through backup strategies, recovery time objectives (RTO), and continuity of critical services."],
  ["09", "Third-Party & Supply Chain Security", "Assess and monitor security risks from vendors, cloud providers, and critical service providers."],
  ["10", "Security Awareness & Culture", "Build a security-conscious culture through training, awareness, and accountability across all levels."],
] as const;

const standards = [
  ["ISO 27001", "Information Security Management System", "14 Domains | 114 Controls | Certifiable"],
  ["NIST CSF 2.0", "Identify • Protect • Detect • Respond • Recover", "Risk-based cybersecurity framework"],
  ["SOC 2 Type II", "Trust Services Criteria", "Security • Availability • Processing Integrity"],
  ["CIS Controls", "Prioritized security best practices", "Actionable security framework"],
  ["ISO 27701", "Privacy Information Management Systems", "Data protection focus"],
  ["Industry-Specific", "HIPAA | PCI-DSS | FedRAMP | HITRUST", "Regulatory alignment"],
] as const;

const pillars = [
  ["01", "People", "Security-conscious culture, trained teams, clear accountability, and executive leadership commitment."],
  ["02", "Process", "Documented policies, procedures, incident response playbooks, and continuous improvement processes."],
  ["03", "Technology", "Endpoint protection, threat detection tools, access controls, encryption, and security infrastructure."],
  ["04", "Metrics & Monitoring", "Real-time dashboards, KPIs, continuous monitoring, and data-driven security decision-making."],
  ["05", "Governance & Accountability", "Risk management, board oversight, regulatory compliance, and transparent reporting to stakeholders."],
] as const;

const outcomes = [
  ["Threat Detection & Response", "Faster threat identification and incident response, reducing dwell time and breach impact."],
  ["Regulatory Compliance", "Improved compliance with ISO 27001, NIST CSF, SOC 2, and industry-specific security standards."],
  ["Risk Reduction", "Quantifiable reduction in security incidents, vulnerabilities, and exposure to cyber threats."],
  ["Operational Resilience", "Reduced downtime, faster recovery from incidents, and continuity of critical business functions."],
  ["Customer & Stakeholder Trust", "Enhanced customer confidence through demonstrated security posture and transparent risk communication."],
  ["Competitive Advantage", "Differentiation through superior security posture and ability to win security-sensitive contracts."],
] as const;

export default function InformationSecurityStandardPage() {
  return (
    <main className="min-h-screen bg-[#171b19] text-[#f4f1ea] selection:bg-orange-500/30 selection:text-white">
<Navigation />
      {/* Hero — same structure as Data Privacy / Cross-Border */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(244,103,12,0.14),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.05),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10 lg:pb-32 lg:pt-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em]">
              <span className="text-orange-500">ANKH</span> GRC
            </Link>

            <Link href="/" className="text-sm text-white/60 transition hover:text-orange-400">
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
                Build a resilient security program aligned with ISO 27001, NIST CSF,
                and SOC 2 standards. Enable threat detection, rapid response, and
                continuous improvement while maintaining competitive advantage.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  Get Started <span>→</span>
                </a>

                <a
  href="#why-information-security"
  className="..."
>
  Learn More
  <span>→</span>
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

      {/* Why */}
      <section  id="why-information-security" className="border-b border-white/10 bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                01 / The Need
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Why Information Security Matters
              </h2>
            </div>

            <div>
              <p className="max-w-4xl text-lg leading-8 text-black/60">
                Organizations face evolving cyber threats, regulatory pressure,
                and stakeholder expectations. A comprehensive information security
                program is essential for business continuity, customer trust, and
                competitive resilience.
              </p>

              <div className="mt-12 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                {challenges.map((item, index) => (
                  <article
                    key={item.title}
                    className="border-b border-r border-black/10 px-6 py-8 lg:[&:nth-child(3n)]:border-r-0"
                  >
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-[19px] leading-6 text-black/55">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Security Domains — same horizontal curved-card treatment */}
      <section id="framework" className="relative overflow-hidden bg-[#111412] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
            Information Security • Governance • Resilience
          </p>

          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] text-[#f4f1eb] sm:text-5xl lg:text-6xl">
            The 10 Core Security Domains
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4f1eb]/50">
            A comprehensive, integrated approach to information security aligned
            with ISO 27001, NIST Cybersecurity Framework (CSF), and industry best
            practices. Each domain builds on the others to create a resilient
            security posture.
          </p>
        </div>

                {/* Cards — contained grid, no horizontal scrolling */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:px-8 lg:mt-28 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {domains.map(([number, title, text]) => (
              <article
                key={title}
      className="
  group
  relative
  h-[430px]
  w-full
  overflow-hidden
  rounded-[34px]
  border
  border-[#f4f1eb]/10
  bg-[#151916]
  transition-all
  duration-700
  ease-out
  hover:-translate-y-3
  hover:border-[#ff6a00]/40
  lg:h-[470px]
"
              >
                {/* Orange glow — SAME */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -left-20
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[#ff6a00]/[0.07]
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:bg-[#ff6a00]/[0.13]
                  "
                />

                {/* Curved line — SAME */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[250px]
                    -left-[90px]
                    h-[470px]
                    w-[620px]
                    rounded-[50%]
                    border
                    border-[#ff6a00]/20
                    transition-transform
                    duration-1000
                    group-hover:scale-110
                  "
                />

                {/* Card content — SAME */}
                <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">

                  {/* Title + Description */}
                  <div>
                    <div className="mb-8 h-px w-10 bg-[#ff6a00] transition-all duration-500 group-hover:w-20" />

                    <h3
                      className="
                        max-w-[340px]
                        text-2xl
                        font-medium
                        leading-tight
                        tracking-[-0.025em]
                        text-[#f4f1eb]
                        sm:text-3xl
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-[340px]
                        text-sm
                        leading-7
                        text-[#f4f1eb]/50
                        sm:text-base
                        sm:leading-8
                      "
                    >
                      {text}
                    </p>
                  </div>

                  {/* Bottom — SAME */}
                  <div className="flex items-end justify-between">
                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.3em]
                        text-[#f4f1eb]/25
                      "
                    >
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
        </div>
      </section>

      {/* Standards */}
      <section id="standards" className="border-b border-white/10 bg-[#242825]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                03 / Global Standards
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Global Security Standards Coverage
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/50">
              Comprehensive expertise across international security frameworks
              and compliance standards.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {standards.map(([title, subtitle, detail]) => (
              <article key={title} className="bg-[#242825] p-8 lg:min-h-[250px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <h3 className="text-xl font-medium">{title}</h3>
                </div>

                <p className="mt-6 text-sm text-white/70">{subtitle}</p>
                <p className="mt-3 text-sm text-white/40">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="border-b border-white/10 bg-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            04 / Security Excellence
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
            Five Pillars of Security Excellence
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">
            A balanced approach to building enterprise-wide security resilience.
          </p>

          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-5">
            {pillars.map(([number, title, text]) => (
              <article key={title} className="bg-[#171b19] p-7">
                <h3 className="mt-8 text-xl font-medium">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — white like the other pages */}
      <section id="outcomes" className="bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                05 / Outcomes
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] lg:text-6xl">
                Business Outcomes
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/60">
                A comprehensive information security program delivers measurable
                business value across resilience, compliance, risk reduction,
                and stakeholder trust.
              </p>

              <div className="mt-12 grid border-t border-black/10 md:grid-cols-2">
                {outcomes.map(([title, text], index) => (
                  <article
                    key={title}
                    className="border-b border-black/10 py-8 md:pr-10"
                  >
                    <div className="flex gap-5">
                      <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-black/55">
                          {text}
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
            ANKH GRC / SECURITY RESILIENCE
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-none tracking-[-0.05em] lg:text-8xl">
            Build Enterprise-Wide Security Resilience
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-black/65">
            Whether you are establishing a security program, pursuing ISO 27001
            certification, implementing NIST CSF, achieving SOC 2 compliance,
            or strengthening existing controls, Ankh GRC can help you develop
            a scalable, effective information security framework.
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
      
      <Footer/>
    </main>
  );
}
