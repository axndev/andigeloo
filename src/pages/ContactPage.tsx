import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Navigation,
  Shield
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    legalMatter: 'Reckless Driving Defense',
    courtDate: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            Fairfax, Virginia Law Office
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Contact Andi Geloo, PLC
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Located at 10660 Page Avenue in historic Fairfax, Virginia—directly opposite the Fairfax County Courthouse. Reach out today for straightforward, zealous legal defense.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-2xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/40">
                  <CheckCircle className="w-10 h-10 text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold font-display text-white">
                  Message Transmitted to Attorney Andi Geloo
                </h2>
                <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your confidential case details have been received by our Fairfax office. We will call you at <strong>{formData.phone}</strong> promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        legalMatter: 'Reckless Driving Defense',
                        courtDate: '',
                        description: '',
                      });
                    }}
                    className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-6 py-2.5 rounded text-sm transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-stone-800 pb-4">
                  <h2 className="text-xl font-bold text-white font-display">
                    Confidential Case Inquiry
                  </h2>
                  <p className="text-xs text-stone-400 mt-1">
                    Direct attorney review • No obligation • All information strictly protected
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(703) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Legal Matter *
                    </label>
                    <select
                      value={formData.legalMatter}
                      onChange={(e) => setFormData({ ...formData, legalMatter: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                    >
                      {PRACTICE_AREAS.map((pa) => (
                        <option key={pa.id} value={pa.title}>
                          {pa.title}
                        </option>
                      ))}
                      <option value="Other Virginia Matter">Other Virginia Legal Matter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Upcoming Court Date (if scheduled)
                  </label>
                  <input
                    type="date"
                    value={formData.courtDate}
                    onChange={(e) => setFormData({ ...formData, courtDate: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Brief Summary of Your Legal Situation *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide relevant details: ticket speed, location, law enforcement agency, prior driving record, or specific concerns..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center text-xs text-stone-400 gap-1.5">
                    <Shield className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Attorney-Client Privilege inquiries</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-950/50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Transmit Request'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Office Details & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-950 border border-stone-800 rounded-2xl p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-wider block mb-1">
                  Primary Law Office
                </span>
                <h2 className="text-2xl font-bold text-white font-display">
                  {FIRM_DETAILS.legalEntity}
                </h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  Andaleeb &ldquo;Andi&rdquo; Geloo, Attorney at Law
                </p>
              </div>

              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Physical Address:</strong>
                    <div>{FIRM_DETAILS.address}</div>
                    <div>Fairfax, VA 22030</div>
                    <div className="text-amber-400 text-xs mt-1">
                      Directly adjacent to the Fairfax County Judicial Center
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Direct Phone:</strong>
                    <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="text-amber-400 hover:underline font-bold text-base">
                      {FIRM_DETAILS.phone}
                    </a>
                    <div className="text-xs text-stone-400">Available 24/7 for urgent arrest intake</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Email:</strong>
                    <a href={`mailto:${FIRM_DETAILS.email}`} className="text-stone-300 hover:text-amber-400">
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Office Hours:</strong>
                    <div>{FIRM_DETAILS.officeHours}</div>
                  </div>
                </div>
              </div>

              {/* Directions Box */}
              <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl text-xs space-y-2 text-stone-300">
                <div className="flex items-center text-amber-400 font-semibold gap-1.5">
                  <Navigation className="w-4 h-4" />
                  Courthouse Proximity & Parking
                </div>
                <p className="leading-relaxed">
                  Our office on Page Avenue offers convenient client parking and is less than a 3-minute walk from the main entrance of the Fairfax County General District and Circuit Courts at 4110 Chain Bridge Road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
