import { BarChart3, TrendingUp, Activity, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-2">
            Intelligence Reports
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            District-level metrics, pattern detection, and strategic performance dashboards.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Chart Area (Mock) */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Issue Volume vs Resolution</h2>
              <select className="text-xs font-semibold border border-slate-200 text-slate-600 rounded px-3 py-1.5 bg-slate-50 outline-none">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Year to Date</option>
              </select>
            </div>
            
            <div className="h-72 bg-white rounded-lg flex items-end justify-between border border-slate-100 p-6 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                {[1, 2, 3, 4, 5].map((line) => (
                  <div key={line} className="w-full h-[1px] bg-slate-100 border-b border-dashed border-slate-200"></div>
                ))}
              </div>
              
              {/* Chart Bars */}
              {[
                { label: "Jan", height: "40%", type: "issue" },
                { label: "Feb", height: "65%", type: "issue" },
                { label: "Mar", height: "45%", type: "issue" },
                { label: "Apr", height: "80%", type: "action" },
                { label: "May", height: "55%", type: "action" },
                { label: "Jun", height: "90%", type: "action" },
                { label: "Jul", height: "70%", type: "action" },
                { label: "Aug", height: "30%", type: "issue" },
              ].map((bar, i) => (
                <div key={i} className="relative flex flex-col items-center group w-full px-1 z-10 h-full justify-end">
                  <div 
                    className={`w-full max-w-[40px] rounded-t-sm transition-all duration-500 ease-out group-hover:opacity-80 ${bar.type === 'action' ? 'bg-blue-600' : 'bg-slate-300'}`}
                    style={{ height: bar.height }}
                  ></div>
                  <span className="text-[10px] font-bold text-slate-500 mt-3 uppercase tracking-wider">{bar.label}</span>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] font-bold py-1 px-2 rounded tracking-widest whitespace-nowrap pointer-events-none">
                    {bar.height} Volume
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-col gap-4">
            {[
              { title: "Resolution Rate", value: "78%", icon: <TrendingUp className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50" },
              { title: "Active Categories", value: "14", icon: <Activity className="w-5 h-5 text-blue-600" />, bg: "bg-blue-50" },
              { title: "Total Submissions", value: "1,240", icon: <FileText className="w-5 h-5 text-slate-600" />, bg: "bg-slate-100" }
            ].map((metric, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center justify-between h-full">
                <div>
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">{metric.title}</h3>
                  <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${metric.bg}`}>
                  {metric.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Report Documents */}
          <div className="lg:col-span-3 mt-8">
            <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">Monthly Briefings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { month: "October", desc: "Agriculture & Water Focus" },
                { month: "September", desc: "Education & Infrastructure" },
                { month: "August", desc: "Health Sector Review" },
                { month: "July", desc: "Youth Employment Data" }
              ].map((report, i) => (
                <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{report.month} Report</h3>
                  <p className="text-xs text-slate-500 mb-5 font-medium">{report.desc}</p>
                  <Link href="#" className="inline-flex items-center text-[11px] font-bold text-blue-600 uppercase tracking-widest group-hover:text-blue-800 transition-colors">
                    Download PDF <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
