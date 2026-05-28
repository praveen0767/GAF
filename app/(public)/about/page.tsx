import { Shield, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading tracking-tight mb-4">
            About Godavari Agenda Forum
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            A premium political-tech platform designed to convert disorganized public voices into actionable, structured data.
          </p>
        </div>

        {/* Mission & Vision (Compact Grid) */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-lg text-blue-600">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              To bridge the gap between people-first challenges and strategic, development-focused leadership by providing a transparent, data-driven intelligence layer for the Godavari region.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-lg text-blue-600">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              A future where every public concern is systematically logged, intelligently categorized, and definitively resolved through accountable, technology-driven governance.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-6 text-center">Core Principles</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "Transparency", desc: "Every issue tracked openly from submission to resolution." },
              { title: "Accountability", desc: "Clear ownership assigned to every strategic intervention." },
              { title: "Efficiency", desc: "Data-driven prioritization ensures critical problems are solved first." }
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
