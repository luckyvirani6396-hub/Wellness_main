import { describe, it, expect } from 'vitest';
import {
  stats,
  coreServices,
  timelineSteps,
  featuredPrograms,
  testimonials,
  blogPosts,
  allBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  nutritionServices,
  wellnessServices,
  corporateServices,
  pagePrograms,
  successStories,
  whyChooseUs,
  quizQuestions,
} from '../content';

describe('content data exports', () => {
  it('stats has 4 entries with required fields', () => {
    expect(stats).toHaveLength(4);
    for (const stat of stats) {
      expect(typeof stat.value).toBe('number');
      expect(stat.suffix).toBeTruthy();
      expect(stat.label).toBeTruthy();
    }
  });

  it('coreServices has 6 entries', () => {
    expect(coreServices).toHaveLength(6);
    for (const service of coreServices) {
      expect(service.id).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.icon).toBeTruthy();
    }
  });

  it('timelineSteps are sequential from 1 to 5', () => {
    expect(timelineSteps).toHaveLength(5);
    timelineSteps.forEach((step, i) => {
      expect(step.step).toBe(i + 1);
      expect(step.title).toBeTruthy();
      expect(step.description).toBeTruthy();
    });
  });

  it('featuredPrograms has 3 entries with required fields', () => {
    expect(featuredPrograms).toHaveLength(3);
    for (const program of featuredPrograms) {
      expect(program.id).toBeTruthy();
      expect(program.title).toBeTruthy();
      expect(program.duration).toBeTruthy();
    }
  });

  it('testimonials all have rating of 5', () => {
    expect(testimonials.length).toBeGreaterThan(0);
    for (const t of testimonials) {
      expect(t.rating).toBe(5);
      expect(t.name).toBeTruthy();
      expect(t.feedback).toBeTruthy();
    }
  });

  it('blogPosts is a subset of allBlogPosts (first 3)', () => {
    expect(blogPosts).toHaveLength(3);
    expect(allBlogPosts.length).toBeGreaterThanOrEqual(blogPosts.length);
    for (let i = 0; i < blogPosts.length; i++) {
      expect(blogPosts[i].id).toBe(allBlogPosts[i].id);
    }
  });

  it('allBlogPosts each have content array with entries', () => {
    for (const post of allBlogPosts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.content.length).toBeGreaterThan(0);
    }
  });

  it('nutritionServices all have category "nutrition"', () => {
    expect(nutritionServices.length).toBeGreaterThan(0);
    for (const s of nutritionServices) {
      expect(s.category).toBe('nutrition');
    }
  });

  it('wellnessServices all have category "wellness"', () => {
    expect(wellnessServices.length).toBeGreaterThan(0);
    for (const s of wellnessServices) {
      expect(s.category).toBe('wellness');
    }
  });

  it('corporateServices all have category "corporate"', () => {
    expect(corporateServices.length).toBeGreaterThan(0);
    for (const s of corporateServices) {
      expect(s.category).toBe('corporate');
    }
  });

  it('pagePrograms has 6 entries', () => {
    expect(pagePrograms).toHaveLength(6);
  });

  it('successStories has 3 entries with required fields', () => {
    expect(successStories).toHaveLength(3);
    for (const story of successStories) {
      expect(story.name).toBeTruthy();
      expect(story.program).toBeTruthy();
      expect(story.result).toBeTruthy();
    }
  });

  it('whyChooseUs has 4 entries', () => {
    expect(whyChooseUs).toHaveLength(4);
    for (const item of whyChooseUs) {
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.icon).toBeTruthy();
    }
  });

  it('quizQuestions has 5 questions each with 4 options', () => {
    expect(quizQuestions).toHaveLength(5);
    for (const q of quizQuestions) {
      expect(q.question).toBeTruthy();
      expect(q.options).toHaveLength(4);
      for (const opt of q.options) {
        expect(opt.label).toBeTruthy();
        expect(typeof opt.value).toBe('number');
      }
    }
  });
});

describe('getBlogPostBySlug', () => {
  it('returns the correct post for a valid slug', () => {
    const post = getBlogPostBySlug('10-superfoods-for-boosting-immunity-naturally');
    expect(post).toBeDefined();
    expect(post?.id).toBe('1');
    expect(post?.title).toBe('10 Superfoods for Boosting Immunity Naturally');
  });

  it('returns undefined for a nonexistent slug', () => {
    expect(getBlogPostBySlug('does-not-exist')).toBeUndefined();
  });

  it('returns correct post for every slug in the dataset', () => {
    for (const post of allBlogPosts) {
      const found = getBlogPostBySlug(post.slug);
      expect(found).toBeDefined();
      expect(found?.id).toBe(post.id);
    }
  });
});

describe('getRelatedBlogPosts', () => {
  it('returns posts in the same category, excluding the current post', () => {
    const related = getRelatedBlogPosts('10-superfoods-for-boosting-immunity-naturally');
    for (const post of related) {
      expect(post.slug).not.toBe('10-superfoods-for-boosting-immunity-naturally');
      expect(post.category).toBe('Nutrition Tips');
    }
  });

  it('respects the default limit of 3', () => {
    const related = getRelatedBlogPosts('10-superfoods-for-boosting-immunity-naturally');
    expect(related.length).toBeLessThanOrEqual(3);
  });

  it('respects a custom limit', () => {
    const related = getRelatedBlogPosts('10-superfoods-for-boosting-immunity-naturally', 1);
    expect(related.length).toBeLessThanOrEqual(1);
  });

  it('returns empty array for a nonexistent slug', () => {
    expect(getRelatedBlogPosts('does-not-exist')).toEqual([]);
  });

  it('returns empty array when no same-category posts exist', () => {
    // "Lifestyle Habits" category only has one post
    const related = getRelatedBlogPosts('the-science-of-sleep-and-weight-loss');
    expect(related).toEqual([]);
  });
});
