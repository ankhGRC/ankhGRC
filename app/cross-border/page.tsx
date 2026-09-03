"use client";

import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const challenges = [
  {
    number: "01",
    title: "Regulatory Fragmentation",
    text: "20+ privacy frameworks, 50+ cyber regulations, different requirements per country. No single standard covers all regions.",
  },
  {
    number: "02",
    title: "Data Localization Mandates",
    text: "Some countries require data residency; others allow cross-border transfers with conditions. GDPR, PDPL, LGPD have different rules.",
  },
  {
    number: "03",
    title: "Enforcement & Penalties",
    text: "GDPR fines up to €20M or 4% revenue; Brazil LGPD up to 2% revenue; China PIPL carries criminal liability.",
  },
  {
    number: "04",
    title: "Operational Complexity",
    text: "Data processing workflows, consent mechanisms, breach notification timelines vary by region. Impossible to manage manually.",
  },
  {
    number: "05",
    title: "Third-Party Risk",
    text: "Vendors, cloud providers, processors operate across regions. Supply chain compliance requires multi-framework visibility.",
  },
  {
    number: "06",
    title: "Regulatory Evolution",
    text: "New frameworks emerging constantly: India's Digital Personal Data Protection Act, UK UK AI Bill, Middle East regulations.",
  },
];

const frameworks = [
  {
    icon: "◉",
    title: "European Union",
    items: [
      "GDPR (General Data Protection Regulation)",
      "UK GDPR (Post-Brexit)",
      "Digital Services Act (DSA)",
      "Digital Markets Act (DMA)",
      "ePrivacy Directive",
    ],
  },
  {
    icon: "◎",
    title: "Asia-Pacific",
    items: [
      "Singapore PDPA",
      "Japan APPI",
      "South Korea PIPA",
      "Thailand PDPA",
      "Hong Kong PDPO",
    ],
  },
  {
    icon: "◌",
    title: "Americas",
    items: [
      "Canada PIPEDA",
      "Brazil LGPD",
      "Mexico LFPDPPP",
      "US CCPA/CPRA (California)",
      "US State Privacy Laws",
    ],
  },
  {
    icon: "◇",
    title: "China & Special Zones",
    items: [
      "China PIPL (Personal Info Prot Law)",
      "Hong Kong PDPO",
      "Taiwan PDPA",
      "Mainland Data Security Law",
      "Cybersecurity Law",
    ],
  },
  {
    icon: "○",
    title: "Middle East & Africa",
    items: [
      "UAE GDPR-equivalent",
      "Saudi Arabia PDPL",
      "Egypt Data Protection Law",
      "South Africa POPIA",
      "Nigeria NDPR",
    ],
  },
  {
    icon: "✦",
    title: "Emerging Frameworks",
    items: [
      "India DPDP Act",
      "Indonesia PDP Regulation",
      "Philippines Data Privacy Act",
      "Vietnam Data Protection Decrees",
      "Future Regulations (tracking)",
    ],
  },
];

const regions = [
  {
    title: "GDPR Zone (EU/UK/EEA)",
    items: [
      "Strictest global privacy standard",
      "Consent-first approach (opt-in)",
      "Data subject rights (access, deletion, portability)",
      "DPA required for processing",
      "€20M or 4% revenue penalties",
    ],
  },
  {
    title: "APAC Cluster",
    items: [
      "Convergence toward GDPR model",
      "Singapore PDPA most mature",
      "Mixed consent approaches",
      "Emerging China data localization",
      "Data transfer restrictions (PIPL)",
    ],
  },
  {
    title: "Americas",
    items: [
      "CCPA/CPRA (California) leader",
      "22+ state privacy laws",
      "Brazil LGPD strict on rights",
      "US laws opt-out based",
      "Sector-specific laws (HIPAA, GLBA)",
    ],
  },
  {
    title: "China Special",
    items: [
      "PIPL (national standard)",
      "Mandatory data localization",
      "Data transfer restrictions strict",
      "Criminal liability possible",
      "Government access provisions",
    ],
  },
  {
    title: "Middle East",
    items: [
      "UAE laws emerging GDPR-like",
      "Saudi Arabia PDPL adopted",
      "Data sovereignty requirements",
      "Government consultation rights",
      "Rapidly evolving landscape",
    ],
  },
  {
    title: "Africa",
    items: [
      "POPIA (South Africa) most mature",
      "Pan-African data protection treaty",
      "Nigeria NDPR enforcement",
      "Emerging frameworks across continent",
      "Colonial law heritage varies",
    ],
  },
];

const approach = [
  {
    number: "01",
    title: "Global Regulatory Landscape Assessment",
    text: "Map all applicable frameworks by business geography, product scope, and data types. Identify regulatory gaps and overlaps.",
  },
  {
    number: "02",
    title: "Compliance Maturity & Gap Analysis",
    text: "Assess current state against highest standards. Identify control gaps, risks, and remediation priorities across regions.",
  },
  {
    number: "03",
    title: "Harmonized Compliance Framework",
    text: "Design unified policies meeting highest global standards (GDPR + CCPA + LGPD + PIPL equivalent). Adapt for local requirements.",
  },
  {
    number: "04",
    title: "Data Localization & Transfer Solutions",
    text: "Establish compliant data architecture: localization where required, transfers with adequate safeguards (Standard Contractual Clauses, BCRs).",
  },
  {
    number: "05",
    title: "Vendor & Third-Party Management",
    text: "Assess global supply chain against regional requirements. Implement Data Processing Agreements (DPAs) aligned with multiple frameworks.",
  },
  {
    number: "06",
    title: "Regional Compliance Implementation",
    text: "Deploy localized controls where required: consent mechanisms, right-to-delete procedures, breach notification workflows by jurisdiction.",
  },
  {
    number: "07",
    title: "Documentation & Evidence",
    text: "Maintain unified audit trail demonstrating compliance across frameworks. Document regulatory changes and impact assessments.",
  },
  {
    number: "08",
    title: "Continuous Monitoring & Update",
    text: "Track regulatory changes globally. Assess impact on operations. Update policies and procedures as new regulations emerge.",
  },
];

const benefits = [
  {
    icon: "01",
    title: "Global Operations Enabled",
    text: "Operate confidently across geographies with unified compliance framework meeting all regional requirements.",
  },
  {
    icon: "02",
    title: "Risk & Penalty Reduction",
    text: "Minimize exposure to regional penalties, fines, and enforcement actions across all jurisdictions.",
  },
  {
    icon: "03",
    title: "Operational Efficiency",
    text: "Unified policies reduce complexity. Standardized processes lower operational overhead and cost of compliance.",
  },
  {
    icon: "04",
    title: "Customer Trust",
    text: "Demonstrate compliance across regions. Enhanced confidence from global customer base and investors.",
  },
  {
    icon: "05",
    title: "Market Expansion",
    text: "Enter regulated markets confidently. Compliance framework enables expansion to GDPR-zone, China, and emerging markets.",
  },
  {
    icon: "06",
    title: "Competitive Advantage",
    text: "Differentiate through superior data governance across regions. Win compliance-sensitive contracts globally.",
  },
];

export default function CrossBorderPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111412] text-[#f4f1eb]">

   <Navigation />


      {/* ================= HERO ================= */}
      <section className="relative p-[28px] min-h-[720px] overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute -right-[20%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#ff6a00]/[0.07] blur-[130px]" />

        <div className="pointer-events-none absolute -left-[15%] bottom-[-30%] h-[650px] w-[650px] rounded-full border border-[#ff6a00]/10" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-10">

          <div className="max-w-6xl">

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-[#ff6a00]" />
              <span className="text-xs pt-8 font-semibold uppercase  text-orange-500">

                Cross-Border Governance
              </span>
            </div>

            <p className="mb-7 pt-10 text-lg font-medium tracking-[0.08em] text-white/55 lg:text-xl">
              Navigate Global. Comply Local. Compete Global.
            </p>

            <h1 className="max-w-6xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Cross-Border &{" "}
              <span className="text-[#ff6a00]">Supranational</span>{" "}
              Regulations Framework
            </h1>

            <p className="mt-9 max-w-4xl text-lg leading-8 text-white/55 lg:text-xl lg:leading-9">
              Organizations operating across geographies face complex, overlapping
              regulatory requirements. GDPR, PDPL, LGPD, PIPA, and emerging privacy
              frameworks create compliance challenges. Ankh GRC helps you navigate
              supranational regulations, harmonize compliance across regions, and
              maintain unified governance while respecting local requirements.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#frameworks"
                className="rounded-full bg-[#ff6a00] px-7 py-4 text-sm font-semibold text-[#111412] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7b22] hover:shadow-[0_15px_40px_rgba(255,106,0,0.22)]"
              >
                Explore Frameworks
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6a00]/60 hover:text-[#ff6a00]"
              >
                Get Strategy
              </a>

            </div>

          </div>
        </div>
      </section>

{/* ================= WHY CROSS-BORDER ================= */}
<section className="bg-[#f7f5f0] py-24 text-[#111412] lg:py-32">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    {/* Heading */}
    <div className="mb-14 max-w-4xl">

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
        Why it matters
      </p>

      <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
        Why Cross-Border
        <br />
        Compliance is Critical
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-black/55 sm:text-lg">
        Organizations operating across multiple geographies face unprecedented
        regulatory complexity. Without proper cross-border governance,
        compliance gaps emerge quickly.
      </p>

    </div>


    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {challenges.map((item, index) => (

          <article
            key={item.number}
            className={`
              group
              relative
              flex
              min-h-[430px]
              w-full
              flex-col
              justify-between
              overflow-hidden
              rounded-[18px]
              border
              border-white/[0.10]
              bg-[#151916]
              p-7
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#ff6a00]/45
              hover:bg-[#171a18]
            `}
          >{/* Top */}

            <div className="relative z-10">
              <div className="h-px w-16 bg-[#ff6a00] transition-all duration-500 group-hover:w-24" />
              <div className="mt-2 space-y-2">
                <div className="h-px w-full bg-white/[0.08]" />
                <div className="h-px w-[78%] bg-white/[0.045]" />
              </div>
            </div>


            {/* Content */}

            <div className="relative z-10">

              <div
                className="
                  mb-6
                  h-px
                  w-10
                  bg-[#ff6a00]
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              />

              <h3
                className="
                  max-w-[300px]
                  text-2xl
                  font-medium
                  leading-[1.1]
                  tracking-[-0.025em]
                  text-white
                  sm:text-3xl
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  max-w-[310px]
                  text-sm
                  leading-7
                  text-white/50
                  sm:text-[15px]
                "
              >
                {item.text}
              </p>

            </div>


            {/* Bottom */}

            <div className="relative z-10 flex items-center justify-between">

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                ANKH GRC
              </span>

              <span className="text-xs text-white/25">
                {String(index + 1).padStart(2, "0")} / 06
              </span>

            </div>


            {/* Bottom orange line */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                bg-[#ff6a00]
                transition-all
                duration-500
                group-hover:w-full
              "
            />

          </article>

        ))}

      </div>


  </div>

</section>


      {/* ================= FRAMEWORKS ================= */}
      <section
        id="frameworks"
        className="relative border-y border-white/10 bg-[#151916] py-28 lg:py-36"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-16 max-w-4xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
              Global coverage
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Global Privacy & Data Protection Frameworks
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">
              Comprehensive coverage of supranational and regional data protection regulations.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {frameworks.map((framework, index) => (
                <article
                  key={framework.title}
                  className="group relative h-[390px] w-full overflow-hidden rounded-[18px] border border-white/[0.10] bg-[#151916] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/45 hover:bg-[#171a18]"
                >

                

                  <div className="mt-10">

              

                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                      {framework.title}
                    </h3>

                  </div>

                  <ul className="mt-7 space-y-3">

                    {framework.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-white/50"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6a00]" />
                        {item}
                      </li>
                    ))}

                  </ul>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />

                </article>
              ))}

          </div>

        </div>
      </section>


      {/* ================= REGIONS ================= */}
      <section className="py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-16 max-w-4xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
              Regional intelligence
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Regional Coverage & Considerations
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Key regulatory requirements and compliance obligations by geographic region.
            </p>

          </div>


          <div className="space-y-3">

            {regions.map((region, index) => (
              <div
                key={region.title}
                className="group grid gap-6 border-t border-white/10 py-8 transition-colors duration-300 hover:border-[#ff6a00]/40 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
              >

                <div className="flex items-center gap-6">

                  <span className="text-sm font-semibold tracking-[0.2em] text-[#ff6a00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                    {region.title}
                  </h3>

                </div>

                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">

                  {region.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-white/45"
                    >
                      <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#ff6a00]" />
                      {item}
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= OUR METHODOLOGY ================= */}
<section className="bg-[#f7f5f0] py-24 text-[#111412] lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    {/* Section heading */}
    <div className="max-w-5xl">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
        Our Methodology
      </p>

      <h2 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
        Cross-Border Compliance
        <br />
        Approach
      </h2>

      <p className="mt-7 max-w-4xl text-lg leading-8 text-[#111412]/60 lg:text-xl">
        A structured methodology for achieving unified compliance across
        multiple jurisdictions.
      </p>
    </div>

    {/* Methodology */}
    <div className="mt-20 grid gap-x-12 lg:grid-cols-2">

      {/* 01 */}
      <article className="group relative overflow-hidden rounded-[18px] border border-black/[0.09] bg-[#fbfaf7] px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/40 hover:bg-white lg:px-8">
        <div className="flex gap-7">

        

          <div className="flex-1">

            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] lg:text-3xl">
                Global Regulatory Landscape Assessment
              </h3>

             
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#111412]/55 lg:text-[17px]">
              Map all applicable frameworks by business geography, product
              scope, and data types. Identify regulatory gaps and overlaps.
            </p>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
      </article>


      {/* 02 */}
      <article className="group relative overflow-hidden rounded-[18px] border border-black/[0.09] bg-[#fbfaf7] px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/40 hover:bg-white lg:px-8">
        <div className="flex gap-7">

         

          <div className="flex-1">

            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] lg:text-3xl">
                Compliance Maturity &amp; Gap Analysis
              </h3>

              
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#111412]/55 lg:text-[17px]">
              Assess current state against highest standards. Identify control
              gaps, risks, and remediation priorities across regions.
            </p>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
      </article>


      {/* 03 */}
      <article className="group relative overflow-hidden rounded-[18px] border border-black/[0.09] bg-[#fbfaf7] px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/40 hover:bg-white lg:px-8">
        <div className="flex gap-7">

        

          <div className="flex-1">

            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] lg:text-3xl">
                Harmonized Compliance Framework
              </h3>

       
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#111412]/55 lg:text-[17px]">
              Design unified policies meeting highest global standards
              (GDPR + CCPA + LGPD + PIPL equivalent). Adapt for local
              requirements.
            </p>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
      </article>


      {/* 04 */}
      <article className="group relative overflow-hidden rounded-[18px] border border-black/[0.09] bg-[#fbfaf7] px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/40 hover:bg-white lg:px-8">
        <div className="flex gap-7">

        

          <div className="flex-1">

            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] lg:text-3xl">
                Data Localization &amp; Transfer Solutions
              </h3>

          
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#111412]/55 lg:text-[17px]">
              Establish compliant data architecture: localization where
              required, transfers with adequate safeguards (Standard
              Contractual Clauses, BCRs).
            </p>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
      </article>


      {/* 05 */}
      <article className="group relative overflow-hidden rounded-[18px] border border-black/[0.09] bg-[#fbfaf7] px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/40 hover:bg-white lg:px-8">
        <div className="flex gap-7">


          <div className="flex-1">

            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] lg:text-3xl">
                AI &amp; Emerging Technology Compliance
              </h3>

            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#111412]/55 lg:text-[17px]">
              Integrate AI governance, privacy, and regulatory requirements
              into emerging technology initiatives.
            </p>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
      </article>


      {/* 06 */}
      <article className="group relative overflow-hidden rounded-[18px] border border-black/[0.09] bg-[#fbfaf7] px-7 py-9 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/40 hover:bg-white lg:px-8">
        <div className="flex gap-7">

        

          <div className="flex-1">

            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] lg:text-3xl">
                Continuous Monitoring &amp; Adaptation
              </h3>

              
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#111412]/55 lg:text-[17px]">
              Monitor regulatory changes continuously and adapt controls,
              policies, and processes accordingly.
            </p>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />
      </article>

    </div>

  </div>
</section>

      {/* ================= BENEFITS ================= */}
      <section className="py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-16 max-w-4xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a00]">
              Business impact
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Business Benefits
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Strategic advantages of harmonized cross-border compliance.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit) => (
              <article
                key={benefit.icon}
                className="group relative min-h-[250px] overflow-hidden rounded-[18px] border border-white/[0.10] bg-[#151916] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff6a00]/45 hover:bg-[#171a18]"
              >

             

                <h3 className="mt-12 text-2xl font-medium tracking-[-0.025em]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {benefit.text}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff6a00] transition-all duration-500 group-hover:w-full" />

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#ff6a00] py-28 text-[#111412] lg:py-36"
      >

        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-black/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[450px] w-[650px] rounded-full border border-black/10" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/50">
            Ankh GRC
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Navigate Global Regulations Confidently
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/65">
            Whether your organization operates in EU, APAC, Americas, China,
            Middle East, or Africa, Ankh GRC can help you establish harmonized,
            scalable cross-border compliance that respects local requirements
            while maintaining unified governance.
          </p>

          <button
            type="button"
            className="mt-9 rounded-full bg-[#111412] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black"
          >
            Contact Ankh GRC
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
     
<Footer/>
    </main>
  );
}