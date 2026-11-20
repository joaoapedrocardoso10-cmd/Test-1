import {ArrowLeft, ArrowRight, ArrowUpRight} from 'lucide-react';
import {CLINIC_INFO, TREATMENTS, TreatmentItem} from '../data/clinicData';
import {buildWhatsAppUrl, getRelatedTreatments} from '../utils/aestheticsLogic';
import {ResilientImage} from '../components/ResilientImage';
import {Reveal} from '../components/Reveal';

interface TreatmentDetailPageProps {
  treatment: TreatmentItem;
  onNavigate: (path: string) => void;
}

export function TreatmentDetailPage({
  treatment,
  onNavigate,
}: TreatmentDetailPageProps) {
  const related = getRelatedTreatments(TREATMENTS, treatment);
  const whatsappUrl = buildWhatsAppUrl(treatment.name);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
      {/* Breadcrumb & Title Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-8 sm:pt-12 pb-12 border-b border-[#29232C]/12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#292729]/65 flex flex-wrap items-center gap-2">
          <a
            href="/treatments"
            onClick={(e) => handleNav(e, '/treatments')}
            className="inline-flex items-center gap-1 hover:text-[#29232C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Treatments
          </a>
          <span aria-hidden="true">/</span>
          <a
            href={`/treatments?category=${treatment.categoryId}`}
            onClick={(e) => handleNav(e, `/treatments?category=${treatment.categoryId}`)}
            className="hover:text-[#29232C] transition-colors"
          >
            {treatment.categoryLabel}
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-[#29232C] font-medium">{treatment.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                {treatment.categoryLabel} · {CLINIC_INFO.locationShort}
              </p>
              <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[3.35rem] leading-[1.08] font-normal text-[#29232C]">
                {treatment.name}
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#292729]/80 max-w-2xl">
                {treatment.overview}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors whitespace-nowrap"
              >
                Enquire about {treatment.name} on WhatsApp
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="/price-guide"
                onClick={(e) => handleNav(e, '/price-guide')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium border border-[#29232C]/20 bg-white text-[#29232C] hover:border-[#29232C] transition-colors whitespace-nowrap"
              >
                View Reference Price Guide
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full min-h-[260px] aspect-[4/3] overflow-hidden bg-[#EBE6DF] border border-[#29232C]/10">
              <ResilientImage
                src={treatment.image}
                alt={treatment.imageAlt}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {treatment.complianceNotice && (
          <div className="mt-8 bg-[#29232C] text-[#F8F6F4] p-5 sm:p-6">
            <p className="text-xs uppercase tracking-widest text-[#C5A9AD] font-semibold">
              Regulatory &amp; Availability Notice
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#F8F6F4]/90">
              {treatment.complianceNotice}
            </p>
          </div>
        )}
      </section>

      {/* Structured 8-Part Clinical Guide */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <Reveal>
              <div className="pb-8 border-b border-[#29232C]/12">
                <p className="text-xs text-[#A78668] font-medium">
                  01. General Procedure Explanation
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                  How the appointment is approached
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#292729]/80">
                  {treatment.procedureExplanation}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="pb-8 border-b border-[#29232C]/12">
                <p className="text-xs text-[#A78668] font-medium">
                  02. Common Reasons Clients Enquire
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                  Typical concerns discussed
                </h2>
                <ul className="mt-5 space-y-3">
                  {treatment.commonReasons.map((reason) => (
                    <li
                      key={reason}
                      className="flex items-start gap-3 text-base text-[#292729]/80 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 w-1.5 h-1.5 bg-[#A78668] shrink-0"
                      />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="pb-8 border-b border-[#29232C]/12">
                <p className="text-xs text-[#A78668] font-medium">
                  03. Importance of Individual Consultation
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                  Why assessment comes first
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#292729]/80">
                  {treatment.consultationImportance}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="text-xs text-[#A78668] font-medium">
                  04. Considerations &amp; Limitations
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                  Important clinical notes
                </h2>
                <ul className="mt-5 space-y-3">
                  {treatment.considerationsAndLimitations.map((note) => (
                    <li
                      key={note}
                      className="flex items-start gap-3 text-base text-[#292729]/80 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 w-1.5 h-1.5 bg-[#29232C] shrink-0"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Consultation Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-white border border-[#29232C]/12 p-7 sticky top-28 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                  Direct Enquiry
                </p>
                <h2 className="mt-2 font-serif text-2xl text-[#29232C]">
                  Speak with Tracey
                </h2>
                <p className="mt-2 text-sm text-[#292729]/75 leading-relaxed">
                  Have a question about {treatment.name.toLowerCase()}? Send a pre-filled
                  WhatsApp message or email to request consultation availability.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors"
                >
                  Enquire via WhatsApp
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${CLINIC_INFO.email}?subject=${encodeURIComponent(
                    `Enquiry regarding ${treatment.name}`,
                  )}`}
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium border border-[#29232C]/20 text-[#29232C] hover:border-[#29232C] transition-colors"
                >
                  Email {CLINIC_INFO.email}
                </a>
              </div>

              <div className="pt-5 border-t border-[#29232C]/10 text-xs text-[#292729]/70 space-y-2">
                <p className="font-medium text-[#29232C]">Consultation Note</p>
                <p>
                  New face-to-face consultations (30 mins) are published at £30, redeemable
                  against treatment on the day. Subject to confirmation with Tracey.
                </p>
                <p>{CLINIC_INFO.address}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Treatments */}
      {related.length > 0 && (
        <section className="bg-[#EFECE8] border-t border-[#29232C]/10 py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="flex items-baseline justify-between gap-4 pb-6 border-b border-[#29232C]/12">
              <h2 className="font-serif text-3xl text-[#29232C]">
                Related Treatments
              </h2>
              <a
                href="/treatments"
                onClick={(e) => handleNav(e, '/treatments')}
                className="text-xs font-medium text-[#29232C] hover:text-[#A78668] underline underline-offset-4"
              >
                All treatments
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/treatments/${rel.slug}`}
                  onClick={(e) => handleNav(e, `/treatments/${rel.slug}`)}
                  className="group bg-white border border-[#29232C]/10 hover:border-[#A78668]/60 p-6 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs text-[#A78668]">{rel.categoryLabel}</p>
                    <h3 className="mt-1.5 font-serif text-2xl text-[#29232C] group-hover:text-[#A78668] transition-colors">
                      {rel.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#292729]/75 leading-relaxed">
                      {rel.shortSummary}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[#29232C]">
                    View guide
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
