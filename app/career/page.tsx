import { site } from "@/lib/data";
import { Briefcase, MapPin, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CareerPage() {
  const jobs = [
    {
      id: "sales-executive",
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Noida",
      type: "Full-Time",
      desc: "We are looking for an ambitious and energetic Sales Executive to help us expand our clientele in the real estate sector. You will be the front of the company and will have the dedication to create and apply an effective sales strategy.",
      reqs: [
        "Proven experience as a Sales Executive or relevant role",
        "Excellent knowledge of MS Office",
        "Thorough understanding of marketing and negotiating techniques",
        "Fast learner and passion for sales",
        "Self-motivated with a results-driven approach",
      ]
    },
    {
      id: "telecaller",
      title: "Telecaller",
      department: "Customer Service",
      location: "Noida",
      type: "Full-Time",
      desc: "We are seeking a dedicated Telecaller to join our team. Your primary responsibility will be to connect with potential customers over the phone, explain our real estate projects, and arrange site visits for the sales team.",
      reqs: [
        "Proven experience as a Telecaller or similar sales/customer service role",
        "Excellent communication and interpersonal skills",
        "Cool-tempered and able to handle rejection",
        "Outstanding negotiation skills with the ability to resolve issues",
        "Good knowledge of relevant computer programs (e.g. CRM software)",
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f9fafb]">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-[#FACC15] opacity-10" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Your Career <br /><span className="text-[#FACC15]">With Us</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Join the team that is shaping the future of Dholera Smart City. We are always looking for passionate individuals who are ready to make a difference.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-gray-600">Discover your next career opportunity at {site.name}.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map(job => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm font-semibold text-[#FACC15] mb-2 uppercase tracking-wider">{job.department}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{job.type}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" /> Real Estate
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {job.desc}
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Requirements:</h4>
                <ul className="space-y-3">
                  {job.reqs.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#FACC15] mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                <a href={`mailto:${site.email}?subject=Application for ${job.title}`} className="bg-black text-white px-8 py-3 font-semibold hover:bg-[#FACC15] hover:text-black transition-colors flex items-center gap-2">
                  Apply Now <ChevronRight className="w-4 h-4" />
                </a>
                <a href={`tel:${site.phoneAlt}`} className="text-gray-500 hover:text-black flex items-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" /> Call HR
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why Join Us */}
        <div className="mt-24 bg-white border border-gray-200 p-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join {site.name}?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Working with us means being part of a visionary project — Dholera Smart City. We offer a dynamic work environment, competitive compensation, and incredible growth opportunities as we build the future of urban living in India.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-[#FACC15] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Growth</h3>
              <p className="text-gray-500 text-sm">Rapid career progression in a fast-growing industry.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FACC15] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Environment</h3>
              <p className="text-gray-500 text-sm">A supportive, energetic, and collaborative workplace.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FACC15] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Impact</h3>
              <p className="text-gray-500 text-sm">Be part of creating India's first greenfield smart city.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}