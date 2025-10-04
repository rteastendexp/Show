import React, { useState, useEffect } from "react";
import { useGoogleImages } from "../hooks/google";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
    const { setLanguage, t } = useLanguage();

    // Always force English
    React.useEffect(() => {
      setLanguage("en");
    }, [setLanguage]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
  // Language toggle removed: always English
  };

  const navItems = [
    { key: "home", href: "/", label: t.nav.home },
    { key: "services", href: "/services", label: t.nav.services },
    { key: "gallery", href: "/gallery", label: t.nav.gallery },
    { key: "meetingpoints", href: "/mapas", label: t.nav.meetingPoints || "Meeting Points" },
    { key: "contact", href: "/contact", label: t.nav.contact },
  ];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const { logo } = useGoogleImages();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo || "/imgp/logo.webp"}
              alt="Roatan East Hidden Gem Logo"
              className="w-12 h-12 rounded-full shadow-lg border-2 border-white bg-white object-cover group-hover:scale-110 transition-transform duration-200"
              style={{ background: "white" }}
            />
            <div className="hidden sm:block">
              <h1
                className="font-bold text-lg text-teal-500"
              >
                Roatan East
              </h1>
              <p
                className="text-sm text-teal-500"
              >
                Hidden Gem
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="font-medium transition-colors duration-200 text-teal-500 hover:text-teal-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          {/* Mobile Menu Button Only */}
          <div className="flex items-center gap-2 md:gap-4">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mb-4 overflow-hidden">
            <nav className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 font-medium transition-colors duration-200 text-teal-500 hover:bg-teal-50 hover:text-teal-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
