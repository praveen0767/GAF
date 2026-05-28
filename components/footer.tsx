import { Link } from "@/i18n/routing";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Identity */}
          <div className="md:col-span-2">
            <Link href="/" className="font-heading text-3xl font-bold tracking-tight text-white mb-4 block">
              GAF
            </Link>
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-md mb-6">
              {t('desc')}
            </p>
            <div className="flex items-center text-xs text-slate-400 uppercase tracking-widest font-semibold gap-4">
              <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-slate-500" /> Godavari Region</span>
              <span className="flex items-center"><Mail className="w-3 h-3 mr-2 text-slate-500" /> {t('email')}</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t('links')}</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">{t('process') || 'The Process'}</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">{t('sectors') || 'Sector Index'}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t('solutions') || 'Public Actions'}</Link></li>
              <li><Link href="/reports" className="hover:text-white transition-colors">{t('intelligence')}</Link></li>
            </ul>
          </div>

          {/* Action */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">{t('submit')}</h4>
            <p className="text-sm text-slate-400 mb-4 font-medium">Have a public concern? Log it securely with our intelligence team.</p>
            <Link href="/submit-issue" className="inline-flex items-center text-xs font-bold text-white hover:text-blue-400 uppercase tracking-widest transition-colors">
              Submit Now <ArrowRight className="ml-2 w-3 h-3" />
            </Link>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Godavari Agenda Forum. {t('rights')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">{t('privacy')}</Link>
            <Link href="#" className="hover:text-white">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
