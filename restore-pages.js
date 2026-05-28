const fs = require('fs');
const path = require('path');

const compDir = path.join(__dirname, 'app', '[locale]', '(public)');

const howItWorks = `import { Database, FileText, Cpu, Shield, UserCheck, CheckCircle, BarChart3 } from "lucide-react";
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
`;

const categories = `import { Briefcase, HeartPulse, GraduationCap, Home, Zap, Shield, Users, Building, Cpu } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function CategoriesPage() {
  const t = useTranslations('Categories');

  const categories = [
    { id: "agriculture", title: t('sectors.agriculture'), icon: <Zap className="w-5 h-5" />, count: 142, desc: t('sectorsDesc.agriculture') },
    { id: "health", title: t('sectors.health'), icon: <HeartPulse className="w-5 h-5" />, count: 89, desc: t('sectorsDesc.health') },
    { id: "education", title: t('sectors.education'), icon: <GraduationCap className="w-5 h-5" />, count: 215, desc: t('sectorsDesc.education') },
    { id: "infra", title: t('sectors.infra'), icon: <Building className="w-5 h-5" />, count: 341, desc: t('sectorsDesc.infra') },
    { id: "welfare", title: t('sectors.welfare'), icon: <Users className="w-5 h-5" />, count: 120, desc: t('sectorsDesc.welfare') },
    { id: "housing", title: t('sectors.housing'), icon: <Home className="w-5 h-5" />, count: 75, desc: t('sectorsDesc.housing') },
    { id: "employment", title: t('sectors.employment'), icon: <Briefcase className="w-5 h-5" />, count: 198, desc: t('sectorsDesc.employment') },
    { id: "governance", title: t('sectors.governance'), icon: <Shield className="w-5 h-5" />, count: 54, desc: t('sectorsDesc.governance') },
    { id: "tech", title: t('sectors.tech'), icon: <Cpu className="w-5 h-5" />, count: 32, desc: t('sectorsDesc.tech') },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-4">
            {t('title')}
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link key={cat.id} href={\`/categories/\${cat.id}\`} className="block h-full">
              <div className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-400 hover:shadow-md transition-all group h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-[13px] uppercase tracking-wider">{cat.title}</h3>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                    {cat.count} {t('issuesCount')}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-auto">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
`;

const solutions = `import { Users, ArrowUpRight, Search, Filter } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function SolutionsPage() {
  const t = useTranslations('Solutions');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-2">
              {t('title')}
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder={t('searchPlaceholder')}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white shadow-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 bg-white rounded-md text-sm font-semibold hover:bg-slate-50 transition-colors text-slate-700 shadow-sm">
              <Filter className="w-4 h-4" /> {t('filter')}
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-5">
                <span className="text-[10px] uppercase tracking-widest text-emerald-700 font-bold px-2 py-1 bg-emerald-50 rounded-md border border-emerald-100">{t('status')}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">ID: GAF-00{i}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">{t('solTitle')} {i}</h4>
              <p className="text-sm text-slate-600 mb-6 line-clamp-3 font-medium flex-grow">
                {t('solDesc')}
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <Users className="w-3 h-3 mr-1.5 text-slate-400" /> {t('taskforce')}
                </div>
                <Link href={\`/solutions/gaf-00\${i}\`} className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors">
                  {t('details')} <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
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

// Also need to update the dictionaries to contain all those keys
const enPath = path.join(__dirname, 'messages', 'en.json');
const tePath = path.join(__dirname, 'messages', 'te.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));

en["HowItWorks"] = {
  "title": "How It Works",
  "subtitle": "From an individual's voice to structured intelligence and final resolution. Our systematic 7-step process ensures nothing is lost.",
  "step1": "1. Public Voice", "step1Desc": "Citizens securely register their issues and concerns.",
  "step2": "2. Issue Registration", "step2Desc": "Data is standardized and logged into the system.",
  "step3": "3. Classification", "step3Desc": "Algorithmic sorting assigns categories and urgency.",
  "step4": "4. Intelligence Review", "step4Desc": "PIT analysts assess patterns and strategic impact.",
  "step5": "5. Leadership Review", "step5Desc": "Elected officials and administrators review priorities.",
  "step6": "6. Public Action", "step6Desc": "Resources are mobilized and interventions executed.",
  "step7": "7. Tracking & Resolution", "step7Desc": "Outcome is verified and metrics updated on the dashboard."
};

te["HowItWorks"] = {
  "title": "ఇది ఎలా పనిచేస్తుంది",
  "subtitle": "వ్యక్తిగత స్వరం నుండి నిర్మాణాత్మక మేధస్సు మరియు తుది పరిష్కారం వరకు. మా క్రమబద్ధమైన 7-దశల ప్రక్రియ ఏదీ కోల్పోకుండా నిర్ధారిస్తుంది.",
  "step1": "1. పబ్లిక్ వాయిస్", "step1Desc": "పౌరులు తమ సమస్యలను సురక్షితంగా నమోదు చేసుకుంటారు.",
  "step2": "2. ఇష్యూ రిజిస్ట్రేషన్", "step2Desc": "డేటా ప్రామాణికం చేయబడి సిస్టమ్‌లోకి లాగ్ చేయబడుతుంది.",
  "step3": "3. వర్గీకరణ", "step3Desc": "అల్గారిథమిక్ సార్టింగ్ కేటగిరీలు మరియు ఆవశ్యకతను కేటాయిస్తుంది.",
  "step4": "4. ఇంటెలిజెన్స్ సమీక్ష", "step4Desc": "విశ్లేషకులు నమూనాలు మరియు వ్యూహాత్మక ప్రభావాన్ని అంచనా వేస్తారు.",
  "step5": "5. నాయకత్వ సమీక్ష", "step5Desc": "ఎన్నుకోబడిన అధికారులు మరియు నిర్వాహకులు ప్రాధాన్యతలను సమీక్షిస్తారు.",
  "step6": "6. పబ్లిక్ యాక్షన్", "step6Desc": "వనరులు సమీకరించబడతాయి మరియు జోక్యాలు అమలు చేయబడతాయి.",
  "step7": "7. ట్రాకింగ్ & రిజల్యూషన్", "step7Desc": "ఫలితం ధృవీకరించబడుతుంది మరియు డాష్‌బోర్డ్‌లో మెట్రిక్‌లు నవీకరించబడతాయి."
};

en["Categories"] = {
  "title": "Sector Index",
  "subtitle": "Browse public concerns by categorized sectors. Our intelligence layer automatically routes issues to the appropriate domain for strategic review.",
  "issuesCount": "Issues",
  "sectors": {
    "agriculture": "Agriculture", "health": "Health", "education": "Education", "infra": "Infrastructure", 
    "welfare": "Women's Welfare", "housing": "Housing", "employment": "Employment", "governance": "Governance", "tech": "Technology"
  },
  "sectorsDesc": {
    "agriculture": "Farming, irrigation, and crop management issues.",
    "health": "Hospitals, primary care, and sanitation.",
    "education": "Schools, resources, and youth development.",
    "infra": "Roads, bridges, and public facilities.",
    "welfare": "Safety, empowerment, and support programs.",
    "housing": "Public housing and shelter initiatives.",
    "employment": "Job creation and skill development.",
    "governance": "Administrative efficiency and transparency.",
    "tech": "Digital infrastructure and connectivity."
  }
};

te["Categories"] = {
  "title": "సెక్టార్ ఇండెక్స్",
  "subtitle": "వర్గీకరించబడిన రంగాల వారీగా ప్రజా ఆందోళనలను బ్రౌజ్ చేయండి. మా ఇంటెలిజెన్స్ లేయర్ స్వయంచాలకంగా వ్యూహాత్మక సమీక్ష కోసం తగిన డొమైన్‌కు సమస్యలను మళ్లిస్తుంది.",
  "issuesCount": "సమస్యలు",
  "sectors": {
    "agriculture": "వ్యవసాయం", "health": "ఆరోగ్యం", "education": "విద్య", "infra": "మౌలిక సదుపాయాలు", 
    "welfare": "మహిళా సంక్షేమం", "housing": "గృహనిర్మాణం", "employment": "ఉపాధి", "governance": "పరిపాలన", "tech": "సాంకేతికత"
  },
  "sectorsDesc": {
    "agriculture": "వ్యవసాయం, నీటిపారుదల మరియు పంట నిర్వహణ సమస్యలు.",
    "health": "ఆసుపత్రులు, ప్రాథమిక సంరక్షణ మరియు పారిశుధ్యం.",
    "education": "పాఠశాలలు, వనరులు మరియు యువత అభివృద్ధి.",
    "infra": "రోడ్లు, వంతెనలు మరియు ప్రజా సౌకర్యాలు.",
    "welfare": "భద్రత, సాధికారత మరియు మద్దతు కార్యక్రమాలు.",
    "housing": "పబ్లిక్ హౌసింగ్ మరియు షెల్టర్ కార్యక్రమాలు.",
    "employment": "ఉద్యోగ సృష్టి మరియు నైపుణ్యాభివృద్ధి.",
    "governance": "పరిపాలనా సామర్థ్యం మరియు పారదర్శకత.",
    "tech": "డిజిటల్ మౌలిక సదుపాయాలు మరియు కనెక్టివిటీ."
  }
};

en["Solutions"] = {
  "title": "Public Actions & Solutions",
  "subtitle": "A transparent log of resolved interventions and strategic actions taken by the forum.",
  "searchPlaceholder": "Search solutions...",
  "filter": "Filter",
  "status": "Resolved",
  "solTitle": "Implementation of New Health Sub-center in Amalapuram Sector",
  "solDesc": "Strategic intervention approved following district-level pattern detection. The health department deployed a new sub-center resulting in medical access for 5,000 residents.",
  "taskforce": "PIT Taskforce",
  "details": "Details"
};

te["Solutions"] = {
  "title": "పబ్లిక్ చర్యలు & పరిష్కారాలు",
  "subtitle": "ఫోరమ్ తీసుకున్న వ్యూహాత్మక చర్యలు మరియు పరిష్కరించబడిన జోక్యాల పారదర్శక లాగ్.",
  "searchPlaceholder": "పరిష్కారాలను శోధించండి...",
  "filter": "ఫిల్టర్",
  "status": "పరిష్కరించబడింది",
  "solTitle": "అమలాపురం సెక్టార్‌లో కొత్త హెల్త్ సబ్ సెంటర్ అమలు",
  "solDesc": "జిల్లా స్థాయి నమూనా గుర్తింపును అనుసరించి వ్యూహాత్మక జోక్యం ఆమోదించబడింది. ఆరోగ్య శాఖ కొత్త సబ్ సెంటర్‌ను మోహరించింది, దీని ఫలితంగా 5,000 మంది నివాసితులకు వైద్య ప్రాప్యత లభించింది.",
  "taskforce": "PIT టాస్క్‌ఫోర్స్",
  "details": "వివరాలు"
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(tePath, JSON.stringify(te, null, 2));

console.log('Restored old designs with translations!');
