export type TreatmentCategoryId =
  | 'facial-aesthetics'
  | 'skin-rejuvenation'
  | 'permanent-cosmetics'
  | 'medical-tattooing'
  | 'specialist-treatments'
  | 'additional-services';

export interface TreatmentCategory {
  id: TreatmentCategoryId;
  title: string;
  shortTitle: string;
  description: string;
  regulatoryNote?: string;
}

export interface TreatmentItem {
  slug: string;
  name: string;
  categoryId: TreatmentCategoryId;
  categoryLabel: string;
  shortSummary: string;
  overview: string;
  procedureExplanation: string;
  commonReasons: string[];
  consultationImportance: string;
  considerationsAndLimitations: string[];
  relatedSlugs: string[];
  image: string;
  imageAlt: string;
  requiresComplianceReview?: boolean;
  complianceNotice?: string;
  isPrescriptionConsultationOnly?: boolean;
}

export interface ClientReview {
  id: string;
  author: string;
  roleOrContext?: string;
  quote: string;
  treatmentMentioned?: string;
  sourceNote: string;
}

export interface PriceEntry {
  service: string;
  price: string;
  note?: string;
}

export interface PriceCategoryGroup {
  id: string;
  title: string;
  subtitle?: string;
  items: PriceEntry[];
}

export const CLINIC_IMAGES = {
  heroSanctuary: '/src/assets/images/hero_clinic_sanctuary_1795195203270.jpg',
  treatmentSuite: '/src/assets/images/treatment_facial_suite_1795195202833.jpg',
  skincareStillLife: '/src/assets/images/skincare_formulation_still_life_1795195203414.jpg',
  consultationDetail: '/src/assets/images/precision_atelier_detail_1795195202634.jpg',
  alwoodleySetting: '/src/assets/images/alwoodley_clinic_exterior_calm_1795195202666.jpg',
} as const;

export const CLINIC_INFO = {
  brandName: 'Tracey Ager Aesthetics',
  practitionerName: 'Tracey Ager',
  locationShort: 'Alwoodley, North Leeds',
  address: 'The Fairway, Alwoodley, Leeds LS17 7QP',
  whatsappDisplay: '+44 7958 137711',
  whatsappNumber: '447958137711',
  whatsappBaseUrl: 'https://wa.me/447958137711',
  email: 'traceyaaesthetics@gmail.com',
  officialWebsite: 'https://tracey-ager-aesthetics.co.uk/',
  officialPriceListUrl: 'https://tracey-ager-aesthetics.co.uk/price-list/',
  instagramUrl: 'https://www.instagram.com/traceyager.aesthetics/',
  facebookUrl: 'https://www.facebook.com/TraceyAgerAesthetics',
  disclosureShort:
    'Independent redesign concept for Tracey Ager Aesthetics — not the official website.',
  disclosureBanner:
    'Independent redesign concept for Tracey Ager Aesthetics — not the official clinic website.',
  openingHours: [
    {day: 'Monday', hours: '9:30 am – 6:00 pm'},
    {day: 'Wednesday', hours: '9:30 am – 6:00 pm'},
    {day: 'Friday', hours: '9:30 am – 3:00 pm'},
  ],
  hoursConfirmationNote:
    'Clinic days and hours are reproduced as currently published and should be confirmed with Tracey prior to any official launch.',
  qualifications: [
    'I.T.E.C Hons',
    'Cert Ed',
    'C.P.C.P',
    'Skills Assessor',
  ],
  professionalRoles: [
    'Advanced Aesthetic Practitioner',
    'Qualified Lecturer and Skills Assessor',
    'Advanced Medical Tattooist',
    'Advanced Permanent Cosmetic Technician',
    'Elite Fibroblast Plasma Technician',
  ],
} as const;

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: 'facial-aesthetics',
    title: 'Facial Aesthetics',
    shortTitle: 'Facial Aesthetics',
    description:
      'Consultation-led aesthetic treatments focused on facial harmony, dermal hydration, and skin structural support.',
    regulatoryNote:
      'Where an enquiry relates to prescription-only medicines, suitability is assessed solely during a private medical consultation. No prescription-only medicines are advertised publicly on this concept site.',
  },
  {
    id: 'skin-rejuvenation',
    title: 'Skin Rejuvenation',
    shortTitle: 'Skin Rejuvenation',
    description:
      'Targeted clinical facials, collagen-induction modalities, exfoliation, and non-surgical tightening approaches.',
  },
  {
    id: 'permanent-cosmetics',
    title: 'Permanent Cosmetics',
    shortTitle: 'Permanent Cosmetics',
    description:
      'Refined pigment placement designed to subtly define eyebrows and lips with careful colour matching.',
  },
  {
    id: 'medical-tattooing',
    title: 'Medical Tattooing & Camouflage',
    shortTitle: 'Medical Tattooing',
    description:
      'Specialist restorative pigment and camouflage techniques shaped by decades of experience alongside reconstructive surgical teams.',
  },
  {
    id: 'specialist-treatments',
    title: 'Specialist Treatments',
    shortTitle: 'Specialist',
    description:
      'Precision clinical procedures including electrolysis, cryotherapy, vascular thread vein care, and benign lesion removal.',
  },
  {
    id: 'additional-services',
    title: 'Additional Services & Products',
    shortTitle: 'Additional & Skincare',
    description:
      'Supportive wellness injections, lash and brow serums, and medical-grade skincare stocked for home skin management.',
    regulatoryNote:
      'All services and products in this section require individual verification for current clinic availability and UK advertising compliance prior to official publication.',
  },
];

export const FEATURED_CATEGORIES = [
  {
    title: 'Dermal Fillers',
    categoryLabel: 'Facial Aesthetics',
    description:
      'Carefully balanced volume restoration for cheeks, lips, tear troughs, and facial contours, tailored following anatomical assessment.',
    slug: 'dermal-fillers',
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Quiet aesthetic treatment room with soft daylight and neutral linen bed',
  },
  {
    title: 'Skin Rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    description:
      'Skin needling, chemical peels, hydro-facials, dermaplaning, and Fibroblast plasma selected to support skin clarity and texture.',
    slug: 'skin-needling',
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Clinical skincare jars and amber serum dropper bottles on warm limestone',
  },
  {
    title: 'Micropigmentation',
    categoryLabel: 'Permanent Cosmetics',
    description:
      'Bespoke eyebrow and lip micropigmentation executed with measured pigment theory and a follow-up refinement session.',
    slug: 'permanent-cosmetics',
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Linen-bound clinical consultation journal and bronze fountain pen on oak desk',
  },
  {
    title: 'Medical Tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    description:
      'Areola re-pigmentation, 3D areola creation, and scar, burn, or cleft lip camouflage delivered with quiet sensitivity.',
    slug: 'medical-tattooing',
    image: CLINIC_IMAGES.heroSanctuary,
    imageAlt: 'Serene North Leeds clinic consultation room with travertine console',
  },
  {
    title: 'Electrolysis',
    categoryLabel: 'Specialist Treatments',
    description:
      'Established, precision single-follicle hair removal suitable for delicate facial and targeted body areas.',
    slug: 'electrolysis',
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Clean minimalist clinic treatment space prepared for private consultation',
  },
  {
    title: 'Specialist Skin Treatments',
    categoryLabel: 'Specialist Treatments',
    description:
      'Cryotherapy, red vein care, milia and skin tag removal, and sclerotherapy following careful skin assessment.',
    slug: 'cryotherapy',
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Refined skincare vessels and botanical detail in soft daylight',
  },
];

export const TREATMENTS: TreatmentItem[] = [
  // A. Facial Aesthetics
  {
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    categoryId: 'facial-aesthetics',
    categoryLabel: 'Facial Aesthetics',
    shortSummary:
      'Hyaluronic acid-based volume restoration and facial contouring tailored to individual facial proportions.',
    overview:
      'Dermal fillers are used to restore volume or gently support areas such as the cheeks, lips, nose-to-mouth lines, marionette lines, chin, jawline, and tear troughs.',
    procedureExplanation:
      'Following a full facial assessment and discussion of your goals, small quantities of dermal filler are placed beneath the skin using sterile clinical techniques to support contours and soften creases.',
    commonReasons: [
      'Addressing age-related volume changes in the cheeks, mid-face, or lower face',
      'Softening nose-to-mouth or marionette lines',
      'Refining lip definition or addressing upper lip lines',
      'Improving the appearance of under-eye hollows (tear troughs) where clinically appropriate',
    ],
    consultationImportance:
      'Facial anatomy varies significantly from person to person. A face-to-face consultation allows Tracey to assess skin quality, tissue support, and suitability before recommending whether filler is appropriate.',
    considerationsAndLimitations: [
      'Not every area or concern is suitable for dermal filler; alternative skin treatments may be recommended.',
      'Individual outcomes, longevity, and response vary and cannot be guaranteed.',
      'Full medical history and suitability screening are required prior to any treatment.',
    ],
    relatedSlugs: ['skin-boosters', 'polynucleotides', 'pdo-threads'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Minimalist Alwoodley clinic treatment room prepared for aesthetic consultations',
  },
  {
    slug: 'skin-boosters',
    name: 'Skin Boosters',
    categoryId: 'facial-aesthetics',
    categoryLabel: 'Facial Aesthetics',
    shortSummary:
      'Intense dermal hydration treatments such as Profhilo designed to support skin luminosity and elasticity.',
    overview:
      'Skin boosters are injectable hydration treatments formulated to nourish the skin from within rather than adding structural facial volume.',
    procedureExplanation:
      'Bio-remodelling formulations are placed into superficial dermal layers across targeted zones of the face or neck to support hydration and tissue quality.',
    commonReasons: [
      'Addressing skin that feels dry, crepey, or lacking radiance',
      'Supporting skin firmness and elasticity without altering facial contours',
      'Preparing skin quality ahead of or alongside broader facial care plans',
    ],
    consultationImportance:
      'Tracey reviews your skin condition, hydration needs, and medical history during consultation to advise whether a skin booster course is appropriate.',
    considerationsAndLimitations: [
      'Designed to improve skin hydration and quality rather than replace lost structural volume.',
      'Usually discussed as a staged course, with exact scheduling confirmed at consultation.',
      'Subject to individual medical screening and clinic suitability criteria.',
    ],
    relatedSlugs: ['polynucleotides', 'mesotherapy', 'skin-needling'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Clinical skincare bottles and frosted glass jars on limestone surface',
  },
  {
    slug: 'polynucleotides',
    name: 'Polynucleotides',
    categoryId: 'facial-aesthetics',
    categoryLabel: 'Facial Aesthetics',
    shortSummary:
      'Regenerative injectable biostimulators aimed at supporting tissue quality and delicate skin areas.',
    overview:
      'Polynucleotides are purified nucleotide fractions used in aesthetic medicine to support cellular environment quality, tissue hydration, and skin resilience.',
    procedureExplanation:
      'Administered via delicate micro-injections into selected facial or peri-orbital zones, polynucleotides work gradually within the dermal tissue rather than acting as a volumising filler.',
    commonReasons: [
      'Supporting fragile or thinning skin around the eyes, face, or neck',
      'Clients seeking a regenerative, non-volumising approach to skin quality',
      'Improving overall skin tone, texture, and hydration',
    ],
    consultationImportance:
      'A personal consultation establishes whether polynucleotides, skin boosters, or non-injectable skin rejuvenation are best matched to your skin goals.',
    considerationsAndLimitations: [
      'Typically undertaken as a course of treatments; scheduling is confirmed individually.',
      'Changes develop progressively and vary between individuals.',
      'Not suitable in all medical circumstances; full screening is carried out in clinic.',
    ],
    relatedSlugs: ['skin-boosters', 'mesotherapy', 'dermal-fillers'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Private consultation table with linen journal and bronze pen in natural light',
  },
  {
    slug: 'pdo-threads',
    name: 'PDO Threads',
    categoryId: 'facial-aesthetics',
    categoryLabel: 'Facial Aesthetics',
    shortSummary:
      'Absorbable polydioxanone suture threads used for targeted tissue support and collagen stimulation.',
    overview:
      'PDO (polydioxanone) threads are sterile, absorbable medical sutures placed beneath the skin to provide gentle mechanical support and stimulate local collagen response.',
    procedureExplanation:
      'Following detailed anatomical mapping, fine threads are positioned in the subcutaneous plane under strict aseptic conditions.',
    commonReasons: [
      'Seeking subtle support for mild-to-moderate lower-face or jawline laxity',
      'Encouraging localised collagen support without surgical intervention',
    ],
    consultationImportance:
      'Thread selection, placement suitability, and realistic expectations depend entirely on tissue thickness and laxity, which must be assessed in person.',
    considerationsAndLimitations: [
      'Not a replacement for surgical facelift procedures where significant laxity is present.',
      'Fees and exact thread plans are determined only after individual consultation.',
      'Requires full medical screening and adherence to post-treatment guidance.',
    ],
    relatedSlugs: ['dermal-fillers', 'fibroblast-plasma', 'dermalift'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Serene clinical treatment room in Alwoodley, North Leeds',
  },
  {
    slug: 'mesotherapy',
    name: 'Mesotherapy',
    categoryId: 'facial-aesthetics',
    categoryLabel: 'Facial Aesthetics',
    shortSummary:
      'Micro-dosed delivery of revitalising vitamins, hyaluronic acid, and nutrients to the face and neck.',
    overview:
      'Mesotherapy delivers targeted nourishing formulations directly into the superficial layers of the skin on the face and neck.',
    procedureExplanation:
      'Small, controlled micro-deposits of tailored meso-cocktails are introduced across the treatment area to replenish hydration and support a fresher complexion.',
    commonReasons: [
      'Dull, tired-looking skin across the face and neck',
      'Improving superficial hydration and skin suppleness',
      'Complementing a structured clinical skincare routine',
    ],
    consultationImportance:
      'During consultation, Tracey examines your skin barrier and discusses active ingredients appropriate for your skin type.',
    considerationsAndLimitations: [
      'Results are subtle and cumulative rather than structural.',
      'Individual suitability depends on skin sensitivity and medical history.',
    ],
    relatedSlugs: ['skin-boosters', 'skin-needling', 'hydro-facial'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Serum dropper bottles and porcelain skincare vessels in soft daylight',
  },
  {
    slug: 'prescription-only-consultations',
    name: 'Consultation-Led Prescription Aesthetics',
    categoryId: 'facial-aesthetics',
    categoryLabel: 'Facial Aesthetics',
    shortSummary:
      'Private medical consultation for muscle-relaxing and prescription-only aesthetic concerns — compliance-reviewed.',
    overview:
      'Certain aesthetic concerns—such as dynamic expression lines, bruxism-related jaw tension, or hyperhidrosis—may involve prescription-only medicines following a clinical assessment.',
    procedureExplanation:
      'In accordance with UK MHRA and ASA regulations, prescription-only medicines are never promoted, priced, or advertised to the public. Any discussion of prescription-only options takes place strictly within a private, one-to-one consultation where all clinical alternatives are explained.',
    commonReasons: [
      'Enquiring about medical assessment for dynamic facial lines or expression concerns',
      'Discussing non-surgical options for jaw tension or excessive underarm sweating',
      'Understanding whether non-prescription skin rejuvenation or medical-led options are appropriate',
    ],
    consultationImportance:
      'A formal face-to-face consultation is a mandatory clinical safeguard prior to considering any prescription-only aesthetic pathway.',
    considerationsAndLimitations: [
      'UK advertising regulations prohibit public promotion, pricing, or promotional offers for prescription-only medicines.',
      'Treatment is never guaranteed following consultation; suitability is determined solely on clinical grounds.',
      'This concept page requires formal compliance sign-off by the clinic owner and prescribing team prior to any live publication.',
    ],
    relatedSlugs: ['dermal-fillers', 'skin-boosters', 'dermalift'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Private consultation notebook and pen in quiet daylight studio',
    isPrescriptionConsultationOnly: true,
    requiresComplianceReview: true,
    complianceNotice:
      'Regulatory Compliance Notice: Public promotion of prescription-only medicines (including botulinum toxin) is restricted under UK law. No prescription-only medicines, brand names, offers, or prices are advertised here. Flagged for formal compliance review before public use.',
  },

  // B. Skin Rejuvenation
  {
    slug: 'skin-needling',
    name: 'Skin Needling / Microneedling',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Minimally invasive collagen induction therapy for facial rejuvenation, textural scars, and burns.',
    overview:
      'Skin needling is a minimally invasive clinical procedure used for facial rejuvenation, textural refinement, acne scarring, and burn scars by encouraging the skin’s natural repair response.',
    procedureExplanation:
      'Precision micro-channels are created cleanly in the upper dermis, prompting natural collagen, elastin, and cellular renewal over time.',
    commonReasons: [
      'Improving uneven skin texture and enlarged pores',
      'Addressing acne scarring, surgical scars, or burn tissue texture',
      'Supporting firmer, smoother skin quality on the face or body',
    ],
    consultationImportance:
      'Depth settings, pre-care preparation, and skin barrier readiness are tailored individually during consultation.',
    considerationsAndLimitations: [
      'Not suitable over active skin infections, active cold sores, or compromised healing areas.',
      'Sun protection and medical-grade home care are essential parts of responsible aftercare.',
    ],
    relatedSlugs: ['skin-peels', 'scar-camouflage', 'mesotherapy'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Clinical facial suite with calm daylight and folded white cotton towels',
  },
  {
    slug: 'skin-peels',
    name: 'Skin Peels',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Controlled chemical exfoliation including gentle retinol peels and deeper resurfacing peels.',
    overview:
      'Skin peels gently remove accumulated dead surface skin cells to support brighter tone, clearer pores, and healthier cellular turnover.',
    procedureExplanation:
      'Depending on skin assessment, Tracey selects an appropriate formulation—ranging from a gentle retinol peel to a more intensive peel—applied in controlled layers.',
    commonReasons: [
      'Dull, congested, or uneven skin tone',
      'Supporting clarity in blemish-prone or sun-exposed skin',
      'Refreshing skin texture prior to maintenance facials',
    ],
    consultationImportance:
      'Peel strength must match your skin type, Fitzpatrick tone, and current skincare regimen to protect the skin barrier.',
    considerationsAndLimitations: [
      'Pre- and post-treatment skincare guidance, including sun protection, must be followed carefully.',
      'Not appropriate during pregnancy, breastfeeding, or active skin inflammation.',
    ],
    relatedSlugs: ['dermaplaning', 'medi-facials', 'skin-needling'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Clinical glass skincare vessels on limestone plinth',
  },
  {
    slug: 'medi-facials',
    name: 'Medi Facials',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Clinical, results-focused facials such as the Oxygenating Glow Facial tailored to skin health.',
    overview:
      'Medi facials bridge clinical skin science and restorative comfort, addressing congestion, dehydration, and dullness with targeted active formulations.',
    procedureExplanation:
      'Treatments such as the Oxygenating Glow Facial cleanse, oxygenate, and replenish the skin using clinic-grade protocols adjusted on the day.',
    commonReasons: [
      'Restoring radiance and hydration to stressed or dehydrated skin',
      'Maintaining healthy skin between more intensive aesthetic procedures',
    ],
    consultationImportance:
      'Tracey evaluates skin sensitivity and barrier health before selecting active serums and modalities.',
    considerationsAndLimitations: [
      'Clients are asked to arrive make-up free prior to facial procedures.',
      'Frequency depends on individual skin needs.',
    ],
    relatedSlugs: ['hydro-facial', 'cathio-derm', 'high-frequency-facial'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Quiet Alwoodley clinic room for clinical facial treatments',
  },
  {
    slug: 'dermaplaning',
    name: 'Dermaplaning',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Precision physical exfoliation removing surface dead skin cells and fine vellus hair.',
    overview:
      'Dermaplaning uses a sterile surgical-grade blade at a careful angle to gently lift dead surface skin cells and fine facial hair ("peach fuzz").',
    procedureExplanation:
      'Available as an express session or advanced treatment incorporating a gentle skin peel, leaving the skin surface noticeably smoother and receptive to skincare.',
    commonReasons: [
      'Achieving a smoother skin surface and brighter complexion',
      'Removing fine vellus hair so skincare and make-up sit evenly',
      'Combining physical exfoliation with a gentle peel',
    ],
    consultationImportance:
      'Skin integrity, acne activity, and vascular sensitivity are checked beforehand to confirm suitability.',
    considerationsAndLimitations: [
      'Not suitable over active acne lesions or broken skin.',
      'Does not alter hair thickness or follicle growth patterns.',
    ],
    relatedSlugs: ['skin-peels', 'hydro-facial', 'medi-facials'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Alabaster linen treatment bed in sunlit facial suite',
  },
  {
    slug: 'hydro-facial',
    name: 'Hydro-Facial',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Multi-step cleansing, gentle exfoliation, extraction, and nourishing hydration.',
    overview:
      'The Hydro-Facial combines deep vortex-style cleansing, gentle pore decongesting, and hydrating serum infusion in one comfortable appointment.',
    procedureExplanation:
      'Controlled hydration tips loosen surface impurities while simultaneously infusing soothing and nourishing solutions tailored to the skin.',
    commonReasons: [
      'Congested pores, blackheads, or uneven surface texture',
      'Dehydrated skin needing simultaneous cleansing and nourishment',
    ],
    consultationImportance:
      'Allows Tracey to calibrate suction comfort and select appropriate hydrating solutions for sensitive or reactive skin.',
    considerationsAndLimitations: [
      'Regular maintenance may be discussed depending on skin goals.',
      'Arrive without make-up where possible.',
    ],
    relatedSlugs: ['cathio-derm', 'medi-facials', 'dermaplaning'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Clean minimalist aesthetic treatment room',
  },
  {
    slug: 'high-frequency-facial',
    name: 'High Frequency Facial',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Antibacterial, oxygenating electrical facial designed to clarify congested and blemish-prone skin.',
    overview:
      'High frequency therapy uses gentle glass electrodes to produce an antibacterial, oxygenating effect on the skin surface.',
    procedureExplanation:
      'Following thorough cleansing, a sterile glass electrode glides smoothly over the skin or gauze barrier to calm congestion and invigorate local circulation.',
    commonReasons: [
      'Blemish-prone or congested skin seeking gentle antibacterial support',
      'Revitalising sluggish skin tone without abrasive exfoliation',
    ],
    consultationImportance:
      'Medical screening ensures there are no electrical contraindications such as implanted medical devices or pregnancy.',
    considerationsAndLimitations: [
      'Not suitable for clients with pacemakers, certain metal implants, or during pregnancy.',
      'Suitability confirmed in clinic prior to treatment.',
    ],
    relatedSlugs: ['cathio-derm', 'hydro-facial', 'medi-facials'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Clinical facial bottles and bowls arranged on stone',
  },
  {
    slug: 'cathio-derm',
    name: 'Cathio-Derm',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Deep-cleansing, hydrating, and rejuvenating galvanic facial treatment.',
    overview:
      'Cathio-Derm is a classic clinical facial combining deep pore-cleansing desincrustation with targeted ionised serum penetration.',
    procedureExplanation:
      'Low-level galvanic currents help soften sebum congestion and encourage hydrating active ingredients into the upper epidermis.',
    commonReasons: [
      'Deep cleansing without harsh mechanical scrubbing',
      'Boosting skin hydration and clarity',
    ],
    consultationImportance:
      'Full health history screening verifies suitability for gentle electro-therapy facials.',
    considerationsAndLimitations: [
      'Contraindicated for clients with certain medical implants or pregnancy.',
      'Treatment parameters are adjusted to individual comfort.',
    ],
    relatedSlugs: ['dermalift', 'high-frequency-facial', 'hydro-facial'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Serene treatment bed and skincare tray in daylight',
  },
  {
    slug: 'dermalift',
    name: 'Dermalift Non-Surgical Facial Treatment',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Microcurrent facial toning designed to gently exercise facial muscles and support contour definition.',
    overview:
      'Dermalift uses finely tuned microcurrent pulses to tone facial musculature and refresh skin vitality without needles or downtime.',
    procedureExplanation:
      'Dual probes deliver gentle microcurrents across key facial muscle groups following a structured lifting sequence.',
    commonReasons: [
      'Clients preferring a needle-free facial toning option',
      'Refreshing facial muscle tone and lymphatic drainage',
    ],
    consultationImportance:
      'An assessment determines whether a single maintenance session or a structured series is most appropriate.',
    considerationsAndLimitations: [
      'Offers subtle, cumulative toning rather than the structural change of surgical lifting.',
      'Electrical contraindications are screened prior to booking.',
    ],
    relatedSlugs: ['cathio-derm', 'fibroblast-plasma', 'pdo-threads'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Minimalist Alwoodley clinic room',
  },
  {
    slug: 'fibroblast-plasma',
    name: 'Fibroblast / Plasma',
    categoryId: 'skin-rejuvenation',
    categoryLabel: 'Skin Rejuvenation',
    shortSummary:
      'Targeted non-surgical plasma skin tightening performed by an Elite Fibroblast Plasma Technician.',
    overview:
      'Fibroblast plasma is a precision non-surgical technique used on targeted areas such as upper and lower eyelids, glabella, crow’s feet, neck, or benign skin lesions.',
    procedureExplanation:
      'A fine plasma arc creates tiny controlled micro-points on the skin surface without cutting the skin, stimulating natural tissue contraction and collagen remodelling.',
    commonReasons: [
      'Excess or hooded skin around the upper or lower eyelids',
      'Targeted skin tightening on the neck, crow’s feet, or glabellar area',
      'Precision removal of selected benign skin tags or lesions',
    ],
    consultationImportance:
      'Suitability depends heavily on skin tone, healing history, and anatomical area. Tracey is an Elite Fibroblast Plasma Technician and conducts careful pre-treatment evaluation.',
    considerationsAndLimitations: [
      'Not suitable for all skin types due to potential pigment sensitivity; assessed individually.',
      'Tiny surface crusts form during normal healing and must not be picked; full aftercare guidance is provided.',
    ],
    relatedSlugs: ['skin-tag-removal', 'dermalift', 'skin-needling'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Clinical consultation table with journal and bronze fountain pen',
  },

  // C. Permanent Cosmetics
  {
    slug: 'eyebrow-micropigmentation',
    name: 'Eyebrow Micropigmentation',
    categoryId: 'permanent-cosmetics',
    categoryLabel: 'Permanent Cosmetics',
    shortSummary:
      'Bespoke semi-permanent eyebrow pigment design tailored to bone structure and natural hair tone.',
    overview:
      'Eyebrow micropigmentation restores balanced brow framing, symmetry, and soft fullness for sparse, uneven, or over-plucked brows.',
    procedureExplanation:
      'Tracey carefully maps brow proportions and selects bespoke pigments before implanting fine strokes or soft shading into the upper dermis. A follow-up treatment is included to refine colour and symmetry.',
    commonReasons: [
      'Sparse, thinning, or asymmetrical eyebrows',
      'Reducing reliance on daily brow pencils',
      'Restoring natural-looking brow definition after hair loss',
    ],
    consultationImportance:
      'Colour matching, shape mapping, and patch testing are essential to ensure a result that harmonises with your complexion and features.',
    considerationsAndLimitations: [
      'Pigment settles and softens over time; annual colour boosters may be discussed.',
      'Requires adherence to strict healing and sun-care advice.',
    ],
    relatedSlugs: ['lip-micropigmentation', 'permanent-cosmetics', 'scar-camouflage'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Precision consultation notebook and fine pen for bespoke treatment planning',
  },
  {
    slug: 'lip-micropigmentation',
    name: 'Lip Micropigmentation',
    categoryId: 'permanent-cosmetics',
    categoryLabel: 'Permanent Cosmetics',
    shortSummary:
      'Soft lip blush pigment placement to refine lip border symmetry and restore gentle natural colour.',
    overview:
      'Lip micropigmentation subtly enhances pale or uneven lip borders and restores a soft, healthy wash of colour without adding artificial volume.',
    procedureExplanation:
      'Custom-blended pigments are delicately layered across the lip tissue following precise border mapping, with an included follow-up refinement appointment.',
    commonReasons: [
      'Softening blurred or pale natural lip borders',
      'Balancing slight lip asymmetry or scar-related pigment loss',
      'Achieving a low-maintenance, understated lip tint',
    ],
    consultationImportance:
      'A thorough consultation covers pigment undertones, cold sore history precautions, and realistic healed colour expectations.',
    considerationsAndLimitations: [
      'Cannot be performed during an active cold sore outbreak; medical history is screened in advance.',
      'Healed shade appears softer than immediate post-procedure colour.',
    ],
    relatedSlugs: ['eyebrow-micropigmentation', 'cleft-lip-camouflage', 'permanent-cosmetics'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Muted rose and porcelain editorial still life on stone',
  },
  {
    slug: 'permanent-cosmetics',
    name: 'Permanent Cosmetics',
    categoryId: 'permanent-cosmetics',
    categoryLabel: 'Permanent Cosmetics',
    shortSummary:
      'Comprehensive permanent cosmetic artistry by an Advanced Permanent Cosmetic Technician.',
    overview:
      'Permanent cosmetics offer long-lasting, refined pigment definition for eyebrows and lips, tailored to mature gracefully alongside natural features.',
    procedureExplanation:
      'Drawing on over 40 years of aesthetic experience and C.P.C.P qualification, Tracey approaches permanent cosmetics with conservative shape planning and custom pigment blending.',
    commonReasons: [
      'Eyebrow enhancement and symmetry restoration',
      'Lip blush colour and border refinement',
      'Annual colour boosters for existing permanent cosmetic clients',
    ],
    consultationImportance:
      'Every appointment begins with unhurried measurement, colour selection, and written consent—never a one-size-fits-all template.',
    considerationsAndLimitations: [
      'Includes a scheduled follow-up appointment to perfect pigment retention.',
      'Medical history, medications, and skin sensitivity are reviewed before proceeding.',
    ],
    relatedSlugs: ['eyebrow-micropigmentation', 'lip-micropigmentation', 'medical-tattooing'],
    image: CLINIC_IMAGES.heroSanctuary,
    imageAlt: 'Calm consultation sanctuary in Alwoodley, North Leeds',
  },

  // D. Medical Tattooing & Camouflage
  {
    slug: 'medical-tattooing',
    name: 'Medical Tattooing',
    categoryId: 'medical-tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    shortSummary:
      'Restorative clinical micropigmentation grounded in extensive experience alongside reconstructive surgical teams.',
    overview:
      'Medical tattooing uses specialist clinical pigments to restore visual continuity following breast reconstruction, surgery, trauma, or scarring.',
    procedureExplanation:
      'Performed in a private, calm setting in Alwoodley, medical tattooing draws on Tracey’s years working alongside reconstructive and cosmetic plastic surgeons privately and within the NHS.',
    commonReasons: [
      'Post-mastectomy areola re-pigmentation and 3D areola creation',
      'Camouflaging surgical, eyebrow, lip, or burn scars',
      'Restoring vermilion border symmetry following cleft lip repair',
    ],
    consultationImportance:
      'Sensitive surgical history, tissue maturity, and emotional readiness are discussed unhurriedly in a private consultation.',
    considerationsAndLimitations: [
      'Scar or reconstructed tissue must be fully healed and mature before pigment work begins.',
      'This private clinic operates independently and is not NHS-operated or NHS-endorsed.',
    ],
    relatedSlugs: ['areola-repigmentation', '3d-areola-creation', 'scar-camouflage'],
    image: CLINIC_IMAGES.heroSanctuary,
    imageAlt: 'Private sunlit clinic suite offering calm restorative consultations',
  },
  {
    slug: 'areola-repigmentation',
    name: 'Areola Re-pigmentation',
    categoryId: 'medical-tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    shortSummary:
      'Custom colour-matched pigment restoration following breast surgery or mastectomy reconstruction.',
    overview:
      'Areola re-pigmentation restores natural colour, softness, and symmetry to the nipple-areola complex after reconstructive or cosmetic breast surgery.',
    procedureExplanation:
      'Pigments are custom blended to complement natural skin tones or match an existing contralateral areola, including a follow-up refinement session.',
    commonReasons: [
      'Completing unilateral or bilateral breast reconstruction following mastectomy',
      'Addressing pigment loss or scarring around the areola border after reduction or lift surgery',
    ],
    consultationImportance:
      'Tracey checks tissue healing, surgical clearance, and exact colour preferences before scheduling treatment.',
    considerationsAndLimitations: [
      'Requires complete surgical healing prior to pigment placement.',
      'Uni-lateral and bi-lateral pathways include a follow-up treatment.',
    ],
    relatedSlugs: ['3d-areola-creation', 'medical-tattooing', 'scar-camouflage'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Discreet, private treatment sanctuary in North Leeds',
  },
  {
    slug: '3d-areola-creation',
    name: '3D Areola Creation',
    categoryId: 'medical-tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    shortSummary:
      'Tonal shading and highlights creating realistic visual depth after mastectomy reconstruction.',
    overview:
      '3D areola creation uses layered shading, light reflection, and natural tonal variation to create the visual impression of projection and texture on reconstructed breast skin.',
    procedureExplanation:
      'Through careful light-and-shadow pigment placement, Tracey builds subtle visual dimension tailored to your anatomy and skin tone.',
    commonReasons: [
      'Post-mastectomy reconstruction where nipple reconstruction has not been performed',
      'Enhancing visual realism and symmetry after unilateral or bilateral surgery',
    ],
    consultationImportance:
      'A personal consultation ensures bespoke sizing, placement, and shade matching in a calm, respectful environment.',
    considerationsAndLimitations: [
      'Achieves visual 3D shading rather than physical tissue projection.',
      'Requires mature, settled surgical skin prior to treatment.',
    ],
    relatedSlugs: ['areola-repigmentation', 'medical-tattooing', 'skin-camouflage'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Calm consultation table with linen journal and ceramic vase',
  },
  {
    slug: 'scar-camouflage',
    name: 'Scar Camouflage',
    categoryId: 'medical-tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    shortSummary:
      'Targeted medical pigment blending to soften contrast in hypopigmented or surgical scars.',
    overview:
      'Scar camouflage introduces skin-toned medical pigments into pale or contrasting scars—including eyebrow, lip, and body scars—to help them blend more harmoniously with surrounding skin.',
    procedureExplanation:
      'Often preceded or complemented by skin needling where tissue texture needs smoothing, pigments are layered conservatively across healed scar tissue.',
    commonReasons: [
      'Pale surgical scars on the face or body',
      'Eyebrow scars interrupting hair growth',
      'Lip or trauma scars creating uneven tone',
    ],
    consultationImportance:
      'Scar maturity, vascularity, and sun-exposure habits must be evaluated before determining whether camouflage tattooing or skin needling is most suitable.',
    considerationsAndLimitations: [
      'Camouflaged tissue does not tan in the same way as surrounding natural skin.',
      'Not suitable for fresh, pink, keloid, or actively changing scars.',
    ],
    relatedSlugs: ['burn-camouflage', 'skin-needling', 'skin-camouflage'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Editorial still life representing careful clinical record keeping',
  },
  {
    slug: 'burn-camouflage',
    name: 'Burn Camouflage',
    categoryId: 'medical-tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    shortSummary:
      'Sensitive medical pigment and texture-supportive care for healed burn scarring.',
    overview:
      'Burn camouflage aims to reduce visible tonal contrast on settled burn scars through custom medical pigment matching and gentle restorative care.',
    procedureExplanation:
      'Depending on scar thickness and colour contrast, Tracey may discuss medical pigment camouflage, skin needling, or topical skin camouflage lessons.',
    commonReasons: [
      'Addressing patchy or pale healed burn tissue',
      'Restoring lip or brow definition affected by thermal injury',
    ],
    consultationImportance:
      'Burn tissue behaves differently from uninjured skin; a cautious, staged assessment is vital before planning any procedure.',
    considerationsAndLimitations: [
      'Only performed on fully healed, stable tissue.',
      'Multiple cautious stages are sometimes required and outcomes vary by tissue type.',
    ],
    relatedSlugs: ['scar-camouflage', 'skin-needling', 'skin-camouflage'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Quiet private treatment space in Alwoodley',
  },
  {
    slug: 'cleft-lip-camouflage',
    name: 'Cleft Lip Camouflage',
    categoryId: 'medical-tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    shortSummary:
      'Restorative lip border definition and scar blending following cleft lip surgery.',
    overview:
      'Cleft lip camouflage combines advanced permanent cosmetic artistry and medical tattooing to restore visual continuity to the Cupid’s bow, vermilion border, and philtrum scar.',
    procedureExplanation:
      'Custom pigments are gently placed to balance lip shape and soften scar contrast, including a follow-up refinement appointment.',
    commonReasons: [
      'Defining an interrupted upper lip border after cleft repair',
      'Softening tonal contrast along surgical scars above the lip',
    ],
    consultationImportance:
      'Individual scar anatomy and lip symmetry are assessed closely during consultation to agree a subtle, natural design.',
    considerationsAndLimitations: [
      'Improves colour symmetry and visual border continuity rather than altering underlying surgical anatomy.',
      'Includes follow-up treatment for pigment refinement.',
    ],
    relatedSlugs: ['lip-micropigmentation', 'scar-camouflage', 'medical-tattooing'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Quiet consultation table with linen journal in soft daylight',
  },
  {
    slug: 'skin-camouflage',
    name: 'Skin Camouflage',
    categoryId: 'medical-tattooing',
    categoryLabel: 'Medical Tattooing & Camouflage',
    shortSummary:
      'Specialist medical skin colour-matching and self-application instruction using camouflage creams.',
    overview:
      'Skin camouflage provides bespoke colour matching and practical one-to-one tuition using specialist, high-pigment medical camouflage creams designed for everyday confidence.',
    procedureExplanation:
      'During a dedicated appointment, Tracey colour-matches across multiple skin tones and teaches long-wearing application and setting techniques for vitiligo, scars, birthmarks, or pigmentation.',
    commonReasons: [
      'Discreet daily coverage for vitiligo, scars, rosacea, or port-wine stains',
      'Temporary, non-invasive coverage where tattooing is unsuitable or undesired',
    ],
    consultationImportance:
      'Accurate shade matching in natural daylight ensures seamless, realistic daily wear.',
    considerationsAndLimitations: [
      'Topical cosmetic camouflage requires reapplication as part of a daily routine.',
      'Includes bespoke colour match and guided application lesson.',
    ],
    relatedSlugs: ['scar-camouflage', 'burn-camouflage', 'medical-tattooing'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Porcelain jars and glass vessels in natural daylight',
  },

  // E. Specialist Treatments
  {
    slug: 'electrolysis',
    name: 'Electrolysis',
    categoryId: 'specialist-treatments',
    categoryLabel: 'Specialist Treatments',
    shortSummary:
      'Precision single-follicle hair removal effective across all hair colours and skin tones.',
    overview:
      'Electrolysis is a long-established method of progressive, permanent hair reduction targeting individual hair follicles, including fine, grey, blonde, or red hairs unsuitable for laser.',
    procedureExplanation:
      'A sterile, ultra-fine probe is introduced gently into the natural follicle opening to deliver a controlled pulse that disrupts hair regrowth.',
    commonReasons: [
      'Targeted facial hair removal on the upper lip, chin, jawline, or eyebrows',
      'Light, grey, or hormonal hair unresponsive to light-based methods',
    ],
    consultationImportance:
      'Appointment lengths (15, 20, 30, or 40 minutes) and treatment intervals are planned around hair growth cycles during consultation.',
    considerationsAndLimitations: [
      'Requires consistent attendance over hair growth cycles.',
      'Gentle post-treatment hygiene guidance is provided to protect the skin.',
    ],
    relatedSlugs: ['red-vein-removal', 'milia-removal', 'skin-tag-removal'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Serene private clinic room in Alwoodley',
  },
  {
    slug: 'cryotherapy',
    name: 'Cryotherapy',
    categoryId: 'specialist-treatments',
    categoryLabel: 'Specialist Treatments',
    shortSummary:
      'Controlled clinical freezing for benign superficial skin lesions following careful assessment.',
    overview:
      'Cryotherapy uses controlled targeted freezing to treat selected benign superficial skin lesions with precision and minimal disruption to surrounding tissue.',
    procedureExplanation:
      'A fine applicator delivers measured cold directly to the assessed lesion, prompting natural shedding as healthy skin regenerates beneath.',
    commonReasons: [
      'Addressing benign age spots, sun spots, warts, or verrucae',
      'Targeted removal of small, assessed benign skin lesions',
    ],
    consultationImportance:
      'Any lesion must be visually assessed—and where appropriate, medically cleared by a GP or dermatologist—before treatment.',
    considerationsAndLimitations: [
      'Suspicious or undiagnosed pigmented lesions cannot be treated and will be referred for medical assessment.',
      'Sun protection during healing is essential.',
    ],
    relatedSlugs: ['skin-tag-removal', 'milia-removal', 'red-vein-removal'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Minimalist skincare and clinical vessels on limestone',
  },
  {
    slug: 'red-vein-removal',
    name: 'Red Vein Removal',
    categoryId: 'specialist-treatments',
    categoryLabel: 'Specialist Treatments',
    shortSummary:
      'Targeted diathermy treatment for facial thread veins and cherry angiomas.',
    overview:
      'Red vein removal addresses visible superficial facial capillaries (telangiectasia) and small cherry angiomas using fine precision energy.',
    procedureExplanation:
      'A tiny sterile probe touches the skin surface along the targeted vessel to gently coagulate the capillary without injuring deeper tissue.',
    commonReasons: [
      'Visible thread veins around the nose, cheeks, or chin',
      'Small benign cherry angiomas ("Campbell de Morgan spots")',
    ],
    consultationImportance:
      'Vascular depth, skin sensitivity, and triggers such as rosacea or sun exposure are discussed prior to treatment.',
    considerationsAndLimitations: [
      'Larger leg veins are assessed separately for sclerotherapy rather than facial diathermy.',
      'Sun protection and gentle aftercare help reduce recurrence.',
    ],
    relatedSlugs: ['sclerotherapy', 'milia-removal', 'electrolysis'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Calm clinical treatment suite in North Leeds',
  },
  {
    slug: 'skin-tag-removal',
    name: 'Skin Tag Removal',
    categoryId: 'specialist-treatments',
    categoryLabel: 'Specialist Treatments',
    shortSummary:
      'Clean, targeted removal of benign skin tags on the neck, eyelids, or body.',
    overview:
      'Skin tags are common, harmless small growths that often catch on collars or jewellery. Precision removal restores smooth skin comfort.',
    procedureExplanation:
      'Following visual assessment, benign skin tags are cleanly treated using precision diathermy or fibroblast plasma techniques.',
    commonReasons: [
      'Skin tags irritated by clothing, collars, or jewellery',
      'Delicate tags near the neck, underarms, or eyelid crease',
    ],
    consultationImportance:
      'Confirms the lesion is a benign skin tag suitable for clinic removal rather than requiring medical dermatology review.',
    considerationsAndLimitations: [
      'Only clearly benign lesions are treated; any uncertain growth is referred to your GP.',
    ],
    relatedSlugs: ['milia-removal', 'cryotherapy', 'fibroblast-plasma'],
    image: CLINIC_IMAGES.consultationDetail,
    imageAlt: 'Consultation desk with linen notebook in soft daylight',
  },
  {
    slug: 'milia-removal',
    name: 'Milia Removal',
    categoryId: 'specialist-treatments',
    categoryLabel: 'Specialist Treatments',
    shortSummary:
      'Gentle clinical extraction of stubborn keratin-filled whiteheads ("milk spots").',
    overview:
      'Milia are tiny, firm keratin cysts that commonly appear around the cheekbones or eye area and do not respond to ordinary squeezing.',
    procedureExplanation:
      'Under bright magnification and sterile conditions, Tracey gently releases each milium cleanly without damaging delicate surrounding skin.',
    commonReasons: [
      'Persistent white bumps around the eyes, cheeks, or forehead',
      'Preventing scarring caused by attempting home extraction',
    ],
    consultationImportance:
      'Includes advice on skincare textures and ingredients that may reduce future milia formation.',
    considerationsAndLimitations: [
      'Multiple appointments may be needed if numerous milia are present.',
    ],
    relatedSlugs: ['skin-tag-removal', 'hydro-facial', 'dermaplaning'],
    image: CLINIC_IMAGES.treatmentSuite,
    imageAlt: 'Clean minimalist aesthetic treatment suite',
  },
  {
    slug: 'sclerotherapy',
    name: 'Sclerotherapy',
    categoryId: 'specialist-treatments',
    categoryLabel: 'Specialist Treatments',
    shortSummary:
      'Established micro-injection treatment for superficial thread veins on the legs.',
    overview:
      'Sclerotherapy is a clinical procedure for reducing the appearance of fine superficial spider and thread veins on the legs.',
    procedureExplanation:
      'A sclerosing solution is gently introduced into targeted superficial leg veins using an ultra-fine needle, causing the vessel walls to collapse and fade gradually.',
    commonReasons: [
      'Visible red or blue thread veins on the thighs or calves',
      'Seeking clearer-looking skin on the legs',
    ],
    consultationImportance:
      'Leg vein pattern, circulation history, and compression aftercare requirements are thoroughly assessed before treatment.',
    considerationsAndLimitations: [
      'Designed for superficial thread veins rather than underlying varicose veins.',
      'Compression hosiery and walking guidance may be advised post-procedure.',
    ],
    relatedSlugs: ['red-vein-removal', 'cryotherapy', 'electrolysis'],
    image: CLINIC_IMAGES.alwoodleySetting,
    imageAlt: 'Quiet leafy North Leeds avenue in soft morning light',
  },

  // F. Additional Services & Products (flagged for compliance & availability verification)
  {
    slug: 'vitamin-b12-c-injections',
    name: 'Vitamin B12 & Vitamin C Injections',
    categoryId: 'additional-services',
    categoryLabel: 'Additional Services & Products',
    shortSummary:
      'Wellbeing injection enquiries subject to medical screening, clinic availability, and regulatory review.',
    overview:
      'The clinic’s existing service directory lists Vitamin B12 and Vitamin C injections alongside aesthetic skincare.',
    procedureExplanation:
      'Any suitability assessment, current stock availability, and clinical governance protocols are discussed directly during consultation following full health screening.',
    commonReasons: [
      'Clients enquiring whether supportive vitamin injections are currently offered alongside aesthetic care',
    ],
    consultationImportance:
      'Medical screening and suitability checks are mandatory, and clients with suspected clinical deficiencies should consult their GP.',
    considerationsAndLimitations: [
      'Requires individual review for current clinic availability and UK advertising compliance before promotional publication.',
      'Not a substitute for GP investigation or medical diagnosis.',
    ],
    relatedSlugs: ['medical-grade-skincare', 'mesotherapy'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Clinical amber glass vials and frosted skincare vessels',
    requiresComplianceReview: true,
    complianceNotice:
      'Compliance & Availability Review Note: Listed on the existing clinic site; requires individual review for current availability and UK advertising compliance before promotional pages are published.',
  },
  {
    slug: 'eyelash-eyebrow-growth-products',
    name: 'Eyelash & Eyebrow Growth Products',
    categoryId: 'additional-services',
    categoryLabel: 'Additional Services & Products',
    shortSummary:
      'Conditioning lash and brow serums subject to clinic availability and product-regulation review.',
    overview:
      'Conditioning lash and eyebrow serums are referenced on the clinic’s existing website to complement brow shaping and permanent cosmetic treatments.',
    procedureExplanation:
      'Tracey advises individually on gentle conditioning options during clinic appointments based on eye sensitivity and current product stock.',
    commonReasons: [
      'Supporting brittle or sparse natural eyelashes and eyebrows',
      'Complementing eyebrow micropigmentation care',
    ],
    consultationImportance:
      'Allows review of ingredient suitability, contact lens considerations, and potential ocular sensitivity.',
    considerationsAndLimitations: [
      'Requires individual review of formulation classification and UK advertising rules prior to promotional publication.',
    ],
    relatedSlugs: ['eyebrow-micropigmentation', 'medical-grade-skincare'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Refined glass serum dropper bottles on stone',
    requiresComplianceReview: true,
    complianceNotice:
      'Compliance & Availability Review Note: Referenced on the existing clinic site; requires product classification and UK advertising compliance review before promotional publication.',
  },
  {
    slug: 'medical-grade-skincare',
    name: 'Medical-Grade & Cosmeceutical Skincare',
    categoryId: 'additional-services',
    categoryLabel: 'Additional Services & Products',
    shortSummary:
      'Curated at-home cosmeceutical regimes selected to maintain in-clinic treatment results.',
    overview:
      'Medical-grade and cosmeceutical skincare products are available through the clinic to support barrier health, sun protection, and ongoing skin management at home.',
    procedureExplanation:
      'Rather than encouraging unnecessary multi-step purchases, Tracey recommends targeted cleansers, active serums, and broad-spectrum SPF suited to your skin.',
    commonReasons: [
      'Maintaining results after skin peels, skin needling, or hydro-facials',
      'Simplifying an effective morning and evening skin routine',
    ],
    consultationImportance:
      'Active cosmeceutical formulations work best when matched to your skin tolerance and in-clinic treatment schedule.',
    considerationsAndLimitations: [
      'Current product range and pricing are confirmed directly with Tracey in clinic.',
      'Requires ongoing availability verification before publishing specific brand claims.',
    ],
    relatedSlugs: ['skin-peels', 'skin-needling', 'medi-facials'],
    image: CLINIC_IMAGES.skincareStillLife,
    imageAlt: 'Porcelain jars and glass dropper bottles on limestone surface',
    requiresComplianceReview: true,
    complianceNotice:
      'Availability Note: Product availability and specific active formulations are confirmed individually in clinic.',
  },
];

export const VERIFIED_REVIEWS: ClientReview[] = [
  {
    id: 'claire-fenwick',
    author: 'Claire Fenwick',
    quote:
      'I had a Skin Peel with Tracey, she is highly professional and incredibly knowledgeable. The results are amazing. Would definitely recommend this treatment and Tracey Ager Aesthetics',
    treatmentMentioned: 'Skin Peel',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'gabriella-aston',
    author: 'Gabriella Aston',
    quote:
      'I had dermaplaning by Tracey, and my skin feels so soft by removing all the dead skin and peach fuzz. Tracey was very professional and educated me about my skin and the damage I can do to it. I am very happy with my treatment.',
    treatmentMentioned: 'Dermaplaning',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'samantha-jayne-ohara',
    author: "Samantha Jayne O'Hara",
    quote:
      'First met Tracey for my consultation which I immediately felt at ease and knew I would be in safe hands. Today I have had my treatment on arriving everything was explained to me fully and Tracey was more than happy to answer any questions, through out the procedure Tracey explained everything to me which was reassuring. When we had finished Tracey talked to me about the homecare and explained she was there 24/7 if I had any problems or questions. Would highly recommended this Tracey without hesitation.',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'sarah-duke',
    author: 'Sarah Duke',
    quote:
      'Was the first time seeing Tracey today, she was very professional and kind from start to finish, amazing results will definitely be back again!',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'hannah-georgina-rose',
    author: 'Hannah Georgina Rose',
    quote:
      'I had a treatment from Tracey and it was lovely and so relaxing and she made me feel really comfortable talking to her about my problems and she gave so much advice for the treatment I went for and other treatments I could try she explained everything perfectly and clearly so I understood it was such a wonderful experience all round highly recommend Xx',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'aileen-andrews',
    author: 'Aileen Andrews',
    quote:
      'I had dermaplaning with Tracey 2days ago. She was meticulous in discussing the treatment with me before we started. I was extremely happy with how my treatment went and will definitely be returning. Thanks!',
    treatmentMentioned: 'Dermaplaning',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'karen-ashworth',
    author: 'Karen Ashworth',
    quote:
      'I have had a few treatments by Tracey, all with excellent results. Every treatment was tailored to my wishes and my needs. Tracey is so professional and able to answer any questions you may have. I am absolutely thrilled with the results.',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'rebekah-hock',
    author: 'Rebekah Hock',
    quote:
      "I haven't had a treatment but Tracey answered my question very quickly and very honestly. Not pushing me into something unnecessary which I appreciate x",
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'gemma-carty',
    author: 'Gemma Carty',
    quote:
      'Tracey gave me some amazing advice on a treatment. She was honest, professional and well educated. Thank you!!',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
  {
    id: 'gay-dillow',
    author: 'Gay Dillow',
    roleOrContext: 'Plastic and Reconstructive Sister',
    quote:
      'I have known Tracey for many years now and she has always offered a very professional and personal service to our Breast Reconstructive patients following their mastectomy. We see the patients before, during and after the procedure and the tattoo service Tracey offers is the best.',
    treatmentMentioned: 'Medical Tattooing',
    sourceNote: 'Published on tracey-ager-aesthetics.co.uk',
  },
];

// Strictly excludes prescription-only (POM) botulinum toxin pricing in compliance with UK advertising rules.
// Figures reproduced from https://tracey-ager-aesthetics.co.uk/price-list/ and marked subject to clinic confirmation.
export const VERIFIED_PRICE_GUIDE: PriceCategoryGroup[] = [
  {
    id: 'consultations',
    title: 'Consultations',
    subtitle: 'One-to-one clinical assessment and treatment planning',
    items: [
      {
        service: 'Face-to-Face Consultation (30 mins)',
        price: '£30',
        note: 'Redeemable against treatment on the day',
      },
    ],
  },
  {
    id: 'dermal-fillers',
    title: 'Dermal Fillers',
    subtitle: 'Subject to suitability assessment at consultation',
    items: [
      {service: 'Lip Augmentation', price: 'from £170'},
      {service: 'Upper Lip Lines', price: 'from £170'},
      {service: 'Nose to Mouth Lines', price: 'from £170'},
      {service: 'Marionette Lines', price: 'from £170'},
      {service: 'Chin Augmentation', price: 'from £170'},
      {service: 'Cheek Augmentation', price: 'from £340'},
      {service: 'Jaw Augmentation', price: 'from £340'},
      {service: 'Tear Troughs', price: '£300'},
      {service: '8 Point Face Lift', price: 'from £700'},
      {service: 'Dissolving', price: '£200'},
    ],
  },
  {
    id: 'skin-boosters-regenerative',
    title: 'Skin Boosters, Polynucleotides & Threads',
    items: [
      {
        service: 'Profhilo Skin Booster',
        price: '£225',
        note: 'Typically planned as 2 treatments, 1 month apart',
      },
      {service: 'Polynucleotides — Single Treatment', price: '£300'},
      {
        service: 'Polynucleotides — Course of 3',
        price: '£700',
        note: 'Spaced two weeks apart',
      },
      {
        service: 'PDO Threads',
        price: 'from £200',
        note: 'Exact cost confirmed at consultation',
      },
      {service: 'Mesotherapy — Facial & Neck Treatment', price: '£160'},
    ],
  },
  {
    id: 'skin-rejuvenation',
    title: 'Skin Rejuvenation & Clinical Facials',
    items: [
      {service: 'Skin Needling — Face (Collagen Induction / Scars / Burns)', price: '£100'},
      {service: 'Skin Needling — Body', price: 'from £100'},
      {service: 'Gentle Retinol Peel', price: '£85'},
      {service: 'Perfect Peel', price: '£150'},
      {service: 'Oxygenating Facial ("The Glow Facial")', price: '£65'},
      {service: 'Dermaplaning — Express', price: '£35'},
      {service: 'Dermaplaning — Advanced (includes skin peel)', price: '£65'},
      {service: 'Hydro-Facial (Cleansing, Hydrating, Nourishing)', price: '£80'},
      {service: 'Cathio-Derm Facial', price: '£85'},
      {service: 'High Frequency Treatment', price: '£70'},
      {service: 'Derma-Lift Microcurrent Non-Surgical Face Lift', price: '£65'},
    ],
  },
  {
    id: 'fibroblast-plasma',
    title: 'Fibroblast Plasma',
    items: [
      {service: 'Upper Eyes — Single Treatment', price: '£300', note: 'Second treatment £200'},
      {service: 'Lower Eyes — Single Treatment', price: '£200', note: 'Second treatment £150'},
      {service: 'Both Upper & Lower Eyes', price: '£450', note: 'Second treatment £300'},
      {service: 'Neck Lift', price: '£500', note: 'Second treatment £250'},
      {service: 'Smaller Areas (Crow’s Feet, Glabella)', price: '£200'},
      {service: 'Skin Tags & Benign Skin Lesions', price: 'from £100'},
    ],
  },
  {
    id: 'permanent-cosmetics',
    title: 'Permanent Cosmetics',
    subtitle: 'Initial treatments include a follow-up appointment',
    items: [
      {service: 'Eyebrows*', price: '£350', note: '*Includes a follow-up treatment'},
      {service: 'Lips*', price: '£350', note: '*Includes a follow-up treatment'},
      {service: 'Annual Colour Booster (0–12 months)', price: '£200'},
      {service: 'Annual Colour Booster (0–18 months)', price: '£300'},
    ],
  },
  {
    id: 'medical-tattooing',
    title: 'Medical Tattooing & Skin Camouflage',
    items: [
      {service: 'Scar Camouflage (per hour)', price: '£250'},
      {service: 'Eyebrow Scar*', price: '£250', note: '*Includes a follow-up treatment'},
      {service: 'Lip Scar*', price: '£250', note: '*Includes a follow-up treatment'},
      {service: 'Cleft Lip*', price: '£350', note: '*Includes a follow-up treatment'},
      {service: 'Areola Uni-lateral*', price: '£300', note: '*Includes a follow-up treatment'},
      {service: 'Areola Bi-lateral*', price: '£500', note: '*Includes a follow-up treatment'},
      {service: 'Skin Camouflage — Colour Match & Lesson', price: '£200'},
    ],
  },
  {
    id: 'specialist-treatments',
    title: 'Electrolysis, Cryotherapy & Lesion Care',
    items: [
      {service: 'Electrolysis — 15 minutes', price: '£30'},
      {service: 'Electrolysis — 20 minutes', price: '£35'},
      {service: 'Electrolysis — 30 minutes', price: '£40'},
      {service: 'Electrolysis — 40 minutes', price: '£50'},
      {service: 'Red Vein Removal (15 minutes)', price: '£80'},
      {service: 'Sclerotherapy — Leg Veins', price: 'from £170'},
      {service: 'Milia (Whitehead Removal — 15 minutes)', price: 'from £60'},
      {service: 'Skin Tag Removal', price: 'from £100'},
      {service: 'Cryotherapy — 1 area', price: '£80', note: 'Each additional area £20'},
      {service: 'Cryotherapy — Large areas', price: 'On consultation'},
    ],
  },
];

export const CLINIC_FAQS = [
  {
    question: 'How do I arrange a consultation or appointment?',
    answer:
      'Consultations and appointments are arranged directly with Tracey via WhatsApp (+44 7958 137711) or email (traceyaaesthetics@gmail.com). A £30 consultation fee applies for a 30-minute face-to-face assessment and is redeemable against treatment on the day.',
  },
  {
    question: 'Where is the clinic located in North Leeds?',
    answer:
      'The clinic is situated at The Fairway, Alwoodley, Leeds LS17 7QP. Upon arriving for your confirmed appointment, clients are asked to message Tracey via WhatsApp and wait comfortably in their vehicle until welcomed inside.',
  },
  {
    question: 'How should I prepare before arriving for a facial procedure?',
    answer:
      'Please arrive fresh-faced and make-up free if having a facial procedure. Please also attend appointments alone unless a chaperone has been arranged in advance at the time of booking, and ensure you share full medical and medication details.',
  },
  {
    question: 'What is the clinic’s rescheduling and cancellation policy?',
    answer:
      'As published on the clinic’s terms page, a minimum of two working days’ notice is required to transfer a booking fee to a future appointment. Please confirm current booking terms directly with Tracey when arranging your visit.',
  },
  {
    question: 'Why are prescription-only treatments not priced or promoted here?',
    answer:
      'Under UK advertising rules (ASA/CAP and MHRA guidance), prescription-only medicines such as botulinum toxin cannot be advertised, discounted, or promoted publicly. Any discussion of prescription-only options happens privately during a medical consultation.',
  },
];
