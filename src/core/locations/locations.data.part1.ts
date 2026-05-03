import { CityConfig } from '../cityConfig.types';

export const LOCATIONS_PART1: CityConfig[] = [
    {
        slug: 'werdorf',
        name: 'Werdorf',
        plz: '35614',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 3.200',
        entfernungKm: 0,
        fahrzeitMin: 0,
        geoCoordinates: [50.605, 8.441],

        heroVariant: 1,
        layoutProfile: 'A',
        motionProfile: 'cinematic',
        accentShift: 0,
        imageStyle: 'fullbleed',

        headline: 'Gartenarchitektur in Werdorf – Wo unsere Wurzeln liegen',
        subheadline: 'An unserem Stammsitz verschmelzen meisterliche Handwerkstradition und visionäres Gartendesign.',
        metaTitle: 'Premium Garten- & Landschaftsbau Werdorf | Memo-BauT',
        metaDescription: 'Ihr Experte für exklusiven Landschaftsbau direkt in Werdorf (35614). Von der 3D-Gartenplanung über Natursteinmauern bis zur Pflege. Kostenlose Erstberatung.',
        story: 'Werdorf ist historisch unser Ursprung und ein Herzstück von Memo-BauT. Aus diesem historischen Ort im Dilltal heraus haben wir uns der Transformation hessischer Gärten verschrieben. Die dörfliche Struktur mit ihren tiefen Gärten und dem direkten Bezug zur umgebenden Natur prägt unser Verständnis von Landschaftsbau: echt, beständig und im Einklang mit der Region.',
        topografie: 'Eingebettet in das sanfte Tal der Dill bietet Werdorf mit seinen leichten Hanglagen ideale Voraussetzungen für terrassierte Gartenkonzepte und Trockenmauern.',
        gartenStil: 'Moderne Landhausgärten, großzügige Familienparadiese und robuste Naturstein-Ensembles prägen das Bild der hochwertigen Werdorfer Außenanlagen.',
        wohnstruktur: 'Großzügige Einfamilienhäuser mit tiefen Grundstücken, oft am Hang gelegen.',
        lokalerBezug: ['Schloss Werdorf', 'Dillauen', 'Historischer Ortskern'],
        fokusLeistungen: ['Komplette Neuanlagen', 'Naturstein-Terrassierung', 'Premium Rollrasen'],

        ctaPrimary: 'Projekt in Werdorf starten',
        ctaSecondary: 'Unsere Referenzen',
        testimonialLocal: {
            text: 'Ein Team aus dem eigenen Ort, das mit unglaublicher Präzision arbeitet. Unser Garten am Hang wurde durch die Terrassierung zu einem echten Wohnraum im Freien.',
            author: 'Familie S.',
            location: 'Werdorf',
            rating: 5
        },
        projektAnzahl: 142,

        faqItems: [
            { q: 'Sind Sie als lokales Unternehmen auch überregional tätig?', a: 'Ja, unser Hauptsitz ist im nahen Aßlar, aber wir betreuen exklusive Gartenprojekte im gesamten Lahn-Dill-Kreis sowie dem Rhein-Main-Gebiet.' },
            { q: 'Welche Materialien empfehlen Sie für Werdorfer Gärten?', a: 'Aufgrund der Bodenbeschaffenheit und der Hanglagen in Werdorf setzen wir häufig auf Grauwacke oder regionalen Basalt für langlebige Stützmauern.' },
            { q: 'Wie schnell können Sie ein Projekt in Werdorf starten?', a: 'Durch die unmittelbare Nähe unseres Bauhofs können wir Bauprojekte in Werdorf oft besonders flexibel und zeitnah einsteuern.' },
            { q: 'Bieten Sie auch die Pflege bestehender Gärten in Werdorf an?', a: 'Selbstverständlich. Für unsere Werdorfer Kunden bieten wir maßgeschneiderte Pflegekonzepte für einen dauerhaft perfekten Garten.' },
            { q: 'Helfen Sie auch bei der Baugenehmigung für Terrassen in Werdorf?', a: 'Wir unterstützen unsere Kunden in Werdorf (Aßlar) kompetent bei allen planungsrechtlichen Fragen rund um größere landschaftsbauliche Veränderungen.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.605, lng: 8.441, radius: 5000 }
        },
        internalLinks: ['asslar', 'ehringshausen', 'solms', 'wetzlar']
    },
    {
        slug: 'asslar',
        name: 'Aßlar',
        plz: '35614',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 13.800',
        entfernungKm: 3,
        fahrzeitMin: 5,
        geoCoordinates: [50.588, 8.460],

        heroVariant: 5,
        layoutProfile: 'E',
        motionProfile: 'dynamic',
        accentShift: 5,
        imageStyle: 'grid',

        headline: 'Exklusiver Landschaftsbau in Aßlar – Direkte Nachbarschaft, höchste Qualität',
        subheadline: 'Nur fünf Minuten von unserem Bauhof entfernt, realisieren wir in Aßlar Gartenträume mit maximaler Effizienz und lokaler Expertise.',
        metaTitle: 'Gartengestaltung & Landschaftsbau Aßlar | Memo-BauT',
        metaDescription: 'Ihr Premium-Partner für Gartengestaltung in Aßlar (35614). Terrassenbau, Pflasterarbeiten & Neuanlagen von Ihrem Experten direkt aus der Nachbarschaft.',
        story: 'Für Memo-BauT ist Aßlar mehr als nur das benachbarte Stadtgebiet – es ist unser tägliches Einsatzgebiet. Die direkte geographische Nähe ermöglicht uns eine unfassbare Reaktionsgeschwindigkeit und logistische Perfektion, die bei aufwendigen Landschaftsbau-Projekten den entscheidenden Unterschied macht. In Aßlar kennt man unsere anthrazitfarbenen Fahrzeuge.',
        topografie: 'Die abwechslungsreiche Topografie Aßlars, geprägt von den bewaldeten Hängen des Dilltals und den urbaneren Tallagen, erfordert smarte Entwässerungs- und Stützkonzepte.',
        gartenStil: 'Aßlar zeigt einen spannenden Mix aus gepflegten Stadtgärten im Zentrum und ausgedehnten, naturnahen Familienresidenzen in den Höhenlagen wie Werdorf oder Berghausen.',
        wohnstruktur: 'Heterogene Bebauung mit Fokus auf Einfamilienhäusern und Doppelhaushälften in Hanglage.',
        lokalerBezug: ['Laguna Aßlar', 'Dillauen', 'Gewerbegebiet'],
        fokusLeistungen: ['Wassermanagement & Zisternen', 'Pflasterarbeiten', 'Pflegeleichte Gärten'],

        ctaPrimary: 'Gartenprojekt in Aßlar planen',
        ctaSecondary: 'Bisherige Aßlar-Projekte',
        testimonialLocal: {
            text: 'Die Nähe von Werdorf nach Aßlar war ein riesiger Vorteil. Das Team war jeden Morgen pünktlich an der Baustelle und die Abstimmung war extrem unkompliziert. Das Ergebnis: Ein Traum von einem Naturstein-Sitzplatz.',
            author: 'Eheleute M.',
            location: 'Aßlar-Kernstadt',
            rating: 5
        },
        projektAnzahl: 87,

        faqItems: [
            { q: 'Fallen für Projekte in Aßlar Anfahrtskosten an?', a: 'Als lokales Unternehmen aus Aßlar entfallen bei Projekten in unserem Stadtgebiet die Anfahrtskosten vollständig.' },
            { q: 'Übernehmen Sie in Aßlar auch kleine Pflasterarbeiten?', a: 'Ja, als lokaler Partner in der Stadt Aßlar übernehmen wir neben komplett neuen Gartenanlagen auch gezielte Sanierungen von Einfahrten oder Gehwegen.' },
            { q: 'Haben Sie Erfahrung mit der Bodenbeschaffenheit in den Aßlarer Höhenlagen?', a: 'Absolut. Der teils lehmige und felsige Untergrund in Berghausen oder Aßlar-Nord ist uns bestens vertraut. Entsprechende Drainagen planen wir standardmäßig ein.' },
            { q: 'Gibt es Referenzgärten in Aßlar, die ich ansehen kann?', a: 'Wir haben bereits zahlreiche Projekte in Aßlar realisiert. Nach Absprache können wir Ihnen diskrete Straßenansichten unserer Arbeiten in Ihrer direkten Nachbarschaft nennen.' },
            { q: 'Wie schnell bekommen wir in Aßlar einen Termin?', a: 'Für Erstbesichtigungen in Aßlar können wir aufgrund der Nähe oft spontane Termine innerhalb weniger Tage anbieten.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.588, lng: 8.460, radius: 4000 }
        },
        internalLinks: ['werdorf', 'ehringshausen', 'wetzlar']
    },
    {
        slug: 'wetzlar',
        name: 'Wetzlar',
        plz: '35578',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 53.000',
        entfernungKm: 8,
        fahrzeitMin: 12,
        geoCoordinates: [50.555, 8.504],

        heroVariant: 3,
        layoutProfile: 'C',
        motionProfile: 'elegant',
        accentShift: 10,
        imageStyle: 'asymmetric',

        headline: 'Urbane Gartenikonen in der Goethe-Stadt Wetzlar',
        subheadline: 'Wo historische Bedeutung auf zeitgenössisches Premium-Gartendesign trifft. Wir schaffen exklusive Rückzugsorte im Lahn-Dill-Kreis-Zentrum.',
        metaTitle: 'Garten- & Landschaftsbau Wetzlar | Premium Design | Memo-BauT',
        metaDescription: 'Hochwertiger Garten- und Landschaftsbau in Wetzlar (35578). Smart-Gardens, Dachterrassen & Exklusive Anlagen. Vereinbaren Sie jetzt Ihre Premium-Beratung.',
        story: 'Wetzlar pulsiert. Als wirtschaftliches und kulturelles Zentrum der Region treffen hier moderne Architektur, historische Bausubstanz und urbanes Leben aufeinander. Ein Garten in Wetzlar muss heute oft mehr sein als eine Rasenfläche: Er ist erweiterter Wohnraum, repräsentative Lounge und grüner Ausgleich zum Stadtleben. Memo-BauT bringt genau diese Symbiose aus städtischem Luxus und Naturerleben in die Wetzlarer Grundstücke.',
        topografie: 'Die Tallage an der Lahn umgeben von teils steilen Höhenrücken (wie Kalsmunt) schafft mikroklimatisch interessante und bautechnisch anspruchsvolle Gartengrundstücke.',
        gartenStil: 'Der Fokus liegt auf repräsentativen, oft reduzierten Architektur-Gärten mit starken Kontrasten: Beton, Cortenstahl, glattes Wasser und gezielte Premium-Bepflanzung.',
        wohnstruktur: 'Von Stadtvillen am Stoppelberg bis hin zu modernen Penthouse-Wohnungen mit weitreichenden Dachterrassen in Dalheim oder an der Lahn.',
        lokalerBezug: ['Lahnpark', 'Kalsmunt', 'Dom zu Wetzlar', 'Stoppelberg'],
        fokusLeistungen: ['Smart Home Gärten', 'Dachterrassen & Lounges', 'Sichtschutz & Zäune'],

        ctaPrimary: 'Stadtgarten in Wetzlar anfragen',
        ctaSecondary: 'Designlinien entdecken',
        testimonialLocal: {
            text: 'Unser Garten in Wetzlar-Stoppelberg war eine echte Herausforderung durch das abfallende Gelände. Memo-BauT hat ein mehrstufiges Terrassenkonzept erschaffen, das wie aus einem Architekturmagazin wirkt. Absolute Premium-Arbeit!',
            author: 'Dr. von T.',
            location: 'Wetzlar',
            rating: 5
        },
        projektAnzahl: 115,

        faqItems: [
            { q: 'Planen Sie in Wetzlar auch kleine, städtische Gartenflächen?', a: 'Gerade die Begrenzung des Raums macht städtische Gärten in Wetzlar spannend. Wir maximieren die Wirkung auf kleinen Grundstücken durch vertikales Grün, smarte Raumaufteilung und hochwertige Materialien.' },
            { q: 'Können Baumaterialien auch in enge Straßen der Wetzlarer Altstadt geliefert werden?', a: 'Logistik ist unsere Stärke. Wir verfügen über einen modernen Fuhrpark, der auch in schwierigen Zufahrtssituationen in Wetzlar (z.B. Hanglagen oder engere Gassen) Material präzise anliefern und Bagger setzen kann.' },
            { q: 'Integrieren Sie Beleuchtung direkt in das Gartenkonzept für Wetzlar?', a: 'Ja, Premium-Gärten zeichnen sich durch Lichtkonzepte aus. Wir installieren smarte, app-gesteuerte LED-Systeme (Smart Garden), die Ihren Wetzlarer Garten nachts in Szene setzen.' },
            { q: 'Bieten Sie auch die Bepflanzung von Dachterrassen in Wetzlar an?', a: 'Zunehmend. Hochwertige Pflanzgefäße, automatische Bewässerung und windresistente Bepflanzungskonzepte gehören zu unserer Expertise für Wetzlarer Penthouses.' },
            { q: 'Übernehmen Sie bei Baumfällungen in Wetzlar die Genehmigungsverfahren?', a: 'Sollten für notwendige Fällungen in Ihrem Wetzlarer Garten städtische Genehmigungen nötig sein, beraten wir Sie gerne zum lokalen Baumschutz-Protokoll der Stadt Wetzlar.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.555, lng: 8.504, radius: 8000 }
        },
        internalLinks: ['asslar', 'solms', 'braunfels', 'lahnau']
    },
    {
        slug: 'dillenburg',
        name: 'Dillenburg',
        plz: '35683',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 23.300',
        entfernungKm: 22,
        fahrzeitMin: 22,
        geoCoordinates: [50.738, 8.286],

        heroVariant: 4,
        layoutProfile: 'D',
        motionProfile: 'organic',
        accentShift: -5,
        imageStyle: 'masked',

        headline: 'Gartenkunst mit Charakter in der Oranierstadt Dillenburg',
        subheadline: 'Ob historisches Umfeld oder moderne Neubausiedlung: Wir übersetzen den Dillenburger Landschaftscharakter in private Gartenresidenzen.',
        metaTitle: 'Gartengestaltung & Landschaftsbau Dillenburg | Memo-BauT',
        metaDescription: 'Hochwertiger Garten- und Landschaftsbau für Dillenburg (35683). Natursteinarbeiten, Hanggärten und Pflasterbau in Premium-Qualität aus Hessen.',
        story: 'Dillenburg ist geprägt von seiner stolzen Geschichte und der umgebenden Naturlandschaft. Ein Garten hier muss Charakter haben. Er muss sich behaupten gegen die bewaldeten Hänge, sich einfügen in die teils historische Bausubstanz und dabei modernen Wohnkomfort im Freien bieten. Memo-BauT versteht diesen Spagat und kreiert Außenanlagen, die beständig sind wie das Oranier-Schloss, aber luxuriös wie ein modernes Boutique-Hotel.',
        topografie: 'Starke Steigungen, tiefe Täler und oft feste, felsige Untergründe definieren den Dillenburger Landschaftsbau. Trockenmauern sind hier oft technische Notwendigkeit.',
        gartenStil: 'Rustikale Eleganz ist gefragt. Viel schwerer Naturstein, kombiniert mit weicher, üppiger Bepflanzung (Stauden, Gräser) und warmen Holzterrassen.',
        wohnstruktur: 'Traditionsreiche Wohnstraßen treffen auf hochgelegene, modern strukturierte Neubauquartiere mit Panoramablick.',
        lokalerBezug: ['Wilhelmsturm', 'Schlossberg', 'Hofgarten', 'Dill'],
        fokusLeistungen: ['Natursteinmauern & Hangsicherung', 'Großflächige Pflasterungen', 'Gartensanierung'],

        ctaPrimary: 'Garten in Dillenburg anfragen',
        ctaSecondary: 'Natursteingärten ansehen',
        testimonialLocal: {
            text: 'Unser rutschender Hang in Dillenburg-Manderbach wurde von Memo-BauT nicht nur gesichert, sondern durch wunderschöne, massive Natursteinmauern in drei nutzbare Ebenen verwandelt.',
            author: 'Andreas K.',
            location: 'Dillenburg',
            rating: 5
        },
        projektAnzahl: 64,

        faqItems: [
            { q: 'Haben Sie Erfahrung mit der Abstützung steiler Grundstücke in Dillenburg?', a: 'Absolut. Das Dillenburger Umland verlangt oft nach massiver Geländemodulation. Wir sind Experten für L-Steine, Gabionen und massive Naturstein-Trockenmauern zur Hangabstützung.' },
            { q: 'Verbauen Sie auch regionale Steinsorten?', a: 'Um den Dillenburger Charakter zu treffen, arbeiten wir gerne mit Grauwacke oder heimischem Basalt, importieren auf Wunsch aber auch exklusive Keramik für Terrassen.' },
            { q: 'Fahren Sie für Erstberatungen bis nach Dillenburg oder in die Ortsteile?', a: 'Ja, Dillenburg, Eibach, Frohnhausen Manderbach und Nanzenbach gehören zu unserem nordwestlichen Kerngebiet. Termine vor Ort in der gesamten Dillenburger Gemarkung sind kostenlos.' },
            { q: 'Bieten Sie auch Bepflanzungskonzepte an, die im winterkalten Dillenburger Umland überleben?', a: 'Wir achten bei der Pflanzenwahl strikt auf die klimatischen Besonderheiten (+ Winterhärtezonen) des Westerwald-Randes, an dem Dillenburg liegt.' },
            { q: 'Übernehmen Sie in Dillenburg auch Pflasterarbeiten für lange Auffahrten?', a: 'Ja, wir betonieren und pflastern großflächige Einfahrten präzise und tragfähig, oft notwendig bei weiter in den Hang gebauten Häusern in Dillenburg.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.738, lng: 8.286, radius: 6000 }
        },
        internalLinks: ['herborn', 'sinn', 'greifenstein', 'mittenaar']
    },
    {
        slug: 'herborn',
        name: 'Herborn',
        plz: '35745',
        region: 'Lahn-Dill-Kreis',
        einwohner: 'ca. 20.600',
        entfernungKm: 15,
        fahrzeitMin: 18,
        geoCoordinates: [50.682, 8.303],

        heroVariant: 4,
        layoutProfile: 'D',
        motionProfile: 'organic',
        accentShift: 2,
        imageStyle: 'fullbleed',

        headline: 'Gartengestaltung im Einklang mit Herborns Fachwerk-Erbe',
        subheadline: 'Moderne Landschaftsarchitektur, die den historischen und naturnahen Charakter von Herborn respektiert und auf ein Premium-Level anhebt.',
        metaTitle: 'Gartengestaltung Herborn | Premium Landschaftsbau | Memo-BauT',
        metaDescription: 'Hochwertiger Garten- & Landschaftsbau in Herborn (35745). Wir verbinden traditionelles Natursteinhandwerk mit modernem Garten-Design. Erstberatung sichern.',
        story: 'Herborns Altstadt ist berühmt für ihr geschlossenes Fachwerk-Ensemble, umrahmt vom Westerwald. Gärten in Herborn und den umliegenden Tälern fordern Sensibilität für das Gewachsene. Bei Memo-BauT verstehen wir es, präzise, geometrische Linienführungen und moderne Lifestyle-Terrassen so zu inszenieren, dass sie harmonisch mit den traditionellen Bauten oder den ausladenden Naturgrundstücken in der Herborner Peripherie interagieren.',
        topografie: 'Eine grüne Kesselanlage im Dilltal. Sanfte bis moderate Steigungen fordern oft terrassierte Gartenebenen.',
        gartenStil: 'Ein eleganter Mix aus Modern-Country, viel heimischem Holz, Natursteinmauern zur Terrassierung und weichen, insektenfreundlichen Pflanzungen.',
        wohnstruktur: 'Historischer Kern umrandet von gewachsenen, grünen Vorstädten und familienfreundlichen Neubau-Arealen.',
        lokalerBezug: ['Herborner Schloss', 'Aartalsee-Nähe', 'Historische Altstadt', 'Wildgehege'],
        fokusLeistungen: ['Vorgartengestaltung', 'Nachhaltige Bepflanzung', 'Pool- & Teich-Landschaften'],

        ctaPrimary: 'Herborner Gartenprojekt starten',
        ctaSecondary: 'Leistungsportfolio',
        testimonialLocal: {
            text: 'Unser Grundstück im Herborner Umland wurde durch Memo-BauT komplett umgekrempelt. Aus einer unebenen Rasenfläche wurde ein gegliederter Naturgarten mit Bruchsteinmauer und einer atemberaubenden Terrasse.',
            author: 'Fam. K.',
            location: 'Herborn',
            rating: 5
        },
        projektAnzahl: 79,

        faqItems: [
            { q: 'Passen moderne Terrassenplatten (Keramik) zu einem älteren Haus in Herborn?', a: 'Absolut. Der Kontrast zwischen historischem Fachwerk oder Altbau und einer großformatigen, modernen Keramik-Terrasse wirkt oft extrem hochwertig und frisch.' },
            { q: 'Planen Sie auch Teiche in Herborn?', a: 'Ja, vom naturnahen Schwimmteich bis zum formalen, architektonischen Wasserbecken designen und bauen wir Wasserlandschaften für Herborner Grundstücke.' },
            { q: 'Gestalten Sie in Herborn auch anspruchsvolle Vorgärten?', a: 'Der Vorgarten ist die Visitenkarte des Hauses. Wir entwerfen für unsere Herborner Kunden pflegeleichte, repräsentative Vorgärten, oft mit integrierten Mülltonnen-Boxen und edlen Briefkasten-Stelen.' },
            { q: 'Können Sie den Aushub für Gärten in Herborn entsorgen?', a: 'Wir berechnen die Erdmassen vorab und übernehmen bei Herborner Projekten die komplette Logistik, inklusive fachgerechter Entsorgung oder dem Wiedereinbau auf dem Grundstück.' },
            { q: 'Wie schnell nach meiner Anfrage aus Herborn melden Sie sich?', a: 'Wir nehmen telefonische und Online-Anfragen sofort auf. In der Regel melden wir uns innerhalb von 24 Stunden, um einen Termin direkt in Ihrem Herborner Garten zu vereinbaren.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.682, lng: 8.303, radius: 5000 }
        },
        internalLinks: ['sinn', 'dillenburg', 'greifenstein', 'mittenaar']
    }
];
