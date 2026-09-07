import React from 'react';
import {
  Scale,
  Award,
  BookOpen,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
  ShieldCheck,
  Star,
  Tv,
  Globe,
  HeartHandshake
} from 'lucide-react';
import { FIRM_DETAILS, PUBLISHED_WORKS } from '../data/firmData';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Editorial Page Header */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <Scale className="w-3.5 h-3.5" />
            Attorney Profile & Biography
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Andaleeb &ldquo;Andi&rdquo; Geloo
          </h1>
          <p className="text-lg text-amber-400 font-medium">
            Principal Attorney & Founder • Andi Geloo, PLC
          </p>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            High-Honors George Washington Law graduate, statutory author of &ldquo;Andi’s Law&rdquo; (Va. Code § 8.01-247.1), and fierce advocate for individuals in Fairfax and across Virginia.
          </p>
        </div>
      </section>

      {/* Main Profile Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Portrait & Credentials Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/images/andi_geloo_portrait_1788775321252.jpg"
                alt="Andi Geloo Attorney"
                className="w-full h-96 object-cover object-top"
              />
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-white font-display">
                    Andaleeb &ldquo;Andi&rdquo; Geloo
                  </h2>
                  <p className="text-xs text-amber-400 font-medium">
                    Fairfax Criminal Defense & Traffic Attorney
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-stone-300 border-t border-stone-800 pt-4">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Education:</strong>
                      The George Washington University Law School (Graduated with High Honors)
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Recognition:</strong>
                      Selected to Super Lawyers ({FIRM_DETAILS.superLawyersYears})
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Statutory Reform:</strong>
                      Author of Andi&apos;s Law (Virginia Code § 8.01-247.1)
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Client Satisfaction:</strong>
                      5.0 Stars (Google & Birdeye Verified Reviews)
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Office Location:</strong>
                      10660 Page Ave, Fairfax, VA 22030 (Steps from courthouse)
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 space-y-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded text-sm transition-colors"
                  >
                    Schedule Consultation
                  </button>
                  <a
                    href={`tel:${FIRM_DETAILS.phoneRaw}`}
                    className="w-full block text-center border border-stone-700 hover:border-amber-400 py-2.5 rounded text-xs font-semibold text-stone-200"
                  >
                    Call {FIRM_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-stone-950 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <p className="text-sm font-serif-body italic text-stone-200 leading-relaxed">
                &ldquo;{FIRM_DETAILS.secondaryQuote}&rdquo;
              </p>
              <div className="text-xs text-amber-400 font-bold mt-2">
                — Andi Geloo, Attorney at Law
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative Biography */}
          <div className="lg:col-span-7 space-y-8 text-stone-300 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-display">
                Dedicated Criminal & Traffic Defense in Northern Virginia
              </h2>
              <p className="text-sm sm:text-base">
                Andaleeb &quot;Andi&quot; Geloo is a prominent criminal defense and traffic attorney based in Fairfax, Virginia. She graduated with high honors from <strong>The George Washington University Law School</strong> in Washington, D.C., one of the nation&apos;s most respected legal institutions.
              </p>
              <p className="text-sm sm:text-base">
                Throughout her career in Northern Virginia, she has developed an unmatched reputation for legal scholarship, relentless courtroom advocacy, and transparent, client-centered representation. Whether defending clients against Class 1 Misdemeanor Reckless Driving charges (Va. Code § 46.2-862), DUI/DWI prosecutions, or felony indictments, Andi believes that every client deserves an attorney who will leave no stone unturned.
              </p>
            </div>

            {/* The Story of Andi's Law */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Landmark Legislative Achievement
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Author of &ldquo;Andi’s Law&rdquo; — Va. Code § 8.01-247.1
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                When anonymous cyberbullies targeted Andi Geloo with malicious online defamation and internet harassment, she discovered that Virginia law lacked an effective mechanism for victims to unmask and hold online perpetrators accountable.
              </p>
              <p className="text-sm text-stone-300 leading-relaxed">
                Rather than back down, Andi drafted legislation, testified before lawmakers in Richmond, and championed the bill through both chambers of the Virginia General Assembly. The legislation was enacted into law as <strong>Va. Code § 8.01-247.1</strong>, establishing an enforceable cause of action for victims of computer-based defamation and harassment.
              </p>
              <p className="text-xs text-amber-300 italic">
                Her courage was highlighted by The New York Times&apos; project &ldquo;Women in the World&rdquo; under the headline: <em>&ldquo;Andi Geloo changed the law.&rdquo;</em>
              </p>
            </div>

            {/* Courtroom Philosophy: "Virginia is My Courtroom" */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-display">
                Courtroom Philosophy: &ldquo;Virginia is My Courtroom&rdquo;
              </h3>
              <p className="text-sm sm:text-base">
                With an office located directly opposite the Fairfax County Courthouse at <strong>10660 Page Avenue</strong>, Andi considers the Fairfax County General District and Circuit Courts her home. She is present in these halls nearly every weekday morning, which provides an invaluable understanding of local prosecutors, judges, procedural customs, and negotiation dynamics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-lg">
                  <div className="font-bold text-white text-sm mb-1">Human Narrative Defense</div>
                  <p className="text-xs text-stone-400">
                    As featured in <em>Virginia Lawyer’s Magazine</em>, Andi believes in bringing the human story of each client into Courtroom 1, turning rigid statutes into empathetic dialogues.
                  </p>
                </div>
                <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-lg">
                  <div className="font-bold text-white text-sm mb-1">Uncompromising Preparation</div>
                  <p className="text-xs text-stone-400">
                    From radar calibrations and officer notes to driving clinic credits and medical documentation, no case enters court without exhaustive preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Bono & Global Humanitarian Outreach */}
            <div className="space-y-4 border-t border-stone-800 pt-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-amber-400" />
                Pro Bono Commitment & Global Philanthropy
              </h3>
              <p className="text-sm sm:text-base">
                In addition to her private practice, Andi Geloo is committed to social justice. She frequently undertakes pro bono defense representation for underprivileged families in Northern Virginia who would otherwise lack zealous counsel. Her office also actively supports international humanitarian outreach and philanthropic causes.
              </p>
            </div>

            {/* Media & Published Works Preview */}
            <div className="space-y-4 border-t border-stone-800 pt-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Tv className="w-5 h-5 text-amber-400" />
                Legal Commentator & Media Appearances
              </h3>
              <p className="text-sm text-stone-300">
                Andi has provided live legal commentary for <strong>ABC News Channel 8 (DC News Live)</strong> and <strong>ABC’s Let’s Talk Live</strong>, discussing high-profile criminal trials and constitutional law. Her writing has appeared in the <em>Richmond Times-Dispatch</em>, <em>Virginia Lawyers Weekly</em>, and the <em>Fairfax Times</em>.
              </p>
              <button
                onClick={() => onNavigate('published-works')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                View all published articles and broadcasts →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
