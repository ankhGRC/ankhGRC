"use client";
import { Navigation } from "@/components/landing/navigation";
import { useState } from "react";

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
  const [selectedCapability, setSelectedCapability] = useState(
    "Enterprise Risk Management (ERM)"
  );

  return (
    <main className="min-h-screen w-full bg-white text-[#071a35]">
      {/* =========================================================
          1. NAVBAR - NOT STICKY
      ========================================================= */}
      <Navigation />

      {/* =========================================================
          2. BREADCRUMB
          DIRECTLY BELOW NAVBAR
      ========================================================= */}
      <div className="w-full pt-23 border-b border-black/15 bg-white">
        <div className="mx-auto flex min-h-[58px] w-full items-center px-10 lg:px-16">

          <div className="flex flex-wrap items-center gap-4 text-[18px] font-semibold text-[#071a35]">

            <span>ANKH GRC</span>

            <span className="text-[26px] font-normal text-black/50">
              ›
            </span>

            <span>Consulting</span>

            <span className="text-[26px] font-normal text-black/50">
              ›
            </span>

            <span>Risk consulting</span>

            <span className="text-[26px] font-normal text-black/50">
              ›
            </span>

            <span>
              Governance, Risk and Compliance
            </span>

          </div>

        </div>
      </div>


      {/* =========================================================
          3. HERO / TITLE
      ========================================================= */}
      <section className="relative h-[660px] w-full bg-[#e65300]">

        <div className="absolute bottom-0 left-0 w-[65%] h-[200px] bg-[#dfe4e8] px-20 py-12">

          <h1 className="text-[44px] font-normal leading-[1.15] tracking-[-0.02em] text-[#071a35]">
            Governance, Risk and Compliance
          </h1>

        </div>

      </section>


      {/* =========================================================
          4. INTRO CONTENT
          TEXT LEFT + IMAGE RIGHT
      ========================================================= */}
      <section className="w-full bg-[#f7f7f7] px-10 py-16 lg:px-16">

        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">

          {/* LEFT - TEXT */}
          <div className="max-w-[700px]">

            <p className="text-[22px] leading-[1.8] text-[#071a35]">
              Today’s rapidly changing geo-political, business, and regulatory
              environment requires rethinking about risk in new ways.
              Management is constantly struggling with increasingly demanding
              requirements while optimising the governance structure, to build
              trust, drive efficiency and to remain competitive.
            </p>

            <p className="mt-8 text-[22px] leading-[1.8] text-[#071a35]">
              Implementing the suitable Governance, Risk and Compliance (GRC)
              framework will enable organisations to identify the right approaches
              which contribute to improved risk management, enhanced process
              efficiency, and strengthened internal controls and compliances.
              Taking an innovative approach to managing and enhancing your GRC
              capabilities can help you seize opportunities, stay a step ahead
              of uncertainty, and meet stakeholder expectations.
            </p>

          </div>


          {/* RIGHT - IMAGE */}
          <div className="flex items-start justify-end">

            <img
              src="/grc-city.jpg"
              alt="Governance, Risk and Compliance"
              className="h-auto w-full max-w-[760px] object-cover"
            />

          </div>

        </div>


        {/* FULL WIDTH TEXT BELOW */}
        <div className="mx-auto mt-20 w-full max-w-[1500px]">

          <p className="text-[22px] leading-[1.8] text-[#071a35]">
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
          5. PwC's Risk Capabilities
      ========================================================= */}
      <section className="w-full bg-white px-10 py-20 lg:px-16">

        <div className="mx-auto w-full max-w-[1500px]">

          <h2 className="mb-20 text-[48px] font-normal leading-[1.15] tracking-[-0.02em] text-[#071a35]">
            PwC's Risk Capabilities
          </h2>


          {/* =====================================================
              6. CAPABILITY LIST
              RIGHT SIDE CONTENT WILL BE ADDED LATER
          ===================================================== */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[530px_1fr]">

            {/* LEFT LIST */}
            <div className="w-full">

              {riskCapabilities.map((item) => (
  <button
    key={item}
    type="button"
    onClick={() => setSelectedCapability(item)}
    className={`mb-3 flex min-h-[72px] w-full items-center px-5 py-5 text-left text-[22px] leading-[1.4] transition-colors ${
      selectedCapability === item
        ? "bg-[#e65300] text-white"
        : "bg-[#f0f0f0] text-[#071a35] hover:bg-[#e8e8e8]"
    }`}
  >
    <span>{item}</span>
  </button>
))}

            </div>


{/* =====================================================
    RIGHT SIDE CONTENT
===================================================== */}
<div className="min-h-[700px] pl-4 lg:pl-5">

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

        </div>

      </section>

    </main>
  );
}