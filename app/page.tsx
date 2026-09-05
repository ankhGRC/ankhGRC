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

    let raf = 0, frame = 0, width = 0, height = 0, dpr = 1;
    let seed = 20260905;
    const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

    type Dot = { x:number; y:number; r:number; a:number; speed:number; phase:number; glow:boolean };
    let dots: Dot[] = [];
    let streaks: Dot[] = [];

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr; canvas.height = height * dpr;
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      seed = 20260905;
      dots = Array.from({length: Math.max(650, Math.floor(width*height/3000))}, () => ({
        x:rnd()*width, y:rnd()*height, r:rnd()<.08?2+rnd()*1.8:.45+rnd()*1.2,
a:.14+rnd()*.62, speed:.16+rnd()*2.8, phase:rnd()*Math.PI*2, glow:rnd()<.1
      }));
      streaks = Array.from({length:Math.max(24,Math.floor(width/55))},()=>({
        x:rnd()*width,y:rnd()*height,r:.7+rnd()*1.5,a:.15+rnd()*.4,speed:.15+rnd()*.35,phase:rnd()*6.28,glow:rnd()<.4
      }));
    };
    resize(); window.addEventListener("resize",resize);

    const wave = (x:number, i:number, t:number) => {
      const n=x/width;
      return height*.70 - n*height*.49 + Math.sin(n*Math.PI*2.2+t*.38+i*.045)*height*.075 + Math.sin(n*Math.PI*4.1-t*.22+i)*height*.018 + (i-6)*14;
    };

    const render=()=>{
      frame++; const t=frame*.012;
      ctx.clearRect(0,0,width,height);
      const bg=ctx.createLinearGradient(0,0,width,height);
      bg.addColorStop(0,"#030303"); bg.addColorStop(.5,"#090604"); bg.addColorStop(1,"#020303");
      ctx.fillStyle=bg; ctx.fillRect(0,0,width,height);

      const glow=ctx.createRadialGradient(width*.67,height*.46,0,width*.67,height*.46,Math.max(width*.48,550));
      glow.addColorStop(0,"rgba(255,91,10,.13)"); glow.addColorStop(.3,"rgba(255,90,10,.055)"); glow.addColorStop(1,"rgba(255,70,0,0)");
      ctx.fillStyle=glow; ctx.fillRect(0,0,width,height);

      // Very faint technical grid.
      ctx.save(); ctx.globalAlpha=.055; ctx.strokeStyle="#c55b1a"; ctx.lineWidth=.45;
      for(let x=-100;x<width+100;x+=92){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+width*.04,height);ctx.stroke();}
      for(let y=20;y<height;y+=92){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(width,y-height*.018);ctx.stroke();}
      ctx.restore();

      // The reference has a whole FIELD of ribbons, not one wave.
      for(let i=0;i<15;i++){
        const p=new Path2D(); p.moveTo(-120,wave(-120,i,t));
        for(let x=-120;x<=width+140;x+=10)p.lineTo(x,wave(x,i,t));
        ctx.save();
        if(i===7){ctx.strokeStyle="#ff9b4b";ctx.lineWidth=2.7;ctx.globalAlpha=.92;ctx.shadowColor="#ff6a16";ctx.shadowBlur=18;}
        else if(i===6||i===8){ctx.strokeStyle="#ff751d";ctx.lineWidth=1.55;ctx.globalAlpha=.58;ctx.shadowColor="#ff6500";ctx.shadowBlur=8;}
        else{ctx.strokeStyle=i%2?"#d85b13":"#ff812d";ctx.lineWidth=i%3===0?1.05:.62;ctx.globalAlpha=.18+(1-Math.abs(i-7)/8)*.2;}
        ctx.stroke(p); ctx.restore();
      }

      // Bright moving dashes riding the main ribbon.
      const main=new Path2D(); main.moveTo(-120,wave(-120,7,t));
      for(let x=-120;x<=width+140;x+=10)main.lineTo(x,wave(x,7,t));
      ctx.save(); ctx.strokeStyle="#ffd0a5";ctx.lineWidth=1.05;ctx.globalAlpha=.82;ctx.setLineDash([1,12]);ctx.lineDashOffset=-frame*1.7;ctx.stroke(main);ctx.restore();

      // Dense atmospheric particles.
      for(const p of dots){
const tt=t*p.speed+p.phase; const x=p.x+Math.sin(tt*.72)*22; const y=p.y+Math.cos(tt*.5)*16;
        const ry=wave(x,7,t); const near=Math.abs(y-ry); const a=Math.min(1,p.a*(.7+.3*Math.sin(tt))+(near<50?(1-near/50)*.3:0));
        ctx.beginPath();ctx.arc(x,y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(255,${p.glow?185:112},${p.glow?80:24},${a})`;
        ctx.shadowColor="#ff701b";ctx.shadowBlur=p.glow||near<20?8:0;ctx.fill();
      }

      // Bright particles that travel along the complete ribbon.
      for(let i=0;i<48;i++){
        const q=(i/48+t*(.015+(i%5)*.0018))%1; const x=-80+q*(width+160); const y=wave(x,7,t);
        ctx.beginPath();ctx.arc(x,y,i%7===0?2.3:1,0,Math.PI*2);ctx.fillStyle=i%7===0?"rgba(255,220,190,.95)":"rgba(255,137,53,.8)";ctx.shadowColor="#ff7620";ctx.shadowBlur=i%7===0?13:6;ctx.fill();
      }

      // WAVE-WRAPPED ORBITAL FIELD
      // Full 360° orbital rings are anchored into the flowing ribbon field.
      // They are deliberately blended into the wave instead of appearing as
      // isolated circles or half-orbits.

      const drawOrbitSystem = (
        cx: number,
        cy: number,
        rxBase: number,
        ryBase: number,
        rotation: number,
        rings: number,
        scaleStep: number,
        phaseOffset: number,
        orbitMotion: number = 0
      ) => {
        ctx.save();

// ============================================================
// ANTI-CLOCKWISE ORBIT MOVEMENT
// The ellipse itself DOES NOT rotate.
// The complete orbital system revolves around an invisible
// circular path in an anti-clockwise direction.
// ============================================================

const revolutionSpeed = 0.02185;

// Negative angle = anti-clockwise
const revolutionAngle = -frame * revolutionSpeed;

// Radius of the invisible revolution path
const revolutionRadiusX = width * 0.055;
const revolutionRadiusY = height * 0.035;

// Move the COMPLETE orbit around the invisible center
const movingCx =
  cx + Math.cos(revolutionAngle) * revolutionRadiusX;

const movingCy =
  cy + Math.sin(revolutionAngle) * revolutionRadiusY;

// Orbit shape keeps its original orientation.
// IMPORTANT: no frame value inside rotate().
ctx.translate(movingCx, movingCy);
ctx.rotate(rotation);
        // Soft atmospheric glow behind each orbital family.
        const orbitGlow = ctx.createRadialGradient(
          0, 0, 0,
          0, 0, Math.max(rxBase, ryBase) * 1.25
        );
        orbitGlow.addColorStop(0, "rgba(255,105,25,0.075)");
        orbitGlow.addColorStop(0.42, "rgba(255,88,10,0.025)");
        orbitGlow.addColorStop(1, "rgba(255,70,0,0)");
        ctx.fillStyle = orbitGlow;
        ctx.fillRect(
          -Math.max(rxBase, ryBase) * 1.3,
          -Math.max(rxBase, ryBase) * 1.3,
          Math.max(rxBase, ryBase) * 2.6,
          Math.max(rxBase, ryBase) * 2.6
        );

        // Full elliptical orbit rings.
        for (let i = 0; i < rings; i++) {
          const scale = 1 + i * scaleStep;
          const rx = rxBase * scale;
          const ry = ryBase * (1 + i * scaleStep * 0.82);

          ctx.beginPath();
          ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);

          const centerRing = Math.floor(rings * 0.48);
          ctx.strokeStyle =
            i === centerRing
              ? "#ff9a4b"
              : i % 2 === 0
                ? "#e9681d"
                : "#c95313";

          ctx.globalAlpha =
            i === centerRing
              ? 0.48
              : 0.095 + (1 - Math.abs(i - centerRing) / rings) * 0.10;

          ctx.lineWidth =
            i === centerRing
              ? 1.65
              : i === centerRing - 1 || i === centerRing + 1
                ? 0.95
                : 0.52;

          ctx.shadowColor = "#ff6500";
          ctx.shadowBlur = i === centerRing ? 14 : 4;
          ctx.stroke();
        }

        // A dotted full orbit, integrated into the same family.
        ctx.save();
        ctx.setLineDash([1, 11]);
        ctx.lineDashOffset = -frame * 0.85;
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          rxBase * (1 + (rings - 1) * scaleStep * 0.55),
          ryBase * (1 + (rings - 1) * scaleStep * 0.42),
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = "#ff984c";
        ctx.globalAlpha = 0.30;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();

        // Moving particles travel around the COMPLETE orbit, not just an arc.
        for (let i = 0; i < 13; i++) {
          const ringIndex = i % rings;
          const scale = 1 + ringIndex * scaleStep;
          const rx = rxBase * scale;
          const ry = ryBase * (1 + ringIndex * scaleStep * 0.82);

          const angle =
            phaseOffset +
            frame * (0.0038 + (i % 5) * 0.00065) +
            i * (Math.PI * 2 / 13);

          const px = Math.cos(angle) * rx;
          const py = Math.sin(angle) * ry;

          ctx.beginPath();
          ctx.arc(px, py, i % 6 === 0 ? 2.15 : 0.82, 0, Math.PI * 2);
          ctx.fillStyle =
            i % 6 === 0
              ? "rgba(255,224,198,0.96)"
              : "rgba(255,132,43,0.82)";
          ctx.shadowColor = "#ff6a16";
          ctx.shadowBlur = i % 6 === 0 ? 15 : 6;
          ctx.fill();
        }

        // A subtle travelling highlight gives the orbit a living connection
        // to the moving wave.
        const highlightRadius = Math.min(
          rxBase * 0.92,
          ryBase * 0.92
        );
        const highlightAngle =
          phaseOffset + frame * 0.0032;

        const hx = Math.cos(highlightAngle) * highlightRadius;
        const hy =
          Math.sin(highlightAngle) *
          Math.max(ryBase * 0.92, 1);

        const hGlow = ctx.createRadialGradient(
          hx, hy, 0,
          hx, hy, 27
        );
        hGlow.addColorStop(0, "rgba(255,235,215,0.90)");
        hGlow.addColorStop(0.18, "rgba(255,150,72,0.58)");
        hGlow.addColorStop(1, "rgba(255,80,0,0)");

        ctx.fillStyle = hGlow;
        ctx.fillRect(hx - 27, hy - 27, 54, 54);

        ctx.beginPath();
        ctx.arc(hx, hy, 2.35, 0, Math.PI * 2);
        ctx.fillStyle = "#ffe9d5";
        ctx.shadowColor = "#ff6a16";
        ctx.shadowBlur = 19;
        ctx.fill();

        ctx.restore();
      };

      // The orbital systems sit directly on/around the ribbon flow.
      // Their positions intentionally overlap the wave field so the two
      // visual systems read as one continuous structure.

    

      

      // Right: the main orbital family, fully visible and blended with the
      // lower flowing ribbon instead of being a disconnected ellipse.
      drawOrbitSystem(
        width * 0.84,
        height * 0.68,
        width * 0.145,
        height * 0.085,
        -0.05,
        11,
        0.095,
        4.35,
        0.00042
      );

      // Fine connecting filaments between the main wave and the right orbit.
      // These keep the transition visually continuous.
      ctx.save();
      ctx.globalAlpha = 0.20;
      ctx.strokeStyle = "#df6419";
      ctx.lineWidth = 0.55;

      for (let i = 0; i < 8; i++) {
        const p = new Path2D();
        const startX = width * 0.55;
        const endX = width * 0.86;
        const startY = wave(startX, 7 + (i % 3), t) + (i - 4) * 4;
        const endY = height * 0.68 + Math.sin(i * 0.7) * height * 0.075;

        p.moveTo(startX, startY);
        p.bezierCurveTo(
          width * 0.64,
          startY + (i - 4) * 5,
          width * 0.73,
          endY - (i - 4) * 8,
          endX,
          endY
        );

        ctx.stroke(p);
      }
      ctx.restore();

      // Thin vertical data streaks add the small details seen throughout the image.
      for(const p of streaks){
        const y=((frame*p.speed+p.phase*100)%(height+160))-80, x=p.x+Math.sin(t+p.phase)*8;
        const g=ctx.createLinearGradient(x,y-32,x,y+32);g.addColorStop(0,"rgba(255,100,20,0)");g.addColorStop(.5,`rgba(255,125,35,${p.a})`);g.addColorStop(1,"rgba(255,100,20,0)");
        ctx.fillStyle=g;ctx.fillRect(x,y-32,p.r,64);
      }

      raf=requestAnimationFrame(render);
    };
    render();
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);

  return <div className="absolute inset-0 overflow-hidden bg-[#030303]"><canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" /></div>;
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
      <section className="relative min-h-[calc(110vh-80px)] overflow-hidden bg-[#0b0f0d] text-white">
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