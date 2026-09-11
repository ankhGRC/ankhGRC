"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

type FilterKey = "all" | "security" | "leadership" | "support" | "crisis";

const programs = [
  {
    code: "PCI-DSS",
    title: "PCI DSS Compliance",
    audience: "Security Analysts, IT Ops, Audit Teams, Compliance Managers",
    tags: ["security"] as FilterKey[],
    description:
      "Full-spectrum training for QSA and internal-audit readiness — control implementation, scope definition, and managing global cardholder data environments.",
  },
  {
    code: "ISO-27001",
    title: "ISO 27001 (ISMS) — Implementor & Lead/Internal Auditor",
    audience: "Senior Management, Information Security Team, Internal Auditors",
    tags: ["security", "leadership"] as FilterKey[],
    description:
      "Certified training for Implementors and Lead/Internal Auditors, covering context, risk assessment, Statement of Applicability development, and continuous ISMS management.",
  },
  {
    code: "ISO-42001",
    title: "ISO 42001 (AIMS) — Implementor & Lead/Internal Auditor",
    audience: "Senior Management, Information Security Team, Internal Auditors",
    tags: ["security", "leadership"] as FilterKey[],
    description:
      "Certified training for Implementors and Lead/Internal Auditors, covering context, risk assessment, Statement of Applicability development, and continuous AIMS management.",
  },
  {
    code: "RBI-REG",
    title: "RBI Regulatory Compliance",
    audience: "Senior Management, Information Security Team, Internal Auditors",
    tags: ["security", "leadership"] as FilterKey[],
    description:
      "Specialised training on RBI Master Directions, cybersecurity frameworks for banks and NBFCs, and regulatory audit reporting.",
  },
  {
    code: "CISM",
    title: "CISM (Information Security Management)",
    audience: "C-suite Executives, Security Management, IT Governance Leads",
    tags: ["leadership"] as FilterKey[],
    description:
      "Certified training focused on information security governance, risk management, program development, and incident management.",
  },
  {
    code: "CCISO",
    title: "CCISO (Executive Leadership)",
    audience: "C-suite Executives, Senior Leadership, Aspiring CISOs",
    tags: ["leadership"] as FilterKey[],
    description:
      "Comprehensive training on information security strategy, governance, financial management, and the leadership skills the CISO role requires.",
  },
  {
    code: "DP-HIPAA",
    title: "Data Privacy & HIPAA",
    audience: "Leadership, HR, Customer Service, Legal, Compliance Staff",
    tags: ["support"] as FilterKey[],
    description:
      "Training on regulatory requirements, data classification, privacy controls, and organisational accountability for how data is handled.",
  },
  {
    code: "BCP-DR",
    title: "Business Continuity & DR",
    audience: "Management, Crisis Response Teams, BCP/DR Leads",
    tags: ["crisis", "leadership"] as FilterKey[],
    description:
      "BCP and DR planning, testing, and crisis-communication management for both IT and business functions.",
  },
];

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All programs" },
  { key: "security", label: "Security, IT & Audit" },
  { key: "leadership", label: "Senior Leadership & Governance" },
  { key: "support", label: "Support & Compliance Staff" },
  { key: "crisis", label: "Crisis & Continuity Teams" },
];

const tracks = [
  {
    label: "IMPLEMENTOR",
    title: "Implementor",
    text: "Hands-on control build-out: scoping the environment, closing gaps, and standing up the documentation a framework actually requires.",
  },
  {
    label: "LEAD / INTERNAL AUDITOR",
    title: "Lead / Internal Auditor",
    text: "Audit methodology, evidence gathering, and reporting — the skills to run or withstand a certification or regulatory audit.",
  },
  {
    label: "EXECUTIVE BRIEFING",
    title: "Executive briefing",
    text: "Governance, financial exposure, and board-level reporting, for the leaders who are accountable for the outcome, not the paperwork.",
  },
];

export default function TrainingPage() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [openCode, setOpenCode] = useState<string | null>(null);

  const visiblePrograms = useMemo(
    () =>
      programs.filter(
        (program) => filter === "all" || program.tags.includes(filter),
      ),
    [filter],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111412] text-[#f4f2ec]">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111412] pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-[#ff6a00]/[0.06] blur-[120px]"
        />

        <div className="mx-auto grid max-w-[1240px] gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, x: -90, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-7 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#ff6a00]"
            >
              ANKH GRC / TRAINING
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 70, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-[850px] text-[52px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[68px] lg:text-[82px]"
            >
              Trained to the standard,
              <br />
              <span className="text-[#8c918d]">not just aware of it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-9 max-w-[720px] text-[17px] leading-8 text-[#a8aaa7] lg:text-[19px]"
            >
              AnkhGRC&apos;s training arm prepares your teams — from IT
              operations to the boardroom — to implement, audit, and sustain
              the frameworks your business is measured against.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#register"
                className="bg-[#ff6a00] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7b20]"
              >
                View training register
              </a>
              <a
                href="#contact"
                className="border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
              >
                Request a briefing
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="hidden items-end lg:flex"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full border-l border-[#ff6a00]/60 pl-10"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#777c78]">
                CAPABILITY / PEOPLE
              </p>
              <p className="mt-6 max-w-[380px] text-[40px] leading-[1] tracking-[-0.04em]">
                Build capability.
                <br />
                <span className="text-[#777c78]">Sustain compliance.</span>
              </p>
              <div className="mt-8 h-px w-20 bg-[#ff6a00]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/10 bg-[#171a18]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 px-6 sm:grid-cols-3 lg:px-8">
          {[
            ["08", "Training programs in one register"],
            ["04", "Audience tracks from analyst to C-suite"],
            ["02", "Framework depths: implementor and auditor"],
          ].map(([value, label], index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="border-b border-white/10 px-2 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0"
            >
              <div className="text-[30px] font-medium tracking-[-0.04em] text-[#ff6a00]">
                {value}
              </div>
              <p className="mt-1 text-sm leading-6 text-[#9da29f]">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="bg-[#f5f2eb] text-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="max-w-[760px]"
          >
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5f00]">
              TRAINING REGISTER
            </p>
            <h2 className="text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[60px]">
              The programs your teams need.
            </h2>
            <p className="mt-7 text-[16px] leading-7 text-[#69737b]">
              Filter by who owns the risk in your organisation, then open a
              program for scope and audience detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mt-12 flex flex-wrap gap-2 border-b border-[#111412]/15 pb-7"
          >
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setFilter(item.key);
                  setOpenCode(null);
                }}
                className={`border px-4 py-2.5 text-sm font-medium transition-all ${
                  filter === item.key
                    ? "border-[#111412] bg-[#111412] text-white"
                    : "border-[#111412]/15 bg-white/50 text-[#3d4a4e] hover:border-[#ff5f00] hover:text-[#ff5f00]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          <div className="mt-2 border-t border-[#111412]/15">
            {visiblePrograms.map((program, index) => {
              const isOpen = openCode === program.code;

              return (
                <motion.article
                  key={program.code}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-[#111412]/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenCode(isOpen ? null : program.code)}
                    className="grid w-full gap-4 py-6 text-left md:grid-cols-[130px_1fr_30px] md:items-center"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-[12px] font-medium tracking-[0.05em] text-[#ff5f00]">
                      {program.code}
                    </span>
                    <span className="text-[20px] font-medium leading-tight tracking-[-0.025em] sm:text-[22px]">
                      {program.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 justify-self-end text-[#ff5f00] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-5 pb-7 pl-0 md:grid-cols-[130px_1fr]">
                      <div />
                      <div className="max-w-[820px] border-l-2 border-[#ff5f00] pl-5">
                        <p className="text-[15px] leading-7 text-[#3d4a4e]">
                          {program.description}
                        </p>
                        <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#777f83]">
                          Audience
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5b6a6e]">
                          {program.audience}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT RUNS */}
      <section id="approach" className="bg-[#111412]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="max-w-[760px]"
          >
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff6a00]">
              HOW IT RUNS
            </p>
            <h2 className="text-[46px] font-medium leading-[0.96] tracking-[-0.05em] sm:text-[60px]">
              Training depth matched to the role.
            </h2>
            <p className="mt-7 text-[16px] leading-7 text-[#8e9490]">
              Each framework is trained at the depth the role needs — not a
              single generic course stretched across every audience.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {tracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotate: index === 1 ? 0 : index === 0 ? -2 : 2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                className="min-h-[280px] bg-[#171a18] p-8 transition-colors hover:bg-[#1b1f1c] lg:p-9"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
                  {track.label}
                </p>
                <h3 className="mt-7 text-[28px] font-medium tracking-[-0.04em]">
                  {track.title}
                </h3>
                <div className="mt-6 h-px w-12 bg-[#ff6a00]" />
                <p className="mt-6 text-[15px] leading-7 text-[#969d99]">
                  {track.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="overflow-hidden bg-[#ff6500] text-black">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.4em]">
                NEXT STEP
              </p>
              <h2 className="max-w-[800px] text-[46px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[62px]">
                Bring the right training to your team.
              </h2>
            </div>

            <motion.a
              whileHover={{ y: -5, scale: 1.03 }}
              href="mailto:hello@ankhgrc.com"
              className="inline-flex shrink-0 items-center justify-center bg-[#111412] px-7 py-4 text-sm font-semibold text-white"
            >
              hello@ankhgrc.com
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
