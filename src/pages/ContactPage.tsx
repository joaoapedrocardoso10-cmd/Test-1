import {useState} from 'react';
import {ArrowUpRight, ChevronDown, Mail, MapPin, MessageCircle} from 'lucide-react';
import {CLINIC_FAQS, CLINIC_IMAGES, CLINIC_INFO, TREATMENTS} from '../data/clinicData';
import {buildWhatsAppUrl, validateConceptEnquiry} from '../utils/aestheticsLogic';
import {ResilientImage} from '../components/ResilientImage';
import {Reveal} from '../components/Reveal';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export function ContactPage({onNavigate}: ContactPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState('WhatsApp (+44 7958 137711)');
  const [topic, setTopic] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const [previewErrors, setPreviewErrors] = useState<Record<string, string>>({});
  const [generatedPreview, setGeneratedPreview] = useState<string | null>(null);

  const handlePreviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateConceptEnquiry({name, contactMethod, topic, message});
    if (!result.valid) {
      setPreviewErrors(result.errors as Record<string, string>);
      setGeneratedPreview(null);
      return;
    }

    setPreviewErrors({});
    setGeneratedPreview(
      `Hello Tracey, my name is ${name.trim()}. I would like to enquire about ${topic}. ${message.trim()} (Preferred reply: ${contactMethod})`,
    );
  };

  return (
    <div>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-10 border-b border-[#29232C]/12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
          Alwoodley, North Leeds · LS17 7QP
        </p>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#29232C]">
              Contact &amp; Consultations
            </h1>
          </div>
          <div className="lg:col-span-5 text-sm sm:text-base text-[#292729]/75 leading-relaxed">
            Consultations and appointments are arranged directly with Tracey via WhatsApp
            or email—ensuring personal attention from your very first question.
          </div>
        </div>
      </section>

      {/* Direct Contact Channels & Hours */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Direct Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#29232C] text-white p-7 sm:p-9">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A9AD]">
                Primary Contact Method
              </p>
              <h2 className="mt-2 font-serif text-3xl text-white">
                Message Tracey on WhatsApp
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#F8F6F4]/80">
                WhatsApp is the quickest way to ask a question, check current clinic
                availability, or arrange a 30-minute consultation (£30, redeemable against
                treatment).
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#A78668] text-white hover:bg-[#947458] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp {CLINIC_INFO.whatsappDisplay}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium border border-white/25 text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            {/* Opening Hours (Flagged for confirmation) */}
            <div className="bg-white border border-[#29232C]/12 p-7 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-[#29232C]/10">
                <h2 className="font-serif text-2xl text-[#29232C]">
                  Published Clinic Hours
                </h2>
                <span className="text-xs text-[#A78668]">
                  Flagged for confirmation prior to launch
                </span>
              </div>

              <dl className="mt-4 divide-y divide-[#29232C]/10 tabular-nums">
                {CLINIC_INFO.openingHours.map((slot) => (
                  <div
                    key={slot.day}
                    className="py-3 flex items-center justify-between text-sm"
                  >
                    <dt className="font-medium text-[#29232C]">{slot.day}</dt>
                    <dd className="text-[#292729]/80">{slot.hours}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-xs text-[#292729]/65 leading-relaxed">
                {CLINIC_INFO.hoursConfirmationNote}
              </p>
            </div>
          </div>

          {/* Right: Alwoodley Location Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white border border-[#29232C]/12 flex-1 flex flex-col">
              <div className="aspect-[16/9] overflow-hidden bg-[#EBE6DF]">
                <ResilientImage
                  src={CLINIC_IMAGES.alwoodleySetting}
                  alt="Quiet leafy Yorkshire avenue reflecting the Alwoodley, North Leeds setting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                    Clinic Location
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                    Alwoodley, North Leeds
                  </h2>
                  <p className="mt-3 flex items-start gap-2.5 text-base text-[#29232C]">
                    <MapPin
                      className="w-4 h-4 mt-1 text-[#A78668] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{CLINIC_INFO.address}</span>
                  </p>
                  <p className="mt-3 text-sm text-[#292729]/75 leading-relaxed">
                    Exact arrival instructions are shared directly with you once an
                    appointment is confirmed. As published on the clinic’s terms page,
                    clients are asked to send a WhatsApp message upon arrival and wait
                    comfortably in their car until welcomed in.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#29232C]/10 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=The+Fairway+Alwoodley+Leeds+LS17+7QP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#29232C] hover:text-[#A78668] underline underline-offset-4"
                  >
                    Open Alwoodley LS17 7QP in Maps
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <span className="text-xs text-[#292729]/60">
                    Instagram · Facebook · Official Website
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Submitting Concept Enquiry Preview + FAQs */}
      <section className="bg-white border-y border-[#29232C]/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Non-Submitting Concept Enquiry Builder */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Non-Submitting Concept Demo
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                Draft a WhatsApp enquiry message
              </h2>
              <div className="mt-4 bg-[#F8F6F4] border border-[#29232C]/15 p-4 text-xs text-[#292729]/80 leading-relaxed">
                <strong className="text-[#29232C]">Concept Notice:</strong> This is an
                independent redesign concept and does not collect, store, or submit
                patient information. Use the preview builder below solely to prepare a
                message to send directly via WhatsApp or email.
              </div>

              <form onSubmit={handlePreviewSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="concept-name"
                    className="block text-xs font-medium text-[#29232C] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="concept-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6F4] border border-[#29232C]/20 text-[#29232C] focus:border-[#29232C] focus:outline-none"
                  />
                  {previewErrors.name && (
                    <p className="mt-1 text-xs text-[#8C2D38]">{previewErrors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="concept-topic"
                      className="block text-xs font-medium text-[#29232C] mb-1.5"
                    >
                      Treatment or Topic
                    </label>
                    <select
                      id="concept-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6F4] border border-[#29232C]/20 text-[#29232C] focus:border-[#29232C] focus:outline-none"
                    >
                      <option value="General Consultation">General Consultation</option>
                      {TREATMENTS.map((t) => (
                        <option key={t.slug} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="concept-reply"
                      className="block text-xs font-medium text-[#29232C] mb-1.5"
                    >
                      Preferred Reply Method
                    </label>
                    <select
                      id="concept-reply"
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6F4] border border-[#29232C]/20 text-[#29232C] focus:border-[#29232C] focus:outline-none"
                    >
                      <option value="WhatsApp (+44 7958 137711)">WhatsApp</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="concept-message"
                    className="block text-xs font-medium text-[#29232C] mb-1.5"
                  >
                    Brief Enquiry Note (avoid sharing sensitive medical details online)
                  </label>
                  <textarea
                    id="concept-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Could you let me know consultation availability on a Wednesday morning?"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6F4] border border-[#29232C]/20 text-[#29232C] focus:border-[#29232C] focus:outline-none"
                  />
                  {previewErrors.message && (
                    <p className="mt-1 text-xs text-[#8C2D38]">{previewErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors"
                >
                  Prepare Message Preview (Non-Submitting Demo)
                </button>
              </form>

              {generatedPreview && (
                <div className="mt-5 bg-[#EFECE8] border border-[#29232C]/15 p-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A78668]">
                    Prepared Message (Not Sent Automatically)
                  </p>
                  <p className="text-sm text-[#29232C] leading-relaxed">
                    {generatedPreview}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href={`${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                        generatedPreview,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors"
                    >
                      Open in WhatsApp
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={`mailto:${CLINIC_INFO.email}?subject=${encodeURIComponent(
                        `Consultation Enquiry: ${topic}`,
                      )}&body=${encodeURIComponent(generatedPreview)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium border border-[#29232C]/25 bg-white text-[#29232C] hover:border-[#29232C]"
                    >
                      Open in Email Client
                    </a>
                  </div>
                </div>
              )}
            </Reveal>
          </div>

          {/* Accessible FAQ Accordions */}
          <div className="lg:col-span-6">
            <Reveal delay={0.06}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A78668] font-medium">
                Frequently Asked Questions
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#29232C]">
                Practical clinic guidance
              </h2>

              <div className="mt-6 border-t border-[#29232C]/15 divide-y divide-[#29232C]/12">
                {CLINIC_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={faq.question} className="py-4">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 text-left py-1 text-base font-medium text-[#29232C] hover:text-[#A78668] transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <p className="mt-3 text-sm leading-relaxed text-[#292729]/75 pr-6">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#29232C]/12 text-xs text-[#292729]/70">
                For full appointment terms and privacy notes, see{' '}
                <a
                  href="/privacy-and-terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/privacy-and-terms');
                  }}
                  className="underline underline-offset-4 text-[#29232C] hover:text-[#A78668]"
                >
                  Privacy, Compliance &amp; Clinic Terms
                </a>
                .
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
