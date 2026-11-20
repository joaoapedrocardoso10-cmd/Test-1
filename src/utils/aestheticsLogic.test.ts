import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CLINIC_INFO,
  TREATMENTS,
  VERIFIED_PRICE_GUIDE,
  VERIFIED_REVIEWS,
} from '../data/clinicData';
import {
  buildWhatsAppUrl,
  containsRestrictedPomPricing,
  filterPriceCategories,
  filterTreatments,
  findTreatmentBySlug,
  getRelatedTreatments,
  getRouteMeta,
  validateConceptEnquiry,
} from './aestheticsLogic';

test('buildWhatsAppUrl creates properly encoded dynamic enquiry links', () => {
  const defaultUrl = buildWhatsAppUrl();
  assert.ok(defaultUrl.startsWith(`${CLINIC_INFO.whatsappBaseUrl}?text=`));

  const treatmentUrl = buildWhatsAppUrl('3D Areola Creation & Scar Camouflage');
  assert.ok(treatmentUrl.includes('3D%20Areola%20Creation%20%26%20Scar%20Camouflage'));
  assert.ok(
    decodeURIComponent(treatmentUrl.split('?text=')[1]).includes(
      'I would like to enquire about 3D Areola Creation & Scar Camouflage.',
    ),
  );
});

test('filterTreatments filters accurately by query and category', () => {
  const all = filterTreatments(TREATMENTS, '', 'all');
  assert.equal(all.length, TREATMENTS.length);

  const medical = filterTreatments(TREATMENTS, '', 'medical-tattooing');
  assert.ok(medical.length >= 7);
  assert.ok(medical.every((t) => t.categoryId === 'medical-tattooing'));

  const areolaMatches = filterTreatments(TREATMENTS, 'areola', 'all');
  assert.ok(areolaMatches.some((t) => t.slug === 'areola-repigmentation'));
  assert.ok(areolaMatches.some((t) => t.slug === '3d-areola-creation'));

  const emptyMatches = filterTreatments(TREATMENTS, 'zzzz-nonexistent-treatment', 'all');
  assert.equal(emptyMatches.length, 0);
});

test('findTreatmentBySlug and getRelatedTreatments resolve valid links', () => {
  const fillers = findTreatmentBySlug(TREATMENTS, 'dermal-fillers');
  assert.ok(fillers);
  assert.equal(fillers.name, 'Dermal Fillers');

  const related = getRelatedTreatments(TREATMENTS, fillers);
  assert.ok(related.length >= 2);
  assert.ok(related.every((item) => item.slug !== fillers.slug));
});

test('price guide strictly excludes prescription-only botulinum toxin pricing', () => {
  assert.equal(containsRestrictedPomPricing(VERIFIED_PRICE_GUIDE), false);
  const filtered = filterPriceCategories(VERIFIED_PRICE_GUIDE, 'dermal-fillers');
  assert.equal(filtered.length, 1);
  assert.equal(filtered[0].id, 'dermal-fillers');
});

test('verified reviews match published client names without fabrications', () => {
  const expectedAuthors = [
    'Claire Fenwick',
    'Gabriella Aston',
    "Samantha Jayne O'Hara",
    'Sarah Duke',
    'Hannah Georgina Rose',
    'Aileen Andrews',
    'Karen Ashworth',
    'Rebekah Hock',
    'Gemma Carty',
    'Gay Dillow',
  ];
  const actualAuthors = VERIFIED_REVIEWS.map((r) => r.author);
  assert.deepEqual(actualAuthors, expectedAuthors);
});

test('getRouteMeta returns unique British-English titles per page', () => {
  const homeMeta = getRouteMeta('/', TREATMENTS);
  const aboutMeta = getRouteMeta('/about', TREATMENTS);
  const detailMeta = getRouteMeta('/treatments/skin-needling', TREATMENTS);

  assert.notEqual(homeMeta.title, aboutMeta.title);
  assert.ok(detailMeta.title.includes('Skin Needling'));
  assert.ok(aboutMeta.description.includes('40 years'));
});

test('validateConceptEnquiry catches empty fields and validates complete input', () => {
  const invalid = validateConceptEnquiry({
    name: '',
    contactMethod: '',
    topic: '',
    message: 'hi',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.message);

  const valid = validateConceptEnquiry({
    name: 'Charlotte',
    contactMethod: 'WhatsApp',
    topic: 'Skin Rejuvenation',
    message: 'I would like to arrange an initial skin consultation in Alwoodley.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});
