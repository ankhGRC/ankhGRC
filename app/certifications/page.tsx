"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

const certifications = [
  {
    short: "SOC 2",
    title: "SOC 2",
    description:
      "Build a structured control environment around security, availability, processing integrity, confidentiality and privacy.",
    tags: ["Security", "Controls", "Readiness"],
  },
  {
    short: "27001",
    title: "ISO/IEC 27001",
    description:
      "Establish and continually improve an Information Security Management System designed to manage information-security risks.",
    tags: ["ISMS", "Risk", "Security"],
  },
  {
    short: "9001",
    title: "ISO 9001",
    description:
      "Strengthen quality management through consistent processes, measurable objectives, customer focus and continual improvement.",
    tags: ["QMS", "Quality", "Process"],
  },
  {
    short: "GDPR",
    title: "GDPR",
    description:
      "Strengthen privacy governance, data handling, accountability and risk management for applicable data protection requirements.",
    tags: ["Privacy", "Data", "Governance"],
  },
  {
    short: "HIPAA",
    title: "HIPAA",
    description:
      "Assess administrative, physical and technical safeguards supporting the protection of electronic protected health information.",
    tags: ["Healthcare", "Privacy", "Security"],
  },
  {
    short: "PCI",
    title: "PCI DSS",
    description:
      "Strengthen security controls supporting organizations that store, process or transmit payment-card data.",
    tags: ["Payments", "Security", "Controls"],
  },
];

const approach = [
  {
    title: "Policies & Ownership",
    text: "Define accountability, governance structures and organizational expectations.",
  },
  {
    title: "Risk & Scope",
    text: "Understand assets, processes, risks, dependencies and compliance obligations.",
  },
  {
    title: "Control Environment",
    text: "Design and implement practical controls that can scale with the organization.",
  },
  {
    title: "Evidence & Assurance",
    text: "Organize evidence and demonstrate control effectiveness to stakeholders.",
  },
];

const process = [
  {
    title: "Assess",
    text: "Understand your current maturity, scope, risks and applicable requirements.",
  },
  {
    title: "Design",
    text: "Build the required policies, controls, governance and implementation roadmap.",
  },
  {
    title: "Implement",
    text: "Operationalize controls, assign ownership and establish repeatable evidence collection.",
  },
  {
    title: "Assure",
    text: "Validate readiness, address gaps and prepare for the appropriate independent assessment.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: false, amount: 0.16 };

function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: 38 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.65, delay: index * 0.07, ease },
  };
}

function ComplianceNetwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2, ease }}
      className="pointer-events-none absolute right-[4%] top-1/2 hidden h-[500px] w-[560px] -translate-y-1/2 lg:block"
    >
      <svg viewBox="0 0 620 520" className="h-full w-full" fill="none">
        <motion.path
          d="M80 330 C180 150, 300 120, 520 190"
          stroke="rgba(255,101,0,.5)"
          strokeWidth="1.5"
          strokeDasharray="10 12"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M40 400 C170 250, 290 210, 560 300"
          stroke="rgba(255,101,0,.32)"
          strokeWidth="1.5"
          strokeDasharray="10 12"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M120 470 C240 330, 370 340, 550 150"
          stroke="rgba(255,130,50,.35)"
          strokeWidth="1.5"
          strokeDasharray="10 12"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {[
          [170, 275],
          [290, 205],
          [405, 280],
          [520, 190],
          [520, 430],
        ].map(([cx, cy], i) => (
          <g key={`${cx}-${cy}`}>
            <motion.circle
              cx={cx}
              cy={cy}
              r="6"
              fill="#ff6500"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1.12, 0.85] }}
              transition={{
                duration: 2.2,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            <circle
              cx={cx}
              cy={cy}
              r="16"
              stroke="rgba(255,101,0,.18)"
            />
          </g>
        ))}

        <motion.circle
          r="4"
          fill="#ffad7a"
          animate={{ cx: [80, 170, 290, 405, 520], cy: [330, 275, 205, 280, 190] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f5f2eb] text-[#151916]">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#111412] text-white lg:min-h-[690px]">
        <motion.div
          className="absolute -right-[80px] top-0 h-[560px] w-[560px] rounded-full bg-[#ff6500]/10 blur-[130px]"
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease }}
        />

        <ComplianceNetwork />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-60 lg:grid-cols-[1fr_0.8fr] lg:px-10 lg:pb-24 lg:pt-24 mt-[70px]">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              <span className="h-px w-12 bg-[#ff6500]" />
              Certifications
              <span className="text-[#ff6500]">•</span>
              Compliance
            </div>

            <h1 className="mt-8 max-w-4xl text-[54px] font-medium leading-[0.95] tracking-[-0.055em] md:text-[76px] lg:text-[88px]">
              Compliance that
              <span className="block text-[#ff6500]">earns trust.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/55 md:text-lg">
              Navigate security, privacy, quality and governance requirements
              with a practical compliance approach built around your
              organization, your risks and your business goals.
            </p>

            <a
              href="#certifications"
              className="mt-9 inline-flex min-h-[52px] items-center gap-3 bg-[#ff6500] px-7 text-sm font-semibold text-[#111412] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7a1a]"
            >
              Explore frameworks
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative hidden min-h-[470px] lg:block"
          >
      

         
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="overflow-hidden bg-[#f5f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            {...reveal()}
            className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e65300]">
                Compliance Frameworks
              </p>
              <h2 className="mt-5 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                Build the capability.
                <span className="block text-black/25">
                  Demonstrate the trust.
                </span>
              </h2>
            </div>
            <p className="max-w-3xl self-end text-[17px] leading-8 text-black/55">
              Ankh GRC helps organizations understand applicable requirements,
              assess current maturity, close control gaps, organize evidence
              and prepare for independent assessment or certification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS — TRUE BENTO */}
      <section id="certifications" className="overflow-hidden bg-[#f5f2eb] pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[170px]">
            {certifications.map((cert, index) => {
              const spans = [
                "lg:col-span-7 lg:row-span-2",
                "lg:col-span-5 lg:row-span-2",
                "lg:col-span-4 lg:row-span-2",
                "lg:col-span-4 lg:row-span-2",
                "lg:col-span-4 lg:row-span-2",
                "lg:col-span-12 lg:row-span-2",
              ];

              return (
                <motion.article
                  key={cert.title}
                  {...reveal(index)}
                  whileHover={{ y: -7 }}
                  className={`group relative min-h-[330px] overflow-hidden border border-black/10 bg-[#ebe7de] p-7 transition-colors duration-500 hover:border-[#ff6500]/45 hover:bg-white md:min-h-[360px] ${spans[index]}`}
                >
                  <div className="absolute left-0 top-0 h-1 w-12 bg-[#ff6500] transition-all duration-700 group-hover:w-full" />
                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#ff6500]/[0.06] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 min-w-[74px] items-center justify-center border border-black/10 bg-[#f5f2eb] px-3 text-[10px] font-bold tracking-[0.08em] text-[#e65300] transition group-hover:border-[#ff6500]/30 group-hover:bg-[#ff6500]/[0.06]">
                        {cert.short}
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-black/25">
                        Compliance
                      </span>
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-[25px] font-medium tracking-[-0.03em] md:text-[29px]">
                        {cert.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-[14px] leading-7 text-black/50">
                        {cert.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {cert.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-black/[0.045] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-black/45 group-hover:bg-[#ff6500]/[0.08] group-hover:text-[#c94d00]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH — ASYMMETRIC BENTO */}
      <section className="overflow-hidden bg-[#151916] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...reveal()} className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                The Ankh GRC Approach
              </p>
              <h2 className="mt-6 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                Don't build compliance
                <span className="block text-white/25">framework by framework.</span>
              </h2>
              <p className="mt-7 max-w-xl text-[16px] leading-8 text-white/45">
                Build a scalable control environment once, then map it
                intelligently across the standards and requirements that
                matter to your organization.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {approach.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...reveal(index)}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden border border-white/10 bg-white/[0.035] p-7 ${
                    index === 0 ? "sm:min-h-[260px]" : ""
                  } ${index === 3 ? "sm:min-h-[220px]" : ""}`}
                >
                  <div className="absolute left-0 top-0 h-1 w-9 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
                  <h3 className="mt-5 text-[20px] font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS — BENTO */}
      <section className="overflow-hidden bg-[#f5f2eb] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...reveal()} className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e65300]">
              Our Process
            </p>
            <h2 className="mt-5 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
              From compliance gap to
              <span className="text-[#e65300]"> audit readiness.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-8 text-black/50">
              A structured approach designed to make compliance practical,
              measurable and sustainable.
            </p>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-12">
            {process.map((item, index) => (
              <motion.article
                key={item.title}
                {...reveal(index)}
                whileHover={{ y: -7 }}
                className={`group relative min-h-[230px] overflow-hidden border border-black/10 bg-[#ebe7de] p-7 transition-all duration-500 hover:border-[#ff6500]/40 hover:bg-white ${
                  index === 0
                    ? "md:col-span-5 md:min-h-[300px]"
                    : index === 1
                    ? "md:col-span-7 md:min-h-[300px]"
                    : "md:col-span-4"
                }`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-[#ff6500]/20" />
                <CheckCircle2 className="h-5 w-5 text-[#ff6500]" />
                <h3 className="mt-12 text-[23px] font-medium">{item.title}</h3>
                <p className="mt-4 max-w-xl text-[14px] leading-7 text-black/50">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#ff6500] text-[#111412]">
        <motion.div
          className="absolute -right-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          {...reveal()}
          className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Start a Conversation
          </p>
          <h2 className="mt-5 max-w-4xl text-[46px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[66px]">
            Build confidence
            <span className="block text-black/30">before the audit begins.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-black/55">
            Talk to Ankh GRC about your compliance framework, scope and
            readiness objectives.
          </p>
          <a
            href="mailto:help@ankhgrc.com"
            className="mt-8 inline-flex min-h-[52px] items-center gap-3 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111412]"
          >
            Contact Ankh GRC
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
