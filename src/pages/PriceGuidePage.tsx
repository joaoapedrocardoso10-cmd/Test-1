import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {CLINIC_INFO, VERIFIED_PRICE_GUIDE} from '../data/clinicData';
import {buildWhatsAppUrl, filterPriceCategories} from '../utils/aestheticsLogic';
import {Reveal} from '../components/Reveal';

interface PriceGuidePageProps {
  onNavigate: (path: string) => void;
}

export function PriceGuidePage({onNavigate}: PriceGuidePageProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const visibleGroups = filterPriceCategories(VERIFIED_PRICE_GUIDE, selectedGroup);

  return (
    <div>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-10 border-b border-[#29232C]/12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
          Published Reference Fee Schedule · Subject to Confirmation
        </p>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#29232C]">
              Clinic Price Guide
            </h1>
          </div>
          <div className="lg:col-span-5 text-sm text-[#292729]/75 leading-relaxed">
            Figures below are reproduced from{' '}
            <a
              href={CLINIC_INFO.officialPriceListUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-[#29232C] hover:text-[#A78668]"
            >
              tracey-ager-aesthetics.co.uk/price-list
            </a>{' '}
            for this redesign concept and are{' '}
            <strong className="text-[#29232C] font-medium">
              subject to confirmation by the clinic
            </strong>
            . Treatment suitability and final pricing are always confirmed directly with Tracey.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter price guide categories"
          className="mt-8 pt-6 border-t border-[#29232C]/10 flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setSelectedGroup('all')}
            aria-pressed={selectedGroup === 'all'}
            className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap ${
              selectedGroup === 'all'
                ? 'bg-[#29232C] text-white border-[#29232C]'
                : 'bg-white text-[#292729]/80 border-[#29232C]/15 hover:border-[#29232C]/45'
            }`}
          >
            All Sections
          </button>
          {VERIFIED_PRICE_GUIDE.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedGroup(group.id)}
              aria-pressed={selectedGroup === group.id}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap ${
                selectedGroup === group.id
                  ? 'bg-[#29232C] text-white border-[#29232C]'
                  : 'bg-white text-[#292729]/80 border-[#29232C]/15 hover:border-[#29232C]/45'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>
      </section>

      {/* UK Compliance Notice Regarding Prescription-Only Treatments */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-8">
        <div className="bg-[#29232C] text-[#F8F6F4] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-1.5">
            <p className="text-xs uppercase tracking-widest text-[#C5A9AD] font-semibold">
              Prescription-Only Treatments · Consultation Required
            </p>
            <p className="text-sm leading-relaxed text-[#F8F6F4]/85">
              In compliance with UK advertising regulations (ASA/CAP and MHRA guidance),
              prescription-only medicines—including botulinum toxin treatments—are not
              priced, promoted, or offered publicly on this website. Clinical suitability
              and any associated treatment fees are discussed exclusively during a private
              face-to-face consultation.
            </p>
          </div>
          <a
            href="/treatments/prescription-only-consultations"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/treatments/prescription-only-consultations');
            }}
            className="text-xs font-medium text-[#C5A9AD] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            Read consultation guidance
          </a>
        </div>
      </section>

      {/* Tabular Price Sections */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-12">
        {visibleGroups.map((group, idx) => (
          <Reveal key={group.id} delay={Math.min(idx * 0.04, 0.2)}>
            <div className="bg-white border border-[#29232C]/12 p-6 sm:p-9">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#29232C]/15">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#29232C]">
                    {group.title}
                  </h2>
                  {group.subtitle && (
                    <p className="mt-1 text-xs text-[#292729]/65">{group.subtitle}</p>
                  )}
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#A78668]">
                  Published reference · Confirm with clinic
                </span>
              </div>

              <div className="divide-y divide-[#29232C]/10">
                {group.items.map((item) => (
                  <div
                    key={item.service}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6"
                  >
                    <div>
                      <p className="text-sm sm:text-base font-medium text-[#29232C]">
                        {item.service}
                      </p>
                      {item.note && (
                        <p className="mt-0.5 text-xs text-[#292729]/65">{item.note}</p>
                      )}
                    </div>
                    <p className="font-serif text-xl sm:text-2xl text-[#29232C] tabular-nums whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Closing Confirmation & Booking Footnote */}
        <div className="bg-[#EFECE8] border border-[#29232C]/12 p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#29232C]">
              Confirming suitability &amp; current fees
            </h2>
            <p className="mt-2 text-sm text-[#292729]/80 leading-relaxed">
              Every treatment plan is tailored following an individual assessment. New
              consultations are £30 (redeemable against treatment on the day). Contact
              Tracey directly to confirm up-to-date fees and availability.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors whitespace-nowrap self-start md:self-auto"
          >
            Enquire via WhatsApp
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
