"use client";
import { Navigation } from "@/components/landing/navigation";
import { useState, type WheelEvent } from "react";

const riskCapabilities = [
  "Enterprise Risk Management (ERM)",
  "Internal audit services",
  "Controls assessment and optimisation",
  "Revenue assurance",
  "Project governance and insights (Capex)",
  "Business process management",
  "Commercial assurance: Risk management solutions",
  "Business process design and performance improvement",
  "Corporate governance framework",
  "Policy governance and business process risk management",
  "Operations, Governance and Risk Management / Plant Operations Review",
  "Cost assurance and optimisation services",
  "Supply chain risk management and resilience",
  "Finance process optimisation",
  "Sales channel risk management and compliance",
  "Customer risk management",
];

export default function ConsultingPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedCapability = riskCapabilities[selectedIndex];

  const selectCapability = (index: number) => {
    setSelectedIndex(index);
  };

  const moveCapability = (direction: 1 | -1) => {
    setSelectedIndex((current) => {
      const next = current + direction;

      if (next < 0) return riskCapabilities.length - 1;
      if (next >= riskCapabilities.length) return 0;

      return next;
    });
  };

  const handleCapabilityWheel = (
    event: WheelEvent<HTMLDivElement>
  ) => {
    if (Math.abs(event.deltaY) < 10) return;

    event.preventDefault();
    moveCapability(event.deltaY > 0 ? 1 : -1);
  };

  const getRelativePosition = (index: number) => {
    let position = index - selectedIndex;
    const total = riskCapabilities.length;

    if (position > total / 2) position -= total;
    if (position < -total / 2) position += total;

    return position;
  };

  return (
    <main className="min-h-screen w-full bg-white text-[#071a35]">
      {/* =========================================================
          1. NAVBAR
      ========================================================= */}
      <Navigation />

      {/* =========================================================
          2. HERO - DARK
      ========================================================= */}
      <section className="relative h-233 overflow-hidden bg-[#111211] text-white">
        <div className="mx-auto grid min-h-[650px] w-full max-w-[1500px] items-center gap-16 px-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          {/* LEFT */}
          <div className="max-w-[700px]">
            <p className="mb-7 p-10 text-[18px] font-semibold uppercase tracking-[0.34em] text-[#e65300]">
              ANKH GRC / CONSULTING
            </p>

            <h1 className="max-w-[760px] text-[58px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[72px] lg:text-[86px]">
              Governance,
              <br />
              Risk &amp;
              <br />
              Compliance
            </h1>

            <p className="mt-10 max-w-[680px] text-[28px] leading-[1.7] text-white/65 sm:text-[21px]">
              Helping organisations strengthen governance, manage risk and improve
              business performance through practical GRC solutions.
            </p>

            <div className="mt-10 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-16 bg-[#e65300]" />
              <span>Secure. Compliant. Future Ready.</span>
            </div>
          </div>

          {/* RIGHT - GRC VISUAL, NO STOCK IMAGE */}
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute -inset-10 rounded-full bg-[#e65300]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#181a19] p-7 shadow-2xl sm:p-9">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#e65300]">
                  ANKH GRC
                </p>
                <span className="h-3 w-3 rounded-full bg-[#e65300] shadow-[0_0_22px_rgba(230,83,0,0.7)]" />
              </div>

              <p className="mt-14 text-[11px] uppercase tracking-[0.32em] text-white/35">
                Integrated framework
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["G", "Governance"],
                  ["R", "Risk"],
                  ["C", "Compliance"],
                ].map(([letter, label]) => (
                  <div
                    key={letter}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="text-[42px] font-medium leading-none text-white">
                      {letter}
                    </div>
                    <div className="mt-5 text-[12px] text-white/45">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/35">
                  <span>Connected</span>
                  <span className="text-[#e65300]">G · R · C</span>
                </div>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-[#e65300]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. INTRO - WHITE
          EXISTING COPY KEPT UNCHANGED
      ========================================================= */}
      <section className="w-full bg-[#f7f7f5] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#e65300]">
              WHY GRC MATTERS
            </p>
            <h2 className="mt-7 max-w-[520px] text-[48px] font-medium leading-[0.98] tracking-[-0.04em] text-[#111211] sm:text-[62px]">
              Stronger governance.
              <br />
              Smarter risk.
            </h2>
          </div>

          <div className="max-w-[900px] text-[19px] leading-[1.75] text-[#536170] sm:text-[21px]">
            <p>
              Today’s rapidly changing geo-political, business, and regulatory
              environment requires rethinking about risk in new ways.
              Management is constantly struggling with increasingly demanding
              requirements while optimising the governance structure, to build
              trust, drive efficiency and to remain competitive.
            </p>

            <p className="mt-8">
              Implementing the suitable Governance, Risk and Compliance (GRC)
              framework will enable organisations to identify the right approaches
              which contribute to improved risk management, enhanced process
              efficiency, and strengthened internal controls and compliances.
              Taking an innovative approach to managing and enhancing your GRC
              capabilities can help you seize opportunities, stay a step ahead
              of uncertainty, and meet stakeholder expectations.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-[1500px] border-t border-black/10 pt-10">
          <p className="max-w-[1280px] text-[19px] leading-[1.75] text-[#536170] sm:text-[21px]">
            Our work comprises helping companies design, review, revamp and
            benchmark their GRC practices and business process controls
            performance. By aligning GRC activities to business performance
            drivers, we help transform the function to anticipate and mitigate
            risk and deliver business performance. Our teams bring specialty
            skills and industry experience to provide you with the practical
            implementation insights.
          </p>
        </div>
      </section>

      {/* =========================================================
          4. RISK CAPABILITIES
          Vertical capability cards + full-width selected content
          ========================================================= */}
      <section className="w-full overflow-hidden bg-[#111211] text-white">
        <div className="mx-auto w-full max-w-[1500px] px-6 py-20 lg:px-10 lg:py-24">

          {/* SECTION HEADING */}
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#e65300]">
                OUR CAPABILITIES
              </p>

              <h2 className="mt-5 text-[46px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[60px]">
                ANKH GRC&apos;s Risk Capabilities
              </h2>
            </div>

          </div>

          {/* TWO-COLUMN CONTENT */}
          <div className="grid items-start gap-14 lg:grid-cols-[0.72fr_1.28fr] xl:gap-20">

            {/* =====================================================
                LEFT — VERTICAL SCROLLABLE CARDS
                ===================================================== */}
            <div className="relative">

              <div className="pr-3">
                <div className="space-y-3">
                  {riskCapabilities.map((item, index) => {
                    const isActive = index === selectedIndex;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => selectCapability(index)}
                        className={`group relative flex min-h-[86px] w-full items-center gap-5 rounded-[18px] border px-6 py-5 text-left transition-all duration-300 ${
                          isActive
                            ? "border-[#e65300] bg-[#1a1c1b] shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
                            : "border-white/10 bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.055]"
                        }`}
                      >
                        {/* orange active indicator */}
                        <span
                          className={`absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-r-full transition-all duration-300 ${
                            isActive ? "bg-[#e65300]" : "bg-transparent"
                          }`}
                        />

                        <span
                          className={`shrink-0 text-[10px] font-semibold tracking-[0.25em] ${
                            isActive ? "text-[#e65300]" : "text-white/30"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`text-[20px] leading-5 transition-colors duration-300 ${
                            isActive
                              ? "font-medium text-white"
                              : "text-white/55 group-hover:text-white/85"
                          }`}
                        >
                          {item}
                        </span>

                        <span
                          className={`ml-auto shrink-0 text-lg transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 text-[#e65300] opacity-100"
                              : "-translate-x-1 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        >
                          →
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* =====================================================
                RIGHT — NO BOX / NO HEIGHT LIMIT
                Full half-column for the selected description
                ===================================================== */}
            <div
              key={selectedCapability}
              className="min-w-0 overflow-visible"
            >
              {/* Selected capability heading */}
              <div className="border-b border-white/10 pb-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#e65300]">
                      SELECTED CAPABILITY
                    </p>

                    <p className="mt-3 text-[11px] tracking-[0.18em] text-white/30">
                      {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                      {String(riskCapabilities.length).padStart(2, "0")}
                    </p>
                  </div>

                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#e65300] shadow-[0_0_18px_rgba(230,83,0,0.65)]" />
                </div>
              </div>

              {/* Original capability content.
                  It is intentionally NOT inside a card and has no fixed height. */}
              <div className="pt-8">
                          <div className="max-w-[1250px] text-white [&_h3]:text-white [&_p]:text-white/70 [&_li]:text-white/70 [&_strong]:text-white">
  {selectedCapability === "Enterprise Risk Management (ERM)" && (
    <>
      <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
        Enterprise Risk Management (ERM)
      </h3>

      <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
        We work with our clients to design, review and implement operating
        models for effective Enterprise Risk Management (ERM) solutions by
        leveraging proprietary frameworks, tools and methodologies which are
        customisable to clients’ specific needs and maturity. We also have deep
        expertise in areas such as risk appetite articulation, integrated
        compliance and risk models, and Key Risk Indicator (KRI) based monitoring.
      </p>

      <p className="mt-10 text-[22px] font-bold leading-[1.5] text-[#071a35]">
        Our engagement drives a broad range of benefits including:
      </p>

      <ul className="mt-7 space-y-7">
        {[
          "Informed risk decision making",
          "Consistent and robust identification and mitigation of all key risks",
          "Clarity in accountability and ownership",
          "Improved view of key mitigation plans",
          "Proactive, risk aware culture across the organisation",
          "Assurance to the Board and Audit Committee",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]"
          >
            <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  )}


  {selectedCapability === "Internal audit services" && (
    <>
      <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
        Internal audit services
      </h3>

      <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
        An increasingly complex and changing business environment coupled by
        ever accelerating adoption of newer technologies, poses interesting
        challenges to the Internal Audit (IA) function in meeting expectations
        of all stakeholders.
      </p>

      <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
        Whether you need assistance in setting up an IA function, transforming
        existing function, outsource/co-source the planning and delivery of the
        IA requirements, we can propose a customised solution using our
        expertise and state-of-the-art tools and technology.
      </p>

      <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
        Our IA advisory services offer clarity on maximising the value of your
        function. We can assist in developing audit maturity assessments,
        implementing relevant methodologies, providing internal audit training
        to upskill your team, and conducting quality assurance reviews to ensure
        compliance with audit standards.
      </p>

      <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
        Our services aim to enhance your IA function in multiple ways. Through
        managed service (outsourcing) and partnering (co-sourcing), we improve
        the capability, flexibility, and effectiveness of your internal audit,
        while also delivering better risk coverage and reducing costs. We help
        create value and relevance within your internal audit function,
        promoting innovation and efficient resource allocation tailored to your
        company's needs.
      </p>

      <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
        Additionally, we provide staff secondments, offering access to
        experienced professionals who can be integrated into your team. This
        allows you to enhance your internal audit competency by leveraging their
        industry and subject matter knowledge.
      </p>
    </>
  )}

  {selectedCapability === "Controls assessment and optimisation" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Controls assessment and optimisation
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      Our GRC team offers a specialised service to help organisations evaluate
      and enhance their internal controls. Their comprehensive assessments of
      control mechanisms and processes across various functions identify
      deficiencies and provide recommendations for improvement by leveraging
      industry best practices. The team helps organisations proactively address
      control weaknesses which helps them mitigate risks and safeguard their
      operations and reputation. To help management have confidence in the
      control environment, our teams create visibility of the effectiveness of
      controls by using advanced data analytics and visualisation tools.
    </p>

    <ul className="mt-10 space-y-7">
      {[
        "Fit for purpose controls",
        "Operational effectiveness",
        "Streamlining and simplification of processes and controls",
        "Control automation",
        "Risk visualisation",
        "Industries",
      ].map((item) => (
        <li
          key={item}
          className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]"
        >
          <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </>
)}

{selectedCapability === "Revenue assurance" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Revenue assurance
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      Revenue Assurance is aimed to plug revenue leakages along the entire
      value chain. Revenue leakages represent missed revenue opportunities
      (e.g., unbilled and under billed charges, delayed cash flows, written off
      revenues, etc.). Common causes for revenue leakage include inadequate
      controls around complexity in products, bundles/discounts, manual
      interventions, multiple handoffs, change in programmes impacting systems
      and processes. Key components of the solutions include:
    </p>

    <ul className="mt-10 space-y-7">
      {[
        "Revenue Leakage Minimisation and Cost Management",
        "Data analytics along the revenue processes to identify revenue leakage",
        "Independent testing, reconciliations and re-modelling of business rules and re-rating on our own systems to assure revenue",
        "Independent review of new revenue areas/ business model changes",
        "Proactive Monitoring",
        "Development of dashboards for reporting KPIs",
        "Report on transactions trends and processing errors",
        "Sustainability of Revenue Leakage Efforts",
        "Development of target operating model",
        "Training",
        "Outsourcing/co-sourcing revenue assurance functions",
        "Monitor, Detect and Fix Revenue Leakage",
        "Requirements gathering and data acquisition",
        "Data analysis and reconciliation",
        "Root cause analysis",
        "Reporting System Implementation",
        "Confirmation and prioritisation of test cases and desired reporting based on high-risk areas identified in the analysis.",
        "Development and testing of ETL, data models, reports, self-service dashboards and visualisations for reporting.",
        "Set up Alert Monitoring and Management Process",
        "Setting up of alerting thresholds and scenarios where users will be informed of possible incidents of revenue leakage",
        "Establishment of Alert Management Workflow",
      ].map((item) => (
        <li
          key={item}
          className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]"
        >
          <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </>
)}

{selectedCapability === "Project governance and insights (Capex)" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Project governance and insights (Capex)
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      The growth plans of organisations are linked with timely completion of
      development projects. It is equally important to have the right
      governance mechanism to ensure delivery of projects within the desired
      parameters (time, cost, quality, compliances). Our 'Project governance
      and insights' solution addresses the key challenges faced by clients
      today;
    </p>

    <ul className="mt-10 space-y-7">
      <li className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]">
        <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
        <span>
          <strong>On-time project completion:</strong> On-time project
          completion through efficient planning and governance of projects
          (schedule vs. onsite progress, contractor's performance, other
          project completion risks); recommendations to improve the control
          over timeline.
        </span>
      </li>

      <li className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]">
        <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
        <span>
          <strong>Budget and cost-control:</strong> Opportunities of cost
          optimisation based on our industry experience and proactive
          identification of potential cost overruns; recommendations to
          improve the control over budget and cost.
        </span>
      </li>

      <li className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]">
        <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
        <span>
          <strong>Design control:</strong> Adherence with design
          principles/guidelines to avoid rework and project delayed by client.
        </span>
      </li>

      <li className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]">
        <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
        <span>
          <strong>Compliances:</strong> Adherence with safety and compliance
          guidelines at the project site.
        </span>
      </li>

      <li className="flex items-start gap-4 text-[21px] leading-[1.5] text-[#071a35]">
        <span className="mt-[11px] h-[10px] w-[10px] shrink-0 bg-[#e65300]" />
        <span>
          Our deep techno-commercial capabilities with experience of delivering
          more than 100 similar engagements enables us to deliver exceptional
          value to our clients across segments (plants & factories, roads &
          highways, real estate, data centre, hospitals, hotels, retail stores,
          warehouses etc.). Our partnership approach enables clients to
          strengthen and deliver their business plans effectively.
        </span>
      </li>
    </ul>
  </>
)}

{selectedCapability === "Business process management" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Business process management
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      Process mining is an approach to identify As-Is business processes by
      analysing the digital footprint retained in the system from every
      transaction. It analyses data generated in the organisation and gives
      maximum visibility by reconstructing the process maps and advises on how
      to improve business controls and operations. Improvement opportunities
      include identification of inconsistencies or abnormalities in business
      process compliance, finding levers to reduce the cost of business
      processes, classifying and prioritising top automation opportunities.
    </p>
  </>
)}

{selectedCapability === "Commercial assurance: Risk management solutions" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Commercial assurance: Risk management solutions
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      Commercial assurance involves identifying, validating and managing the
      risks associated with third party contracts. It gives you the opportunity
      to drive savings, process enhancements and knowledge transfer, while also
      ensuring compliance. Inadequate third-party contract management practices
      can hurt your bottom line and increase the risks of financial losses,
      damage to your company's reputation and possible regulatory issues.
    </p>
  </>
)}

{selectedCapability === "Business process design and performance improvement" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Business process design and performance improvement
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      Our solution includes design/review/redesign of business processes
      (standard operating procedures) by improving the control environment,
      enhancing efficiency and effectiveness and reducing cost. Our teams
      bring a deep understanding of supply chain, finance, IT systems,
      operations and human resources; and we use extensive data and identify
      improvement opportunities. We also provide detailed process narratives
      along with the KPIs, key risks and controls, responsibility matrix,
      delegation of authority, key MISs, etc. in various formats which are
      used by clients to standardise the processes and to provide role clarity
      and instructions to the teams.
    </p>
  </>
)}

{selectedCapability === "Corporate governance framework" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Corporate governance framework
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      We support clients in establishing robust corporate governance framework
      and driving sustainable value creation by a structured three step
      approach:
    </p>

    <ul className="mt-10 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Review of current state of framework</strong> - Includes
          comprehensive review of existing governance structures, policies and
          procedures
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Perform maturity/gap assessment</strong> - Through a
          structured governance maturity matrix, identify improvement
          opportunities and provide ratings
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Development of governance roadmap</strong> - Establish a
          forward-looking roadmap for implementation of recommendations with
          prioritisation and immediate implementation support
        </span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
      Current state assessment through a governance maturity assessment matrix
      provides valuable insights to company's current positioning and serves
      as a foundation for clear vision towards strategic objectives.
    </p>
  </>
)}

{selectedCapability === "Policy governance and business process risk management" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Policy governance and business process risk management
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      This entails a detailed review of policies and processes, focusing on
      identifying enhancement and optimisation opportunities across the
      organisation using controls, automation, processesand efficiencies as
      levers.
    </p>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      We support clients in achieving objectives of operational efficiency and
      stregthen control framework through a structured approach including:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Diagnose</strong> - An exhaustive analysis of current
          processes, policies, and operating models to evaluate maturity and
          performance levels.
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Design</strong> - Identification of enhancement prospects
          through gap analysis, providing innovative and actionable
          recommendations focused on sustainable cost optimisation.
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Deploy and manage</strong> - Support in implementation of
          recommendations to ensure alignment between anticipated outcomes and
          stakeholder expectations
        </span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      We delivered benefits through:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Process redifination/ improvement</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Operating model and organization structure alignment</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Tools and Technology to sustain productivity</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Reduction in cost leakages and enhancement opportunities</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Monitoring framework</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Change Management via people initiative</span>
      </li>
    </ul>
  </>
)}

{selectedCapability === "Operations, Governance and Risk Management / Plant Operations Review" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Operations, Governance and Risk Management / Plant Operations Review
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      We collaborate with our clients to conduct a thorough review of plan
      operations value chain, focusing on achieving objectives of maximised
      operational performance across key cost levers - yield and scrap
      management, inventory holding and optimisation, overhead cost management,
      and managing efficiency.
    </p>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      We support clients in achieving objectives of cost transparency and
      control assurance through a structured approach including:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Diagnose</strong> - detailed review of current processes,
          operating model, cost drivers for assessing maturity and performance
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Design</strong> - identification of improvement opportunities
          through gap assessment and providing leading actionable recommendations
          for sustainable cost outcomes
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Deploy and Manage</strong> - assistance by SOP/ process
          implementation support, PMO support for automation initiatives and
          quantification of cost savings, concurrent monitoring of key plant
          initiatives and SLAs
        </span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
      Our engagements have delivered benefits around improved cost visibility,
      enhanced operational efficiency, data driven decision making through
      automations, stregthened governance, compliance &amp; risk oversight.
    </p>
  </>
)}


{selectedCapability === "Cost assurance and optimisation services" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Cost assurance and optimisation services
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      We collaborate with our clients to conduct a thorough review of cost
      value chain, focusing on achieving objectives of controls and cost
      efficiency and operational excellence through our expert cost
      optimisation solutions across key cost levers - material costs, indirect
      expenditures, capital investment and project spending.
    </p>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      Our approach focuses on precise cost analysis, strategic process redesign
      and effective implementation to deliver tangible results through a
      structured approach including:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Diagnose</strong> - detailed review of current processes,
          operating model, cost drivers for assessing maturity and performance
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Design</strong> - identification of improvement opportunities
          through gap assessment and providing leading actionable recommendations
          for sustainable cost outcomes
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Deploy and Manage</strong> - assistance by PMO support for key
          capex initiatives, ERP implementations, concurrent monitoring of key
          contracts and SLAs, post implementation support/ assessments,
          analytics and MIS reporting
        </span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
      Our collaborations with clients have consistently yielded exceptional
      benefits around optimised cost, enhanced operational efficiency, data
      driven decision making through smart automation, fortified compliance and
      risk management.
    </p>
  </>
)}

{selectedCapability === "Supply chain risk management and resilience" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Supply chain risk management and resilience
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      Conduct a thorough review of supply value chain, focusing on achieving
      objectives of maximised operational performance across key domains such as
      demand and operations planning, materials management, network
      optimisation, and supply chain quality assurance.
    </p>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      Our assistance helps clients attain cost transparency and control
      assurance through a methodical approach comprising:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Diagnose</strong> - A comprehensive evaluation of existing
          processes, operating models, and cost drivers to assess maturity and
          performance levels.
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Design</strong> - Identification of improvement opportunities
          via gap analysis, coupled with the provision of cutting-edge,
          actionable recommendations aimed at sustainable cost optimisation.
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          <strong>Deploy and manage</strong> - Facilitation of implementation
          processes to ensure coherence between projected outcomes and
          stakeholder expectations.
        </span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
      Our engagements have consistently yielded substantial benefits,
      including enhanced cost control, increased operational efficiency,
      data-driven decision-making capabilities facilitated by automation,
      strengthened governance and compliance frameworks, and robust risk
      mitigation strategies. This comprehensive approach ensures a strategic
      alignment with our clients’ business objectives, maximising value across
      the value chain.
    </p>
  </>
)}

{selectedCapability === "Finance process optimisation" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Finance process optimisation
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      We understand the evolving challenges faced by the CFO Office and provide
      solutions around three key focus areas - Core finance operations,
      management reporting (MIS) framework and ERP utilisation and automation.
      Our tailored solutions include:
    </p>

    <ul className="mt-10 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          Tactical or core operations re-engineering - including solutions for
          chart of accounts review and standardisation, financial reconciliation
          and consolidation automation, book closure lifeycle optimisation
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          Management reporting framework enhancement and automation to ensure
          non negotiables of MIS i.e. accuracy, timeliness, integrity and
          consistency
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          ERP optimal utilisation and automation enhancement through a two-step
          tailor-made approach including future readiness assessment of ERP
          readiness and identification of improvement opportunities, followed
          by implementation of agreed improvements
        </span>
      </li>
    </ul>
  </>
)}


{selectedCapability === "Sales channel risk management and compliance" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Sales channel risk management and compliance
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      We provide a holistic portfolio of sales channel risk management and
      compliance solutions, meticulously crafted to empower clients to maximise
      the potential of their sales networks while mitigating associated risks
      and fostering enduring value creation. Our services encompass:
    </p>

    <ul className="mt-10 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Sales strategy audit</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Channel risk optimisation</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Sales expenditure and ROI analysis</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Distributor and partner experience assessment</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Net promoter score evaluation</span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      The role of advanced sales channel risk management and compliance is
      pivotal in:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>
          Guaranteeing product and service availability at competitive pricing
        </span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Deteriorating unethical sales channel practices</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Refining the sales channel ecosystem</span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
      Through these strategic solutions, we ensure that our clients not only
      sustain but also amplify their market positions.
    </p>
  </>
)}

{selectedCapability === "Customer risk management" && (
  <>
    <h3 className="text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#071a35]">
      Customer risk management
    </h3>

    <p className="mt-16 text-[22px] leading-[1.55] text-[#071a35]">
      We offer a comprehensive suite of customer risk management services that
      span the entire customer interaction journey, from evaluating customer
      touchpoints to optimising the efficiency of customer service operations.
      Our bespoke solutions are meticulously designed to align with the
      distinct requirements of clients.
    </p>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      Our service offerings include:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Customer segmentation and risk assessment</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Customer experience optimisation</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Customer lifecycle management</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Customer service operational excellence</span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] font-bold leading-[1.55] text-[#071a35]">
      By leveraging a human-centric, technology-driven approach, we have
      consistently delivered sustainable business outcomes, which include:
    </p>

    <ul className="mt-7 space-y-7 text-[22px] leading-[1.55] text-[#071a35]">
      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Increased customer satisfaction and loyalty</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Proactive risk detection</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Competitive edge</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Informed, data-driven decision-making</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Enhanced operational efficiency</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Robust regulatory compliance</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Strengthened security protocols</span>
      </li>

      <li className="flex gap-4">
        <span className="mt-3 h-2.5 w-2.5 shrink-0 bg-[#e04f00]" />
        <span>Empirical insights and strategic recommendations</span>
      </li>
    </ul>

    <p className="mt-10 text-[22px] leading-[1.55] text-[#071a35]">
      Our expertise ensures that your organisation not only navigates but
      thrives in the dynamic business environment, translating customer
      interactions into long-term value.
    </p>
  </>
)}


          </div>
              </div>

              {/* Progress */}
              <div className="mt-12">
                <div className="mb-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.28em] text-white/25">
                  <span>Risk capabilities</span>
                  <span>
                    {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                    {String(riskCapabilities.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="h-px w-full bg-white/10">
                  <div
                    className="h-full bg-[#e65300] transition-all duration-500"
                    style={{
                      width: `${((selectedIndex + 1) / riskCapabilities.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
