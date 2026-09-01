"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const sections = [
  {
    number: "01",
    title: "General Information Only",
    content:
      "The content on this website — including articles, whitepapers, checklists, and any other resource — is provided for general informational purposes only. It does not constitute professional advice of any kind and should not be relied upon as a substitute for consultation with a qualified professional familiar with your organization's specific facts and circumstances.",
  },
  {
    number: "02",
    title: "Not Legal, Financial, or Regulatory Advice",
    content:
      "AnkhGRC provides governance, risk, and compliance advisory services, but nothing on this website constitutes legal, financial, tax, or regulatory advice. Compliance obligations under ISO 27001, SOC 2, PCI DSS, DPDPA, GDPR, or any other framework or law depend on your specific circumstances. Always consult a licensed attorney, auditor, or relevant regulatory authority before making compliance, legal, or financial decisions.",
  },
  {
    number: "03",
    title: "No Guarantee of Outcomes",
    content:
      "Engaging AnkhGRC for advisory services does not guarantee certification, audit success, regulatory approval, or any other specific outcome. Certification and audit decisions are made independently by accredited certification bodies, licensed CPA firms, or regulatory authorities — not by AnkhGRC.",
  },
  {
    number: "04",
    title: "Accuracy of Information",
    content:
      "We make reasonable efforts to keep information on this website accurate and current, but laws, regulations, and frameworks change frequently. We do not warrant that any content is complete, accurate, or up to date at the time you access it. Verify current regulatory requirements independently before relying on them.",
  },
  {
    number: "05",
    title: "Third-Party Links & References",
    content:
      "This website may reference or link to third-party tools, platforms, standards bodies, or resources for convenience. Such references do not constitute an endorsement, and AnkhGRC is not responsible for the content, accuracy, or practices of any third-party site or service.",
  },
  {
    number: "06",
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, AnkhGRC disclaims all liability for any loss or damage arising from your use of, or reliance on, this website or its content, including any actions taken or not taken based on information published here.",
  },
  {
    number: "07",
    title: "Contact Us",
    content:
      "Questions about this disclaimer? Reach us at help@ankhgrc.com.",
  },
];

export default function DisclaimerPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const activeSection =
    selected !== null ? sections[selected] : null;

  return (
    <main className="min-h-screen bg-[#111412] text-[#f4f1eb]">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-[#ff6500]/10" />

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6500]">
            LEGAL • CLARITY • RESPONSIBILITY
          </p>

          <div className="mt-7 grid items-end gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <h1 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Disclaimer
                <br />
                <span className="text-[#ff6500]">Notice.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                Please read this page carefully before using this website
                or relying on any content published by AnkhGRC.
              </p>
            </div>

            {/* Decorative graphic */}
            <div className="relative hidden h-56 w-56 lg:block">
              <div className="absolute inset-0 rounded-full border border-[#ff6500]/20" />
              <div className="absolute inset-8 rounded-full border border-[#ff6500]/15" />
              <div className="absolute inset-16 rounded-full border border-[#ff6500]/20" />

              <div className="absolute left-[42%] top-[42%] h-5 w-5 rounded-full bg-[#ff6500]" />

              <div className="absolute right-12 top-16 h-2.5 w-2.5 rounded-full bg-[#ff6500]/60" />

              <div className="absolute bottom-14 left-14 h-3 w-3 rounded-full bg-[#ff6500]/40" />
            </div>
          </div>

          {/* Meta */}
          <div className="mt-10 border-t border-white/10 pt-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                Last Updated
              </p>

              <p className="mt-2 text-sm text-white/55">
                [Date]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-[#f4f1eb] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
              Disclaimer
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Clear terms.
              <br />
              Responsible use.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/50">
              Review the important notices and limitations that apply
              when using the AnkhGRC website and its published content.
            </p>
          </div>

          {/* 7 CARDS */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <button
                key={section.number}
                onClick={() => setSelected(index)}
                className="group min-h-[225px] border border-black/10 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#ff6500]">
                    {section.number}
                  </span>

                  <span className="text-2xl text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff6500]">
                    ↗
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em]">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
                    View section
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP */}
      {activeSection && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto bg-[#f4f1eb] text-[#111412]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Orange line */}
            <div className="h-1 w-full bg-[#ff6500]" />

            <div className="p-8 sm:p-12 lg:p-14">

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-black/10 text-xl transition hover:border-[#ff6500] hover:text-[#ff6500]"
                aria-label="Close"
              >
                ×
              </button>

              {/* Number */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-[#ff6500]">
                  {activeSection.number}
                </span>

                <span className="h-px w-12 bg-black/10" />

                <span className="font-mono text-xs tracking-[0.15em] text-black/30">
                  07
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-6 max-w-3xl pr-10 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                {activeSection.title}
              </h2>

              {/* Content */}
              <div className="mt-10 max-w-3xl">
                <p className="text-base leading-8 text-black/55 sm:text-lg">
                  {activeSection.content}
                </p>
              </div>

              {/* Contact box */}
              {activeSection.number === "07" && (
                <div className="mt-8 border-l-2 border-[#ff6500] bg-white p-5">
                  <p className="text-sm text-black/50">
                    Disclaimer enquiries:
                  </p>

                  <a
                    href="mailto:help@ankhgrc.com"
                    className="mt-2 inline-block font-semibold text-[#ff6500] hover:underline"
                  >
                    help@ankhgrc.com
                  </a>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-6">
                <button
                  onClick={() =>
                    setSelected(
                      selected === 0
                        ? sections.length - 1
                        : (selected as number) - 1
                    )
                  }
                  className="text-sm font-medium text-black/40 transition hover:text-[#ff6500]"
                >
                  ← Previous
                </button>

                <button
                  onClick={() =>
                    setSelected(
                      selected === sections.length - 1
                        ? 0
                        : (selected as number) + 1
                    )
                  }
                  className="text-sm font-medium text-black/40 transition hover:text-[#ff6500]"
                >
                  Next →
                </button>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-7 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#ff6500] hover:text-black"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}