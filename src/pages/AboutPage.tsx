import {ArrowRight, ArrowUpRight} from 'lucide-react';
import {CLINIC_IMAGES, CLINIC_INFO} from '../data/clinicData';
import {buildWhatsAppUrl} from '../utils/aestheticsLogic';
import {ResilientImage} from '../components/ResilientImage';
import {Reveal} from '../components/Reveal';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({onNavigate}: AboutPageProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const chapters = [
    {
      index: '01',
      title: 'Over 40 Years in Aesthetics & Teaching',
      body: 'Tracey Ager has dedicated more than four decades to the aesthetics and beauty profession. Alongside her hands-on clinical practice, she is a qualified lecturer (Cert Ed) and Skills Assessor—experience that shapes the calm, methodical way she explains procedures, anatomy, and aftercare to every client.',
      marginNote: 'Documented teaching credentials: Cert Ed & Skills Assessor.',
    },
    {
      index: '02',
      title: 'Private Practice & Past NHS Collaboration',
      body: 'Throughout her career, Tracey has worked both privately and for the NHS, collaborating alongside some of the country’s leading reconstructive and cosmetic plastic surgeons. That clinical grounding informs her conservative judgement, infection-control standards, and respect for individual anatomy.',
      marginNote:
        'Clarification: Tracey Ager Aesthetics is an independent private clinic in Alwoodley and is not NHS-operated, NHS-endorsed, or formally affiliated with the NHS.',
    },
    {
      index: '03',
      title: 'Medical Tattooing & Permanent Cosmetics',
      body: 'As an Advanced Medical Tattooist and Advanced Permanent Cosmetic Technician (C.P.C.P), Tracey provides both subtle cosmetic brow and lip enhancement and specialist restorative pigment work—including post-mastectomy areola re-pigmentation, 3D areola creation, cleft lip camouflage, and scar or burn camouflage.',
      marginNote:
        'Recognised by reconstructive nursing colleagues for attentive pre-, during-, and post-procedure care.',
    },
    {
      index: '04',
      title: 'Continued Learning, Safety & Individual Care',
      body: 'Aesthetic practice evolves continually. Tracey places ongoing professional development, clinical safety, and honest consultation at the centre of her clinic—taking time to understand each person’s wishes and advising openly if a treatment is unnecessary or unsuitable.',
      marginNote: 'First-time consultations last 30 minutes and include full medical screening.',
    },
  ];

  return (
    <div>
      {/* Editorial Monograph Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-12 border-b border-[#29232C]/12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
              About Tracey Ager · Alwoodley, North Leeds
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.06] text-[#29232C]">
              Four decades shaped by clinical rigour and personal care.
            </h1>
          </div>
          <div className="lg:col-span-4 text-sm text-[#292729]/75 leading-relaxed">
            Advanced Aesthetic Practitioner · Qualified Lecturer &amp; Skills Assessor ·
            Private Clinic at The Fairway, Alwoodley.
          </div>
        </div>
      </section>

      {/* Editorial Opening + Studio Placeholder */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#29232C]/12 p-5">
              <div className="aspect-[4/3] overflow-hidden bg-[#EBE6DF]">
                <ResilientImage
                  src={CLINIC_IMAGES.alwoodleySetting}
                  alt="Leafy residential Yorkshire stone avenue representing the discreet Alwoodley clinic location"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-[#29232C]/10 space-y-1">
                <p className="font-serif text-xl text-[#29232C]">
                  Tracey Ager Aesthetics
                </p>
                <p className="text-xs text-[#292729]/65">
                  The Fairway, Alwoodley, Leeds LS17 7QP
                </p>
                <p className="text-xs text-[#A78668] pt-1">
                  Practitioner portrait not displayed — awaiting authentic image permission
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl leading-relaxed text-[#29232C] first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              An aesthetic consultation should never feel hurried or transactional. Over
              more than forty years in aesthetics and beauty, Tracey Ager has built a
              reputation in North Leeds grounded in calm listening, transparent advice,
              and careful attention to clinical safety.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[#292729]/80">
              Having worked privately and within the NHS alongside reconstructive and
              cosmetic plastic surgeons, Tracey brings breadth of clinical experience across
              dermal aesthetics, skin rejuvenation, permanent cosmetics, and restorative
              medical tattooing. Whether welcoming a client for a gentle facial or a
              post-mastectomy areola restoration, every appointment is conducted in private
              with unhurried care.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric 70/30 Career Chapters */}
      <section className="bg-white border-y border-[#29232C]/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="pb-6 mb-10 border-b border-[#29232C]/12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Professional Background
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-normal text-[#29232C]">
                Chapters of clinical experience
              </h2>
            </div>
          </Reveal>

          <div className="space-y-10">
            {chapters.map((chapter, idx) => (
              <Reveal key={chapter.index} delay={idx * 0.05}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#29232C]/10 last:border-b-0 last:pb-0">
                  <div className="lg:col-span-8">
                    <p className="text-xs text-[#A78668] font-medium">
                      {chapter.index}. Practice Pillar
                    </p>
                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#29232C]">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#292729]/80 max-w-2xl">
                      {chapter.body}
                    </p>
                  </div>
                  <div className="lg:col-span-4 lg:pt-8">
                    <p className="text-xs leading-relaxed text-[#292729]/70 bg-[#F8F6F4] border border-[#29232C]/10 p-4">
                      {chapter.marginNote}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documented Qualifications & Scope Ledger */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Published Credentials
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                Documented qualifications
              </h2>
              <p className="mt-3 text-sm text-[#292729]/75 leading-relaxed">
                Listed strictly as published on the clinic’s official website, without
                addition or embellishment.
              </p>

              <dl className="mt-8 border-t border-[#29232C]/15 divide-y divide-[#29232C]/10">
                {[
                  {
                    term: 'I.T.E.C Hons',
                    desc: 'Honours qualification with the International Therapy Examination Council.',
                  },
                  {
                    term: 'Cert Ed',
                    desc: 'Certificate in Education — formal teaching qualification.',
                  },
                  {
                    term: 'C.P.C.P',
                    desc: 'Certified Permanent Cosmetic Professional credential.',
                  },
                  {
                    term: 'Skills Assessor',
                    desc: 'Qualified practitioner assessor for professional clinical standards.',
                  },
                ].map((item) => (
                  <div
                    key={item.term}
                    className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4"
                  >
                    <dt className="font-serif text-xl text-[#29232C]">{item.term}</dt>
                    <dd className="sm:col-span-2 text-sm text-[#292729]/75">
                      {item.desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Clinical Scope
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                Published specialist designations
              </h2>
              <p className="mt-3 text-sm text-[#292729]/75 leading-relaxed">
                Areas of expertise highlighted in Tracey’s published clinic profile.
              </p>

              <ul className="mt-8 border-t border-[#29232C]/15 divide-y divide-[#29232C]/10">
                {CLINIC_INFO.professionalRoles.map((role, idx) => (
                  <li
                    key={role}
                    className="py-4 flex items-center justify-between gap-4 text-base text-[#29232C]"
                  >
                    <span className="font-serif text-xl">{role}</span>
                    <span className="text-xs text-[#A78668] tabular-nums">
                      0{idx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Consultation CTA */}
      <section className="bg-[#EFECE8] border-t border-[#29232C]/10 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#29232C]">
              Discuss your questions directly with Tracey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#292729]/75">
              Arrange an unhurried 30-minute consultation in Alwoodley or explore the treatment directory.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors whitespace-nowrap"
            >
              Enquire via WhatsApp
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="/treatments"
              onClick={(e) => handleNav(e, '/treatments')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border border-[#29232C]/25 bg-white text-[#29232C] hover:border-[#29232C] transition-colors whitespace-nowrap"
            >
              Explore Treatments
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
