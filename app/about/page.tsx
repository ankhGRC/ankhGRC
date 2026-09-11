"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";


const expertise = [
  {
    number: "01",
    title: "Governance",
    text: "Clear accountability, decision-making structures and oversight.",
  },
  {
    number: "02",
    title: "Risk",
    text: "Identify, assess, prioritize and continuously manage business and technology risks.",
  },
  {
    number: "03",
    title: "Compliance",
    text: "Translate regulatory requirements into praFtical controls and measurable obligations.",
  },
  {
    number: "04",
    title: "Security",
    text: "Strengthen information security governance and organizational resilience.",
  },
  {
    number: "05",
    title: "Privacy",
    text: "Build responsible data protection and privacy programs.",
  },
  {
    number: "06",
    title: "AI Governance",
    text: "Create responsible, transparent and risk-aware AI operating models.",
  },
  {
    number: "07",
    title: "Regulatory Intelligence",
    text: "Understand changing regulatory expectations and translate them into action.",
  },
  {
    number: "08",
    title: "Cross-Border Compliance",
    text: "Navigate international regulations, data transfers, localization and jurisdictional complexity.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Assess the current governance, risk, security, privacy and compliance environment.",
  },
  {
    number: "02",
    title: "Map",
    text: "Identify applicable regulatory requirements, risks, obligations and control expectations.",
  },
  {
    number: "03",
    title: "Design",
    text: "Develop practical frameworks, policies, controls and operating models.",
  },
  {
    number: "04",
    title: "Implement",
    text: "Translate requirements into processes, responsibilities, evidence and measurable controls.",
  },
  {
    number: "05",
    title: "Assure",
    text: "Evaluate effectiveness through testing, monitoring, assessments and continuous improvement.",
  },
  {
    number: "06",
    title: "Evolve",
    text: "Continuously adapt governance as regulations, technologies and risks change.",
  },
];

const questions = [
  "What data is being used?",
  "Where is the data going?",
  "What decisions is AI making?",
  "Who is accountable?",
  "What risks are being introduced?",
  "Can the organization explain the outcome?",
  "Can compliance be demonstrated?",
  "How should AI systems be monitored?",
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Technology",
  "Energy",
  "Retail",
  "Manufacturing",
  "Government",
  "Global Enterprises",
];


const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: false, amount: 0.18 };

function horizontalWheel(e: React.WheelEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

  if (el.scrollWidth > el.clientWidth && delta !== 0) {
    e.preventDefault();
    e.stopPropagation();
    el.scrollLeft += delta;
  }
}

function useHorizontalDrag() {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = e.currentTarget;
    dragging.current = true;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    e.currentTarget.scrollLeft =
      startScroll.current - (e.clientX - startX.current);
  };

  const stop = () => {
    dragging.current = false;
  };

  return { ref, onPointerDown, onPointerMove, onPointerUp: stop, onPointerCancel: stop };
}

const rise = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const left = {
  hidden: { opacity: 0, x: -55 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const right = {
  hidden: { opacity: 0, x: 55 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

export default function AboutPage() {
  const expertiseDrag = useHorizontalDrag();
  const approachDrag = useHorizontalDrag();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f4f1eb] text-[#171b19]">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* HERO — animated split composition */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#111412] text-[#f4f1eb] lg:min-h-[680px]">
        <motion.div
          className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#ff5a00]/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-[#ff5a00]/50"
          initial={{ width: 0 }}
          animate={{ width: "55%" }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24 lg:pt-28">
          <motion.div
            variants={left}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff5a00]">
              About Ankh GRC
            </p>

            <h1 className="text-[52px] font-medium leading-[0.96] tracking-[-0.05em] md:text-[72px] lg:text-[82px]">
              Governance for a world
              <span className="block text-[#ff5a00]">
                that keeps changing.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#9da7a3] md:text-lg">
              Business today operates at the intersection of technology,
              regulation, data, cybersecurity and artificial intelligence.
              Ankh GRC helps organizations navigate that complexity through
              practical governance, measurable controls and confident
              decision-making.
            </p>
          </motion.div>

          <motion.div
            variants={right}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative flex h-[360px] w-full max-w-[430px] items-center justify-center overflow-hidden border border-white/10 bg-white/[0.025]">
              <motion.div
                className="absolute h-64 w-64 rounded-full border border-[#ff5a00]/35"
                animate={{ rotate: 360, scale: [1, 1.04, 1] }}
                transition={{
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <div className="absolute inset-6 rounded-full border border-dashed border-[#ff5a00]/25" />
                <div className="absolute inset-16 rounded-full border border-[#ff5a00]/25" />
              </motion.div>

              <motion.div
                className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#ff5a00] bg-[#ff5a00]/10 text-lg font-bold text-[#ff5a00]"
                animate={{ boxShadow: [
                  "0 0 0 0 rgba(255,90,0,0.08)",
                  "0 0 0 24px rgba(255,90,0,0.02)",
                  "0 0 0 0 rgba(255,90,0,0.08)"
                ]}}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                GRC
              </motion.div>

              <span className="absolute left-8 top-8 h-2 w-2 rounded-full bg-[#ff5a00]" />
              <span className="absolute bottom-9 right-10 h-1.5 w-1.5 rounded-full bg-white/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY — oversized editorial statement */}
      <section className="overflow-hidden bg-[#f4f1eb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={left}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
                Why Ankh GRC
              </p>
              <div className="mt-8 h-20 w-px bg-[#ff5a00]" />
            </div>

            <div>
              <h2 className="max-w-5xl text-[42px] font-medium leading-[1.02] tracking-[-0.045em] md:text-[60px] lg:text-[68px]">
                Compliance should enable business —
                <span className="text-black/25"> not slow it down.</span>
              </h2>

              <p className="mt-7 max-w-4xl text-[16px] leading-8 text-[#68706c] md:text-lg">
                Regulatory requirements are becoming more complex. Technology is
                changing faster than traditional governance models can adapt. AI
                is introducing new risks and responsibilities. Data is moving
                across borders, while organizations are expected to demonstrate
                not only that they are compliant — but that they can prove it.
              </p>

              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-8 border-l-4 border-[#ff5a00] bg-[#ebe8e1] p-6 md:p-8"
              >
                <p className="text-[17px] leading-8 text-[#171b19] md:text-[19px]">
                  Ankh GRC bridges the gap between{" "}
                  <strong>
                    Regulation → Risk → Technology → Controls → Evidence → Business.
                  </strong>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PURPOSE — asymmetric statement */}
      <section className="overflow-hidden bg-[#ebe8e1] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <motion.div
            variants={left}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              Our Purpose
            </p>
            <h2 className="mt-6 max-w-xl text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
              To make governance practical.
            </h2>
          </motion.div>

          <motion.div
            variants={right}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative overflow-hidden bg-[#111412] p-8 text-[#f4f1eb] md:p-10 lg:p-12"
          >
            <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-[#ff5a00]/40" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff5a00]">
              Real-world governance
            </span>
            <h3 className="mt-10 max-w-2xl text-[30px] font-medium leading-tight md:text-[38px]">
              Governance should work in the real world.
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#9da7a3]">
              Governance should not exist only inside policies, audit reports
              or compliance checklists.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#9da7a3]">
              It should be embedded into the way organizations make decisions,
              manage risk, protect information, use technology, deploy AI,
              work with third parties, move data and demonstrate accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE — contained horizontal rail */}
      <section className="overflow-hidden bg-[#f4f1eb] py-16 md:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              Our Expertise
            </p>
            <h2 className="mt-5 max-w-4xl text-[42px] font-medium leading-[1.02] tracking-[-0.045em] md:text-[60px]">
              Multiple disciplines.
              <span className="block text-black/25">
                One governance perspective.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-7 text-[#68706c] md:text-lg">
              We connect governance disciplines that are often managed
              separately, creating a more integrated view of organizational risk
              and compliance.
            </p>
          </motion.div>

          <div className="w-full min-w-0 max-w-full overflow-hidden border border-[#d8d4cc] bg-[#d8d4cc]">
            <div
              ref={expertiseDrag.ref}
              className="about-horizontal-rail flex w-full min-w-0 cursor-grab select-none gap-px overflow-x-scroll overscroll-x-contain p-px pb-4 active:cursor-grabbing [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-[#ff5a00]/70"
              onWheelCapture={horizontalWheel}
              onPointerDown={expertiseDrag.onPointerDown}
              onPointerMove={expertiseDrag.onPointerMove}
              onPointerUp={expertiseDrag.onPointerUp}
              onPointerCancel={expertiseDrag.onPointerCancel}
              style={{ touchAction: "pan-x" }}
            >
              {expertise.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.4), ease }}
                  whileHover={{ y: -5 }}
                  className="group relative flex min-h-[260px] w-[78vw] cursor-grab active:cursor-grabbing min-w-[78vw] shrink-0 flex-col bg-[#f4f1eb] p-7 sm:w-[42vw] sm:min-w-[42vw] lg:w-[280px] lg:min-w-[280px]"
                >
                  <div className="h-1 w-10 bg-[#ff5a00] transition-all duration-500 group-hover:w-full" />
                  <h3 className="mt-auto text-[24px] font-medium tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-[#68706c]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-black/35">
            Scroll inside this panel
          </p>
        </div>
      </section>

      {/* APPROACH — numbered source data not displayed; cinematic timeline */}
      <section className="overflow-hidden bg-[#111412] py-16 text-[#f4f1eb] md:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={left}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-9 lg:grid-cols-[0.65fr_1.35fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
                Our Approach
              </p>
              <h2 className="mt-6 text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
                From requirements
                <span className="block text-white/25">to readiness.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-7 text-[#9da7a3]">
                We believe effective governance is a journey — not a one-time
                compliance exercise.
              </p>
            </div>

            <div className="min-w-0">
              <div className="w-full min-w-0 max-w-full overflow-hidden border-y border-white/10">
                <div
                  ref={approachDrag.ref}
                  className="about-horizontal-rail flex min-w-max cursor-grab select-none gap-3 overflow-x-scroll p-4 pb-5 active:cursor-grabbing [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:bg-[#ff5a00]/70"
                  onWheelCapture={horizontalWheel}
                  onPointerDown={approachDrag.onPointerDown}
                  onPointerMove={approachDrag.onPointerMove}
                  onPointerUp={approachDrag.onPointerUp}
                  onPointerCancel={approachDrag.onPointerCancel}
                  style={{ touchAction: "pan-x" }}
                >
                  {steps.map((step, index) => (
                    <motion.article
                      key={step.number}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.55, delay: index * 0.07, ease }}
                      className="flex min-h-[230px] w-[220px] shrink-0 cursor-grab active:cursor-grabbing flex-col justify-between border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-[#ff5a00]/50"
                    >
                      <span className="h-1 w-10 bg-[#ff5a00]" />
                      <h3 className="text-[22px] font-medium">{step.title}</h3>
                      <p className="text-[14px] leading-6 text-[#9da7a3]">
                        {step.text}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE SHIFT — visual before/after */}
      <section className="overflow-hidden bg-[#f4f1eb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              The Shift
            </p>
            <h2 className="mt-5 text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
              Built for the new
              <span className="block text-black/25">regulatory era.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-7 text-[#68706c] md:text-lg">
              The traditional compliance model is changing. Organizations are
              moving from periodic compliance activities toward continuous,
              intelligent and integrated governance.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease }}
              className="border border-[#d8d4cc] bg-white/35 p-7 md:p-9"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                Yesterday
              </p>
              <ul className="mt-7 divide-y divide-[#d8d4cc]">
                {[
                  "Periodic assessments",
                  "Manual compliance reviews",
                  "Static policies",
                  "Reactive remediation",
                  "Siloed responsibilities",
                ].map((item) => (
                  <li key={item} className="py-4 text-[15px] text-[#68706c]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease }}
              className="relative overflow-hidden border border-[#ff5a00]/35 bg-[#ff5a00]/[0.06] p-7 md:p-9"
            >
              <div className="absolute right-0 top-0 h-20 w-20 border-l border-b border-[#ff5a00]/30" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff5a00]">
                Tomorrow
              </p>
              <ul className="mt-7 divide-y divide-[#d8d4cc]">
                {[
                  "Continuous governance",
                  "Intelligent monitoring",
                  "Dynamic regulatory intelligence",
                  "Risk-based decision making",
                  "Integrated accountability",
                ].map((item) => (
                  <li key={item} className="py-4 text-[15px] text-[#68706c]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI — question mosaic */}
      <section className="overflow-hidden bg-[#111412] py-16 text-[#f4f1eb] md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              Our Perspective on AI
            </p>
            <h2 className="mt-5 max-w-5xl text-[42px] font-medium leading-[1.02] tracking-[-0.045em] md:text-[60px]">
              AI is not only a technology challenge.
              <span className="block text-white/25">
                It is a governance challenge.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-7 text-[#9da7a3] md:text-lg">
              Organizations adopting AI increasingly need to answer questions
              around data, accountability, transparency, security, privacy,
              risk and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {questions.map((question, index) => (
              <motion.article
                key={question}
                initial={{ opacity: 0, y: index % 2 === 0 ? 40 : -40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                whileHover={{ y: -5 }}
                className="group min-h-[150px] border border-white/10 bg-white/[0.025] p-6"
              >
                <span className="text-2xl font-light text-[#ff5a00]">?</span>
                <p className="mt-7 text-[15px] leading-6 text-[#9da7a3] transition-colors group-hover:text-white">
                  {question}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE — three large cards */}
      <section className="overflow-hidden bg-[#f4f1eb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={left}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              Our Difference
            </p>
            <h2 className="mt-5 text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
              Practical. Integrated.
              <span className="block text-black/25">Forward-looking.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-7 text-[#68706c] md:text-lg">
              We don't view governance disciplines as separate boxes. We connect
              them to create a more complete picture of organizational risk,
              responsibility and resilience.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              {
                title: "Clarity",
                text: "Understand what matters, what is changing and why it matters to your organization.",
              },
              {
                title: "Control",
                text: "Translate requirements into practical actions, processes, responsibilities and measurable controls.",
              },
              {
                title: "Confidence",
                text: "Create evidence and assurance that can stand up to internal, client and regulatory scrutiny.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.65, delay: index * 0.1, ease }}
                whileHover={{ y: -7 }}
                className="group relative min-h-[270px] overflow-hidden bg-[#ebe8e1] p-8 md:p-10"
              >
                <div className="absolute left-0 top-0 h-1 w-12 bg-[#ff5a00] transition-all duration-500 group-hover:w-full" />
                <h3 className="mt-7 text-[28px] font-medium">{item.title}</h3>
                <p className="mt-5 text-[15px] leading-7 text-[#68706c]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH — pill field */}
      <section className="overflow-hidden bg-[#ebe8e1] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={right}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              Who We Work With
            </p>
            <h2 className="mt-5 max-w-4xl text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
              Built for organizations
              <span className="block text-black/25">
                operating in complexity.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-7 text-[#68706c] md:text-lg">
              We support organizations operating in highly regulated,
              technology-intensive or rapidly evolving environments.
            </p>
          </motion.div>

          <div className="mt-10 flex max-w-5xl flex-wrap gap-2.5">
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.45, delay: index * 0.05, ease }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="border border-[#cfcac1] bg-[#f4f1eb] px-5 py-3 text-sm text-[#68706c]"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT — centered statement */}
      <section className="overflow-hidden bg-[#f4f1eb] py-16 text-center md:py-20">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-7xl px-6 lg:px-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Our Commitment
          </p>
          <h2 className="mx-auto mt-5 max-w-5xl text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
            Governance that creates confidence.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-[16px] leading-8 text-[#68706c] md:text-lg">
            We believe the strongest organizations will not be those that
            simply respond to regulation.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-[#68706c] md:text-lg">
            They will be those that{" "}
            <strong className="text-[#171b19]">
              anticipate change, understand risk and build governance into the
              way they operate.
            </strong>
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-[#68706c] md:text-lg">
            Ankh GRC exists to help organizations make that transition.
          </p>
        </motion.div>
      </section>

      {/* CTA — animated closing */}
      <section className="relative overflow-hidden bg-[#111412] py-16 text-center text-[#f4f1eb] md:py-20">
        <motion.div
          className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#ff5a00]/15 blur-3xl"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mx-auto max-w-7xl px-6 lg:px-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Start a Conversation
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
            Is your governance ready for what comes next?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[#9da7a3] md:text-lg">
            Regulations will change. Technology will evolve. AI will
            accelerate. Risks will shift. Your governance framework needs to
            evolve with them.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[52px] items-center gap-3 bg-[#ff5a00] px-7 py-4 text-sm font-semibold text-[#111412] transition-all duration-300 hover:-translate-y-1"
          >
            Let's Build It Together
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
