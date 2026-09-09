"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
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

export default function IndustriesPage() {
  return (
    <main className="overflow-x-hidden bg-[#f5f2eb] text-[#151916]">
      {/* NAVBAR */}
      <div className="bg-white">
        <Navigation />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative bg-[#151916] text-white h-[700px]">
        <div
          className="absolute inset-0 opacity-70 pt-60"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, transparent 30%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-32 lg:pt-32">
          <div className="max-w-3xl">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6500]">
              Industries
            </p>

            <h1 className="max-w-4xl text-[52px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[72px] lg:text-[84px]">
              GRC built around
              <span className="block text-white/45">your industry.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-[18px] leading-8 text-white/65">
              Every industry operates within its own regulatory environment,
              technology landscape and risk profile. Ankh GRC brings an
              industry-aware approach to Governance, Risk and Compliance —
              helping organizations translate complex requirements into
              practical, business-aligned controls.
            </p>
          </div>

          <div className="flex items-end">
            <div className="w-full border-t border-white/20 pt-7 lg:border-l lg:border-t-0 lg:pb-4 lg:pl-10 lg:pt-0">
             

              <p className="mt-6 max-w-md text-[28px] leading-[1.2] tracking-[-0.025em] text-white/90 md:text-[34px]">
                Business context first.
                <br />
                <span className="text-white/45">
                  Governance designed around how you operate.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="bg-[#f5f2eb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 grid gap-8 border-b border-black/15 pb-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
                Where We Create Value
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[40px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[56px]">
                Different industries.
                <br />
                Different risks.
                <br />
                <span className="text-black/35">
                  One need for confidence.
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-[17px] leading-8 text-black/60">
                Our approach combines regulatory understanding, technology
                risk, information security, privacy, AI governance and business
                context to help organizations build governance that works for
                their specific operating environment.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.number}
                className="group relative flex min-h-[380px] flex-col bg-[#f5f2eb] p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#151916] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] md:p-9"
              >
                <div className="h-1 w-8 bg-[#e65300] transition-all duration-500 group-hover:w-14 group-hover:shadow-[0_0_10px_rgba(255,101,0,0.35)]" />

                <div className="mt-10">
                  <h3 className="text-[26px] font-medium leading-tight tracking-[-0.025em] transition-colors group-hover:text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-[17px] font-medium leading-6 text-black/65 transition-colors group-hover:text-white/70">
                    {industry.tagline}
                  </p>

                  <p className="mt-7 text-[15px] leading-7 text-black/55 transition-colors group-hover:text-white/55">
                    {industry.description}
                  </p>
                </div>

                <div className="mt-auto pt-9">
                  <span className="text-sm font-medium text-[#e65300] transition-all duration-300 group-hover:tracking-wide">
                    {industry.link}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CROSS-INDUSTRY
      ========================================================= */}
      <section className="bg-[#151916] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
                Cross-Industry Perspective
              </p>

              <h2 className="mt-7 max-w-xl text-[42px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[58px]">
                Some risks don't respect
                <span className="block text-white/35">
                  industry boundaries.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[17px] leading-8 text-white/55">
                Across industries, organizations increasingly face common
                challenges around AI, data, cybersecurity, third parties,
                regulation and cross-border operations.
              </p>
            </div>

            <div className="border-t border-white/15">
              {capabilities.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-white/15 py-7 transition-all duration-300 hover:bg-white/[0.02] sm:grid-cols-[24px_1fr_1.15fr]"
                >
                  <span className="h-px w-6 bg-[#ff6500] transition-all duration-500 group-hover:w-10" />

                  <h3 className="text-[19px] font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="text-[14px] leading-6 text-white/50 transition-colors group-hover:text-white/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section className="bg-[#f5f2eb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
                Our Industry Approach
              </p>

              <h2 className="mt-7 text-[44px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[62px]">
                We don't start
                <br />
                <span className="text-black/30">with a checklist.</span>
              </h2>

              <p className="mt-7 max-w-xl text-[17px] leading-8 text-black/55">
                We start with your business model. Then we examine the
                regulatory, data, technology and risk environment around it.
              </p>
            </div>

            <div>
              <div className="border-t border-black/20">
                {approachSteps.map((step) => (
                  <div
                    key={step}
                    className="group flex items-center gap-7 border-b border-black/15 py-6"
                  >
                    <span className="h-px w-7 shrink-0 bg-[#e65300] transition-all duration-500 group-hover:w-11" />

                    <h3 className="text-[21px] font-medium tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1 md:text-[24px]">
                      {step}
                    </h3>

                    <div className="ml-auto h-[7px] w-[7px] rounded-full bg-black/20 transition-all duration-300 group-hover:bg-[#ff6500]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid overflow-hidden bg-[#e9e5dc] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-[260px] items-end bg-[#e65300] p-9 text-white md:p-12">
              <h3 className="text-[38px] font-medium leading-[1.04] tracking-[-0.035em] md:text-[48px]">
                Context
                <br />
                before controls.
              </h3>
            </div>

            <div className="p-9 md:p-12 lg:p-14">
              <p className="max-w-3xl text-[19px] leading-8 text-black/75">
                Effective GRC is not about applying the same checklist to every
                organization. It is about understanding what your business
                does, where risk enters the operating model and what
                regulators, customers and stakeholders expect.
              </p>

              <p className="mt-7 max-w-3xl text-[16px] leading-7 text-black/55">
                We use that context to help create governance that is
                practical, measurable and aligned with business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIFFERENCE
      ========================================================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
              The Ankh GRC Difference
            </p>

            <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[60px]">
              Industry-aware.
              <br />
              Business-aligned.
              <br />
              <span className="text-black/30">Future-ready.</span>
            </h2>
          </div>

          <div className="grid border-l border-t border-black/15 md:grid-cols-2 lg:grid-cols-4">
            {differences.map((item) => (
              <div
                key={item.number}
                className="group border-b border-r border-black/15 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5f2eb] hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)] md:min-h-[285px]"
              >
                <div className="h-1 w-8 bg-[#e65300] transition-all duration-500 group-hover:w-12" />

                <div className="mt-12">
                  <Check className="mb-6 h-5 w-5 text-[#e65300]" />

                  <h3 className="text-[22px] font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-black/55">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#151916] py-24 text-white md:py-32">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 50%, rgba(255,101,0,0.18), transparent 32%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
            Start a Conversation
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[46px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[66px]">
                Your industry is changing.
                <span className="block text-white/35">
                  Is your governance keeping up?
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-[16px] leading-7 text-white/55">
                Whether you're navigating new regulations, expanding into new
                markets, adopting AI, transforming digitally or strengthening
                existing controls, Ankh GRC can help you build governance
                designed for what comes next.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex min-h-[54px] items-center gap-3 bg-[#ff6500] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#e85d00]"
                >
                  Explore Our Services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center gap-3 border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-white/60"
                >
                  Talk to Ankh GRC
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}