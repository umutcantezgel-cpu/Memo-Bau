/**
 * Memo BauT Products Page
 * Product catalog with filtering and segment-adapted display
 */

import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Package } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PRODUCTS, PRODUCT_CATEGORIES, getProductsByCategory, ProductCategory, Product } from '../data/products.data';
import { SEO } from '../components/common/SEO';
import { ProductCard } from '../components/features/ProductCard';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/common/Reveal';
import { StaggeredList } from '../components/common/StaggeredList';
import { usePersonalization } from '../context/PersonalizationContext';

export const ProductsPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { profile } = usePersonalization();

    // State
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
        (searchParams.get('category') as ProductCategory) || 'all'
    );
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');

    // Filter products based on user segment and filters
    const filteredProducts = useMemo(() => {
        let products = [...PRODUCTS];

        // Filter by segment availability
        if (profile.segment !== 'unknown') {
            products = products.filter(p =>
                p.forSegments.includes(profile.segment as 'retail' | 'contractor' | 'b2b-partner')
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            products = products.filter(p => p.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            products = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.subcategory.toLowerCase().includes(query)
            );
        }

        // Sort
        switch (sortBy) {
            case 'price-asc':
                products.sort((a, b) => a.priceNet - b.priceNet);
                break;
            case 'price-desc':
                products.sort((a, b) => b.priceNet - a.priceNet);
                break;
            default:
                products.sort((a, b) => a.name.localeCompare(b.name));
        }

        return products;
    }, [profile.segment, selectedCategory, searchQuery, sortBy]);

    const handleCategoryChange = (category: ProductCategory | 'all') => {
        setSelectedCategory(category);
        if (category === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', category);
        }
        setSearchParams(searchParams);
    };

    const handleAddToCart = (product: Product) => {
        // TODO: Implement cart functionality
        console.log('Add to cart:', product.id);
        // For now, navigate to contact
        navigate(`/contact?product=${product.id}`);
    };

    const handleViewDetails = (product: Product) => {
        // TODO: Implement product detail page
        navigate(`/services?product=${product.id}`);
    };

    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Produkte | Baumaterialien & Werkzeuge"
                description="Entdecken Sie unser umfangreiches Sortiment an Baumaterialien, Werkzeugen und technischem Zubehör. Qualitätsprodukte für Profis und Heimwerker."
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Produkte', url: '/products' }
                ]}
            />

            <PageHero
                title="Unser Sortiment"
                subtitle="Produkte"
                description="Über 10.000 Produkte für Bau, Handwerk und Renovierung. Qualität zu fairen Preisen."
                backgroundImage="/images/final/products-tools.webp"
            />

            <Section bgVariant="offwhite">
                {/* Filters Bar */}
                <Reveal animation="fade-in">
                    <div className="flex flex-col lg:flex-row gap-space-4 mb-space-8">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-midgray" />
                            <input
                                type="text"
                                placeholder="Produkte suchen..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-[var(--radius-md)] border border-neutral-lightgray bg-neutral-white focus:outline-none focus:ring-2 focus:ring-accent-base focus:border-transparent transition-all duration-[var(--default-transition-duration)] text-neutral-darkgray font-normal placeholder:text-neutral-midgray"
                            />
                        </div>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                            aria-label="Sortierung auswählen"
                            className="px-4 py-3 rounded-[var(--radius-md)] border border-neutral-lightgray bg-neutral-white text-neutral-darkgray font-normal focus:outline-none focus:ring-2 focus:ring-accent-base cursor-pointer transition-all duration-[var(--default-transition-duration)]"
                        >
                            <option value="name">Name (A-Z)</option>
                            <option value="price-asc">Preis (aufsteigend)</option>
                            <option value="price-desc">Preis (absteigend)</option>
                        </select>

                        {/* View Mode */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-[var(--radius-md)] border ${viewMode === 'grid' ? 'border-accent-base bg-accent-base/10 text-accent-base' : 'border-neutral-lightgray bg-neutral-white text-neutral-midgray'} transition-colors duration-[var(--default-transition-duration)]`}
                                aria-label="Grid-Ansicht"
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-[var(--radius-md)] border ${viewMode === 'list' ? 'border-accent-base bg-accent-base/10 text-accent-base' : 'border-neutral-lightgray bg-neutral-white text-neutral-midgray'} transition-colors duration-[var(--default-transition-duration)]`}
                                aria-label="Listen-Ansicht"
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </Reveal>

                <div className="flex flex-col lg:flex-row gap-space-8">
                    {/* Sidebar - Categories */}
                    <Reveal animation="fade-in">
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="bg-neutral-white rounded-[var(--radius-lg)] border border-neutral-lightgray p-space-6 sticky top-24 shadow-elevation-1">
                                <h3 className="font-sans font-bold text-neutral-darkgray mb-space-4 flex items-center gap-2">
                                    <Filter className="w-4 h-4 text-accent-base" />
                                    Kategorien
                                </h3>
                                <ul className="space-y-space-2">
                                    <li>
                                        <button
                                            onClick={() => handleCategoryChange('all')}
                                            className={`w-full text-left px-3 py-2 rounded-[var(--radius-md)] text-sm transition-colors duration-[var(--default-transition-duration)] ${selectedCategory === 'all'
                                                ? 'bg-accent-base text-neutral-white font-bold'
                                                : 'text-neutral-midgray hover:bg-neutral-offwhite hover:text-neutral-darkgray font-normal'
                                                }`}
                                        >
                                            Alle Produkte ({PRODUCTS.length})
                                        </button>
                                    </li>
                                    {PRODUCT_CATEGORIES.map((cat) => {
                                        const count = getProductsByCategory(cat.id).length;
                                        return (
                                            <li key={cat.id}>
                                                <button
                                                    onClick={() => handleCategoryChange(cat.id)}
                                                    className={`w-full text-left px-3 py-2 rounded-[var(--radius-md)] text-sm transition-colors duration-[var(--default-transition-duration)] ${selectedCategory === cat.id
                                                        ? 'bg-accent-base text-neutral-white font-bold'
                                                        : 'text-neutral-midgray hover:bg-neutral-offwhite hover:text-neutral-darkgray font-normal'
                                                        }`}
                                                >
                                                    {cat.name} ({count})
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* B2B Hint */}
                                {profile.segment === 'unknown' && (
                                    <div className="mt-space-6 p-space-4 bg-accent-base/5 rounded-[var(--radius-md)] border border-accent-base/20">
                                        <h4 className="font-sans font-bold text-sm text-neutral-darkgray mb-2">Handwerksbetrieb?</h4>
                                        <p className="text-xs text-neutral-midgray mb-3 font-normal">
                                            Profitieren Sie von Staffelpreisen und Sonderkonditionen!
                                        </p>
                                        <Button
                                            variant="gold"
                                            className="w-full text-xs"
                                            onClick={() => navigate('/contact?type=partner')}
                                        >
                                            Partner werden
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </Reveal>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {/* Results count */}
                        <Reveal animation="fade-in">
                            <div className="mb-space-4 text-sm text-neutral-midgray font-normal">
                                {filteredProducts.length} Produkte gefunden
                            </div>
                        </Reveal>

                        {filteredProducts.length > 0 ? (
                            <StaggeredList className={`grid gap-space-6 ${viewMode === 'grid'
                                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                : 'grid-cols-1'
                                }`}>
                                {filteredProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onAddToCart={handleAddToCart}
                                        onViewDetails={handleViewDetails}
                                    />
                                ))}
                            </StaggeredList>
                        ) : (
                            <Reveal animation="scale-in">
                                <div className="text-center py-16 bg-neutral-white rounded-[var(--radius-lg)] border border-neutral-lightgray">
                                    <Package className="w-16 h-16 text-neutral-midgray mx-auto mb-space-4 opacity-50" />
                                    <h3 className="text-xl font-sans font-bold text-neutral-darkgray mb-space-2">Keine Produkte gefunden</h3>
                                    <p className="text-neutral-midgray font-normal mb-space-8">
                                        Versuchen Sie es mit anderen Suchbegriffen oder Kategorien.
                                    </p>
                                    <Button variant="outline" onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory('all');
                                    }}>
                                        Filter zurücksetzen
                                    </Button>
                                </div>
                            </Reveal>
                        )}
                    </div>
                </div>
            </Section>
        </main>
    );
};
