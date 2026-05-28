import { useTranslations } from "next-intl";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function SolutionsPage() {
  const t = useTranslations('Solutions');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900">{t('title')}</h1>
          <p className="text-lg text-slate-600 font-medium">{t('subtitle')}</p>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">{t('status')}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('sol' + i + 'Title')}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{t('sol' + i + 'Desc')}</p>
              </div>
              <div className="md:border-l md:border-slate-100 md:pl-8 md:py-4">
                <button className="inline-flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors">
                  {t('viewDetails')} <ArrowUpRight className="ml-1 w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
