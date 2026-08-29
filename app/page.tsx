"use client";

import { Navigation } from "@/components/landing/navigation";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      number: "01",
      title: "Information Security Governance",
      description:
        "Build strong security governance structures, accountability models, and oversight to protect your organization.",
    },
    {
      number: "02",
      title: "Privacy & Data Protection",
      description:
        "Establish practical privacy programs, data protection controls, and regulatory compliance across your organization.",
    },
    {
      number: "03",
      title: "AI Governance",
      description:
        "Operationalize responsible AI through governance frameworks, risk management, policies, and regulatory readiness.",
    },
    {
      number: "04",
      title: "Industry-Specific Regulations",
      description:
        "Navigate complex regulatory requirements across healthcare, finance, technology, energy, retail, and government.",
    },
    {
      number: "05",
      title: "Cross-Border Compliance",
      description:
        "Manage international regulatory complexity, data localization, privacy requirements, and cross-border obligations.",
    },
    {
      number: "06",
      title: "Compliance Consulting",
      description:
        "Design, implement, and improve compliance programs aligned with business objectives and regulatory expectations.",
    },
  ];

  const capabilities = [
    "Governance & Oversight",
    "Risk Management",
    "Regulatory Compliance",
    "Security & Privacy",
    "AI Governance",
    "Audit & Assurance",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#111412] text-[#f4f1eb]">
  
      <Navigation/>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden border-b border-white/10">
        {/* background glow */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-[#e65300]/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#e65300]/5 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[779px] w-full max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:px-16">
<div className="mx-auto  grid min-h-[779px] w-full max-w-[1650px] items-center gap-24 px-8 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-28">          {/* LEFT */}

            {/* LEFT */}
            <div>
              <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff6500]">
                SECURE. COMPLIANT. FUTURE READY.
              </p>

              <h1 className="max-w-[900px] text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Governance
                <br />
                that moves
                <br />
                business forward.
              </h1>

              <p className="mt-9 max-w-[700px] text-base leading-8 text-[#a4aaa6] sm:text-lg">
                Ankh GRC helps organizations build secure, compliant, and
                resilient operations across security, privacy, AI, risk,
                and regulatory landscapes.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center gap-5 bg-[#ff6500] px-7 py-4 text-sm font-medium text-black transition hover:bg-[#ff7a25]"
                >
                  Explore Services
                  <span className="text-lg">→</span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-5 border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:border-white/40"
                >
                  Learn More
                  <span className="text-lg">↓</span>
                </a>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative mx-auto w-full max-w-[520px] ">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#151917] p-7 shadow-2xl min-h-[679px]">

                <div className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-[#ff6500] shadow-[0_0_25px_#ff6500] " />

                <p className="text-[10px] uppercase tracking-[0.32em] text-[#69716c]">
                  ANKH GRC
                </p>

                <p className="mt-5 text-[10px] uppercase tracking-[0.28em] text-[#69716c]">
                  Governance Framework
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {capabilities.slice(0, 4).map((item, index) => (
                    <div
                      key={item}
                      className="group min-h-[115px] rounded-2xl border border-white/10 bg-[#191d1b] p-5 transition hover:border-[#ff6500]/50"
                    >
                      <span className="text-lg text-[#ff6500]">+</span>

                      <p className="mt-8 text-sm text-[#d5d8d5]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#68706b]">
                      Coverage
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#ff6500]">
                      Global
                    </span>
                  </div>

                  <div className="mt-4 h-px w-full bg-white/10">
                    <div className="h-px w-[86%] bg-[#ff6500]" />
                  </div>
                </div>
              </div>

              {/* decorative number */}
              <div className="pointer-events-none absolute -bottom-20 -right-12 text-[220px] font-medium leading-none text-white/[0.025]">
                01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / ABOUT
      ========================================================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#f4f1eb] text-[#111412]"
      >
        <div className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#ff6500]">
                01 / WHY ANKH GRC
              </p>

              <h2 className="mt-7 max-w-[620px] text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Compliance is not just a requirement.
                <br />
                It is a business advantage.
              </h2>
            </div>

            <div className="lg:pt-3">
              <p className="max-w-[780px] text-lg leading-8 text-[#687078]">
                Organizations operate in an environment where regulations,
                technology, data, and business risks continuously evolve.
                Ankh GRC brings these disciplines together into practical
                governance frameworks that help organizations operate with
                confidence.
              </p>

              <div className="mt-12 grid border-t border-[#111412]/15 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["01", "Secure", "Protect critical systems, information, and operations."],
                  ["02", "Compliant", "Meet regulatory expectations with practical controls."],
                  ["03", "Future Ready", "Build governance that evolves with your business."],
                ].map(([num, title, text]) => (
                  <div
                    key={num}
                    className="border-b border-[#111412]/15 px-0 py-8 sm:px-5 lg:first:pl-0"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#ff6500]">
                      {num}
                    </span>

                    <h3 className="mt-6 text-xl font-medium">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#747b80]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#111412] text-[#f4f1eb]"
      >
        <div className="pointer-events-none absolute -right-48 top-1/3 h-[600px] w-[600px] rounded-full bg-[#e65300]/5 blur-[150px]" />

        <div className="relative mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#ff6500]">
                02 / OUR SERVICES
              </p>

              <h2 className="mt-6 max-w-[850px] text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Governance built
                <br />
                for the real world.
              </h2>
            </div>

            <p className="max-w-[420px] text-sm leading-7 text-[#8f9792] lg:pb-2">
              From strategy to implementation, we help organizations
              establish the structures, controls, and evidence required
              to operate securely and compliantly.
            </p>
          </div>

          {/* NORMAL GRID — NO HORIZONTAL SCROLL */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative min-h-[360px] overflow-hidden rounded-[24px] border border-white/10 bg-[#151917] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff6500]/60"
              >
                {/* huge background number */}
                <span className="pointer-events-none absolute -right-3 -top-8 text-[170px] font-medium leading-none text-white/[0.025]">
                  {service.number}
                </span>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.22em] text-[#ff6500]">
                      {service.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-[#a0a6a2] transition group-hover:border-[#ff6500] group-hover:bg-[#ff6500] group-hover:text-black">
                      ↗
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-7 h-px w-12 bg-[#ff6500]" />

                    <h3 className="max-w-[420px] text-2xl font-medium leading-tight tracking-[-0.025em]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[440px] text-base leading-7 text-[#929a95]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#5e6661]">
                      ANKH GRC
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff6500]" />
                  </div>
                </div>

                {/* orange curve */}
                <div className="pointer-events-none absolute -bottom-40 -left-16 h-[300px] w-[650px] rounded-[50%] border border-[#ff6500]/20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FRAMEWORK
      ========================================================= */}
      <section className="bg-[#f4f1eb] text-[#111412]">
        <div className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#ff6500]">
                03 / OUR APPROACH
              </p>

              <h2 className="mt-7 text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                A structured
                <br />
                path to
                <br />
                compliance.
              </h2>
            </div>

            <div className="border-t border-[#111412]/15">
              {[
                [
                  "01",
                  "Assess",
                  "Understand your current governance, risk, security, privacy, and compliance posture.",
                ],
                [
                  "02",
                  "Design",
                  "Build practical frameworks, policies, controls, and operating models aligned to your requirements.",
                ],
                [
                  "03",
                  "Implement",
                  "Translate requirements into operational processes, evidence, accountability, and measurable controls.",
                ],
                [
                  "04",
                  "Assure",
                  "Validate effectiveness through testing, monitoring, assessments, and continuous improvement.",
                ],
              ].map(([num, title, text]) => (
                <div
                  key={num}
                  className="grid gap-5 border-b border-[#111412]/15 py-8 sm:grid-cols-[70px_220px_1fr] sm:items-start"
                >
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#ff6500]">
                    {num}
                  </span>

                  <h3 className="text-xl font-medium">
                    {title}
                  </h3>

                  <p className="max-w-[500px] text-sm leading-7 text-[#737a7d]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ORANGE CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#ff6500] text-black">
        <div className="pointer-events-none absolute -right-32 -top-48 h-[600px] w-[600px] rounded-full border border-black/10" />
        <div className="pointer-events-none absolute -right-20 -top-32 h-[400px] w-[400px] rounded-full border border-black/10" />

        <div className="relative mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em]">
                READY WHEN YOU ARE
              </p>

              <h2 className="mt-7 max-w-[950px] text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Build a stronger
                <br />
                governance foundation.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-6 border border-black/40 bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-[#111412]"
            >
              Start a Conversation
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          SIMPLE FOOTER
      ========================================================= */}
      <footer
        id="contact"
        className="bg-[#111412] text-[#f4f1eb]"
      >
        <div className="mx-auto w-full max-w-[1450px] px-6 py-16 sm:px-10 lg:px-16">

          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row md:items-start">

            <div>
              <div className="text-xl font-semibold tracking-[-0.04em]">
                ANKH <span className="text-[#ff6500]">GRC</span>
              </div>

              <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[#69716c]">
                Secure. Compliant. Future Ready.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-[#7f8782]">
              <a href="#" className="transition hover:text-white">
                Home
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] tracking-[0.05em] text-[#59615c] sm:flex-row">
            <p>© 2026 Ankh GRC. All rights reserved.</p>
            <p>Defend. Detect. Respond. Comply. Dominate.</p>
          </div>

        </div>
      </footer>
    </main>
  );
}