"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const companyItems = [
  {
    name: "About Us",
    href: "/about",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

const serviceItems = [
  {
    name: "Information Security Standard",
    href: "/information-security",
  },
  {
    name: "Industry-Specific Regulations",
    href: "/industry-specific-regulations",
  },
  {
    name: "Cybersecurity Regulation",
    href: "/cybersecurity-regulation",
  },
  {
    name: "Privacy / Data Protection Law",
    href: "/privacy-data-protection",
  },
  {
    name: "AI Governance",
    href: "/ai-governance",
  },
  {
    name: "Cross-Border / Supranational Framework",
    href: "/cross-border",
  },
];

const resourceItems = [
  {
    name: "Insights",
    href: "/insights",
  },
  {
    name: "Partnerships",
    href: "/partnerships",
  },
  {
    name: "Trust Center",
    href: "/trust-center",
  },
   {
    name: "Certifications",
    href: "/certifications",
  },
];

export function Navigation() {
  const pathname = usePathname();

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDetailOpen, setIsServicesDetailOpen] = useState(false);
  const [isServicesPinned, setIsServicesPinned] = useState(false);

  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 

  const isLandingPage = pathname === "/";

  const menuRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     CLOSE MENUS WHEN CLICKING OUTSIDE
  ========================================================= */
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

      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsServicesDetailOpen(false);
        setIsServicesPinned(false);
        setIsResourcesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     SCROLL STATE
     
     LANDING:
     transparent + full screen

     SCROLLED:
     existing white rounded navbar
  ========================================================= */


const closeMenus = () => {
  setIsServicesOpen(false);
  setIsServicesDetailOpen(false);
  setIsServicesPinned(false);
  setIsResourcesOpen(false);
  setIsCompanyOpen(false);
  setIsMobileMenuOpen(false);
};

  /* =========================================================
     SERVICES
  ========================================================= */
  const handleTopServicesClick = () => {
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);

    setIsServicesOpen((prev) => {
      const next = !prev;

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

  /* =========================================================
     RESOURCES
  ========================================================= */
  const handleTopResourcesClick = () => {
    setIsServicesOpen(false);
    setIsServicesDetailOpen(false);
    setIsServicesPinned(false);
    setIsCompanyOpen(false);

    setIsResourcesOpen((prev) => !prev);
  };

  /* =========================================================
     SERVICES HOVER
  ========================================================= */
  const handleServicesHover = () => {
    if (!isServicesPinned) {
      setIsServicesDetailOpen(true);
    }
  };

  /* =========================================================
     SERVICES CLICK
  ========================================================= */
  const handleServicesMiddleClick = () => {
    setIsServicesPinned(true);
    setIsServicesDetailOpen(true);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
          
          IMPORTANT:
          Landing = FULL WIDTH + TRANSPARENT
          Scroll = Existing rounded white navbar
      ===================================================== */}
<header
  className="
    fixed
    top-5
    left-1/2
    z-[100]
    -translate-x-1/2
    w-[calc(100%-48px)]
    lg:w-[calc(100%-64px)]
    lg:max-w-[1450px]
  "
>
<nav
  className="
    relative
    w-full
    rounded-[18px]
    border
    border-white/70
    bg-[#ebe8e1]
    shadow-[0_8px_30px_rgba(0,0,0,0.32)]
    backdrop-blur-sm
  "
>
   <div
  className="
    mx-auto
    flex
    h-[70px]
    w-full
    items-center
    px-5
    lg:px-7
  "
>
            {/* =================================================
                LOGO

                NO EXTRA WHITE BOX
                NO mt-[50px]
                NO h-[72px]
                NO w-[170px]

                Only the image itself.
            ================================================= */}
       <Link
  href="/"
  onClick={closeMenus}
  className="
    relative
    z-[110]
    flex
    h-[52px]
    w-[140px]
    shrink-0
    items-center
    justify-start
    border-none
    outline-none
    ring-0
    focus:border-none
    focus:outline-none
    focus:ring-0
    focus-visible:border-none
    focus-visible:outline-none
    focus-visible:ring-0
  "
>
              <Image
                src="/ankhgrc-logo (2).png"
                alt="Ankh GRC"
                width={190}
                height={192}
                priority
                className="
                  h-auto
                  w-[140px]
                  object-contain
                "
              />
            </Link>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}
            <div className="hidden flex-1 items-center justify-end md:flex ">
              <div className="flex items-center gap-10 lg:gap-14">

                {/* =================================================
                    SERVICES
                ================================================= */}
                <div
                  ref={menuRef}
                  className="relative"
                  
                >
                  <button
                    type="button"
                    onClick={handleTopServicesClick}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-2
                      px-1
                      py-3
                      text-[20px]
                      font-medium
                      tracking-[-0.01em]
                      transition-colors
                      duration-300
                    ${
  isServicesOpen
    ? "text-[#E85D04]"
    : "text-neutral-800 hover:text-[#E85D04]"
}
                    `}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    <span>Capabilities</span>

                    <ChevronDown
                      className={`
                        h-[17px]
                        w-[17px]
                        transition-transform
                        duration-300
                        ${isServicesOpen ? "rotate-180" : ""}
                      `}
                    />

                    <span
                      className={`
                        absolute
                        bottom-1
                        left-0
                        h-[2px]
                        bg-[#E85D04]
                        transition-all
                        duration-300
                        ${
                          isServicesOpen
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </button>

                  {/* =================================================
                      SERVICES MEGA MENU
                  ================================================= */}
                  <div
                    className={`
                      fixed
                      left-0
                      right-0
                      top-[70px]
                      z-[200]
                      w-full
                      bg-[#1C211F]
                      text-white
                      transition-all
                      duration-300
                      ${
                        isServicesOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible pointer-events-none -translate-y-3 opacity-0"
                      }
                    `}
                  >
                    <div className="w-full">
                      <div className="mx-auto flex min-h-[470px] w-full max-w-[1500px] px-8 py-10 lg:px-12">

                    <div className="mt-8 h-[220px] w-[330px]">
  <div className="relative h-full w-full">

    {/* Soft orange atmosphere */}
    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

    {/* Outer rotating network ring */}
    <div className="absolute left-1/2 top-1/2 h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border border-orange-500/20">
      <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_4px_rgba(249,115,22,0.7)]" />
      <span className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-orange-300 shadow-[0_0_12px_3px_rgba(249,115,22,0.7)]" />
      <span className="absolute bottom-4 right-8 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_14px_4px_rgba(249,115,22,0.6)]" />
    </div>

    {/* Second orbit */}
    <div className="absolute left-1/2 top-1/2 h-[115px] w-[180px] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] animate-[spin_12s_linear_infinite_reverse] rounded-[50%] border border-orange-400/15">
      <span className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_12px_3px_rgba(249,115,22,0.7)]" />
    </div>

    {/* Connection lines */}
    <div className="absolute left-[52px] top-[62px] h-px w-[75px] rotate-[28deg] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    <div className="absolute right-[45px] top-[70px] h-px w-[65px] -rotate-[32deg] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    <div className="absolute bottom-[63px] left-[65px] h-px w-[110px] -rotate-[8deg] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

    {/* Network nodes */}
    <span className="absolute left-[47px] top-[55px] h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_12px_4px_rgba(249,115,22,0.45)]" />
    <span className="absolute right-[43px] top-[64px] h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400 shadow-[0_0_10px_3px_rgba(249,115,22,0.5)]" />
    <span className="absolute bottom-[58px] left-[63px] h-1.5 w-1.5 animate-pulse rounded-full bg-orange-300 shadow-[0_0_10px_3px_rgba(249,115,22,0.45)]" />
    <span className="absolute bottom-[48px] right-[65px] h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_12px_4px_rgba(249,115,22,0.5)]" />

    {/* Central GRC core */}
    <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-orange-400/50 bg-[#171c19] shadow-[0_0_30px_rgba(249,115,22,0.22)]">
      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
        <div className="h-4 w-4 animate-pulse rounded-full bg-orange-400 shadow-[0_0_18px_7px_rgba(249,115,22,0.65)]" />
      </div>
    </div>

    {/* Small floating blocks */}
    <div className="absolute left-[27px] top-[105px] h-3 w-3 rotate-45 border border-orange-500/40 bg-orange-500/10" />
    <div className="absolute right-[27px] top-[105px] h-3 w-3 rotate-45 border border-orange-500/40 bg-orange-500/10" />
    <div className="absolute bottom-[25px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-500/60" />

    {/* Bottom glow */}
    <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

  </div>
</div>

                        {/* MIDDLE + RIGHT */}
                        <div
                          className="flex flex-1"
                          onMouseLeave={() => {
                            if (!isServicesPinned) {
                              setIsServicesDetailOpen(false);
                            }
                          }}
                        >
                          {/* MIDDLE */}
                          <div className="w-[360px] shrink-0 space-y-4">

                            {/* COMPLIANCE */}
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
                                className={`
                                  flex
                                  h-[64px]
                                  cursor-pointer
                                  items-center
                                  justify-between
                                  px-4
                                  text-[24px]
                                  transition-all
                                  duration-200
                                  ${
                                    isServicesDetailOpen
                                      ? "bg-[#343936] text-white"
                                      : "text-white/60 hover:text-white"
                                  }
                                `}
                              >
                                <span>Compliance</span>

                                <ArrowRight
                                  className={`
                                    h-5
                                    w-5
                                    transition-colors
                                    duration-200
                                    ${
                                      isServicesDetailOpen
                                        ? "text-[#E85D04]"
                                        : "text-white/60"
                                    }
                                  `}
                                />
                              </div>
                            </div>

                            {/* CONSULTING */}
                            <div className="border-b border-white/15">
                              <Link
                                href="/consulting"
                                onClick={closeMenus}
                                className="flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60 transition-all hover:bg-[#343936] hover:text-white"
                              >
                                <span>Consulting</span>
                              </Link>
                            </div>

                            {/* TRAINING — OUTSIDE COMPLIANCE */}
                            <div className="border-b border-white/15">
                              <Link
                                href="/training"
                                onClick={closeMenus}
                                className="flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60 transition-all hover:bg-[#343936] hover:text-white"
                              >
                                <span>Training</span>
                              </Link>
                            </div>

                           
                           
                          </div>

                          {/* RIGHT */}
                          {isServicesDetailOpen && (
                            <div
                              className="ml-12 flex-1 border-l border-white/15 pl-12"
                              onMouseEnter={() => {
                                setIsServicesDetailOpen(true);
                              }}
                            >
                              <div className="mb-8">
                                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#E85D04]">
                                  ANKH GRC
                                </p>

                                <h3 className="mt-2 text-[30px] font-semibold tracking-[-0.03em] text-white">
                                  Compliance
                                </h3>
                              </div>

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
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    INDUSTRIES
                ================================================= */}
                <Link
                  href="/industries"
                  onClick={closeMenus}
                  className={`
                    group
                    relative
                    px-1
                    py-3
                    text-[20px]
                    font-medium
                    tracking-[-0.01em]
                    transition-colors
                    duration-300
                 ${
  isServicesOpen
    ? "text-[#E85D04]"
    : "text-neutral-800 hover:text-[#E85D04]"
}
                  `}
                >
                  Industries

                  <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-[#E85D04] transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* =================================================
                    ABOUT
                ================================================= */}
                {/* =================================================
                    COMPANY
                ================================================= */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setIsServicesDetailOpen(false);
                      setIsServicesPinned(false);
                      setIsResourcesOpen(false);
                      setIsCompanyOpen((prev) => !prev);
                    }}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-2
                      px-1
                      py-3
                      text-[20px]
                      font-medium
                      tracking-[-0.01em]
                      transition-colors
                      duration-300
                      ${
                        isCompanyOpen
                          ? "text-[#E85D04]"
                          : "text-neutral-800 hover:text-[#E85D04]"
                      }
                    `}
                    aria-expanded={isCompanyOpen}
                    aria-haspopup="true"
                  >
                    <span>Company</span>

                    <ChevronDown
                      className={`
                        h-[17px]
                        w-[17px]
                        transition-transform
                        duration-300
                        ${isCompanyOpen ? "rotate-180" : ""}
                      `}
                    />

                    <span
                      className={`
                        absolute
                        bottom-1
                        left-0
                        h-[2px]
                        bg-[#E85D04]
                        transition-all
                        duration-300
                        ${isCompanyOpen ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </button>

                  {/* COMPANY DROPDOWN — same style as the other dropdowns */}
                  <div
                    className={`
                      fixed
                      left-0
                      right-0
                      top-[70px]
                      z-[200]
                      w-full
                      bg-[#1C211F]
                      text-white
                      transition-all
                      duration-300
                      ${
                        isCompanyOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible pointer-events-none -translate-y-3 opacity-0"
                      }
                    `}
                  >
                    <div className="w-full">
                      <div className="mx-auto flex min-h-[470px] w-full max-w-[1500px] px-8 py-10 lg:px-12">

                        {/* LEFT */}
                        <div className="w-[390px] shrink-0 pr-14">
                          <div className="mt-8 flex h-[190px] w-[330px] items-center justify-center">
                            <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full border border-orange-500/20">
                              <div className="absolute h-[105px] w-[105px] rounded-full border border-orange-400/20" />
                              <div className="absolute h-[58px] w-[58px] rounded-2xl border border-orange-400/50 bg-[#171c19] shadow-[0_0_30px_rgba(249,115,22,0.22)]">
                                <div className="absolute inset-3 flex items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                                  <div className="h-4 w-4 animate-pulse rounded-full bg-orange-400 shadow-[0_0_18px_7px_rgba(249,115,22,0.65)]" />
                                </div>
                              </div>
                              <span className="absolute left-1 top-1/2 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_4px_rgba(249,115,22,0.7)]" />
                              <span className="absolute right-2 top-7 h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_12px_3px_rgba(249,115,22,0.7)]" />
                              <span className="absolute bottom-3 right-8 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_14px_4px_rgba(249,115,22,0.6)]" />
                            </div>
                          </div>
                        </div>

                        {/* MIDDLE */}
                        <div className="flex flex-1">
                          <div className="w-[360px] shrink-0 space-y-4">
                            {companyItems.map((item) => (
                              <div key={item.name} className="border-b border-white/15">
                                <Link
                                  href={item.href}
                                  onClick={closeMenus}
                                  className="group flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60 transition-all duration-200 hover:bg-[#343936] hover:text-white"
                                >
                                  <span>{item.name}</span>
                                  <ArrowRight className="h-5 w-5 text-white/50 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#E85D04]" />
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    RESOURCES
                ================================================= */}
                <div
                  ref={resourcesRef}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={handleTopResourcesClick}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-2
                      px-1
                      py-3
                      text-[20px]
                      font-medium
                      tracking-[-0.01em]
                      transition-colors
                      duration-300
                    ${
  isResourcesOpen
    ? "text-[#E85D04]"
    : "text-neutral-800 hover:text-[#E85D04]"
}
                    `}
                    aria-expanded={isResourcesOpen}
                    aria-haspopup="true"
                  >
                    <span>Resources</span>

                    <ChevronDown
                      className={`
                        h-[17px]
                        w-[17px]
                        transition-transform
                        duration-300
                        ${isResourcesOpen ? "rotate-180" : ""}
                      `}
                    />

                    <span
                      className={`
                        absolute
                        bottom-1
                        left-0
                        h-[2px]
                        bg-[#E85D04]
                        transition-all
                        duration-300
                        ${
                          isResourcesOpen
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </button>

                  {/* =================================================
                      RESOURCES MEGA MENU
                  ================================================= */}
                  <div
                    className={`
                      fixed
                      left-0
                      right-0
                      top-[70px]
                      z-[200]
                      w-full
                      bg-[#1C211F]
                      text-white
                      transition-all
                      duration-300
                      ${
                        isResourcesOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible pointer-events-none -translate-y-3 opacity-0"
                      }
                    `}
                  >
                    <div className="w-full">
                      <div className="mx-auto flex min-h-[470px] w-full max-w-[1500px] px-8 py-10 lg:px-12">

                        {/* LEFT */}
                        <div className="w-[390px] shrink-0 pr-14">
                         

                          {/* SMALL RESOURCE DATA ANIMATION */}
                          <div className="mt-8 h-[190px] w-[330px]">
                            <div className="relative h-full w-full overflow-hidden">

                              {/* Soft glow */}
                              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

                              {/* Moving scan lines */}
                              <div className="absolute left-[16%] top-0 h-full w-px animate-[pulse_2.8s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-orange-500/45 to-transparent" />
                              <div className="absolute right-[18%] top-0 h-full w-px animate-[pulse_3.6s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-orange-400/30 to-transparent" />

                              {/* Data paths */}
                              <div className="absolute left-[15%] top-[35%] h-px w-[68%] rotate-[7deg] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
                              <div className="absolute left-[20%] top-[65%] h-px w-[60%] -rotate-[10deg] bg-gradient-to-r from-transparent via-orange-400/35 to-transparent" />

                              {/* Floating data points */}
                              <span className="absolute left-[13%] top-[31%] h-2 w-2 animate-pulse rounded-full bg-orange-400 shadow-[0_0_14px_4px_rgba(249,115,22,0.55)]" />
                              <span className="absolute left-[31%] top-[48%] h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500 shadow-[0_0_11px_3px_rgba(249,115,22,0.5)]" />
                              <span className="absolute left-[49%] top-[27%] h-2 w-2 animate-pulse rounded-full bg-orange-300 shadow-[0_0_14px_4px_rgba(249,115,22,0.5)]" />
                              <span className="absolute right-[23%] top-[57%] h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500 shadow-[0_0_11px_3px_rgba(249,115,22,0.5)]" />
                              <span className="absolute right-[12%] top-[34%] h-2 w-2 animate-pulse rounded-full bg-orange-400 shadow-[0_0_14px_4px_rgba(249,115,22,0.5)]" />
                              <span className="absolute left-[25%] bottom-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-orange-300 shadow-[0_0_10px_3px_rgba(249,115,22,0.45)]" />
                              <span className="absolute right-[34%] bottom-[19%] h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_13px_4px_rgba(249,115,22,0.5)]" />

                              {/* Central data visualization */}
                              <div className="absolute left-1/2 top-1/2 flex h-[78px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-orange-500/25 bg-[#171c19]/50">
                                <div className="flex h-full items-end justify-center gap-2 px-5 py-4">
                                  <span className="h-[28%] w-2 animate-[pulse_1.4s_ease-in-out_infinite] bg-orange-500/50" />
                                  <span className="h-[65%] w-2 animate-[pulse_1.8s_ease-in-out_infinite] bg-orange-400/70" />
                                  <span className="h-[45%] w-2 animate-[pulse_1.6s_ease-in-out_infinite] bg-orange-500/60" />
                                  <span className="h-[82%] w-2 animate-[pulse_2s_ease-in-out_infinite] bg-orange-300/70" />
                                  <span className="h-[55%] w-2 animate-[pulse_1.5s_ease-in-out_infinite] bg-orange-500/50" />
                                </div>
                              </div>

                              {/* Floating markers */}
                              <span className="absolute left-[7%] top-[72%] h-2 w-2 rotate-45 border border-orange-500/40" />
                              <span className="absolute right-[7%] bottom-[25%] h-2 w-2 rotate-45 border border-orange-400/40" />

                              {/* Bottom data glow */}
                              <div className="absolute bottom-1 left-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500/45 to-transparent" />

                            </div>
                          </div>

                          <Link
                            href="/insights"
                            onClick={closeMenus}
                            className="group mt-12 inline-flex items-center gap-4 text-[20px] font-medium text-white transition-colors duration-300 hover:text-[#E85D04]"
                          >
                            <span>Explore our resources</span>

                            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                          </Link>
                        </div>

                        {/* MIDDLE */}
                        <div className="flex flex-1">
                          <div className="w-[360px] shrink-0">

                            {/* INSIGHTS */}
                            <div className="border-b border-white/15">
                              <Link
                                href="/insights"
                                onClick={closeMenus}
                                className="flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60 transition-all duration-200 hover:bg-[#343936] hover:text-white"
                              >
                                <span>Insights</span>
                              </Link>
                            </div>

                            {/* PARTNERSHIPS */}
                            <div className="border-b border-white/15">
                              <Link
                                href="/partnerships"
                                onClick={closeMenus}
                                className="flex h-[64px] items-center justify-between px-4 text-[24px] text-white/60 transition-all duration-200 hover:bg-[#343936] hover:text-white"
                              >
                                <span>Partnerships</span>
                              </Link>
                            </div>

                            {/* TRUST CENTER */}
                            <div className="border-b border-white/15">
                              <Link
                                href="/trust-center"
                                onClick={closeMenus}
                                className="flex h-[64px] items-center px-4 text-[24px] text-white/60 transition-all duration-200 hover:bg-[#343936] hover:text-white"
                              >
                                <span>Trust Center</span>
                              </Link>
                            </div>

                             {/* TRUST CENTER */}
                            <div className="border-b border-white/15">
                              <Link
                                href="/certifications"
                                onClick={closeMenus}
                                className="flex h-[64px] items-center px-4 text-[24px] text-white/60 transition-all duration-200 hover:bg-[#343936] hover:text-white"
                              >
                                <span>Certifications</span>
                              </Link>
                            </div>

                            

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}
            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((prev) => !prev)
              }
              className={`
                ml-auto
                rounded-lg
                p-2
                transition-colors
                md:hidden
             ${
  isServicesOpen
    ? "text-[#E85D04]"
    : "text-neutral-800 hover:text-[#E85D04]"
}
              `}
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

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <div
        className={`
          fixed
          inset-0
          z-[90]
          bg-white
          transition-all
          duration-500
          md:hidden
          ${
            isMobileMenuOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >
        <div className="flex h-full flex-col px-7 pb-10 pt-[120px]">

          <div className="flex flex-1 flex-col gap-3">

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
                  className={`
                    h-8
                    w-8
                    transition-transform
                    duration-300
                    ${isServicesOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    isServicesOpen
                      ? "max-h-[650px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
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

            {/* MOBILE INDUSTRIES */}
            <a
              href="/industries"
              onClick={closeMenus}
              className="border-b border-black/10 py-5 text-4xl font-medium tracking-tight text-neutral-900 transition-colors hover:text-[#E85D04]"
            >
              Industries
            </a>

            {/* MOBILE ABOUT */}
            <div className="border-b border-black/10">
              <button
                type="button"
                onClick={() =>
                  setIsCompanyOpen((prev) => !prev)
                }
                className="flex w-full items-center justify-between py-5 text-left text-4xl font-medium tracking-tight text-neutral-900"
              >
                <span>About</span>

                <ChevronDown
                  className={`
                    h-8
                    w-8
                    transition-transform
                    duration-300
                    ${isCompanyOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    isCompanyOpen
                      ? "max-h-[180px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="pb-5 pl-2">
                  {companyItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenus}
                      className="flex items-center justify-between border-b border-black/5 py-4 text-lg text-neutral-700 transition-colors hover:text-[#E85D04]"
                    >
                      {item.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* MOBILE RESOURCES */}
            <div className="border-b border-black/10">
              <button
                type="button"
                onClick={() =>
                  setIsResourcesOpen((prev) => !prev)
                }
                className="flex w-full items-center justify-between py-5 text-left text-4xl font-medium tracking-tight text-neutral-900"
              >
                <span>Resources</span>

                <ChevronDown
                  className={`
                    h-8
                    w-8
                    transition-transform
                    duration-300
                    ${isResourcesOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    isResourcesOpen
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="pb-5 pl-2">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenus}
                      className="flex items-center justify-between border-b border-black/5 py-4 text-lg text-neutral-700 transition-colors hover:text-[#E85D04]"
                    >
                      {item.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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