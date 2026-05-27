import { CityConfig } from '../cityConfig.types';

export const LOCATIONS_PART2: CityConfig[] = [
    {
        slug: 'haiger',
        name: 'Haiger',
        plz: '35708',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 19.300',
        entfernungKm: 32,
        fahrzeitMin: 28,
        geoCoordinates: [50.742, 8.204],

        heroVariant: 2,
        layoutProfile: 'A',
        motionProfile: 'cinematic',
        accentShift: -8,
        imageStyle: 'asymmetric',

        headline: 'Garten  und Landschaftsbau Haiger – Entschleunigte Oasen',
        subheadline: 'Im malerischen Dreiländereck Hessen, NRW und RLP gestalten wir weitläufige Gartenträume am Fuße des Rothaargebirges.',
        metaTitle: 'Gartenbau & Landschaftsarchitektur Haiger | Memo BauT',
        metaDescription: 'Hochwertiger Garten  & Landschaftsbau in Haiger (35708). Von modernen Vorgärten bis hin zu großflächigen Natursteinanlagen im Lahn Dill Kreis.',
        story: 'Haiger und seine Ortsteile zeichnen sich durch ländliche Weite und unmittelbare Nähe zur Natur aus. Gärten hier dürfen großzügiger atmen. Bei Memo BauT verstehen wir es, diese Freiräume zu strukturieren, ohne sie einzuschnüren. Wir schaffen fließende Übergänge zwischen privatem Luxus – wie großformatigen Terrassen – und der natürlichen Kulisse des Rothaargebirges.',
        topografie: 'Weitläufige Tallagen entlang der Dill, die in felsige und waldreiche Erhebungen übergehen. Großzügige Grundstücke sind hier die Regel.',
        gartenStil: 'Moderne Interpretationen des Landhausstils dominieren. Vielfältige Grüngestaltung, weitläufige Rasenflächen und organisch geformte Naturstein Arrangements.',
        wohnstruktur: 'Traditionelle Fachwerkkulissen in den Ortskernen, umgeben von großzügigen Familienanwesen und Neubaugebieten in ruhiger Randlage.',
        lokalerBezug: ['Aubachtal', 'Eduardsturm', 'Rothaargebirge Ausläufer', 'Dillquelle'],
        fokusLeistungen: ['Wegebau & Pflasterung', 'Naturnahe Gartenkonzepte', 'L Steine & Hangsicherung'],

        ctaPrimary: 'Projekt in Haiger anfragen',
        ctaSecondary: 'Bisherige Garten Kreationen',
        projektAnzahl: 42,

        faqItems: [
            { q: 'Decken Sie in Haiger auch die Ortsteile wie Seelbach oder Flammersbach ab?', a: 'Ja, Haiger zählt mit allen Stadtteilen wie Flammerbach, Seelbach, Langenaubach etc. zu unserem nördlichen Einsatzgebiet im Lahn Dill Kreis. Es fallen keine gesonderten Anfahrtskosten an.' },
            { q: 'Pflastern Sie in Haiger auch sehr lange und steile Auffahrten?', a: 'Durch unseren starken Maschinenpark sind großflächige und komplizierte Pflasterarbeiten in Haiger und Umgebung eine unserer Kernkompetenzen.' },
            { q: 'Verwenden Sie für Projekte in Haiger regionales Material?', a: 'Wenn immer möglich setzen wir auf kurze Wege. Für Natursteinmauern in Haiger nutzen wir gerne Materialien (z.B. Basalt) aus regionalen, nahen Steinbrüchen.' },
            { q: 'Wir planen in Haiger einen Pool. Helfen Sie bei der Umrandung?', a: 'Wir bereiten den Garten für den Poolbauer perfekt vor (Aushub, Fundamente) und übernehmen die finale optische Veredelung, oft mit hochwertigen Keramikplatten rund um das Becken.' },
            { q: 'Ist ein Rasenroboter für die oft großen Grundstücke in Haiger integrierbar?', a: 'Selbstverständlich. Wir verlegen auf Wunsch Begrenzungskabel unterirdisch gleich mit und planen die Rasenkantensteine so, dass der Roboter ohne Nacharbeiten mähen kann.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.742, lng: 8.204, radius: 7000 }
        },
        internalLinks: ['dillenburg', 'bischoffen', 'herborn', 'mittenaar']
    },
    {
        slug: 'ehringshausen',
        name: 'Ehringshausen',
        plz: '35630',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 9.400',
        entfernungKm: 4,
        fahrzeitMin: 6,
        geoCoordinates: [50.600, 8.383],

        heroVariant: 2,
        layoutProfile: 'B',
        motionProfile: 'dynamic',
        accentShift: 4,
        imageStyle: 'grid',

        headline: 'Exklusive Gärten in Ehringshausen – Qualität aus der Nachbarschaft',
        subheadline: 'Nur einen Steinwurf von unserem Hauptsitz in Aßlar entfernt, verwandeln wir Gärten im gesamten Dilltal in repräsentative Erholungsorte.',
        metaTitle: 'Garten  & Landschaftsbau Ehringshausen | Termintreue | Memo BauT',
        metaDescription: 'Ihr naheliegender Experte für Gartengestaltung in Ehringshausen (35630). Mauern, Pflasterarbeiten & Terrassen direkt aus der Region. Kostenlose Planung.',
        story: 'Ehringshausen und das Dilltal sind unsere unmittelbare Heimat. Als direktes Nachbarstädtchen profitieren unsere Kunden hier von maximaler Präsenz. Wir kennen das Terrain, die Böden und die Lichtverhältnisse im Dilltal so gut wie unseren eigenen Garten. Die logistischen Vorteile durch die extrem kurze Anfahrt ermöglichen unseren Ehringshäuser Kunden höchste Wirtschaftlichkeit und Reaktionsschnelligkeit bei Premium Projekten.',
        topografie: 'Dicht bebauter Ortskern im Dilltal mit angrenzenden, stetig ansteigenden, waldnahen Vororten, die ein smartes Hang Management erfordern.',
        gartenStil: 'Effizientes Raum Design steht im Vordergrund. Pflegeleichte, hochwertig verbaute Flächen, scharfe Natursteinabschlüsse und klare Linien, oft in modernem Anthrazit gehalten.',
        wohnstruktur: 'Gemischte Struktur aus traditionellen Arbeiterhäusern nahe der Lahn, Gewerbeflächen und familienfreundlichen Neubau Einfamilienhäusern.',
        lokalerBezug: ['Dill', 'Vogelschutzwarte', 'Kölschhausen', 'Greifenthal'],
        fokusLeistungen: ['Stützmauern & Gartensicherung', 'Auffahrten & Zuwegungen', 'Holz  & WPC Terrassen'],

        ctaPrimary: 'Gartenberatung in Ehringshausen',
        ctaSecondary: 'Zufriedene Nachbarn ansehen',
        projektAnzahl: 112,

        faqItems: [
            { q: 'Verbauen Sie in Ehringshausen auch L Steine für Auffahrten?', a: 'L Steine (Winkelstützen) sind eine schnelle, saubere und extrem resistente Lösung, die wir für viele Bauprojekte in den abschüssigen Wohngebieten um Ehringshausen nutzen.' },
            { q: 'Sind Sie in Katzenfurt und den Ehringshäuser Ortsteilen gleichermaßen aktiv?', a: 'Katzenfurt, Kölschhausen, Greifenthal – alle Ortsteile der Gemeinde Ehringshausen zählen wir zu unserem absoluten Kern Einzugsgebiet ohne Extra Anfahrt.' },
            { q: 'Können Sie den alten Vorgarten in Ehringshausen vor dem Neuanlegen entfernen?', a: 'Unser Leistungspaket umfasst den kompletten Rückbau. Wir reißen alte Mauern ab, entfernen Wildwuchs kompetent, heben aus und bringen den Ehringshäuser Garten auf das exakte Planungs Niveau.' },
            { q: 'Verlegen Sie in Ehringshausen Rollrasen?', a: 'Premium Rollrasen ist die sofortige Krönung fast jeden Gartenprojekts in Ehringshausen. Wir bereiten den Mutterboden vor, planieren und verlegen den strapazierfähigen Rasen an einem Tag.' },
            { q: 'Welche Terrassenbeläge sind aktuell in Ehringshausen beliebt?', a: 'Neben Betonsteinpflaster (oft in edlen Anthrazit  oder Muschelkalktönen) verbauen wir aktuell sehr häufig witterungsbeständige 2cm Keramikplatten – pflegeleicht, farbecht und extrem luxuriös.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.600, lng: 8.383, radius: 4000 }
        },
        internalLinks: ['werdorf', 'asslar', 'solms', 'wetzlar']
    },
    {
        slug: 'leun',
        name: 'Leun',
        plz: '35638',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 5.700',
        entfernungKm: 10,
        fahrzeitMin: 12,
        geoCoordinates: [50.548, 8.351],

        heroVariant: 3,
        layoutProfile: 'C',
        motionProfile: 'playful',
        accentShift: -12,
        imageStyle: 'circular',

        headline: 'Landschafts Architektur am Ufer Lahn – Willkommen in Leun',
        subheadline: 'Im "Tor zum Westerwald" entwickeln wir maßgeschneiderte Gärten, die Natürlichkeit mit absoluter Premium Verarbeitung vereinen.',
        metaTitle: 'Landschaftsbau Leun | Premium Gartengestaltung | Memo BauT',
        metaDescription: 'Hochwertiger Garten  und Landschaftsbau in Leun an der Lahn (35638). Memo BauT erschafft Ihre Garten Oase mit Erfahrung, modernen Baustoffen und Präzision.',
        story: 'Directly an den Ufern der Lahn eingebettet und umrahmt von den dunkleren Ausläufern des Westerwalds, besitzt Leun einen ganz eigenen charmanten Mikrokosmos. Grundstücke hier fordern oft eine Auseinandersetzung mit der Nähe zum Wasser oder der Topografie der angrenzenden Hänge (wie in Biskirchen). Unsere Mission: Gartenanlagen schaffen, die diese naturnahe Atmosphäre von Leun respektieren, dabei aber modernste, langlebige Materialien integrieren.',
        topografie: 'Flache Areale im engen Lahntal, rasant ansteigende Wohngebiete in den angrenzenden Leuner Ortsteilen Biskirchen, Bissenberg und Lahnbahnhof.',
        gartenStil: 'Organische, naturbetonte Designs. Kurvige Beeteinfassungen, viel Bruchstein, harmonische Übergänge von Holzterrassen in lockere, naturnahe Grünflächen.',
        wohnstruktur: 'Traditionelle Bebauung in Ortskernen sowie großflächige ländliche Anwesen oberhalb des Flusstals.',
        lokalerBezug: ['Lahntal', 'Biskirchen', 'Heilquellen', 'Westerwald Ausläufer'],
        fokusLeistungen: ['Natursteinarbeiten', 'Loungebereiche am Wasser', 'Erdbau & Baggerarbeiten'],

        ctaPrimary: 'Kostenlosen Leun Termin vereinbaren',
        ctaSecondary: 'Leistungen durchsuchen',
        projektAnzahl: 38,

        faqItems: [
            { q: 'Planen Sie für Gärten in der Lahn Nähe spezielle Konzepte?', a: 'Gartengrundstücke, die im Feuchtigkeits Einflussbereich der Lahn liegen, bedürfen robuster Staunässe Toleranz. Wir drainieren Böden präzise und setzen auf entsprechende Materialien und Konstruktionen vor Ort in Leun.' },
            { q: 'Decken Sie in Leun auch Biskirchen und Bissenberg ab?', a: 'Absolut. Biskirchen liegt oft direkt auf unserem täglichen Anfahrtsweg für süd westliche Projekte. Termine in den gesamten Ortsteilen von Leun sind immer kostenfrei.' },
            { q: 'Übernehmen Sie Aushub und Erdarbeiten am Hang?', a: 'Durch unseren starken firmeneigenen Maschinenpark sind großflächige Erdarbeiten, Aufschüttungen und die Modulierung von Hang Grundstücken eine Standardleistung für Leuner Kunden.' },
            { q: 'Was ist der langlebigste Terrassenbelag in Wäldernähe?', a: 'Für Grundstücke nahe am Westerwald raten wir auf schattigen Terrassen oft von naturbelassenem Holz ab (Rutsch/Moos Gefahr) und empfehlen hochwertige Granit Vollformate oder WPC Dielen.' },
            { q: 'Wie läuft die Erstberatung vor Ort in Leun ab?', a: 'Wir sichten die Bodenverhältnisse, messen das Grundstück digital ein und besprechen detailliert Ihre stilistischen Wünsche, um einen Kostenvoranschlag und ein Design Konzept zu fertigen.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.548, lng: 8.351, radius: 4500 }
        },
        internalLinks: ['solms', 'braunfels', 'wetzlar', 'werdorf']
    },
    {
        slug: 'solms',
        name: 'Solms',
        plz: '35606',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 13.800',
        entfernungKm: 9,
        fahrzeitMin: 11,
        geoCoordinates: [50.539, 8.407],

        heroVariant: 1,
        layoutProfile: 'C',
        motionProfile: 'elegant',
        accentShift: 8,
        imageStyle: 'masked',

        headline: 'Exklusives Garten Design im Herzen von Solms',
        subheadline: 'Zwischen Lahn und Kloster Altenberg realisieren wir in Solms repräsentative Außenanlagen, private Wellness Gärten und präzise Pflasterarbeiten.',
        metaTitle: 'Gartenbau & Landschaftsarchitektur Solms | Memo BauT',
        metaDescription: 'Hochwertiger Garten  & Landschaftsbau in Solms (35606). Von modernen Vorgärten bis hin zu großflächigen Natursteinanlagen. Ihr Experte für Burgsolms & Oberbiel.',
        story: 'Solms profitiert von einer unschlagbaren Lagevielfalt: Idyllische Flussnähe (Lahn) trifft auf anspruchsvolle Hanggebiete und familienfreundliche Bebauungsstrukturen. Ein Solmser Garten vereint heute das Bedürfnis nach Privatsphäre mit dem Wunsch nach einer ganzjährigen Outdoor Wohnlandschaft. Wir konzipieren und bauen Anlagen, die sich wertsteigernd in das Solmser Umland (z.B. Burgsolms oder Oberbiel) einfügen und gleichzeitig individuelle, hochmoderne Akzente setzen.',
        topografie: 'Weite Ebenen an der Lahn wechseln sich in den Ortsteilen mit stark terrassierten Wohnlagen, vorwiegend Sand  und Lehmböden ab.',
        gartenStil: 'Reduzierte, architektonische Linien gemischt mit sattem Grün. Formgeschnittene Gehölze (Hecken), dunkle Keramikterrassen und Sichtschutzlösungen aus Holz oder edlem Metall.',
        wohnstruktur: 'Heterogene Mischung. Vom historischen Kern über ausgedehnte, reife Einfamilienhaus Siedlungen bis zu modernen Neubaukomplexen.',
        lokalerBezug: ['Kloster Altenberg', 'Klosterwald', 'Oberbiel', 'Burgsolms', 'Niederbiel'],
        fokusLeistungen: ['Sichtschutz & Zäune', 'Mauerbau & Gabionen', 'Vorgarten Aufwertung'],

        ctaPrimary: 'Termin in Solms vereinbaren',
        ctaSecondary: 'Natursteinauswahl',
        projektAnzahl: 79,

        faqItems: [
            { q: 'Empfehlen Sie für Gärten in der Lahn Nähe in Solms spezielle Materialien?', a: 'Aufgrund der hohen Luftfeuchtigkeit am Gewässer empfehlen wir zur Terrasseneinfassung auf verrottungsresistente, frostbeständige Natursteine (bspw. Basalt oder frostsicheren Muschelkalk) statt ungeschütztem Holz.' },
            { q: 'Errichten Sie auch großflächige Sichtschutzwände in engbebauten Solmser Wohngebieten?', a: 'Ja, Sichtschutz ist eines der Kernthemen in Solms. Wir bauen edle Holzzäune (z.B. Lärche), moderne HPL Sichtschutzwände oder minimalistische Aluminium Lamellen unter Einhaltung der Solmser Bebauungsgrenzen.' },
            { q: 'Unterstützen Sie bei den Erdarbeiten an schwierigen Hanglagen in Oberbiel?', a: 'Mit unserem Fuhrpark meistern wir komplexe Erdarbeiten. Aushub, Abtransport, Planierung und Verdichtung in Vorbereitung auf Terrassen oder Mauerbau sind unser Standard auf Solmser Baustellen.' },
            { q: 'Decken Sie in Solms alle Ortsteile wie Burgsolms, Oberbiel und Niederbiel ab?', a: 'Ja, das Stadtgebiet Solms inkl. Burgsolms liegt nur 10 Minuten von unserem Bauhof in Aßlar entfernt. Wir betreuen Projekte in allen Solmser Ortsteilen ohne Anfahrtskosten.' },
            { q: 'Werden Zufahrten zu Solmser Grundstücken in Pflaster oder Asphalt ausgeführt?', a: 'Im privaten Premium Segment dominiert hochwertiges Großformat Pflaster oder robustes Natursteinpflaster aus Design Gründen. Asphaltierungen führen wir im Wohnbereich weniger durch.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.539, lng: 8.407, radius: 5500 }
        },
        internalLinks: ['wetzlar', 'leun', 'braunfels', 'asslar']
    },
    {
        slug: 'braunfels',
        name: 'Braunfels',
        plz: '35619',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 11.200',
        entfernungKm: 12,
        fahrzeitMin: 16,
        geoCoordinates: [50.516, 8.388],

        heroVariant: 1,
        layoutProfile: 'A',
        motionProfile: 'cinematic',
        accentShift: 0,
        imageStyle: 'fullbleed',

        headline: 'Premium Gartenkultur in der Schlossstadt Braunfels',
        subheadline: 'Im Schatten des Märchenschlosses Braunfels realisieren wir repräsentative Villen Gärten, stilvolle Anlagen und erstklassige Pflaster Architektur.',
        metaTitle: 'Gartengestaltung & Landschaftsbau Braunfels | Premium Handwerk',
        metaDescription: 'Hochwertige Gartenarchitektur in Braunfels (35619). Naturstein, Terrassen und Pflasterarbeiten für exklusive Außenanlagen in der Schlossstadt.',
        story: 'Braunfels atmet Noblesse, geprägt durch das weit sichtbare "Märchenschloss" und den malerischen historischen Kern. Diese Luft der gediegenen Eleganz verlangt nach Gärten, die nicht nur Naturraum, sondern repräsentative Außen Salons sind. Für Braunfelser Projekte verwenden wir am liebsten archaische Natursteine (Wasserspiele aus dunklem Muschelkalk oder Granit) und präzise, formale Geometrien, die eine feine Balance zwischen der historischen Würde des Ortes und hypermoderner Ästhetik halten.',
        topografie: 'Die Gärten in Braunfels liegen oft spektakulär auf bewaldeten, steilen Kuppen (Schlossberg), oder flach angelegt in tiefergelegenen, bewaldeten Vorortteilen (Tiefenbach).',
        gartenStil: 'Prächtige, oft formale Strukturen ("Neo Klassizistisch" oder "Modern Manor"). Große Terrassen Ebenen, streng geschnittene Taxus Hecken, ausgedehnte Zufahrten aus Edelpflaster.',
        wohnstruktur: 'Viele edle, weitläufige Anwesen, renovierte Altbauten und repräsentative Villengebäude mit Parkähnlichen Grundstücken.',
        lokalerBezug: ['Schloss Braunfels', 'Kurpark Braunfels', 'Golfpark', 'Tiefenbach'],
        fokusLeistungen: ['Einfahrten & Edelpflaster', 'Wasserspiele & Teiche', 'Architektur Gärten'],

        ctaPrimary: 'Kostenlosen Braunfels Termin buchen',
        ctaSecondary: 'Portfolio Braunfels',
        projektAnzahl: 31,

        faqItems: [
            { q: 'Planen Sie in Braunfels auch Gärten in steil abfallender extremer Hanglage?', a: 'Gerade die topografischen Extreme um den Braunfelser Schlossberg fordern Meisterleistungen im Bau von Böschungssicherungen und Trockenmauern (teils in mehreren Ebenen), was uns besonders reizt.' },
            { q: 'Bieten Sie passendes Natursteinpflaster für historische Anwesen in der Braunfelser Altstadt?', a: 'Wir greifen bei Projekten nahe des Schlossareals häufig auf rustikale Materialien wie handgeschlagenes Basalt Kleinpflaster oder Porphyr zurück, was der historischen Kulisse Rechnung trägt.' },
            { q: 'Wie lange muss ich in Braunfels auf einen Vor Ort Termin für meinen Garten warten?', a: 'Dank der großen Nähe zu unserem Standort in Aßlar erfolgen Erstbesichtigungen oder Vermessungen im gesamten Kurstadtgebiet Braunfels in der Regel noch in der gleichen Woche der Anfrage.' },
            { q: 'Setzen Sie in Braunfels auf automatische Bewässerungssysteme?', a: 'Für die meist großflächigen und repräsentativen Gartenanlagen in Braunfels gehört eine smarte Unterflur Bewässerung (Bspw. Hunter oder Gardena SmartSystem) bei Neubauten fast zum Standard bei Memo Bau.' },
            { q: 'Werden auch in Tiefenbach oder Altenkirchen Grundstücke betreut?', a: 'Ja, unser Einsatzgebiet erstreckt sich lückenlos auf alle Eingemeindungen und Vororte von Braunfels.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.516, lng: 8.388, radius: 6000 }
        },
        internalLinks: ['wetzlar', 'solms', 'leun', 'schöffengrund']
    }
];
