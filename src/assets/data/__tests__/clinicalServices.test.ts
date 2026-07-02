import { describe, it, expect } from 'vitest';
import { clinicalServices, getServiceBySlug, getRelatedServices } from '../clinicalServices';

describe('clinicalServices data', () => {
  it('contains exactly 10 services', () => {
    expect(clinicalServices).toHaveLength(10);
  });

  it('each service has required fields', () => {
    for (const service of clinicalServices) {
      expect(service.id).toBeTruthy();
      expect(service.slug).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.shortDescription).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.icon).toBeTruthy();
      expect(service.benefits.length).toBeGreaterThan(0);
      expect(service.includes.length).toBeGreaterThan(0);
    }
  });

  it('each service has a unique id', () => {
    const ids = clinicalServices.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each service has a unique slug', () => {
    const slugs = clinicalServices.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('getServiceBySlug', () => {
  it('returns the correct service for a valid slug', () => {
    const service = getServiceBySlug('weight-loss-program');
    expect(service).toBeDefined();
    expect(service?.id).toBe('weight-loss');
    expect(service?.title).toBe('Weight Loss Program');
  });

  it('returns undefined for an invalid slug', () => {
    expect(getServiceBySlug('nonexistent-service')).toBeUndefined();
  });

  it('returns correct service for each slug in the dataset', () => {
    for (const service of clinicalServices) {
      const found = getServiceBySlug(service.slug);
      expect(found).toBeDefined();
      expect(found?.id).toBe(service.id);
    }
  });
});

describe('getRelatedServices', () => {
  it('returns services excluding the current one', () => {
    const related = getRelatedServices('weight-loss-program');
    const slugs = related.map((s) => s.slug);
    expect(slugs).not.toContain('weight-loss-program');
  });

  it('returns default limit of 3 services', () => {
    const related = getRelatedServices('weight-loss-program');
    expect(related).toHaveLength(3);
  });

  it('respects custom limit parameter', () => {
    const related = getRelatedServices('weight-loss-program', 5);
    expect(related).toHaveLength(5);
  });

  it('returns all remaining services when limit exceeds available', () => {
    const related = getRelatedServices('weight-loss-program', 100);
    expect(related).toHaveLength(clinicalServices.length - 1);
  });

  it('returns empty array when slug does not match (still returns first N)', () => {
    const related = getRelatedServices('nonexistent', 3);
    expect(related).toHaveLength(3);
  });
});
