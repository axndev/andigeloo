import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Phone, Scale } from 'lucide-react';
import { GENERAL_FAQS, FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';
import { PageRoute } from '../types';

interface FAQPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({ 0: true });

  // Gather all FAQs including practice area specific ones
  const allFaqs = [
    ...GENERAL_FAQS,
    ...PRACTICE_AREAS.flatMap((pa) =>
      pa.faqs.map((f) => ({
        category: pa.title,
        question: f.question,
        answer: f.answer
      }))
    )
  ];

  const categories = ['All', 'Reckless Driving & Traffic', 'Criminal Defense', 'DUI & DWI', 'Courthouse & Representation', 'Consultation & Fees'];

  const filteredFaqs = allFaqs.filter((f) => {
    const matchesSearch =
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || f.category.includes(activeCategory) || (activeCategory === 'Reckless Driving & Traffic' && f.category.includes('Reckless'));
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (idx: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            Virginia Legal Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Frequently Asked Legal Questions
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Clear, honest answers to common questions about Virginia reckless driving, criminal charges, DUI procedures, and Fairfax County Courthouse appearances.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-7 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g., reckless driving, jail, waiver)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-stone-950 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-950 text-stone-400 border border-stone-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-stone-400 text-sm">
              No questions found matching your search. Please try a different query or contact our office directly.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-lg transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between text-white hover:text-amber-300 font-display font-medium text-base sm:text-lg focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-200 ${
                      openIndexes[idx] ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndexes[idx] && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-900">
                    <p>{faq.answer}</p>
                    <div className="mt-3 pt-2 border-t border-stone-900/60 flex items-center justify-between text-[11px] text-stone-500">
                      <span>Category: {faq.category}</span>
                      <button
                        onClick={onOpenConsultation}
                        className="text-amber-400 hover:underline font-medium"
                      >
                        Ask Andi about your specific case →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-stone-950 border-t border-stone-800 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Have a Specific Question About Your Ticket or Court Date?
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            Every case is unique. Contact attorney Andi Geloo directly to discuss your Virginia court appearance, judge assignment, and defense strategy.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded text-sm transition-colors"
            >
              Schedule Confidential Case Review
            </button>
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="border border-stone-700 hover:border-amber-400 px-6 py-3.5 rounded text-sm font-semibold text-white flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
