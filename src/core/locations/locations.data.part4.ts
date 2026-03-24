import { CityConfig } from '../cityConfig.types';

export const locationLahnau: CityConfig = {
    slug: 'lahnau',
    name: 'Lahnau',
    plz: '35633',
    region: 'Lahn-Dill-Kreis',
    einwohner: '8.200',
    entfernungKm: 12,
    fahrzeitMin: 15,
    geoCoordinates: [50.5739, 8.5611],

    heroVariant: 1,
    layoutProfile: 'A',
    motionProfile: 'organic',
    accentShift: 8,
    imageStyle: 'circular',

    headline: 'Exklusiver Landschaftsbau in Lahnau',
    subheadline: 'Natürliche Eleganz für Ihr Zuhause an der Lahn.',
    metaTitle: 'Garten- und Landschaftsbau Lahnau | Memo BauT',
    metaDescription: 'Ihr Premium-Berater für exklusive Gartengestaltung in Lahnau. Maßgeschneiderte Konzepte und meisterhafte Umsetzung für Gärten, die begeistern.',

    story: 'Eingebettet in das romantische Lahntal vereint Lahnau naturverbundenes Wohnen mit hoher Lebensqualität. Unsere Gartengestaltungen greifen diese Harmonie auf und schaffen fließende Übergänge zwischen Architektur und umgebender Naturlandschaft.',
    topografie: 'Flusstal und sanfte Hanglagen',
    gartenStil: 'Naturnah, organisch, fließende Formen',
    wohnstruktur: 'Einfamilienhäuser und großzügige Grundstücke',
    lokalerBezug: ['Lahnaue', 'Römerforum Waldgirmes'],
    fokusLeistungen: ['Naturnahe Gartengestaltung', 'Natursteinarbeiten', 'Sichtschutzkonzepte'],

    ctaPrimary: 'Gartenkonzept anfragen',
    ctaSecondary: 'Unsere Projekte ansehen',
    testimonialLocal: {
        text: 'Unser Garten in Lahnau wurde mit viel Gespür für die Natur gestaltet. Fühlt sich an wie eine private Oase direkt an der Lahn.',
        author: 'Familie W.',
        location: 'Lahnau (Waldgirmes)'
    },
    projektAnzahl: 12,

    faqItems: [
        {
            q: 'Gestalten Sie auch Gärten in Hanglage in Lahnau?',
            a: 'Ja, besonders in den Hanglagen Richtung Lahntal entwickeln wir funktionale und ästhetische Terrassierungen.'
        },
        {
            q: 'Sind naturnahe Gartendesigns möglich?',
            a: 'Absolut. In Lahnau setzen wir häufig auf organische Formen und regionale Pflanzen, die zur Umgebung passen.'
        },
        {
            q: 'Wie lange dauert eine Beratung?',
            a: 'Die kostenlose Erstberatung vor Ort in Lahnau nimmt ca. 1-2 Stunden in Anspruch.'
        }
    ],

    schemaServiceArea: {
        type: 'GeoCircle',
        circle: { lat: 50.5739, lng: 8.5611, radius: 5000 }
    },
    internalLinks: ['/galerie/naturstein', '/leistungen/gartengestaltung']
};

export const locationHuettenberg: CityConfig = {
    slug: 'huettenberg',
    name: 'Hüttenberg',
    plz: '35625',
    region: 'Lahn-Dill-Kreis',
    einwohner: '10.800',
    entfernungKm: 18,
    fahrzeitMin: 20,
    geoCoordinates: [50.5058, 8.5986],

    heroVariant: 2,
    layoutProfile: 'B',
    motionProfile: 'dynamic',
    accentShift: 4,
    imageStyle: 'fullbleed',

    headline: 'Premium Gartengestaltung in Hüttenberg',
    subheadline: 'Handwerkliche Perfektion für Ihr Grundstück.',
    metaTitle: 'Gartenbau Hüttenberg | Memo BauT',
    metaDescription: 'Hochwertiger Garten- und Landschaftsbau in Hüttenberg. Wir realisieren repräsentative Einfahrten, Terrassen und Gärten auf Meister-Niveau.',

    story: 'Hüttenberg zeichnet sich durch seine ruhige, familienfreundliche Lage zwischen Wetzlar und Gießen aus. Wir formen hier Gärten, die zum perfekten Rückzugsort für die ganze Familie werden – mit klaren Linien, hochwertigen Materialien und intelligenter Bepflanzung.',
    topografie: 'Hügeliges Terrain mit weiten Ausblicken',
    gartenStil: 'Modern, strukturiert, familienfreundlich',
    wohnstruktur: 'Dörfliche Strukturen und Neubaugebiete',
    lokalerBezug: ['Hüttenberger Land', 'Schwingbachtal'],
    fokusLeistungen: ['Pflasterarbeiten', 'Terrassenbau', 'Gartenbeleuchtung'],

    ctaPrimary: 'Vor-Ort-Termin vereinbaren',
    ctaSecondary: 'Leistungen erkunden',
    testimonialLocal: {
        text: 'Die Umsetzung unserer neuen Einfahrt in Hüttenberg war absolut professionell. Die Qualität der Pflasterarbeiten ist beeindruckend.',
        author: 'Herr M.',
        location: 'Hüttenberg'
    },
    projektAnzahl: 18,

    faqItems: [
        {
            q: 'Übernehmen Sie auch die Pflege von großen Anlagen in Hüttenberg?',
            a: 'Ja, wir bieten umfassende Pflegekonzepte für Privatgärten und Gewerbeflächen an.'
        },
        {
            q: 'Wie plane ich meine neue Terrasse in Hüttenberg?',
            a: 'Wir kommen zu Ihnen nach Hüttenberg, messen alles aus und beraten Sie ausführlich zu Materialien wie Keramik oder Naturstein.'
        },
        {
            q: 'Bieten Sie auch smarte Gartenbeleuchtung an?',
            a: 'Selbstverständlich. Ein stimmungsvolles Lichtkonzept gehört zu vielen unserer Projekte im Hüttenberger Land.'
        }
    ],

    schemaServiceArea: {
        type: 'GeoCircle',
        circle: { lat: 50.5058, lng: 8.5986, radius: 6000 }
    },
    internalLinks: ['/galerie/pflasterarbeiten', '/leistungen/terrassen']
};

export const locationWeilburg: CityConfig = {
    slug: 'weilburg',
    name: 'Weilburg',
    plz: '35781',
    region: 'Landkreis Limburg-Weilburg',
    einwohner: '13.000',
    entfernungKm: 30,
    fahrzeitMin: 25,
    geoCoordinates: [50.4851, 8.2612],

    heroVariant: 3,
    layoutProfile: 'C',
    motionProfile: 'cinematic',
    accentShift: 15,
    imageStyle: 'asymmetric',

    headline: 'Exklusive Gärten in der Residenzstadt Weilburg',
    subheadline: 'Landschaftsbau, der Geschichte und Moderne vereint.',
    metaTitle: 'Garten- und Landschaftsbau Weilburg | Memo BauT',
    metaDescription: 'Ihr Partner für anspruchsvollen Gartenbau in Weilburg. Von der historischen Villa bis zum modernen Einfamilienhaus - wir gestalten Traumgärten im Lahntal.',

    story: 'Als ehemalige Residenzstadt strahlt Weilburg eine besondere historische Würde aus. Unsere Landschaftsarchitektur respektiert diesen Charakter und verbindet ihn mit zeitgemäßem, luxuriösem Komfort. Ob an den steilen Hängen der Lahn oder in den charmanten Vororten.',
    topografie: 'Tal-Lage an der Flussschleife und starke Hangneigungen',
    gartenStil: 'Elegant, repräsentativ, terrassiert',
    wohnstruktur: 'Historische Bausubstanz und moderne Wohnanlagen',
    lokalerBezug: ['Schloss Weilburg', 'Lahnschleife'],
    fokusLeistungen: ['Hangabsicherung', 'Natursteinmauern', 'Premium-Gartendesign'],

    ctaPrimary: 'Projekt in Weilburg starten',
    ctaSecondary: 'Portfolio ansehen',
    testimonialLocal: {
        text: 'Die Herausforderung unseres steilen Grundstücks an der Lahn wurde von Memo BauT meisterhaft gelöst. Die Natursteinmauern sind ein echter Blickfang.',
        author: 'Familie E.',
        location: 'Weilburg (Lahnhang)'
    },
    projektAnzahl: 15,

    faqItems: [
        {
            q: 'Haben Sie Erfahrung mit steilen Grundstücken in Weilburg?',
            a: 'Ja, Hangsicherungen und Terrassierungen gehören zu unseren Kernkompetenzen, gerade im topografisch anspruchsvollen Weilburg.'
        },
        {
            q: 'Passen moderne Gartendesigns zu historischen Gebäuden?',
            a: 'Wir finden stets eine harmonische Balance, die den historischen Charme Weilburgs unterstreicht und gleichzeitig modernsten Wohnkomfort bietet.'
        },
        {
            q: 'Arbeiten Sie auch in den umliegenden Weilburger Stadtteilen?',
            a: 'Wir sind in allen Stadtteilen wie Kubach, Odersbach oder Gaudernbach für Sie im Einsatz.'
        }
    ],

    schemaServiceArea: {
        type: 'GeoCircle',
        circle: { lat: 50.4851, lng: 8.2612, radius: 8000 }
    },
    internalLinks: ['/galerie/hanglagen', '/leistungen/naturstein']
};

export const locationSchoeffengrund: CityConfig = {
    slug: 'schoeffengrund',
    name: 'Schöffengrund',
    plz: '35641',
    region: 'Lahn-Dill-Kreis',
    einwohner: '6.500',
    entfernungKm: 15,
    fahrzeitMin: 20,
    geoCoordinates: [50.4833, 8.4833],

    heroVariant: 4,
    layoutProfile: 'A',
    motionProfile: 'organic',
    accentShift: -5,
    imageStyle: 'masked',

    headline: 'Traumgärten im Schöffengrund',
    subheadline: 'Landschaftsbau für naturnahes, entspanntes Wohnen.',
    metaTitle: 'Gartengestaltung Schöffengrund | Memo BauT',
    metaDescription: 'Hochwertige Gartengestaltung im Schöffengrund. Wir realisieren individuelle Gartenkonzepte, Rollrasen und Terrassen für Ihr Eigenheim.',

    story: 'Die weiten Wiesen und Wälder des Schöffengrunds bieten die perfekte Kulisse für naturnahes, ruhiges Wohnen. Wir kreieren Gartenräume, die nahtlos in diese idyllische Landschaft übergehen und sie als erweiterten Wohnraum nutzbar machen.',
    topografie: 'Weitläufige, hügelige Landschaft',
    gartenStil: 'Idyllisch, pflegeleicht, ländlich-modern',
    wohnstruktur: 'Weiträumige Grundstücke, Einfamilienhäuser',
    lokalerBezug: ['Naturpark Taunus (Randgebiet)', 'Solmsbachtal'],
    fokusLeistungen: ['Rollrasen & Pflanzplanung', 'Sichtschutz', 'Holzterrasssen'],

    ctaPrimary: 'Gartenplanung anfragen',
    ctaSecondary: 'Unsere Leitfäden lesen',
    testimonialLocal: {
        text: 'Unser neuer Rollrasen und die Bewässerungsanlage funktionieren einwandfrei. Toller Service hier im Schöffengrund!',
        author: 'Frau P.',
        location: 'Schöffengrund (Schwalbach)'
    },
    projektAnzahl: 10,

    faqItems: [
        {
            q: 'Installieren Sie auch automatische Bewässerungssysteme im Schöffengrund?',
            a: 'Ja, smarte Bewässerungslösungen sind ideal für die oft großen Grundstücke in der Region Schöffengrund.'
        },
        {
            q: 'Wie schnell können Sie Rollrasen verlegen?',
            a: 'Nach der gründlichen Bodenvorbereitung verlegen wir den Premium-Rollrasen meist innerhalb von 1-2 Tagen.'
        },
        {
            q: 'Kommen Sie für eine Besichtigung nach Laufdorf oder Oberwetz?',
            a: 'Selbstverständlich, wir bedienen alle Ortsteile des Schöffengrunds ohne lange Wartezeiten.'
        }
    ],

    schemaServiceArea: {
        type: 'GeoCircle',
        circle: { lat: 50.4833, lng: 8.4833, radius: 5000 }
    },
    internalLinks: ['/leistungen/rollrasen', '/leistungen/holzterrassen']
};

export const locationPohlheim: CityConfig = {
    slug: 'pohlheim',
    name: 'Pohlheim',
    plz: '35415',
    region: 'Landkreis Gießen',
    einwohner: '18.000',
    entfernungKm: 28,
    fahrzeitMin: 25,
    geoCoordinates: [50.5333, 8.7167],

    heroVariant: 1,
    layoutProfile: 'E',
    motionProfile: 'dynamic',
    accentShift: 12,
    imageStyle: 'grid',

    headline: 'Ihr Experte für Gartenbau in Pohlheim',
    subheadline: 'Repräsentative Außenanlagen in den Ausläufern der Wetterau.',
    metaTitle: 'Garten- und Landschaftsbau Pohlheim | Memo BauT',
    metaDescription: 'Ihr Premium-Berater für exklusive Gartengestaltung in Pohlheim. Von Watzenborn-Steinberg bis Grüningen - wir gestalten Ihre Außenanlagen.',

    story: 'Pohlheim verbindet eine hervorragende Anbindung mit hoher Wohnqualität. An der Nahtstelle zwischen Gießen und Wetterau realisieren wir hier Gartenprojekte, die urbane Eleganz mit familiengerechtem Freiraum verschmelzen lassen.',
    topografie: 'Eher flach bis leicht hügelig',
    gartenStil: 'Zeitgemäß, funktional, geradlinig',
    wohnstruktur: 'Hoher Anteil an Neubauten und gepflegten Wohnanlagen',
    lokalerBezug: ['Limes', 'Schiffenberg (Nähe)'],
    fokusLeistungen: ['Komplette Außenanlagen', 'Einfahrten & Wege', 'Smarte Steuerung'],

    ctaPrimary: 'Kostenlose Erstberatung in Pohlheim',
    ctaSecondary: 'Mehr über uns erfahren',
    testimonialLocal: {
        text: 'Die Konzeption unserer kompletten Außenanlage beim Neubau in Watzenborn war hervorragend. Vom ersten Entwurf bis zum letzten Stein.',
        author: 'Familie K.',
        location: 'Pohlheim (Watzenborn-Steinberg)'
    },
    projektAnzahl: 22,

    faqItems: [
        {
            q: 'Bieten Sie auch komplette Neuanlagen für Neubauten in Pohlheim an?',
            a: 'Wir sind Spezialisten für komplette Neuanlagen, von Erdarbeiten bis zur finalen Bepflanzung.'
        },
        {
            q: 'Planen Sie smarte Gartentechnik mit ein?',
            a: 'Ja, wir integrieren Mähroboter, intelligente Bewässerung und LED-Lichtkonzepte nahtlos in unser Design.'
        },
        {
            q: 'In welchen Pohlheimer Stadtteilen sind Sie aktiv?',
            a: 'Wir betreuen Projekte in allen Ortsteilen: Watzenborn-Steinberg, Garbenteich, Hausen, Holzheim, Dorf-Güll und Grüningen.'
        }
    ],

    schemaServiceArea: {
        type: 'GeoCircle',
        circle: { lat: 50.5333, lng: 8.7167, radius: 7000 }
    },
    internalLinks: ['/leistungen/neuanlagen', '/galerie/pflasterarbeiten']
};

export const LOCATIONS_PART4: CityConfig[] = [
    locationLahnau,
    locationHuettenberg,
    locationWeilburg,
    locationSchoeffengrund,
    locationPohlheim
];
