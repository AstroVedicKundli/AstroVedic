"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Kundli", href: "/kundli" },
    { name: "Horoscope", href: "/horoscope" },
    { name: "Services", href: "/services" },
    { name: "Yatra", href: "/yatra" },
    { name: "Puja", href: "/puja" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 pt-4">
      <nav className="mx-auto max-w-7xl bg-[#fefbf6] rounded-3xl shadow-lg overflow-hidden" aria-label="Top">
        <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/logo_transparent.png"
                alt="Astro Vedic Kundli"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-[#333355] hover:text-[#FF7B60] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/kundli"
              className="rounded-full bg-[#333355] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#2a2a45] transition-all"
            >
              Login/Identificarse
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#333355]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - Expandable dropdown with animation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 pt-2 space-y-1 border-t border-[#333355]/10">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-[#333355] hover:bg-[#333355]/5 transition-all"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  animation: mobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/kundli"
                className="block w-full rounded-full px-4 py-3 text-center text-base font-bold text-white bg-[#333355] hover:bg-[#2a2a45] transition-all shadow-md"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  animation: mobileMenuOpen
                    ? `slideIn 0.3s ease-out ${navigation.length * 0.05}s both`
                    : "none",
                }}
              >
                Login/Identificarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Add keyframe animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
