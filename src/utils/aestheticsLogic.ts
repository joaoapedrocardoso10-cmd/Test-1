import {
  CLINIC_INFO,
  PriceCategoryGroup,
  TreatmentCategoryId,
  TreatmentItem,
} from '../data/clinicData';

export interface RouteMeta {
  title: string;
  description: string;
}

export interface ConceptEnquiryInput {
  name: string;
  contactMethod: string;
  topic: string;
  message: string;
}

export interface ConceptEnquiryValidation {
  valid: boolean;
  errors: Partial<Record<keyof ConceptEnquiryInput, string>>;
}

export function buildWhatsAppUrl(treatmentName?: string): string {
  if (!treatmentName || !treatmentName.trim()) {
    const defaultMsg =
      'Hello Tracey, I would like to arrange a consultation at Tracey Ager Aesthetics. Could you please let me know your availability?';
    return `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const msg = `Hello Tracey, I would like to enquire about ${treatmentName.trim()}. Could you please provide some more information?`;
  return `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`;
}

export function filterTreatments(
  treatments: TreatmentItem[],
  query: string,
  category: TreatmentCategoryId | 'all',
): TreatmentItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return treatments.filter((item) => {
    const matchesCategory = category === 'all' || item.categoryId === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      item.name,
      item.categoryLabel,
      item.shortSummary,
      item.overview,
      ...item.commonReasons,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function findTreatmentBySlug(
  treatments: TreatmentItem[],
  slug: string,
): TreatmentItem | undefined {
  return treatments.find((item) => item.slug === slug);
}

export function getRelatedTreatments(
  treatments: TreatmentItem[],
  current: TreatmentItem,
): TreatmentItem[] {
  const mapped = current.relatedSlugs
    .map((slug) => treatments.find((t) => t.slug === slug))
    .filter((item): item is TreatmentItem => Boolean(item));

  if (mapped.length > 0) {
    return mapped;
  }

  return treatments
    .filter((item) => item.categoryId === current.categoryId && item.slug !== current.slug)
    .slice(0, 3);
}

export function filterPriceCategories(
  groups: PriceCategoryGroup[],
  selectedId: string,
): PriceCategoryGroup[] {
  if (selectedId === 'all') {
    return groups;
  }
  return groups.filter((group) => group.id === selectedId);
}

export function containsRestrictedPomPricing(groups: PriceCategoryGroup[]): boolean {
  const restrictedTerms = ['botox', 'botulinum', 'anti-wrinkle', 'hyperhidrosis', 'gummy smile', 'lip flip'];
  return groups.some((group) => {
    if (restrictedTerms.some((term) => group.title.toLowerCase().includes(term))) {
      return true;
    }
    return group.items.some((item) =>
      restrictedTerms.some((term) => item.service.toLowerCase().includes(term)),
    );
  });
}

export function getRouteMeta(pathname: string, treatments: TreatmentItem[]): RouteMeta {
  if (pathname === '/' || pathname === '') {
    return {
      title: 'Tracey Ager Aesthetics | Aesthetic Clinic in Alwoodley, North Leeds',
      description:
        'Independent redesign concept for Tracey Ager Aesthetics in Alwoodley, North Leeds. Personalised aesthetic care, medical tattooing, and skin treatments guided by over 40 years of experience.',
    };
  }

  if (pathname === '/about') {
    return {
      title: 'About Tracey Ager | 40+ Years of Aesthetic & Clinical Experience',
      description:
        'Learn about Tracey Ager: over 40 years in aesthetics, past private and NHS reconstructive collaboration, documented qualifications (I.T.E.C Hons, Cert Ed, C.P.C.P, Skills Assessor), and commitment to safety.',
    };
  }

  if (pathname === '/treatments') {
    return {
      title: 'Treatments Catalogue | Dermal Fillers, Skin Rejuvenation & Medical Tattooing Leeds',
      description:
        'Explore the complete treatment directory for Tracey Ager Aesthetics in Alwoodley, North Leeds: facial aesthetics, skin rejuvenation, permanent cosmetics, medical tattooing, and electrolysis.',
    };
  }

  if (pathname.startsWith('/treatments/')) {
    const slug = pathname.replace('/treatments/', '').replace(/\/$/, '');
    const treatment = findTreatmentBySlug(treatments, slug);
    if (treatment) {
      return {
        title: `${treatment.name} | Tracey Ager Aesthetics — Alwoodley, Leeds`,
        description: `${treatment.shortSummary} Individual consultation-led care in Alwoodley, North Leeds.`,
      };
    }
  }

  if (pathname === '/reviews') {
    return {
      title: 'Reviews & Results | Verified Client Feedback — Tracey Ager Aesthetics',
      description:
        'Read verified client testimonials and professional feedback published by Tracey Ager Aesthetics in Alwoodley, North Leeds.',
    };
  }

  if (pathname === '/price-guide') {
    return {
      title: 'Price Guide | Tracey Ager Aesthetics — Alwoodley, North Leeds',
      description:
        'Published reference price guide for dermal fillers, skin rejuvenation, permanent cosmetics, medical tattooing, and electrolysis at Tracey Ager Aesthetics.',
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact & Consultations | Alwoodley Clinic — Tracey Ager Aesthetics',
      description:
        'Contact Tracey Ager Aesthetics at The Fairway, Alwoodley, Leeds LS17 7QP via WhatsApp (+44 7958 137711) or email to arrange a personal consultation.',
    };
  }

  if (pathname === '/privacy-and-terms') {
    return {
      title: 'Privacy, Compliance & Clinic Terms | Tracey Ager Aesthetics Concept',
      description:
        'Published appointment terms, cancellation policy, UK advertising compliance notice, and privacy placeholders for Tracey Ager Aesthetics.',
    };
  }

  return {
    title: 'Tracey Ager Aesthetics | Alwoodley, North Leeds — Redesign Concept',
    description:
      'Independent website redesign concept for Tracey Ager Aesthetics in Alwoodley, North Leeds.',
  };
}

export function validateConceptEnquiry(input: ConceptEnquiryInput): ConceptEnquiryValidation {
  const errors: Partial<Record<keyof ConceptEnquiryInput, string>> = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters) to preview the message.';
  }

  if (!input.contactMethod.trim()) {
    errors.contactMethod = 'Please indicate how you would prefer to be contacted.';
  }

  if (!input.topic.trim()) {
    errors.topic = 'Please select a consultation topic.';
  }

  if (!input.message.trim() || input.message.trim().length < 10) {
    errors.message = 'Please enter a brief note (at least 10 characters) describing your enquiry.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
