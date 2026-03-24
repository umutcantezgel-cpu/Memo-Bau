/**
 * Memo BauT ProductCard Component
 * Displays product with segment-adapted pricing and actions
 */

import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '../../data/products.data';
import { usePersonalization, usePricingDisplay } from '../../context/PersonalizationContext';
import { Button } from '../common/Button';
import { Hover3D } from '../common/Hover3D';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
    onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onAddToCart,
    onViewDetails,
}) => {
    const { profile } = usePersonalization();
    const { formatPrice } = usePricingDisplay();

    // Determine if user should see bulk/professional pricing
    const showProfessionalPricing = profile.segment === 'contractor' || profile.segment === 'b2b-partner';
    const priceDisplay = formatPrice(product.priceGross, product.priceNet);

    // Get best bulk price if available
    const bestBulkPrice = product.bulkPricing?.[product.bulkPricing.length - 1];

    return (
        <Hover3D maxRotation={3} scale={1.01} className="h-full">
            <div className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-elevation-3 transition-shadow duration-[400ms] overflow-hidden flex flex-col h-full bg-clip-padding">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-surface-subtle overflow-hidden">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                        loading="lazy"
                    />

                    {/* Stock indicator */}
                    {product.inStock ? (
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                            <Check className="w-3 h-3" />
                            Auf Lager
                        </div>
                    ) : (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Nicht verfügbar
                        </div>
                    )}

                    {/* Tags */}
                    {product.tags.includes('Bestseller') && (
                        <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            Bestseller
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-space-6 flex flex-col flex-grow">
                    {/* Category */}
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-midgray mb-space-2">
                        {product.subcategory}
                    </div>

                    {/* Name */}
                    <h3 className="font-sans font-bold text-neutral-darkgray text-lg mb-space-2 line-clamp-2 group-hover:text-accent-base transition-colors duration-[var(--default-transition-duration)]">
                        {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-normal text-neutral-midgray mb-space-4 line-clamp-2 flex-grow">
                        {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-space-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-sans font-bold text-neutral-darkgray">
                                {priceDisplay.price}
                            </span>
                            <span className="text-sm font-normal text-neutral-midgray">
                                / {product.unit}
                            </span>
                        </div>
                        <span className="text-xs font-normal text-neutral-lightgray">
                            {priceDisplay.suffix}
                        </span>

                        {/* Bulk pricing indicator */}
                        {showProfessionalPricing && bestBulkPrice && (
                            <div className="mt-space-2 text-xs text-accent-base font-bold">
                                Ab {bestBulkPrice.minQuantity} Stk: {bestBulkPrice.discount}% Rabatt
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-space-3 mt-auto">
                        <Button
                            variant="primary"
                            className="flex-1 text-sm justify-center"
                            onClick={() => onAddToCart?.(product)}
                            disabled={!product.inStock}
                        >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            {showProfessionalPricing ? 'Anfragen' : 'Warenkorb'}
                        </Button>
                        <Button
                            variant="outline"
                            className="text-sm px-4 justify-center"
                            onClick={() => onViewDetails?.(product)}
                        >
                            Details
                        </Button>
                    </div>
                </div>
            </div>
        </Hover3D>
    );
};

/**
 * ProductCard Skeleton for loading states
 */
export const ProductCardSkeleton: React.FC = () => (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden animate-pulse">
        <div className="aspect-[4/3] bg-surface-muted"></div>
        <div className="p-4">
            <div className="h-3 bg-surface-muted rounded w-1/4 mb-3"></div>
            <div className="h-5 bg-surface-muted rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-surface-muted rounded w-full mb-4"></div>
            <div className="h-8 bg-surface-muted rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-surface-muted rounded w-full"></div>
        </div>
    </div>
);
