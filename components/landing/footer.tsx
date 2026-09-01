import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111412] text-[#f4f1eb]">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">

        {/* TOP */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-semibold tracking-[-0.03em]"
          >
            <span className="text-[#ff6500]">ANKH</span>
            <span className="text-white"> GRC</span>
          </Link>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
  <a
    href="/terms"
    className="text-sm text-white/50 transition hover:text-[#ff6500]"
  >
    Terms
  </a>

  <a
    href="/privacy"
    className="text-sm text-white/50 transition hover:text-[#ff6500]"
  >
    Privacy
  </a>

  <a
    href="/cookies"
    className="text-sm text-white/50 transition hover:text-[#ff6500]"
  >
    Cookies
  </a>

  <a
    href="/disclaimer"
    className="text-sm text-white/50 transition hover:text-[#ff6500]"
  >
    Disclaimer
  </a>
</div>        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 AnkhGRC. All rights reserved.
          </p>

          <p>
            Secure. Compliant. Future Ready.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;