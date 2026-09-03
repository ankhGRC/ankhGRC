"use client";

import React from "react";
import Navigation from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const frameworks = [
  {
    number: "01",
    region: "EUROPEAN UNION",
    title: "European Union",
    items: [
      "NIS2 (Network & Information Security Directive 2)",
      "TISAX (Trusted Information Security Assessment Exchange)",
      "GDPR (Data Protection)",
      "Digital Operational Resilience Act (DORA)",
      "Critical Infrastructure Protection Regulation",
    ],
  },
  {
    number: "02",
    region: "UNITED STATES",
    title: "United States",
    items: [
      "SEC Cybersecurity Rules (Public Companies)",
      "NIST Cybersecurity Framework 2.0",
      "FISMA (Federal Systems)",
      "NERC-CIP (Electric Grid)",
      "State-Level Privacy & Breach Notification Laws",
    ],
  },
  {
    number: "03",
    region: "CRITICAL INFRASTRUCTURE",
    title: "Critical Infrastructure",
    items: [
      "NERC-CIP (Energy Sector)",
      "CISA Security Requirements (US Government)",
      "ISO 27001 (Global Security Standard)",
      "NIS2 (EU Critical Sectors)",
      "DHS 2024 Cybersecurity Requirements",
    ],
  },
  {
    number: "04",
    region: "FINANCIAL SERVICES",
    title: "Financial Services",
    items: [
      "SEC Cybersecurity Disclosure Rules",
      "OCC Cybersecurity Guidance",
      "DORA (EU Digital Resilience)",
      "PCI-DSS (Payment Card Security)",
      "GLBA (Safeguards Rule Updates)",
    ],
  },
  {
    number: "05",
    region: "HEALTHCARE",
    title: "Healthcare",
    items: [
      "HIPAA Security Rule (enhanced)",
      "HITECH Breach Notification",
      "HITRUST CSF",
      "HHS OCR Enforcement Actions",
      "HIPAA Audit Protocols",
    ],
  },
  {
    number: "06",
    region: "EMERGING STANDARDS",
    title: "Emerging Standards",
    items: [
      "China Cybersecurity Law",
      "Japan FISC Guidance",
      "Singapore PDPC Security Standards",
      "UAE & Middle East Frameworks",
      "Industry-Specific Regulations",
    ],
  },
];

const challenges = [
  {
    number: "01",
    title: "Regulatory Complexity",
    text: "Overlapping frameworks: NIS2 (EU), SEC Rules (USA), TISAX (Defense), NERC-CIP (Energy), NIST standards evolving constantly.",
  },
  {
    number: "02",
    title: "Breach Reporting Mandates",
    text: "NIS2 requires reporting within 24-72 hours; SEC rules require disclosure to public; HIPAA 60-day notification. Miss deadlines = penalties.",
  },
  {
    number: "03",
    title: "Critical Infrastructure Designation",
    text: "Organizations in finance, energy, telecom, healthcare, water face stricter requirements. Supply chain becomes regulated.",
  },
  {
    number: "04",
    title: "Board & Executive Accountability",
    text: "SEC, NIS2, and emerging regulations require board oversight of cyber risk. CEOs/CISOs face personal liability.",
  },
  {
    number: "05",
    title: "Third-Party Risk Magnitude",
    text: "Most breaches occur through vendors. Regulations require supply chain oversight and incident response coordination.",
  },
  {
    number: "06",
    title: "Operational Demands",
    text: "Regulations require: incident response plans, security assessments, continuous monitoring, audit trails, recovery plans.",
  },
];

const domains = [
  {
    number: "01",
    title: "Governance & Risk Management",
    items: [
      "Board & executive accountability",
      "Cyber risk governance structure",
      "Risk assessment & prioritization",
      "Board reporting & oversight",
      "Incident response planning",
    ],
  },
  {
    number: "02",
    title: "Threat Detection & Monitoring",
    items: [
      "SIEM/Security monitoring",
      "Continuous vulnerability scanning",
      "Threat intelligence integration",
      "Real-time anomaly detection",
      "EDR/XDR capabilities",
    ],
  },
  {
    number: "03",
    title: "Access Control & Identity",
    items: [
      "Identity & access management (IAM)",
      "Multi-factor authentication (MFA)",
      "Privileged access management (PAM)",
      "Role-based access controls",
      "Continuous verification",
    ],
  },
  {
    number: "04",
    title: "Incident Response & Reporting",
    items: [
      "Documented incident response procedures",
      "24-72 hour breach notification",
      "Regulatory reporting mechanisms",
      "Forensic evidence collection",
      "Third-party breach communication",
    ],
  },
  {
    number: "05",
    title: "Data Protection & Encryption",
    items: [
      "Data encryption at rest/transit",
      "Encryption key management",
      "Data classification & labeling",
      "DLP (Data Loss Prevention)",
      "Secure destruction protocols",
    ],
  },
  {
    number: "06",
    title: "Vendor & Third-Party Risk",
    items: [
      "Vendor security assessments",
      "SLAs & security requirements",
      "Continuous vendor monitoring",
      "Supply chain incident coordination",
      "Breach notification triggers",
    ],
  },
  {
    number: "07",
    title: "Audit & Assurance",
    items: [
      "Security audits & assessments",
      "Audit log retention & review",
      "Penetration testing",
      "Independent assessments",
      "Certification & compliance validation",
    ],
  },
  {
    number: "08",
    title: "Business Continuity & Recovery",
    items: [
      "Disaster recovery planning",
      "Business continuity procedures",
      "Recovery time objectives (RTO)",
      "Recovery point objectives (RPO)",
      "Backup & restoration testing",
    ],
  },
];

const implementation = [
  {
    number: "01",
    title: "Regulatory Landscape Assessment",
    text: "Identify all applicable cybersecurity regulations based on industry, geography, and critical infrastructure status.",
  },
  {
    number: "02",
    title: "Compliance Gap Analysis",
    text: "Assess current security posture against regulatory requirements. Identify control gaps and remediation priorities.",
  },
  {
    number: "03",
    title: "Control Design & Implementation",
    text: "Design and implement required security controls aligned with frameworks (NIST, ISO 27001, NIS2 requirements).",
  },
  {
    number: "04",
    title: "Incident Response Planning",
    text: "Develop documented incident response procedures, breach notification protocols, and regulatory reporting mechanisms.",
  },
  {
    number: "05",
    title: "Governance Structure",
    text: "Establish board-level oversight committees, executive accountability, and cyber risk governance frameworks.",
  },
  {
    number: "06",
    title: "Security Assessment & Testing",
    text: "Conduct vulnerability assessments, penetration testing, and security audits to validate control effectiveness.",
  },
  {
    number: "07",
    title: "Continuous Monitoring",
    text: "Implement real-time security monitoring, threat detection, and continuous compliance monitoring capabilities.",
  },
  {
    number: "08",
    title: "Audit & Reporting",
    text: "Establish audit procedures, evidence retention, and regulatory reporting. Validate compliance through assessments.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Reduced Breach Risk",
    text: "Strong security controls reduce threat exposure, breach probability, and attack surface.",
  },
  {
    number: "02",
    title: "Regulatory Compliance",
    text: "Meet NIS2, SEC, NIST, NERC-CIP, and other mandatory cybersecurity requirements. Avoid penalties.",
  },
  {
    number: "03",
    title: "Board Visibility & Accountability",
    text: "Provide leadership with transparent oversight of cyber risk. Demonstrate governance maturity to investors and regulators.",
  },
  {
    number: "04",
    title: "Incident Readiness",
    text: "Faster incident response, lower breach impact, efficient recovery, and accurate regulatory reporting.",
  },
  {
    number: "05",
    title: "Customer & Stakeholder Trust",
    text: "Demonstrate security posture to customers, investors, and regulatory bodies. Competitive differentiator.",
  },
  {
    number: "06",
    title: "Operational Resilience",
    text: "Strong continuity planning, recovery capabilities, and backup systems ensure business continuity.",
  },
];

export default function CybersecurityRegulationPage() {
  return (
    <main className="min-h-screen bg-[#111412] text-[#f4f2ec]">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
     <Navigation/>

      {/* =========================================================
          HERO — DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111412] h-[970px]  pt-20">
        <div className="absolute right-[-180px] top-[-160px] h-[600px] w-[600px] rounded-full bg-[#ff6a00]/[0.06] blur-[100px]" />

        <div className="relative mx-auto max-w-[1240px] px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-7 pt-10 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#ff6a00]">
                Defend. Detect. Respond. Comply. Dominate.
              </p>

              <h1 className="max-w-[850px] text-[54px] font-medium leading-[0.94] tracking-[-0.055em] sm:text-[68px] lg:text-[82px]">
                Cybersecurity
                <br />
                Regulation
                <br />
                Framework
              </h1>

              <p className="mt-9 max-w-[720px] text-[17px] leading-8 text-[#a8aaa7] lg:text-[19px]">
                Cybersecurity regulations have moved from optional to critical.
                NIS2, SEC Cybersecurity Rules, TISAX, and emerging mandates
                require comprehensive controls, incident reporting, and
                governance. Ankh GRC helps organizations operationalize
                cybersecurity regulations across critical infrastructure,
                financial services, technology, and government sectors.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#frameworks"
                  className="inline-flex items-center gap-4 bg-[#ff6a00] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7b20]"
                >
                  Explore Frameworks
                  <span>→</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
                >
                  Build Strategy
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-[#ff6a00]/60 pl-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#777c78]">
                  ANKH GRC
                </p>

                <p className="mt-6 max-w-[330px] text-[38px] leading-[1] tracking-[-0.04em]">
                  Security
                  <br />
                  <span className="text-[#888d89]">by design.</span>
                </p>

                <div className="mt-8 h-[1px] w-20 bg-[#ff6a00]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY — WHITE
      ========================================================= */}
      <section className="bg-[#f5f2eb] text-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5f00]">
                01 / The Need
              </p>

              <h2 className="text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">
                Why
                <br />
                Cybersecurity
                <br />
                Regulation
                <br />
                Matters
              </h2>
            </div>

            <div>
              <p className="max-w-[780px] text-[18px] leading-8 text-[#59646c]">
                Cyber threats, nation-state actors, and critical infrastructure
                risks have elevated cybersecurity from IT concern to regulatory
                imperative. Organizations face mandatory breach reporting,
                incident response requirements, and board-level accountability.
              </p>

              <div className="mt-14 grid border-l border-t border-[#111412]/10 sm:grid-cols-2 lg:grid-cols-3">
                {challenges.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[240px] border-b border-r border-[#111412]/10 p-7 lg:p-8"
                  >
                  

                    <h3 className="mt-8 text-[20px] font-semibold leading-tight tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[14px] leading-6 text-[#69737b]">
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
          FRAMEWORKS — DARK
      ========================================================= */}
      <section id="frameworks" className="bg-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-14 max-w-[850px]">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff6a00]">
              02 / Regulatory Landscape
            </p>

            <h2 className="text-[48px] font-medium leading-[0.98] tracking-[-0.05em] sm:text-[64px]">
              Global Cybersecurity
              <br />
              Regulatory Frameworks
            </h2>

            <p className="mt-7 max-w-[720px] text-[17px] leading-8 text-[#8e9490]">
              Comprehensive coverage of mandatory cybersecurity regulations and
              best-practice standards.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((item) => (
              <article
                key={item.number}
                className="group relative min-h-[370px] overflow-hidden rounded-[26px] border border-white/10 bg-[#171a18] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff6a00]/70"
              >
           
                <div className="relative z-10 flex h-full flex-col">
                 

                  <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#69716d]">
                    {item.region}
                  </p>

                  <h3 className="mt-4 text-[27px] font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <div className="mt-7 h-px w-10 bg-[#ff6a00] transition-all duration-300 group-hover:w-20" />

                  <ul className="mt-6 space-y-3 text-[14px] leading-6 text-[#9da29f]">
                    {item.items.map((listItem) => (
                      <li key={listItem} className="flex gap-3">
                        <span className="mt-[10px] h-1 w-1 shrink-0 bg-[#ff6a00]" />
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DOMAINS — WHITE
      ========================================================= */}
      <section id="domains" className="bg-[#f5f2eb] text-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5f00]">
                03 / Control Areas
              </p>

              <h2 className="text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">
                Key Cybersecurity
                <br />
                Compliance
                <br />
                Domains
              </h2>
            </div>

            <div>
              <p className="max-w-[760px] text-[18px] leading-8 text-[#68727a]">
                Common control requirements across global cybersecurity
                regulations.
              </p>

              <div className="mt-12 grid border-l border-t border-[#111412]/10 md:grid-cols-2">
                {domains.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[280px] border-b border-r border-[#111412]/10 p-7 lg:p-8"
                  >
              

                    <h3 className="mt-7 text-[21px] font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>

                    <ul className="mt-6 space-y-2 text-[14px] leading-6 text-[#69737b]">
                      {item.items.map((listItem) => (
                        <li key={listItem} className="flex gap-3">
                          <span className="mt-[10px] h-1 w-1 shrink-0 bg-[#ff5f00]" />
                          <span>{listItem}</span>
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

      {/* =========================================================
          IMPLEMENTATION — DARK
      ========================================================= */}
      <section id="implementation" className="bg-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff6a00]">
                04 / Implementation
              </p>

              <h2 className="text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">
                Cybersecurity
                <br />
                Compliance
                <br />
                Implementation
              </h2>
            </div>

            <div>
              <p className="max-w-[760px] text-[18px] leading-8 text-[#929894]">
                A structured approach to achieving and maintaining regulatory
                cybersecurity compliance.
              </p>

              <div className="mt-12 grid border-l border-t border-white/10 md:grid-cols-2">
                {implementation.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[260px] border-b border-r border-white/10 p-7 lg:p-8"
                  >
                    

                    <h3 className="mt-7 text-[21px] font-semibold leading-tight tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-7 text-[#8f9691]">
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
          BENEFITS — WHITE
          IMPORTANT: CTA-KU ABOVE IRUKKURA FULL SECTION WHITE
      ========================================================= */}
      <section className="bg-[#f5f2eb] text-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5f00]">
                05 / Business Impact
              </p>

              <h2 className="text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">
                Business
                <br />
                Benefits
              </h2>
            </div>

            <div>
              <p className="max-w-[760px] text-[18px] leading-8 text-[#68727a]">
                Strategic advantages of comprehensive cybersecurity compliance.
              </p>

              <div className="mt-12 grid border-l border-t border-[#111412]/10 md:grid-cols-2">
                {benefits.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[250px] border-b border-r border-[#111412]/10 p-7 lg:p-8"
                  >
                    

                    <h3 className="mt-7 text-[22px] font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-7 text-[#69737b]">
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
          CTA — ORANGE
      ========================================================= */}
      <section id="contact" className="bg-[#ff6500] text-black">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.4em]">
              06 / Next Step
            </p>

            <h2 className="text-[48px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[66px]">
              Build Defensible
              <br />
              Cybersecurity Compliance
            </h2>

            <p className="mx-auto mt-8 max-w-[780px] text-[17px] leading-8 text-black/70 lg:text-[19px]">
              Whether your organization operates in regulated sectors, manages
              critical infrastructure, handles financial data, or needs to
              comply with NIS2, SEC rules, NIST CSF, or emerging cybersecurity
              mandates, Ankh GRC can help you establish comprehensive
              cybersecurity controls that protect assets, enable incident
              response, and maintain regulatory compliance.
            </p>

          <a
            href="mailto:info@ankhgrc.com"
            className="mt-10 inline-flex items-center gap-3 bg-[#111412] text-white px-7 py-4 text-sm font-semibold text-black transition"
          >
            Contact Ankh GRC
            <span>→</span>
          </a>
          </div>
        </div>
      </section>

    {/* =========================================================
    10. FOOTER
========================================================= */}
<Footer/>
    </main>
  );
}