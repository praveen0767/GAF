import { User, ShieldCheck } from "lucide-react";

const teamMembers = [
  { name: "Pavan Kumar", role: "Principal Strategist", function: "Political Intelligence", exp: "15+ years in data-driven governance." },
  { name: "Dr. Srinivas Rao", role: "Policy Director", function: "Sector Analysis", exp: "Former advisor for state rural development." },
  { name: "Ananya Desai", role: "Head of Tech", function: "Platform Architecture", exp: "Civic-tech engineer and system architect." },
  { name: "Rahul Varma", role: "Field Operations", function: "Ground Intelligence", exp: "Manages district-level data collection." },
  { name: "K. Reddy", role: "Legal Review", function: "Policy Compliance", exp: "Expert in administrative law and governance." },
  { name: "M. Sharma", role: "Data Scientist", function: "Pattern Detection", exp: "Specializes in civic clustering models." },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-4">
            Leadership & Intelligence Team
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-2xl mx-auto">
            The Political Intelligence Team (PIT) consists of strategists, engineers, and analysts committed to structured governance and public action.
          </p>
        </div>

        {/* Structured Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> {member.role}
                </div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">
                  Func: {member.function}
                </p>
                <p className="text-xs text-slate-600 font-medium line-clamp-2">
                  {member.exp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
