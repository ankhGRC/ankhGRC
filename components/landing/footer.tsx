import Image from "next/image";
import Link from "next/link";

const capabilityLinks = [
  ["Information Security Standard", "/information-security"],
  ["Industry-Specific Regulations", "/industry-specific-regulations"],
  ["Cybersecurity Regulation", "/cybersecurity-regulation"],
  ["Privacy / Data Protection Law", "/privacy-data-protection"],
  ["AI Governance", "/ai-governance"],
  ["Cross-Border / Supranational Framework", "/cross-border"],
];

const resourceLinks = [
  ["Insights", "/insights"],
  ["Partnerships", "/partnerships"],
  ["Trust Center", "/trust-center"],
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_2fr] lg:gap-20">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <Image
                src="/ankhgrc-logo (2).png"
                alt="Ankh GRC"
                width={190}
                height={192}
                priority
                className="h-auto w-[155px] object-contain"
              />
            </Link>
            <p className="mt-7 text-sm leading-7 text-black/100">
              Governance, Risk & Compliance solutions that help organizations
              navigate complexity, strengthen resilience and build trust.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-black/100">
              Secure. Compliant. Future Ready.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6500]">
                Capabilities
              </p>
              <div className="mt-6 space-y-3">
                {capabilityLinks.map(([name, href]) => (
                  <Link
                    key={name}
                    href={href}
                    className="block text-sm leading-6 text-black/100 transition-colors hover:text-[#ff6500]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6500]">
                Industries
              </p>
              <Link
                href="/industries"
                className="mt-6 block text-sm text-black/100 transition-colors hover:text-[#ff6500]"
              >
                Explore Industries
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6500]">
                Company
              </p>
              <Link
                href="/about"
                className="mt-6 block text-sm text-black/100 transition-colors hover:text-[#ff6500]"
              >
                About Ankh GRC
              </Link>
               <Link
                href="/contact"
                className="mt-3 block text-sm text-black/100 transition-colors hover:text-[#ff6500]"
              >
                Contact
              </Link>
               <Link
                href="/training"
                className="mt-3 block text-sm text-black/100 transition-colors hover:text-[#ff6500]"
              >
                Training
              </Link>

              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6500]">
                Resources
              </p>
              <div className="mt-6 space-y-3">
                {resourceLinks.map(([name, href]) => (
                  <Link
                    key={name}
                    href={href}
                    className="block text-sm text-black/100 transition-colors hover:text-[#ff6500]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-black/50 pt-7">
          <div className="flex flex-col gap-5 text-sm text-black/80 md:flex-row md:items-center md:justify-between">
            <p>© 2026 AnkhGRC. All rights reserved.</p>

            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <Link href="/terms" className="hover:text-[#ff6500]">Terms</Link>
              <Link href="/privacy" className="hover:text-[#ff6500]">Privacy</Link>
              <Link href="/cookies" className="hover:text-[#ff6500]">Cookies</Link>
              <Link href="/disclaimer" className="hover:text-[#ff6500]">Disclaimer</Link>
            </div>

            <p className="text-black/100">Secure. Compliant. Future Ready.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
