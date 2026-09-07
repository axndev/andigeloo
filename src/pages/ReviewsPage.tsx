import React, { useState } from 'react';
import { Star, Quote, CheckCircle, MapPin, Scale, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, FIRM_DETAILS } from '../data/firmData';
import { PageRoute } from '../types';

interface ReviewsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Reckless Driving', 'Criminal Defense', 'Traffic Offense', 'DUI / DWI'];

  const filteredReviews = selectedFilter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((r) => r.caseType === selectedFilter);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Verified Client Feedback
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Client Reviews & Case Outcomes
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Real feedback from clients who faced criminal, reckless driving, and traffic charges in Fairfax County and Northern Virginia courts.
          </p>

          {/* Rating Summary Box */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6">
            <div className="bg-stone-950 border border-stone-800 px-6 py-3 rounded-lg flex items-center gap-4">
              <div className="text-3xl font-black text-amber-400 font-display">5.0</div>
              <div className="text-left">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-stone-400">
                  Based on {FIRM_DETAILS.googleReviewCount}+ Google Reviews
                </div>
              </div>
            </div>

            <div className="bg-stone-950 border border-stone-800 px-6 py-3 rounded-lg text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Super Lawyers Rated
              </div>
              <div className="text-sm font-semibold text-white">
                Andi Geloo ({FIRM_DETAILS.superLawyersYears})
              </div>
              <div className="text-[11px] text-stone-400">109+ Verified Birdeye Ratings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                  : 'bg-stone-950 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-stone-950 border border-stone-800 rounded-xl p-6 flex flex-col justify-between shadow-xl hover:border-amber-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded bg-stone-900 border border-stone-800 text-amber-400">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-stone-700 mb-2" />

                <p className="text-stone-300 text-sm leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-display flex items-center gap-1.5">
                    {review.author}
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                    )}
                  </div>
                  {review.courtLocation && (
                    <div className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      {review.courtLocation}
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-stone-500 font-medium">
                  {review.caseType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-stone-950 border-t border-stone-800 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Experience the Same Zealous Representation
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            Every case receives attorney Andi Geloo&apos;s personal scrutiny and preparation. Contact our Fairfax office today.
          </p>
          <button
            onClick={onOpenConsultation}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded text-sm transition-colors"
          >
            Schedule a Confidential Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
