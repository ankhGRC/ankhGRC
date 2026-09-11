"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, LockKeyhole, FileText, Siren, Mail } from "lucide-react";
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

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: false, amount: 0.16 };

function horizontalWheel(e: React.WheelEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

  if (el.scrollWidth > el.clientWidth && delta !== 0) {
    e.preventDefault();
    e.stopPropagation();
    el.scrollLeft += delta;
  }
}

export default function TrustCenterPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const toggleSection = (type: string) => {
    setSelected(selected === type ? null : type);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#111412] text-[#f4f1eb]">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* HERO — premium animated trust/security visual */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#111412]">
        <motion.div
          className="absolute -right-40 -top-32 h-[620px] w-[620px] rounded-full bg-[#ff6500]/10 blur-[140px]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease }}
        />

        <motion.div
          className="absolute bottom-0 left-0 h-px bg-[#ff6500]/60"
          initial={{ width: 0 }}
          animate={{ width: "62%" }}
          transition={{ duration: 1.3, delay: 0.35, ease }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1fr_0.82fr] lg:px-10 lg:pb-24 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6500]">
              Trust Center · Security · Transparency
            </p>

            <h1 className="mt-6 max-w-4xl text-[52px] font-medium leading-[0.94] tracking-[-0.05em] md:text-[72px] lg:text-[82px]">
              Security, privacy
              <span className="block text-[#ff6500]">& compliance.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/55 md:text-lg">
              As a GRC advisory firm, we hold ourselves to the same standard
              we help our clients meet. This page explains how we protect your
              data, how we handle compliance internally, and how to request our
              security documentation.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#trust-sections"
                className="inline-flex min-h-[52px] items-center gap-3 bg-[#ff6500] px-7 text-sm font-semibold text-[#111412] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7a1a]"
              >
                Explore our practices
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:security@ankhgrc.com"
                className="inline-flex min-h-[52px] items-center gap-3 border border-white/15 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:text-[#ff6500]"
              >
                Report a security issue
                <Siren className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-6 md:grid-cols-4">
              {[
                ["Focus", "Security & Privacy"],
                ["Approach", "Transparency First"],
                ["Documentation", "Available on Request"],
                ["Updated", "1 September 2026"],
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.08, duration: 0.5, ease }}
                >
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="relative hidden min-h-[500px] items-center justify-center lg:flex"
          >
            <motion.div
              className="absolute h-[430px] w-[430px] rounded-full border border-[#ff6500]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ff6500] shadow-[0_0_20px_#ff6500]" />
            </motion.div>

            <motion.div
              className="absolute h-[335px] w-[335px] rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#ff6500]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[250px] w-[250px] overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.025] shadow-[0_0_70px_rgba(255,101,0,.08)] backdrop-blur-sm"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#ff6500]/40 bg-[#171b18]"
                animate={{ boxShadow: ["0 0 25px rgba(255,101,0,.08)", "0 0 60px rgba(255,101,0,.2)", "0 0 25px rgba(255,101,0,.08)"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck className="h-14 w-14 text-[#ff6500]" strokeWidth={1.5} />
              </motion.div>

              {[
                ["Security", "Protected", "left-[-70px] top-[30px]"],
                ["Compliance", "Monitored", "right-[-72px] top-[105px]"],
                ["Privacy", "Controlled", "left-[-62px] bottom-[28px]"],
              ].map(([label, value, position], index) => (
                <motion.div
                  key={label}
                  className={`absolute ${position} rounded-xl border border-white/10 bg-[#181c19]/95 px-4 py-3 backdrop-blur-md`}
                  animate={{ y: [0, index % 2 ? 7 : -7, 0] }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/80">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO — editorial */}
      <section
        id="trust-sections"
        className="overflow-hidden border-y border-black/10 bg-[#f1eee7] text-[#111412]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="grid gap-9 lg:grid-cols-[0.62fr_1.38fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Trust Center
              </p>
              <h2 className="mt-5 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                Know how we protect
                <span className="block text-black/30">what matters.</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-3xl text-[17px] leading-8 text-black/55">
                Select a topic to understand our compliance posture, data
                protection practices, third-party tools, incident response and
                security documentation.
              </p>
            </div>
          </motion.div>

          {/* Interactive accordion — each row is animated */}
          <div className="mt-10 space-y-3">
            {sections.map((section, index) => {
              const isOpen = selected === section.type;

              return (
                <motion.div
                  key={section.type}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: index * 0.04, ease }}
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(section.type)}
                    className={`group flex w-full items-center gap-5 border px-5 py-6 text-left transition-all duration-300 md:px-7 ${
                      isOpen
                        ? "border-[#ff6500] bg-[#111412] text-[#f4f1eb]"
                        : "border-black/10 bg-[#e9e5dc] hover:border-[#ff6500] hover:bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center border ${
                        isOpen
                          ? "border-[#ff6500]/50 text-[#ff6500]"
                          : "border-black/10 text-black/40"
                      }`}
                    >
                      {index === 0 && <ShieldCheck className="h-5 w-5" />}
                      {index === 1 && <LockKeyhole className="h-5 w-5" />}
                      {index === 2 && <FileText className="h-5 w-5" />}
                      {index === 3 && <Siren className="h-5 w-5" />}
                      {index === 4 && <FileText className="h-5 w-5" />}
                      {index === 5 && <Mail className="h-5 w-5" />}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] ${
                          isOpen ? "text-[#ff6500]" : "text-black/35"
                        }`}
                      >
                        {section.label}
                      </p>
                      <h3 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                        {section.title}
                      </h3>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center border text-xl ${
                        isOpen
                          ? "border-[#ff6500] text-[#ff6500]"
                          : "border-black/15 text-black/40"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden bg-[#111412] text-[#f4f1eb]"
                      >
                        <div className="border-x border-b border-black/10 px-5 py-8 md:px-8 md:py-10">
                          <p className="max-w-3xl text-base leading-7 text-white/55">
                            {section.intro}
                          </p>
                          <SectionContent type={section.type} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden bg-[#ff6500] text-[#111412]">
        <motion.div
          className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease }}
          className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Security & Compliance
          </p>
          <h2 className="mt-5 max-w-3xl text-[46px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[66px]">
            Need more
            <span className="block text-black/30">information?</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-black/55">
            We're happy to walk through our security and compliance practices
            directly.
          </p>
          <a
            href="mailto:help@ankhgrc.com"
            className="mt-8 inline-flex min-h-[52px] items-center gap-3 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111412]"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

function SectionContent({ type }: { type: string }) {
  if (type === "compliance") {
    const items = [
      ["ISO/IEC 27001", "Information Security Management", "[Confirm status — e.g. In Progress / Certified / Planned]"],
      ["SOC 2", "Trust Services Criteria", "[Confirm status — e.g. Type I / Type II / Planned]"],
      ["DPDPA", "India Data Protection Act", "[Confirm status — e.g. Aligned / In Progress]"],
      ["GDPR", "EU Data Protection", "[Confirm status — applicable if handling EU client data]"],
    ];

    return (
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {items.map(([code, title, status], index) => (
          <motion.article
            key={code}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.07, ease }}
            className="border border-white/10 bg-[#171a18] p-6 transition hover:-translate-y-1 hover:border-[#ff6500]/50"
          >
            <span className="inline-block bg-[#ff6500] px-2 py-1 font-mono text-[10px] font-bold text-[#111412]">
              {code}
            </span>
            <h4 className="mt-4 text-lg font-medium">{title}</h4>
            <p className="mt-3 text-sm leading-6 text-white/45">
              Status: <span className="text-white/70">{status}</span>
            </p>
          </motion.article>
        ))}
        <p className="md:col-span-2 text-xs leading-5 text-white/30">
          Certification statuses should be reviewed and confirmed before publication.
        </p>
      </div>
    );
  }

  if (type === "protection") {
    const items = [
      ["Encryption", "Client data and documentation are encrypted in transit (TLS) and at rest wherever stored on our systems or approved third-party tools."],
      ["Access Control", "Access to client data is restricted to engagement team members on a least-privilege basis, with access reviewed periodically."],
      ["Confidentiality", "All engagements are covered by mutual NDAs. Client documentation, findings, and evidence are treated as strictly confidential."],
      ["Data Retention", "Client data is retained only as long as needed for the engagement and any applicable legal or contractual obligations, then securely deleted."],
      ["Employee Access & Training", "Team members undergo confidentiality onboarding and periodic security awareness training before handling client engagements."],
      ["Secure Collaboration", "Client evidence and documents are exchanged only through approved secure channels — never over unencrypted email attachments."],
    ];

    return (
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {items.map(([title, description], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05, ease }}
            className="border border-white/10 bg-[#171a18] p-6"
          >
            <div className="h-1 w-10 bg-[#ff6500]" />
            <h4 className="mt-7 text-base font-medium">{title}</h4>
            <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>
          </motion.article>
        ))}
      </div>
    );
  }

  if (type === "thirdparty") {
    const rows = [
      ["[Cloud Hosting Provider]", "Infrastructure hosting", "[Specify data type]"],
      ["[GRC Platform Tool]", "Evidence & control tracking", "[Specify data type]"],
      ["[Email / Communication Tool]", "Client communication", "[Specify data type]"],
      ["[Document Storage Tool]", "Document exchange & storage", "[Specify data type]"],
    ];

    return (
      <div className="mt-8 w-full min-w-0 max-w-full overflow-hidden border border-white/10">
        <div
          onWheelCapture={horizontalWheel}
          className="flex w-full min-w-0 gap-3 overflow-x-scroll p-4 pb-5 [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-[#ff6500]/70 [&::-webkit-scrollbar-track]:bg-white/10"
          style={{ touchAction: "pan-x" }}
        >
          <div className="min-w-[720px] w-[720px] shrink-0 border border-white/10">
            <div className="grid grid-cols-[1.2fr_1fr_1.4fr] border-b border-white/10 bg-[#171a18] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
              <span>Provider</span>
              <span>Purpose</span>
              <span>Data Involved</span>
            </div>
            {rows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07, ease }}
                className="grid grid-cols-[1.2fr_1fr_1.4fr] border-b border-white/10 px-5 py-5 text-sm last:border-0"
              >
                <span className="text-white/75">{row[0]}</span>
                <span className="text-white/50">{row[1]}</span>
                <span className="text-white/50">{row[2]}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="px-4 pb-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
          Scroll inside this panel
        </p>
      </div>
    );
  }

  if (type === "incident") {
    const steps = [
      ["Detect & Contain", "Any suspected incident is triaged immediately and contained to limit scope."],
      ["Assess & Notify", "Affected clients are notified promptly with what's known, what's affected, and next steps."],
      ["Remediate", "Root cause is addressed and corrective controls are implemented."],
      ["Review", "A post-incident review documents lessons learned and process improvements."],
    ];

    return (
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {steps.map(([title, description], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            whileHover={{ y: -6 }}
            className="relative border border-white/10 bg-[#171a18] p-6"
          >
            <div className="h-8 w-px bg-[#ff6500]" />
            <h4 className="mt-7 text-lg font-medium">{title}</h4>
            <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>
          </motion.article>
        ))}
      </div>
    );
  }

  if (type === "documents") {
    const documents = [
      ["Security Overview", "Summary of our security practices"],
      ["Compliance Certificates", "[Available once certifications are issued]"],
      ["Pen Test Summary", "[Available upon completion]"],
      ["Data Processing Agreement", "Standard DPA template"],
    ];

    return (
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {documents.map(([title, description], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.07, ease }}
            whileHover={{ y: -5 }}
            className="border border-white/10 bg-[#171a18] p-6"
          >
            <FileText className="h-5 w-5 text-[#ff6500]" />
            <h4 className="mt-6 text-base font-medium">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-white/45">{description}</p>
          </motion.article>
        ))}

        <a
          href="mailto:help@ankhgrc.com?subject=Trust%20Center%20Document%20Request"
          className="sm:col-span-2 mt-3 inline-flex w-fit items-center gap-3 bg-[#ff6500] px-6 py-3 text-sm font-semibold text-[#111412] transition hover:bg-white"
        >
          Request Documents
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  if (type === "contact") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8 grid gap-3 md:grid-cols-2"
      >
        <div className="border border-white/10 bg-[#171a18] p-7">
          <Mail className="h-5 w-5 text-[#ff6500]" />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50">
            We're happy to walk through our practices directly — reach out any time.
          </p>
          <a
            href="mailto:help@ankhgrc.com"
            className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#ff6500] transition hover:text-white"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="border border-white/10 bg-[#171a18] p-7">
          <Siren className="h-5 w-5 text-[#ff6500]" />
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
            Security Issues
          </p>
          <a
            href="mailto:security@ankhgrc.com"
            className="mt-3 inline-block text-base text-white/75 hover:text-[#ff6500]"
          >
            security@ankhgrc.com
          </a>
        </div>
      </motion.div>
    );
  }

  return null;
}
