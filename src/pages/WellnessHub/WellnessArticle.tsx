import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import NewsletterForm from '../../components/forms/NewsletterForm';
import { getBlogPostBySlug, getRelatedBlogPosts } from '../../assets/data/content';
import { fadeUp } from '../../utils/animations';

export default function WellnessArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedBlogPosts(slug) : [];

  if (!post) {
    return <Navigate to="/wellness-hub" replace />;
  }

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-primary/[0.04] via-background to-background">
      <Container>
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 md:mb-12"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-5">
            <Link
              to="/wellness-hub"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              ← Back to Wellness Hub
            </Link>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-dark leading-tight mb-5 max-w-4xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{post.date}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 min-w-0"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-primary/10 mb-8 md:mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 sm:h-72 md:h-80 lg:h-[22rem] object-cover"
              />
            </div>

            <div className="space-y-5 md:space-y-6">
              {post.content.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-muted leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 md:mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-3">
              <Button to="/contact" variant="primary">
                Book Consultation
              </Button>
              <Button to="/wellness-hub" variant="outline">
                More Articles
              </Button>
            </div>
          </motion.article>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 min-w-0 space-y-6 lg:sticky lg:top-28"
          >
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-border p-5 md:p-6 shadow-sm">
                <h2 className="text-base font-semibold text-dark mb-4">Related Articles</h2>
                <ul className="space-y-4">
                  {relatedPosts.map((related) => (
                    <li key={related.id}>
                      <Link
                        to={`/wellness-hub/${related.slug}`}
                        className="group block rounded-xl -mx-2 px-2 py-2 hover:bg-primary/5 transition-colors"
                      >
                        <p className="text-sm font-medium text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {related.title}
                        </p>
                        <span className="text-xs text-muted mt-1.5 inline-block">{related.readTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <NewsletterForm compact />
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
