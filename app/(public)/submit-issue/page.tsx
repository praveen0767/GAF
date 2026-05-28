import { Shield, Lock } from "lucide-react";

export default function SubmitIssuePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-3">
            Register Public Issue
          </h1>
          <p className="text-sm text-slate-600 font-medium flex items-center">
            <Lock className="w-4 h-4 mr-2 text-blue-600" /> Secure and encrypted submission to the PIT.
          </p>
        </div>

        {/* Official Form */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          {/* Form Top Banner */}
          <div className="bg-slate-900 px-8 py-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">Official Intake Form</span>
          </div>

          <form className="p-8 space-y-8">
            
            {/* Section 1: Basic Info */}
            <div className="space-y-5">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">1. Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm" placeholder="e.g. Ramakrishna V." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm" placeholder="+91" />
                </div>
              </div>
            </div>

            {/* Section 2: Location */}
            <div className="space-y-5">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">2. Geographic Location</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">District</label>
                  <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm text-slate-700">
                    <option value="">Select District</option>
                    <option value="east-godavari">East Godavari</option>
                    <option value="west-godavari">West Godavari</option>
                    <option value="konaseema">Konaseema</option>
                    <option value="kakinada">Kakinada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mandal / Constituency</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm" placeholder="Enter Mandal" />
                </div>
              </div>
            </div>

            {/* Section 3: Issue Details */}
            <div className="space-y-5">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">3. Issue Details</h3>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Primary Sector</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm text-slate-700">
                  <option value="">Select Sector</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="infrastructure">Infrastructure & Roads</option>
                  <option value="health">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="welfare">Social Welfare</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Issue Description</label>
                <p className="text-xs text-slate-500 mb-2 font-medium">Please provide specific details. Actionable information receives faster priority.</p>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors text-sm resize-none" 
                  placeholder="Describe the issue, who is affected, and the location..."
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button type="button" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm">
                Submit Public Issue
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
