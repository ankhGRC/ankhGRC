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

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen w-full bg-[#f1eee7] text-[#171b19]">
      <Navigation />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111412] text-[#f4f1eb]">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[650px] w-[650px] rounded-full bg-[#ff6500]/10 blur-[130px]" />

        <div className="mx-auto grid min-h-[890px] w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          {/* LEFT */}
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6500]">
              RESOURCES / PARTNERSHIPS
            </p>

            <h1 className="max-w-[900px] text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Better outcomes,
              <br />
              <span className="text-[#ff6500]">built together.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 lg:text-xl">
              We partner with technology platforms, certification bodies, and
              industry organizations to deliver compliance outcomes end-to-end
              — not just advisory hours.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#partners"
                className="inline-flex items-center gap-3 bg-[#ff6500] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a1a]"
              >
                Explore Partnerships
                <span>→</span>
              </a>

              <a
                href="#become-partner"
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ff6500] hover:text-[#ff6500]"
              >
                Become a Partner
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:block">
            <div className="relative rounded-[28px] border border-white/10 bg-[#171b19] p-7">
              <div className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-[#ff6500] shadow-[0_0_20px_rgba(255,106,0,0.7)]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                ANKH GRC
              </p>

              <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-white/30">
                PARTNERSHIP NETWORK
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Technology", "Certification", "Industry", "Referral"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="min-h-[140px] rounded-2xl border border-white/10 bg-[#1b201e] p-5"
                    >
                      <div className="text-sm text-[#ff6500]">+</div>

                      <div className="mt-12">
                        <p className="text-sm text-white/80">{item}</p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                          PARTNER {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em]">
                  <span className="text-white/30">NETWORK</span>
                  <span className="text-[#ff6500]">CONNECTED</span>
                </div>

                <div className="mt-3 h-px w-full bg-white/10">
                  <div className="h-px w-[82%] bg-[#ff6500]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERS
      ========================================================= */}
      <section
        id="partners"
        className="border-b border-black/10 bg-[#f1eee7] text-[#171b19]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          {/* TECHNOLOGY PARTNERS */}
          <div>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                  01 / TECHNOLOGY PARTNERS
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  GRC platforms
                  <br />
                  we work with.
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-lg leading-8 text-black/60">
                  We work directly with leading GRC and compliance automation
                  platforms to help clients configure, deploy, and maintain
                  their compliance tooling.
                </p>

                <div className="mt-10 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
                  {technologyPartners.map((partner, index) => (
                    <div
                      key={partner}
                      className="flex min-h-[170px] items-center justify-center border-b border-r border-black/10 p-6 text-center transition hover:bg-black/[0.025]"
                    >
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                          {partner}
                        </span>

                        <div className="mx-auto mt-5 h-px w-10 bg-orange-500" />

                        <span className="mt-4 block text-[9px] font-semibold tracking-[0.2em] text-orange-600">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATION */}
          <div className="mt-24 border-t border-black/10 pt-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                  02 / CERTIFICATION
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Certification
                  <br />
                  & Audit
                  <br />
                  Partners
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-lg leading-8 text-black/60">
                  While AnkhGRC provides advisory and readiness support, formal
                  certification requires an accredited certification body or a
                  licensed CPA firm. We coordinate directly with partner
                  organizations to make that handoff seamless.
                </p>

                <div className="mt-10 grid border-t border-black/10 sm:grid-cols-3">
                  {certificationPartners.map((partner, index) => (
                    <div
                      key={partner}
                      className="flex min-h-[170px] items-center justify-center border-b border-r border-black/10 p-6 text-center transition hover:bg-black/[0.025]"
                    >
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                          {partner}
                        </span>

                        <div className="mx-auto mt-5 h-px w-10 bg-orange-500" />

                        <span className="mt-4 block text-[9px] font-semibold tracking-[0.2em] text-orange-600">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* INDUSTRY */}
          <div className="mt-24 border-t border-black/10 pt-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                  03 / INDUSTRY NETWORK
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Industry &
                  <br />
                  Referral
                  <br />
                  Partners
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-lg leading-8 text-black/60">
                  Industry associations, law firms, and technology consultancies
                  we partner with to bring clients a complete governance, risk,
                  and compliance solution.
                </p>

                <div className="mt-10 grid border-t border-black/10 sm:grid-cols-2">
                  {industryPartners.map((partner, index) => (
                    <div
                      key={partner}
                      className="flex min-h-[170px] items-center justify-center border-b border-r border-black/10 p-6 text-center transition hover:bg-black/[0.025]"
                    >
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                          {partner}
                        </span>

                        <div className="mx-auto mt-5 h-px w-10 bg-orange-500" />

                        <span className="mt-4 block text-[9px] font-semibold tracking-[0.2em] text-orange-600">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BECOME A PARTNER
      ========================================================= */}
      <section
        id="become-partner"
        className="bg-[#111412] text-[#f4f1eb]"
      >
        <div className="mx-auto w-full min-h-[650px] max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                04 / BECOME A PARTNER
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Interested in
                <br />
                partnering with AnkhGRC?
              </h2>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50">
                Whether you're a GRC technology platform, a certification body,
                or a firm serving clients who need compliance support, we're
                always open to partnerships that create better outcomes for the
                businesses we serve.
              </p>
            </div>

            <a
              href="mailto:help@ankhgrc.com"
              className="inline-flex w-fit items-center gap-4 border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6500] hover:text-[#ff6500]"
            >
              Get in Touch
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#ff6500] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            05 / NEXT STEP
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Build stronger outcomes,
            <br />
            together.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/55">
            Start a conversation with AnkhGRC and explore how a partnership
            can create better outcomes for your clients and organisation.
          </p>

          <a
            href="mailto:help@ankhgrc.com"
            className="mt-10 inline-flex items-center gap-3 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111412]"
          >
            Contact AnkhGRC
            <span>→</span>
          </a>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      
      <Footer/>
    </main>
  );
}