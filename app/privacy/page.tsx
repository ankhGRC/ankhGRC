"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

type Section = {
  number: string;
  title: string;
  content: string[];
};

const sections: Section[] = [
  {
    number: "01",
    title: "Scope of this Privacy Policy",
    content: [
      "This Privacy Policy applies to personal information collected through the Ankh GRC website, contact and enquiry forms, business communications, events and webinars, consultations, marketing activities, recruitment interactions, and other professional interactions with Ankh GRC.",
      "Where a specific service, engagement or application has a separate privacy notice, that notice may apply in addition to this Privacy Policy.",
      "Where Ankh GRC processes personal information on behalf of a client as part of a professional engagement, the client may determine the purposes and means of processing. The relevant client privacy requirements and contractual arrangements may therefore also apply.",
    ],
  },
  {
    number: "02",
    title: "Personal Information We Collect",
    content: [
      "Depending on how you interact with us, we may collect identity and contact information such as your name, email address, telephone number, business address, organization and professional role.",
      "We may also collect professional information, including business enquiries, areas of professional interest, information provided in proposals or correspondence, and other information you choose to provide.",
      "Our website may automatically collect technical information such as IP address, browser and device information, operating system, approximate location derived from technical information, pages visited, referring website, access times and security or diagnostic information.",
    ],
  },
  {
    number: "03",
    title: "How We Collect Information",
    content: [
      "We may collect personal information directly from you; when you submit forms or contact us; when you request services, publications or information; through events and consultations; from your organization in connection with a business relationship; from publicly available professional sources; and automatically through our website and similar technologies.",
      "We seek to collect information that is relevant and reasonably necessary for the purpose for which it is used.",
    ],
  },
  {
    number: "04",
    title: "How We Use Personal Information",
    content: [
      "We may use personal information to respond to enquiries, communicate with clients and prospects, provide professional services, prepare proposals, manage business relationships, deliver events and consultations, provide requested insights and publications, improve our website and services, maintain security, prevent misuse or fraud, meet legal and regulatory obligations, establish or defend legal rights, manage recruitment enquiries, and send permitted business communications.",
    ],
  },
  {
    number: "05",
    title: "Lawful Basis and Consent",
    content: [
      "Depending on the jurisdiction and circumstances, we may process personal information based on consent, performance of a contract or steps taken at your request before entering into a contract, compliance with a legal obligation, legitimate business interests where permitted by law, protection of legal rights and security, or another lawful basis available under applicable data protection laws.",
      "Where processing is based on consent, you may withdraw consent subject to applicable legal or contractual limitations.",
    ],
  },
  {
    number: "06",
    title: "Sharing of Personal Information",
    content: [
      "We may share personal information where necessary with authorized Ankh GRC personnel and affiliates, professional advisers and consultants, technology and hosting providers, cloud and IT service providers, website and communications providers, event providers, business partners where appropriate, and government authorities or regulators where legally required.",
      "Service providers handling information on our behalf are expected to maintain appropriate confidentiality and security measures.",
      "We do not sell personal information as a business practice.",
    ],
  },
  {
    number: "07",
    title: "International Data Transfers",
    content: [
      "Ankh GRC may work with clients, service providers and technology partners in different countries. Where personal information is transferred across borders, we take appropriate steps to handle those transfers in accordance with applicable privacy and data protection requirements, including appropriate contractual or other legally recognized safeguards where required.",
    ],
  },
  {
    number: "08",
    title: "Data Security",
    content: [
      "We maintain reasonable and appropriate technical and organizational measures designed to protect personal information against unauthorized access, accidental loss, destruction, misuse, alteration and unauthorized disclosure.",
      "Measures may include access controls, authentication, encryption where appropriate, monitoring, confidentiality obligations and security procedures. No method of transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    number: "09",
    title: "Data Retention",
    content: [
      "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including providing services, maintaining business relationships, meeting contractual and legal obligations, resolving disputes, establishing or defending legal claims, and maintaining appropriate business and security records.",
      "When information is no longer required, we will take reasonable steps to delete, anonymize or securely dispose of it, subject to applicable law.",
    ],
  },
  {
    number: "10",
    title: "Cookies and Similar Technologies",
    content: [
      "Our website may use cookies and similar technologies to enable essential functionality, improve performance, understand website usage, remember preferences, support security and measure user experience.",
      "Where required by applicable law, we will obtain appropriate consent before using non-essential cookies or similar technologies. You may control cookies through your browser settings and, where available, website cookie-management tools.",
    ],
  },
  {
    number: "11",
    title: "Your Privacy Rights",
    content: [
      "Depending on your location and applicable law, you may have rights to know whether personal information is processed; request access or correction; request deletion where legally applicable; withdraw consent; request restriction; object to certain processing; request portability where applicable; opt out of certain marketing communications; and lodge a complaint with an applicable data protection authority.",
      "For individuals in India, applicable rights and mechanisms will be provided in accordance with the Digital Personal Data Protection Act, 2023, the Digital Personal Data Protection Rules, 2025 and other applicable requirements.",
      "Requests may be subject to identity verification and legal limitations.",
    ],
  },
  {
    number: "12",
    title: "Marketing Communications",
    content: [
      "Where permitted by law, we may send business-related communications about Ankh GRC services, industry developments, regulatory updates, events, webinars, research and insights. You may unsubscribe from non-essential marketing communications using the unsubscribe mechanism provided or by contacting us.",
    ],
  },
  {
    number: "13",
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to third-party websites, applications or services. Ankh GRC is not responsible for the privacy practices, security or content of third-party websites. We encourage you to review their privacy notices before providing personal information.",
    ],
  },
  {
    number: "14",
    title: "Children's Privacy",
    content: [
      "Our website and professional services are not directed toward children. We do not knowingly seek to collect personal information from children except where legally permitted and appropriate. If you believe a child has provided personal information to us improperly, please contact us.",
    ],
  },
  {
    number: "15",
    title: "Privacy and AI",
    content: [
      "Ankh GRC recognizes that artificial intelligence can introduce additional privacy and data protection considerations. Where AI-enabled technologies are used within our operations or services, we seek to apply appropriate governance principles relating to purpose limitation, data protection, security, transparency, accountability, human oversight, risk management and responsible use of AI.",
      "Where AI technologies process personal information, applicable privacy and data protection requirements will be considered as part of the relevant governance and risk assessment.",
    ],
  },
  {
    number: "16",
    title: "Client and Business Data",
    content: [
      "When Ankh GRC provides professional services to a client, processing of personal information may be governed by contractual arrangements, statements of work, data processing agreements or other applicable documentation.",
      "Where Ankh GRC processes personal information on behalf of a client, we will process such information in accordance with documented client instructions and applicable contractual and legal requirements, subject to the terms of the engagement.",
    ],
  },
  {
    number: "17",
    title: "Data Breach and Security Incidents",
    content: [
      "We maintain processes designed to identify, assess, manage and respond to information security and privacy incidents. Where required by applicable law, we will notify relevant authorities, clients or affected individuals within the prescribed timeframe and in accordance with applicable requirements.",
    ],
  },
  {
    number: "18",
    title: "Changes to this Privacy Policy",
    content: [
      "We may update this Privacy Policy to reflect changes in our services, technology, data processing practices, regulatory developments or applicable laws. When material changes are made, we will update the effective date and, where appropriate, provide additional notice. We encourage you to review this page periodically.",
    ],
  },
  {
    number: "19",
    title: "Contact Us",
    content: [
      "For privacy questions, concerns, complaints or requests, please contact Ankh GRC.",
      "Email: privacy@ankhgrc.com",
      "Website: www.ankhgrc.com",
      "Please include sufficient information for us to understand and respond to your request. We may request additional information to verify identity before processing certain requests.",
    ],
  },
  {
    number: "20",
    title: "Governing Requirements",
    content: [
      "This Privacy Policy is intended to operate in accordance with applicable privacy and data protection laws. For individuals in India, this may include the Digital Personal Data Protection Act, 2023, the Digital Personal Data Protection Rules, 2025 and other applicable Indian laws and regulations.",
      "For individuals in other jurisdictions, additional privacy rights and requirements may apply based on the laws applicable to their personal information.",
    ],
  },
];

export default function PrivacyPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const activeSection =
    selected !== null ? sections[selected] : null;

  return (
    <main className="min-h-screen bg-[#111412] text-[#f4f1eb]">
      <Navigation />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-[#ff6500]/10" />

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:px-10 lg:px-16 lg:pt-32 lg:pb-28">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6500]">
            TRUST • TRANSPARENCY • ACCOUNTABILITY
          </p>

          <div className="mt-7 grid items-end gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <h1 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Privacy
                <br />
                <span className="text-[#ff6500]">Policy.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                How Ankh GRC collects, uses, protects and manages personal
                information across our website and professional interactions.
              </p>
            </div>

            {/* Decorative privacy graphic */}
            <div className="relative hidden h-56 w-56 lg:block">
              <div className="absolute inset-0 rounded-full border border-[#ff6500]/20" />
              <div className="absolute inset-8 rounded-full border border-[#ff6500]/15" />
              <div className="absolute inset-16 rounded-full border border-[#ff6500]/20" />

              <div className="absolute left-[42%] top-[42%] h-5 w-5 rounded-full bg-[#ff6500]" />
              <div className="absolute right-12 top-16 h-2.5 w-2.5 rounded-full bg-[#ff6500]/60" />
              <div className="absolute bottom-14 left-14 h-3 w-3 rounded-full bg-[#ff6500]/40" />
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5">
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Effective
                </p>
                <p className="mt-2 text-sm text-white/55">
                  1 September 2026
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Last Reviewed
                </p>
                <p className="mt-2 text-sm text-white/55">
                  1 September 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="bg-[#f4f1eb] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
              Privacy & Data Protection
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Your privacy,
              <br />
              clearly explained.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/50">
              Explore each section of the Ankh GRC Privacy Policy. Select a
              card to read the complete information.
            </p>
          </div>

          {/* 20 CARDS */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <button
                key={section.number}
                onClick={() => setSelected(index)}
                className="group min-h-[225px] border border-black/10 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#ff6500]">
                    {section.number}
                  </span>

                  <span className="text-2xl text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff6500]">
                    ↗
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em]">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
                    View section
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPUP ================= */}
      {activeSection && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto bg-[#f4f1eb] text-[#111412]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Orange top line */}
            <div className="h-1 w-full bg-[#ff6500]" />

            <div className="p-8 sm:p-12 lg:p-14">

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-black/10 text-xl transition hover:border-[#ff6500] hover:text-[#ff6500]"
                aria-label="Close"
              >
                ×
              </button>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-[#ff6500]">
                  {activeSection.number}
                </span>

                <span className="h-px w-12 bg-black/10" />

                <span className="font-mono text-xs tracking-[0.15em] text-black/30">
                  20
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl pr-10 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                {activeSection.title}
              </h2>

              <div className="mt-10 max-w-3xl space-y-6">
                {activeSection.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-black/55 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Email styling */}
              {activeSection.number === "19" && (
                <div className="mt-8 border-l-2 border-[#ff6500] bg-white p-5">
                  <p className="text-sm text-black/50">
                    Privacy enquiries:
                  </p>

                  <a
                    href="mailto:privacy@ankhgrc.com"
                    className="mt-2 inline-block text-base font-semibold text-[#ff6500] hover:underline"
                  >
                    privacy@ankhgrc.com
                  </a>
                </div>
              )}

              {/* Previous / Next */}
              <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-6">
                <button
                  onClick={() =>
                    setSelected(
                      selected === 0
                        ? sections.length - 1
                        : (selected as number) - 1
                    )
                  }
                  className="text-sm font-medium text-black/40 transition hover:text-[#ff6500]"
                >
                  ← Previous
                </button>

                <button
                  onClick={() =>
                    setSelected(
                      selected === sections.length - 1
                        ? 0
                        : (selected as number) + 1
                    )
                  }
                  className="text-sm font-medium text-black/40 transition hover:text-[#ff6500]"
                >
                  Next →
                </button>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-7 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#ff6500] hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}