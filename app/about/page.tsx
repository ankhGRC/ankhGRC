import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";

const expertise = [
  {
    number: "01",
    title: "Governance",
    text: "Clear accountability, decision-making structures and oversight.",
  },
  {
    number: "02",
    title: "Risk",
    text: "Identify, assess, prioritize and continuously manage business and technology risks.",
  },
  {
    number: "03",
    title: "Compliance",
    text: "Translate regulatory requirements into praFtical controls and measurable obligations.",
  },
  {
    number: "04",
    title: "Security",
    text: "Strengthen information security governance and organizational resilience.",
  },
  {
    number: "05",
    title: "Privacy",
    text: "Build responsible data protection and privacy programs.",
  },
  {
    number: "06",
    title: "AI Governance",
    text: "Create responsible, transparent and risk-aware AI operating models.",
  },
  {
    number: "07",
    title: "Regulatory Intelligence",
    text: "Understand changing regulatory expectations and translate them into action.",
  },
  {
    number: "08",
    title: "Cross-Border Compliance",
    text: "Navigate international regulations, data transfers, localization and jurisdictional complexity.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Assess the current governance, risk, security, privacy and compliance environment.",
  },
  {
    number: "02",
    title: "Map",
    text: "Identify applicable regulatory requirements, risks, obligations and control expectations.",
  },
  {
    number: "03",
    title: "Design",
    text: "Develop practical frameworks, policies, controls and operating models.",
  },
  {
    number: "04",
    title: "Implement",
    text: "Translate requirements into processes, responsibilities, evidence and measurable controls.",
  },
  {
    number: "05",
    title: "Assure",
    text: "Evaluate effectiveness through testing, monitoring, assessments and continuous improvement.",
  },
  {
    number: "06",
    title: "Evolve",
    text: "Continuously adapt governance as regulations, technologies and risks change.",
  },
];

const questions = [
  "What data is being used?",
  "Where is the data going?",
  "What decisions is AI making?",
  "Who is accountable?",
  "What risks are being introduced?",
  "Can the organization explain the outcome?",
  "Can compliance be demonstrated?",
  "How should AI systems be monitored?",
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Technology",
  "Energy",
  "Retail",
  "Manufacturing",
  "Government",
  "Global Enterprises",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f4f1eb] text-[#171b19]">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111412] text-[#f4f1eb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,transparent_32%)]" />

        <div className="relative mx-auto grid min-h-[900px] w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff5a00]">
              About Ankh GRC
            </p>

            <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] md:text-6xl lg:text-[76px]">
              Governance for a world{" "}
              <span className="text-[#ff5a00]">
                that keeps changing.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#9da7a3] md:text-lg">
              Business today operates at the intersection of technology,
              regulation, data, cybersecurity and artificial intelligence.
              Ankh GRC helps organizations navigate that complexity through
              practical governance, measurable controls and confident
              decision-making.
            </p>
          </div>

          <div className="relative mx-auto flex h-[360px] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.025]">
            <div className="absolute h-56 w-56 rounded-full border border-[#ff5a00]/40 shadow-[0_0_0_35px_rgba(255,90,0,0.03),0_0_0_70px_rgba(255,90,0,0.02)]">
              <div className="absolute inset-6 rounded-full border border-dashed border-[#ff5a00]/30" />
              <div className="absolute inset-16 rounded-full border border-[#ff5a00]/30" />
            </div>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#ff5a00] bg-[#ff5a00]/10 text-lg font-bold text-[#ff5a00]">
              GRC
            </div>
          </div>
        </div>
      </section>

      {/* WHY ANKH GRC */}
      <section className="bg-[#f4f1eb] py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Why Ankh GRC
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Compliance should enable business — not slow it down.
          </h2>

          <p className="mt-7 max-w-4xl text-base leading-8 text-[#68706c] md:text-lg">
            Regulatory requirements are becoming more complex. Technology is
            changing faster than traditional governance models can adapt. AI
            is introducing new risks and responsibilities. Data is moving
            across borders, while organizations are expected to demonstrate
            not only that they are compliant — but that they can prove it.
          </p>

          <p className="mt-7 max-w-4xl text-base leading-8 text-[#68706c] md:text-lg">
            Ankh GRC bridges the gap between{" "}
            <strong className="text-[#171b19]">
              Regulation → Risk → Technology → Controls → Evidence → Business.
            </strong>
          </p>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-[#ebe8e1] py-24 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              Our Purpose
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              To make governance practical.
            </h2>
          </div>

          <div className="border-l-2 border-[#ff5a00] pl-7 md:pl-9">
            <h3 className="text-2xl font-medium">
              Governance should work in the real world.
            </h3>

            <p className="mt-5 text-base leading-8 text-[#68706c]">
              Governance should not exist only inside policies, audit reports
              or compliance checklists.
            </p>

            <p className="mt-5 text-base leading-8 text-[#68706c]">
              It should be embedded into the way organizations make decisions,
              manage risk, protect information, use technology, deploy AI,
              work with third parties, move data and demonstrate accountability.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-[#f4f1eb] py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Our Expertise
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Multiple disciplines.
            <br />
            One governance perspective.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#68706c] md:text-lg">
            We connect governance disciplines that are often managed
            separately, creating a more integrated view of organizational risk
            and compliance.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px border border-[#d8d4cc] bg-[#d8d4cc] sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="min-h-[190px] bg-[#f4f1eb] p-7 transition-all duration-300 hover:bg-[#ebe8e1]"
              >
              

                <h3 className="mt-6 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#68706c]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#111412] py-24 text-[#f4f1eb] md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Our Approach
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            From requirements
            <br />
            to readiness.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#9da7a3] md:text-lg">
            We believe effective governance is a journey — not a one-time
            compliance exercise.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="min-h-[220px] bg-[#111412] p-8"
              >
             

                <h3 className="mt-6 text-xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#9da7a3]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="bg-[#f4f1eb] py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            The Shift
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Built for the new
            <br />
            regulatory era.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#68706c] md:text-lg">
            The traditional compliance model is changing. Organizations are
            moving from periodic compliance activities toward continuous,
            intelligent and integrated governance.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#d8d4cc] p-8 md:p-10">
              <h3 className="text-2xl font-medium">Yesterday</h3>

              <ul className="mt-6">
                {[
                  "Periodic assessments",
                  "Manual compliance reviews",
                  "Static policies",
                  "Reactive remediation",
                  "Siloed responsibilities",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-b border-[#d8d4cc] py-3 text-[#68706c]"
                  >
                    → {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#ff5a00]/40 bg-[#ff5a00]/[0.06] p-8 md:p-10">
              <h3 className="text-2xl font-medium">Tomorrow</h3>

              <ul className="mt-6">
                {[
                  "Continuous governance",
                  "Intelligent monitoring",
                  "Dynamic regulatory intelligence",
                  "Risk-based decision making",
                  "Integrated accountability",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-b border-[#d8d4cc] py-3 text-[#68706c]"
                  >
                    → {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="bg-[#111412] py-24 text-[#f4f1eb] md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <div className="rounded-2xl border border-[#ff5a00]/25 bg-[#ff5a00]/[0.025] p-8 md:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
              Our Perspective on AI
            </p>

            <h2 className="mt-4 max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl">
              AI is not only a technology challenge.
              <br />
              It is a governance challenge.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#9da7a3] md:text-lg">
              Organizations adopting AI increasingly need to answer questions
              around data, accountability, transparency, security, privacy,
              risk and regulatory compliance.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {questions.map((question) => (
                <div
                  key={question}
                  className="rounded-lg border border-white/10 bg-white/[0.02] p-5 text-sm text-[#9da7a3]"
                >
                  <span className="mr-3 font-bold text-[#ff5a00]">?</span>
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="bg-[#f4f1eb] py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Our Difference
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Practical. Integrated.
            <br />
            Forward-looking.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#68706c] md:text-lg">
            We don't view governance disciplines as separate boxes. We connect
            them to create a more complete picture of organizational risk,
            responsibility and resilience.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "Clarity",
                text: "Understand what matters, what is changing and why it matters to your organization.",
              },
              {
                title: "Control",
                text: "Translate requirements into practical actions, processes, responsibilities and measurable controls.",
              },
              {
                title: "Confidence",
                text: "Create evidence and assurance that can stand up to internal, client and regulatory scrutiny.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t-2 border-[#ff5a00] bg-[#ebe8e1] p-8 md:p-10"
              >
                <h3 className="text-2xl font-medium">{item.title}</h3>

                <p className="mt-4 leading-7 text-[#68706c]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-[#ebe8e1] py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Who We Work With
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Built for organizations
            <br />
            operating in complexity.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#68706c] md:text-lg">
            We support organizations operating in highly regulated,
            technology-intensive or rapidly evolving environments.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#d0ccc4] px-5 py-3 text-sm text-[#68706c]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="bg-[#f4f1eb] py-24 text-center md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Our Commitment
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Governance that creates confidence.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#68706c] md:text-lg">
            We believe the strongest organizations will not be those that
            simply respond to regulation.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#68706c] md:text-lg">
            They will be those that{" "}
            <strong className="text-[#171b19]">
              anticipate change, understand risk and build governance into the
              way they operate.
            </strong>
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#68706c] md:text-lg">
            Ankh GRC exists to help organizations make that transition.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111412] py-28 text-center text-[#f4f1eb]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5a00]">
            Start a Conversation
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Is your governance ready for what comes next?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#9da7a3] md:text-lg">
            Regulations will change. Technology will evolve. AI will
            accelerate. Risks will shift. Your governance framework needs to
            evolve with them.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#ff5a00] px-7 py-4 text-sm font-semibold text-[#111412] transition-transform duration-300 hover:-translate-y-1"
          >
            Let's Build It Together
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer/>
    </main>
  );
}