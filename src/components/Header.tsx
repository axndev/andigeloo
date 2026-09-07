import React, { useState } from 'react';
import { Phone, MapPin, Scale, Menu, X, ChevronDown, Award, Star } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';
import { PageRoute } from '../types';

interface HeaderProps {
  currentPage: PageRoute;
  currentPracticeAreaSlug?: string;
  onNavigate: (page: PageRoute, practiceAreaSlug?: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  currentPracticeAreaSlug,
  onNavigate,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  const handleNavClick = (page: PageRoute, practiceSlug?: string) => {
    onNavigate(page, practiceSlug);
    setMobileMenuOpen(false);
    setPracticeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-xl transition-all">
      {/* Top Notification / Credibility Bar */}
      <div className="bg-stone-950/80 border-b border-stone-800/80 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-stone-300 gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1.5 inline" />
              10660 Page Ave, Fairfax, VA 22030 (Steps from Fairfax Courthouse)
            </span>
            <span className="flex items-center text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5 mr-1 inline text-amber-400" />
              Super Lawyers {FIRM_DETAILS.superLawyersYears}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center text-stone-300">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1 inline" />
              <strong className="text-white mr-1">5.0 Star Rating</strong> ({FIRM_DETAILS.googleReviewCount}+ Verified Reviews)
            </span>
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="text-amber-400 hover:text-amber-300 font-semibold tracking-wide transition-colors flex items-center"
              id="header-top-phone"
            >
              <Phone className="w-3 h-3 mr-1.5" />
              {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Law Firm Logo & Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group text-left focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-stone-950 font-bold shadow-md ring-1 ring-amber-400/40 group-hover:ring-amber-400 transition-all">
              <Scale className="w-6 h-6 text-stone-950" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white font-display flex items-center gap-1.5">
                ANDI GELOO
                <span className="text-xs font-normal px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-500/30">
                  PLC
                </span>
              </div>
              <div className="text-[11px] uppercase tracking-widest text-stone-400 font-sans font-medium">
                Fairfax Attorney at Law
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-sans text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                currentPage === 'home'
                  ? 'text-amber-400 font-semibold bg-stone-800/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
              id="nav-home"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                currentPage === 'about'
                  ? 'text-amber-400 font-semibold bg-stone-800/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
              id="nav-about"
            >
              About Attorney
            </button>

            {/* Practice Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPracticeDropdownOpen(true)}
              onMouseLeave={() => setPracticeDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('practice-areas')}
                className={`px-3.5 py-2 rounded-md transition-colors flex items-center gap-1 ${
                  currentPage === 'practice-areas' || currentPage === 'practice-area-detail'
                    ? 'text-amber-400 font-semibold bg-stone-800/60'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
                }`}
                id="nav-practice-areas-dropdown"
              >
                <span>Practice Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${practiceDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              {practiceDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-stone-900 border border-stone-800 rounded-lg shadow-2xl py-2 px-1 text-stone-200 ring-1 ring-black/40">
                    <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-amber-400/90 border-b border-stone-800/80 mb-1">
                      Legal Defense Services
                    </div>
                    {PRACTICE_AREAS.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => handleNavClick('practice-area-detail', area.slug)}
                        className={`w-full text-left px-3 py-2 text-xs rounded transition-colors flex flex-col ${
                          currentPracticeAreaSlug === area.slug && currentPage === 'practice-area-detail'
                            ? 'bg-amber-950/40 text-amber-300'
                            : 'hover:bg-stone-800 text-stone-300 hover:text-white'
                        }`}
                      >
                        <span className="font-medium text-stone-100">{area.title}</span>
                        {area.statuteRef && (
                          <span className="text-[10px] text-stone-400">{area.statuteRef}</span>
                        )}
                      </button>
                    ))}
                    <div className="border-t border-stone-800/80 mt-1 pt-1">
                      <button
                        onClick={() => handleNavClick('practice-areas')}
                        className="w-full text-left px-3 py-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium hover:bg-stone-800/40 rounded"
                      >
                        View All Practice Areas →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('published-works')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                currentPage === 'published-works'
                  ? 'text-amber-400 font-semibold bg-stone-800/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
              id="nav-published"
            >
              Published & Media
            </button>

            <button
              onClick={() => handleNavClick('reviews')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                currentPage === 'reviews'
                  ? 'text-amber-400 font-semibold bg-stone-800/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
              id="nav-reviews"
            >
              Reviews
            </button>

            <button
              onClick={() => handleNavClick('service-areas')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                currentPage === 'service-areas'
                  ? 'text-amber-400 font-semibold bg-stone-800/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
              id="nav-service-areas"
            >
              Courts & Areas
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                currentPage === 'faq'
                  ? 'text-amber-400 font-semibold bg-stone-800/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
              id="nav-faq"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                currentPage === 'contact'
                  ? 'text-amber-400 font-semibold bg-stone-800/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
              id="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="flex items-center space-x-2 text-stone-200 hover:text-amber-400 transition-colors px-3 py-2 text-sm font-semibold"
              id="header-cta-phone"
            >
              <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-amber-400">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-stone-400">Direct Line</div>
                <div className="text-sm font-bold text-white">{FIRM_DETAILS.phone}</div>
              </div>
            </a>

            <button
              onClick={onOpenConsultation}
              className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 font-bold px-5 py-2.5 rounded-md text-sm shadow-lg hover:shadow-amber-500/20 transition-all active:scale-95 tracking-wide"
              id="header-consultation-btn"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="p-2 rounded-md bg-stone-800 text-amber-400 hover:bg-stone-700"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          <div className="py-2 border-b border-stone-800/80 mb-2">
            <div className="text-xs text-stone-400 flex items-center mb-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1 inline" />
              10660 Page Ave, Fairfax, VA 22030
            </div>
            <div className="text-xs text-amber-400 font-medium">
              George Washington Law School (High Honors) • Super Lawyers
            </div>
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'home' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'about' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            About Attorney Andi Geloo
          </button>
          <button
            onClick={() => handleNavClick('practice-areas')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'practice-areas' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            All Practice Areas
          </button>

          {/* Sublinks for mobile practice areas */}
          <div className="pl-4 space-y-1 border-l-2 border-stone-800 ml-2 py-1">
            {PRACTICE_AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => handleNavClick('practice-area-detail', area.slug)}
                className="w-full text-left py-1.5 px-2 text-xs text-stone-400 hover:text-amber-300 flex items-center justify-between"
              >
                <span>{area.title}</span>
                {area.statuteRef && <span className="text-[10px] text-stone-500">{area.statuteRef}</span>}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('published-works')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'published-works' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            Published Works & Media
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'reviews' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            Client Reviews & Ratings
          </button>
          <button
            onClick={() => handleNavClick('service-areas')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'service-areas' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            Fairfax & Northern Virginia Courts
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'faq' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            Virginia Legal FAQ
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
              currentPage === 'contact' ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-stone-300'
            }`}
          >
            Contact & Location
          </button>

          <div className="pt-4 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-md text-center text-sm shadow-md"
            >
              Schedule a Consultation
            </button>
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="w-full block bg-stone-800 hover:bg-stone-700 text-white font-semibold py-2.5 rounded-md text-center text-sm"
            >
              Call {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
