"use client";

import React from "react";
import Navigation from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import { motion } from "framer-motion";

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
    <main className="min-h-screen overflow-x-hidden bg-[#111412] text-[#f4f2ec]">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
     <Navigation/>

            {/* =========================================================
          HERO — CINEMATIC / PARALLAX
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#111412] pt-20">
        <motion.div initial={{ opacity:0, scale:0.45 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1.5 }} className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#ff6a00]/[0.055] blur-[120px]" />
        <div className="relative mx-auto min-h-[900px] max-w-[1240px] px-6 pb-28 pt-24 lg:px-8 lg:pt-28">
          <div className="grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity:0,x:-100,filter:"blur(12px)" }} animate={{ opacity:1,x:0,filter:"blur(0px)" }} transition={{ duration:1,ease:[0.22,1,0.36,1] }}>
              <motion.p initial={{ opacity:0,y:25 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.2 }} className="mb-7 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#ff6a00]">Defend. Detect. Respond. Comply. Dominate.</motion.p>
              <motion.h1 initial={{ opacity:0,y:80,scale:0.9 }} animate={{ opacity:1,y:0,scale:1 }} transition={{ duration:1,delay:0.3,ease:[0.16,1,0.3,1] }} className="max-w-[850px] text-[54px] font-medium leading-[0.94] tracking-[-0.055em] sm:text-[68px] lg:text-[82px]">Cybersecurity<br />Regulation<br />Framework</motion.h1>
              <motion.p initial={{ opacity:0,y:35 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8,delay:0.6 }} className="mt-9 max-w-[720px] text-[17px] leading-8 text-[#a8aaa7] lg:text-[19px]">Cyber threats, nation-state actors, and critical infrastructure risks have elevated cybersecurity from IT concern to regulatory imperative. Organizations face mandatory breach reporting, incident response requirements, and board-level accountability.</motion.p>
              <motion.div initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.8 }} className="mt-10 flex flex-wrap gap-3">
                <a href="#frameworks" className="inline-flex items-center gap-4 bg-[#ff6a00] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7b20]">Explore Frameworks</a>
                <a href="#contact" className="inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]">Build Strategy</a>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity:0,x:100,rotate:5 }} animate={{ opacity:1,x:0,rotate:0 }} transition={{ duration:1,delay:0.5 }} className="hidden lg:block">
              <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:5,repeat:Infinity,ease:"easeInOut" }} className="border-l border-[#ff6a00]/60 pl-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#777c78]">ANKH GRC</p>
                <p className="mt-6 max-w-[330px] text-[38px] leading-[1] tracking-[-0.04em]">Security<br /><span className="text-[#888d89]">by design.</span></p>
                <div className="mt-8 h-px w-20 bg-[#ff6a00]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY — NORMAL RESPONSIVE GRID
      ========================================================= */}
      <section className="overflow-hidden bg-[#f5f2eb] text-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5f00]">
              01 / The Need
            </p>
            <h2 className="max-w-[850px] text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">
              Why Cybersecurity Regulation Matters
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 80, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -10 }}
                className="group min-h-[245px] border border-[#111412]/10 bg-white/45 p-8 transition-colors duration-500 hover:border-[#ff5f00]/50"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                  className="h-px bg-[#ff5f00]"
                />
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.28 }}
                  className="mt-7 text-[22px] font-semibold leading-tight tracking-[-0.025em]"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.4 }}
                  className="mt-5 text-[14px] leading-6 text-[#69737b]"
                >
                  {item.text}
                </motion.p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FRAMEWORKS — NORMAL RESPONSIVE GRID
      ========================================================= */}
      <section id="frameworks" className="bg-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="max-w-[850px]"
          >
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff6a00]">
              02 / Regulatory Landscape
            </p>
            <h2 className="text-[48px] font-medium leading-[0.98] tracking-[-0.05em] sm:text-[64px]">
              Global Cybersecurity Regulatory Frameworks
            </h2>
            <p className="mt-7 max-w-[720px] text-[17px] leading-8 text-[#8e9490]">
              Comprehensive coverage of mandatory cybersecurity regulations and best-practice standards.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((item, index) => {
              const origins = [
                { x: -80, y: 40, r: -2 },
                { x: 80, y: 30, r: 2 },
                { x: 0, y: 70, r: -2 },
                { x: -70, y: 60, r: 2 },
                { x: 70, y: 50, r: -2 },
                { x: 0, y: 70, r: 2 },
              ];
              const origin = origins[index];

              return (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: origin.x,
                    y: origin.y,
                    rotate: origin.r,
                    scale: 0.94,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.14 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-[24px] border border-white/10 bg-[#171a18] p-7 transition-colors duration-500 hover:border-[#ff6a00]/60 lg:p-8"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.9, delay: index * 0.08 + 0.2 }}
                    className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ff6a00]/[0.055] blur-[75px]"
                  />

                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#69716d]">{item.region}</p>
                    <h3 className="mt-4 text-[27px] font-medium leading-tight tracking-[-0.04em]">{item.title}</h3>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.55, delay: index * 0.08 + 0.25 }}
                      className="mt-6 h-px bg-[#ff6a00] group-hover:w-20"
                    />
                    <ul className="mt-6 space-y-3 text-[14px] leading-6 text-[#9da29f]">
                      {item.items.map((listItem, itemIndex) => (
                        <motion.li
                          key={listItem}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.35, delay: index * 0.08 + 0.4 + itemIndex * 0.045 }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-[9px] h-1 w-1 shrink-0 bg-[#ff6a00]" />
                          <span>{listItem}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DOMAINS — SPOTLIGHT ROWS
      ========================================================= */}
      <section id="domains" className="bg-[#f5f2eb] text-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div initial={{ opacity:0,x:-70 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:false,amount:0.25 }} transition={{ duration:0.8 }}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5f00]">03 / Control Areas</p>
            <h2 className="max-w-[780px] text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">Key Cybersecurity Compliance Domains</h2>
          </motion.div>
          <div className="mt-14 space-y-4">
            {domains.map((item,index)=><motion.article key={item.number} initial={{ opacity:0,y:90,scale:0.94 }} whileInView={{ opacity:1,y:0,scale:1 }} viewport={{ once:false,amount:0.2 }} transition={{ duration:0.7,delay:index*0.06,ease:[0.16,1,0.3,1] }} whileHover={{ x:12 }} className="group grid gap-6 border border-[#111412]/10 bg-white/25 p-7 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center lg:p-9">
              <div className="h-px w-10 bg-[#ff5f00]" />
              <h3 className="text-[24px] font-semibold tracking-[-0.025em]">{item.title}</h3>
              <ul className="grid gap-2 text-[14px] leading-6 text-[#69737b] sm:grid-cols-2">{item.items.map((listItem,itemIndex)=><motion.li key={listItem} initial={{ opacity:0,x:20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:false }} transition={{ duration:0.35,delay:index*0.06+itemIndex*0.04 }} className="flex gap-3"><span className="mt-[10px] h-1 w-1 shrink-0 bg-[#ff5f00]" /><span>{listItem}</span></motion.li>)}</ul>
            </motion.article>)}
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPLEMENTATION — TIMELINE
      ========================================================= */}
      <section id="implementation" className="bg-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div initial={{ opacity:0,x:-70 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:false,amount:0.25 }} transition={{ duration:0.8 }}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff6a00]">04 / Implementation</p>
            <h2 className="max-w-[800px] text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">Cybersecurity Compliance Implementation</h2>
          </motion.div>
          <div className="relative mt-16 ml-3 border-l border-white/10">
            {implementation.map((item,index)=><motion.article key={item.number} initial={{ opacity:0,x:index%2===0?-90:90,scale:0.93 }} whileInView={{ opacity:1,x:0,scale:1 }} viewport={{ once:false,amount:0.2 }} transition={{ duration:0.75,delay:index*0.08,ease:[0.16,1,0.3,1] }} className="relative pb-12 pl-10 last:pb-0 lg:pl-16">
              <motion.span initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:false }} transition={{ type:"spring",stiffness:180,damping:14,delay:index*0.08 }} className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#ff6a00] shadow-[0_0_0_7px_rgba(255,106,0,0.08)]" />
              <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><h3 className="text-[24px] font-semibold tracking-[-0.025em]">{item.title}</h3><p className="text-[15px] leading-7 text-[#8f9691]">{item.text}</p></div>
            </motion.article>)}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS — FLOATING CARDS
      ========================================================= */}
      <section className="overflow-hidden bg-[#f5f2eb] text-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div initial={{ opacity:0,y:65,filter:"blur(8px)" }} whileInView={{ opacity:1,y:0,filter:"blur(0px)" }} viewport={{ once:false,amount:0.25 }} transition={{ duration:0.85 }}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5f00]">05 / Business Impact</p>
            <h2 className="text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[58px]">Business Benefits</h2>
          </motion.div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item,index)=><motion.article key={item.number} initial={{ opacity:0,y:index%2===0?100:45,rotate:index%2===0?-3:3,scale:0.88 }} whileInView={{ opacity:1,y:0,rotate:0,scale:1 }} viewport={{ once:false,amount:0.18 }} transition={{ duration:0.8,delay:index*0.09,ease:[0.16,1,0.3,1] }} whileHover={{ y:-14,rotate:index%2===0?1:-1,scale:1.025 }} className="group relative min-h-[270px] overflow-hidden border border-[#111412]/10 bg-white/35 p-8">
              <div className="mt-2 h-px w-10 bg-[#ff5f00] transition-all duration-500 group-hover:w-20" />
              <h3 className="mt-7 text-[22px] font-semibold tracking-[-0.025em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-7 text-[#69737b]">{item.text}</p>
             </motion.article>)}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA — SPLIT REVEAL
      ========================================================= */}
      <section id="contact" className="overflow-hidden bg-[#ff6500] text-black">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:false,amount:0.3 }} transition={{ duration:0.8 }} className="mx-auto max-w-[1050px]">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.4em]">06 / Next Step</p>
            <div className="overflow-hidden"><motion.h2 initial={{ y:"100%" }} whileInView={{ y:0 }} viewport={{ once:false }} transition={{ duration:0.9,ease:[0.16,1,0.3,1] }} className="text-[48px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[66px]">Build Defensible<br />Cybersecurity Compliance</motion.h2></div>
            <motion.p initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:false }} transition={{ duration:0.7,delay:0.2 }} className="mt-8 max-w-[820px] text-[17px] leading-8 text-black/70 lg:text-[19px]">Whether your organization operates in regulated sectors, manages critical infrastructure, handles financial data, or needs to comply with NIS2, SEC rules, NIST CSF, or emerging cybersecurity mandates, Ankh GRC can help you establish comprehensive cybersecurity controls that protect assets, enable incident response, and maintain regulatory compliance.</motion.p>
            <motion.a initial={{ opacity:0,x:-40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:false }} transition={{ duration:0.65,delay:0.4 }} whileHover={{ x:8,scale:1.03 }} href="mailto:info@ankhgrc.com" className="mt-10 inline-flex items-center gap-3 bg-[#111412] px-7 py-4 text-sm font-semibold text-white">Contact Ankh GRC</motion.a>
          </motion.div>
        </div>
      </section>

{/* =========================================================
    10. FOOTER
========================================================= */}
<Footer/>
    </main>
  );
}