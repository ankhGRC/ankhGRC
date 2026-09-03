"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

const services = [
  {
    label: "GOVERNANCE",
    title: "Governance & Risk",
    description:
      "Build accountable decision-making, risk frameworks, control environments and governance structures aligned with business objectives.",
  },
  {
    label: "COMPLIANCE",
    title: "Regulatory Compliance",
    description:
      "Translate regulatory obligations into practical requirements, controls, ownership and evidence.",
  },
  {
    label: "SECURITY",
    title: "Cyber & Information Security",
    description:
      "Strengthen security governance, technology risk management, resilience and assurance.",
  },
  {
    label: "PRIVACY",
    title: "Privacy & Data Governance",
    description:
      "Build responsible data practices across collection, processing, transfer, retention and use.",
  },
  {
    label: "AI",
    title: "AI Governance",
    description:
      "Establish responsible, transparent and risk-aware governance for AI and emerging technologies.",
  },
  {
    label: "REGULATORY INTELLIGENCE",
    title: "Regulatory Change",
    description:
      "Monitor evolving requirements and turn regulatory change into clear, actionable business priorities.",
  },
];

const industries = [
  ["Financial Services", "Trust • Resilience • Regulation"],
  ["Healthcare & Life Sciences", "Privacy • Security • Data"],
  ["Technology & SaaS", "Cloud • AI • Assurance"],
  ["Manufacturing", "OT/IT • Supply Chain • Resilience"],
  ["Energy & Utilities", "Critical Infrastructure • Cyber"],
  ["Retail & Consumer", "Customer Data • Digital Risk"],
  ["Government", "Accountability • Digital Trust"],
  ["Global Enterprises", "Cross-Border • Regulatory Change"],
];

const whyCards = [
  {
    title: "Clarity",
    description:
      "Know which regulations, risks and obligations matter to your business — and why.",
  },
  {
    title: "Control",
    description:
      "Convert requirements into practical controls, responsibilities, workflows and evidence.",
  },
  {
    title: "Confidence",
    description:
      "Build governance that can withstand customer, management, audit and regulatory scrutiny.",
  },
  {
    title: "Connected GRC",
    description:
      "Bring governance, risk, compliance, security, privacy and technology together into one operating perspective.",
  },
];

const insights = [
  {
    tag: "AI Governance",
    title: "Will AI become the customs officer of global data?",
    description:
      "As data crosses jurisdictions, organizations need governance that can keep pace with automated decisions and regulatory expectations.",
  },
  {
    tag: "Regulatory Intelligence",
    title: "From periodic compliance to continuous readiness.",
    description:
      "Why organizations need to rethink compliance as regulations and technology evolve faster than annual review cycles.",
  },
  {
    tag: "Digital Trust",
    title: "Can governance become a competitive advantage?",
    description:
      "Strong governance can move beyond risk reduction to become a foundation for trust, innovation and sustainable growth.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f5f2eb] text-[#151916]">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <Navigation />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#151916] text-white">
        {/* Ambient orange glow */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#ff6500]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#ff6500]/[0.025] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-32">
          {/* Hero copy */}
          <div className="max-w-3xl">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6500]">
              Governance • Risk • Compliance
            </p>

            <h1 className="max-w-5xl text-[50px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[62px] md:text-[76px] lg:text-[84px]">
              Make complexity your{" "}
              <span className="text-[#ff6500]">
                competitive advantage.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-[17px] leading-8 text-white/60 md:text-[18px]">
              Ankh GRC helps organizations navigate the intersection of
              regulation, technology, cybersecurity, privacy, data and AI —
              turning complex requirements into practical governance and
              confident business decisions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex min-h-[54px] items-center gap-3 rounded-[10px] bg-[#ff6500] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85d00] hover:shadow-[0_12px_30px_rgba(255,101,0,0.18)]"
              >
                Explore Our Services
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[54px] items-center rounded-[10px] border border-white/20 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.04]"
              >
                Talk to Ankh GRC
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative min-h-[470px] lg:min-h-[510px]">
            <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-[#181d1a]" />

            <div className="absolute inset-0 overflow-hidden rounded-[28px]">
              <div className="absolute right-[-90px] top-[35px] h-[430px] w-[430px] rounded-full border border-white/[0.08] animate-[spin_24s_linear_infinite]" />
              <div className="absolute right-[-20px] top-[100px] h-[300px] w-[300px] rounded-full border border-[#ff6500]/20 border-dashed animate-[spin_17s_linear_infinite_reverse]" />
              <div className="absolute right-[40px] top-[165px] h-[170px] w-[170px] rounded-full border border-[#ff6500]/20 animate-pulse" />

              <div className="absolute right-[92px] top-[220px] flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#ff6500]/70 bg-[#ff6500]/[0.08] text-[11px] font-semibold tracking-[0.18em] text-[#ff6500] shadow-[0_0_35px_rgba(255,101,0,0.12)] animate-pulse">
                GRC
              </div>

              <div className="absolute left-8 top-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/35">
                  ANKH GRC
                </p>
                <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-white/20">
                  Governance Architecture
                </p>
              </div>

              <div className="absolute bottom-8 left-8 border-l border-[#ff6500] pl-5">
                <p className="text-[28px] font-medium tracking-[-0.02em]">
                  Secure.
                </p>
                <p className="text-[13px] text-white/40">
                  Compliant. Future Ready.
                </p>
              </div>

              <div className="absolute bottom-8 right-8 flex items-end gap-1 opacity-60">
                <span className="h-5 w-px bg-[#ff6500]" />
                <span className="h-9 w-px bg-[#ff6500]" />
                <span className="h-14 w-px bg-[#ff6500]" />
                <span className="h-8 w-px bg-[#ff6500]" />
                <span className="h-11 w-px bg-[#ff6500]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PERSPECTIVE
      ========================================================= */}
      <section className="bg-[#f5f2eb] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
              The Ankh GRC Perspective
            </p>

            <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[58px]">
              Governance is no longer a back-office function.
            </h2>
          </div>

          <div className="rounded-r-[18px] border-l-2 border-[#ff6500] bg-[#ebe7de] px-7 py-8 md:px-10 md:py-10">
            <p className="text-[23px] leading-[1.5] tracking-[-0.02em] md:text-[27px]">
              As technology, regulation and AI converge, governance becomes
              part of{" "}
              <strong className="text-[#e65300]">
                how a business competes, grows and earns trust.
              </strong>
            </p>

            <p className="mt-7 text-[16px] leading-7 text-black/55">
              We help organizations move from reactive compliance to
              intelligent, integrated and continuously evolving governance.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW ANKH GRC IS DIFFERENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111412] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-48 top-0 h-[520px] w-[520px] rounded-full bg-[#ff6500]/[0.045] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
              How Ankh Is Different
            </p>

            <h2 className="mt-7 text-[42px] font-medium leading-[1.02] tracking-[-0.045em] md:text-[62px]">
              How Ankh is
              <br />
              <span className="text-[#ff6500]">different from other</span>
              <br />
              GRC companies.
            </h2>

            <p className="mt-8 max-w-xl text-[17px] leading-8 text-white/55">
              Many GRC companies begin with a framework, a checklist or a certification
              target. Ankh GRC begins with your business—how you operate, where risk
              sits, what your stakeholders expect and what needs to change.
            </p>

            <p className="mt-8 text-[18px] font-semibold leading-8 tracking-[-0.01em] md:text-[21px]">
              We don't just help you <span className="text-[#ff6500]">meet requirements.</span>
              <br />
              We help you <span className="text-[#ff6500]">build a stronger organization.</span>
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "BUSINESS-FIRST",
                title: "Business before framework",
                text: "We don't force your organization into a template. We understand your operating model, objectives and risk landscape first.",
              },
              {
                label: "CONNECTED GRC",
                title: "One view of risk and trust",
                text: "Governance, risk, security, privacy, compliance and technology are connected instead of managed as isolated workstreams.",
              },
              {
                label: "PRACTICAL DELIVERY",
                title: "From advice to action",
                text: "We translate requirements into ownership, processes, controls and evidence that teams can actually operate.",
              },
              {
                label: "FUTURE-READY",
                title: "Built for what changes next",
                text: "We look beyond today's checklist to regulatory change, AI, emerging technology and evolving business risk.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="group relative min-h-[245px] overflow-hidden rounded-[20px] border border-white/10 bg-[#181d1a] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500]/35 hover:bg-[#1b201d]"
              >
                <div className="absolute left-7 right-7 top-0 h-px bg-[#ff6500]/60" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
                  {item.label}
                </p>
                <h3 className="mt-7 text-[20px] font-semibold leading-tight tracking-[-0.02em] md:text-[21px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-6 text-white/50">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-[#111412] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
              What We Do
            </p>

            <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[58px]">
              From regulatory complexity
              <br />
              <span className="text-white/35">to business confidence.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-white/50">
              Ankh GRC connects governance, risk, compliance, security,
              privacy and emerging technology into one practical operating
              perspective.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative min-h-[270px] overflow-hidden rounded-[20px] border border-white/10 bg-[#181d1a] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6500]/30 hover:bg-[#1b201d] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute left-0 top-0 h-px w-12 bg-[#ff6500] transition-all duration-500 group-hover:w-24" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff6500]">
                  {service.label}
                </p>

                <div className="mt-12">
                  <h3 className="text-[23px] font-medium tracking-[-0.025em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/50">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#ff6500]/40 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="bg-[#f5f2eb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
            Industries
          </p>

          <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[58px]">
            Because context changes everything.
          </h2>

          <p className="mt-7 max-w-3xl text-[17px] leading-8 text-black/55">
            GRC cannot be designed in isolation. Industry regulation,
            operating models, technology, data and risk determine what
            effective governance looks like.
          </p>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(([title, subtitle]) => (
              <Link
                key={title}
                href="/industries"
                className="group relative min-h-[145px] overflow-hidden rounded-[16px] border border-black/10 bg-[#ebe7de] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-[#e65300]/35 hover:bg-white"
              >
                <span className="absolute left-0 top-0 h-px w-0 bg-[#e65300] transition-all duration-500 group-hover:w-16" />

                <strong className="block text-[16px] font-medium tracking-[-0.015em]">
                  {title}
                </strong>

                <span className="mt-3 block text-[12px] leading-5 text-black/45">
                  {subtitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY ANKH GRC
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#151916] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#ff6500]/[0.045] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
                Why Ankh GRC
              </p>

              <h2 className="mt-7 text-[44px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[62px]">
                Built for the world
                <br />
                <span className="text-white/35">that comes next.</span>
              </h2>

              <p className="mt-7 text-[17px] leading-8 text-white/55">
                The old model was periodic, manual and reactive. The new model
                is continuous, connected and intelligence-led.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {whyCards.map((card) => (
                <article
                  key={card.title}
                  className="group relative min-h-[215px] overflow-hidden rounded-[20px] border border-white/10 bg-[#1a1f1d] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6500]/30 hover:bg-[#1c211f] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
                >
                  <div className="absolute left-0 top-0 h-px w-12 bg-[#ff6500] transition-all duration-500 group-hover:w-24" />

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff6500]">
                      {card.title}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff6500]/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#ff6500] group-hover:shadow-[0_0_10px_rgba(255,101,0,0.7)]" />
                  </div>

                  <p className="mt-12 text-[15px] leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/65">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AI GOVERNANCE
      ========================================================= */}
      <section className="bg-[#f5f2eb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid overflow-hidden rounded-[24px] border border-black/10 bg-[#ebe7de] lg:grid-cols-2">
            <div className="p-9 md:p-12 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
                AI Governance
              </p>

              <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[56px]">
                AI is changing
                <br />
                the risk equation.
              </h2>

              <p className="mt-7 max-w-xl text-[17px] leading-8 text-black/55">
                AI introduces new questions around accountability, data,
                transparency, security, privacy, model risk and decision-making.
              </p>

              <p className="mt-6 max-w-xl text-[16px] leading-7 text-black/45">
                Ankh GRC helps organizations build governance around AI so
                innovation can move forward with appropriate controls,
                oversight and evidence.
              </p>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[#ff6500] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85d00]"
              >
                Explore AI Governance
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[#151916]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,101,0,0.12),transparent_24%)]" />

              <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff6500]/20 animate-[spin_22s_linear_infinite]" />

              <div className="absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff6500]/25 border-dashed animate-[spin_15s_linear_infinite_reverse]" />

              <div className="absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ff6500]/70 bg-[#ff6500]/[0.08] text-[25px] font-medium text-[#ff6500] shadow-[0_0_40px_rgba(255,101,0,0.14)] animate-pulse">
                AI
              </div>

              <div className="absolute bottom-8 left-8 text-[9px] uppercase tracking-[0.3em] text-white/30">
                Trust • Risk • Accountability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSIGHTS
      ========================================================= */}
      <section className="bg-[#111412] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
            Insights
          </p>

          <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[58px]">
            Think ahead.
            <br />
            <span className="text-white/35">Govern forward.</span>
          </h2>

          <p className="mt-7 max-w-3xl text-[17px] leading-8 text-white/50">
            The regulatory landscape is moving quickly. So are technology and
            AI. Our insights explore what these changes mean for organizations.
          </p>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {insights.map((insight) => (
              <article
                key={insight.title}
                className="group relative min-h-[300px] overflow-hidden rounded-[20px] border border-white/10 bg-[#181d1a] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6500]/30 hover:bg-[#1b201d]"
              >
                <div className="absolute left-0 top-0 h-px w-12 bg-[#ff6500] transition-all duration-500 group-hover:w-24" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff6500]">
                  {insight.tag}
                </p>

                <h3 className="mt-8 text-[22px] font-medium leading-[1.3] tracking-[-0.02em]">
                  {insight.title}
                </h3>

                <p className="mt-5 text-[14px] leading-7 text-white/50">
                  {insight.description}
                </p>

                <Link
                  href="/insights"
                  className="mt-7 inline-flex text-sm font-semibold text-[#ff6500] transition-transform duration-300 group-hover:translate-x-1"
                >
                  Read insight
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#151916] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6500]/[0.055] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
            Start a Conversation
          </p>

          <h2 className="mt-7 text-[44px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[64px]">
            Ready to turn governance
            <br />
            <span className="text-white/35">into confidence?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-white/50">
            Whether you are responding to regulatory change, strengthening
            controls, preparing for AI or building a future-ready GRC program,
            let&apos;s start with the business challenge.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-[10px] bg-[#ff6500] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85d00] hover:shadow-[0_12px_30px_rgba(255,101,0,0.18)]"
          >
            Talk to Ankh GRC
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </main>
  );
}
