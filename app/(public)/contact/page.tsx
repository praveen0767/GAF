import { MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gaf-bg pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-primary mb-4">Contact The Forum</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to the intelligence team, request a leadership meeting, or join as a volunteer coordinator in your district.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6">Headquarters</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">GAF Central Intelligence</p>
                    <p className="text-gray-600 text-sm mt-1">Godavari Region,<br/>Andhra Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone & WhatsApp</p>
                    <p className="text-gray-600 text-sm mt-1">+91 99999 99999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Address</p>
                    <p className="text-gray-600 text-sm mt-1">contact@gaf.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Operating Hours</p>
                    <p className="text-gray-600 text-sm mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-gold" />
                Send a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email or Phone</label>
                    <input type="text" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Contact info" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                  <select className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Request Meeting</option>
                    <option>Volunteer Application</option>
                    <option>Press / Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
