import { Briefcase, HeartPulse, GraduationCap, Home, Zap, Shield, Users, Building, Cpu } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "agriculture", title: "Agriculture", icon: <Zap className="w-5 h-5" />, count: 142, desc: "Farming, irrigation, and crop management issues." },
  { id: "health", title: "Health", icon: <HeartPulse className="w-5 h-5" />, count: 89, desc: "Hospitals, primary care, and sanitation." },
  { id: "education", title: "Education", icon: <GraduationCap className="w-5 h-5" />, count: 215, desc: "Schools, resources, and youth development." },
  { id: "infra", title: "Infrastructure", icon: <Building className="w-5 h-5" />, count: 341, desc: "Roads, bridges, and public facilities." },
  { id: "welfare", title: "Women's Welfare", icon: <Users className="w-5 h-5" />, count: 120, desc: "Safety, empowerment, and support programs." },
  { id: "housing", title: "Housing", icon: <Home className="w-5 h-5" />, count: 75, desc: "Public housing and shelter initiatives." },
  { id: "employment", title: "Employment", icon: <Briefcase className="w-5 h-5" />, count: 198, desc: "Job creation and skill development." },
  { id: "governance", title: "Governance", icon: <Shield className="w-5 h-5" />, count: 54, desc: "Administrative efficiency and transparency." },
  { id: "tech", title: "Technology", icon: <Cpu className="w-5 h-5" />, count: 32, desc: "Digital infrastructure and connectivity." },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-4">
            Sector Index
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Browse public concerns by categorized sectors. Our intelligence layer automatically routes issues to the appropriate domain for strategic review.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/categories/${cat.id}`} className="block h-full">
              <div className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-400 hover:shadow-md transition-all group h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-[13px] uppercase tracking-wider">{cat.title}</h3>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                    {cat.count} Issues
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
