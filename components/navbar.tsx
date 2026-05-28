"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`${isHome ? 'absolute bg-transparent' : 'sticky bg-slate-900 border-b border-slate-800 shadow-sm'} top-0 w-full z-50 py-5 transition-colors duration-300`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="font-heading text-3xl font-bold tracking-tight text-white">
            GAF
          </Link>
          <span className="hidden md:inline-block text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1 border-l border-slate-600 pl-4">
            Godavari Agenda Forum
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">Process</Link>
          <Link href="/categories" className="hover:text-white transition-colors">Sectors</Link>
          <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="/reports" className="hover:text-white transition-colors">Intelligence</Link>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-4 lg:pr-16">
          <Link 
            href="/submit-issue" 
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-colors shadow-sm"
          >
            Submit Issue
          </Link>
          <button 
            className="md:hidden text-white hover:text-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-4 shadow-xl">
          <div className="container mx-auto px-6 flex flex-col gap-4">
            <Link href="/about" className="text-sm font-medium text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Process</Link>
            <Link href="/categories" className="text-sm font-medium text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sectors</Link>
            <Link href="/solutions" className="text-sm font-medium text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
            <Link href="/reports" className="text-sm font-medium text-slate-200 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Intelligence</Link>
            <Link 
              href="/submit-issue" 
              className="inline-flex items-center justify-center px-6 py-3 mt-2 text-sm font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Submit Issue
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
