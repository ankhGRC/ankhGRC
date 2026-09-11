"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

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

export default function InsightsPage() {
  const categories = [
    {
      title: "Governance",
      text: "Perspectives on governance frameworks, accountability, decision-making, and organisational oversight.",
    },
    {
      title: "Risk",
      text: "Understand emerging risks and practical approaches to identifying, assessing, and managing them effectively.",
    },
    {
      title: "Compliance",
      text: "Insights into regulatory change, compliance requirements, audit readiness, and regulatory resilience.",
    },
    {
      title: "Cybersecurity",
      text: "Explore cybersecurity perspectives, resilience, threats, controls, and organisational preparedness.",
    },
    {
      title: "Regulatory Change",
      text: "Keep up with evolving regulatory expectations and understand what they mean for your organisation.",
    },
    {
      title: "Industry Insights",
      text: "Discover perspectives relevant to different industries and their unique regulatory environments.",
    },
  ];

  const themes = [
    "Governance",
    "Risk & Resilience",
    "Regulatory Updates",
    "Security & Compliance",
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#111412] text-[#f4f1eb]">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* HERO — split editorial + animated knowledge panel */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#111412]">
        <motion.div
          className="absolute -right-40 top-0 h-[650px] w-[650px] rounded-full bg-[#e65300]/10 blur-[130px]"
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col justify-center"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6a00]">
              Resources / Insights
            </p>

            <h1 className="max-w-4xl text-[54px] font-medium leading-[0.94] tracking-[-0.05em] md:text-[76px] lg:text-[88px]">
              Insights
              <span className="block text-white/30">That Matter.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/60 md:text-lg">
              Explore perspectives, ideas, and practical guidance on governance,
              risk, compliance, cybersecurity, and the evolving regulatory landscape.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#insights"
                className="inline-flex min-h-[52px] items-center gap-3 bg-[#ff6a00] px-7 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7a1a]"
              >
                Explore Insights
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#featured"
                className="inline-flex min-h-[52px] items-center border border-white/20 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6a00] hover:text-[#ff6a00]"
              >
                Featured
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="relative overflow-hidden border border-white/10 bg-[#151916] p-7 md:p-9"
          >
            <motion.div
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ff6500]/10 blur-3xl"
              animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.3, 0.65, 0.3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <p className="text-[10px] tracking-[0.35em] text-white/40">
                ANKH GRC
              </p>
              <p className="mt-6 text-[10px] tracking-[0.35em] text-white/35">
                KNOWLEDGE FRAMEWORK
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {themes.map((theme, index) => (
                  <motion.div
                    key={theme}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.25 + index * 0.08, ease }}
                    className="group relative min-h-[135px] border border-white/10 bg-[#1a1f1d] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6500]/40 hover:bg-[#1d2220]"
                  >
                    <span className="text-[13px] text-[#ff6500]">+</span>
                    <p className="absolute bottom-5 left-5 text-[14px] leading-5 text-white/85 transition-transform duration-300 group-hover:translate-x-1">
                      {theme}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between text-[9px] tracking-[0.3em]">
                  <span className="text-white/35">COVERAGE</span>
                  <span className="text-[#ff6500]">GLOBAL</span>
                </div>
                <motion.div
                  className="mt-3 h-px origin-left bg-[#ff6500]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.78 }}
                  transition={{ duration: 1, delay: 0.65, ease }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO — large editorial statement */}
      <section id="insights" className="overflow-hidden bg-[#f1eee7] text-[#171b19]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Insights
              </p>
              <h2 className="mt-6 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                Knowledge
                <span className="block text-black/25">for Better</span>
                Decisions
              </h2>
            </div>

            <div>
              <p className="max-w-4xl text-[18px] leading-8 text-black/60">
                The regulatory and risk environment continues to evolve.
                Organisations need clear perspectives to understand change,
                respond effectively, and build resilient operations.
              </p>

              <div className="mt-10 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
                <motion.article
                  whileHover={{ y: -5 }}
                  className="bg-[#f1eee7] p-7 md:p-8"
                >
                  <div className="h-1 w-10 bg-[#e65300]" />
                  <h3 className="mt-10 text-xl font-semibold">
                    Practical Perspectives
                  </h3>
                  <p className="mt-3 text-base leading-6 text-black/55">
                    Clear perspectives designed to help organisations
                    understand complex GRC challenges.
                  </p>
                </motion.article>

                <motion.article
                  whileHover={{ y: -5 }}
                  className="bg-[#f1eee7] p-7 md:p-8"
                >
                  <div className="h-1 w-10 bg-[#e65300]" />
                  <h3 className="mt-10 text-xl font-semibold">
                    Emerging Trends
                  </h3>
                  <p className="mt-3 text-base leading-6 text-black/55">
                    Stay informed about changing regulations, risks,
                    technologies, and industry expectations.
                  </p>
                </motion.article>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPLORE — contained horizontal scroll */}
      <section className="overflow-hidden bg-[#111412] py-16 text-[#f4f1eb] md:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
              Explore
            </p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <h2 className="text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
                Perspectives Across
                <span className="block text-white/25">GRC</span>
              </h2>
              <p className="max-w-md text-[15px] leading-7 text-white/40">
                Explore ideas and knowledge across governance, risk, compliance,
                and cybersecurity.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 w-full min-w-0 max-w-full overflow-hidden border border-white/10">
            <div
              onWheelCapture={horizontalWheel}
              className="flex w-full min-w-0 gap-3 overflow-x-scroll p-4 pb-5 [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-[#ff6500]/70 [&::-webkit-scrollbar-track]:bg-white/10"
              style={{ touchAction: "pan-x" }}
            >
              {categories.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.4), ease }}
                  whileHover={{ y: -6 }}
                  className="group relative flex min-h-[330px] w-[78vw] min-w-[78vw] shrink-0 flex-col overflow-hidden border border-white/10 bg-[#171b19] p-7 sm:w-[45vw] sm:min-w-[45vw] lg:w-[330px] lg:min-w-[330px]"
                >
                  <div className="h-1 w-10 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
                  <h3 className="mt-auto text-[25px] font-medium tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-white/45 transition-colors group-hover:text-white/65">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
            Scroll inside this panel
          </p>
        </div>
      </section>

      {/* FEATURED — asymmetric feature */}
      <section
        id="featured"
        className="overflow-hidden bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Featured
              </p>
              <h2 className="mt-6 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                Featured
                <span className="block text-black/25">Perspective</span>
              </h2>
            </div>

            <motion.article
              whileHover={{ y: -5 }}
              className="relative overflow-hidden border border-black/10 bg-white/45 p-8 md:p-10 lg:p-12"
            >
              <div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-[#e65300]/30" />
              <p className="text-xs font-semibold tracking-[0.2em] text-orange-600">
                GRC / PERSPECTIVE
              </p>
              <h3 className="mt-7 max-w-3xl text-[30px] font-medium leading-tight tracking-[-0.03em] md:text-[42px]">
                Building resilience through better governance, risk, and
                compliance.
              </h3>
              <p className="mt-6 max-w-3xl text-base leading-7 text-black/55">
                Strong GRC practices help organisations move beyond
                compliance and create a foundation for resilience, trust,
                and sustainable growth.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-orange-600"
              >
                Read More
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* CTA — animated orange block */}
      <section className="relative overflow-hidden bg-[#ff6a00] px-6 py-16 text-[#111412] lg:px-10 lg:py-20">
        <motion.div
          className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Stay Informed
          </p>
          <h2 className="mt-5 max-w-4xl text-[46px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[68px]">
            Keep Learning.
            <span className="block text-black/30">Keep Growing.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-black/55">
            Stay connected with the latest perspectives and ideas shaping
            governance, risk, compliance, and cybersecurity.
          </p>

          <a
            href="mailto:info@ankhgrc.com"
            className="mt-8 inline-flex min-h-[52px] items-center gap-3 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111412]"
          >
            Connect With Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
