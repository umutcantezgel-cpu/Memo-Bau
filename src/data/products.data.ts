/**
 * Memo BauT Product Catalog Data
 * Construction materials, tools, and services
 */

export interface Product {
    id: string;
    name: string;
    description: string;
    category: ProductCategory;
    subcategory: string;
    imageUrl: string;
    priceGross: number;
    priceNet: number;
    unit: string;
    inStock: boolean;
    stockQuantity: number;
    minOrderQuantity: number;
    bulkPricing?: BulkPricing[];
    specifications: ProductSpecification[];
    tags: string[];
    forSegments: ('retail' | 'contractor' | 'b2b-partner')[];
}

export interface BulkPricing {
    minQuantity: number;
    priceNet: number;
    discount: number; // percentage
}

export interface ProductSpecification {
    label: string;
    value: string;
}

export type ProductCategory =
    | 'building-materials'
    | 'tools-equipment'
    | 'delivery-services'
    | 'technical-supplies';

export const PRODUCT_CATEGORIES: { id: ProductCategory; name: string; icon: string }[] = [
    { id: 'building-materials', name: 'Baumaterialien', icon: 'Package' },
    { id: 'tools-equipment', name: 'Werkzeuge & Geräte', icon: 'Wrench' },
    { id: 'technical-supplies', name: 'Technischer Bedarf', icon: 'Cog' },
    { id: 'delivery-services', name: 'Lieferservice', icon: 'Truck' },
];

export const PRODUCTS: Product[] = [
    // Building Materials
    {
        id: 'cement-portland-25kg',
        name: 'Portland Zement CEM I 32,5',
        description: 'Hochwertiger Portlandzement für alle Betonanwendungen. Ideal für Fundamente, Mauern und Estrich.',
        category: 'building-materials',
        subcategory: 'Zement & Mörtel',
        imageUrl: '/images/final/service-paving.webp',
        priceGross: 8.99,
        priceNet: 7.55,
        unit: '25kg Sack',
        inStock: true,
        stockQuantity: 500,
        minOrderQuantity: 1,
        bulkPricing: [
            { minQuantity: 10, priceNet: 7.20, discount: 5 },
            { minQuantity: 50, priceNet: 6.80, discount: 10 },
            { minQuantity: 100, priceNet: 6.40, discount: 15 },
        ],
        specifications: [
            { label: 'Festigkeitsklasse', value: '32,5 N' },
            { label: 'Gewicht', value: '25 kg' },
            { label: 'Verarbeitung', value: '20-30 Min' },
        ],
        tags: ['Bestseller', 'Baustelle'],
        forSegments: ['retail', 'contractor', 'b2b-partner'],
    },
    {
        id: 'sand-spielsand-25kg',
        name: 'Spielsand gewaschen',
        description: 'Feiner, gewaschener Sand für Sandkasten und Spielbereiche. TÜV-geprüft und kindersicher.',
        category: 'building-materials',
        subcategory: 'Sand & Kies',
        imageUrl: '/images/final/service-landscaping.webp',
        priceGross: 4.99,
        priceNet: 4.19,
        unit: '25kg Sack',
        inStock: true,
        stockQuantity: 200,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Körnung', value: '0-2 mm' },
            { label: 'Prüfung', value: 'TÜV-geprüft' },
        ],
        tags: ['Familie', 'Garten'],
        forSegments: ['retail'],
    },
    {
        id: 'daemmung-mineralwolle-100',
        name: 'Mineralwolle Dämmplatte 100mm',
        description: 'Hochwertige Mineralwolle-Dämmung für Dach und Wand. Beste Wärmedämmung und Brandschutz.',
        category: 'building-materials',
        subcategory: 'Dämmstoffe',
        imageUrl: '/images/final/service-landscaping.webp',
        priceGross: 24.99,
        priceNet: 21.00,
        unit: 'm²',
        inStock: true,
        stockQuantity: 1000,
        minOrderQuantity: 5,
        bulkPricing: [
            { minQuantity: 20, priceNet: 19.95, discount: 5 },
            { minQuantity: 100, priceNet: 18.90, discount: 10 },
        ],
        specifications: [
            { label: 'Dicke', value: '100 mm' },
            { label: 'Wärmeleitfähigkeit', value: '0.035 W/(mK)' },
            { label: 'Brandklasse', value: 'A1 (nicht brennbar)' },
        ],
        tags: ['EnEV', 'Profi'],
        forSegments: ['contractor', 'b2b-partner'],
    },
    {
        id: 'trockenbau-gipskarton-125',
        name: 'Gipskartonplatte 12,5mm',
        description: 'Standard-Gipskartonplatte für Trockenbau. Einfache Verarbeitung, vielseitig einsetzbar.',
        category: 'building-materials',
        subcategory: 'Trockenbau',
        imageUrl: '/images/final/service-paving.webp',
        priceGross: 7.49,
        priceNet: 6.29,
        unit: 'Platte 2,0x1,25m',
        inStock: true,
        stockQuantity: 800,
        minOrderQuantity: 1,
        bulkPricing: [
            { minQuantity: 25, priceNet: 5.99, discount: 5 },
            { minQuantity: 100, priceNet: 5.65, discount: 10 },
        ],
        specifications: [
            { label: 'Maße', value: '2000 x 1250 mm' },
            { label: 'Dicke', value: '12,5 mm' },
            { label: 'Gewicht', value: 'ca. 22 kg' },
        ],
        tags: ['Trockenbau', 'Innenausbau'],
        forSegments: ['retail', 'contractor', 'b2b-partner'],
    },

    // Tools & Equipment
    {
        id: 'bohrmaschine-akku-18v',
        name: 'Akku-Bohrschrauber 18V',
        description: 'Leistungsstarker Akku-Bohrschrauber mit 2 Akkus und Ladegerät. Ideal für Heimwerker und Profis.',
        category: 'tools-equipment',
        subcategory: 'Elektrowerkzeuge',
        imageUrl: '/images/final/products-tools.webp',
        priceGross: 149.99,
        priceNet: 126.04,
        unit: 'Set',
        inStock: true,
        stockQuantity: 25,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Spannung', value: '18V' },
            { label: 'Drehmoment', value: '60 Nm' },
            { label: 'Akkukapazität', value: '2x 2.0 Ah' },
        ],
        tags: ['Elektro', 'Bestseller'],
        forSegments: ['retail', 'contractor'],
    },
    {
        id: 'flex-winkelschleifer-125',
        name: 'Winkelschleifer 125mm',
        description: 'Robuster Winkelschleifer für Trenn- und Schleifarbeiten. Mit Sanftanlauf und Überlastschutz.',
        category: 'tools-equipment',
        subcategory: 'Elektrowerkzeuge',
        imageUrl: '/images/final/products-tools.webp',
        priceGross: 89.99,
        priceNet: 75.62,
        unit: 'Stück',
        inStock: true,
        stockQuantity: 15,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Scheibendurchmesser', value: '125 mm' },
            { label: 'Leistung', value: '1400 W' },
            { label: 'Drehzahl', value: '11.000 U/min' },
        ],
        tags: ['Elektro', 'Profi'],
        forSegments: ['contractor', 'b2b-partner'],
    },
    {
        id: 'werkzeugkoffer-profi',
        name: 'Profi-Werkzeugkoffer 156-tlg',
        description: 'Umfangreicher Werkzeugkoffer mit 156 Teilen. Hochwertige Qualität für den täglichen Einsatz.',
        category: 'tools-equipment',
        subcategory: 'Handwerkzeuge',
        imageUrl: '/images/final/products-tools.webp',
        priceGross: 199.99,
        priceNet: 168.06,
        unit: 'Set',
        inStock: true,
        stockQuantity: 10,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Teile', value: '156' },
            { label: 'Material', value: 'Chrom-Vanadium' },
            { label: 'Koffer', value: 'Aluminium' },
        ],
        tags: ['Set', 'Geschenkidee'],
        forSegments: ['retail', 'contractor'],
    },

    // Technical Supplies
    {
        id: 'schrauben-sortiment-1200',
        name: 'Schrauben-Sortiment 1200-tlg',
        description: 'Großes Schraubensortiment mit den gängigsten Größen. Perfekt für Werkstatt und Baustelle.',
        category: 'technical-supplies',
        subcategory: 'Befestigung',
        imageUrl: '/images/final/products-tools.webp',
        priceGross: 39.99,
        priceNet: 33.61,
        unit: 'Sortiment',
        inStock: true,
        stockQuantity: 50,
        minOrderQuantity: 1,
        bulkPricing: [
            { minQuantity: 5, priceNet: 31.93, discount: 5 },
        ],
        specifications: [
            { label: 'Teile', value: '1200' },
            { label: 'Größen', value: '3-6 mm' },
            { label: 'Material', value: 'Edelstahl A2' },
        ],
        tags: ['Sortiment', 'Baustelle'],
        forSegments: ['retail', 'contractor', 'b2b-partner'],
    },
    {
        id: 'duebel-universaldubel-100',
        name: 'Universal-Dübel 6-10mm',
        description: 'Vielseitig einsetzbare Universal-Dübel für alle Untergründe. 100 Stück in verschiedenen Größen.',
        category: 'technical-supplies',
        subcategory: 'Befestigung',
        imageUrl: '/images/final/products-tools.webp',
        priceGross: 12.99,
        priceNet: 10.92,
        unit: '100 Stück',
        inStock: true,
        stockQuantity: 200,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Größen', value: '6, 8, 10 mm' },
            { label: 'Menge', value: '100 Stück' },
            { label: 'Material', value: 'Nylon' },
        ],
        tags: ['Befestigung'],
        forSegments: ['retail', 'contractor'],
    },

    // Delivery Services
    {
        id: 'lieferung-standard',
        name: 'Standard-Lieferung',
        description: 'Lieferung innerhalb von 2-3 Werktagen in der Region Wetzlar-Gießen.',
        category: 'delivery-services',
        subcategory: 'Lieferung',
        imageUrl: '/images/final/service-landscaping.webp',
        priceGross: 29.99,
        priceNet: 25.20,
        unit: 'Pauschale',
        inStock: true,
        stockQuantity: 999,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Lieferzeit', value: '2-3 Werktage' },
            { label: 'Gebiet', value: 'Wetzlar-Gießen' },
        ],
        tags: ['Service'],
        forSegments: ['retail', 'contractor', 'b2b-partner'],
    },
    {
        id: 'lieferung-express',
        name: 'Express-Lieferung (24h)',
        description: 'Express-Lieferung am nächsten Werktag bis 12 Uhr. Ideal für dringende Baustellenbedarfe.',
        category: 'delivery-services',
        subcategory: 'Lieferung',
        imageUrl: '/images/final/service-landscaping.webp',
        priceGross: 59.99,
        priceNet: 50.41,
        unit: 'Pauschale',
        inStock: true,
        stockQuantity: 999,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Lieferzeit', value: 'Nächster Werktag' },
            { label: 'Anlieferung bis', value: '12:00 Uhr' },
        ],
        tags: ['Express', 'Profi'],
        forSegments: ['contractor', 'b2b-partner'],
    },
    {
        id: 'lieferung-kran',
        name: 'Kranentladung vor Ort',
        description: 'Lieferung mit LKW-Kran für schwere Materialien. Direkte Entladung auf der Baustelle.',
        category: 'delivery-services',
        subcategory: 'Lieferung',
        imageUrl: '/images/final/service-paving.webp',
        priceGross: 149.99,
        priceNet: 126.04,
        unit: 'Pauschale',
        inStock: true,
        stockQuantity: 999,
        minOrderQuantity: 1,
        specifications: [
            { label: 'Tragkraft', value: 'bis 2.5 t' },
            { label: 'Reichweite', value: 'bis 12 m' },
        ],
        tags: ['Schwerlast', 'Baustelle'],
        forSegments: ['contractor', 'b2b-partner'],
    },
];

// Helper functions
export const getProductsByCategory = (category: ProductCategory): Product[] => {
    return PRODUCTS.filter(p => p.category === category);
};

export const getProductsBySegment = (segment: 'retail' | 'contractor' | 'b2b-partner'): Product[] => {
    return PRODUCTS.filter(p => p.forSegments.includes(segment));
};

export const getFeaturedProducts = (segment: 'retail' | 'contractor' | 'b2b-partner', limit = 4): Product[] => {
    const segmentProducts = getProductsBySegment(segment);
    // Prioritize bestsellers and in-stock items
    return segmentProducts
        .filter(p => p.inStock && p.tags.includes('Bestseller'))
        .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
    const lowerQuery = query.toLowerCase();
    return PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.subcategory.toLowerCase().includes(lowerQuery) ||
        p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
};
