import React from 'react';
import {
  Scale,
  Gauge,
  ShieldAlert,
  Car,
  Zap,
  KeyRound,
  Ambulance,
  FileCheck,
  ArrowRight,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PageRoute } from '../types';

interface PracticeAreasPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-amber-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-500" />;
      case 'Car':
        return <Car className="w-6 h-6 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-amber-500" />;
      case 'Ambulance':
        return <Ambulance className="w-6 h-6 text-amber-500" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-amber-500" />;
      default:
        return <Scale className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <Scale className="w-3.5 h-3.5" />
            Virginia Legal Practice Areas
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Criminal, Traffic & Reckless Driving Defense
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            In Virginia, standard traffic infractions can rapidly escalate into criminal misdemeanors with lasting consequences for your driver&apos;s license, career, and freedom. We build aggressive, tailored defense strategies for every client.
          </p>
        </div>
      </section>

      {/* Overview Warning Banner */}
      <section className="bg-amber-950/30 border-y border-amber-500/20 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-stone-300">
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
          <div>
            <strong className="text-amber-300">VIRGINIA PENALTY REALITY:</strong> Under Virginia Code § 46.2-862, driving over 85 mph anywhere in Virginia, or 20+ mph over the speed limit, is a <strong>Class 1 Criminal Misdemeanor</strong> punishable by up to 12 months in jail, up to $2,500 in fines, and 6 months license suspension. Prompt representation is vital.
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-stone-950 border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {renderIcon(area.iconName)}
                  </div>
                  {area.statuteRef && (
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-stone-900 border border-stone-800 text-amber-400">
                      {area.statuteRef.split('&')[0]}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                  {area.title}
                </h2>

                <div className="text-xs text-amber-500 font-medium mt-1">
                  {area.highlight}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                  {area.shortDescription}
                </p>

                {/* Subtopic pills */}
                <div className="mt-4 pt-3 border-t border-stone-900 flex flex-wrap gap-1.5">
                  {area.subtopics.slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-stone-900/80 text-stone-400 px-2 py-0.5 rounded border border-stone-800"
                    >
                      {sub.split('(')[0]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('practice-area-detail', area.slug)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  View Full Defense Strategy <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs text-stone-400 hover:text-white"
                >
                  Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-stone-950 border-t border-stone-800 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Need Immediate Legal Defense in Fairfax?
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            Schedule a confidential evaluation of your citation, warrant, or court notice. We examine your evidence, discuss realistic goals, and protect your driving record.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded text-sm transition-colors"
            >
              Schedule Confidential Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
