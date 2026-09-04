"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
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

function FullscreenClassyMeshHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Grid Mesh Nodes spread edge-to-edge
    const cols = Math.floor(width / 90) + 2;
    const rows = Math.floor(height / 70) + 2;
    const nodes: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
    }> = [];

    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const x = (c * width) / cols;
        const y = (r * height) / rows;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let step = 0;

    const render = () => {
      step += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Deep Dark Luxury Gradient
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      baseGrad.addColorStop(0, "#060807");
      baseGrad.addColorStop(0.5, "#0b0f0d");
      baseGrad.addColorStop(1, "#050706");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Smooth Edge-to-Edge Ambient Glow Waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height * (0.3 + i * 0.2));

        for (let x = 0; x <= width; x += 30) {
          const waveY =
            Math.sin(x * 0.002 + step + i) * 60 +
            Math.cos((x + step * 50) * 0.001) * 30 +
            height * (0.4 + i * 0.15);
          ctx.lineTo(x, waveY);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const waveGrad = ctx.createLinearGradient(0, 0, width, 0);
        waveGrad.addColorStop(0, `rgba(255, 101, 0, ${0.015 + i * 0.01})`);
        waveGrad.addColorStop(0.5, `rgba(255, 120, 30, ${0.04 + i * 0.015})`);
        waveGrad.addColorStop(1, `rgba(255, 101, 0, ${0.01 + i * 0.01})`);

        ctx.fillStyle = waveGrad;
        ctx.fill();
      }

      // Update Node Positions
      nodes.forEach((node) => {
        node.x += Math.sin(step + node.baseY) * 0.3;
        node.y += Math.cos(step + node.baseX) * 0.3;

        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 180) {
          const force = (180 - dist) / 180;
          node.x -= (dx / dist) * force * 12;
          node.y -= (dy / dist) * force * 12;
        }
      });

      // Render Dynamic Connecting Mesh Across Entire Canvas
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);

            const alpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(255, 115, 20, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Subtle Ambient Glowing Orbs at specific positions for depth
      const glow1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 0, width * 0.2, height * 0.3, 500);
      glow1.addColorStop(0, "rgba(255, 101, 0, 0.06)");
      glow1.addColorStop(1, "transparent");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(width * 0.85, height * 0.6, 0, width * 0.85, height * 0.6, 600);
      glow2.addColorStop(0, "rgba(255, 101, 0, 0.08)");
      glow2.addColorStop(1, "transparent");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050706]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
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
          HERO
      ========================================================= */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0b0f0d] text-white">
        {/* Full-screen animated background canvas */}
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
          <FullscreenClassyMeshHero />
        </div>

        {/* Subtle grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-20 min-h-[calc(100vh-80px)] overflow-hidden">
          <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1900px] items-center px-6 pb-16 pt-20 lg:px-24 lg:pb-12 lg:pt-16">
            <div className="max-w-[720px]">
              <div className="mb-7 flex items-center gap-4 pt-[40px] text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
                <span className="h-px w-12 bg-[#ff6500]/60" />
                Governance
                <span className="text-[#ff6500]">•</span>
                Risk
                <span className="text-[#ff6500]">•</span>
                Compliance
              </div>

              <h1 className="max-w-[700px] text-[56px] font-medium leading-[0.93] tracking-[-0.055em] sm:text-[68px] md:text-[82px] lg:text-[88px] xl:text-[94px]">
                Make
                <br />
                complexity your
                <br />
                <span className="text-[#ff6500]">competitive</span>
                <br />
                <span className="text-[#ff6500]">advantage.</span>
              </h1>

              <p className="mt-9 max-w-[650px] text-[16px] leading-7 text-white/60 md:text-[17px] md:leading-8">
                Ankh GRC helps organizations navigate the intersection of
                regulation, technology, cybersecurity, privacy, data and AI —
                turning complex requirements into practical governance and
                confident business decisions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="group inline-flex min-h-[56px] items-center gap-8 rounded-[7px] bg-[#ff6500] px-7 text-sm font-semibold text-black transition-all duration-500 hover:-translate-y-1 hover:bg-[#ff7418] hover:shadow-[0_18px_45px_rgba(255,101,0,0.22)]"
                >
                  Explore Our Services
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[56px] items-center rounded-[7px] border border-white/25 px-7 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6500]/60 hover:bg-white/[0.035]"
                >
                  Talk to Ankh GRC
                </Link>
              </div>

              <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/45">
                <span className="relative block h-16 w-px overflow-hidden bg-white/15">
                  <span className="absolute left-0 top-0 h-7 w-px bg-[#ff6500] animate-[scrollLine_2.4s_ease-in-out_infinite]" />
                </span>
                <span>Scroll</span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollLine {
            0%, 100% { transform: translateY(-2px); opacity: .4; }
            50% { transform: translateY(38px); opacity: 1; }
          }
        `}</style>
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