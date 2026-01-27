"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck, LogIn, UserPlus } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-secondary" />
            <span className="font-heading font-bold text-2xl text-dark tracking-tight">
              DOHSH<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors relative ${isActive
                    ? "text-secondary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-secondary"
                    : "text-gray-600 hover:text-secondary"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Buttons - Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sign Up Link */}
            <Link
              href="#"
              className="text-secondary font-medium hover:text-primary transition-colors"
            >
              Sign Up
            </Link>

            {/* Client Login Button */}
            <Link
              href="#"
              className="bg-secondary hover:bg-primary text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Client Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${isActive
                    ? "text-secondary bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Mobile Login/Signup */}
            <Link
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md text-secondary hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              <UserPlus className="h-5 w-5" />
              Sign Up
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-3 py-3 text-base font-semibold rounded-md bg-secondary text-white hover:bg-primary"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="h-5 w-5" />
              Client Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}