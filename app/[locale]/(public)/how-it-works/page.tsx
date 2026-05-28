import { Database, FileText, Cpu, Shield, UserCheck, CheckCircle, BarChart3 } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    { icon: <Database className="w-5 h-5" />, title: "1. Public Voice", desc: "Citizens securely register their issues and concerns." },
    { icon: <FileText className="w-5 h-5" />, title: "2. Issue Registration", desc: "Data is standardized and logged into the system." },
    { icon: <Cpu className="w-5 h-5" />, title: "3. Classification", desc: "Algorithmic sorting assigns categories and urgency." },
    { icon: <Shield className="w-5 h-5" />, title: "4. Intelligence Review", desc: "PIT analysts assess patterns and strategic impact." },
    { icon: <UserCheck className="w-5 h-5" />, title: "5. Leadership Review", desc: "Elected officials and administrators review priorities." },
    { icon: <CheckCircle className="w-5 h-5" />, title: "6. Public Action", desc: "Resources are mobilized and interventions executed." },
    { icon: <BarChart3 className="w-5 h-5" />, title: "7. Tracking & Resolution", desc: "Outcome is verified and metrics updated on the dashboard." },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            From an individual's voice to structured intelligence and final resolution. Our systematic 7-step process ensures nothing is lost.
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
