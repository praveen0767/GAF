"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useState, useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "te" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
        locale === 'en' 
          ? 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white' 
          : 'bg-blue-900/40 border-blue-800/50 text-blue-300 hover:bg-blue-800/50 hover:text-blue-200'
      }`}
      title="Switch Language"
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="text-xs font-bold tracking-wider">
        {locale === "en" ? "EN" : "తెలుగు"}
      </span>
    </button>
  );
}
