import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../core/blog.data';
import { SEO } from '../components/common/SEO';
import { Section } from '../components/layout/Section';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

const CATEGORY_COLORS: Record<string, string> = {
    kosten: 'bg-amber-100 text-amber-800',
    material: 'bg-blue-100 text-blue-800',
    pflege: 'bg-green-100 text-green-800',
    planung: 'bg-purple-100 text-purple-800',
    trends: 'bg-rose-100 text-rose-800',
};

export const BlogPage: React.FC = () => {
    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Ratgeber: Gartenwissen vom Fachbetrieb | Memo BauT"
                description="Ehrliche Tipps, echte Preise, praktisches Wissen: Unser Ratgeber hilft Ihnen bei der Planung und Pflege Ihres Gartens. Von Handwerkern geschrieben."
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Ratgeber', url: '/ratgeber' }
                ]}
            />

            <PageHero
                title="Gartenwissen aus der Praxis"
                subtitle="Ratgeber"
                description="Keine Theorie, keine Werbesprüche. Hier schreiben Handwerker über das, was sie jeden Tag machen. Ehrlich, direkt, nützlich."
                backgroundImage="/images/final/service-planting.webp"
                centered={true}
            />

            <Section bgVariant="white" className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-8">
                        {BLOG_POSTS.map((post, idx) => (
                            <Reveal key={post.slug} animation="fade-in-up" delay={(idx % 2 * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
                                <Link
                                    to={`/ratgeber/${post.slug}`}
                                    className="group block bg-neutral-white border border-neutral-lightgray/30 rounded-[var(--radius-lg)] overflow-hidden hover:shadow-elevation-2 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Image */}
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img
                                            src={post.heroImage}
                                            alt={post.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-space-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${CATEGORY_COLORS[post.category] || 'bg-neutral-offwhite text-neutral-midgray'}`}>
                                                {post.categoryLabel}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-neutral-midgray">
                                                <Clock className="w-3 h-3" />
                                                {post.readingTime}
                                            </span>
                                        </div>

                                        <h2 className="text-lg font-sans font-bold text-neutral-darkgray mb-2 group-hover:text-accent-base transition-colors leading-snug">
                                            {post.title}
                                        </h2>

                                        <p className="text-sm text-neutral-midgray line-clamp-2 mb-4">
                                            {post.intro.substring(0, 150)}...
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-1 text-xs text-neutral-midgray">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.updatedDate || post.publishedDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs font-bold text-accent-base opacity-0 group-hover:opacity-100 transition-opacity">
                                                Ratgeber lesen: {post.title} <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
};
