import {ArrowUpRight} from 'lucide-react';
import {CLINIC_INFO, VERIFIED_REVIEWS} from '../data/clinicData';
import {buildWhatsAppUrl} from '../utils/aestheticsLogic';
import {Reveal} from '../components/Reveal';

interface ReviewsPageProps {
  onNavigate: (path: string) => void;
}

export function ReviewsPage({onNavigate}: ReviewsPageProps) {
  const leadReview = VERIFIED_REVIEWS.find((r) => r.id === 'gay-dillow')!;
  const clientReviews = VERIFIED_REVIEWS.filter((r) => r.id !== 'gay-dillow');

  const galleryPlaceholders = [
    {
      title: 'Dermal & Facial Aesthetics',
      caption: 'Awaiting approved, consented client photography from clinic archive',
    },
    {
      title: 'Permanent Cosmetics',
      caption: 'Awaiting approved eyebrow and lip micropigmentation imagery',
    },
    {
      title: 'Medical Tattooing & Camouflage',
      caption: 'Awaiting approved clinical case imagery with explicit patient consent',
    },
  ];

  return (
    <div>
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-12 border-b border-[#29232C]/12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
          Published Testimonials · Verbatim Attribution
        </p>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#29232C]">
              Client Feedback &amp; Clinical Trust
            </h1>
          </div>
          <div className="lg:col-span-4 text-sm text-[#292729]/75 leading-relaxed">
            All quotations below are reproduced verbatim from{' '}
            <a
              href={CLINIC_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-[#29232C] hover:text-[#A78668]"
            >
              tracey-ager-aesthetics.co.uk
            </a>
            . No fictional testimonials, star ratings, or review scores are used.
          </div>
        </div>
      </section>

      {/* Featured Clinical Colleague Perspective */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-16">
        <Reveal>
          <div className="bg-[#29232C] text-white p-8 sm:p-12 lg:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C5A9AD]">
              Medical &amp; Reconstructive Colleague Perspective
            </p>
            <blockquote className="mt-6">
              <p className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] leading-snug italic text-white max-w-4xl">
                “{leadReview.quote}”
              </p>
              <footer className="mt-8 pt-6 border-t border-[#FFFFFF]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-base font-medium text-white">
                    {leadReview.author}
                  </p>
                  <p className="text-xs text-[#C5A9AD] mt-0.5">
                    {leadReview.roleOrContext} · {leadReview.sourceNote}
                  </p>
                </div>
                <a
                  href="/treatments/medical-tattooing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/treatments/medical-tattooing');
                  }}
                  className="text-xs font-medium text-[#C5A9AD] hover:text-white underline underline-offset-4 whitespace-nowrap"
                >
                  Explore Medical Tattooing
                </a>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* Remaining 9 Verbatim Client Reviews */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20">
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {clientReviews.map((review, idx) => (
            <Reveal key={review.id} delay={Math.min(idx * 0.04, 0.24)}>
              <blockquote className="break-inside-avoid bg-white border border-[#29232C]/12 p-7 sm:p-8">
                {review.treatmentMentioned && (
                  <p className="text-xs text-[#A78668] mb-3">
                    Treatment mentioned: {review.treatmentMentioned}
                  </p>
                )}
                <p className="font-serif text-xl sm:text-[1.35rem] leading-relaxed text-[#29232C] italic">
                  “{review.quote}”
                </p>
                <footer className="mt-6 pt-4 border-t border-[#29232C]/10 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-[#29232C]">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-[#292729]/60">
                    {review.sourceNote}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        {/* Official Social Profiles Strip */}
        <div className="mt-14 bg-white border border-[#29232C]/12 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#29232C]">
              Official Clinic Channels
            </h2>
            <p className="mt-1 text-sm text-[#292729]/75">
              Read further client comments and clinic updates directly on Tracey’s official social pages.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CLINIC_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors whitespace-nowrap"
            >
              Facebook Reviews
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-medium border border-[#29232C]/20 text-[#29232C] hover:border-[#29232C] transition-colors whitespace-nowrap"
            >
              Instagram (@traceyager.aesthetics)
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={CLINIC_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-medium border border-[#29232C]/20 text-[#29232C] hover:border-[#29232C] transition-colors whitespace-nowrap"
            >
              Official Website
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Authorised Results Gallery Section */}
      <section className="bg-[#EFECE8] border-t border-[#29232C]/10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Clinical Results Gallery
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#29232C]">
                Before &amp; After Portfolio
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#292729]/80">
                Authentic treatment results require explicit written patient consent and
                direct clinic approval. Synthetic before-and-after imagery is never
                fabricated for this proposal.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
            {galleryPlaceholders.map((slot) => (
              <div
                key={slot.title}
                className="bg-[#F8F6F4] border border-dashed border-[#29232C]/25 p-8 flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#A78668] font-medium">
                    Awaiting Approved Imagery
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-[#29232C]">
                    {slot.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#292729]/70 leading-relaxed">
                    {slot.caption}
                  </p>
                </div>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-[#29232C] hover:text-[#A78668] underline underline-offset-4"
                >
                  View clinic posts on Instagram
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors"
            >
              Arrange a Personal Consultation
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
