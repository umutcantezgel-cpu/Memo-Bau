import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../core/blog.data';
import { SEO } from '../components/common/SEO';
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/common/Reveal';
import { Clock, Calendar, ArrowLeft, CheckCircle } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
    const { postSlug } = useParams<{ postSlug: string }>();

    const post = useMemo(() => {
        return BLOG_POSTS.find(p => p.slug === postSlug);
    }, [postSlug]);

    const relatedPosts = useMemo(() => {
        if (!post) return [];
        return post.relatedSlugs
            .map(slug => BLOG_POSTS.find(p => p.slug === slug))
            .filter(Boolean);
    }, [post]);

    if (!post) {
        return <Navigate to="/ratgeber" replace />;
    }

    const publishDate = new Date(post.publishedDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
    const updateDate = post.updatedDate ? new Date(post.updatedDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) : null;

    return (
        <main className="bg-neutral-white min-h-screen">
            {/* ═══ SEO HEAD ═══ */}
            <SEO
                title={post.metaTitle.replace(' | Memo-BauT', '')}
                description={post.metaDescription}
                breadcrumbs={[
                    { name: 'Startseite', url: '/' },
                    { name: 'Ratgeber', url: '/ratgeber' },
                    { name: post.title, url: `/ratgeber/${post.slug}` }
                ]}
            />

            {/* ═══ ARTICLE SCHEMA ═══ */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": post.title,
                    "description": post.metaDescription,
                    "image": `https://memobaut.de${post.heroImage}`,
                    "datePublished": post.publishedDate,
                    "dateModified": post.updatedDate || post.publishedDate,
                    "author": {
                        "@type": "Organization",
                        "name": "Memo BauT",
                        "url": "https://memobaut.de"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Memo BauT",
                        "logo": { "@type": "ImageObject", "url": "https://memobaut.de/logo.png" }
                    },
                    "mainEntityOfPage": `https://memobaut.de/ratgeber/${post.slug}`
                })
            }} />


            {/* ═══ HERO IMAGE ═══ */}
            <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-neutral-darkgray">
                <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-60"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-darkgray/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-accent-base text-xs font-bold uppercase tracking-widest mb-3 block">
                            {post.categoryLabel}
                        </span>
                        <h1 className="text-2xl md:text-4xl font-sans font-bold text-neutral-white leading-tight mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-neutral-white/70">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {publishDate}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readingTime}
                            </span>
                            {updateDate && (
                                <span className="text-xs text-neutral-white/50">
                                    Aktualisiert: {updateDate}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ ARTICLE BODY ═══ */}
            <article>
                {/* Intro */}
                <Section bgVariant="white" className="py-12 md:py-16">
                    <Reveal animation="fade-in-up">
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg md:text-xl leading-relaxed text-neutral-darkgray font-normal">
                                {post.intro}
                            </p>
                        </div>
                    </Reveal>
                </Section>

                {/* Sections */}
                {post.sections.map((section, idx) => (
                    <Section bgVariant={idx % 2 === 0 ? 'offwhite' : 'white'} key={idx} className="py-10 md:py-16">
                        <Reveal animation="fade-in-up">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-xl md:text-2xl font-sans font-bold text-neutral-darkgray mb-space-6 leading-tight">
                                    {section.heading}
                                </h2>
                                <div className="text-body text-neutral-midgray leading-body whitespace-pre-line">
                                    {section.content}
                                </div>
                                {section.listItems && (
                                    <ul className="space-y-2 mt-space-4">
                                        {section.listItems.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-darkgray">
                                                <CheckCircle className="w-4 h-4 text-primary-base shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Reveal>
                    </Section>
                ))}

                {/* Fazit */}
                <Section bgVariant="white" className="py-12 md:py-16">
                    <Reveal animation="fade-in-up">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-xl md:text-2xl font-sans font-bold text-neutral-darkgray mb-space-4">
                                Fazit
                            </h2>
                            <div className="p-space-6 bg-primary-base/5 border-l-4 border-primary-base rounded-r-[var(--radius-md)]">
                                <p className="text-body text-neutral-darkgray leading-body font-normal">
                                    {post.fazit}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </Section>


            </article>

            {/* ═══ RELATED POSTS ═══ */}
            {relatedPosts.length > 0 && (
                <Section bgVariant="white" className="py-12 md:py-16">
                    <Reveal animation="fade-in-up">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-lg font-sans font-bold text-neutral-darkgray mb-space-6">
                                Weiterführende Ratgeber
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-4">
                                {relatedPosts.map(related => (
                                    related && (
                                        <Link
                                            key={related.slug}
                                            to={`/ratgeber/${related.slug}`}
                                            className="group flex gap-4 p-space-4 rounded-[var(--radius-md)] border border-neutral-lightgray/30 hover:border-accent-base/40 hover:shadow-elevation-1 transition-all"
                                        >
                                            <div className="w-20 h-20 shrink-0 rounded-[var(--radius-sm)] overflow-hidden">
                                                <img src={related.heroImage} alt={related.title} className="w-full h-full object-cover" loading="lazy" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-sm text-neutral-darkgray group-hover:text-accent-base transition-colors line-clamp-2 leading-snug">
                                                    {related.title}
                                                </h3>
                                                <span className="text-xs text-neutral-midgray mt-1 block">{related.readingTime}</span>
                                            </div>
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </Section>
            )}

            {/* ═══ BACK TO RATGEBER ═══ */}
            <div className="bg-neutral-offwhite border-t border-neutral-lightgray/30 py-6">
                <div className="max-w-3xl mx-auto px-6">
                    <Link to="/ratgeber" className="inline-flex items-center gap-2 text-sm text-neutral-midgray hover:text-accent-base transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Alle Ratgeber Artikel
                    </Link>
                </div>
            </div>
        </main>
    );
};
