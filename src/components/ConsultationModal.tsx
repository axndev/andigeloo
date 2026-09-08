import React, { useState } from 'react';
import { X, Phone, Shield, CheckCircle, Clock, Calendar, AlertCircle } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMatter?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultMatter
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    matter: defaultMatter || 'Reckless Driving Defense',
    jurisdiction: 'Fairfax County',
    courtDate: '',
    description: '',
    preferredContact: 'phone'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real client intake confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-stone-900 border border-stone-700 text-stone-100 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 px-6 py-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-white">
                Confidential Case Evaluation
              </h2>
              <p className="text-xs text-stone-400">
                Direct Review by Attorney Andaleeb &quot;Andi&quot; Geloo
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/40">
                <CheckCircle className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Consultation Request Received
              </h3>
              <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Attorney Andi Geloo&apos;s office has logged your confidential inquiry for {formData.matter} in {formData.jurisdiction}.
              </p>
              <div className="bg-stone-950 border border-stone-800 p-4 rounded-lg max-w-md mx-auto text-left text-xs space-y-2 text-stone-400">
                <div className="flex items-center text-amber-400 font-semibold gap-1.5">
                  <Clock className="w-4 h-4" /> Next Steps:
                </div>
                <div>1. Our office will review your case facts and docket schedule.</div>
                <div>2. We will contact you at <strong>{formData.phone}</strong> to discuss defense strategy.</div>
                <div className="pt-2 text-stone-300">
                  If your court date is within 48 hours or you have an urgent arrest situation, please call directly:
                </div>
                <div className="pt-1">
                  <a
                    href={`tel:${FIRM_DETAILS.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 text-sm"
                  >
                    <Phone className="w-4 h-4" /> {FIRM_DETAILS.phone} (24/7 Urgent Response)
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-stone-950/60 border border-stone-800 p-3 rounded-lg flex items-start gap-2.5 text-xs text-stone-300">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Confidentiality:</strong> Submissions are protected by legal privilege inquiries. We never sell or disclose your information.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnathan Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md px-3.5 py-2 text-sm text-white placeholder-stone-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Phone Number (Cell Preferred) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(703) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md px-3.5 py-2 text-sm text-white placeholder-stone-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md px-3.5 py-2 text-sm text-white placeholder-stone-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Legal Matter Type *
                  </label>
                  <select
                    value={formData.matter}
                    onChange={(e) => setFormData({ ...formData, matter: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md px-3.5 py-2 text-sm text-white outline-none"
                  >
                    <option value="Reckless Driving Defense">Reckless Driving Defense (Va Code § 46.2-862)</option>
                    <option value="Criminal Defense">Criminal Defense (Misdemeanor / Felony)</option>
                    <option value="DUI / DWI Defense">DUI & DWI Defense (Va Code § 18.2-266)</option>
                    <option value="Speeding & Traffic Ticket">Speeding & Moving Traffic Infractions</option>
                    <option value="Driving Suspended License">Driving on Suspended License (§ 46.2-301)</option>
                    <option value="Personal Injury / Accident">Personal Injury & Auto Accident Claim</option>
                    <option value="Online Defamation & Andi's Law">Online Defamation / Andi&apos;s Law (§ 8.01-247.1)</option>
                    <option value="Other Legal Matter">Other Virginia Legal Matter</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Court Jurisdiction
                  </label>
                  <select
                    value={formData.jurisdiction}
                    onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md px-3.5 py-2 text-sm text-white outline-none"
                  >
                    <option value="Fairfax County (General District or Circuit)">Fairfax County Courthouse</option>
                    <option value="City of Fairfax Court">City of Fairfax Court</option>
                    <option value="Prince William County (Manassas)">Prince William County (Manassas)</option>
                    <option value="Loudoun County (Leesburg)">Loudoun County (Leesburg)</option>
                    <option value="Arlington County / Falls Church">Arlington County / Falls Church</option>
                    <option value="City of Alexandria / EDVA">City of Alexandria / Federal EDVA</option>
                    <option value="Other Virginia Jurisdiction">Other Northern Virginia Court</option>
                    <option value="Not Yet Assigned / Unknown">Not Yet Assigned / Unknown</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Upcoming Court Date (if known)
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.courtDate}
                      onChange={(e) => setFormData({ ...formData, courtDate: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md px-3.5 py-2 text-sm text-white outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Brief Overview of What Happened *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="E.g., Cited for 87 in a 65 on I-66 in Fairfax; officer used LIDAR; first offense with clean record..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md px-3.5 py-2 text-sm text-white placeholder-stone-500 outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-stone-800">
                <div className="text-xs text-stone-400 text-center sm:text-left">
                  Need immediate help? Call <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="text-amber-400 font-bold hover:underline">{FIRM_DETAILS.phone}</a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-7 py-3 rounded-sm text-sm shadow-md transition-all font-sans active:scale-95 disabled:opacity-50 cursor-pointer"
                  id="submit-consultation-btn"
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Submit Confidential Case Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
