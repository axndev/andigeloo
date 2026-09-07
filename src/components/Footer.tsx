import React from 'react';
import { Scale, Phone, Mail, MapPin, Award, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS, SERVICE_AREAS } from '../data/firmData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute, practiceAreaSlug?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const handleNav = (page: PageRoute, slug?: string) => {
    onNavigate(page, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 font-sans">
      {/* Top Pre-Footer Call to Action Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-stone-950 border-b border-stone-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-amber-500 font-semibold tracking-wider text-xs uppercase font-sans">
              Immediate Legal Assistance in Northern Virginia
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display tracking-tight">
              Facing Charges in Fairfax or Northern Virginia?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 leading-relaxed">
              Don’t risk your driver’s license, career, or security clearance with a generic defense. Speak directly with attorney Andi Geloo today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-md text-sm shadow-xl shadow-amber-950/40 hover:shadow-amber-500/20 transition-all font-sans text-center"
              id="footer-cta-consultation"
            >
              Schedule a Consultation
            </button>
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto border border-stone-700 hover:border-amber-500/60 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3.5 rounded-md text-sm transition-all flex items-center justify-center gap-2"
              id="footer-cta-phone"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Firm Overview & Badges */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-stone-950 font-bold shadow-md ring-1 ring-amber-400/40">
                <Scale className="w-6 h-6 text-stone-950" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight text-white font-display">
                  ANDI GELOO, PLC
                </div>
                <div className="text-xs uppercase tracking-widest text-amber-500/90 font-medium">
                  Fairfax Criminal & Traffic Defense
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed">
              Practicing steps from the Fairfax County Courthouse, attorney Andaleeb &quot;Andi&quot; Geloo provides relentless, strategic courtroom advocacy across Fairfax County, Prince William, Loudoun, Arlington, and Alexandria courts.
            </p>

            <div className="space-y-2 pt-1 text-xs text-stone-300">
              <div className="flex items-center gap-2 text-stone-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>The George Washington University Law School (High Honors)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Super Lawyers Selected ({FIRM_DETAILS.superLawyersYears})</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>5.0 Google Rating ({FIRM_DETAILS.googleReviewCount}+ Verified Reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Author of &quot;Andi&apos;s Law&quot; (Va. Code § 8.01-247.1)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-sans">
              Defense Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.id}>
                  <button
                    onClick={() => handleNav('practice-area-detail', area.slug)}
                    className="text-stone-400 hover:text-amber-300 text-left transition-colors text-xs leading-normal flex flex-col"
                  >
                    <span className="text-stone-200 hover:text-amber-400 font-medium">{area.title}</span>
                    {area.statuteRef && (
                      <span className="text-[10px] text-stone-500">{area.statuteRef}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courthouses & Locations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-sans">
              Northern VA Courthouses
            </h3>
            <ul className="space-y-3 text-xs">
              {SERVICE_AREAS.map((sa) => (
                <li key={sa.id} className="text-stone-400">
                  <div className="font-semibold text-stone-200">{sa.name}</div>
                  <div className="text-stone-400 text-[11px]">{sa.courthouse}</div>
                  <div className="text-amber-500/80 text-[10px]">{sa.distanceFromOffice}</div>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav('service-areas')}
                  className="text-amber-400 hover:text-amber-300 text-xs font-medium inline-flex items-center"
                >
                  View All Court Details →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Office & Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 font-sans">
              Office Location
            </h3>

            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-200 font-medium">{FIRM_DETAILS.legalEntity}</div>
                  <div>{FIRM_DETAILS.address}</div>
                  <div>Fairfax, VA 22030</div>
                  <div className="text-amber-500 text-[11px] mt-0.5">Directly adjacent to Fairfax Courthouse</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${FIRM_DETAILS.phoneRaw}`}
                  className="text-stone-200 hover:text-amber-400 font-semibold"
                >
                  {FIRM_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${FIRM_DETAILS.email}`}
                  className="text-stone-300 hover:text-amber-400 truncate"
                >
                  {FIRM_DETAILS.email}
                </a>
              </div>

              <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400">
                <div className="font-medium text-stone-300">Office Hours</div>
                <div>{FIRM_DETAILS.officeHours}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-wrap justify-between items-center gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            <button onClick={() => handleNav('home')} className="hover:text-stone-200">Home</button>
            <button onClick={() => handleNav('about')} className="hover:text-stone-200">About Andi Geloo</button>
            <button onClick={() => handleNav('practice-areas')} className="hover:text-stone-200">Practice Areas</button>
            <button onClick={() => handleNav('published-works')} className="hover:text-stone-200">Published Works & Op-Eds</button>
            <button onClick={() => handleNav('reviews')} className="hover:text-stone-200">Client Reviews</button>
            <button onClick={() => handleNav('service-areas')} className="hover:text-stone-200">Courts & Jurisdictions</button>
            <button onClick={() => handleNav('faq')} className="hover:text-stone-200">FAQ</button>
            <button onClick={() => handleNav('contact')} className="hover:text-stone-200">Contact & Directions</button>
          </div>

          <div className="text-stone-400 text-xs">
            Virginia State Bar Barred & In Good Standing
          </div>
        </div>

        {/* Legal Disclaimer & Bar Ethics Notice */}
        <div className="mt-8 pt-6 border-t border-stone-900 text-[11px] text-stone-400 leading-relaxed space-y-2">
          <p>
            <strong>LEGAL DISCLAIMER & VIRGINIA STATE BAR NOTICE:</strong> The materials and information provided on this website are for informational and educational purposes only and do not constitute formal legal advice. Viewing this website, transmitting electronic inquiries, or submitting a consultation request does not form an attorney-client relationship between you and Andi Geloo, PLC or attorney Andaleeb &quot;Andi&quot; Geloo. An attorney-client relationship is only created upon mutual execution of a formal written legal representation agreement and payment of required retainer.
          </p>
          <p>
            Past case outcomes, testimonials, judicial reductions, or legislative commentary described on this site do not guarantee, warrant, or predict a similar result in any future legal matter. Every legal case depends upon its unique facts, applicable statutes, jurisdictional tendencies, and judicial discretion.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-stone-400 gap-2">
            <span>© 2026 Andi Geloo, PLC. All Rights Reserved. 10660 Page Ave, Fairfax, VA 22030.</span>
            <span>Design: Modern Fairfax Defense Law Practice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
