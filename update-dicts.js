const fs = require('fs');

const en = require('./messages/en.json');
const te = require('./messages/te.json');

// Expand English Dictionary
en["Reports"] = {
  "title": "Intelligence Reports",
  "subtitle": "District-level metrics, pattern detection, and strategic performance dashboards.",
  "chartTitle": "Issue Volume vs Resolution",
  "timeRange": {
    "30days": "Last 30 Days",
    "quarter": "Last Quarter",
    "ytd": "Year to Date"
  },
  "metrics": {
    "rate": "Resolution Rate",
    "categories": "Active Categories",
    "total": "Total Submissions"
  },
  "briefings": {
    "title": "Monthly Briefings",
    "oct": "October Report",
    "octDesc": "Agriculture & Water Focus",
    "sep": "September Report",
    "sepDesc": "Education & Infrastructure",
    "aug": "August Report",
    "augDesc": "Health Sector Review",
    "jul": "July Report",
    "julDesc": "Youth Employment Data",
    "download": "Download PDF"
  }
};

en["SubmitIssue"] = {
  "title": "Register Public Issue",
  "secure": "Secure and encrypted submission to the PIT.",
  "official": "Official Intake Form",
  "section1": {
    "title": "1. Personal Information",
    "name": "Full Name",
    "nameHolder": "e.g. Ramakrishna V.",
    "phone": "Phone Number",
    "phoneHolder": "+91"
  },
  "section2": {
    "title": "2. Geographic Location",
    "district": "District",
    "districtHolder": "Select District",
    "districts": {
      "east": "East Godavari",
      "west": "West Godavari",
      "kona": "Konaseema",
      "kakinada": "Kakinada"
    },
    "mandal": "Mandal / Constituency",
    "mandalHolder": "Enter Mandal"
  },
  "section3": {
    "title": "3. Issue Details",
    "sector": "Primary Sector",
    "sectorHolder": "Select Sector",
    "sectors": {
      "agri": "Agriculture",
      "infra": "Infrastructure & Roads",
      "health": "Healthcare",
      "edu": "Education",
      "welfare": "Social Welfare",
      "other": "Other"
    },
    "descLabel": "Issue Description",
    "descHelp": "Please provide specific details. Actionable information receives faster priority.",
    "descHolder": "Describe the issue, who is affected, and the location..."
  },
  "submitBtn": "Submit Public Issue"
};

// Add generic placeholders for other pages to avoid missing translations
['About', 'Categories', 'Contact', 'HowItWorks', 'Solutions', 'Team'].forEach(page => {
  en[page] = {
    "title": `${page} Page`,
    "subtitle": `Information about ${page}.`,
    "content": "This content is being translated."
  }
});


// Expand Telugu Dictionary
te["Reports"] = {
  "title": "ఇంటెలిజెన్స్ రిపోర్ట్స్",
  "subtitle": "జిల్లా స్థాయి కొలమానాలు, నమూనా గుర్తింపు మరియు వ్యూహాత్మక పనితీరు డాష్‌బోర్డ్‌లు.",
  "chartTitle": "సమస్యల వాల్యూమ్ vs పరిష్కారం",
  "timeRange": {
    "30days": "గత 30 రోజులు",
    "quarter": "గత త్రైమాసికం",
    "ytd": "ఈ సంవత్సరం"
  },
  "metrics": {
    "rate": "పరిష్కార రేటు",
    "categories": "క్రియాశీల రంగాలు",
    "total": "మొత్తం సమర్పణలు"
  },
  "briefings": {
    "title": "నెలవారీ బ్రీఫింగ్‌లు",
    "oct": "అక్టోబర్ నివేదిక",
    "octDesc": "వ్యవసాయం & నీరు",
    "sep": "సెప్టెంబర్ నివేదిక",
    "sepDesc": "విద్య & మౌలిక సదుపాయాలు",
    "aug": "ఆగస్టు నివేదిక",
    "augDesc": "ఆరోగ్య రంగ సమీక్ష",
    "jul": "జూలై నివేదిక",
    "julDesc": "యువత ఉపాధి డేటా",
    "download": "PDF డౌన్‌లోడ్ చేయండి"
  }
};

te["SubmitIssue"] = {
  "title": "ప్రజా సమస్యను నమోదు చేయండి",
  "secure": "PIT కి సురక్షితమైన సమర్పణ.",
  "official": "అధికారిక ఇంటెక్ ఫారం",
  "section1": {
    "title": "1. వ్యక్తిగత సమాచారం",
    "name": "పూర్తి పేరు",
    "nameHolder": "ఉదా. రామకృష్ణ వ.",
    "phone": "ఫోన్ నంబర్",
    "phoneHolder": "+91"
  },
  "section2": {
    "title": "2. భౌగోళిక స్థానం",
    "district": "జిల్లా",
    "districtHolder": "జిల్లాను ఎంచుకోండి",
    "districts": {
      "east": "తూర్పు గోదావరి",
      "west": "పశ్చిమ గోదావరి",
      "kona": "కోనసీమ",
      "kakinada": "కాకినాడ"
    },
    "mandal": "మండలం / నియోజకవర్గం",
    "mandalHolder": "మండలం నమోదు చేయండి"
  },
  "section3": {
    "title": "3. సమస్య వివరాలు",
    "sector": "ప్రాథమిక రంగం",
    "sectorHolder": "రంగాన్ని ఎంచుకోండి",
    "sectors": {
      "agri": "వ్యవసాయం",
      "infra": "మౌలిక సదుపాయాలు & రోడ్లు",
      "health": "ఆరోగ్య సంరక్షణ",
      "edu": "విద్య",
      "welfare": "సాంఘిక సంక్షేమం",
      "other": "ఇతర"
    },
    "descLabel": "సమస్య వివరణ",
    "descHelp": "దయచేసి నిర్దిష్ట వివరాలను అందించండి. చర్య తీసుకోదగిన సమాచారం వేగంగా ప్రాధాన్యతను పొందుతుంది.",
    "descHolder": "సమస్యను, ఎవరు ప్రభావితమయ్యారు మరియు స్థానాన్ని వివరించండి..."
  },
  "submitBtn": "ప్రజా సమస్యను సమర్పించండి"
};

['About', 'Categories', 'Contact', 'HowItWorks', 'Solutions', 'Team'].forEach(page => {
  te[page] = {
    "title": `${page} పేజీ`,
    "subtitle": `${page} గురించి సమాచారం.`,
    "content": "ఈ కంటెంట్ అనువదించబడుతోంది."
  }
});

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/te.json', JSON.stringify(te, null, 2));
console.log('Dictionaries updated!');
