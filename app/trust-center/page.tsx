"use client";

import { useState } from "react";
import Navigation from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

const sections = [
  {
    number: "01",
    label: "COMPLIANCE POSTURE",
    title: "Where we stand today",
    intro:
      "We believe in transparency about our own compliance journey — including what's in progress, not just what's finished.",
    type: "compliance",
  },
  {
    number: "02",
    label: "DATA PROTECTION",
    title: "How we protect client data",
    intro:
      "Our approach to protecting client information throughout an engagement.",
    type: "protection",
  },
  {
    number: "03",
    label: "SUBPROCESSORS & TOOLS",
    title: "Third parties we rely on",
    intro:
      "We use a small set of vetted providers to deliver our services. We do not sell or share client data for any purpose outside the engagement.",
    type: "thirdparty",
  },
  {
    number: "04",
    label: "INCIDENT RESPONSE",
    title: "If something goes wrong",
    intro:
      "Our approach to identifying, containing and resolving security incidents.",
    type: "incident",
  },
  {
    number: "05",
    label: "DOCUMENTATION",
    title: "Request our security documentation",
    intro:
      "Under NDA, we can share additional documentation such as our security policy summary, penetration test summary, or compliance certificates once available.",
    type: "documents",
  },
  {
    number: "06",
    label: "SECURITY CONTACT",
    title: "Questions about our security or compliance posture?",
    intro:
      "We're happy to walk through our practices directly — reach out any time.",
    type: "contact",
  },
];

export default function TrustCenterPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const toggleSection = (type: string) => {
    setSelected(selected === type ? null : type);
  };

  return (
    <main className="min-h-screen bg-[#111412] text-[#f4f1eb] pt-10">
        <Navigation/>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Decorative circles */}
       {/* Premium Animated GRC Visual */}
<div className="absolute right-[16%] top-1/2 hidden -translate-y-1/2 lg:block ">
<div className="relative h-[400px] w-[400px]">
        {/* Outer animated ring */}
    <div
      className="absolute inset-0 rounded-full border border-orange-500/20"
      style={{ animation: "slowSpin 18s linear infinite" }}
    >
      <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ff6500] shadow-[0_0_18px_#ff6500]" />
    </div>

    {/* Inner animated ring */}
    <div
      className="absolute inset-[38px] rounded-full border border-white/10"
      style={{ animation: "reverseSpin 12s linear infinite" }}
    >
      <span className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#ff6500]" />
    </div>

    {/* Main visual */}
    <div className="absolute inset-[75px] rounded-[32px] border border-white/10 bg-white/[0.025] backdrop-blur-sm">

      {/* Grid */}
      <div
        className="absolute inset-0 rounded-[32px] opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Center shield */}
      <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div
          className="absolute inset-0 rounded-full border border-orange-500/30"
          style={{ animation: "pulseRing 2.5s ease-in-out infinite" }}
        />

        <div className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-orange-500/40 bg-[#171b18] shadow-[0_0_45px_rgba(255,101,0,.18)]">
          <svg
            viewBox="0 0 64 64"
            className="h-12 w-12 text-[#ff6500]"
            fill="none"
          >
            <path
              d="M32 6L51 13V29C51 42 43 52 32 58C21 52 13 42 13 29V13L32 6Z"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M22 32L29 39L43 24"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Security */}
      <div
        className="absolute left-[-34px] top-[42px] rounded-xl border border-white/10 bg-[#181c19]/90 px-4 py-3 backdrop-blur-md"
        style={{ animation: "floatOne 4s ease-in-out infinite" }}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Security
        </p>
        <p className="text-sm font-medium text-white">Protected</p>
      </div>

      {/* Compliance */}
      <div
        className="absolute right-[-30px] top-[125px] rounded-xl border border-white/10 bg-[#181c19]/90 px-4 py-3 backdrop-blur-md"
        style={{ animation: "floatTwo 5s ease-in-out infinite" }}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Compliance
        </p>
        <p className="text-sm font-medium text-white">Monitored</p>
      </div>

      {/* Privacy */}
      <div
        className="absolute bottom-[48px] left-[-28px] rounded-xl border border-white/10 bg-[#181c19]/90 px-4 py-3 backdrop-blur-md"
        style={{ animation: "floatThree 4.5s ease-in-out infinite" }}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Privacy
        </p>
        <p className="text-sm font-medium text-white">Controlled</p>
      </div>

      {/* GRC indicator */}
      <div className="absolute bottom-[72px] right-[-12px] flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6500]" />
        <span className="text-[9px] uppercase tracking-[0.18em] text-white/50">
          GRC SYSTEM
        </span>
      </div>

    </div>
  </div>
</div>
<div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-28 lg:px-14">          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6500]">
              TRUST CENTER · SECURITY · TRANSPARENCY
            </p>

            <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Security, privacy
              <br />
              <span className="text-[#ff6500]">& compliance.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
              As a GRC advisory firm, we hold ourselves to the same standard
              we help our clients meet. This page explains how we protect your
              data, how we handle compliance internally, and how to request our
              security documentation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#trust-sections"
                className="border border-[#ff6500] bg-[#ff6500] px-6 py-3 text-sm font-semibold text-[#111412] transition hover:bg-transparent hover:text-[#ff6500]"
              >
                Explore our practices
              </a>

              <a
                href="mailto:security@ankhgrc.com"
                className="border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ff6500] hover:text-[#ff6500]"
              >
                Report a security issue
              </a>
            </div>
          </div>

          {/* Hero metadata */}
          <div className="mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-white/10 pt-7 md:grid-cols-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Focus
              </p>
              <p className="mt-2 text-sm text-white/75">
                Security & Privacy
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Approach
              </p>
              <p className="mt-2 text-sm text-white/75">
                Transparency First
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Documentation
              </p>
              <p className="mt-2 text-sm text-white/75">
                Available on Request
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Updated
              </p>
              <p className="mt-2 text-sm text-white/75">
                1 September 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION INTRO ================= */}
      <section
        id="trust-sections"
        className="border-y border-black/10 bg-[#f1eee7] text-[#111412]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
              TRUST CENTER
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
              Know how we protect
              <br />
              <span className="text-black/40">what matters.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
              Select a section below to understand our compliance posture, data
              protection practices, third-party tools, incident response and
              security documentation.
            </p>
          </div>

          {/* ================= SECTION LIST ================= */}
          <div className="mt-14 space-y-3">
            {sections.map((section) => {
              const isOpen = selected === section.type;

              return (
                <div key={section.type}>
                  {/* Main clickable row */}
                  <button
                    type="button"
                    onClick={() => toggleSection(section.type)}
                    className={`group flex w-full items-center gap-5 border px-5 py-6 text-left transition-all duration-300 md:px-7 ${
                      isOpen
                        ? "border-[#ff6500] bg-[#111412] text-[#f4f1eb]"
                        : "border-black/10 bg-[#e9e5dc] hover:border-[#ff6500] hover:bg-[#111412] hover:text-[#f4f1eb]"
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`font-mono text-xs tracking-[0.15em] ${
                        isOpen
                          ? "text-[#ff6500]"
                          : "text-black/35 group-hover:text-[#ff6500]"
                      }`}
                    >
                      {section.number}
                    </span>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] ${
                          isOpen
                            ? "text-[#ff6500]"
                            : "text-black/35 group-hover:text-[#ff6500]"
                        }`}
                      >
                        {section.label}
                      </p>

                      <h3 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                        {section.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[#ff6500] text-[#ff6500]"
                          : "border-black/15 text-black/40 group-hover:border-[#ff6500] group-hover:text-[#ff6500]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* ================= EXPANDED CONTENT ================= */}
                  {isOpen && (
                    <div className="border-x border-b border-black/10 bg-[#111412] px-5 py-8 text-[#f4f1eb] md:px-8 md:py-10">
                      <div className="ml-0 max-w-5xl md:ml-[calc(2.25rem+1.25rem)]">
                        <p className="max-w-3xl text-base leading-7 text-white/55">
                          {section.intro}
                        </p>

                        {/* CONTENT */}
                        <SectionContent type={section.type} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#111412] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="border border-white/10 px-6 py-12 md:px-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
              SECURITY & COMPLIANCE
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Need more information?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/50">
              We're happy to walk through our security and compliance practices
              directly.
            </p>

            <a
              href="mailto:help@ankhgrc.com"
              className="mt-8 inline-flex border border-[#ff6500] bg-[#ff6500] px-7 py-3 text-sm font-semibold text-[#111412] transition hover:bg-transparent hover:text-[#ff6500]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}


/* =========================================================
   SECTION CONTENT
========================================================= */

function SectionContent({ type }: { type: string }) {
  /* ---------- COMPLIANCE ---------- */
  if (type === "compliance") {
    const items = [
      {
        code: "ISO/IEC 27001",
        title: "Information Security Management",
        status: "[Confirm status — e.g. In Progress / Certified / Planned]",
      },
      {
        code: "SOC 2",
        title: "Trust Services Criteria",
        status: "[Confirm status — e.g. Type I / Type II / Planned]",
      },
      {
        code: "DPDPA",
        title: "India Data Protection Act",
        status: "[Confirm status — e.g. Aligned / In Progress]",
      },
      {
        code: "GDPR",
        title: "EU Data Protection",
        status:
          "[Confirm status — applicable if handling EU client data]",
      },
    ];

    return (
      <div className="mt-8">
        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.code} className="bg-[#171a18] p-6">
              <span className="inline-block bg-[#ff6500] px-2 py-1 font-mono text-[10px] font-bold text-[#111412]">
                {item.code}
              </span>

              <h4 className="mt-4 text-lg font-medium">{item.title}</h4>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Status:{" "}
                <span className="text-white/70">{item.status}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-white/30">
          Certification statuses should be reviewed and confirmed before
          publication.
        </p>
      </div>
    );
  }

  /* ---------- DATA PROTECTION ---------- */
  if (type === "protection") {
    const items = [
      [
        "Encryption",
        "Client data and documentation are encrypted in transit (TLS) and at rest wherever stored on our systems or approved third-party tools.",
      ],
      [
        "Access Control",
        "Access to client data is restricted to engagement team members on a least-privilege basis, with access reviewed periodically.",
      ],
      [
        "Confidentiality",
        "All engagements are covered by mutual NDAs. Client documentation, findings, and evidence are treated as strictly confidential.",
      ],
      [
        "Data Retention",
        "Client data is retained only as long as needed for the engagement and any applicable legal or contractual obligations, then securely deleted.",
      ],
      [
        "Employee Access & Training",
        "Team members undergo confidentiality onboarding and periodic security awareness training before handling client engagements.",
      ],
      [
        "Secure Collaboration",
        "Client evidence and documents are exchanged only through approved secure channels — never over unencrypted email attachments.",
      ],
    ];

    return (
      <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {items.map(([title, description]) => (
          <div key={title} className="border-t border-white/10 pt-5">
            <h4 className="flex items-center gap-3 text-base font-medium">
              <span className="h-2 w-2 bg-[#ff6500]" />
              {title}
            </h4>

            <p className="mt-3 text-sm leading-6 text-white/50">
              {description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  /* ---------- THIRD PARTIES ---------- */
  if (type === "thirdparty") {
    const rows = [
      [
        "[Cloud Hosting Provider]",
        "Infrastructure hosting",
        "[Specify data type]",
      ],
      [
        "[GRC Platform Tool]",
        "Evidence & control tracking",
        "[Specify data type]",
      ],
      [
        "[Email / Communication Tool]",
        "Client communication",
        "[Specify data type]",
      ],
      [
        "[Document Storage Tool]",
        "Document exchange & storage",
        "[Specify data type]",
      ],
    ];

    return (
      <div className="mt-8 overflow-x-auto border border-white/10">
        <div className="min-w-[650px]">
          <div className="grid grid-cols-[1.2fr_1fr_1.4fr] border-b border-white/10 bg-[#171a18] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
            <span>Provider</span>
            <span>Purpose</span>
            <span>Data Involved</span>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-[1.2fr_1fr_1.4fr] border-b border-white/10 px-5 py-5 text-sm last:border-0"
            >
              <span className="text-white/75">{row[0]}</span>
              <span className="text-white/50">{row[1]}</span>
              <span className="text-white/50">{row[2]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---------- INCIDENT RESPONSE ---------- */
  if (type === "incident") {
    const steps = [
      [
        "01",
        "Detect & Contain",
        "Any suspected incident is triaged immediately and contained to limit scope.",
      ],
      [
        "02",
        "Assess & Notify",
        "Affected clients are notified promptly with what's known, what's affected, and next steps.",
      ],
      [
        "03",
        "Remediate",
        "Root cause is addressed and corrective controls are implemented.",
      ],
      [
        "04",
        "Review",
        "A post-incident review documents lessons learned and process improvements.",
      ],
    ];

    return (
      <div className="mt-8 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
        {steps.map(([number, title, description]) => (
          <div key={number} className="bg-[#171a18] p-7">
            <span className="font-mono text-xs font-semibold text-[#ff6500]">
              {number}
            </span>

            <h4 className="mt-4 text-lg font-medium">{title}</h4>

            <p className="mt-3 text-sm leading-6 text-white/50">
              {description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  /* ---------- DOCUMENTATION ---------- */
  if (type === "documents") {
    const documents = [
      ["Security Overview", "Summary of our security practices"],
      [
        "Compliance Certificates",
        "[Available once certifications are issued]",
      ],
      ["Pen Test Summary", "[Available upon completion]"],
      ["Data Processing Agreement", "Standard DPA template"],
    ];

    return (
      <div className="mt-8">
        <div className="grid gap-3 md:grid-cols-2">
          {documents.map(([title, description]) => (
            <div
              key={title}
              className="border border-white/10 bg-[#171a18] p-6 transition hover:border-[#ff6500]"
            >
              <h4 className="text-base font-medium">{title}</h4>

              <p className="mt-2 text-sm leading-6 text-white/45">
                {description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="mailto:help@ankhgrc.com?subject=Trust%20Center%20Document%20Request"
          className="mt-7 inline-flex bg-[#ff6500] px-6 py-3 text-sm font-semibold text-[#111412] transition hover:bg-white"
        >
          Request Documents
        </a>
      </div>
    );
  }

  /* ---------- CONTACT ---------- */
  if (type === "contact") {
    return (
      <div className="mt-8 border border-white/10 bg-[#171a18] p-7">
        <p className="max-w-2xl text-sm leading-7 text-white/50">
          We're happy to walk through our practices directly — reach out any
          time.
        </p>

        <a
          href="mailto:help@ankhgrc.com"
          className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#ff6500] transition hover:text-white"
        >
          Contact Us
          <span>→</span>
        </a>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Security Issues
          </p>

          <a
            href="mailto:security@ankhgrc.com"
            className="mt-2 inline-block text-sm text-white/75 hover:text-[#ff6500]"
          >
            security@ankhgrc.com
          </a>
        </div>
     
      </div>
    );
  }

  return null;
  
}