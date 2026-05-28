"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
          <button className="md:hidden text-white hover:text-slate-200 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
