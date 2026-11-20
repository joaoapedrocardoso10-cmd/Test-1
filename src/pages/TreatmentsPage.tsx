import {useEffect, useState} from 'react';
import {ArrowRight, ArrowUpRight, Search, X} from 'lucide-react';
import {
  TREATMENT_CATEGORIES,
  TREATMENTS,
  TreatmentCategoryId,
} from '../data/clinicData';
import {buildWhatsAppUrl, filterTreatments} from '../utils/aestheticsLogic';
import {ResilientImage} from '../components/ResilientImage';
import {Reveal} from '../components/Reveal';

interface TreatmentsPageProps {
  initialCategory?: TreatmentCategoryId | 'all';
  onNavigate: (path: string) => void;
}

export function TreatmentsPage({
  initialCategory = 'all',
  onNavigate,
}: TreatmentsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    TreatmentCategoryId | 'all'
  >(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filtered = filterTreatments(TREATMENTS, searchQuery, selectedCategory);
  const activeCategoryMeta = TREATMENT_CATEGORIES.find(
    (c) => c.id === selectedCategory,
  );

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-10 border-b border-[#29232C]/12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
          Clinical Directory · Alwoodley, North Leeds
        </p>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#29232C]">
              Treatments &amp; Specialist Care
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-[#292729]/75">
              Search or filter all published treatment categories. Every procedure begins
              with an individual assessment to confirm suitability and discuss options.
            </p>
          </div>
        </div>

        {/* Search & Category Controls */}
        <div className="mt-8 pt-8 border-t border-[#29232C]/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <label htmlFor="treatment-search" className="sr-only">
                Search treatments
              </label>
              <Search
                className="w-4 h-4 text-[#292729]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="treatment-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by treatment or concern (e.g. Areola, Peel, Electrolysis)..."
                className="w-full pl-10 pr-10 py-3 text-sm bg-white border border-[#29232C]/20 text-[#29232C] placeholder:text-[#292729]/45 focus:border-[#29232C] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#292729]/60 hover:text-[#29232C]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <p className="text-xs text-[#292729]/70 tabular-nums">
              Showing <strong className="text-[#29232C]">{filtered.length}</strong> of{' '}
              {TREATMENTS.length} listed pathways
            </p>
          </div>

          {/* Segmented Category Filter Tabs */}
          <div
            role="group"
            aria-label="Filter treatments by category"
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              aria-pressed={selectedCategory === 'all'}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#29232C] text-white border-[#29232C]'
                  : 'bg-white text-[#292729]/80 border-[#29232C]/15 hover:border-[#29232C]/45 hover:text-[#29232C]'
              }`}
            >
              All Categories
            </button>
            {TREATMENT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
                className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-[#29232C] text-white border-[#29232C]'
                    : 'bg-white text-[#292729]/80 border-[#29232C]/15 hover:border-[#29232C]/45 hover:text-[#29232C]'
                }`}
              >
                {category.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Consultation Context Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-8">
        <div className="bg-white border border-[#29232C]/12 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78668]">
              {activeCategoryMeta
                ? activeCategoryMeta.title
                : 'UK Advertising Compliance & Consultation Guidance'}
            </p>
            <p className="text-sm text-[#292729]/80 leading-relaxed max-w-4xl">
              {activeCategoryMeta?.regulatoryNote ||
                activeCategoryMeta?.description ||
                'In line with UK advertising rules, prescription-only medicines are not promoted, discounted, or priced publicly. Additional wellness services and skincare ranges are flagged for clinic availability and compliance review before official launch.'}
            </p>
          </div>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#29232C] hover:text-[#A78668] underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            Ask Tracey via WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Treatment Catalogue Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-14">
        {filtered.length === 0 ? (
          <div className="bg-white border border-[#29232C]/12 p-12 text-center">
            <h2 className="font-serif text-2xl text-[#29232C]">
              No matching treatments found
            </h2>
            <p className="mt-2 text-sm text-[#292729]/75 max-w-md mx-auto">
              Try a broader search term or reset your category filter to view all
              available treatment pathways.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-6 px-5 py-2.5 text-xs font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors"
            >
              Reset search and filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((item, idx) => (
              <Reveal key={item.slug} delay={Math.min(idx * 0.03, 0.24)}>
                <article className="h-full flex flex-col bg-white border border-[#29232C]/12 hover:border-[#A78668]/70 transition-colors">
                  <a
                    href={`/treatments/${item.slug}`}
                    onClick={(e) => handleNav(e, `/treatments/${item.slug}`)}
                    className="block aspect-[4/3] overflow-hidden bg-[#EBE6DF]"
                  >
                    <ResilientImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    />
                  </a>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-[#A78668]">
                        {item.categoryLabel}
                        {item.requiresComplianceReview ? ' · Review Required' : ''}
                      </p>
                      <h2 className="mt-1.5 font-serif text-2xl text-[#29232C]">
                        <a
                          href={`/treatments/${item.slug}`}
                          onClick={(e) => handleNav(e, `/treatments/${item.slug}`)}
                          className="hover:text-[#A78668] transition-colors"
                        >
                          {item.name}
                        </a>
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-[#292729]/75">
                        {item.shortSummary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#29232C]/10 flex items-center justify-between gap-4">
                      <a
                        href={`/treatments/${item.slug}`}
                        onClick={(e) => handleNav(e, `/treatments/${item.slug}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#29232C] hover:text-[#A78668] transition-colors"
                      >
                        Read full guide
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                      <a
                        href={buildWhatsAppUrl(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${item.name} on WhatsApp`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#A78668] hover:text-[#29232C] transition-colors whitespace-nowrap"
                      >
                        WhatsApp
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
