import { useTranslations } from "next-intl";
import { Zap, Briefcase, GraduationCap, HeartPulse, Building, Users } from "lucide-react";

export default function CategoriesPage() {
  const t = useTranslations('Categories');

  const sectors = [
    { key: 'agri', icon: <Zap className="w-6 h-6"/> },
    { key: 'youth', icon: <Briefcase className="w-6 h-6"/> },
    { key: 'edu', icon: <GraduationCap className="w-6 h-6"/> },
    { key: 'health', icon: <HeartPulse className="w-6 h-6"/> },
    { key: 'infra', icon: <Building className="w-6 h-6"/> },
    { key: 'welfare', icon: <Users className="w-6 h-6"/> }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900">{t('title')}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
              <div className="w-12 h-12 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('sectors.' + s.key)}</h3>
              <p className="text-sm text-slate-500 font-medium">{t('desc')}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
