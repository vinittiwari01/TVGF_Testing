"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isActive, setIsActive] = useState("/")

  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const structuredPages = [
    {
      name: "Home",
      href: "/",
      subpages: []
    },
    {
      name: "About Us",
      href: "/about",
      subpages: [
        { label: "Our Story", href: "/about/story", desc: "The SPACE framework and our mission." },
        { label: "Founder Story", href: "/about/founder", desc: "Anurag Maloo's survival and vision." },
        { label: "Team & Advisors", href: "/about/team", desc: "The people driving the movement." },
        { label: "Partners & Networks", href: "/about/partners", desc: "Our institutional collaborators." }
      ]
    },
    {
      name: "Why Glaciers Matter",
      href: "/why-glaciers-matter",
      subpages: [
        { label: "The Crisis", href: "/why-glaciers-matter/crisis", desc: "The systemic risk of glacier loss." },
        { label: "The Preparedness Gap", href: "/why-glaciers-matter/gap", desc: "Why communities are left vulnerable." },
        { label: "The Decisive Decade", href: "/why-glaciers-matter/decade", desc: "The narrow window for action." }
      ]
    },
    {
      name: "Programs",
      href: "/programs",
      subpages: [
        { label: "Glacier Dialogues", href: "/programs/glacier-dialogues", desc: "Monthly policy dialogue series." },
        { label: "Glacier Guardians Fellowship", href: "/programs/glacier-guardians-fellowship", desc: "Empowering youth climate leaders." },
        { label: "GlacierX Festival", href: "/programs/glacierx-festival", desc: "Convergence of science, art, and policy." },
        { label: "Time Markers", href: "/programs/time-markers", desc: "Installations at historical recession lines." },
        { label: "HCSN", href: "/programs/hcsn", desc: "Himalayan Climate Sentinels Network." },
        { label: "GlacierX Platform", href: "/programs/glacierx-platform", desc: "Open Digital Public Good infrastructure." }
      ]
    },
    {
      name: "Get Involved",
      href: "/get-involved",
      subpages: [
        { label: "Partner With Us", href: "/get-involved/partner", desc: "Institutional and funding partnerships." },
        { label: "Volunteer & Internships", href: "/get-involved/volunteer", desc: "Contribute your skills to the cause." },
        { label: "Join as Glacier Guardian", href: "/get-involved/glacier-guardian", desc: "Become part of the community." }
      ]
    },
    {
      name: "Media",
      href: "/media",
      subpages: [
        { label: "Press & News", href: "/media/press", desc: "Latest coverage and announcements." },
        { label: "Glacier Dialogues Sessions", href: "/media/sessions", desc: "Archive of past dialogues." },
        { label: "Publications & Reports", href: "/media/publications", desc: "Research and policy briefs." },
        { label: "Photography & Film", href: "/media/visual", desc: "Visuals from the frontlines." }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsActive(pathname)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-300 font-cabin rounded-b-xl  ${showNavbar ? "translate-y-0" : ""
        } border-b border-white/20 bg-glacier-primary shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-14 items-center">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-dark-logo.webp"
              alt="Company Logo"
              width={140}
              height={48}
              className="h-8 sm:h-10 w-auto object-contain rounded-lg"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-end" ref={dropdownRef}>
            <div className="flex md:space-x-4 lg:space-x-6 items-center h-full mr-6">
              {structuredPages.map((page) => (
                <div
                  key={page.name}
                  className="relative h-14 flex items-center"
                  onMouseEnter={() => setDesktopDropdown(page.name)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  {/* Main Nav Link */}
                  <Link
                    href={page.href}
                    className={`flex items-center gap-1 text-white font-medium text-xs md:text-[13px] lg:text-sm hover:text-glacier-dark transition-colors font-nohemi ${isActive === page.href ? "underline" : ""}`}
                  >
                    {page.name}
                    {page.subpages?.length > 0 && <ChevronDown size={14} />}
                  </Link>

                  {/* Dropdown */}
                  {page.subpages?.length > 0 && desktopDropdown === page.name && (
                    <div className="fixed left-0 top-14 w-full bg-white text-black shadow-lg border-t border-gray-100 z-50">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                          {page.subpages.map((subpage) => (
                            <Link
                              key={subpage.label}
                              href={subpage.href}
                              onClick={() => setDesktopDropdown(null)}
                              className="block group"
                            >
                              <h3 className="text-glacier-dark font-semibold text-base mb-1 group-hover:text-glacier-primary transition-colors font-nohemi">
                                {subpage.label}
                              </h3>
                              <p className="text-gray-600 text-sm font-cabin leading-relaxed group-hover:text-gray-900 transition-colors">
                                {subpage.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 border-l border-white/20 pl-6">
              <Link
                href="/get-involved/partner"
                className="hidden lg:flex items-center justify-center px-4 py-2 border-2 border-glacier-primary text-white hover:bg-glacier-primary text-sm font-medium rounded-md transition-colors font-cabin"
              >
                Partner With Us
              </Link>
              <Link
                href="/get-involved/glacier-guardian"
                className="flex items-center justify-center px-4 py-2 bg-glacier-dark text-white hover:bg-glacier-dark/90 text-sm font-medium rounded-md transition-colors font-cabin"
              >
                Join as Glacier Guardian
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setMobileDropdown(null);
              }}
              className="text-white hover:text-glacier-dark transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 space-y-4 backdrop-blur-md shadow-md border-t border-white/20">
          {structuredPages.map((link) => (
            <div key={link.name}>
              <button
                onClick={() =>
                  setMobileDropdown((prev) =>
                    prev === link.name ? null : link.name
                  )
                }
                className="w-full flex justify-between items-center text-left text-white font-medium text-base py-2"
              >
                {link.name}
                {link.subpages?.length > 0 && <ChevronDown size={16} />}
              </button>

              {mobileDropdown === link.name && link.subpages?.length > 0 && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.subpages.map((subpage) => (
                    <Link
                      key={subpage.label}
                      href={subpage.href}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block text-white text-sm hover:text-glacier-primary transition-colors font-cabin"
                    >
                      {subpage.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}