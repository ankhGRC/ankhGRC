"use client";

import Navigation from "@/components/landing/navigation";

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Navigation */}
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[720px] flex items-center overflow-hidden border-none">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/compliance-hero.png')",
          }}
        />

        {/* Dark Overlay */}
<div className="absolute inset-0 bg-slate-950/40" />

<div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/35 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-24">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-white/70 mb-10">
            <span>Home</span>
            <span>›</span>
            <span>Services</span>
            <span>›</span>
            <span className="text-[#FF7A3D]">Compliance</span>
          </div>

          {/* Small Line */}
          <div className="w-14 h-[2px] bg-[#FF7A3D] mb-8" />

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white max-w-4xl">
            COMPLIANCE
          </h1>

          {/* Sub Heading */}
          <h2 className="text-2xl md:text-3xl text-[#FF7A3D] mt-6 font-medium">
            Stay Compliant. Stay Confident.
          </h2>

          {/* Description */}
          <p className="mt-7 text-lg md:text-xl leading-8 text-white/80 max-w-xl">
            We help organizations navigate complex regulations,
            strengthen compliance frameworks, and build a culture
            of accountability and trust.
          </p>

          {/* Button */}
          <button
            onClick={() =>
              document
                .getElementById("why-compliance")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 inline-flex items-center gap-4
                       bg-[#d8a85f] text-slate-950
                       px-7 py-4 rounded-md
                       font-semibold
                       hover:bg-[#e5bb7b]
                       transition-all duration-300"
          >
            Explore Our Approach
            <span className="text-xl">→</span>
          </button> 

        </div>
      </section>


      {/* WHY COMPLIANCE SECTION */}
      <section
        id="why-compliance"
        className="py-24 px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto">

            <p className="text-[#b58a4b] font-semibold tracking-widest text-sm">
              WHY COMPLIANCE MATTERS
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mt-4">
              Build Trust. Reduce Risk. Drive Growth.
            </h2>

            <div className="w-14 h-[2px] bg-[#FF7A3D] mx-auto mt-6" />

            <p className="text-slate-600 text-lg leading-8 mt-6">
              Effective compliance helps organizations stay ahead of
              regulatory changes, mitigate risks, and create
              long-term business value.
            </p>

          </div>


          {/* Cards */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-8 px-4 scrollbar-hide">

            {/* Card 1 */}
<div
  className="group relative overflow-hidden bg-[#FFF9F0] border border-[#D9C5A8] rounded-2xl p-8
  shadow-sm transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:border-[#C99645]/60
  hover:shadow-[0_20px_50px_rgba(180,130,60,0.14)]"
>

              <div className="text-4xl mb-6">🛡️</div>

              <h3 className="text-xl font-semibold text-slate-900">
                Reduce Risk
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                Identify, assess, and mitigate regulatory,
                financial, and operational risks.
              </p>

              <div className="w-12 h-[2px] bg-[#d8a85f] mt-8" />
            </div>


            {/* Card 2 */}
<div
  className="group relative overflow-hidden bg-[#FFF9F0] border border-[#D9C5A8] rounded-2xl p-8
  shadow-sm transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:border-[#C99645]/60
  hover:shadow-[0_20px_50px_rgba(180,130,60,0.14)]"
>

              <div className="text-4xl mb-6">📋</div>

              <h3 className="text-xl font-semibold text-slate-900">
                Ensure Readiness
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                Stay prepared for audits and regulatory reviews
                with strong processes and documentation.
              </p>

              <div className="w-12 h-[2px] bg-[#d8a85f] mt-8" />
            </div>


            {/* Card 3 */}
<div
  className="group relative overflow-hidden bg-[#FFF9F0] border border-[#D9C5A8] rounded-2xl p-8
  shadow-sm transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:border-[#C99645]/60
  hover:shadow-[0_20px_50px_rgba(180,130,60,0.14)]"
>

              <div className="text-4xl mb-6">⚖️</div>

              <h3 className="text-xl font-semibold text-slate-900">
                Achieve Compliance
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                Meet regulatory requirements and industry
                standards with confidence.
              </p>

              <div className="w-12 h-[2px] bg-[#d8a85f] mt-8" />
            </div>


            {/* Card 4 */}
<div
  className="group relative overflow-hidden bg-[#FFF9F0] border border-[#D9C5A8] rounded-2xl p-8
  shadow-sm transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:border-[#C99645]/60
  hover:shadow-[0_20px_50px_rgba(180,130,60,0.14)]"
>
              <div className="text-4xl mb-6">🤝</div>

              <h3 className="text-xl font-semibold text-slate-900">
                Build Trust
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                Strengthen stakeholder confidence through
                transparency and accountability.
              </p>

              <div className="w-12 h-[2px] bg-[#d8a85f] mt-8" />
            </div>

          </div>

        </div>
      </section>

      {/* COMPLIANCE SERVICES */}
<section className="py-24 px-8 bg-slate-50">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="max-w-3xl mb-16">
      <p className="text-[#b58a4b] font-semibold tracking-widest text-sm">
        OUR COMPLIANCE SERVICES
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mt-4">
        Compliance Solutions Built Around Your Business
      </h2>

      <div className="w-14 h-[2px] bg-[#d8a85f] mt-6" />

      <p className="text-slate-600 text-lg leading-8 mt-6">
        Our compliance services help organizations understand
        regulatory requirements, manage compliance risks, and
        maintain effective governance practices.
      </p>
    </div>


    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Service 1 */}
<div
  className="group relative bg-[#FFF9F0] border border-[#D9C5A8] rounded-xl p-8
  transition-all duration-500
  hover:-translate-y-1
  hover:border-[#C99645]/60
  hover:shadow-[0_15px_35px_rgba(180,130,60,0.12)]
"
>

        <div className="w-12 h-12 rounded-lg bg-[#d8a85f]/15
                        flex items-center justify-center text-2xl mb-6">
          🛡️
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          Regulatory Compliance
        </h3>

        <p className="text-slate-600 leading-7 mt-4">
          Understand applicable regulations and establish
          processes to meet changing compliance requirements.
        </p>
        <div
  className="mt-6 flex items-center gap-2
  opacity-0 -translate-x-6
  transition-all duration-500 ease-out
  group-hover:opacity-100
  group-hover:translate-x-0"
>
  <span className="text-sm font-medium text-[#C99645]">
    Learn More
  </span>

  <span className="text-lg text-[#C99645]">
    →
  </span>
</div>

      </div>


      {/* Service 2 */}
<div
  className="group relative bg-[#FFF9F0] border border-[#D9C5A8] rounded-xl p-8
  transition-all duration-500
  hover:-translate-y-1
  hover:border-[#C99645]/60
  hover:shadow-[0_15px_35px_rgba(180,130,60,0.12)]
"
>

        <div className="w-12 h-12 rounded-lg bg-[#d8a85f]/15
                        flex items-center justify-center text-2xl mb-6">
          📋
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          Compliance Assessment
        </h3>

        <p className="text-slate-600 leading-7 mt-4">
          Assess your existing compliance framework and
          identify gaps, risks, and areas for improvement.
        </p>
<div
  className="mt-6 flex items-center gap-2
  opacity-0 -translate-x-6
  transition-all duration-500 ease-out
  group-hover:opacity-100
  group-hover:translate-x-0"
>
  <span className="text-sm font-medium text-[#C99645]">
    Learn More
  </span>

  <span className="text-lg text-[#C99645]">
    →
  </span>
</div>

      </div>


      {/* Service 3 */}
<div
  className="group relative bg-[#FFF9F0] border border-[#D9C5A8] rounded-xl p-8
  transition-all duration-500
  hover:-translate-y-1
  hover:border-[#C99645]/60
  hover:shadow-[0_15px_35px_rgba(180,130,60,0.12)]
"
>

        <div className="w-12 h-12 rounded-lg bg-[#d8a85f]/15
                        flex items-center justify-center text-2xl mb-6">
          ⚖️
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          Risk & Governance
        </h3>

        <p className="text-slate-600 leading-7 mt-4">
          Strengthen governance structures and manage
          compliance risks through effective controls.
        </p>
        <div
  className="mt-6 flex items-center gap-2
  opacity-0 -translate-x-6
  transition-all duration-500 ease-out
  group-hover:opacity-100
  group-hover:translate-x-0"
>
  <span className="text-sm font-medium text-[#C99645]">
    Learn More
  </span>

  <span className="text-lg text-[#C99645]">
    →
  </span>
</div>


      </div>


      {/* Service 4 */}
<div
  className="group relative bg-[#FFF9F0] border border-[#D9C5A8] rounded-xl p-8
  transition-all duration-500
  hover:-translate-y-1
  hover:border-[#C99645]/60
  hover:shadow-[0_15px_35px_rgba(180,130,60,0.12)]
"
>

        <div className="w-12 h-12 rounded-lg bg-[#d8a85f]/15
                        flex items-center justify-center text-2xl mb-6">
          🔍
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          Compliance Audit Support
        </h3>

        <p className="text-slate-600 leading-7 mt-4">
          Prepare for internal and external audits with
          structured documentation and compliance reviews.
        </p>
        <div
  className="mt-6 flex items-center gap-2
  opacity-0 -translate-x-6
  transition-all duration-500 ease-out
  group-hover:opacity-100
  group-hover:translate-x-0"
>
  <span className="text-sm font-medium text-[#C99645]">
    Learn More
  </span>

  <span className="text-lg text-[#C99645]">
    →
  </span>
</div>


      </div>


      {/* Service 5 */}
<div
  className="group relative bg-[#FFF9F0] border border-[#D9C5A8] rounded-xl p-8
  transition-all duration-500
  hover:-translate-y-1
  hover:border-[#C99645]/60
  hover:shadow-[0_15px_35px_rgba(180,130,60,0.12)]
"
>

        <div className="w-12 h-12 rounded-lg bg-[#d8a85f]/15
                        flex items-center justify-center text-2xl mb-6">
          📚
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          Policies & Documentation
        </h3>

        <p className="text-slate-600 leading-7 mt-4">
          Develop clear policies, procedures, and documentation
          to support consistent compliance practices.
        </p>
<div
  className="mt-6 flex items-center gap-2
  opacity-0 -translate-x-6
  transition-all duration-500 ease-out
  group-hover:opacity-100
  group-hover:translate-x-0"
>
  <span className="text-sm font-medium text-[#C99645]">
    Learn More
  </span>

  <span className="text-lg text-[#C99645]">
    →
  </span>
</div>

      </div>


      {/* Service 6 */}
<div
  className="group relative bg-[#FFF9F0] border border-[#D9C5A8] rounded-xl p-8
  transition-all duration-500
  hover:-translate-y-1
  hover:border-[#C99645]/60
  hover:shadow-[0_15px_35px_rgba(180,130,60,0.12)]
"
>
        <div className="w-12 h-12 rounded-lg bg-[#d8a85f]/15
                        flex items-center justify-center text-2xl mb-6">
          🌐
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          Regulatory Monitoring
        </h3>

        <p className="text-slate-600 leading-7 mt-4">
          Track regulatory changes and understand their
          potential impact on your organization.
        </p>
        <div
  className="mt-6 flex items-center gap-2
  opacity-0 -translate-x-6
  transition-all duration-500 ease-out
  group-hover:opacity-100
  group-hover:translate-x-0"
>
  <span className="text-sm font-medium text-[#C99645]">
    Learn More
  </span>

  <span className="text-lg text-[#C99645]">
    →
  </span>
</div>

      </div>

    </div>

  </div>
</section>

    </main>
  );
}