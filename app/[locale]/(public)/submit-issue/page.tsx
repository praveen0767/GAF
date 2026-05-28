import { Shield, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SubmitIssuePage() {
  const t = useTranslations('SubmitIssue');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-3">
            {t('title')}
          </h1>
          <p className="text-sm text-slate-600 font-medium flex items-center">
            <Lock className="w-4 h-4 mr-2 text-blue-600" /> {t('secure')}
          </p>
        </div>

        {/* Official Form */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          {/* Form Top Banner */}
          <div className="bg-slate-900 px-8 py-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">{t('official')}</span>
          </div>

          <form className="p-8 space-y-8">
            
            {/* Section 1: Basic Info */}
            <div className="space-y-5">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">{t('section1.title')}</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('section1.name')}</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm" placeholder={t('section1.nameHolder')} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('section1.phone')}</label>
                  <input type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm" placeholder={t('section1.phoneHolder')} />
                </div>
              </div>
            </div>

            {/* Section 2: Location */}
            <div className="space-y-5">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">{t('section2.title')}</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('section2.district')}</label>
                  <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm text-slate-700">
                    <option value="">{t('section2.districtHolder')}</option>
                    <option value="east-godavari">{t('section2.districts.east')}</option>
                    <option value="west-godavari">{t('section2.districts.west')}</option>
                    <option value="konaseema">{t('section2.districts.kona')}</option>
                    <option value="kakinada">{t('section2.districts.kakinada')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('section2.mandal')}</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm" placeholder={t('section2.mandalHolder')} />
                </div>
              </div>
            </div>

            {/* Section 3: Issue Details */}
            <div className="space-y-5">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">{t('section3.title')}</h3>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('section3.sector')}</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm text-slate-700">
                  <option value="">{t('section3.sectorHolder')}</option>
                  <option value="agriculture">{t('section3.sectors.agri')}</option>
                  <option value="infrastructure">{t('section3.sectors.infra')}</option>
                  <option value="health">{t('section3.sectors.health')}</option>
                  <option value="education">{t('section3.sectors.edu')}</option>
                  <option value="welfare">{t('section3.sectors.welfare')}</option>
                  <option value="other">{t('section3.sectors.other')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('section3.descLabel')}</label>
                <p className="text-xs text-slate-500 mb-2 font-medium">{t('section3.descHelp')}</p>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm resize-none" 
                  placeholder={t('section3.descHolder')}
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button type="button" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm">
                {t('submitBtn')}
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
