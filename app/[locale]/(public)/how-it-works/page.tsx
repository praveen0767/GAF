import { Database, FileText, Cpu, Shield, UserCheck, CheckCircle, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HowItWorksPage() {
  const t = useTranslations('HowItWorks');

  const steps = [
    { icon: <Database className="w-5 h-5" />, title: t('step1'), desc: t('step1Desc') },
    { icon: <FileText className="w-5 h-5" />, title: t('step2'), desc: t('step2Desc') },
    { icon: <Cpu className="w-5 h-5" />, title: t('step3'), desc: t('step3Desc') },
    { icon: <Shield className="w-5 h-5" />, title: t('step4'), desc: t('step4Desc') },
    { icon: <UserCheck className="w-5 h-5" />, title: t('step5'), desc: t('step5Desc') },
    { icon: <CheckCircle className="w-5 h-5" />, title: t('step6'), desc: t('step6Desc') },
    { icon: <BarChart3 className="w-5 h-5" />, title: t('step7'), desc: t('step7Desc') },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading tracking-tight mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-6 md:ml-12 space-y-8 pb-8">
          {steps.map((step, i) => (
            <div key={i} className="relative pl-10 md:pl-16">
              {/* Timeline dot/icon */}
              <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                {step.icon}
              </div>
              
              {/* Content Card */}
              <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
