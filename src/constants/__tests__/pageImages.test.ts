import { describe, it, expect } from 'vitest';
import { PAGE_HERO_IMAGES, SERVICE_HERO_IMAGES, getServiceHeroImage } from '../pageImages';

describe('PAGE_HERO_IMAGES', () => {
  it('has all expected page keys', () => {
    expect(PAGE_HERO_IMAGES.about).toBeTruthy();
    expect(PAGE_HERO_IMAGES.services).toBeTruthy();
    expect(PAGE_HERO_IMAGES.programs).toBeTruthy();
    expect(PAGE_HERO_IMAGES.wellnessHub).toBeTruthy();
    expect(PAGE_HERO_IMAGES.successStories).toBeTruthy();
    expect(PAGE_HERO_IMAGES.contact).toBeTruthy();
    expect(PAGE_HERO_IMAGES.default).toBeTruthy();
  });
});

describe('SERVICE_HERO_IMAGES', () => {
  it('has entries for known service slugs', () => {
    const expectedSlugs = [
      'weight-loss-program',
      'weight-gain-program',
      'diabetes-program',
      'hypothyroidism',
      'child-and-women-program',
      'cholesterol-management',
      'hypertension',
      'obesity-and-heart-disease',
      'menopause',
      'pcos',
    ];
    for (const slug of expectedSlugs) {
      expect(SERVICE_HERO_IMAGES[slug]).toBeTruthy();
    }
  });
});

describe('getServiceHeroImage', () => {
  it('returns the correct image URL for a known slug', () => {
    const url = getServiceHeroImage('weight-loss-program');
    expect(url).toBe(SERVICE_HERO_IMAGES['weight-loss-program']);
  });

  it('falls back to services page hero for an unknown slug', () => {
    const url = getServiceHeroImage('unknown-service');
    expect(url).toBe(PAGE_HERO_IMAGES.services);
  });

  it('returns a URL (string) for each known service slug', () => {
    for (const slug of Object.keys(SERVICE_HERO_IMAGES)) {
      const url = getServiceHeroImage(slug);
      expect(typeof url).toBe('string');
      expect(url.length).toBeGreaterThan(0);
    }
  });
});
