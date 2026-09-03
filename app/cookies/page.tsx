"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";

const sections = [
  {
    number: "01",
    title: "What Are Cookies?",
    content:
      "Cookies are small text files placed on your device when you visit a website. They help the site function properly, remember your preferences, and give us aggregate insight into how the site is used so we can improve it.",
  },
  {
    number: "02",
    title: "Types of Cookies We Use",
    content: "",
  },
  {
    number: "03",
    title: "Third-Party Cookies",
    content:
      "Some cookies may be set by third-party services we use to operate the site (e.g., analytics providers, embedded content). We do not control these cookies directly — refer to each provider's own privacy policy for details.",
  },
  {
    number: "04",
    title: "How to Control Cookies",
    content:
      "You can manage your cookie preferences on this site at any time using the panel below. You can also control cookies through your browser settings — note that blocking necessary cookies may affect site functionality.",
  },
  {
    number: "05",
    title: "Updates to This Policy",
    content:
      'We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The "Last updated" date at the top of this page reflects the most recent revision.',
  },
  {
    number: "06",
    title: "Contact Us",
    content: "Questions about this policy or your data? Reach us at privacy@ankhgrc.com.",
  },
];

const cookieTypes = [
  {
    name: "Strictly Necessary",
    description: "Required for the site to function — cannot be disabled.",
    details:
      "Examples: session management, security tokens, load balancing, and remembering your cookie consent choice itself.",
    required: true,
  },
  {
    name: "Analytics",
    description: "Helps us understand how visitors use the site.",
    details:
      "Examples: page views, session duration, and traffic sources. Data is aggregated and does not directly identify you.",
    required: false,
  },
  {
    name: "Functional",
    description: "Remembers choices you make to personalize your experience.",
    details:
      "Examples: language preference, previously viewed resources, form auto-fill convenience.",
    required: false,
  },
  {
    name: "Marketing",
    description: "Used to measure campaign effectiveness.",
    details:
      "Examples: tracking whether a visit originated from a LinkedIn post or email campaign.",
    required: false,
  },
];

export default function CookiesPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const [preferences, setPreferences] = useState({
    analytics: false,
    functional: false,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const acceptAll = () => {
    setPreferences({
      analytics: true,
      functional: true,
      marketing: true,
    });
    setSaved(true);
  };

  const rejectOptional = () => {
    setPreferences({
      analytics: false,
      functional: false,
      marketing: false,
    });
    setSaved(true);
  };

  const savePreferences = () => {
    try {
      localStorage.setItem(
        "ankhgrc_cookie_prefs",
        JSON.stringify({
          necessary: true,
          ...preferences,
        })
      );
    } catch {}

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#111412] text-[#f4f1eb]">
      <Navigation />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-[#ff6500]/10" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6500] pt-30">
            LEGAL • PRIVACY • CONTROL
          </p>

          <div className="mt-7 grid items-end gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <h1 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Your Privacy.
                <br />
                <span className="text-[#ff6500]">Your Choice.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                This page explains what cookies AnkhGRC uses, why we use them,
                and how you can control your preferences at any time.
              </p>
            </div>

            {/* COOKIE SYMBOL */}
            
          </div>

          <div className="mt-10 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Last updated: 1 September 2026
            </p>
          </div>
        </div>
      </section>

      {/* ================= SIX CARDS ================= */}
      <section className="bg-[#f4f1eb] text-[#111412]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
              Cookie Information
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Understand how cookies work.
            </h2>

            <p className="mt-5 text-base leading-7 text-black/50">
              Select any topic to explore the relevant information.
            </p>
          </div>

          {/* CARD GRID */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <button
                key={section.number}
                onClick={() => setSelected(index)}
                className="group min-h-[230px] border border-black/10 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              >
            

                <div className="mt-14">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em]">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-black/35">
                    View details
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto bg-[#f4f1eb] p-8 text-[#111412] sm:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-black/10 text-xl transition hover:border-[#ff6500] hover:text-[#ff6500]"
            >
              ×
            </button>

            <p className="font-mono text-xs tracking-[0.2em] text-[#ff6500]">
              {sections[selected].number}
            </p>

            <h2 className="mt-5 pr-10 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              {sections[selected].title}
            </h2>

            {selected === 1 ? (
              <div className="mt-10 space-y-4">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.name}
                    className="border border-black/10 bg-white p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-medium">
                          {cookie.name}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-black/50">
                          {cookie.description}
                        </p>
                      </div>

                      <span
                        className={`w-fit shrink-0 border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] ${
                          cookie.required
                            ? "border-[#111412] bg-[#111412] text-white"
                            : "border-[#ff6500] text-[#ff6500]"
                        }`}
                      >
                        {cookie.required ? "ALWAYS ACTIVE" : "OPTIONAL"}
                      </span>
                    </div>

                    <p className="mt-5 border-t border-black/10 pt-5 text-sm leading-7 text-black/50">
                      {cookie.details}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-8 max-w-2xl text-base leading-8 text-black/55">
                {sections[selected].content}
              </p>
            )}

            {selected === 5 && (
              <p className="mt-5 text-sm text-black/50">
                Email:{" "}
                <a
                  href="mailto:privacy@ankhgrc.com"
                  className="font-semibold text-[#ff6500] hover:underline"
                >
                  privacy@ankhgrc.com
                </a>
              </p>
            )}

            <button
              onClick={() => setSelected(null)}
              className="mt-10 bg-[#111412] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#ff6500] hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= PREFERENCE CENTER ================= */}
      <section className="bg-[#151817]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                Manage Preferences
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                Cookie
                <br />
                Preference
                <br />
                Center.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Toggle each category on or off, then save your preferences.
                Strictly necessary cookies can't be disabled since the site
                requires them to function.
              </p>
            </div>

            <div className="border border-white/10 bg-[#111412]">

              {/* NECESSARY */}
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <div>
                  <h3 className="text-base font-medium">
                    Strictly Necessary
                  </h3>

                  <p className="mt-1 text-xs text-white/35">
                    Required for core site functionality.
                  </p>
                </div>

                <div className="relative h-7 w-12 rounded-full bg-[#ff6500]">
                  <div className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white" />
                </div>
              </div>

              {/* ANALYTICS */}
              <PreferenceRow
                title="Analytics"
                description="Helps us understand site usage."
                enabled={preferences.analytics}
                onClick={() => togglePreference("analytics")}
              />

              {/* FUNCTIONAL */}
              <PreferenceRow
                title="Functional"
                description="Remembers your preferences and choices."
                enabled={preferences.functional}
                onClick={() => togglePreference("functional")}
              />

              {/* MARKETING */}
              <PreferenceRow
                title="Marketing"
                description="Measures campaign effectiveness."
                enabled={preferences.marketing}
                onClick={() => togglePreference("marketing")}
                last
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={acceptAll}
              className="bg-[#ff6500] px-7 py-4 text-sm font-semibold text-black transition hover:bg-white"
            >
              Accept All
            </button>

            <button
              onClick={rejectOptional}
              className="border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6500] hover:text-[#ff6500]"
            >
              Reject Optional
            </button>

            <button
              onClick={savePreferences}
              className="border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6500] hover:text-[#ff6500]"
            >
              Save My Preferences
            </button>
          </div>

          {saved && (
            <p className="mt-5 text-sm text-white/45">
              ✓ Your preferences have been saved.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ================= TOGGLE ROW ================= */

function PreferenceRow({
  title,
  description,
  enabled,
  onClick,
  last = false,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onClick: () => void;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-6 ${
        !last ? "border-b border-white/10" : ""
      }`}
    >
      <div>
        <h3 className="text-base font-medium text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-white/35">
          {description}
        </p>
      </div>

      <button
        onClick={onClick}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          enabled ? "bg-[#ff6500]" : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}