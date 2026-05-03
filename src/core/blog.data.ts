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
    category: 'kosten' | 'material' | 'pflege' | 'planung' | 'trends';
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
        slug: 'gartengestaltung-kosten',
        title: 'Was kostet Gartengestaltung wirklich? Ein ehrlicher Überblick',
        metaTitle: 'Gartengestaltung Kosten 2026 - Preise, Beispiele & Spartipps',
        metaDescription: 'Was kostet eine professionelle Gartengestaltung? Realistische Preise für Terrassen, Pflaster, Bepflanzung und Planung. Mit Rechenbeispielen aus der Praxis.',
        publishedDate: '2025-06-15',
        updatedDate: '2026-03-10',
        category: 'kosten',
        categoryLabel: 'Kosten & Budget',
        readingTime: '8 Min.',
        heroImage: '/images/final/service-planning.webp',

        intro: `"Was wird das denn ungefähr kosten?" - die Frage, die jeder stellt und die kein seriöser Handwerker pauschal beantworten kann. Trotzdem versuche ich es hier mal so ehrlich wie möglich. Ich schreibe hier keine theoretischen Zahlen aus Baukostenindexen ab, sondern gebe Ihnen Richtwerte aus unseren tatsächlich kalkulierten Projekten im Raum Wetzlar und Lahn-Dill-Kreis. Stand: Frühjahr 2026.`,

        sections: [
            {
                heading: 'Die große Spanne: Warum "ab 50€ pro Quadratmeter" nichts aussagt',
                content: `Im Internet finden Sie Angaben wie "Gartengestaltung ab 50€/m²". Das stimmt - wenn Sie Rollrasen auf eine ebene Fläche legen. Aber sobald Pflaster, Terrassen, Mauern, Bepflanzung und vielleicht noch eine Bewässerung dazukommen, sind wir in einer ganz anderen Liga. Ein realistischer Durchschnittswert für eine komplette Neugestaltung eines Einfamilienhausgartens mit Terrasse, Wegen, Bepflanzung und Rasen liegt in unserer Region bei 150-300€ pro Quadratmeter Gartenanfläche. Das klingt erst mal viel, aber da steckt auch alles drin: Planung, Erdarbeiten, Material, Arbeitslohn, Entsorgung, Maschinen.`,
            },
            {
                heading: 'Kostentreiber Nr. 1: Der Unterbau',
                content: `Den sieht man am Ende nicht, aber er macht oft 30-40% der Gesamtkosten aus. Aushub, Schottertragschicht, Frostschutz, Drainage - das sind die Posten, die viele nicht auf dem Schirm haben. Wer hier spart, zahlt doppelt: Pflasterflächen, die absacken oder Terrassen, die kippen, sind die teuersten Fehler im Gartenbau. Bei schwierigen Bodenverhältnissen (und davon gibt es im Dilltal reichlich) kann der Erdaushub allein schon 2.000-5.000€ kosten.`,
            },
            {
                heading: 'Rechenbeispiel: Typischer 180m²-Garten in Wetzlar',
                content: `Hier mal ein reales Beispiel, anonymisiert, aus unserer Kalkulation:`,
                listItems: [
                    'Terrasse 30m² Keramik (Großformat 80x80): ca. 6.000-7.500€',
                    'Gartenweg 15m² Naturstein: ca. 2.500-3.500€',
                    'Pflanzflächen 40m² mit Stauden und Gräsern: ca. 2.500-4.000€',
                    'Rollrasen 80m² inkl. Bodenvorbereitung: ca. 1.200-1.600€',
                    'Sichtschutzzaun 12 lfm Aluminium: ca. 3.000-4.500€',
                    'Erdarbeiten und Entsorgung: ca. 2.500-4.000€',
                    'Planung und Bauleitung: ca. 800-1.500€',
                    'Summe: ca. 18.500-26.600€',
                ],
            },
            {
                heading: 'Wo Sie sparen können - und wo besser nicht',
                content: `Eigenleistung bei Pflanzarbeiten: Ja, das spart. Wir erstellen den Pflanzplan, Sie pflanzen selbst. Bei einem 40m²-Beet sparen Sie damit ca. 600-1.000€ an Arbeitslohn. Eigenleistung beim Erdaushub: Nur wenn Sie wissen, was Sie tun und eigene Maschinen haben. Sonst wird es teurer als es beim Profi gewesen wäre. Keinesfalls sparen beim Unterbau, bei der Entwässerung und bei der Materialqualität. Ein günstiger Betonstein für 18€/m² sieht nach drei Jahren anders aus als einer für 35€/m². Die Arbeitskosten sind identisch - also lohnt sich das bessere Material fast immer.`,
            },
        ],

        fazit: `Rechnen Sie für eine professionelle Gartengestaltung mit einem Komplettpreis von 15.000-35.000€ für einen durchschnittlichen Einfamilienhausgarten. Das ist eine Investition, die den Wert Ihrer Immobilie steigert und Ihnen jahrzehntelang Freude macht. Holen Sie sich mindestens zwei Angebote ein - aber vergleichen Sie nicht nur den Preis, sondern auch den Leistungsumfang. Der günstigste Anbieter ist selten der beste.`,

        faqs: [
            { q: 'Kann ich die Gartengestaltung auch in Etappen machen lassen?', a: 'Absolut. Viele Kunden teilen das Projekt in Phasen auf: Erst Terrasse und Rasen, im nächsten Jahr die Bepflanzung, dann Bewässerung. Das geht - man muss es nur von Anfang an so planen, damit die Phasen zusammenpassen.' },
            { q: 'Sind die Preise im Winter günstiger?', a: 'Die Materialpreise sind ganzjährig relativ stabil. Aber im Winter (November-Februar) haben viele Betriebe weniger zu tun. Eine Anfrage im Herbst für ein Frühjahrsprojekt kann sich also durchaus lohnen.' },
            { q: 'Was kostet eine reine Planungsleistung ohne Umsetzung?', a: 'Eine vollständige 3D-Gartenplanung liegt bei uns zwischen 800-2.000€, abhängig von der Größe und Komplexität. Bei Auftragserteilung wird dieser Betrag vollständig angerechnet.' },
        ],

        relatedSlugs: ['pflasterarbeiten-preise', 'terrassenplatten-vergleich'],
    },

    {
        slug: 'pflasterarbeiten-preise',
        title: 'Pflasterarbeiten: Preise pro m² im Vergleich (2026)',
        metaTitle: 'Pflasterarbeiten Preise 2026 - Was kostet Pflaster verlegen?',
        metaDescription: 'Aktuelle Preise für Pflasterarbeiten pro m²: Naturstein, Betonstein, Keramik. Mit Auflistung aller Kostenfaktoren und Preisbeispiel.',
        publishedDate: '2025-08-20',
        updatedDate: '2026-02-15',
        category: 'kosten',
        categoryLabel: 'Kosten & Budget',
        readingTime: '6 Min.',
        heroImage: '/images/final/service-paving.webp',

        intro: `Pflasterarbeiten sind die Leistung, nach der am häufigsten gefragt wird - und bei der die Preisunterschiede am größten sind. Ein Anbieter sagt 60€ pro Quadratmeter, der nächste 180€. Wie kommt das? Ganz einfach: Meistens werden Äpfel mit Birnen verglichen. Der eine rechnet nur das Material und die Verlegung, der andere hat Unterbau, Aushub, Entsorgung und Randeinfassung mit drin. Hier bekommen Sie eine ehrliche Übersicht.`,

        sections: [
            {
                heading: 'Die drei großen Preiskategorien',
                content: `Pflasterarbeiten lassen sich grob in drei Preisklassen einteilen. Die folgenden Preise verstehen sich als Komplettpreise inklusive Unterbau, Verlegung, Verfugung und Randeinfassung - so wie wir es anbieten und Sie es vergleichen sollten:`,
                listItems: [
                    'Betonstein (Standard): 80-120€/m² komplett',
                    'Naturstein (Granit, Basalt, Grauwacke): 120-200€/m² komplett',
                    'Keramik-Terrassenplatten (Großformat): 150-250€/m² komplett',
                ],
            },
            {
                heading: 'Was im "Komplettpreis" steckt',
                content: `Um fair zu vergleichen, muss jedes Angebot die gleichen Positionen enthalten. Achten Sie darauf, dass folgende Posten aufgeführt sind:`,
                listItems: [
                    'Aushub des vorhandenen Bodens (30-40cm tief)',
                    'Abtransport und Entsorgung des Aushubs',
                    'Frostschutzschicht (Schotter 0/32 oder 0/45)',
                    'Verdichtung mit Rüttelplatte',
                    'Splittbett (2-5mm Körnung)',
                    'Pflastermaterial inklusive 5% Verschnitt',
                    'Verlegung im vereinbarten Verband',
                    'Randeinfassung (Betonsteine oder Stahlkanten)',
                    'Verfugung',
                    'Baustellenreinigung',
                ],
            },
            {
                heading: 'Warum Naturstein teurer ist - und trotzdem oft die bessere Wahl',
                content: `Naturstein kostet mehr Material und ist aufwendiger zu verlegen. Ein Granitpflaster muss einzeln gesetzt werden, jeder Stein hat individuelle Maße. Betonpflaster wird dagegen im Verband verlegt - schneller und einfacher. Aber: Naturstein gewinnt mit den Jahren an Charakter. Ein 20 Jahre alter Granit-Gartenweg sieht besser aus als am ersten Tag. Ein 20 Jahre alter Betonstein sieht aus wie ein 20 Jahre alter Betonstein. Die Oberfläche verwittert, wird fleckig und die Farbe verblasst. Bei hochwertigem Betonstein ist das weniger schlimm, bei günstigem Baumarkt-Pflaster aber sehr deutlich.`,
            },
        ],

        fazit: `Vergleichen Sie immer Komplettpreise, nicht nur den Materialpreis. Der Unterbau macht 40-50% der Gesamtkosten aus - und ist der Teil, den Sie nicht sehen aber täglich spüren. Holen Sie sich mehrere Angebote ein und fragen Sie nach dem genauen Aufbauquerschnitt. Ein seriöser Betrieb nennt Ihnen Schichtdicken und Materialspezifikationen.`,

        faqs: [
            { q: 'Lohnt sich eine Pflasterverlegung im Mörtelbett?', a: 'Für Terrassen mit Großformat-Platten oder Keramik ist die Verlegung im Mörtelbett (gebunden) Standard. Für Einfahrten und befahrene Flächen empfehlen wir ungebundene Verlegung im Splittbett - die ist flexibler bei Setzungen.' },
            { q: 'Wie lange hält eine professionell verlegte Pflasterfläche?', a: 'Bei korrektem Unterbau und ordnungsgemäßer Verlegung: 30-50 Jahre problemlos. Naturstein hält bei Pflege quasi unbegrenzt.' },
        ],

        relatedSlugs: ['gartengestaltung-kosten', 'terrassenplatten-vergleich'],
    },

    {
        slug: 'terrassenplatten-vergleich',
        title: 'Keramik vs. Naturstein vs. Beton: Welche Terrassenplatte passt?',
        metaTitle: 'Terrassenplatten Vergleich 2026 - Keramik, Naturstein, Beton',
        metaDescription: 'Terrassenplatten im Vergleich: Keramik, Naturstein oder Beton? Vor- und Nachteile, Preise und Empfehlungen vom Fachbetrieb.',
        publishedDate: '2025-10-10',
        category: 'material',
        categoryLabel: 'Materialwissen',
        readingTime: '7 Min.',
        heroImage: '/images/final/service-paving.webp',

        intro: `Die Wahl der richtigen Terrassenplatte ist fast so persönlich wie die Wahl der Wandfarbe im Wohnzimmer. Und genauso gibt es kein "richtig" oder "falsch" - nur "passt" oder "passt nicht". Trotzdem bekomme ich die Frage ständig: "Was würden Sie nehmen?" Meine ehrliche Antwort: Es kommt drauf an. Auf die Architektur des Hauses, die Nutzung der Terrasse, das Budget und die Bereitschaft zur Pflege. Hier ein Vergleich aus der Praxis - nicht aus dem Werbekatalog der Hersteller.`,

        sections: [
            {
                heading: 'Keramik-Terrassenplatten: Der moderne Alleskönner',
                content: `Keramik ist in den letzten fünf Jahren massiv aufgestiegen. Zurecht. Die Platten sind kratzfest, frostbeständig, farbecht und in unzähligen Designs erhältlich - von Holzoptik über Betonoptik bis zu Marmorimitat. Die Oberfläche ist geschlossen, das heißt: Keine Flecken von Rotwein, Grill oder Blumentöpfen. Reinigung mit dem Hochdruckreiniger, fertig. Nachteile? Keramik ist härter als Naturstein und klingt beim Draufklopfen "kalt". Manche empfinden die Oberfläche als zu perfekt, zu künstlich. Bei sehr günstigen Keramikplatten kann die Kante brechen, wenn schwere Gegenstände darauf fallen. Preis: Ab ca. 35-70€/m² für die Platte alleine. Mit Verlegung im Stelzlager 120-180€/m², im Mörtelbett 150-220€/m².`,
            },
            {
                heading: 'Naturstein: Charakter und Ewigkeit',
                content: `Granit, Travertin, Quarzit, Sandstein - jeder Naturstein hat seinen eigenen Charakter. Keine Platte ist wie die andere. Das macht den Reiz aus, erfordert aber auch mehr Sorgfalt beim Verlegen. Naturstein ist in der Regel offenporig, das heißt: Er kann Flecken aufnehmen. Guter Granit ist da relativ unempfindlich, Sandstein dagegen braucht eine Imprägnierung. Die Oberfläche wird mit den Jahren etwas rauer, bekommt Patina - was die meisten Menschen als schön empfinden. Preis: Ab 40-120€/m² für den Stein. Mit Verlegung 130-250€/m².`,
            },
            {
                heading: 'Betonstein: Der Pragmatiker',
                content: `Betonplatten haben sich in den letzten Jahren stark verbessert. Moderne Betonsteinplatten mit Oberflächenvergütung (gewaschen, geschliffen oder gestrahlt) sehen richtig gut aus und kosten deutlich weniger als Naturstein. Die Formate sind präzise, die Verlegung geht schnell. Nachteil: Die Oberfläche verwittert stärker als bei Keramik oder Granit. Nach 8-10 Jahren sieht man Betonsteinplatten ihr Alter an. Bei günstigeren Varianten kann Moos in die raue Oberfläche einziehen. Preis: Ab 15-40€/m² für die Platte. Mit Verlegung 80-140€/m².`,
            },
        ],

        fazit: `Meine persönliche Empfehlung? Für die Hauptterrasse am Haus: Keramik oder Naturstein. Für Gartenwege und Nebenflächen: Guter Betonstein. Für die Einfahrt: Naturstein-Pflaster oder hochwertiger Betonstein. Kommen Sie vorbei und schauen Sie sich unsere Muster an - auf dem Bildschirm sieht alles anders aus als in der Hand.`,

        faqs: [
            { q: 'Kann man Keramikplatten auch auf der alten Terrasse verlegen?', a: 'Ja, mit dem Stelzlager-System sogar relativ einfach. Die alten Platten bleiben liegen, darüber kommen höhenverstellbare Stelzlager und die neuen Keramikplatten. Das spart Abriss- und Entsorgungskosten.' },
            { q: 'Welche Plattenstärke brauche ich?', a: 'Für Terrassen mindestens 2cm (20mm). Für befahrbare Flächen empfehlen wir 3cm (30mm) oder Pflastersteine mit 6-8cm Stärke.' },
            { q: 'Können Sie mir Muster zuschicken?', a: 'Wir bringen bei jedem Beratungstermin passende Muster mit. So sehen Sie die Steine direkt neben Ihrem Haus und unter natürlichem Licht - das ist aussagekräftiger als jeder Katalog.' },
        ],

        relatedSlugs: ['gartengestaltung-kosten', 'pflasterarbeiten-preise'],
    },

    {
        slug: 'garten-winterfest-machen',
        title: 'Garten winterfest machen: Die komplette Checkliste',
        metaTitle: 'Garten winterfest machen - Checkliste vom Gärtner (2026)',
        metaDescription: 'Garten winterfest machen: Was muss im Herbst erledigt werden? Rasen, Pflanzen, Bewässerung, Gartenmöbel. Praxis-Checkliste vom Fachbetrieb.',
        publishedDate: '2025-09-28',
        category: 'pflege',
        categoryLabel: 'Gartenpflege',
        readingTime: '5 Min.',
        heroImage: '/images/final/service-planting.webp',

        intro: `Jedes Jahr dasselbe Spiel: Die Temperaturen fallen, und plötzlich fällt einem ein, dass man den Garten noch winterfest machen muss. Wann genau? Meistens Mitte Oktober bis Anfang November, je nach Wetterlage. Im Lahn-Dill-Kreis kann der erste Frost schon Ende Oktober kommen, in milden Jahren hält es bis Mitte November. Hier die Dinge, die wirklich gemacht werden müssen - ohne übertriebenen Perfektionismus.`,

        sections: [
            {
                heading: 'Rasen: Letzter Schnitt und Herbstdüngung',
                content: `Der letzte Rasenschnitt sollte bei ca. 5cm Höhe erfolgen - etwas höher als im Sommer. Zu kurz geschnittener Rasen ist frostempfindlicher. Davor lohnt sich eine Herbstdüngung mit kaliumbetontem Dünger (kein Stickstoff mehr!). Das Kalium stärkt die Zellwände und macht den Rasen widerstandsfähiger gegen Frost. Laub vom Rasen entfernen, sonst bildet sich darunter Schimmel.`,
            },
            {
                heading: 'Bewässerung: Leitungen entleeren',
                content: `Das ist der wichtigste Punkt auf der Liste. Wasser in Leitungen gefriert, dehnt sich aus und sprengt die Rohre. Kosten für die Reparatur: 500-2.000€. Kosten für das Entleeren: 30 Minuten Arbeit oder 80-120€ vom Fachbetrieb. Alle Außenwasserhähne aufdrehen und das Absperrventil im Keller schließen. Bei automatischen Bewässerungsanlagen die Leitungen mit Druckluft ausblasen - das können wir für Sie übernehmen.`,
            },
            {
                heading: 'Pflanzen schützen',
                content: `Heimische Stauden und Gehölze brauchen in der Regel keinen Winterschutz. Was geschützt werden muss:`,
                listItems: [
                    'Rosen: Erde anhäufeln, Reisig drauflegen',
                    'Kübelpflanzen: Rein ins Haus oder an die Hauswand stellen und einwickeln',
                    'Immergrüne (Kirschlorbeer, Rhododendron): An frostfreien Tagen gießen! Vertrocknen ist das größte Risiko',
                    'Gräser: Zusammenbinden, nicht schneiden. Der Schnitt kommt erst im Frühjahr',
                    'Empfindliche Stauden: Laub als Mulchschicht drauflegen',
                ],
            },
        ],

        fazit: `Machen Sie sich keinen Stress. Die meisten Pflanzen im Garten sind robuster als man denkt. Die zwei wirklich kritischen Punkte sind: Bewässerungsleitungen leeren und Kübelpflanzen schützen. Alles andere überlebt einen Hessischen Winter problemlos.`,

        faqs: [
            { q: 'Muss ich den Rasen im Winter betreten vermeiden?', a: 'Idealerweise ja, besonders bei Frost. Gefrorene Grashalme brechen und hinterlassen braune Stellen. Aber keine Panik: Der Rasen erholt sich im Frühjahr.' },
            { q: 'Was mache ich mit dem Mähroboter im Winter?', a: 'Akku voll laden, an einem trockenen, frostfreien Ort lagern (Garage, Keller). Die Ladestation kann draußen bleiben, wenn sie wetterfest ist.' },
        ],

        relatedSlugs: ['gartengestaltung-kosten'],
    },
];
