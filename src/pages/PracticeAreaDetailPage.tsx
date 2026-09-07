import React, { useState } from 'react';
import {
  Scale,
  Phone,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Shield,
  FileText,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { PRACTICE_AREAS, FIRM_DETAILS } from '../data/firmData';
import { PageRoute, PracticeArea } from '../types';

interface PracticeAreaDetailPageProps {
  slug: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreaDetailPage: React.FC<PracticeAreaDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultation
}) => {
  const currentArea = PRACTICE_AREAS.find((a) => a.slug === slug) || PRACTICE_AREAS[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Editorial Practice Hero */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <Scale className="w-3.5 h-3.5" />
            Fairfax Defense Practice • {currentArea.statuteRef || 'Virginia Law'}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            {currentArea.title}
          </h1>

          <p className="text-lg text-amber-400 font-medium max-w-2xl mx-auto">
            {currentArea.highlight}
          </p>

          <p className="text-stone-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            {currentArea.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-md text-sm shadow-xl transition-all"
            >
              Request Free Consultation for {currentArea.title}
            </button>
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="border border-stone-700 hover:border-amber-400 px-6 py-3.5 rounded-md text-sm font-semibold text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. In-Depth Legal Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-display">
                Understanding {currentArea.title} Under Virginia Law
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {currentArea.fullDescription}
              </p>
            </div>

            {/* 2. Potential Penalties & Legal Stakes */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Penalties & Consequences
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                What You Risk If Convicted in Virginia
              </h3>
              <ul className="space-y-2.5 pt-2">
                {currentArea.penalties.map((penalty, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{penalty}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Defense Strategies Used by Andi Geloo */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4 text-amber-400" />
                Our Strategic Approach
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Defense Strategies & Case Preparation
              </h3>
              <div className="space-y-3 pt-2">
                {currentArea.defenseStrategies.map((strat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{strat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Subtopics Covered */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-display">
                Specific Matters We Handle in this Area
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentArea.subtopics.map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-950/70 border border-stone-800 p-3.5 rounded-lg text-xs font-medium text-stone-200 flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Specific FAQs for this Practice Area */}
            {currentArea.faqs.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-400" />
                  Frequently Asked Questions on {currentArea.title}
                </h3>
                <div className="space-y-3">
                  {currentArea.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-950 border border-stone-800 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between text-white hover:text-amber-300 font-medium text-sm sm:text-base focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-amber-500 shrink-0 ml-2 transition-transform duration-200 ${
                            activeFaq === idx ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeFaq === idx && (
                        <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-900">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Quick Contact & Other Practice Areas */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white font-display">
                Need Help With This Matter?
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Attorney Andi Geloo reviews inquiries directly. Contact our Fairfax office immediately to protect your record before your court date.
              </p>

              <div className="space-y-2 pt-1 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fairfax County Judicial Center Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="text-white font-bold hover:text-amber-400">
                    {FIRM_DETAILS.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-md text-xs transition-colors"
              >
                Schedule Confidential Consultation
              </button>
            </div>

            {/* Other Practice Areas List */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                Other Practice Areas
              </h4>
              <div className="space-y-1">
                {PRACTICE_AREAS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      onNavigate('practice-area-detail', a.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left py-2 px-3 rounded text-xs transition-colors flex items-center justify-between ${
                      a.slug === currentArea.slug
                        ? 'bg-amber-500/10 text-amber-300 font-semibold border-l-2 border-amber-500'
                        : 'text-stone-400 hover:text-white hover:bg-stone-900'
                    }`}
                  >
                    <span>{a.title}</span>
                    <ArrowRight className="w-3 h-3 text-stone-500" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
