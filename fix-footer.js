const fs = require('fs');

const enPath = 'messages/en.json';
const tePath = 'messages/te.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));

// Update Footer en.json
en.Footer = en.Footer || {};
en.Footer.process = "The Process";
en.Footer.sectors = "Sector Index";
en.Footer.solutions = "Public Actions";

// Update Footer te.json
te.Footer = te.Footer || {};
te.Footer.process = "ప్రక్రియ";
te.Footer.sectors = "సెక్టార్ ఇండెక్స్";
te.Footer.solutions = "పబ్లిక్ యాక్షన్స్";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(tePath, JSON.stringify(te, null, 2));

console.log("Footer translations fixed!");
