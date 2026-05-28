import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Stable Background Handling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Godavari region"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Simple gradients for contrast (no mix-blend lag) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 lg:px-12 flex flex-col justify-center pt-24 pb-16 h-full">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-heading">
            People’s Voice. <br />
            <span className="text-blue-400">Structured Intelligence.</span> <br />
            Public Action.
          </h1>

          {/* Subheading */}
          <p className="max-w-xl text-lg text-slate-300 font-medium leading-relaxed mb-10">
            A people-first platform for welfare, development, industrial growth, and technology-driven governance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/submit-issue"
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors shadow-sm w-full sm:w-auto"
            >
              Submit Issue
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border border-slate-600 rounded-md hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Glassmorphic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <a 
          href="#trust-bar" 
          className="flex flex-col items-center group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-4 group-hover:text-white transition-colors">
            Discover More
          </span>
          <div className="w-[30px] h-[50px] rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex justify-center p-1 relative overflow-hidden group-hover:border-white/40 transition-all shadow-lg">
            {/* Animated dot */}
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 animate-bounce shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
