const fs = require('fs');
const en = require('./messages/en.json');
const te = require('./messages/te.json');

en["About"] = {
  "title": "About Godavari Agenda Forum",
  "subtitle": "A premium political-tech platform designed to convert disorganized public voices into actionable, structured data.",
  "missionTitle": "Our Mission",
  "missionDesc": "To bridge the gap between people-first challenges and strategic, development-focused leadership by providing a transparent, data-driven intelligence layer for the Godavari region.",
  "visionTitle": "Our Vision",
  "visionDesc": "A future where every public concern is systematically logged, intelligently categorized, and definitively resolved through accountable, technology-driven governance.",
  "principlesTitle": "Core Principles",
  "p1": { "title": "Transparency", "desc": "Every issue tracked openly from submission to resolution." },
  "p2": { "title": "Accountability", "desc": "Clear ownership assigned to every strategic intervention." },
  "p3": { "title": "Efficiency", "desc": "Data-driven prioritization ensures critical problems are solved first." }
};

te["About"] = {
  "title": "గోదావరి అజెండా ఫోరమ్ గురించి",
  "subtitle": "అవ్యవస్థీకృత ప్రజా స్వరాలను చర్య తీసుకోదగిన, నిర్మాణాత్మక డేటాగా మార్చడానికి రూపొందించబడిన ప్రీమియం పొలిటికల్-టెక్ ప్లాట్‌ఫారమ్.",
  "missionTitle": "మా లక్ష్యం",
  "missionDesc": "గోదావరి ప్రాంతానికి పారదర్శకమైన, డేటా-ఆధారిత ఇంటెలిజెన్స్ లేయర్‌ను అందించడం ద్వారా ప్రజల మొదటి సవాళ్లు మరియు వ్యూహాత్మక, అభివృద్ధి-కేంద్రీకృత నాయకత్వం మధ్య అంతరాన్ని తగ్గించడం.",
  "visionTitle": "మా దృక్పథం",
  "visionDesc": "జవాబుదారీ, సాంకేతికత-ఆధారిత పాలన ద్వారా ప్రతి ప్రజా ఆందోళన క్రమపద్ధతిలో నమోదు చేయబడే, తెలివిగా వర్గీకరించబడే మరియు ఖచ్చితంగా పరిష్కరించబడే భవిష్యత్తు.",
  "principlesTitle": "ప్రధాన సూత్రాలు",
  "p1": { "title": "పారదర్శకత", "desc": "సమర్పణ నుండి పరిష్కారం వరకు ప్రతి సమస్య బహిరంగంగా ట్రాక్ చేయబడుతుంది." },
  "p2": { "title": "జవాబుదారీతనం", "desc": "ప్రతి వ్యూహాత్మక జోక్యానికి స్పష్టమైన యాజమాన్యం కేటాయించబడింది." },
  "p3": { "title": "సమర్థత", "desc": "డేటా-ఆధారిత ప్రాధాన్యత ముందుగా క్లిష్టమైన సమస్యలు పరిష్కరించబడేలా చేస్తుంది." }
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/te.json', JSON.stringify(te, null, 2));
console.log('About Dictionary updated!');
