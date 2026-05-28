const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'messages', 'en.json');
const tePath = path.join(__dirname, 'messages', 'te.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));

// 1. HowItWorks
en["HowItWorks"] = {
  "title": "The GAF Process",
  "subtitle": "How we convert disorganized public grievances into structured, actionable intelligence.",
  "step1": "Public Voice Registration",
  "step1Desc": "Citizens securely register their issues through our platform. Data is encrypted and mapped to specific geographic coordinates.",
  "step2": "Automated Classification",
  "step2Desc": "Our intelligence engine automatically categorizes issues by sector, urgency, and pattern clustering.",
  "step3": "Strategic Review",
  "step3Desc": "Subject matter experts and regional coordinators review clustered issues to formulate intervention strategies.",
  "step4": "Action & Resolution",
  "step4Desc": "Data is presented to the leadership network for definitive public action and continuous tracking until resolved.",
  "cta": "Submit an Issue Today"
};

te["HowItWorks"] = {
  "title": "GAF ప్రక్రియ",
  "subtitle": "అవ్యవస్థీకృత ప్రజా ఫిర్యాదులను నిర్మాణాత్మక, చర్య తీసుకోదగిన ఇంటెలిజెన్స్‌గా మేము ఎలా మారుస్తాము.",
  "step1": "ప్రజా స్వరం నమోదు",
  "step1Desc": "పౌరులు మా ప్లాట్‌ఫారమ్ ద్వారా వారి సమస్యలను సురక్షితంగా నమోదు చేసుకుంటారు. డేటా గుప్తీకరించబడుతుంది మరియు నిర్దిష్ట భౌగోళిక కోఆర్డినేట్‌లకు మ్యాప్ చేయబడుతుంది.",
  "step2": "స్వయంచాలక వర్గీకరణ",
  "step2Desc": "మా ఇంటెలిజెన్స్ ఇంజిన్ స్వయంచాలకంగా రంగం, ఆవశ్యకత మరియు నమూనా క్లస్టరింగ్ ద్వారా సమస్యలను వర్గీకరిస్తుంది.",
  "step3": "వ్యూహాత్మక సమీక్ష",
  "step3Desc": "జోక్య వ్యూహాలను రూపొందించడానికి సబ్జెక్ట్ నిపుణులు మరియు ప్రాంతీయ సమన్వయకర్తలు క్లస్టర్ చేయబడిన సమస్యలను సమీక్షిస్తారు.",
  "step4": "చర్య మరియు పరిష్కారం",
  "step4Desc": "ఖచ్చితమైన పబ్లిక్ చర్య కోసం మరియు పరిష్కరించబడే వరకు నిరంతర ట్రాకింగ్ కోసం నాయకత్వ నెట్‌వర్క్‌కు డేటా అందించబడుతుంది.",
  "cta": "ఈరోజే సమస్యను సమర్పించండి"
};

// 2. Categories
en["Categories"] = {
  "title": "Sector Intelligence Index",
  "subtitle": "Browse public issues and structural metrics categorized by specific development sectors.",
  "sectors": {
    "agri": "Agriculture & Irrigation",
    "youth": "Youth & Employment",
    "edu": "Education & Schools",
    "health": "Public Health",
    "infra": "Infrastructure & Roads",
    "welfare": "Social Welfare"
  },
  "desc": "Real-time tracking of sector health and pending resolutions."
};

te["Categories"] = {
  "title": "సెక్టార్ ఇంటెలిజెన్స్ ఇండెక్స్",
  "subtitle": "నిర్దిష్ట అభివృద్ధి రంగాల వారీగా వర్గీకరించబడిన ప్రజా సమస్యలు మరియు నిర్మాణాత్మక కొలమానాలను బ్రౌజ్ చేయండి.",
  "sectors": {
    "agri": "వ్యవసాయం & నీటిపారుదల",
    "youth": "యువత & ఉపాధి",
    "edu": "విద్య & పాఠశాలలు",
    "health": "ప్రజారోగ్యం",
    "infra": "మౌలిక సదుపాయాలు & రోడ్లు",
    "welfare": "సాంఘిక సంక్షేమం"
  },
  "desc": "రంగం ఆరోగ్యం మరియు పెండింగ్ పరిష్కారాల నిజ-సమయ ట్రాకింగ్."
};

// 3. Solutions
en["Solutions"] = {
  "title": "Public Actions & Solutions",
  "subtitle": "A transparent ledger of strategic interventions and verified resolutions across the region.",
  "status": "Resolved",
  "sol1Title": "Irrigation Canal Modernization",
  "sol1Desc": "Pattern detection flagged severe water loss in East Godavari. GAF coordinated with local irrigation boards for a 14-day rapid repair.",
  "sol2Title": "Primary Health Center Staffing",
  "sol2Desc": "Clustered health complaints led to the reassignment of 12 medical officers to understaffed rural clinics.",
  "sol3Title": "Highway Infrastructure Repair",
  "sol3Desc": "Aggregated pothole reports triggered a state-level intervention resulting in 45km of emergency road surfacing.",
  "viewDetails": "View Action Details"
};

te["Solutions"] = {
  "title": "పబ్లిక్ చర్యలు & పరిష్కారాలు",
  "subtitle": "ప్రాంతం అంతటా వ్యూహాత్మక జోక్యాలు మరియు ధృవీకరించబడిన పరిష్కారాల పారదర్శక లెడ్జర్.",
  "status": "పరిష్కరించబడింది",
  "sol1Title": "నీటిపారుదల కాలువ ఆధునికీకరణ",
  "sol1Desc": "తూర్పు గోదావరిలో నమూనా గుర్తింపు తీవ్రమైన నీటి నష్టాన్ని గుర్తించింది. 14 రోజుల వేగవంతమైన మరమ్మత్తు కోసం GAF స్థానిక ఇరిగేషన్ బోర్డులతో సమన్వయం చేసింది.",
  "sol2Title": "ప్రాథమిక ఆరోగ్య కేంద్రం సిబ్బంది",
  "sol2Desc": "క్లస్టర్ చేయబడిన ఆరోగ్య ఫిర్యాదులు 12 మంది వైద్యాధికారులను తగినంత సిబ్బంది లేని గ్రామీణ క్లినిక్‌లకు తిరిగి కేటాయించడానికి దారితీశాయి.",
  "sol3Title": "హైవే మౌలిక సదుపాయాల మరమ్మత్తు",
  "sol3Desc": "సమగ్ర గుంతల నివేదికలు రాష్ట్ర స్థాయి జోక్యాన్ని ప్రేరేపించాయి, దీని ఫలితంగా 45 కి.మీ అత్యవసర రహదారి ఉపరితలం ఏర్పడింది.",
  "viewDetails": "చర్య వివరాలను చూడండి"
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(tePath, JSON.stringify(te, null, 2));

// Generate TSX files
const compDir = path.join(__dirname, 'app', '[locale]', '(public)');

const howItWorks = `import { useTranslations } from "next-intl";
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
`;

const categories = `import { useTranslations } from "next-intl";
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
`;

const solutions = `import { useTranslations } from "next-intl";
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
`;

fs.writeFileSync(path.join(compDir, 'how-it-works', 'page.tsx'), howItWorks);
fs.writeFileSync(path.join(compDir, 'categories', 'page.tsx'), categories);
fs.writeFileSync(path.join(compDir, 'solutions', 'page.tsx'), solutions);

console.log('Pages rebuilt!');
