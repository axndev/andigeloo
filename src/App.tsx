/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { PracticeAreaDetailPage } from './pages/PracticeAreaDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { PublishedWorksPage } from './pages/PublishedWorksPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { Phone } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from './data/firmData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedPracticeSlug, setSelectedPracticeSlug] = useState<string>('reckless-driving-defense');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationDefaultMatter, setConsultationDefaultMatter] = useState<string>('Reckless Driving Defense');

  // Smooth scroll to top whenever navigation changes
  const handleNavigate = (page: PageRoute, slug?: string) => {
    setCurrentPage(page);
    if (slug) {
      setSelectedPracticeSlug(slug);
      const matched = PRACTICE_AREAS.find((p) => p.slug === slug);
      if (matched) {
        setConsultationDefaultMatter(matched.title);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (matter?: string) => {
    if (matter) {
      setConsultationDefaultMatter(matter);
    }
    setIsConsultationOpen(true);
  };

  // Sync browser document title with page route
  useEffect(() => {
    switch (currentPage) {
      case 'home':
        document.title = 'Andi Geloo, PLC | Fairfax Criminal Defense & Reckless Driving Attorney';
        break;
      case 'about':
        document.title = 'Attorney Andaleeb Andi Geloo | Fairfax Defense Lawyer Biography';
        break;
      case 'practice-areas':
        document.title = 'Practice Areas | Criminal & Traffic Defense | Andi Geloo, PLC';
        break;
      case 'practice-area-detail': {
        const area = PRACTICE_AREAS.find((a) => a.slug === selectedPracticeSlug);
        document.title = `${area ? area.title : 'Defense Practice'} | Andi Geloo, PLC Fairfax`;
        break;
      }
      case 'reviews':
        document.title = 'Client Reviews & Case Outcomes | 5.0 Google Rating | Andi Geloo, PLC';
        break;
      case 'service-areas':
        document.title = 'Service Areas & Courts | Fairfax County Judicial Center | Andi Geloo, PLC';
        break;
      case 'published-works':
        document.title = "Published Works & Andi's Law (Va Code § 8.01-247.1) | Andi Geloo, PLC";
        break;
      case 'faq':
        document.title = 'Virginia Legal FAQ | Reckless Driving & Court Advice | Andi Geloo, PLC';
        break;
      case 'contact':
        document.title = 'Contact Andi Geloo, PLC | 10660 Page Ave, Fairfax, VA';
        break;
      default:
        document.title = 'Andi Geloo, PLC | Fairfax Criminal & Traffic Defense';
    }
  }, [currentPage, selectedPracticeSlug]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'practice-areas' && (
          <PracticeAreasPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'practice-area-detail' && (
          <PracticeAreaDetailPage
            slug={selectedPracticeSlug}
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'service-areas' && (
          <ServiceAreasPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'published-works' && (
          <PublishedWorksPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Quick Dial Floating Action Button for Mobile Users */}
      <div className="md:hidden fixed bottom-5 right-5 z-40">
        <a
          href={`tel:${FIRM_DETAILS.phoneRaw}`}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold px-4 py-3 rounded-full shadow-2xl border border-amber-300 active:scale-95 transition-transform"
          aria-label="Call Fairfax Attorney Now"
          id="mobile-floating-call"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs">Call Law Office</span>
        </a>
      </div>

      {/* Confidential Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultMatter={consultationDefaultMatter}
      />
    </div>
  );
}
