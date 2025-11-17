"use client";

import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import explorebtn from "@/assets/buttons/exploreservicebutton.svg";
import requestbtn from "@/assets/buttons/requestdemobutton.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Infinity as InfinityIcon, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import intervaslogoblack from "@/assets/intervaslogoblack.svg";
import logoblack from "@/assets/intervaslogoblack.svg";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change to glassmorphism after scrolling past 100px (adjust as needed)
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we should use black logo (on services pages, contact page, or when scrolled)
  const shouldUseBlackLogo =
    location.pathname.includes("/services") ||
    location.pathname === "/contact" ||
    isScrolled;

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `${
      isActive
        ? "text-[#007DFE] font-semibold relative after:content-[''] after:absolute after:w-full after:scale-x-100 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:origin-bottom-right after:transition-transform after:duration-300"
        : "text-gray-400 hover:text-[#007DFE] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    } transition-colors`;

  return (
    <header
      className={`fixed top-0 z-50 w-full  transition-all duration-300 ${
        isScrolled
          ? "bg-white/5 backdrop-blur-sm border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="2xl:container 2xl:mx-auto flex items-center justify-between lg:px-4 lg:py-3">
        <div className="flex items-center gap-8 py-3">
          <Link to="/" className="lg:flex items-center gap-2 font-semibold">
            <img
              src={shouldUseBlackLogo ? intervaslogoblack : "/images/Logo.svg"}
              alt="IntarVAS Logo"
              className="h-8 w-[200px]"
            />
          </Link>

          <nav className="hidden lg:gap-6 lg:flex">
            <NavLink color="#C2C6CE" to="/" end className={linkCls}>
              Home
            </NavLink>
            <div className="relative group">
              <div className="flex items-center gap-1 text-gray-400 hover:text-[#007DFE] cursor-pointer">
                <span className={linkCls({ isActive: false })}>Services</span>
                <ChevronDown className="h-4 w-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-[#007DFE]" />
              </div>
              <div className="absolute top-full left-0 mt-2 min-w-[240px] bg-white shadow-lg border border-gray-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  <Link
                    to="/services/pbx"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007DFE] transition-colors"
                  >
                    IntarvAS PBX
                  </Link>
                  <Link
                    to="/services/all-in-solutions"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007DFE] transition-colors"
                  >
                    All In one Solutions
                  </Link>

                  <Link
                    to="/services/bulk-messaging"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007DFE] transition-colors"
                  >
                    Bulk Messaging
                  </Link>
                  <Link
                    to="/services/numbers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007DFE] transition-colors"
                  >
                    Vanity & toll free numbers
                  </Link>
                </div>
              </div>
            </div>
            <NavLink to="/about" className={linkCls}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={linkCls}>
              Contact Us
            </NavLink>
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <Link to="/about#services-showcase-section">Explore Services</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu color="#C2C6CE" className="h-6 w-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full h-full bg-white/95 backdrop-blur-md p-0 [&>button]:h-8 [&>button]:w-8 [&>button]:text-gray-600 [&>button]:hover:text-gray-800"
            >
              <div className="flex flex-col h-full">
                {/* Header with logo */}
                <div className="flex items-center p-4 border-b border-gray-200">
                  <img
                    src={intervaslogoblack}
                    alt="IntarVAS Logo"
                    className="h-8 w-[200px]"
                  />
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-center px-6 space-y-8">
                  <Link
                    to="/"
                    className={`text-2xl font-semibold transition-colors relative inline-block ${
                      location.pathname === "/"
                        ? "text-[#007DFE]"
                        : "text-gray-900 hover:text-[#007DFE]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left after:scale-x-100">
                      Home
                    </span>
                  </Link>

                  <div className="space-y-4">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center gap-2 text-2xl font-semibold transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                        location.pathname.includes("/services")
                          ? "text-[#007DFE] after:scale-x-100"
                          : "text-gray-900 hover:text-[#007DFE]"
                      }`}
                    >
                      Services
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="flex flex-col space-y-3 pl-4 animate-fade-in">
                        <Link
                          to="/services/pbx"
                          className={`flex text-center text-lg transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left `}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span
                            className={`relative inline-block after:w-full after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                              location.pathname === "/services/pbx"
                                ? "text-[#007DFE] after:scale-x-100"
                                : "text-gray-700 hover:text-[#007DFE]"
                            }`}
                          >
                            IntarvAS PBX
                          </span>
                        </Link>

                        <Link
                          to="/services/all-in-solutions"
                          className={`flex items-center relative text-lg transition-colors after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span
                            className={`relative inline-block after:w-full after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                              location.pathname === "/services/all-in-solutions"
                                ? "text-[#007DFE] after:scale-x-100"
                                : "text-gray-700 hover:text-[#007DFE]"
                            }`}
                          >
                            All In one Solutions
                          </span>
                        </Link>
                        <Link
                          to="/services/bulk-messaging"
                          className={`flex text-center text-lg transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left `}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span
                            className={`relative inline-block after:w-full after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300  ${
                              location.pathname === "/services/bulk-messaging"
                                ? "text-[#007DFE] after:scale-x-100"
                                : "text-gray-700 hover:text-[#007DFE]"
                            }`}
                          >
                            Bulk Messaging
                          </span>
                        </Link>
                        <Link
                          to="/services/numbers"
                          className={`flex text-center text-lg transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left `}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span
                            className={`relative inline-block after:w-full after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                              location.pathname === "/services/numbers"
                                ? "text-[#007DFE] after:scale-x-100"
                                : "text-gray-700 hover:text-[#007DFE]"
                            } `}
                          >
                            Vanity & toll free numbers
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/about"
                    className={`flex text-center text-2xl font-semibold transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`relative inline-block after:w-full after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300  ${
                        location.pathname === "/about"
                          ? "text-[#007DFE] after:scale-x-100"
                          : "text-gray-900 hover:text-[#007DFE]"
                      }`}
                    >
                      About Us
                    </span>
                  </Link>

                  <Link
                    to="/contact"
                    className={`flex text-center text-2xl font-semibold transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`relative inline-block after:w-full after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                        location.pathname === "/contact"
                          ? "text-[#007DFE] after:scale-x-100"
                          : "text-gray-900 hover:text-[#007DFE]"
                      }`}
                    >
                      Contact Us
                    </span>
                  </Link>
                </nav>

                {/* Action Buttons */}
                <div className="p-6 space-y-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="w-full text-lg py-6"
                    asChild
                  >
                    <a href="/About" target="_blank" rel="noopener noreferrer">
                      Explore Services
                    </a>
                  </Button>
                  <Button
                    variant="hero"
                    className="w-full text-lg py-6"
                    asChild
                  >
                    <Link
                      to="/Contact"
                      className="w-full block text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Request Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
