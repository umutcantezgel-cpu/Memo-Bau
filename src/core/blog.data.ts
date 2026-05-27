/**
 * ═══════════════════════════════════════════════════════════════
 * MEMO BAUT - RATGEBER / BLOG DATEN
 * SEO-Longtail-Artikel in authentischer Handwerker-Stimme.
 * Jeder Artikel zielt auf ein konkretes Keyword-Cluster.
 * ═══════════════════════════════════════════════════════════════
 */

export interface BlogPost {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    publishedDate: string;
    updatedDate?: string;
    category: 'material' | 'pflege' | 'planung' | 'trends';
    categoryLabel: string;
    readingTime: string;
    heroImage: string;

    intro: string;
    sections: {
        heading: string;
        content: string;
        listItems?: string[];
    }[];
    fazit: string;
    faqs: { q: string; a: string }[];
    relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [


    {
        slug: 'terrassenplatten-vergleich',
        title: 'Keramik vs. Naturstein vs. Beton: Welche Terrassenplatte passt?',
        metaTitle: 'Terrassenplatten Vergleich 2026   Keramik, Naturstein, Beton',
        metaDescription: 'Terrassenplatten im Vergleich: Keramik, Naturstein oder Beton? Vor  und Nachteile und Empfehlungen vom Fachbetrieb.',
        publishedDate: '2025-10-10',
        category: 'material',
        categoryLabel: 'Materialwissen',
        readingTime: '7 Min.',
        heroImage: '/images/final/service-paving.webp',

        intro: `Die Wahl der richtigen Terrassenplatte ist fast so persönlich wie die Wahl der Wandfarbe im Wohnzimmer. Und genauso gibt es kein "richtig" oder "falsch"   nur "passt" oder "passt nicht". Trotzdem bekomme ich die Frage ständig: "Was würden Sie nehmen?" Meine ehrliche Antwort: Es kommt drauf an. Auf die Architektur des Hauses, die Nutzung der Terrasse, das Budget und die Bereitschaft zur Pflege. Hier ein Vergleich aus der Praxis   nicht aus dem Werbekatalog der Hersteller.`,

        sections: [
            {
                heading: 'Keramik-Terrassenplatten: Der moderne Alleskönner',
                content: `Keramik ist in den letzten fünf Jahren massiv aufgestiegen. Zurecht. Die Platten sind kratzfest, frostbeständig, farbecht und in unzähligen Designs erhältlich   von Holzoptik über Betonoptik bis zu Marmorimitat. Die Oberfläche ist geschlossen, das heißt: Keine Flecken von Rotwein, Grill oder Blumentöpfen. Reinigung mit dem Hochdruckreiniger, fertig. Nachteile? Keramik ist härter als Naturstein und klingt beim Draufklopfen "kalt". Manche empfinden die Oberfläche als zu perfekt, zu künstlich. Bei sehr günstigen Keramikplatten kann die Kante brechen, wenn schwere Gegenstände darauf fallen.`,
            },
            {
                heading: 'Naturstein: Charakter und Ewigkeit',
                content: `Granit, Travertin, Quarzit, Sandstein   jeder Naturstein hat seinen eigenen Charakter. Keine Platte ist wie die andere. Das macht den Reiz aus, erfordert aber auch mehr Sorgfalt beim Verlegen. Naturstein ist in der Regel offenporig, das heißt: Er kann Flecken aufnehmen. Guter Granit ist da relativ unempfindlich, Sandstein dagegen braucht eine Imprägnierung. Die Oberfläche wird mit den Jahren etwas rauer, bekommt Patina   was die meisten Menschen als schön empfinden.`,
            },
            {
                heading: 'Betonstein: Der Pragmatiker',
                content: `Betonplatten haben sich in den letzten Jahren stark verbessert. Moderne Betonsteinplatten mit Oberflächenvergütung (gewaschen, geschliffen oder gestrahlt) sehen richtig gut aus und sind oft eine attraktive Alternative zu Naturstein. Die Formate sind präzise, die Verlegung geht schnell. Nachteil: Die Oberfläche verwittert stärker als bei Keramik oder Granit. Nach 8 10 Jahren sieht man Betonsteinplatten ihr Alter an. Bei günstigeren Varianten kann Moos in die raue Oberfläche einziehen.`,
            },
        ],

        fazit: `Meine persönliche Empfehlung? Für die Hauptterrasse am Haus: Keramik oder Naturstein. Für Gartenwege und Nebenflächen: Guter Betonstein. Für die Einfahrt: Naturstein Pflaster oder hochwertiger Betonstein. Kommen Sie vorbei und schauen Sie sich unsere Muster an   auf dem Bildschirm sieht alles anders aus als in der Hand.`,

        faqs: [
            { q: 'Kann man Keramikplatten auch auf der alten Terrasse verlegen?', a: 'Ja, mit dem Stelzlager System sogar relativ einfach. Die alten Platten bleiben liegen, darüber kommen höhenverstellbare Stelzlager und die neuen Keramikplatten. Das spart Zeit und Aufwand beim Abriss und der Entsorgung.' },
            { q: 'Welche Plattenstärke brauche ich?', a: 'Für Terrassen mindestens 2cm (20mm). Für befahrbare Flächen empfehlen wir 3cm (30mm) oder Pflastersteine mit 6 8cm Stärke.' },
            { q: 'Können Sie mir Muster zuschicken?', a: 'Wir bringen bei jedem Beratungstermin passende Muster mit. So sehen Sie die Steine direkt neben Ihrem Haus und unter natürlichem Licht   das ist aussagekräftiger als jeder Katalog.' },
        ],

        relatedSlugs: [],
    },

    {
        slug: 'garten-winterfest-machen',
        title: 'Garten winterfest machen: Die komplette Checkliste',
        metaTitle: 'Garten winterfest machen   Checkliste vom Gärtner (2026)',
        metaDescription: 'Garten winterfest machen: Was muss im Herbst erledigt werden? Rasen, Bewässerung, Gartenmöbel. Praxis Checkliste vom Fachbetrieb.',
        publishedDate: '2025-09-28',
        category: 'pflege',
        categoryLabel: 'Gartenpflege',
        readingTime: '5 Min.',
        heroImage: '/images/final/service-planting.webp',

        intro: `Jedes Jahr dasselbe Spiel: Die Temperaturen fallen, und plötzlich fällt einem ein, dass man den Garten noch winterfest machen muss. Wann genau? Meistens Mitte Oktober bis Anfang November, je nach Wetterlage. Im Lahn Dill Kreis kann der erste Frost schon Ende Oktober kommen, in milden Jahren hält es bis Mitte November. Hier die Dinge, die wirklich gemacht werden müssen   ohne übertriebenen Perfektionismus.`,

        sections: [
            {
                heading: 'Rasen: Letzter Schnitt und Herbstdüngung',
                content: `Der letzte Rasenschnitt sollte bei ca. 5cm Höhe erfolgen   etwas höher als im Sommer. Zu kurz geschnittener Rasen ist frostempfindlicher. Davor lohnt sich eine Herbstdüngung mit kaliumbetontem Dünger (kein Stickstoff mehr!). Das Kalium stärkt die Zellwände und macht den Rasen widerstandsfähiger gegen Frost. Laub vom Rasen entfernen, sonst bildet sich darunter Schimmel.`,
            },
            {
                heading: 'Bewässerung: Leitungen entleeren',
                content: `Das ist der wichtigste Punkt auf der Liste. Wasser in Leitungen gefriert, dehnt sich aus und sprengt die Rohre. Das verursacht großen Aufwand und teure Reparaturen. Alle Außenwasserhähne aufdrehen und das Absperrventil im Keller schließen. Bei automatischen Bewässerungsanlagen die Leitungen mit Druckluft ausblasen   das können wir für Sie übernehmen.`
            },
            {
                heading: 'Terrassen und Außenanlagen schützen',
                content: `Auch Ihre Hartflächen verdienen Vorbereitung auf den Winter:`,
                listItems: [
                    'Terrassenmöbel: Einlagern oder mit wetterfester Abdeckung schützen',
                    'Holzterrassen: Letztes Mal reinigen und ölen vor dem Frost',
                    'Naturstein-Fugen: Auf Beschädigungen prüfen, ggf. nachverfugen',
                    'Gräser im Beet: Zusammenbinden, nicht schneiden. Der Schnitt kommt erst im Frühjahr',
                    'Regenrinnen und Abläufe: Laub entfernen, Durchfluss sicherstellen',
                ],
            },
        ],

        fazit: `Machen Sie sich keinen Stress. Die zwei wirklich kritischen Punkte sind: Bewässerungsleitungen leeren und Außenmöbel schützen. Alles andere überlebt einen Hessischen Winter problemlos.`,

        faqs: [
            { q: 'Muss ich den Rasen im Winter betreten vermeiden?', a: 'Idealerweise ja, besonders bei Frost. Gefrorene Grashalme brechen und hinterlassen braune Stellen. Aber keine Panik: Der Rasen erholt sich im Frühjahr.' },
            { q: 'Was mache ich mit dem Mähroboter im Winter?', a: 'Akku voll laden, an einem trockenen, frostfreien Ort lagern (Garage, Keller). Die Ladestation kann draußen bleiben, wenn sie wetterfest ist.' },
        ],

        relatedSlugs: ['terrassenplatten-vergleich'],
    },
];
