import {ArrowRight, ArrowUpRight} from 'lucide-react';
import {
  CLINIC_IMAGES,
  CLINIC_INFO,
  FEATURED_CATEGORIES,
  VERIFIED_REVIEWS,
} from '../data/clinicData';
import {buildWhatsAppUrl} from '../utils/aestheticsLogic';
import {ResilientImage} from '../components/ResilientImage';
import {Reveal} from '../components/Reveal';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({onNavigate}: HomePageProps) {
  const featuredReviews = [
    VERIFIED_REVIEWS.find((r) => r.id === 'gay-dillow')!,
    VERIFIED_REVIEWS.find((r) => r.id === 'samantha-jayne-ohara')!,
    VERIFIED_REVIEWS.find((r) => r.id === 'rebekah-hock')!,
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
      {/* 1. Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-8 sm:pt-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2 lg:py-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Alwoodley, North Leeds · Over 40 Years of Experience
              </p>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.65rem] leading-[1.06] font-normal tracking-tight text-[#29232C]">
                A considered approach to aesthetic care.
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#292729]/80 max-w-xl">
                Discover personalised aesthetic treatments in Alwoodley, North Leeds,
                guided by decades of experience and a commitment to individual care.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/treatments"
                  onClick={(e) => handleNav(e, '/treatments')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors whitespace-nowrap"
                >
                  Explore Treatments
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border border-[#29232C]/25 text-[#29232C] hover:border-[#29232C] hover:bg-white transition-colors whitespace-nowrap"
                >
                  Contact Tracey
                </a>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 pt-6 border-t border-[#29232C]/12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-1.5 sm:gap-x-5 text-xs text-[#292729]/70">
              <span>{CLINIC_INFO.address}</span>
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span>Consultation-led practice</span>
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span>Private &amp; former NHS surgical experience</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden bg-[#EBE6DF]">
              <ResilientImage
                src={CLINIC_IMAGES.heroSanctuary}
                alt="Serene consultation room interior representing the calm Alwoodley clinic atmosphere"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2.5 text-xs text-[#292729]/60 font-serif italic">
              Concept visual direction — calm consultation sanctuary for Alwoodley, North Leeds
            </p>
          </div>
        </div>
      </section>

      {/* 2. 40+ Years of Experience Band */}
      <section className="bg-[#29232C] text-[#F8F6F4] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C5A9AD]">
                  Clinical Heritage
                </p>
                <div className="mt-4 flex items-baseline gap-4">
                  <span className="font-serif text-6xl sm:text-7xl font-normal text-white tabular-nums">
                    40+
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-[#C5A9AD]">
                    Years of Experience
                  </span>
                </div>
                <p className="mt-5 text-sm text-[#F8F6F4]/75 leading-relaxed max-w-md">
                  Four decades across clinical aesthetics, teaching, permanent cosmetics,
                  and medical tattooing—shaped by calm clinical judgement rather than passing trends.
                </p>
              </div>

              <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#FFFFFF]/12 space-y-6">
                <p className="font-serif text-2xl sm:text-3xl leading-snug text-white font-normal">
                  “Careful consultations, continuing professional development, and an honest
                  recommendation—even when the best advice is not to treat.”
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-[#F8F6F4]/80">
                  Tracey Ager is an Advanced Aesthetic Practitioner who has worked both
                  privately and within the NHS alongside reconstructive and cosmetic plastic
                  surgeons. Her private clinic in Alwoodley operates independently and is
                  not NHS-operated or NHS-endorsed.
                </p>

                <div className="pt-4 border-t border-[#FFFFFF]/12 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-wide text-[#C5A9AD]">
                  {CLINIC_INFO.qualifications.map((qual, idx) => (
                    <span key={qual} className="inline-flex items-center gap-5">
                      <span>{qual}</span>
                      {idx < CLINIC_INFO.qualifications.length - 1 && (
                        <span aria-hidden="true" className="text-white/25">
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Featured Treatments Editorial Showcase */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#29232C]/12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Selected Disciplines
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29232C]">
                Treatments tailored to individual need
              </h2>
            </div>
            <a
              href="/treatments"
              onClick={(e) => handleNav(e, '/treatments')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#29232C] hover:text-[#A78668] transition-colors whitespace-nowrap"
            >
              Browse full treatment catalogue
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        {/* Lead 2-column Editorial Pair */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_CATEGORIES.slice(0, 2).map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 0.06}>
              <a
                href={`/treatments/${item.slug}`}
                onClick={(e) => handleNav(e, `/treatments/${item.slug}`)}
                className="group block bg-white border border-[#29232C]/10 hover:border-[#A78668]/60 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DF]">
                  <ResilientImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs text-[#A78668] tracking-wide">
                    0{idx + 1} · {item.categoryLabel}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#29232C] group-hover:text-[#A78668] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#29232C]/50 group-hover:text-[#A78668] shrink-0 transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#292729]/75">
                    {item.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Remaining 4 Featured Treatments in Clean 4-column Architectural Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CATEGORIES.slice(2).map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 0.05}>
              <a
                href={`/treatments/${item.slug}`}
                onClick={(e) => handleNav(e, `/treatments/${item.slug}`)}
                className="group flex flex-col h-full bg-white border border-[#29232C]/10 hover:border-[#A78668]/60 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DF]">
                  <ResilientImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#A78668]">
                      0{idx + 3} · {item.categoryLabel}
                    </p>
                    <h3 className="mt-1.5 font-serif text-2xl text-[#29232C] group-hover:text-[#A78668] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#292729]/75">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[#29232C] group-hover:text-[#A78668]">
                    View details
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Meet Tracey Preview (Authentic Placeholder Without Fabricated Portrait) */}
      <section className="bg-white border-y border-[#29232C]/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="border border-[#29232C]/15 bg-[#F8F6F4] p-5 sm:p-6">
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DF]">
                    <ResilientImage
                      src={CLINIC_IMAGES.consultationDetail}
                      alt="Consultation journal and pen representing Tracey Ager's clinical practice"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#29232C]/10 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg text-[#29232C]">
                        Tracey Ager
                      </p>
                      <p className="text-xs text-[#292729]/65">
                        I.T.E.C Hons · Cert Ed · C.P.C.P · Skills Assessor
                      </p>
                    </div>
                    <span className="text-[11px] text-[#A78668] text-right">
                      Practitioner portrait awaiting permission
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                  Meet the Practitioner
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29232C]">
                  Experience, expertise and a personal approach.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-[#292729]/80 max-w-2xl">
                  <p>
                    With more than four decades in aesthetics and beauty, Tracey combines
                    practical clinical skill with an educator’s clarity. As a qualified
                    lecturer and skills assessor, she believes every client deserves clear,
                    unhurried explanations before making any decision.
                  </p>
                  <p>
                    Alongside her aesthetic and permanent cosmetic work, Tracey has
                    worked privately and for the NHS alongside reconstructive and cosmetic
                    plastic surgeons—bringing deep sensitivity to specialist medical
                    tattooing, post-mastectomy areola restoration, and scar camouflage.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    href="/about"
                    onClick={(e) => handleNav(e, '/about')}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors"
                  >
                    Read Tracey’s Full Background
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="/reviews"
                    onClick={(e) => handleNav(e, '/reviews')}
                    className="text-sm font-medium text-[#29232C] hover:text-[#A78668] underline underline-offset-4 transition-colors"
                  >
                    Read client &amp; colleague feedback
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Personalised Care Editorial Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-24">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Consultation Philosophy
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-normal text-[#29232C]">
                Listening carefully before any treatment is suggested
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-1">
              <div className="pt-4 border-t border-[#29232C]/15">
                <p className="text-xs text-[#A78668] font-medium">01. Honest Assessment</p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#292729]/80">
                  A dedicated 30-minute consultation explores your concerns, medical
                  history, and expectations—never rushing or recommending unnecessary work.
                </p>
              </div>

              <div className="pt-4 border-t border-[#29232C]/15">
                <p className="text-xs text-[#A78668] font-medium">02. Clear Explanations</p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#292729]/80">
                  Every step, alternative option, fee, and realistic limitation is talked
                  through plainly so you feel informed and comfortable.
                </p>
              </div>

              <div className="pt-4 border-t border-[#29232C]/15">
                <p className="text-xs text-[#A78668] font-medium">03. Considered Aftercare</p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#292729]/80">
                  Appointments take place in a private Alwoodley setting with tailored
                  aftercare guidance and direct post-treatment contact with Tracey.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. Genuine Client Feedback Preview */}
      <section className="bg-[#EFECE8] border-t border-[#29232C]/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#29232C]/12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                  Published Client Feedback
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-normal text-[#29232C]">
                  Words from clients and surgical colleagues
                </h2>
              </div>
              <a
                href="/reviews"
                onClick={(e) => handleNav(e, '/reviews')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#29232C] hover:text-[#A78668] transition-colors whitespace-nowrap"
              >
                Read all 10 published reviews
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review, idx) => (
              <Reveal key={review.id} delay={idx * 0.06}>
                <blockquote className="h-full flex flex-col justify-between bg-white border border-[#29232C]/10 p-7 sm:p-8">
                  <p className="font-serif text-xl sm:text-[1.35rem] leading-relaxed text-[#29232C] italic">
                    “{review.quote}”
                  </p>
                  <footer className="mt-6 pt-5 border-t border-[#29232C]/10">
                    <p className="text-sm font-semibold text-[#29232C]">
                      {review.author}
                    </p>
                    <p className="mt-0.5 text-xs text-[#292729]/65">
                      {review.roleOrContext
                        ? `${review.roleOrContext} · ${review.sourceNote}`
                        : review.sourceNote}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Consultation CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-24">
        <Reveal>
          <div className="bg-[#29232C] text-white p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A9AD]">
                Private Consultations · Alwoodley, LS17
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                Your consultation starts with a conversation.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#F8F6F4]/80 max-w-2xl leading-relaxed">
                Whether you have a clear treatment in mind or simply wish to ask an honest
                question about your skin, message Tracey directly on WhatsApp or by email
                to arrange a face-to-face consultation.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium bg-[#A78668] text-white hover:bg-[#947458] transition-colors whitespace-nowrap"
              >
                Enquire via WhatsApp
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <span className="text-xs text-[#C5A9AD]">
                {CLINIC_INFO.whatsappDisplay} · {CLINIC_INFO.email}
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
