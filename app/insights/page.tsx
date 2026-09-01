import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

export default function InsightsPage() {
  return (
    <main className="min-h-screen w-full bg-[#111412] text-[#f4f1eb]">
      <Navigation />

      {/* HERO */}
<section className="relative overflow-hidden bg-[#111412]">
  <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-[#e65300]/10 blur-[130px]" />

  <div className="mx-auto grid min-h-[900px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">
    
    {/* LEFT */}
    <div>
      <p className="mb-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6a00]">
        RESOURCES / INSIGHTS
      </p>

      <h1 className="max-w-[900px] text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
        Insights
        <br />
        That Matter.
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 lg:text-xl">
        Explore perspectives, ideas, and practical guidance on governance,
        risk, compliance, cybersecurity, and the evolving regulatory landscape.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#insights"
          className="inline-flex items-center gap-3 bg-[#ff6a00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a1a]"
        >
          Explore Insights
          <span>→</span>
        </a>

        <a
          href="#featured"
          className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
        >
          Featured
          <span>↓</span>
        </a>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className="relative">
      <div className="relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/10 bg-[#171b19] p-7">
        
        {/* Orange glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e65300]/15 blur-3xl" />

        {/* Small heading */}
        <div className="relative">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            ANKH GRC
          </p>

          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            KNOWLEDGE FRAMEWORK
          </p>
        </div>

        {/* Orange dot */}
        <div className="absolute right-7 top-7 h-2 w-2 rounded-full bg-[#ff6a00]" />

        {/* Cards */}
        <div className="relative mt-8 grid grid-cols-2 gap-3">
          <div className="flex min-h-[135px] flex-col justify-between rounded-2xl border border-white/10 bg-[#1b201e] p-5">
            <span className="text-sm text-[#ff6a00]">+</span>

            <p className="text-sm leading-5 text-white/85">
              Governance
              <br />
              Insights
            </p>
          </div>

          <div className="flex min-h-[135px] flex-col justify-between rounded-2xl border border-white/10 bg-[#1b201e] p-5">
            <span className="text-sm text-[#ff6a00]">+</span>

            <p className="text-sm leading-5 text-white/85">
              Risk &
              <br />
              Resilience
            </p>
          </div>

          <div className="flex min-h-[135px] flex-col justify-between rounded-2xl border border-white/10 bg-[#1b201e] p-5">
            <span className="text-sm text-[#ff6a00]">+</span>

            <p className="text-sm leading-5 text-white/85">
              Regulatory
              <br />
              Updates
            </p>
          </div>

          <div className="flex min-h-[135px] flex-col justify-between rounded-2xl border border-white/10 bg-[#1b201e] p-5">
            <span className="text-sm text-[#ff6a00]">+</span>

            <p className="text-sm leading-5 text-white/85">
              Security &
              <br />
              Compliance
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="relative mt-7 border-t border-white/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
              COVERAGE
            </span>

            <span className="text-[9px] uppercase tracking-[0.3em] text-[#ff6a00]">
              GLOBAL
            </span>
          </div>

          <div className="mt-3 h-px w-full bg-white/10">
            <div className="h-px w-[82%] bg-[#ff6a00]" />
          </div>
        </div>

        {/* Background number */}
        <div className="pointer-events-none absolute -bottom-12 -right-4 select-none text-[170px] font-medium leading-none text-white/[0.025]">
          01
        </div>
      </div>
    </div>

  </div>
</section>

      {/* INTRO */}
      <section
        id="insights"
        className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto min-h-[500px] max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                01 / INSIGHTS
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Knowledge
                <br />
                for Better
                <br />
                Decisions
              </h2>
            </div>

            <div>
              <p className="max-w-4xl text-lg leading-8 text-black/60">
                The regulatory and risk environment continues to evolve.
                Organisations need clear perspectives to understand change,
                respond effectively, and build resilient operations.
              </p>

              <div className="mt-12 grid border-t border-black/10 sm:grid-cols-2">
                <article className="border-b border-r border-black/10 px-6 py-8">
                  <span className="text-xs font-semibold tracking-[0.2em] text-orange-600">
                    01
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    Practical Perspectives
                  </h3>

                  <p className="mt-3 text-base leading-6 text-black/55">
                    Clear perspectives designed to help organisations
                    understand complex GRC challenges.
                  </p>
                </article>

                <article className="border-b border-black/10 px-6 py-8">
                  <span className="text-xs font-semibold tracking-[0.2em] text-orange-600">
                    02
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    Emerging Trends
                  </h3>

                  <p className="mt-3 text-base leading-6 text-black/55">
                    Stay informed about changing regulations, risks,
                    technologies, and industry expectations.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHT CARDS */}
      <section className="bg-[#111412] py-24 text-[#f4f1eb] lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            02 / EXPLORE
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Perspectives Across
              <br />
              GRC
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/40">
              Explore ideas and knowledge across governance, risk, compliance,
              and cybersecurity.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group min-h-[360px] border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] lg:p-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-orange-500">
                01
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em]">
                Governance
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Perspectives on governance frameworks, accountability,
                decision-making, and organisational oversight.
              </p>

              <span className="mt-8 inline-flex text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </article>

            <article className="group min-h-[360px] border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] lg:p-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-orange-500">
                02
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em]">
                Risk
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Understand emerging risks and practical approaches to
                identifying, assessing, and managing them effectively.
              </p>

              <span className="mt-8 inline-flex text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </article>

            <article className="group min-h-[360px] border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] lg:p-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-orange-500">
                03
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em]">
                Compliance
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Insights into regulatory change, compliance requirements,
                audit readiness, and regulatory resilience.
              </p>

              <span className="mt-8 inline-flex text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </article>

            <article className="group min-h-[360px] border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] lg:p-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-orange-500">
                04
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em]">
                Cybersecurity
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Explore cybersecurity perspectives, resilience, threats,
                controls, and organisational preparedness.
              </p>

              <span className="mt-8 inline-flex text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </article>

            <article className="group min-h-[360px] border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] lg:p-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-orange-500">
                05
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em]">
                Regulatory Change
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Keep up with evolving regulatory expectations and understand
                what they mean for your organisation.
              </p>

              <span className="mt-8 inline-flex text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </article>

            <article className="group min-h-[360px] border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] lg:p-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-orange-500">
                06
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em]">
                Industry Insights
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Discover perspectives relevant to different industries and
                their unique regulatory environments.
              </p>

              <span className="mt-8 inline-flex text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section
        id="featured"
        className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                03 / FEATURED
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Featured
                <br />
                Perspective
              </h2>
            </div>

            <div>
              <div className="border-t border-black/10 py-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-orange-600">
                  GRC / PERSPECTIVE
                </p>

                <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em]">
                  Building resilience through better governance, risk, and
                  compliance.
                </h3>

                <p className="mt-5 max-w-3xl text-base leading-7 text-black/55">
                  Strong GRC practices help organisations move beyond
                  compliance and create a foundation for resilience, trust,
                  and sustainable growth.
                </p>

                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-orange-600"
                >
                  Read More
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 px-6 py-24 text-[#111412] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            04 / STAY INFORMED
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Keep Learning.
            <br />
            Keep Growing.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/55">
            Stay connected with the latest perspectives and ideas shaping
            governance, risk, compliance, and cybersecurity.
          </p>

          <a
            href="mailto:info@ankhgrc.com"
            className="mt-10 inline-flex items-center gap-3 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111412]"
          >
            Connect With Us
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      
      <Footer/>
    </main>
  );
}