"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Resources", href: "#resources" },
];

const serviceItems = [
  {
    name: "Compliance",
    href: "/compliance-consulting",
  },
  {
  name: "Consulting",
  href: "/consulting",
  },
  {
    name: "Information Security Standard",
    href: "#information-security",
  },
  {
    name: "Industry-Specific Regulation",
    href: "#industry-regulation",
  },
  {
    name: "Cybersecurity Regulation",
    href: "#cybersecurity-regulation",
  },
  {
    name: "Privacy / Data Protection Law",
    href: "#privacy",
  },
  {
    name: "AI Governance",
    href: "#ai-governance",
  },
  {
    name: "Cross-Border / Supranational Framework",
    href: "#cross-border",
  },
];

export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDetailOpen, setIsServicesDetailOpen] = useState(false);
  const [isServicesPinned, setIsServicesPinned] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
        setIsServicesDetailOpen(false);
        setIsServicesPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsServicesDetailOpen(false);
        setIsServicesPinned(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenus = () => {
    setIsServicesOpen(false);
    setIsServicesDetailOpen(false);
    setIsServicesPinned(false);
    setIsMobileMenuOpen(false);
  };

  // TOP NAV SERVICES CLICK
  const handleTopServicesClick = () => {
    setIsServicesOpen((prev) => {
      const next = !prev;

      // Every time dropdown is newly opened,
      // right side starts EMPTY.
      if (next) {
        setIsServicesDetailOpen(false);
        setIsServicesPinned(false);
      } else {
        setIsServicesDetailOpen(false);
        setIsServicesPinned(false);
      }

      return next;
    });
  };

  // MIDDLE SERVICES HOVER
  const handleServicesHover = () => {
    if (!isServicesPinned) {
      setIsServicesDetailOpen(true);
    }
  };

  // MIDDLE SERVICES CLICK
  const handleServicesMiddleClick = () => {
    setIsServicesPinned(true);
    setIsServicesDetailOpen(true);
  };

  return (
    <>
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-[100]">
        <nav className="relative w-full border-b border-black/10 bg-white">
          <div className="mx-auto flex h-[100px] max-w-[1500px] items-center px-4 lg:px-6">

            {/* LOGO */}
            <a
              href="#"
              onClick={closeMenus}
              className="relative flex shrink-0 items-center"
              aria-label="ANKH GRC Home"
            >
              <Image
                src="/ankhgrc-logo.png"
                alt="ANKH GRC"
                width={330}
                height={110}
                priority
                className="h-[200px] w-auto object-contain"
              />
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-10 lg:gap-14">

                {/* HOME / ABOUT / RESOURCES */}
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className="group relative px-1 py-3 text-[20px] font-medium tracking-[-0.01em] text-neutral-800 transition-colors duration-300 hover:text-[#E85D04]"
                  >
                    {link.name}

                    <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-[#E85D04] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}

                {/* ================= TOP SERVICES ================= */}
                <div
                  ref={menuRef}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={handleTopServicesClick}
                    className={`group relative flex items-center gap-2 px-1 py-3 text-[20px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                      isServicesOpen
                        ? "text-[#E85D04]"
                        : "text-neutral-800 hover:text-[#E85D04]"
                    }`}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    <span>Services</span>

                    <ChevronDown
                      className={`h-[17px] w-[17px] transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />

                    <span
                      className={`absolute bottom-1 left-0 h-[2px] bg-[#E85D04] transition-all duration-300 ${
                        isServicesOpen
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>

                  {/* ================= FULL WIDTH MEGA MENU ================= */}
                  <div
                    className={`fixed left-0 right-0 top-[100px] z-[200] w-full bg-[#1C211F] text-white transition-all duration-300 ${
                      isServicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-3 pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="w-full">

                      <div className="mx-auto flex min-h-[470px] w-full max-w-[1500px] px-8 py-10 lg:px-12">

                        {/* ================= LEFT PART ================= */}
                        <div className="w-[390px] shrink-0 pr-14">

                          <h2 className="text-[30px] font-medium leading-[1.2] tracking-[-0.02em] text-white">
                            Infrastructure to
                            <br />
                            Intelligence
                          </h2>

                          <p className="mt-7 max-w-[330px] text-[20px] font-normal leading-[1.8] text-white/55">
                            Navigate the AI era with confidence. TCS helps you
                            turn AI into a strategic partner that empowers
                            talent, reimagines processes, and accelerates
                            business transformation.
                          </p>

                          <a
                            href="#"
                            className="group mt-12 inline-flex items-center gap-4 text-[20px] font-medium text-white transition-colors duration-300 hover:text-[#E85D04]"
                          >
                            <span>
                              Unlock enterprise intelligence
                            </span>

                            <ArrowRight
                              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
                            />
                          </a>
                        </div>

                        {/* ================= MIDDLE + RIGHT AREA ================= */}
                        <div
                          className="flex flex-1"
                          onMouseLeave={() => {
                            if (!isServicesPinned) {
                              setIsServicesDetailOpen(false);
                            }
                          }}
                        >

                          {/* ================= MIDDLE PART ================= */}
                          <div className="w-[360px] shrink-0">

                            {/* INDUSTRIES */}
                            <div className="border-b border-white/15">
                              <div className="flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60">
                                <span>Industries</span>

                                <ArrowRight className="h-5 w-5" />
                              </div>
                            </div>

                            {/* SERVICES */}
                            <div className="border-b border-white/15">
                              <div
                                role="button"
                                tabIndex={0}
                                onMouseEnter={handleServicesHover}
                                onClick={handleServicesMiddleClick}
                                onKeyDown={(event) => {
                                  if (
                                    event.key === "Enter" ||
                                    event.key === " "
                                  ) {
                                    event.preventDefault();
                                    handleServicesMiddleClick();
                                  }
                                }}
                                className={`flex h-[64px] cursor-pointer items-center justify-between px-4 text-[24px] transition-all duration-200 ${
                                  isServicesDetailOpen
                                    ? "bg-[#343936] text-white"
                                    : "text-white/60 hover:text-white"
                                }`}
                              >
                                <span>Services</span>

                                <ArrowRight
                                  className={`h-5 w-5 transition-colors duration-200 ${
                                    isServicesDetailOpen
                                      ? "text-[#E85D04]"
                                      : "text-white/60"
                                  }`}
                                />
                              </div>
                            </div>

                            {/* PRODUCTS */}
                            <div className="border-b border-white/15">
                              <div className="flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60 transition-all duration-200 hover:text-white">
                                <span>Products</span>

                                <ArrowRight className="h-5 w-5" />
                              </div>
                            </div>

                            {/* PROJECTS */}
                            <div className="border-b border-white/15">
                              <div className="flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60 transition-all duration-200 hover:text-white">
                                <span>Projects</span>

                                <ArrowRight className="h-5 w-5" />
                              </div>
                            </div>
                          </div>

                          {/* ================= RIGHT SERVICES CONTENT ================= */}
                          {isServicesDetailOpen && (
                            <div
                              className="ml-12 flex-1 border-l border-white/15 pl-12"
                              onMouseEnter={() => {
                                setIsServicesDetailOpen(true);
                              }}
                            >
                              {/* TITLE */}
                              <div className="mb-8">
                                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#E85D04]">
                                  ANKH GRC
                                </p>

                                <h3 className="mt-2 text-[30px] font-semibold tracking-[-0.03em] text-white">
                                  Services
                                </h3>
                              </div>

                              {/* SERVICE LIST */}
                              <div className="grid grid-cols-2 gap-x-12">

                                {serviceItems.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMenus}
                                    className="group flex min-h-[62px] items-center justify-between border-b border-white/10 py-4 text-[16px] leading-6 text-white/65 transition-all duration-200 hover:text-white"
                                  >
                                    <span>{item.name}</span>

                                    <ArrowRight
                                      className="mr-2 h-4 w-4 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#E85D04]"
                                    />
                                  </a>
                                ))}

                              </div>

                              {/* CONSULTING LINK */}
                              <div className="mt-8 border-t border-white/10 pt-6">
                                <a
                                  href="/compliance-consulting"
                                  onClick={closeMenus}
                                  className="group inline-flex items-center gap-3 text-[16px] font-medium text-white transition-colors duration-200 hover:text-[#E85D04]"
                                >
                                  <span>
                                    Explore our GRC consulting
                                  </span>

                                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                                </a>
                              </div>
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((prev) => !prev)
              }
              className="ml-auto rounded-lg p-2 text-neutral-900 transition-colors hover:bg-neutral-100 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>

          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[90] bg-white transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-7 pb-10 pt-[120px]">

          <div className="flex flex-1 flex-col gap-3">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenus}
                className="border-b border-black/10 py-5 text-4xl font-medium tracking-tight text-neutral-900 transition-colors hover:text-[#E85D04]"
              >
                {link.name}
              </a>
            ))}

            {/* MOBILE SERVICES */}
            <div className="border-b border-black/10">

              <button
                type="button"
                onClick={() =>
                  setIsServicesOpen((prev) => !prev)
                }
                className="flex w-full items-center justify-between py-5 text-left text-4xl font-medium tracking-tight text-neutral-900"
              >
                <span>Services</span>

                <ChevronDown
                  className={`h-8 w-8 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isServicesOpen
                    ? "max-h-[650px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pl-2">

                  {serviceItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenus}
                      className="flex items-center justify-between border-b border-black/5 py-4 text-lg text-neutral-700 transition-colors hover:text-[#E85D04]"
                    >
                      {item.name}

                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ))}

                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              ANKH GRC
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Secure. Compliant. Future Ready.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navigation;