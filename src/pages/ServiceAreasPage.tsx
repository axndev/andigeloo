import React from 'react';
import {
  MapPin,
  Scale,
  Navigation,
  Phone,
  Building2,
  Clock,
  Compass,
  ArrowRight
} from 'lucide-react';
import { SERVICE_AREAS, FIRM_DETAILS } from '../data/firmData';
import { PageRoute } from '../types';

interface ServiceAreasPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-400">
            <Compass className="w-3.5 h-3.5" />
            Northern Virginia Judicial Jurisdictions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Fairfax & Northern Virginia Service Areas
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our office is located at 10660 Page Avenue in Fairfax, steps from the Fairfax County Judicial Center. We provide dedicated courtroom representation across Northern Virginia.
          </p>
        </div>
      </section>

      {/* Featured: Fairfax Home Court */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-950 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  Primary Home Court
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Fairfax County Judicial Center
                </h2>
                <div className="text-xs text-amber-400 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  4110 Chain Bridge Rd, Fairfax, VA 22030 (0.3 Miles From Our Office)
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Fairfax County handles the largest criminal and traffic docket in the Commonwealth of Virginia. With our office situated directly adjacent on Page Avenue, attorney Andi Geloo is in the courthouse almost daily.
                </p>
                <div className="pt-2 text-xs text-stone-400 space-y-1">
                  <div>• <strong>General District Court:</strong> Misdemeanor trials, traffic tickets, preliminary hearings (Rooms 1A - 2E)</div>
                  <div>• <strong>Circuit Court:</strong> Felony trials, jury proceedings, de novo appeals (4th & 5th Floors)</div>
                  <div>• <strong>Juvenile & Domestic Relations:</strong> Family & juvenile matters</div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-2.5 rounded text-xs transition-colors text-center"
                >
                  Consult for Fairfax Court Case
                </button>
                <a
                  href={`tel:${FIRM_DETAILS.phoneRaw}`}
                  className="border border-stone-700 hover:border-amber-400 text-stone-200 px-5 py-2.5 rounded text-xs font-semibold text-center"
                >
                  Call {FIRM_DETAILS.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-stone-900 relative min-h-[300px]">
              <img
                src="/src/assets/images/fairfax_courthouse_1788775338219.jpg"
                alt="Fairfax County Judicial Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Surrounding County Courts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-white font-display mb-6 border-b border-stone-800 pb-3">
          Surrounding Northern Virginia Jurisdictions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_AREAS.slice(1).map((sa) => (
            <div
              key={sa.id}
              className="bg-stone-950 border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {sa.name}
                  </span>
                  <span className="text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                    {sa.distanceFromOffice}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display">
                  {sa.courthouse}
                </h3>
                <p className="text-xs text-stone-400">{sa.address}</p>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {sa.description}
                </p>

                <div className="pt-2">
                  <div className="text-[10px] uppercase font-bold text-stone-500 mb-1">
                    Courts Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sa.keyCourts.map((court, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-stone-900 text-stone-300 px-2.5 py-1 rounded border border-stone-800"
                      >
                        {court}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-400">Regular Court Appearances</span>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  Request Consultation <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Major Virginia Corridors Covered */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-950 border border-stone-800 rounded-xl p-8 space-y-4">
          <h3 className="text-lg font-bold text-white font-display">
            Highways & Traffic Corridors Frequently Represented
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Virginia State Police and County Sheriff departments run heavy radar and laser patrols along major commuter arteries where speed limits change rapidly. We routinely represent drivers ticketed on:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="bg-stone-900 p-3 rounded border border-stone-800 text-stone-200">
              <strong>Interstate 66 (I-66)</strong>
              <div className="text-stone-400 text-[11px]">Fairfax, Vienna, Centreville</div>
            </div>
            <div className="bg-stone-900 p-3 rounded border border-stone-800 text-stone-200">
              <strong>I-495 Capital Beltway</strong>
              <div className="text-stone-400 text-[11px]">Express lanes & Annandale</div>
            </div>
            <div className="bg-stone-900 p-3 rounded border border-stone-800 text-stone-200">
              <strong>Route 286 (Fairfax Pkwy)</strong>
              <div className="text-stone-400 text-[11px]">Herndon to Springfield</div>
            </div>
            <div className="bg-stone-900 p-3 rounded border border-stone-800 text-stone-200">
              <strong>Route 50 & Route 29</strong>
              <div className="text-stone-400 text-[11px]">Fairfax City to Chantilly</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
