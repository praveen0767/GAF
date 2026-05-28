import { useTranslations } from "next-intl";
import { Database, Cpu, Shield, CheckCircle } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function HowItWorksPage() {
  const t = useTranslations('HowItWorks');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900">{t('title')}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">{t('subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Database className="w-8 h-8"/>, title: t('step1'), desc: t('step1Desc') },
            { icon: <Cpu className="w-8 h-8"/>, title: t('step2'), desc: t('step2Desc') },
            { icon: <Shield className="w-8 h-8"/>, title: t('step3'), desc: t('step3Desc') },
            { icon: <CheckCircle className="w-8 h-8"/>, title: t('step4'), desc: t('step4Desc') }
          ].map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/submit-issue" className="inline-flex px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors shadow-sm">
            {t('cta')}
          </Link>
        </div>
      </div>
    </main>
  );
}
