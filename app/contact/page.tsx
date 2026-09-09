"use client";

import { FormEvent } from "react";
import { Navigation } from "@/components/landing/navigation";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const subject = encodeURIComponent("Contact Us | AnkhGRC");

    const body = encodeURIComponent(
      "Name: " +
        formData.get("first_name") +
        " " +
        formData.get("last_name") +
        "\n" +
        "Email: " +
        formData.get("email") +
        "\n" +
        "Company: " +
        formData.get("company") +
        "\n" +
        "Reason: " +
        formData.get("reason") +
        "\n\n" +
        "Message:\n" +
        formData.get("message")
    );

    window.location.href =
      "mailto:help@ankhgrc.com?subject=" + subject + "&body=" + body;
  };

  return (
    <main className="min-h-screen w-full bg-[#f4f1eb] text-[#171b19]">
      <Navigation />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-black/10 bg-[#f4f1eb]">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-[#ff6500] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#ff6500]">
              <span className="text-[8px]">●</span>
              Contact Us
            </div>

            <h1 className="text-5xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Let&apos;s build something{" "}
              <span className="text-[#ff6500]">
                secure, compliant, and future ready
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              Whether you&apos;re starting a compliance program from scratch or
              need audit support fast, we&apos;d like to hear from you.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#contact-form"
                className="inline-flex items-center bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#ff6500]"
              >
                Send Us a Message
              </a>

              <a
                href="mailto:help@ankhgrc.com"
                className="inline-flex items-center border border-[#111111] px-7 py-4 text-sm font-semibold text-[#111111] transition hover:border-[#ff6500] hover:text-[#ff6500]"
              >
                help@ankhgrc.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONNECT WITH US + WHERE WE'RE BASED
      ========================================================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* LEFT — CONNECT WITH US */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                Connect With Us
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
                A few ways to reach the right team
              </h2>

              <ul className="mt-9 space-y-6">
                {/* 01 */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6500]" />

                  <p className="text-[15px] leading-7 text-black/55">
                    <strong className="text-[#111111]">
                      New consulting inquiries
                    </strong>{" "}
                    — use the form on this page, or email{" "}
                    <a
                      href="mailto:help@ankhgrc.com"
                      className="font-semibold text-[#ff6500]"
                    >
                      help@ankhgrc.com
                    </a>{" "}
                    directly.
                  </p>
                </li>

                {/* 02 */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6500]" />

                  <p className="text-[15px] leading-7 text-black/55">
                    <strong className="text-[#111111]">
                      Partnerships
                    </strong>{" "}
                    — see our{" "}
                    <a
                      href="/partnerships"
                      className="font-semibold text-[#ff6500]"
                    >
                      Partnerships page
                    </a>{" "}
                    or email{" "}
                    <a
                      href="mailto:help@ankhgrc.com"
                      className="font-semibold text-[#ff6500]"
                    >
                      help@ankhgrc.com
                    </a>
                    .
                  </p>
                </li>

                {/* 03 */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6500]" />

                  <p className="text-[15px] leading-7 text-black/55">
                    <strong className="text-[#111111]">
                      Security concerns or vulnerability reports
                    </strong>{" "}
                    — visit our{" "}
                    <a
                      href="#"
                      className="font-semibold text-[#ff6500]"
                    >
                      Trust Center
                    </a>{" "}
                    or email{" "}
                    <a
                      href="mailto:security@ankhgrc.com"
                      className="font-semibold text-[#ff6500]"
                    >
                      security@ankhgrc.com
                    </a>
                    .
                  </p>
                </li>

                {/* 04 */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6500]" />

                  <p className="text-[15px] leading-7 text-black/55">
                    <strong className="text-[#111111]">
                      Careers
                    </strong>{" "}
                    — interested in joining AnkhGRC? Email{" "}
                    <a
                      href="mailto:careers@ankhgrc.com"
                      className="font-semibold text-[#ff6500]"
                    >
                      careers@ankhgrc.com
                    </a>{" "}
                    with your resume.
                  </p>
                </li>

                {/* 05 */}
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6500]" />

                  <p className="text-[15px] leading-7 text-black/55">
                    <strong className="text-[#111111]">
                      Follow our updates
                    </strong>{" "}
                    — connect with us on{" "}
                    <a
                      href="#"
                      className="font-semibold text-[#ff6500]"
                    >
                      LinkedIn
                    </a>
                    , or explore our{" "}
                    <a
                      href="/insights"
                      className="font-semibold text-[#ff6500]"
                    >
                      Resource Library
                    </a>
                    .
                  </p>
                </li>
              </ul>
            </div>

            {/* RIGHT — OUR OFFICE */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                Our Office
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
                Where we&apos;re based
              </h2>

              {/* LOCATION */}
              <div className="mt-9 border border-[#e4e1db] bg-[#faf9f7] p-7">
                <h3 className="text-base font-semibold">
                  Coimbatore, India
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  [Street address, if you want it public]
                </p>

                <p className="mt-1 text-sm leading-6 text-black/55">
                  Coimbatore, Tamil Nadu, India
                </p>

                <p className="mt-5 text-[13px] text-black/55">
                  Phone:{" "}
                  <span className="text-[#111111]">
                    [Phone number]
                  </span>
                </p>

                <p className="mt-2 text-[13px] text-black/55">
                  Email:{" "}
                  <a
                    href="mailto:help@ankhgrc.com"
                    className="font-semibold text-[#ff6500]"
                  >
                    help@ankhgrc.com
                  </a>
                </p>
              </div>

              {/* SERVING CLIENTS */}
              <div className="mt-4 border border-[#e4e1db] bg-[#faf9f7] p-7">
                <h3 className="text-base font-semibold">
                  Serving Clients Across
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  India, with engagement capacity actively expanding into the
                  GCC region (Saudi Arabia &amp; UAE).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section
        id="contact-form"
        className="border-y border-[#e4e1db] bg-[#f4f1eb] py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
            {/* FORM INTRO */}
            <div className="max-w-md lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                Send a Message
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Tell us about your compliance needs
              </h2>

              <p className="mt-6 text-base leading-7 text-black/55">
                Fill out the form and we&apos;ll get back to you within 1-2
                business days.
              </p>

              <div className="mt-10 h-px w-16 bg-[#ff6500]" />

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-black/35">
                Ankh GRC • Secure • Compliant • Future Ready
              </p>
            </div>

            {/* FORM CARD */}
            <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:p-8 lg:p-10">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2"
              >
                {/* FIRST NAME */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/65"
                  >
                    First Name *
                  </label>

                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    required
                    className="w-full rounded-[10px] border border-[#ddd9d1] bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[#ff6500] focus:bg-white focus:ring-4 focus:ring-[#ff6500]/10"
                  />
                </div>

                {/* LAST NAME */}
                <div>
                  <label
                    htmlFor="last_name"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/65"
                  >
                    Last Name *
                  </label>

                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    required
                    className="w-full rounded-[10px] border border-[#ddd9d1] bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[#ff6500] focus:bg-white focus:ring-4 focus:ring-[#ff6500]/10"
                  />
                </div>

                {/* WORK EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/65"
                  >
                    Work Email *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-[10px] border border-[#ddd9d1] bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[#ff6500] focus:bg-white focus:ring-4 focus:ring-[#ff6500]/10"
                  />
                </div>

                {/* COMPANY */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/65"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    className="w-full rounded-[10px] border border-[#ddd9d1] bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[#ff6500] focus:bg-white focus:ring-4 focus:ring-[#ff6500]/10"
                  />
                </div>

                {/* REASON */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/65"
                  >
                    What can we help with? *
                  </label>

                  <select
                    id="reason"
                    name="reason"
                    required
                    defaultValue=""
                    className="w-full rounded-[10px] border border-[#ddd9d1] bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[#ff6500] focus:bg-white focus:ring-4 focus:ring-[#ff6500]/10"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="ISO 27001 Consulting">ISO 27001 Consulting</option>
                    <option value="SOC 2 Readiness">SOC 2 Readiness</option>
                    <option value="PCI DSS Compliance">PCI DSS Compliance</option>
                    <option value="DPDPA / Privacy Compliance">DPDPA / Privacy Compliance</option>
                    <option value="GRC Tool Implementation">GRC Tool Implementation</option>
                    <option value="Internal Audit Services">Internal Audit Services</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/65"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-y rounded-[10px] border border-[#ddd9d1] bg-[#faf9f7] px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[#ff6500] focus:bg-white focus:ring-4 focus:ring-[#ff6500]/10"
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-[10px] bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6500] hover:shadow-[0_10px_25px_rgba(255,101,0,0.18)]"
                  >
                    Submit
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <p className="max-w-md text-xs leading-5 text-black/40">
                    This form currently opens your email client on submit.
                    Connect it to a form backend (e.g., Formspree, HubSpot, or
                    your CRM) for a proper inbox-delivered submission before
                    publishing.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#111412] px-6 py- 24 text-center text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
            ANKH GRC
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Ready to start a conversation?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45">
            Tell us what you need and we&apos;ll help you identify the right
            next step.
          </p>

          <a
            href="mailto:help@ankhgrc.com"
            className="mt-9 inline-flex items-center gap-3 bg-[#ff6500] px-7 py-4 text-sm font-semibold text-[#111412] transition hover:bg-white"
          >
            help@ankhgrc.com
            <span>→</span>
          </a>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-black/10 bg-[#f4f1eb] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em]">
              <span className="text-[#ff6500]">ANKH</span> GRC
            </p>

            <p className="mt-2 text-xs text-black/40">
              Secure. Compliant. Future Ready.
            </p>
          </div>

          <p className="text-xs text-black/35">
            © 2026 Ankh GRC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}