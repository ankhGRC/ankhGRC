"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";



const industries = [
  {
    number: "01",
    title: "Financial Services",
    tagline: "Trust is the business.",
    description:
      "Governance, regulatory compliance, cyber risk, privacy, operational resilience and third-party risk for organizations operating under intense regulatory scrutiny.",
    link: "Protect trust",
  },
  {
    number: "02",
    title: "Healthcare & Life Sciences",
    tagline: "Protecting information. Protecting trust.",
    description:
      "Privacy, information security, data governance, technology risk, third-party risk and AI governance for sensitive-data environments.",
    link: "Enable responsible transformation",
  },
  {
    number: "03",
    title: "Technology & SaaS",
    tagline: "Build fast. Govern intelligently.",
    description:
      "Security and compliance frameworks, cloud risk, SaaS governance, privacy, customer assurance and AI governance for technology businesses.",
    link: "Turn trust into advantage",
  },
  {
    number: "04",
    title: "Manufacturing",
    tagline: "Governance beyond the factory floor.",
    description:
      "Cybersecurity, OT/IT risk, supply-chain risk, operational resilience, business continuity and technology governance for connected operations.",
    link: "Build resilient operations",
  },
  {
    number: "05",
    title: "Energy & Utilities",
    tagline: "Resilience is not optional.",
    description:
      "Critical infrastructure risk, cyber governance, operational resilience, third-party risk and regulatory readiness for essential services.",
    link: "Strengthen resilience",
  },
  {
    number: "06",
    title: "Retail & Consumer",
    tagline: "Customer trust starts with responsible data.",
    description:
      "Privacy, cybersecurity, digital risk, customer data controls, third-party risk and AI governance across connected customer journeys.",
    link: "Protect customer trust",
  },
  {
    number: "07",
    title: "Government & Public Sector",
    tagline: "Governance with accountability at its core.",
    description:
      "Governance, risk, information security, privacy, digital transformation risk and AI governance for public-sector environments.",
    link: "Strengthen accountability",
  },
  {
    number: "08",
    title: "Global Enterprises",
    tagline: "One organization. Multiple jurisdictions.",
    description:
      "Cross-border data governance, regulatory intelligence, localization, global compliance, privacy, AI governance and technology risk.",
    link: "Govern globally",
  },
  {
    number: "09",
    title: "Professional & Business Services",
    tagline: "Your reputation is part of your risk profile.",
    description:
      "Information security, privacy, third-party risk, client assurance, regulatory compliance, business continuity and evidence management.",
    link: "Build client confidence",
  },
];

const capabilities = [
  {
    number: "01",
    title: "AI & Emerging Technology",
    description:
      "Responsible adoption, AI risk, governance, accountability and oversight.",
  },
  {
    number: "02",
    title: "Data & Privacy",
    description:
      "Protect personal and sensitive information across its lifecycle.",
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "Build governance and resilience around evolving cyber threats.",
  },
  {
    number: "04",
    title: "Third-Party Risk",
    description:
      "Understand risks introduced by vendors, partners and technology providers.",
  },
  {
    number: "05",
    title: "Regulatory Change",
    description:
      "Monitor evolving requirements and translate them into actionable controls.",
  },
  {
    number: "06",
    title: "Cross-Border Data",
    description:
      "Manage data transfers, localization, residency and jurisdictional obligations.",
  },
];

const approachSteps = [
  "Industry & Business Model",
  "Regulatory Environment",
  "Data & Information",
  "Technology & Digital Landscape",
  "Risk & Control Environment",
  "Evidence & Assurance",
];

const differences = [
  {
    number: "01",
    title: "Industry-aware",
    description:
      "We consider the regulatory and operational realities of your sector.",
  },
  {
    number: "02",
    title: "Business-aligned",
    description:
      "Governance connects directly to business objectives rather than operating as a separate exercise.",
  },
  {
    number: "03",
    title: "Technology-conscious",
    description:
      "Modern GRC must understand cloud, AI, digital platforms, data and cybersecurity.",
  },
  {
    number: "04",
    title: "Evidence-driven",
    description:
      "Good governance should be demonstrable, measurable and defensible.",
  },
];


const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -55 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 55 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const viewport = { once: false, amount: 0.18 };

export default function IndustriesPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f5f2eb] text-[#151916]">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* HERO — split editorial layout */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#151916] text-white lg:min-h-[680px]">
        <motion.div
          className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#ff6500]/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
        />
        <motion.div
          className="absolute bottom-0 left-[42%] h-px w-[45%] bg-[#ff6500]/50"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24 lg:pt-28">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6500]">
              Industries
            </p>

            <h1 className="text-[52px] font-medium leading-[0.96] tracking-[-0.05em] md:text-[72px] lg:text-[88px]">
              GRC built around
              <span className="block text-white/35">your industry.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/60 md:text-[18px]">
              Every industry operates within its own regulatory environment,
              technology landscape and risk profile. Ankh GRC brings an
              industry-aware approach to Governance, Risk and Compliance —
              helping organizations translate complex requirements into
              practical, business-aligned controls.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex items-end lg:justify-end"
          >
            <div className="relative w-full max-w-md overflow-hidden border border-white/10 bg-white/[0.035] p-8 backdrop-blur-sm md:p-10">
              <div className="absolute left-0 top-0 h-1 w-20 bg-[#ff6500]" />
              <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-[#ff6500]/30" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Ankh GRC perspective
              </p>
              <p className="mt-8 text-[30px] leading-[1.08] tracking-[-0.03em] text-white/90 md:text-[38px]">
                Business context first.
              </p>
              <p className="mt-3 text-[20px] leading-7 text-white/35">
                Governance designed around how you operate.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-2">
                <span className="h-1 bg-[#ff6500]" />
                <span className="h-1 bg-white/15" />
                <span className="h-1 bg-white/15" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES — contained horizontal rail; scrollbar belongs only here */}
      <section className="overflow-hidden bg-[#f5f2eb] py-16 md:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10 grid gap-7 border-b border-black/15 pb-10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
              Where We Create Value
            </p>
            <div>
              <h2 className="max-w-4xl text-[40px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[56px]">
                Different industries.
                <br />
                Different risks.
                <span className="block text-black/30">One need for confidence.</span>
              </h2>
              <p className="mt-6 max-w-3xl text-[16px] leading-7 text-black/55">
                Our approach combines regulatory understanding, technology
                risk, information security, privacy, AI governance and business
                context to help organizations build governance that works for
                their specific operating environment.
              </p>
            </div>
          </motion.div>

          <div className="w-full min-w-0 max-w-full overflow-hidden rounded-[22px] border border-black/15 bg-black/10">
            <div
              className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain p-4 pb-5"
              style={{ scrollbarWidth: "thin" }}
            >
              {industries.map((industry, index) => (
                <motion.article
                  key={industry.number}
                  initial={{ opacity: 0, x: 55 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.42), ease }}
                  className="group relative flex min-h-[370px] w-[82vw] min-w-[82vw] shrink-0 snap-start flex-col overflow-hidden bg-[#f5f2eb] p-7 shadow-sm transition-all duration-500 hover:bg-[#151916] hover:text-white sm:w-[48vw] sm:min-w-[48vw] lg:w-[360px] lg:min-w-[360px]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-black/10 transition-colors group-hover:border-white/10" />
                  <div className="h-1 w-10 bg-[#e65300] transition-all duration-500 group-hover:w-20" />

                  <div className="mt-10">
                    <h3 className="text-[25px] font-medium leading-tight tracking-[-0.025em]">
                      {industry.title}
                    </h3>
                    <p className="mt-4 text-[16px] font-medium leading-6 text-black/65 transition-colors group-hover:text-white/70">
                      {industry.tagline}
                    </p>
                    <p className="mt-6 text-[14px] leading-7 text-black/55 transition-colors group-hover:text-white/55">
                      {industry.description}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-black/10 pt-6 text-sm font-medium text-[#e65300] transition-colors group-hover:border-white/10">
                    {industry.link}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-black/35">
            Scroll inside this panel to explore industries
          </p>
        </div>
      </section>

      {/* CROSS-INDUSTRY — dark bento */}
      <section className="overflow-hidden bg-[#151916] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-8 md:p-10">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ff6500]/10 blur-3xl" />
              <p className="relative text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
                Cross-Industry Perspective
              </p>
              <h2 className="relative mt-7 text-[42px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[58px]">
                Some risks don't respect
                <span className="block text-white/30">industry boundaries.</span>
              </h2>
              <p className="relative mt-7 max-w-xl text-[16px] leading-7 text-white/50">
                Across industries, organizations increasingly face common
                challenges around AI, data, cybersecurity, third parties,
                regulation and cross-border operations.
              </p>
            </div>

            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: index * 0.07, ease }}
                  whileHover={{ y: -5 }}
                  className="group relative min-h-[190px] overflow-hidden border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-[#ff6500]/45"
                >
                  <div className="absolute left-0 top-0 h-1 w-10 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
                  <h3 className="mt-8 text-[20px] font-medium">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-white/45 transition-colors group-hover:text-white/65">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* APPROACH — horizontal timeline inside width */}
      <section className="overflow-hidden bg-[#e9e5dc] py-16 md:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
                Our Industry Approach
              </p>
              <h2 className="mt-6 text-[44px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[62px]">
                We don't start
                <span className="block text-black/25">with a checklist.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-7 text-black/55">
                We start with your business model. Then we examine the
                regulatory, data, technology and risk environment around it.
              </p>
            </div>

            <div className="min-w-0">
              <div className="w-full min-w-0 max-w-full overflow-hidden border-y border-black/15">
                <div
                  className="flex min-w-max gap-3 overflow-x-auto p-4 pb-5"
                  style={{ scrollbarWidth: "thin" }}
                >
                  {approachSteps.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, delay: index * 0.07, ease }}
                      className="flex min-h-[170px] w-[210px] shrink-0 flex-col justify-between border border-black/15 bg-[#f5f2eb] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-[#e65300]/50"
                    >
                      <span className="h-1 w-9 bg-[#e65300]" />
                      <h3 className="text-[20px] font-medium leading-tight">{step}</h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                        Industry lens
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid overflow-hidden lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div className="flex min-h-[230px] items-end bg-[#e65300] p-8 text-white md:p-10">
              <h3 className="text-[38px] font-medium leading-[1.0] tracking-[-0.035em] md:text-[48px]">
                Context
                <br />
                before controls.
              </h3>
            </div>
            <div className="bg-[#f5f2eb] p-8 md:p-10 lg:p-12">
              <p className="max-w-3xl text-[18px] leading-8 text-black/70">
                Effective GRC is not about applying the same checklist to every
                organization. It is about understanding what your business
                does, where risk enters the operating model and what
                regulators, customers and stakeholders expect.
              </p>
              <p className="mt-6 max-w-3xl text-[15px] leading-7 text-black/50">
                We use that context to help create governance that is
                practical, measurable and aligned with business objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFFERENCE — bento */}
      <section className="overflow-hidden bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10 grid gap-7 lg:grid-cols-[0.75fr_1.25fr]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
              The Ankh GRC Difference
            </p>
            <h2 className="text-[42px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[60px]">
              Industry-aware.
              <br />
              Business-aligned.
              <span className="block text-black/25">Future-ready.</span>
            </h2>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {differences.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: index % 2 === 0 ? 45 : -45,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.65, delay: index * 0.08, ease }}
                whileHover={{ y: -7 }}
                className="group relative min-h-[270px] overflow-hidden border border-black/10 bg-[#f5f2eb] p-7"
              >
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e65300] transition-all duration-500 group-hover:w-full" />
                <Check className="h-5 w-5 text-[#e65300]" />
                <h3 className="mt-12 text-[22px] font-medium tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-black/55">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — large animated closing panel */}
      <section className="relative overflow-hidden bg-[#151916] py-16 text-white md:py-20">
        <motion.div
          className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#ff6500]/15 blur-3xl"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]"
          >
            Start a Conversation
          </motion.p>

          <div className="mt-7 grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-4xl text-[46px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[66px]"
            >
              Your industry is changing.
              <span className="block text-white/30">
                Is your governance keeping up?
              </span>
            </motion.h2>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="max-w-xl text-[16px] leading-7 text-white/50">
                Whether you're navigating new regulations, expanding into new
                markets, adopting AI, transforming digitally or strengthening
                existing controls, Ankh GRC can help you build governance
                designed for what comes next.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex min-h-[52px] items-center gap-3 bg-[#ff6500] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e85d00]"
                >
                  Explore Our Services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center gap-3 border border-white/25 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/60"
                >
                  Talk to Ankh GRC
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
