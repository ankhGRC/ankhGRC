"use client";

import { Navigation } from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import { motion } from "framer-motion";
const challenges = [
  {
    number: "01",
    title: "Regulatory Complexity",
    text: "Navigate evolving AI regulations and emerging compliance obligations worldwide.",
  },
  {
    number: "02",
    title: "AI Risk Exposure",
    text: "Manage risks associated with bias, hallucinations, explainability, model drift, and unintended outcomes.",
  },
  {
    number: "03",
    title: "Data Governance",
    text: "Ensure AI systems are built on trusted, accurate, secure, and compliant data.",
  },
  {
    number: "04",
    title: "AI Security",
    text: "Protect AI models and environments against adversarial attacks, prompt injection, and model manipulation.",
  },
  {
    number: "05",
    title: "Transparency & Trust",
    text: "Provide clear explanations for AI-driven decisions and recommendations.",
  },
  {
    number: "06",
    title: "Third-Party AI Oversight",
    text: "Manage risks associated with foundation models, AI vendors, and external AI platforms.",
  },
  {
    number: "07",
    title: "Executive Accountability",
    text: "Establish governance structures that provide board-level visibility and oversight.",
  },
  {
    number: "08",
    title: "Responsible Innovation",
    text: "Balance innovation with ethical, secure, and responsible AI adoption.",
  },
];

const domains = [
  {
    number: "01",
    title: "AI Governance & Oversight",
    text: "Establish governance structures, decision-making frameworks, accountability models, and executive oversight for AI programs and initiatives.",
  },
  {
    number: "02",
    title: "AI Strategy & Risk Management",
    text: "Align AI initiatives with organizational objectives while managing strategic, operational, legal, regulatory, and reputational risks.",
  },
  {
    number: "03",
    title: "AI Inventory & Use Case Management",
    text: "Develop an enterprise-wide inventory of AI systems, models, use cases, and associated risk classifications.",
  },
  {
    number: "04",
    title: "Regulatory Compliance & Responsible AI",
    text: "Align AI programs with ISO/IEC 42001, ISO 23894, EU AI Act, NIST AI RMF, OECD AI Principles, and industry-specific requirements.",
  },
  {
    number: "05",
    title: "AI Ethics & Responsible AI Principles",
    text: "Embed fairness, accountability, transparency, safety, inclusiveness, and human-centric AI throughout the AI lifecycle.",
  },
  {
    number: "06",
    title: "Data Governance for AI",
    text: "Ensure data quality, lineage, ownership, privacy, security, retention, and compliance requirements support trustworthy AI.",
  },
  {
    number: "07",
    title: "Model Development & Validation",
    text: "Implement controls governing model development, training, testing, validation, deployment, and retirement.",
  },
  {
    number: "08",
    title: "Explainability & Transparency",
    text: "Ensure AI outputs can be understood, challenged, and explained to regulators, customers, employees, and business stakeholders.",
  },
  {
    number: "09",
    title: "AI Security & Adversarial Risk Management",
    text: "Protect AI systems from prompt injection, data poisoning, model theft, adversarial attacks, unauthorized access, and AI misuse.",
  },
  {
    number: "10",
    title: "Human Oversight & Decision Governance",
    text: "Establish appropriate human review, intervention, escalation, and accountability mechanisms for AI-assisted decisions.",
  },
  {
    number: "11",
    title: "Third-Party AI Risk Management",
    text: "Assess and monitor AI vendors, foundation models, SaaS AI providers, cloud platforms, and external AI services.",
  },
  {
    number: "12",
    title: "AI Monitoring, Assurance & Continuous Compliance",
    text: "Continuously monitor performance, bias, drift, security, compliance, and operational risk throughout the AI lifecycle.",
  },
];

const coverage = [
  {
    title: "International Standards",
    items: [
      "ISO/IEC 42001",
      "ISO 23894",
      "ISO 27001",
      "ISO 27701",
      "ISO 31000",
    ],
  },
  {
    title: "European Union",
    items: [
      "EU AI Act",
      "GDPR",
      "Digital Services Act",
    ],
  },
  {
    title: "United States",
    items: [
      "NIST AI Risk Management Framework",
      "Executive AI Guidance",
      "Sector-Specific AI Requirements",
    ],
  },
  {
    title: "United Kingdom",
    items: [
      "UK AI Principles",
      "ICO AI Guidance",
    ],
  },
  {
    title: "Middle East",
    items: [
      "UAE AI Governance Principles",
      "UAE Responsible AI Guidance",
      "Saudi AI Ethics Principles",
    ],
  },
  {
    title: "Global Frameworks",
    items: [
      "OECD AI Principles",
      "UNESCO AI Ethics Framework",
      "Future Regulatory Frameworks",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "AI Governance Maturity Assessment",
    text: "Measure current governance maturity and identify capability gaps.",
  },
  {
    number: "02",
    title: "AI Risk Assessments",
    text: "Evaluate AI-related legal, regulatory, ethical, privacy, cybersecurity, and operational risks.",
  },
  {
    number: "03",
    title: "Responsible AI Framework Development",
    text: "Develop policies, standards, procedures, and governance structures.",
  },
  {
    number: "04",
    title: "ISO/IEC 42001 Readiness",
    text: "Prepare organizations for AI Management System implementation and certification readiness.",
  },
  {
    number: "05",
    title: "AI Vendor Risk Assessments",
    text: "Perform third-party AI due diligence and risk evaluations.",
  },
  {
    number: "06",
    title: "AI Policy Development",
    text: "Design enterprise-wide AI governance and responsible AI policies.",
  },
  {
    number: "07",
    title: "AI Governance Office Implementation",
    text: "Establish governance committees, reporting structures, and accountability models.",
  },
  {
    number: "08",
    title: "AI Assurance Reviews",
    text: "Conduct independent reviews of AI systems, controls, and governance practices.",
  },
];

const outcomes = [
  {
    number: "01",
    title: "Regulatory Readiness",
    text: "Prepare for evolving AI regulations and compliance obligations.",
  },
  {
    number: "02",
    title: "Responsible Innovation",
    text: "Accelerate AI adoption while maintaining appropriate safeguards.",
  },
  {
    number: "03",
    title: "Risk Reduction",
    text: "Reduce legal, regulatory, operational, and reputational exposure.",
  },
  {
    number: "04",
    title: "Enhanced Trust",
    text: "Strengthen confidence among customers, regulators, employees, and investors.",
  },
  {
    number: "05",
    title: "Executive Visibility",
    text: "Provide leadership with measurable oversight over AI initiatives.",
  },
  {
    number: "06",
    title: "Sustainable AI Adoption",
    text: "Enable long-term, scalable AI transformation programs.",
  },
  {
    number: "07",
    title: "Competitive Advantage",
    text: "Differentiate through trustworthy and responsible AI practices.",
  },
  {
    number: "08",
    title: "Strong Governance",
    text: "Integrate AI seamlessly into enterprise governance, risk, and compliance frameworks.",
  },
];

const heroAnimationStyles = `
@keyframes scan {
  0%, 100% { transform: translateX(-110%); }
  50% { transform: translateX(500%); }
}
`;

export default function AIGovernancePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111412] text-[#f4f2ec]">
      <style dangerouslySetInnerHTML={{ __html: heroAnimationStyles }} />
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,106,0,0.11),transparent_26%),radial-gradient(circle_at_18%_78%,rgba(255,106,0,0.05),transparent_22%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-20">
          <motion.div initial={{opacity:0,x:-55}} animate={{opacity:1,x:0}} transition={{duration:.85,ease:[.16,1,.3,1]}} className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6a00]">Govern AI. Build Trust. Enable Innovation.</p>
            <h1 className="mt-6 text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl xl:text-8xl">Enterprise AI<br/>Governance<br/><span className="text-white/35">Framework</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 lg:text-lg">Artificial Intelligence is transforming industries and decision-making processes. As organizations accelerate AI adoption, robust governance becomes critical to ensure AI systems remain trustworthy, transparent, secure, compliant, and aligned with business objectives.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#framework" className="rounded-full bg-[#ff6a00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7b20]">Assess AI Governance Maturity</a>
              <a href="#why-ai-governance" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-[#ff6a00] hover:text-[#ff6a00]">Explore the Framework</a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:55,scale:.96}} animate={{opacity:1,x:0,scale:1}} transition={{duration:.9,delay:.1,ease:[.16,1,.3,1]}} className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#171a18]">
            <div className="absolute inset-0 opacity-[.18]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',backgroundSize:'36px 36px'}}/>
            <motion.div animate={{rotate:360}} transition={{duration:24,repeat:Infinity,ease:'linear'}} className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"/>
            <motion.div animate={{rotate:-360}} transition={{duration:18,repeat:Infinity,ease:'linear'}} className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff6a00]/30"/>
            <motion.div animate={{scale:[1,1.25,1],opacity:[.6,1,.6]}} transition={{duration:2.8,repeat:Infinity}} className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00] shadow-[0_0_36px_rgba(255,106,0,.55)]"/>
            {['Oversight','Risk','Control','Assurance'].map((label,i)=>{const pos=['top-8 left-1/2 -translate-x-1/2','left-8 top-1/2 -translate-y-1/2','right-8 top-1/2 -translate-y-1/2','bottom-8 left-1/2 -translate-x-1/2'][i];return <motion.span key={label} initial={{opacity:0,y:i===0?20:0,x:i===1?20:i===2?-20:0}} animate={{opacity:1,y:0,x:0}} transition={{delay:.35+i*.12}} className={`absolute ${pos} text-[10px] uppercase tracking-[.28em] text-white/40`}>{label}</motion.span>})}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.3em] text-white/30">Governance Architecture</p><div className="mt-3 h-px w-24 bg-[#ff6a00]"/></div><span className="text-[10px] tracking-[.28em] text-white/20">ANKH</span></div>
          </motion.div>
        </div>
      </section>

      {/* WHY — horizontal contained scroller */}
      <section id="why-ai-governance" className="bg-[#f3f0e9] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <motion.div initial={{opacity:0,x:-55}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:.2}} transition={{duration:.7}}><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#ff5f00]">Why AI Governance</p><h2 className="mt-4 text-4xl font-medium leading-[.98] tracking-[-.045em] lg:text-5xl">Trust cannot be<br/>an afterthought.</h2></motion.div>
            <div>
              <motion.p initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.65}} className="max-w-3xl text-base leading-7 text-black/60">Organizations increasingly rely on AI-driven systems for automation, decision-making, customer engagement, risk evaluation, and strategic planning. Without proper governance, AI introduces significant legal, ethical, operational, cybersecurity, and reputational risks.</motion.p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 bg-white/40 p-3">
                <div className="flex gap-4 overflow-x-auto overscroll-x-contain pb-3">
                  {challenges.map((item,index)=><motion.article key={item.number} initial={{opacity:0,x:80,rotate:index%2?2:-2}} whileInView={{opacity:1,x:0,rotate:0}} viewport={{once:false,amount:.25}} transition={{duration:.65,delay:index*.06}} whileHover={{y:-6}} className="w-[285px] shrink-0 rounded-xl border border-black/10 bg-[#fbfaf7] p-6 sm:w-[320px]"><div className="h-px w-10 bg-[#ff5f00]"/><h3 className="mt-5 text-xl font-semibold tracking-[-.02em]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{item.text}</p></motion.article>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS — BENTO */}
      <section id="framework" className="relative bg-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.75}}><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#ff6a00]">AI Governance Framework</p><h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-.045em] lg:text-6xl">The 12 Core Domains</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/45">A comprehensive framework covering governance, risk management, compliance, security, ethics, and assurance across the complete AI lifecycle.</p></motion.div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {domains.map((item,index)=>{const span=index===0?'md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[360px]':index===3||index===6||index===9?'lg:col-span-2 min-h-[210px]':'min-h-[210px]';return <motion.article key={item.number} initial={{opacity:0,y:index%2?55:70,x:index%3===0?-35:35,scale:.96}} whileInView={{opacity:1,y:0,x:0,scale:1}} viewport={{once:false,amount:.15}} transition={{duration:.65,delay:index*.045,ease:[.16,1,.3,1]}} whileHover={{y:-7,scale:1.01}} className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#171a18] p-6 transition ${span}`}><div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#ff6a00]/[.07] blur-[60px] transition group-hover:bg-[#ff6a00]/[.13]"/><div className="relative"><div className="h-px w-10 bg-[#ff6a00]"/><p className="mt-4 text-[10px] uppercase tracking-[.28em] text-white/25">Core Domain</p><h3 className={`mt-3 font-medium tracking-[-.03em] ${index===0?'max-w-lg text-3xl lg:text-4xl':'text-xl'}`}>{item.title}</h3><p className={`mt-3 leading-6 text-white/45 ${index===0?'max-w-xl text-base':'text-sm'}`}>{item.text}</p></div></motion.article>})}
          </div>
        </div>
      </section>

      {/* COVERAGE — editorial stacked cards */}
      <section id="coverage" className="bg-[#ece8df] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:.2}} transition={{duration:.7}} className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#ff5f00]">Global Coverage</p><h2 className="mt-4 text-4xl font-medium tracking-[-.045em] lg:text-5xl">International AI Governance</h2></div><p className="max-w-xl text-sm leading-7 text-black/55">Aligned with leading international standards, regulations, and responsible AI frameworks.</p></motion.div>
          <div className="mt-10 space-y-3">
            {coverage.map((item,index)=><motion.article key={item.title} initial={{opacity:0,x:index%2?-60:60}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:.2}} transition={{duration:.65,delay:index*.06}} whileHover={{scale:1.01}} className="grid gap-5 rounded-2xl border border-black/10 bg-[#f8f6f1] p-6 md:grid-cols-[220px_1fr]"><div><div className="h-px w-10 bg-[#ff5f00]"/><h3 className="mt-5 text-2xl font-medium tracking-[-.03em]">{item.title}</h3></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{item.items.map(point=><div key={point} className="rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm leading-6 text-black/60">{point}</div>)}</div></motion.article>)}
          </div>
        </div>
      </section>

      {/* SERVICES — zigzag cards */}
      <section id="services" className="bg-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.7}} className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#ff6a00]">Ankh GRC Services</p><h2 className="mt-4 text-4xl font-medium tracking-[-.045em] lg:text-5xl">From policy to assurance.</h2><p className="mt-5 text-base leading-7 text-white/45">Helping organizations operationalize responsible, secure, and compliant AI.</p></motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {services.map((item,index)=>{const cls=['lg:col-span-5','lg:col-span-7','lg:col-span-7','lg:col-span-5','lg:col-span-4','lg:col-span-8','lg:col-span-8','lg:col-span-4'][index];return <motion.article key={item.number} initial={{opacity:0,y:70,x:index%2?35:-35}} whileInView={{opacity:1,y:0,x:0}} viewport={{once:false,amount:.18}} transition={{duration:.65,delay:index*.06}} whileHover={{y:-8}} className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-[#171a18] p-7 ${cls}`}><div className="absolute right-6 top-6 h-14 w-14 rounded-full border border-[#ff6a00]/20"/><div className="h-px w-12 bg-[#ff6a00]"/><h3 className="mt-6 max-w-xl text-2xl font-medium tracking-[-.03em]">{item.title}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">{item.text}</p><div className="mt-8 text-[10px] uppercase tracking-[.28em] text-white/25">ANKH GRC</div></motion.article>})}
          </div>
        </div>
      </section>

      {/* OUTCOMES — compact mosaic */}
      <section className="bg-[#f3f0e9] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div initial={{opacity:0,x:-45}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:.2}} transition={{duration:.7}} className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#ff5f00]">Business Outcomes</p><h2 className="mt-4 text-4xl font-medium tracking-[-.045em] lg:text-5xl">What good governance creates.</h2></div><p className="self-end max-w-2xl text-base leading-7 text-black/55">Deliver trusted, scalable, and compliant AI adoption through governance that supports innovation instead of slowing it down.</p></motion.div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item,index)=>{const span=index===0?'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px]':index===5?'lg:col-span-2':'min-h-[180px]';return <motion.article key={item.number} initial={{opacity:0,scale:.9,y:45}} whileInView={{opacity:1,scale:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.6,delay:index*.05}} whileHover={{y:-6}} className={`rounded-2xl border border-black/10 bg-white/45 p-6 ${span}`}><div className="h-px w-9 bg-[#ff5f00]"/><h3 className={`mt-5 font-semibold tracking-[-.02em] ${index===0?'text-3xl':'text-xl'}`}>{item.title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{item.text}</p></motion.article>})}
          </div>
        </div>
      </section>

      {/* WHY ANKH — split statement */}
      <section className="bg-white text-[#111412]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.7}} className="text-center"><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#ff5f00]">Why Ankh GRC</p><h2 className="mt-4 text-4xl font-medium tracking-[-.045em] lg:text-5xl">Innovation with assurance.</h2></motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <motion.div initial={{opacity:0,x:-45}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:.2}} transition={{duration:.65}} className="rounded-2xl border border-black/10 bg-[#f6f3ec] p-7"><p className="text-sm leading-8 text-black/60">Ankh GRC combines expertise in Governance, Risk, Compliance, Cybersecurity, Privacy, AI Governance, Internal Audit, Third-Party Risk Management, and Regulatory Compliance to help organizations establish practical, scalable, and business-oriented AI governance programs.</p></motion.div>
            <motion.div initial={{opacity:0,x:45}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:.2}} transition={{duration:.65}} className="rounded-2xl bg-[#111412] p-7 text-white"><div className="h-px w-12 bg-[#ff6a00]"/><p className="mt-5 text-sm leading-8 text-white/55">Our approach bridges the gap between innovation and assurance, helping organizations adopt AI confidently while maintaining security, trust, and accountability.</p></motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-[#ff6500] text-black">
        <motion.div initial={{opacity:0,y:55}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.8}} className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-10 lg:py-20"><p className="text-xs font-bold uppercase tracking-[.34em]">Next Step</p><h2 className="mt-5 text-5xl font-medium leading-[.95] tracking-[-.05em] lg:text-7xl">Build Trustworthy<br/>AI at Scale</h2><p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-black/70">Whether your organization is exploring Generative AI, implementing AI-powered business solutions, establishing an AI Governance Office, preparing for ISO/IEC 42001 readiness, or responding to emerging AI regulations, Ankh GRC can help you operationalize AI governance that enables innovation while managing risk.</p><a href="/contact" className="mt-8 inline-flex rounded-full bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-black">Contact Ankh GRC Today</a></motion.div>
      </section>
      <Footer />
    </main>
  );
}
