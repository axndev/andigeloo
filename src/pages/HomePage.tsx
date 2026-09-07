import React, { useState } from 'react';
import {
  Scale,
  Phone,
  ArrowRight,
  ShieldAlert,
  Car,
  Gauge,
  Zap,
  KeyRound,
  Ambulance,
  FileCheck,
  Star,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Quote,
  Tv,
  Newspaper,
  Compass,
  FileText
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS, TESTIMONIALS, PUBLISHED_WORKS, SERVICE_AREAS, GENERAL_FAQS } from '../data/firmData';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (page: PageRoute, practiceAreaSlug?: string) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

  // Icon selector helper
  const renderPracticeIcon = (iconName: string) => {
    switch (iconName) {
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
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle architectural grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Jurisdictional Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700/80 text-xs font-semibold text-amber-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Fairfax County & Northern Virginia Defense
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
                Fairfax Criminal Defense Lawyer <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  Fighting For Your Future
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-serif-body italic text-stone-200 sm:text-xl">
                &ldquo;{FIRM_DETAILS.keyQuote}&rdquo;
              </p>

              {/* Key Credentials Strip */}
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-stone-300 font-medium">
                <div className="flex items-center gap-1.5 bg-stone-950/70 border border-stone-800 px-3 py-1.5 rounded">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>George Washington Law (High Honors)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-950/70 border border-stone-800 px-3 py-1.5 rounded">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>5.0 Google Rating (65+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-950/70 border border-stone-800 px-3 py-1.5 rounded">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Author of Andi&apos;s Law (Va. Code § 8.01-247.1)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 font-bold px-8 py-4 rounded-md text-base shadow-xl shadow-amber-950/50 hover:shadow-amber-500/25 transition-all font-sans text-center flex items-center justify-center gap-2 group"
                  id="hero-primary-cta"
                >
                  <span>Schedule a Confidential Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${FIRM_DETAILS.phoneRaw}`}
                  className="w-full sm:w-auto border border-stone-700 hover:border-amber-400/80 bg-stone-900/80 hover:bg-stone-800 text-white font-semibold px-7 py-4 rounded-md text-base transition-all flex items-center justify-center gap-2.5"
                  id="hero-phone-cta"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {FIRM_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-End Attorney Portrait Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Accent border frame */}
                <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-tr from-amber-500/30 via-stone-800 to-amber-500/20 blur-sm" />

                <div className="relative rounded-lg overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl">
                  {/* Portrait photo */}
                  <img
                    src="/src/assets/images/andi_geloo_portrait_1788775321252.jpg"
                    alt="Attorney Andaleeb Andi Geloo, Fairfax Criminal Defense & Traffic Attorney"
                    className="w-full h-[420px] object-cover object-top filter contrast-105"
                    onError={(e) => {
                      // Fallback if local image not ready
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Overlay badge on bottom of card */}
                  <div className="p-5 bg-gradient-to-t from-stone-950 via-stone-900 to-stone-900/90 border-t border-stone-800 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white font-display">
                          Andaleeb &ldquo;Andi&rdquo; Geloo
                        </h3>
                        <p className="text-xs text-amber-400 font-medium">
                          Principal Attorney • Andi Geloo, PLC
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Super Lawyers</span>
                        <span className="text-xs font-semibold text-white">2022 – 2025</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 mt-2.5 leading-relaxed font-sans border-t border-stone-800/80 pt-2.5">
                      Practicing directly across from the Fairfax County Courthouse at 10660 Page Ave. Personal, uncompromising representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PUBLISHED WORKS & MEDIA CREDIBILITY STRIP */}
      <section className="bg-stone-950 border-b border-stone-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
              Recognized Authority & Legal Reform
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
              Published Works, Statutory Reform & Media Commentary
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Attorney Andi Geloo doesn’t just practice Virginia law—she wrote Virginia statute and regularly publishes hard-hitting legal analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PUBLISHED_WORKS.slice(0, 4).map((work) => (
              <div
                key={work.id}
                className="bg-stone-900/70 border border-stone-800 rounded-lg p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-amber-400/90 font-semibold mb-2">
                    <span className="uppercase tracking-wider">{work.publication}</span>
                    <span className="text-stone-500">{work.type}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white font-display group-hover:text-amber-300 transition-colors leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 line-clamp-3 leading-relaxed">
                    {work.description}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('published-works')}
                  className="mt-4 text-[11px] font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 self-start"
                >
                  Read Commentary <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Media Mention Badges */}
          <div className="mt-8 pt-6 border-t border-stone-900 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-stone-400 text-xs font-medium">
            <div className="flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-amber-500" />
              <span>Richmond Times-Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>The New York Times (Women in the World)</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Virginia Lawyers Weekly</span>
            </div>
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-amber-500" />
              <span>ABC News Channel 8 (DC News Live)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE AREAS SECTION */}
      <section className="bg-stone-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
                Aggressive Defense in Virginia Courts
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mt-2 tracking-tight">
                Dedicated Practice Areas
              </h2>
              <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
                Every criminal and traffic case requires a customized defense blueprint. We leave no stone unturned in preparing your case.
              </p>
            </div>
            <button
              onClick={() => onNavigate('practice-areas')}
              className="mt-4 md:mt-0 text-sm font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
            >
              View All Legal Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-stone-950/80 border border-stone-800 hover:border-amber-500/50 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                      {renderPracticeIcon(area.iconName)}
                    </div>
                    {area.statuteRef && (
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-amber-400/90">
                        {area.statuteRef.split('&')[0]}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs text-amber-500/90 font-medium mt-1">
                    {area.highlight}
                  </p>

                  <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {area.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('practice-area-detail', area.slug)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    Defense Strategy & Statutes <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs text-stone-400 hover:text-white"
                  >
                    Consult Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ANDI GELOO & COURTHOUSE PROXIMITY */}
      <section className="bg-stone-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
                Our Home Court Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display tracking-tight">
                Located Steps from the Fairfax County Courthouse
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                When you hire Andi Geloo, your case is not farmed out to an inexperienced junior associate or managed from a distant call center. Our office at <strong>10660 Page Avenue</strong> is literally walking distance (less than 0.3 miles) from the Fairfax County Judicial Center.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Daily Local Courtroom Familiarity</h3>
                    <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                      We understand how specific Fairfax General District Court judges review high-speed radar calibrations, and what prosecutors require for reductions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Direct Attorney Representation</h3>
                    <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                      You will speak directly with attorney Andaleeb &quot;Andi&quot; Geloo. She crafts your defense narrative, files your motions, and stands with you at docket call.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Transparent & Honest Case Assessments</h3>
                    <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                      We never lead you down a primrose path with empty promises. We set realistic goals, formulate a step-by-step strategy, and strive to exceed your expectations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white font-medium px-5 py-2.5 rounded-md text-sm transition-colors"
                >
                  Read Attorney Bio & Credentials
                </button>
                <a
                  href={`tel:${FIRM_DETAILS.phoneRaw}`}
                  className="text-amber-400 hover:text-amber-300 text-sm font-bold inline-flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4" /> Speak with Andi
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900 relative">
                <img
                  src="/src/assets/images/fairfax_courthouse_1788775338219.jpg"
                  alt="Fairfax County Judicial Center Courthouse"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-stone-950 border-t border-stone-800">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-1">
                    <span>FAIRFAX COUNTY JUDICIAL CENTER</span>
                    <span>0.3 MILES FROM OFFICE</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    4110 Chain Bridge Rd, Fairfax, VA 22030
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    Where misdemeanor, felony, and traffic dockets are heard every morning. Having counsel who can walk to the courthouse in three minutes provides unmatched responsiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ATTORNEY INTRODUCTION SECTION */}
      <section className="bg-stone-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-950 border border-stone-800 rounded-xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-80 rounded-lg overflow-hidden border-2 border-amber-500/40 shadow-xl">
                    <img
                      src="/src/assets/images/andi_geloo_portrait_1788775321252.jpg"
                      alt="Andaleeb Andi Geloo Attorney"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-amber-500 text-stone-950 font-bold px-3 py-1.5 rounded text-xs shadow-lg">
                    High Honors GW Law
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
                  Meet Your Advocate
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Andaleeb &ldquo;Andi&rdquo; Geloo
                </h2>
                <p className="text-amber-400/90 text-sm font-medium">
                  Attorney at Law • Founder of Andi Geloo, PLC
                </p>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Andaleeb &quot;Andi&quot; Geloo graduated with high honors from <strong>The George Washington University Law School</strong>. Known for her courtroom tenacity and fierce passion for individual rights, she is a member of the Virginia State Bar and regularly appears in trial and appellate dockets.
                </p>

                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                  When existing legal precedents prevented victims of online cyberbullying and anonymous harassment from seeking justice, Andi went directly to the Virginia General Assembly and drafted legislation that was enacted into Virginia law as <strong>&quot;Andi&apos;s Law&quot; (Va. Code § 8.01-247.1)</strong>. She brings that exact determination to defending clients against criminal charges and severe traffic offenses.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Selected to Super Lawyers ({FIRM_DETAILS.superLawyersYears})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-amber-400" />
                    <span>Pro Bono Defense for Underprivileged Families</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>5.0 Rating on Google & Birdeye</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button
                    onClick={() => onNavigate('about')}
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-2.5 rounded text-sm transition-colors"
                  >
                    Full Biography & Media Features
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="border border-stone-700 hover:border-amber-400 text-stone-200 hover:text-white px-5 py-2.5 rounded text-sm transition-colors"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DETAILED PROCESS / WHAT CLIENTS CAN EXPECT */}
      <section className="bg-stone-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
            Three Steps to Success
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mt-2">
            You&apos;re In Good Hands. We&apos;ll Support You Every Step of the Way.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            A clear, predictable roadmap designed to minimize stress, protect your driving privileges, and safeguard your future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {/* Step 1 */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-6 relative hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-display font-bold flex items-center justify-center text-lg mb-4 border border-amber-500/30">
                01
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Strategic Planning & Preparation
              </h3>
              <p className="text-xs text-amber-500/90 font-medium mb-3">
                Learning About The Facts Of Your Case & Legal Issues
              </p>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                We dissect the charging documents, citation circumstances, officer narrative, and jurisdiction. We identify critical proof vulnerabilities—such as calibration errors, improper stops, or lack of statutory notice.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-6 relative hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-display font-bold flex items-center justify-center text-lg mb-4 border border-amber-500/30">
                02
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Effective Collaboration & Mitigation
              </h3>
              <p className="text-xs text-amber-500/90 font-medium mb-3">
                Building A Strong Attorney-Client Relationship
              </p>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                We work collaboratively with you on proactive mitigation: securing certified speedometer calibrations, driving clinic certificates, community service verification, and character reference packages before court.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-6 relative hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-display font-bold flex items-center justify-center text-lg mb-4 border border-amber-500/30">
                03
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Aggressive & Persuasive Advocacy
              </h3>
              <p className="text-xs text-amber-500/90 font-medium mb-3">
                Which Means Fighting For You In Court
              </p>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                Whether negotiating a reduction to non-criminal infractions (such as improper driving or defective equipment) or conducting a full contested bench trial, Andi Geloo is your unwavering voice before the judge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS & CLIENT REVIEWS */}
      <section className="bg-stone-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
                What People Say About Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mt-2 tracking-tight">
                Client Testimonials & Case Outcomes
              </h2>
            </div>

            {/* Rating badge */}
            <div className="mt-4 md:mt-0 flex items-center gap-3 bg-stone-950 border border-stone-800 px-4 py-2 rounded-lg">
              <div className="text-2xl font-black text-amber-400 font-display">5.0</div>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-stone-400">Google Verified Client Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-stone-950/80 border border-stone-800 rounded-lg p-6 flex flex-col justify-between hover:border-amber-500/30 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-stone-900 text-stone-400 border border-stone-800">
                      {review.caseType}
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-stone-700 mb-2" />

                  <p className="text-stone-300 text-xs sm:text-sm italic leading-relaxed">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80">
                  <div className="text-sm font-bold text-white font-display">
                    {review.author}
                  </div>
                  {review.courtLocation && (
                    <div className="text-[11px] text-amber-500/90 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.courtLocation}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('reviews')}
              className="text-sm font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
            >
              Read All Verified Google & Birdeye Client Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAIRFAX & LOCAL COURTHOUSE SERVICE AREA */}
      <section className="bg-stone-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
              Northern Virginia Court Jurisdictions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mt-2">
              Serving Fairfax & Surrounding County Courts
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Virginia traffic and criminal dockets differ substantially between county jurisdictions. We provide deep procedural insight in every courtroom we enter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((sa) => (
              <div
                key={sa.id}
                className="bg-stone-900/60 border border-stone-800 rounded-lg p-6 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {sa.name}
                  </span>
                  <span className="text-stone-500">{sa.distanceFromOffice}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-1">
                  {sa.courthouse}
                </h3>
                <p className="text-xs text-stone-400 mb-3">{sa.address}</p>

                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {sa.description}
                </p>

                <div className="border-t border-stone-800 pt-3">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">
                    Courts Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sa.keyCourts.map((c, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-stone-950 text-stone-300 px-2 py-0.5 rounded border border-stone-800"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VIRGINIA LEGAL FAQ ACCORDION */}
      <section className="bg-stone-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
              Straightforward Answers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display mt-2">
              Frequently Asked Virginia Legal Questions
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Get clear, realistic answers regarding reckless driving, speeding citations, and Fairfax court appearances.
            </p>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-stone-950 border border-stone-800 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between text-white hover:text-amber-300 font-display font-medium text-base sm:text-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 shrink-0 ml-4 transition-transform duration-200 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-900">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="text-sm font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
            >
              Browse Complete Legal FAQ & Reckless Driving Questions →
            </button>
          </div>
        </div>
      </section>

      {/* 10. FINAL STRONG CONSULTATION CTA CARD */}
      <section className="bg-gradient-to-b from-stone-950 to-stone-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-500/30 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest">
              Confidential Case Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
              You Deserve Excellent Representation
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              George Washington Law School Honors Graduate • Published Legal Author • Super Lawyers 2022–2025. Contact our Fairfax office today to discuss your defense options.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 font-bold px-8 py-4 rounded-md text-base shadow-xl transition-all"
                id="final-cta-btn"
              >
                Schedule Free Consultation
              </button>
              <a
                href={`tel:${FIRM_DETAILS.phoneRaw}`}
                className="w-full sm:w-auto border border-stone-700 hover:border-amber-400 bg-stone-900 text-white font-semibold px-7 py-4 rounded-md text-base flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call {FIRM_DETAILS.phone}
              </a>
            </div>

            <p className="text-stone-500 text-xs pt-2">
              10660 Page Ave, Fairfax, VA 22030 • 24/7 Urgent Response for Active Arrests
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
