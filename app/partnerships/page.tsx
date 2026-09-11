"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

const technologyPartners = [
  "GRC PLATFORM",
  "COMPLIANCE PLATFORM",
  "SECURITY PLATFORM",
  "RISK PLATFORM",
];

const certificationPartners = [
  "CERTIFICATION BODY",
  "AUDIT PARTNER",
  "CPA FIRM",
];

const industryPartners = [
  "INDUSTRY ASSOCIATION",
  "TECHNOLOGY CONSULTANCY",
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

function DragRail({
  children,
}: {
  children: React.ReactNode;
}) {
  const startX = { current: 0 };
  const startScroll = { current: 0 };
  const dragging = { current: false };

  return (
    <div
      onWheelCapture={horizontalWheel}
      onPointerDown={(e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        dragging.current = true;
        startX.current = e.clientX;
        startScroll.current = e.currentTarget.scrollLeft;
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        e.currentTarget.scrollLeft =
          startScroll.current - (e.clientX - startX.current);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
      className="flex w-full min-w-0 cursor-grab select-none gap-3 overflow-x-scroll overscroll-x-contain p-4 pb-5 active:cursor-grabbing [scrollbar-width:auto] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-[#ff6500]/70 [&::-webkit-scrollbar-track]:bg-black/10"
      style={{ touchAction: "pan-x" }}
    >
      {children}
    </div>
  );
}

export default function PartnershipsPage() {
  const allPartnerTypes = [
    {
      title: "Technology",
      description:
        "Technology platforms that help organizations build and operate their GRC capabilities.",
    },
    {
      title: "Certification",
      description:
        "Certification and audit organizations that support formal assurance and independent validation.",
    },
    {
      title: "Industry",
      description:
        "Industry organizations and consultancies that extend governance expertise to clients and communities.",
    },
    {
      title: "Referral",
      description:
        "Trusted relationships that connect organizations with the right governance, risk and compliance expertise.",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f1eee7] text-[#171b19]">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* HERO — animated split layout */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#111412] text-[#f4f1eb] lg:min-h-[680px]">
        <motion.div
          className="absolute -right-40 -top-20 h-[650px] w-[650px] rounded-full bg-[#ff6500]/10 blur-[130px]"
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease }}
        />

        <motion.div
          className="absolute bottom-0 left-0 h-px bg-[#ff6500]/50"
          initial={{ width: 0 }}
          animate={{ width: "55%" }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6500]">
              Resources / Partnerships
            </p>

            <h1 className="max-w-4xl text-[52px] font-medium leading-[0.95] tracking-[-0.05em] md:text-[74px] lg:text-[84px]">
              Better outcomes,
              <span className="block text-[#ff6500]">built together.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/60 md:text-lg">
              We partner with technology platforms, certification bodies, and
              industry organizations to deliver compliance outcomes end-to-end
              — not just advisory hours.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#partners"
                className="inline-flex min-h-[52px] items-center gap-3 bg-[#ff6500] px-7 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7a1a]"
              >
                Explore Partnerships
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#become-partner"
                className="inline-flex min-h-[52px] items-center border border-white/20 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:text-[#ff6500]"
              >
                Become a Partner
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="relative overflow-hidden border border-white/10 bg-[#171b19] p-7 md:p-9"
          >
            <motion.div
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ff6500]/10 blur-3xl"
              animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.3, 0.65, 0.3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                Ankh GRC
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.28em] text-white/25">
                Partnership Network
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {allPartnerTypes.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25 + index * 0.08,
                      ease,
                    }}
                    className="group relative min-h-[140px] border border-white/10 bg-[#1b201e] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6500]/40"
                  >
                    <span className="text-sm text-[#ff6500]">+</span>
                    <p className="absolute bottom-5 left-5 text-sm text-white/80 transition-transform duration-300 group-hover:translate-x-1">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em]">
                  <span className="text-white/30">Network</span>
                  <span className="text-[#ff6500]">Connected</span>
                </div>
                <motion.div
                  className="mt-3 h-px origin-left bg-[#ff6500]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.82 }}
                  transition={{ duration: 1, delay: 0.65, ease }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS — contained horizontal technology rail */}
      <section id="partners" className="overflow-hidden bg-[#f1eee7] py-16 md:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Technology Partners
              </p>
              <h2 className="mt-5 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                GRC platforms
                <span className="block text-black/25">we work with.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-[17px] leading-8 text-black/60">
                We work directly with leading GRC and compliance automation
                platforms to help clients configure, deploy, and maintain their
                compliance tooling.
              </p>

              <div className="mt-8 w-full min-w-0 max-w-full overflow-hidden border border-black/10 bg-black/10">
                <DragRail>
                  {technologyPartners.map((partner, index) => (
                    <motion.article
                      key={partner}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                        ease,
                      }}
                      className="flex min-h-[190px] w-[250px] min-w-[250px] shrink-0 flex-col justify-between bg-[#f8f5ee] p-6 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="h-1 w-10 bg-[#ff6500]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                        {partner}
                      </span>
                    </motion.article>
                  ))}
                </DragRail>
              </div>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-black/30">
                Scroll inside this panel
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATION — bento */}
      <section className="overflow-hidden bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Certification
              </p>
              <h2 className="mt-5 text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                Certification
                <span className="block text-black/25">and audit partners.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-[17px] leading-8 text-black/60">
                While AnkhGRC provides advisory and readiness support, formal
                certification requires an accredited certification body or a
                licensed CPA firm. We coordinate directly with partner
                organizations to make that handoff seamless.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {certificationPartners.map((partner, index) => (
                  <motion.article
                    key={partner}
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease,
                    }}
                    whileHover={{ y: -7 }}
                    className="group relative min-h-[230px] overflow-hidden border border-black/10 bg-[#f1eee7] p-7"
                  >
                    <div className="absolute left-0 top-0 h-1 w-10 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
                    <span className="mt-5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                      {partner}
                    </span>
                    <p className="mt-16 text-[13px] leading-6 text-black/45">
                      Formal assurance and independent validation.
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY NETWORK — dark asymmetric */}
      <section className="overflow-hidden bg-[#111412] py-16 text-[#f4f1eb] md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-8 md:p-10">
              <div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-[#ff6500]/30" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                Industry Network
              </p>
              <h2 className="mt-7 text-[42px] font-medium leading-[1.0] tracking-[-0.045em] md:text-[58px]">
                Industry &
                <span className="block text-white/25">referral partners.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-[17px] leading-8 text-white/55">
                Industry associations, law firms, and technology consultancies
                we partner with to bring clients a complete governance, risk,
                and compliance solution.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {industryPartners.map((partner, index) => (
                  <motion.article
                    key={partner}
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease,
                    }}
                    whileHover={{ y: -6 }}
                    className="group min-h-[230px] border border-white/10 bg-white/[0.035] p-7"
                  >
                    <div className="h-1 w-10 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
                    <h3 className="mt-12 text-xl font-medium text-white/90">
                      {partner}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-white/40">
                      Extend governance capability through trusted industry
                      relationships.
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BECOME PARTNER — statement + contact */}
      <section id="become-partner" className="overflow-hidden bg-[#f1eee7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="grid gap-8 lg:grid-cols-[1fr_0.55fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Become a Partner
              </p>
              <h2 className="mt-5 max-w-4xl text-[44px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[62px]">
                Interested in
                <span className="block text-black/25">
                  partnering with AnkhGRC?
                </span>
              </h2>
              <p className="mt-7 max-w-3xl text-[17px] leading-8 text-black/60">
                Whether you're a GRC technology platform, a certification body,
                or a firm serving clients who need compliance support, we're
                always open to partnerships that create better outcomes for the
                businesses we serve.
              </p>
            </div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex min-h-[260px] flex-col justify-between border border-black/10 bg-white/50 p-8"
            >
              <div className="h-1 w-12 bg-[#ff6500]" />
              <p className="max-w-sm text-[22px] leading-8 text-black/70">
                Let's create stronger outcomes for the businesses we serve.
              </p>
              <a
                href="mailto:help@ankhgrc.com"
                className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#171b19] transition hover:text-[#e65300]"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
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
          className="relative mx-auto max-w-7xl px-6 py-16 text-center lg:px-10 lg:py-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Next Step
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-[46px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[66px]">
            Build stronger outcomes,
            <span className="block text-black/30">together.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-black/55">
            Start a conversation with AnkhGRC and explore how a partnership
            can create better outcomes for your clients and organisation.
          </p>

          <a
            href="mailto:help@ankhgrc.com"
            className="mt-8 inline-flex min-h-[52px] items-center gap-3 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111412]"
          >
            Contact AnkhGRC
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
