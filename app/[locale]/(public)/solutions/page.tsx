import { Users, ArrowUpRight, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-2">
              Public Actions & Solutions
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              A transparent log of resolved interventions and strategic actions taken by the forum.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search solutions..." 
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white shadow-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 bg-white rounded-md text-sm font-semibold hover:bg-slate-50 transition-colors text-slate-700 shadow-sm">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-5">
                <span className="text-[10px] uppercase tracking-widest text-emerald-700 font-bold px-2 py-1 bg-emerald-50 rounded-md border border-emerald-100">Resolved</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">ID: GAF-00{i}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">Implementation of New Health Sub-center in Amalapuram Sector {i}</h4>
              <p className="text-sm text-slate-600 mb-6 line-clamp-3 font-medium flex-grow">
                Strategic intervention approved following district-level pattern detection. The health department deployed a new sub-center resulting in medical access for 5,000 residents.
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <Users className="w-3 h-3 mr-1.5 text-slate-400" /> PIT Taskforce
                </div>
                <Link href={`/solutions/gaf-00${i}`} className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors">
                  Details <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
