const fs = require('fs');

const en = {
  "Navbar": {
    "home": "Home",
    "about": "About",
    "process": "Process",
    "sectors": "Sectors",
    "solutions": "Solutions",
    "intelligence": "Intelligence",
    "submitIssue": "Submit Issue",
    "title": "Godavari Agenda Forum",
    "backToHome": "Back to Home"
  },
  "Hero": {
    "title1": "People’s Voice.",
    "title2": "Structured Intelligence.",
    "title3": "Public Action.",
    "subtitle": "A people-first platform for welfare, development, industrial growth, and technology-driven governance.",
    "submitIssue": "Submit Issue",
    "exploreSolutions": "Explore Solutions",
    "discoverMore": "Discover More"
  },
  "Home": {
    "stats": {
      "voices": "Voices Logged",
      "districts": "Active Districts",
      "review": "Under Review",
      "resolved": "Resolved Actions",
      "mla": "MLA Network",
      "mp": "MP Leadership"
    },
    "purpose": {
      "title1": "We are not a grievance cell.",
      "title2": "We are a structural intelligence layer.",
      "desc": "Godavari Agenda Forum (GAF) is a premium political-tech platform designed to convert disorganized public voices into actionable, structured data. We bridge the gap between people-first challenges and strategic, development-focused leadership."
    },
    "process": {
      "label": "The Process",
      "title": "Structured Public Action",
      "step1Title": "Public Voice",
      "step1Desc": "Issues are securely registered and mapped.",
      "step2Title": "Classification",
      "step2Desc": "Data is categorized and prioritized automatically.",
      "step3Title": "Strategic Review",
      "step3Desc": "Expert assessment for immediate leadership briefing.",
      "step4Title": "Public Action",
      "step4Desc": "Visible intervention and final resolution."
    },
    "intelligence": {
      "label": "Intelligence Layer",
      "title": "Pattern Detection \n & Prioritization",
      "desc": "Every submission is processed through our intelligence framework. We don't just count complaints; we detect district-level concern clustering, track topic prioritization, and generate strategic action logic.",
      "viewDashboard": "View Public Dashboard"
    },
    "solutions": {
      "label": "Public Action",
      "title": "Recent Resolutions",
      "viewAll": "View All Actions",
      "resolvedBadge": "Resolved",
      "sampleTitle": "Irrigation Canal Repair in Amalapuram Sector",
      "sampleDesc": "Strategic intervention approved following district-level pattern detection. Repairs completed in 14 days.",
      "owner": "Owner: Local Admin"
    },
    "cta": {
      "title": "Structured Listening \n Creates Visible Action.",
      "desc": "A forum built for accountability, not noise. Register your issue securely today.",
      "btn": "Register Issue"
    },
    "sectors": {
      "agri": "Agriculture",
      "youth": "Youth & Employment",
      "edu": "Education",
      "health": "Health",
      "women": "Women's Welfare",
      "roads": "Roads & Infra",
      "industry": "Industry",
      "gov": "Governance",
      "tech": "Technology"
    }
  },
  "Footer": {
    "desc": "A structural intelligence platform mapping public issues to strategic development in the Godavari region.",
    "links": "Platform Links",
    "legal": "Legal & Terms",
    "contact": "Contact",
    "submit": "Submit Issue",
    "intelligence": "Intelligence Dashboard",
    "about": "About GAF",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "cookie": "Cookie Policy",
    "email": "contact@gaf.org.in",
    "rights": "All rights reserved.",
    "designed": "Designed by"
  }
};

const te = {
  "Navbar": {
    "home": "హోమ్",
    "about": "మా గురించి",
    "process": "ప్రక్రియ",
    "sectors": "రంగాలు",
    "solutions": "పరిష్కారాలు",
    "intelligence": "ఇంటెలిజెన్స్",
    "submitIssue": "సమస్యను సమర్పించండి",
    "title": "గోదావరి అజెండా ఫోరమ్",
    "backToHome": "హోమ్‌కు తిరిగి వెళ్ళండి"
  },
  "Hero": {
    "title1": "ప్రజల వాయిస్.",
    "title2": "స్ట్రక్చర్డ్ ఇంటెలిజెన్స్.",
    "title3": "పబ్లిక్ యాక్షన్.",
    "subtitle": "సంక్షేమం, అభివృద్ధి, పారిశ్రామిక వృద్ధి మరియు సాంకేతిక-ఆధారిత పరిపాలన కోసం ప్రజల-మొదటి వేదిక.",
    "submitIssue": "సమస్యను సమర్పించండి",
    "exploreSolutions": "పరిష్కారాలను అన్వేషించండి",
    "discoverMore": "మరింత తెలుసుకోండి"
  },
  "Home": {
    "stats": {
      "voices": "నమోదైన వాయిస్‌లు",
      "districts": "క్రియాశీల జిల్లాలు",
      "review": "సమీక్షలో ఉన్నవి",
      "resolved": "పరిష్కరించబడినవి",
      "mla": "ఎమ్మెల్యే నెట్‌వర్క్",
      "mp": "ఎంపీ నాయకత్వం"
    },
    "purpose": {
      "title1": "మేము ఫిర్యాదుల సెల్ కాదు.",
      "title2": "మేము స్ట్రక్చరల్ ఇంటెలిజెన్స్ లేయర్.",
      "desc": "గోదావరి అజెండా ఫోరమ్ (GAF) అనేది అవ్యవస్థీకృత ప్రజా స్వరాలను చర్య తీసుకోదగిన, నిర్మాణాత్మక డేటాగా మార్చడానికి రూపొందించబడిన ప్రీమియం పొలిటికల్-టెక్ ప్లాట్‌ఫారమ్. మేము ప్రజల సవాళ్లు మరియు వ్యూహాత్మక నాయకత్వం మధ్య అంతరాన్ని తగ్గిస్తాము."
    },
    "process": {
      "label": "ప్రక్రియ",
      "title": "నిర్మాణాత్మక పబ్లిక్ యాక్షన్",
      "step1Title": "ప్రజా స్వరం",
      "step1Desc": "సమస్యలు సురక్షితంగా నమోదు చేయబడతాయి మరియు మ్యాప్ చేయబడతాయి.",
      "step2Title": "వర్గీకరణ",
      "step2Desc": "డేటా స్వయంచాలకంగా వర్గీకరించబడుతుంది మరియు ప్రాధాన్యత ఇవ్వబడుతుంది.",
      "step3Title": "వ్యూహాత్మక సమీక్ష",
      "step3Desc": "తక్షణ నాయకత్వ బ్రీఫింగ్ కోసం నిపుణుల అంచనా.",
      "step4Title": "పబ్లిక్ యాక్షన్",
      "step4Desc": "కనిపించే జోక్యం మరియు తుది పరిష్కారం."
    },
    "intelligence": {
      "label": "ఇంటెలిజెన్స్ లేయర్",
      "title": "నమూనా గుర్తింపు \n & ప్రాధాన్యత",
      "desc": "ప్రతి సమర్పణ మా ఇంటెలిజెన్స్ ఫ్రేమ్‌వర్క్ ద్వారా ప్రాసెస్ చేయబడుతుంది. మేము కేవలం ఫిర్యాదులను లెక్కించము; మేము జిల్లా స్థాయి ఆందోళనల సమూహాన్ని గుర్తిస్తాము, వ్యూహాత్మక కార్యాచరణ తర్కాన్ని రూపొందిస్తాము.",
      "viewDashboard": "పబ్లిక్ డాష్‌బోర్డ్ చూడండి"
    },
    "solutions": {
      "label": "పబ్లిక్ యాక్షన్",
      "title": "ఇటీవలి తీర్మానాలు",
      "viewAll": "అన్ని చర్యలను చూడండి",
      "resolvedBadge": "పరిష్కరించబడింది",
      "sampleTitle": "అమలాపురం సెక్టార్‌లో ఇరిగేషన్ కెనాల్ మరమ్మత్తు",
      "sampleDesc": "జిల్లా స్థాయి నమూనా గుర్తింపును అనుసరించి వ్యూహాత్మక జోక్యం ఆమోదించబడింది. 14 రోజుల్లో మరమ్మతులు పూర్తయ్యాయి.",
      "owner": "యజమాని: స్థానిక అడ్మిన్"
    },
    "cta": {
      "title": "నిర్మాణాత్మక వినికిడి \n కనిపించే చర్యను సృష్టిస్తుంది.",
      "desc": "జవాబుదారీతనం కోసం నిర్మించబడిన వేదిక. ఈ రోజే మీ సమస్యను సురక్షితంగా నమోదు చేసుకోండి.",
      "btn": "సమస్యను నమోదు చేయండి"
    },
    "sectors": {
      "agri": "వ్యవసాయం",
      "youth": "యువత & ఉపాధి",
      "edu": "విద్య",
      "health": "ఆరోగ్యం",
      "women": "మహిళా సంక్షేమం",
      "roads": "రోడ్లు & మౌలిక సదుపాయాలు",
      "industry": "పరిశ్రమ",
      "gov": "పరిపాలన",
      "tech": "సాంకేతికత"
    }
  },
  "Footer": {
    "desc": "గోదావరి ప్రాంతంలో వ్యూహాత్మక అభివృద్ధికి ప్రజా సమస్యలను మ్యాపింగ్ చేసే స్ట్రక్చరల్ ఇంటెలిజెన్స్ వేదిక.",
    "links": "ప్లాట్‌ఫారమ్ లింక్‌లు",
    "legal": "చట్టపరమైన & నిబంధనలు",
    "contact": "సంప్రదించండి",
    "submit": "సమస్యను సమర్పించండి",
    "intelligence": "ఇంటెలిజెన్స్ డాష్‌బోర్డ్",
    "about": "GAF గురించి",
    "privacy": "గోప్యతా విధానం",
    "terms": "సేవా నిబంధనలు",
    "cookie": "కుకీ విధానం",
    "email": "contact@gaf.org.in",
    "rights": "అన్ని హక్కులూ ప్రత్యేకించుకోవడమైనది.",
    "designed": "రూపకల్పన"
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/te.json', JSON.stringify(te, null, 2));
console.log('Dictionaries generated!');
