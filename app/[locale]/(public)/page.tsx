import { HeroSection } from "@/components/hero";
import { Link } from "@/i18n/routing";
import { ArrowRight, Database, Users, Shield, CheckCircle, ArrowUpRight, Cpu, Zap, Briefcase, GraduationCap, HeartPulse, Building, Lightbulb, Landmark } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Trust Bar - Dashboard Style */}
      <section id="trust-bar" className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-x divide-slate-100">
            <div className="px-2">
              <div className="text-2xl font-bold text-slate-900 mb-1">1,240</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{t('stats.voices')}</div>
            </div>
            <div className="px-2">
              <div className="text-2xl font-bold text-slate-900 mb-1">14</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{t('stats.districts')}</div>
            </div>
            <div className="px-2">
              <div className="text-2xl font-bold text-slate-900 mb-1">850</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{t('stats.review')}</div>
            </div>
            <div className="px-2">
              <div className="text-2xl font-bold text-blue-600 mb-1">312</div>
              <div className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold">{t('stats.resolved')}</div>
            </div>
            <div className="px-2">
              <div className="text-2xl font-bold text-slate-900 mb-1">35</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{t('stats.mla')}</div>
            </div>
            <div className="px-2">
              <div className="text-2xl font-bold text-slate-900 mb-1">5</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{t('stats.mp')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Forum Purpose */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-slate-900 font-bold mb-6 leading-snug">
            {t('purpose.title1')} <br className="hidden md:block" />
            <span className="text-blue-600 italic">{t('purpose.title2')}</span>
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            {t('purpose.desc')}
          </p>
        </div>
      </section>

      {/* 4. How It Works (Structured Timeline) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-3">{t('process.label')}</h2>
            <h3 className="text-3xl font-bold text-slate-900 font-heading tracking-tight">{t('process.title')}</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-slate-200 -z-10"></div>
            
            {[
              { icon: <Database className="w-5 h-5" />, title: t('process.step1Title'), desc: t('process.step1Desc') },
              { icon: <Cpu className="w-5 h-5" />, title: t('process.step2Title'), desc: t('process.step2Desc') },
              { icon: <Shield className="w-5 h-5" />, title: t('process.step3Title'), desc: t('process.step3Desc') },
              { icon: <CheckCircle className="w-5 h-5" />, title: t('process.step4Title'), desc: t('process.step4Desc') }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white px-4">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 mb-5 shadow-sm z-10">
                  {step.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Categories Grid & 6. Intelligence Layer */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-3">{t('intelligence.label')}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-6 whitespace-pre-line">{t('intelligence.title')}</h3>
              <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
                {t('intelligence.desc')}
              </p>
              <Link href="/reports" className="inline-flex items-center text-[12px] font-bold text-blue-600 uppercase tracking-widest hover:text-slate-900 transition-colors">
                {t('intelligence.viewDashboard')} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: t('sectors.agri'), icon: <Zap className="w-4 h-4" /> },
                { name: t('sectors.youth'), icon: <Briefcase className="w-4 h-4" /> },
                { name: t('sectors.edu'), icon: <GraduationCap className="w-4 h-4" /> },
                { name: t('sectors.health'), icon: <HeartPulse className="w-4 h-4" /> },
                { name: t('sectors.women'), icon: <Users className="w-4 h-4" /> },
                { name: t('sectors.roads'), icon: <Building className="w-4 h-4" /> },
                { name: t('sectors.industry'), icon: <Lightbulb className="w-4 h-4" /> },
                { name: t('sectors.gov'), icon: <Landmark className="w-4 h-4" /> },
                { name: t('sectors.tech'), icon: <Cpu className="w-4 h-4" /> }
              ].map((cat, i) => (
                <div key={i} className="bg-white border border-slate-200 p-4 flex flex-col items-center justify-center text-center hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer rounded-lg group">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors mb-3">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider group-hover:text-blue-700">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Solutions Preview (Dashboard style cards) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-emerald-600 font-bold mb-3">{t('solutions.label')}</h2>
              <h3 className="text-3xl font-bold text-slate-900 font-heading tracking-tight">{t('solutions.title')}</h3>
            </div>
            <Link href="/solutions" className="inline-flex items-center text-[12px] font-bold text-slate-800 border border-slate-200 px-5 py-2.5 hover:bg-slate-50 rounded transition-colors uppercase tracking-widest shadow-sm">
              {t('solutions.viewAll')} <ArrowUpRight className="ml-2 w-3 h-3" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] uppercase tracking-widest text-emerald-700 font-bold px-2 py-1 bg-emerald-50 rounded">{t('solutions.resolvedBadge')}</span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">ID: GAF-90{i}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">{t('solutions.sampleTitle')} {i}</h4>
                <p className="text-[13px] text-slate-600 mb-5 line-clamp-2 font-medium">{t('solutions.sampleDesc')}</p>
                <div className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest border-t border-slate-100 pt-4">
                  <Users className="w-3 h-3 mr-2 text-slate-400" /> {t('solutions.owner')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 font-heading text-white whitespace-pre-line">
            {t('cta.title')}
          </h2>
          <p className="text-base text-slate-300 font-medium mb-10 max-w-xl mx-auto">
            {t('cta.desc')}
          </p>
          <Link href="/submit-issue" className="inline-flex items-center text-[13px] font-bold text-slate-900 bg-white px-8 py-4 hover:bg-slate-100 transition-colors uppercase tracking-widest rounded-md shadow-md">
            {t('cta.btn')} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
