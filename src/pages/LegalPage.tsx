import {ArrowUpRight} from 'lucide-react';
import {CLINIC_INFO} from '../data/clinicData';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export function LegalPage({onNavigate}: LegalPageProps) {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-10 border-b border-[#29232C]/12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
          Governance, Privacy &amp; Published Clinic Policies
        </p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-normal text-[#29232C]">
          Privacy, Compliance &amp; Clinic Terms
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#292729]/75 leading-relaxed max-w-3xl">
          This page outlines the independent concept status, UK aesthetic advertising
          safeguards, published clinic appointment terms, and placeholder legal notices
          requiring formal owner approval prior to any production launch.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-10">
        {/* 1. Independent Concept Disclosure */}
        <article className="bg-[#29232C] text-white p-7 sm:p-9">
          <p className="text-xs uppercase tracking-widest text-[#C5A9AD]">
            01. Concept Status Disclosure
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-white">
            Independent Redesign Proposal
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#F8F6F4]/85">
            {CLINIC_INFO.disclosureBanner} This prototype has been created solely as an
            independent design and user-experience demonstration. It has not yet been
            commissioned, reviewed, or formally adopted by Tracey Ager Aesthetics. For
            official clinic policies and bookings, please visit{' '}
            <a
              href={CLINIC_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-[#C5A9AD] hover:text-white inline-flex items-center gap-1"
            >
              tracey-ager-aesthetics.co.uk
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            .
          </p>
        </article>

        {/* 2. Privacy & Data Protection Placeholder */}
        <article className="bg-white border border-[#29232C]/12 p-7 sm:p-9 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-[#29232C]/10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#29232C]">
              02. Privacy &amp; UK GDPR Notice (Placeholder — Requires Owner Approval)
            </h2>
            <span className="text-xs text-[#A78668]">Action required before launch</span>
          </div>
          <p className="text-sm text-[#292729]/80 leading-relaxed">
            This redesign concept does not collect, store, or process any personal data,
            cookies for marketing, or patient medical records.
          </p>
          <p className="text-sm text-[#292729]/80 leading-relaxed">
            Before any official production release—especially if an online enquiry form
            is introduced—the clinic owner must review and approve:
          </p>
          <ul className="space-y-2 text-sm text-[#292729]/80 list-disc pl-5">
            <li>Registered Data Controller details and UK GDPR lawful basis statements.</li>
            <li>Retention periods for consultation notes and consent records.</li>
            <li>Cookie consent preferences and analytics disclosure (if enabled).</li>
            <li>Secure clinical communication pathways for special-category health data.</li>
          </ul>
        </article>

        {/* 3. Published Clinic Terms & Cancellation Policy */}
        <article className="bg-white border border-[#29232C]/12 p-7 sm:p-9 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-[#29232C]/10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#29232C]">
              03. Appointment Terms &amp; Cancellation Policy (As Published — Subject to Confirmation)
            </h2>
            <span className="text-xs text-[#A78668]">Confirm with clinic</span>
          </div>
          <p className="text-sm text-[#292729]/80 leading-relaxed">
            Summarised from the clinic’s published terms page for reference within this
            redesign concept:
          </p>
          <dl className="divide-y divide-[#29232C]/10 text-sm">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-[#29232C]">Consultations</dt>
              <dd className="sm:col-span-2 text-[#292729]/80">
                New face-to-face consultations last approximately 30 minutes (£30,
                redeemable against treatment on the day).
              </dd>
            </div>
            <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-[#29232C]">Booking Fees &amp; Notice</dt>
              <dd className="sm:col-span-2 text-[#292729]/80">
                Published terms note a £30 booking fee (or £50 for appointments over £100)
                and require a minimum of two working days’ notice to transfer a booking
                fee. Always confirm current booking conditions directly with Tracey.
              </dd>
            </div>
            <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-[#29232C]">Arrival &amp; Preparation</dt>
              <dd className="sm:col-span-2 text-[#292729]/80">
                Clients are asked to arrive make-up free for facial procedures, attend
                appointments alone (unless a chaperone is arranged at booking), message
                via WhatsApp on arrival, and wait in their car until welcomed in.
              </dd>
            </div>
            <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-[#29232C]">Clinical Eligibility</dt>
              <dd className="sm:col-span-2 text-[#292729]/80">
                Full medical details must be disclosed. Treatment will not be carried out
                if clinically unsuitable, during pregnancy/breastfeeding, or over active
                cold sores or skin infections.
              </dd>
            </div>
          </dl>
        </article>

        {/* 4. Regulatory & NHS Clarification */}
        <article className="bg-white border border-[#29232C]/12 p-7 sm:p-9 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#29232C]">
            04. UK Advertising Compliance &amp; Clinic Independence
          </h2>
          <p className="text-sm text-[#292729]/80 leading-relaxed">
            In line with UK ASA/CAP and MHRA guidance, prescription-only medicines
            (including botulinum toxin treatments) are not advertised, discounted, or
            priced publicly on this concept website. Additional services and skincare
            ranges from Category F are flagged for compliance and availability sign-off.
          </p>
          <p className="text-sm text-[#292729]/80 leading-relaxed">
            While Tracey Ager has worked privately and for the NHS alongside
            reconstructive and cosmetic plastic surgeons during her career, Tracey Ager
            Aesthetics is an independent private clinic and is not operated by, endorsed
            by, or formally affiliated with the NHS.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="text-xs font-medium text-[#29232C] hover:text-[#A78668] underline underline-offset-4"
            >
              Return to Contact &amp; Consultations
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
