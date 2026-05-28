import { Shield, Target, Eye } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading tracking-tight mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Mission & Vision (Compact Grid) */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-lg text-blue-600">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{t('missionTitle')}</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {t('missionDesc')}
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-lg text-blue-600">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{t('visionTitle')}</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {t('visionDesc')}
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-6 text-center">{t('principlesTitle')}</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { title: t('p1.title'), desc: t('p1.desc') },
              { title: t('p2.title'), desc: t('p2.desc') },
              { title: t('p3.title'), desc: t('p3.desc') }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
