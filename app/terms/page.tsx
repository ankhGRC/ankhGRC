"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const sections = [
  {
    number: "01",
    title: "Acceptance of These Terms",
    content: [
      "By accessing or using the Ankh GRC website, you acknowledge that you have read, understood and agree to be bound by these Terms of Use and applicable laws and regulations.",
      "If you do not agree with these Terms, please do not use the website.",
      "These Terms apply to visitors, users, prospective clients, clients and other persons accessing the website, except where a separate written agreement expressly governs a particular service or relationship.",
    ],
  },
  {
    number: "02",
    title: "About Ankh GRC",
    content: [
      "Ankh GRC provides governance, risk, compliance, cybersecurity, privacy, data protection, AI governance and related advisory information and professional services.",
      "Information published on this website is intended to provide general information about Ankh GRC and its capabilities. It does not by itself create a client, advisory, fiduciary, employment or other professional relationship between you and Ankh GRC.",
    ],
  },
  {
    number: "03",
    title: "Use of the Website",
    content: [
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of Ankh GRC or any third party.",
      "You must not:",
    ],
    list: [
      "Attempt to gain unauthorized access to the website or its systems.",
      "Introduce malicious code, malware or other harmful material.",
      "Interfere with the availability, integrity or operation of the website.",
      "Use automated means to access or extract website content in a manner that places unreasonable load on our systems.",
      "Misrepresent your identity or affiliation.",
      "Use website content for unlawful, misleading or fraudulent purposes.",
      "Circumvent security or access controls.",
    ],
  },
  {
    number: "04",
    title: "Intellectual Property",
    content: [
      "Unless otherwise stated, the website and its contents, including text, graphics, logos, visual elements, page designs, reports, frameworks, publications and other materials, are owned by or licensed to Ankh GRC and are protected by applicable intellectual property laws.",
      "The Ankh GRC name, logo, trademarks, service marks and associated brand elements may not be copied, modified, reproduced or used without prior written permission.",
      "You may view and download materials made expressly available for download for your personal or internal business use, provided that copyright, trademark and other proprietary notices are retained and the material is not altered or commercially exploited without permission.",
    ],
  },
  {
    number: "05",
    title: "No Professional Advice",
    content: [
      "Content published on the Ankh GRC website is provided for general informational and educational purposes.",
      "Website content should not be considered legal, regulatory, financial, cybersecurity, privacy, audit, accounting or other professional advice. Regulatory requirements and risks vary according to jurisdiction, industry, organization and circumstances.",
      "You should obtain appropriate professional advice before making decisions based on information published on this website.",
      "Ankh GRC does not represent that website content is sufficient for any specific compliance, certification, regulatory or business requirement.",
    ],
  },
  {
    number: "06",
    title: "No Guarantee of Compliance or Certification",
    content: [
      "References to ISO standards, regulatory frameworks, laws, controls, certifications or compliance requirements are provided for informational purposes unless expressly stated otherwise in a written engagement.",
      "Use of information from this website does not guarantee certification, regulatory approval, compliance, audit success, security outcomes or acceptance by any regulator, certification body or third party.",
      "Specific outcomes depend on the organization's circumstances, implementation, evidence, controls, governance and applicable requirements.",
    ],
  },
  {
    number: "07",
    title: "Accuracy and Availability",
    content: [
      "We seek to keep website information accurate and current. However, information may contain errors, omissions or information that becomes outdated due to changes in technology, regulations, standards or business practices.",
      "Ankh GRC may update, modify, suspend or discontinue any part of the website or its content without prior notice.",
      "We do not warrant that the website will always be available, uninterrupted, error-free or free from harmful components.",
    ],
  },
  {
    number: "08",
    title: "Regulatory and Legal Information",
    content: [
      "Regulatory and legal information can change rapidly. Content relating to laws, regulations, standards and regulatory developments reflects information available at the time of publication and should not be treated as a definitive interpretation of law.",
      "Where applicable, jurisdiction-specific requirements should be reviewed with qualified legal or regulatory professionals.",
      "Ankh GRC does not guarantee that information published on the website reflects every regulatory development or requirement applicable to a particular organization.",
    ],
  },
  {
    number: "09",
    title: "Third-Party Links and Services",
    content: [
      "The website may contain links to third-party websites, platforms, publications or services.",
      "These links are provided for convenience and informational purposes. Ankh GRC does not control and is not responsible for the availability, content, security, privacy practices or terms of third-party websites.",
      "Accessing third-party websites is at your own discretion and subject to their applicable terms and policies.",
    ],
  },
  {
    number: "10",
    title: "User Communications and Submissions",
    content: [
      "If you submit information through a contact form, enquiry, email or other website channel, you are responsible for ensuring that the information provided is accurate and that you have the right to provide it.",
      "Please do not submit confidential, highly sensitive, proprietary or regulated information through general website forms unless Ankh GRC has specifically requested such information through an appropriate secure channel.",
      "Information submitted through the website may be handled in accordance with the Ankh GRC Privacy Policy.",
    ],
  },
  {
    number: "11",
    title: "Confidentiality",
    content: [
      "Website communications and submissions should not be assumed to create a confidential relationship unless Ankh GRC has expressly agreed to confidentiality in writing.",
      "If you require a confidential discussion regarding a prospective engagement, please contact Ankh GRC and request an appropriate communication or engagement channel.",
    ],
  },
  {
    number: "12",
    title: "AI and Emerging Technology Content",
    content: [
      "Ankh GRC may publish information relating to artificial intelligence, AI governance, cybersecurity, privacy, emerging technology and technology risk.",
      "Such content is intended for general educational and professional discussion. It does not constitute a guarantee that a particular AI system, model, technology or governance approach will meet every applicable legal, regulatory, security or ethical requirement.",
      "Organizations remain responsible for assessing and governing their own technology use.",
    ],
  },
  {
    number: "13",
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Ankh GRC will not be liable for any direct, indirect, incidental, consequential, special or other loss arising from or relating to your use of, or reliance on, the website or information contained on it.",
      "This includes, where legally permitted, loss of business, revenue, profits, data, reputation or anticipated savings.",
      "Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.",
    ],
  },
  {
    number: "14",
    title: "Indemnity",
    content: [
      "To the extent permitted by applicable law, you agree to indemnify and hold harmless Ankh GRC and its personnel from claims, losses, liabilities, damages, costs or expenses arising from your unlawful use of the website, violation of these Terms, infringement of third-party rights, or misuse of website content.",
    ],
  },
  {
    number: "15",
    title: "Privacy",
    content: [
      "Your use of the website is also subject to the Ankh GRC Privacy Policy, which explains how personal information may be collected, used, disclosed, protected and retained.",
      "Our use of cookies and similar technologies is addressed in our Cookie Policy and, where applicable, cookie preference controls.",
    ],
  },
  {
    number: "16",
    title: "Changes to These Terms",
    content: [
      "Ankh GRC may update these Terms of Use from time to time to reflect changes in our services, website functionality, legal requirements or business practices.",
      "Updated Terms will be posted on this page with a revised effective date. Your continued use of the website after changes are posted constitutes acceptance of the updated Terms, to the extent permitted by applicable law.",
    ],
  },
  {
    number: "17",
    title: "Governing Law and Jurisdiction",
    content: [
      "These Terms shall be interpreted in accordance with applicable law. Unless otherwise required by a specific written agreement or mandatory law, disputes relating to the website or these Terms shall be subject to the jurisdiction of the courts applicable to Ankh GRC's principal place of business.",
      "The final governing-law and jurisdiction clause should be updated to reflect Ankh GRC's actual legal entity, registered address and applicable legal structure before publication.",
    ],
  },
  {
    number: "18",
    title: "Contact Us",
    content: [
      "Questions about these Terms of Use may be directed to Ankh GRC.",
      "Email: legal@ankhgrc.com",
      "Website: www.ankhgrc.com",
      "For formal legal or contractual matters, please include sufficient information for us to understand the nature of your request.",
    ],
  },
];

export default function TermsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const activeSection =
    selected !== null ? sections[selected] : null;

  return (
    <main className="min-h-screen bg-[#111412] text-[#f4f1eb]">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-[#ff6500]/10 " />

<div className="mx-auto max-w-7xl px-6 pt-30 pb-24 sm:px-10 lg:px-16 lg:pt-32 lg:pb-28">       
     <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6500] ">
            LEGAL • TRANSPARENCY • TRUST
          </p>

          <div className="mt-7 grid items-end gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <h1 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Terms of
                <br />
                <span className="text-[#ff6500]">Use.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                The terms and conditions governing access to and use of the
                Ankh GRC website and its content.
              </p>
            </div>

            <div className="hidden lg:block">
              <div>

                
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Last updated: 1 September 2026
            </p>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-[#f4f1eb] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
              Terms & Conditions
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Know the terms that govern your use.
            </h2>

            <p className="mt-5 text-base leading-7 text-black/50">
              Select any section to read the complete terms and conditions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <button
                key={section.number}
                onClick={() => setSelected(index)}
                className="group min-h-[230px] border border-black/10 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between">
             

                  
                </div>

                <div className="mt-14">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em]">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-black/35">
                    View terms
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeSection && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[86vh] w-full max-w-3xl overflow-y-auto bg-[#f4f1eb] p-8 text-[#111412] sm:p-12"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-black/10 text-xl transition hover:border-[#ff6500] hover:text-[#ff6500]"
            >
              ×
            </button>

            <p className="font-mono text-xs tracking-[0.2em] text-[#ff6500]">
              {activeSection.number} / 18
            </p>

            <h2 className="mt-5 pr-10 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              {activeSection.title}
            </h2>

            <div className="mt-9 space-y-6">
              {activeSection.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-black/55 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {activeSection.list && (
                <ul className="space-y-4 border-t border-black/10 pt-7">
                  {activeSection.list.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-base leading-7 text-black/55 sm:text-lg"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#ff6500]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
              <button
                onClick={() =>
                  setSelected(
                    selected === 0
                      ? sections.length - 1
                      : (selected as number) - 1
                  )
                }
                className="text-sm text-black/40 transition hover:text-[#ff6500]"
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
                className="text-sm text-black/40 transition hover:text-[#ff6500]"
              >
                Next →
              </button>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#ff6500] hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}