import { useTranslations } from "next-intl";

export default function SolutionsPage() {
  const t = useTranslations('Solutions');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
        <h1 className="text-4xl font-bold font-heading mb-4 text-slate-900">{t('title')}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        <div className="mt-12 p-12 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-500">
          {t('content')}
        </div>
      </div>
    </main>
  );
}
