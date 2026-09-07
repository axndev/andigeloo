import React from 'react';
import {
  BookOpen,
  Newspaper,
  Tv,
  Scale,
  ExternalLink,
  ShieldCheck,
  Award,
  FileText
} from 'lucide-react';
import { PUBLISHED_WORKS, FIRM_DETAILS } from '../data/firmData';
import { PageRoute } from '../types';

interface PublishedWorksPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const PublishedWorksPage: React.FC<PublishedWorksPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <BookOpen className="w-3.5 h-3.5" />
            Legal Scholarship & Public Commentary
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Published Works & Media Commentary
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Articles, legislative reforms, investigative op-eds, and television broadcast appearances by Fairfax attorney Andaleeb &ldquo;Andi&rdquo; Geloo.
          </p>
        </div>
      </section>

      {/* Featured Legislative Reform: Andi's Law */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border-2 border-amber-500/40 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Virginia Statutory Reform
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Author of &ldquo;Andi’s Law&rdquo; — Va. Code § 8.01-247.1
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                When Virginia law failed to provide a viable civil remedy against malicious anonymous online stalkers and internet bullies, attorney Andaleeb &quot;Andi&quot; Geloo stepped up. She drafted statutory language, testified before the Virginia General Assembly, and secured bipartisan support from lawmakers in Richmond.
              </p>

              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                The resulting statute, codified as <strong>Virginia Code § 8.01-247.1</strong>, empowers victims across Virginia to subpoena internet service providers, unmask anonymous harassers, and recover damages. Her achievement was praised by Virginia State Senators and featured nationally by <em>The New York Times&apos;</em> Women in the World project.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-amber-400 font-semibold">
                <span>• Enacted by the Virginia General Assembly</span>
                <span>• Codified at Va. Code § 8.01-247.1</span>
                <span>• Praised by VA State Senator</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-900 border border-stone-800 rounded-xl p-6 text-center space-y-3">
              <Scale className="w-12 h-12 text-amber-400 mx-auto" />
              <div className="font-display font-bold text-white text-lg">
                &ldquo;Andi Geloo changed the law.&rdquo;
              </div>
              <p className="text-xs text-stone-400 italic">
                — As featured in The New York Times&apos; project: Women in the World
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Published Works & Op-Eds */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-white font-display mb-6 border-b border-stone-800 pb-3">
          Op-Eds, Journal Articles & Television Appearances
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PUBLISHED_WORKS.map((work) => (
            <div
              key={work.id}
              className="bg-stone-950 border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-3">
                  <span className="text-amber-400 uppercase tracking-wider">{work.publication}</span>
                  <span className="text-stone-500 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                    {work.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2 leading-snug">
                  {work.title}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {work.description}
                </p>

                {work.citation && (
                  <div className="text-[11px] font-mono text-amber-500/90 mb-3">
                    Statutory Citation: {work.citation}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-400">{work.date}</span>
                <span className="font-semibold text-amber-400 inline-flex items-center gap-1">
                  Verified Legal Publication
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Broadcast & Media Quote */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-950 border border-stone-800 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
              <Tv className="w-5 h-5 text-amber-400" />
              Television & Media Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
              Attorney Andi Geloo is available for verified legal commentary, criminal justice analysis, and broadcast interviews on Virginia law and civil rights matters.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold px-6 py-3 rounded text-xs transition-colors whitespace-nowrap"
          >
            Contact Law Office
          </button>
        </div>
      </section>
    </div>
  );
};
