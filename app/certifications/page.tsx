"use client";

import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

const certifications = [
  {
    short: "SOC 2",
    title: "SOC 2",
    description:
      "Build a structured control environment around security, availability, processing integrity, confidentiality and privacy.",
    tags: ["Security", "Controls", "Readiness"],
  },
  {
    short: "27001",
    title: "ISO/IEC 27001",
    description:
      "Establish and continually improve an Information Security Management System designed to manage information-security risks.",
    tags: ["ISMS", "Risk", "Security"],
  },
  {
    short: "9001",
    title: "ISO 9001",
    description:
      "Strengthen quality management through consistent processes, measurable objectives, customer focus and continual improvement.",
    tags: ["QMS", "Quality", "Process"],
  },
  {
    short: "GDPR",
    title: "GDPR",
    description:
      "Strengthen privacy governance, data handling, accountability and risk management for applicable data protection requirements.",
    tags: ["Privacy", "Data", "Governance"],
  },
  {
    short: "HIPAA",
    title: "HIPAA",
    description:
      "Assess administrative, physical and technical safeguards supporting the protection of electronic protected health information.",
    tags: ["Healthcare", "Privacy", "Security"],
  },
  {
    short: "PCI",
    title: "PCI DSS",
    description:
      "Strengthen security controls supporting organizations that store, process or transmit payment-card data.",
    tags: ["Payments", "Security", "Controls"],
  },
];

function ComplianceNetwork() {
  return (
<div className="absolute right-[280px] top-[360px] hidden h-[460px] w-[560px] -translate-y-1/2 lg:block">
      <svg
        viewBox="0 0 620 520"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        {/* Flowing Lines */}
        <path
          d="M80 330 C180 150, 300 120, 520 190"
          className="network-line line-one"
        />

        <path
          d="M40 400 C170 250, 290 210, 560 300"
          className="network-line line-two"
        />

        <path
          d="M120 470 C240 330, 370 340, 550 150"
          className="network-line line-three"
        />

        <path
          d="M180 80 C250 210, 390 250, 520 430"
          className="network-line line-four"
        />

        {/* Small connecting lines */}
        <path
          d="M170 275 L290 205 L405 280 L520 190"
          className="network-line faint-line"
        />

        {/* Glowing Nodes */}
        <g className="network-node node-one">
          <circle cx="170" cy="275" r="5" />
          <circle cx="170" cy="275" r="13" className="node-ring" />
        </g>

        <g className="network-node node-two">
          <circle cx="290" cy="205" r="6" />
          <circle cx="290" cy="205" r="16" className="node-ring" />
        </g>

        <g className="network-node node-three">
          <circle cx="405" cy="280" r="5" />
          <circle cx="405" cy="280" r="13" className="node-ring" />
        </g>

        <g className="network-node node-four">
          <circle cx="520" cy="190" r="7" />
          <circle cx="520" cy="190" r="19" className="node-ring" />
        </g>

        <g className="network-node node-five">
          <circle cx="520" cy="430" r="5" />
          <circle cx="520" cy="430" r="14" className="node-ring" />
        </g>

        {/* Moving glowing particles */}
        <circle r="4" className="moving-dot">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M80 330 C180 150, 300 120, 520 190"
          />
        </circle>

        <circle r="3" className="moving-dot slow">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M40 400 C170 250, 290 210, 560 300"
          />
        </circle>

        <circle r="3" className="moving-dot">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M120 470 C240 330, 370 340, 550 150"
          />
        </circle>
      </svg>

      <style jsx>{`
       .network-line {
  stroke: rgba(255, 101, 0, 0.55);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-dasharray: 10 12;
  animation: flow 5s linear infinite;
}

.line-two {
  animation-duration: 7s;
  stroke: rgba(255, 101, 0, 0.38);
}

.line-three {
  animation-duration: 8s;
  stroke: rgba(255, 101, 0, 0.42);
}

.line-four {
  animation-duration: 6s;
  stroke: rgba(255, 130, 50, 0.32);
}

.faint-line {
  stroke: rgba(255, 101, 0, 0.22);
  stroke-dasharray: 4 12;
  animation-duration: 9s;
}

.network-node {
  fill: #ff6500;
  filter: drop-shadow(0 0 12px rgba(255, 101, 0, 1));
  animation: pulse 2s ease-in-out infinite;
}

.moving-dot {
  fill: #ffad7a;
  filter: drop-shadow(0 0 10px #ff6500);
}
        .node-two {
          animation-delay: 0.5s;
        }

        .node-three {
          animation-delay: 1s;
        }

        .node-four {
          animation-delay: 1.5s;
        }

        .node-five {
          animation-delay: 2s;
        }

        .moving-dot {
          fill: #ff8a45;
          filter: drop-shadow(0 0 7px #ff6500);
        }

        .slow {
          opacity: 0.7;
        }

        @keyframes flow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <main className="overflow-x-hidden bg-[#f5f2eb] text-[#151916]">
      {/* NAVIGATION */}
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111412] text-white h-[920px]">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#ff6500]/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#ff6500]/[0.035] blur-3xl" />

        {/* Subtle lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>
<ComplianceNetwork/>
        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-40 lg:px-10 lg:pb-36 lg:pt-48">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
              <span className="h-px w-12 bg-[#ff6500]" />
              Certifications
              <span className="text-[#ff6500]">•</span>
              Compliance
            </div>

            <h1 className="mt-8 max-w-4xl text-[52px] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[66px] md:text-[78px] lg:text-[92px]">
              Compliance that
              <br />
              <span className="text-[#ff6500]">earns trust.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-[16px] leading-8 text-white/55 md:text-[18px]">
              Navigate security, privacy, quality and governance requirements
              with a practical compliance approach built around your
              organization, your risks and your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f5f2eb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
                Compliance Frameworks
              </p>

              <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[58px]">
                Build the capability.
                <br />
                <span className="text-black/35">
                  Demonstrate the trust.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-[17px] leading-8 text-black/55">
              Ankh GRC helps organizations understand applicable requirements,
              assess current maturity, close control gaps, organize evidence
              and prepare for independent assessment or certification.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATION CARDS */}
      <section className="bg-[#f5f2eb] pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="group relative min-h-[340px] overflow-hidden rounded-[20px] border border-black/10 bg-[#ebe7de] p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#ff6500]/40 hover:bg-white hover:shadow-[0_24px_55px_rgba(0,0,0,0.10)]"
              >
                {/* Animated top line */}
                <div className="absolute left-0 top-0 h-px w-10 bg-[#ff6500] transition-all duration-700 ease-out group-hover:w-full" />

                {/* Animated glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ff6500]/[0.07] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Certification mark */}
                <div className="relative flex h-[58px] w-[76px] items-center justify-center rounded-[12px] border border-black/10 bg-[#f5f2eb] text-[11px] font-bold tracking-[0.08em] text-[#e65300] transition-all duration-500 group-hover:border-[#ff6500]/30 group-hover:bg-[#ff6500]/[0.06] group-hover:scale-105">
                  {cert.short}
                </div>

                <h3 className="relative mt-7 text-[24px] font-medium tracking-[-0.025em] transition-transform duration-500 group-hover:translate-x-1">
                  {cert.title}
                </h3>

                <p className="relative mt-4 text-[14px] leading-7 text-black/50">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[6px] bg-black/[0.045] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-black/45 transition-all duration-300 group-hover:bg-[#ff6500]/[0.08] group-hover:text-[#c94d00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom animated line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#ff6500] transition-all duration-700 ease-out group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANKH APPROACH */}
      <section className="relative overflow-hidden bg-[#151916] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ff6500]/[0.045] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
                The Ankh GRC Approach
              </p>

              <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[58px]">
                Don't build compliance
                <br />
                <span className="text-white/35">
                  framework by framework.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-[17px] leading-8 text-white/50">
                Build a scalable control environment once, then map it
                intelligently across the standards and requirements that
                matter to your organization.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Policies & Ownership",
                  text: "Define accountability, governance structures and organizational expectations.",
                },
                {
                  title: "Risk & Scope",
                  text: "Understand assets, processes, risks, dependencies and compliance obligations.",
                },
                {
                  title: "Control Environment",
                  text: "Design and implement practical controls that can scale with the organization.",
                },
                {
                  title: "Evidence & Assurance",
                  text: "Organize evidence and demonstrate control effectiveness to stakeholders.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6500]/35 hover:bg-white/[0.055]"
                >
                  <div className="absolute left-0 top-0 h-px w-8 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />

                  <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-white/45">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f5f2eb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e65300]">
              Our Process
            </p>

            <h2 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[58px]">
              From compliance gap
              <br />
              to <span className="text-[#e65300]">audit readiness.</span>
            </h2>

            <p className="mt-7 text-[17px] leading-8 text-black/50">
              A structured approach designed to make compliance practical,
              measurable and sustainable.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Assess",
                text: "Understand your current maturity, scope, risks and applicable requirements.",
              },
              {
                title: "Design",
                text: "Build the required policies, controls, governance and implementation roadmap.",
              },
              {
                title: "Implement",
                text: "Operationalize controls, assign ownership and establish repeatable evidence collection.",
              },
              {
                title: "Assure",
                text: "Validate readiness, address gaps and prepare for the appropriate independent assessment.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[18px] border border-black/10 bg-[#ebe7de] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6500]/35 hover:bg-white hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute left-0 top-0 h-px w-8 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />

                <h3 className="text-[21px] font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-black/50">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#111412] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6500]/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6500]">
            Start a Conversation
          </p>

          <h2 className="mt-7 text-[44px] font-medium leading-[1.04] tracking-[-0.04em] md:text-[64px]">
            Build confidence
            <br />
            <span className="text-white/35">
              before the audit begins.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-white/50">
            Talk to Ankh GRC about your compliance framework, scope and
            readiness objectives.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}