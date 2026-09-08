"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

function HorizontalGrcStory() {
  const storyRef = useRef<HTMLElement | null>(null);
  const wheelLockRef = useRef(false);
  const pointerStartRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);

  // Always start the landing story from the first slide when Home mounts.
  useEffect(() => {
    setActive(0);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  // One unique background image per slide.
  // The cards are text-only; the active slide controls the full background.
  const slides = [
    {
      type: "intro",
      image: "/ankhgrc1.png",
      label: "GOVERNANCE • RISK • COMPLIANCE",
      title: "Make complexity your competitive advantage.",
      description:
        "Ankh GRC helps organizations navigate the intersection of regulation, technology, cybersecurity, privacy, data and AI — turning complex requirements into practical governance and confident business decisions.",
      details: [],
    },
    {
      image: "/governance.png",
   
      title: "Governance",
      description:
        "Build accountable decision-making, strong policies and transparent governance.",
      details: ["STRATEGY", "POLICIES", "ACCOUNTABILITY", "TRANSPARENCY"],
    },
    {
      image: "/img1ext.png",
      
      title: "A stronger foundation for every decision.",
      description:
        "Create clear ownership, effective controls and decision frameworks that connect leadership priorities with day-to-day execution.",
      details: ["OWNERSHIP", "CONTROLS", "DECISIONS", "OVERSIGHT"],
    },
    {
      image: "/risk.png",
    
      title: "Risk",
      description:
        "Anticipate uncertainty, assess what matters and stay ahead of emerging business risks.",
      details: ["IDENTIFY", "ANALYZE", "MITIGATE", "MONITOR"],
    },
    {
      image: "/img2ext.png",
     
      title: "See uncertainty before it becomes disruption.",
      description:
        "Turn risk signals into practical priorities with a connected view of exposure, impact, controls and business resilience.",
      details: ["EXPOSURE", "IMPACT", "RESILIENCE", "ACTION"],
    },
    {
      image: "/compliance.png",
  
      title: "Compliance",
      description:
        "Translate regulatory obligations into practical requirements, controls, ownership and evidence.",
      details: ["REGULATIONS", "STANDARDS", "REPORTING", "READINESS"],
    },
    {
      image: "/img3ext.png",
  
      title: "Turn requirements into confidence.",
      description:
        "Stay prepared for changing expectations with clear requirements, accountable owners, reliable evidence and continuous readiness.",
      details: ["REQUIREMENTS", "EVIDENCE", "ASSURANCE", "READINESS"],
    },
    {
      image: "/last.png",
   
      title: "A connected world needs connected GRC.",
      description:
        "Bring governance, risk and compliance together across markets, technologies and changing expectations.",
      details: ["GLOBAL", "CONNECTED", "TRUST", "PROGRESS"],
    },
  ];

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(slides.length - 1, index)));
  };

  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (Math.abs(delta) < 8) return;
      if (wheelLockRef.current) {
        event.preventDefault();
        return;
      }

      const direction: 1 | -1 = delta > 0 ? 1 : -1;
      const next = active + direction;

      // At the first/last card, let the page continue vertically.
      if (next < 0 || next > slides.length - 1) return;

      event.preventDefault();
      wheelLockRef.current = true;
      goTo(next);

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 520);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [active, slides.length]);

  const onPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    pointerStartRef.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;
    if (start === null) return;

    const distance = event.clientX - start;
    if (Math.abs(distance) < 45) return;

    goTo(distance < 0 ? active + 1 : active - 1);
  };

  return (
    <section
      ref={storyRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#050706] text-white select-none"
      style={{ touchAction: "pan-y" }}
    >
      {/* Full-screen background: only the active slide is visible. */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#050706]">
        {slides.map((slide, index) => (
          <img
            key={`${slide.image}-${index}`}
            src={slide.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              active === index
                ? "scale-100 opacity-100"
                : "scale-[1.025] opacity-0"
            }`}
            aria-hidden="true"
          />
        ))}

        {active > 0 && (
          <>
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-black/35" />
          </>
        )}
      </div>

      {/* The first landing image remains exactly as the supplied image. */}
      {active === 0 && (
        <div className="pointer-events-none absolute bottom-8 right-8 z-30 hidden md:block">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/55">
            Scroll / Swipe →
          </p>
        </div>
      )}

      {/* Landing-page content over the plain background image. */}
      {active === 0 && (
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#ff6500] md:text-[12px]">
                GOVERNANCE • RISK • COMPLIANCE
              </p>

              <h1 className="mt-7 max-w-3xl text-[52px] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-[64px] lg:text-[76px] xl:text-[84px]">
                Make complexity your competitive advantage.
              </h1>

              <p className="mt-7 max-w-2xl text-[16px] leading-8 text-white/75 md:text-[18px] md:leading-9">
                Ankh GRC helps organizations navigate the intersection of regulation, technology, cybersecurity, privacy, data and AI — turning complex requirements into practical governance and confident business decisions.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
             <Link
  href="/about"
  className="group inline-flex items-center gap-3 rounded-[10px] bg-[#ff6500] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85d00]"
>
  Explore Our Services
  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-[10px] border border-white/20 bg-black/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/10"
                >
                  Talk to Ankh GRC
                </Link>
              </div>
            </div>

         
          </div>
        </div>
      )}

      {/* Normal horizontal card carousel: previous | active | next. */}
      {active > 0 && (
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="relative h-full w-full">
            {slides.slice(1).map((slide, cardIndex) => {
              const index = cardIndex + 1;
              const relative = index - active;
              const isActive = relative === 0;
              const isSide = Math.abs(relative) === 1;
              const isFar = Math.abs(relative) > 1;

              // Keep the neighbouring cards clearly visible at left/right.
              const x = relative * 48;
              const scale = isActive ? 1 : isSide ? 0.82 : 0.68;
              const opacity = isActive ? 1 : isSide ? 0.22 : 0;

              return (
                <button
                  key={`${slide.label}-${index}`}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Open ${slide.label} slide`}
                  className="absolute left-1/2 top-[108px] bottom-[72px] flex w-[64vw] min-w-[640px] items-center text-left transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translate(calc(-50% + ${x}vw), 0) scale(${scale})`,
                    opacity,
                    pointerEvents: isFar ? "none" : "auto",
                  }}
                >
                  <div className="max-w-[980px] px-4 py-8 md:px-8 md:py-12">
                    <p
                      className={`uppercase tracking-[0.4em] transition-all duration-[650ms] ${
                        isActive
                          ? "text-[12px] font-semibold text-[#ff6500]"
                          : "text-[15px] font-semibold text-white/90"
                      }`}
                    >
                      {slide.label}
                    </p>

                    <h2
                      className={`mt-5 max-w-[820px] leading-[0.94] tracking-[-0.055em] transition-all duration-[650ms] ${
                        isActive
                          ? "text-[68px] font-bold text-white sm:text-[84px] lg:text-[104px] xl:text-[116px]"
                          : "text-[56px] font-semibold text-white"
                      }`}
                    >
                      {slide.title}
                    </h2>

                    <p
                      className={`mt-8 max-w-[900px] leading-8 transition-all duration-[650ms] ${
                        isActive
                          ? "text-[17px] text-white/80 md:text-[19px] md:leading-9"
                          : "text-[16px] text-white/55 md:text-[18px] md:leading-8"
                      }`}
                    >
                      {slide.description}
                    </p>

                    <div
                      className={`mt-9 flex flex-wrap gap-x-12 gap-y-4 transition-all duration-[650ms] ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {slide.details.map((detail) => (
                        <span
                          key={detail}
                          className={`text-[10px] font-semibold uppercase tracking-[0.3em] md:text-[11px] ${
                            isActive ? "text-white/75" : "text-white/45"
                          }`}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 8-position progress indicator. */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide.image}-dot-${index}`}
            type="button"
            aria-label={`Go to ${index === 0 ? "landing page" : slide.label}`}
            onClick={() => goTo(index)}
            className={`h-1 transition-all duration-500 ${
              active === index ? "w-10 bg-[#ff6500]" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {active > 0 && (
        <p className="pointer-events-none absolute bottom-8 right-8 z-30 hidden text-[9px] uppercase tracking-[0.3em] text-white/40 md:block">
          Scroll / Swipe →
        </p>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f5f2eb] text-[#151916]">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <Navigation />

      {/* =========================================================
          HORIZONTAL LANDING STORY
          Only the landing hero is changed; all following sections remain untouched.
      ========================================================= */}
      <HorizontalGrcStory />

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