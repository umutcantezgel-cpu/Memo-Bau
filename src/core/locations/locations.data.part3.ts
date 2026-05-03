import { CityConfig } from '../cityConfig.types';

export const LOCATIONS_PART3: CityConfig[] = [
    {
        slug: 'giessen',
        name: 'Gießen',
        plz: '35390',
        region: 'Landkreis Gießen',
        einwohner: 'ca. 91.000',
        entfernungKm: 20,
        fahrzeitMin: 23,
        geoCoordinates: [50.584, 8.674],

        heroVariant: 3, // Urban/Architectural
        layoutProfile: 'C',
        motionProfile: 'elegant',
        accentShift: 15,
        imageStyle: 'asymmetric',

        headline: 'Urbane Freiräume und Premium-Gärten in der Residenzstadt Gießen',
        subheadline: 'Von der kompakten Dachterrasse bis zur universitätsnahen Villa: Wir transformieren Gießener Grundstücke in atemberaubende Lebensräume.',
        metaTitle: 'Premium Garten- & Landschaftsbau Gießen | Memo BauT',
        metaDescription: 'Hochwertige Gartengestaltung in Gießen (35390). Spezialist für Dachterrassen, Smart Gardens, Poolanlagen und exklusive Stadtgärten. Jetzt Beratung anfordern.',
        story: 'Als Universitäts- und pulsierende Einkaufsstadt bietet Gießen ein extrem dichtes, urbanes Umfeld. Gärten hier sind Rückzugsorte par excellence – grüne Lungen im städtischen Trubel. Memo BauT entwirft für Gießener Kunden Anlagen, die das Konzept "Drinnen und Draußen" auflösen. Wir verlängern den Wohnraum durch exklusive Outdoor-Küchen, smarte Beleuchtungskonzepte und architektonische Wasserbecken, die selbst auf begrenztem Stadt-Raum maximale Wirkung entfalten.',
        topografie: 'Weitgehend flach im Lahntal gelegen, an den Stadträndern (z.B. Schiffenberg) und in den Vororten teils hügelig.',
        gartenStil: 'Progressiv und urban. Klare Strukturen, großformatige Beton- oder Keramikplatten, Sichtbeton-Wände gepaart mit vertikalen Gärten oder formalen Hecken.',
        wohnstruktur: 'Wachsende Stadt mit verdichteten Neubaugebieten, modernen Penthouses in Bahnhofsnähe und klassischen Villenvierteln (Philosophenwald).',
        lokalerBezug: ['Schiffenberg', 'Philosophenwald', 'Lahnauen', 'Botanischer Garten'],
        fokusLeistungen: ['Smart Home Gartentechnik', 'Dachterrassen & Lounges', 'Sichtschutz & Zäune'],

        ctaPrimary: 'Stadtgarten in Gießen anfragen',
        ctaSecondary: 'Designlinien entdecken',
        testimonialLocal: {
            text: 'Unser Garten im Gießener Mühlenviertel war winzig und unansehnlich. Memo BauT hat jeden Zentimeter genutzt: Mit maßgefertigten Cortenstahl-Pflanztrögen und hellen Keramikplatten wirkt die Terrasse jetzt dreimal so groß.',
            author: 'Sara & Tim W.',
            location: 'Gießen Zentrum',
            rating: 5
        },
        projektAnzahl: 154,

        faqItems: [
            { q: 'Ist es möglich, in engen Gießener Straßen Baumaterial für den Garten anzuliefern?', a: 'Die Logistik im urbanen Gießen beherrschen wir. Wir koordinieren Straßensperrungen oder arbeiten mit kleinen, wendigen Maschinen, um auch in Hinterhofgärten effizient zu bauen.' },
            { q: 'Begrünen Sie auch Dachterrassen in Gießener Neubauten?', a: 'Dachbegrünungen und die Ausstattung luxuriöser Penthouse-Terrassen mit automatischen Bewässerungssystemen und Pflanzgefäßen sind unser Spezialgebiet.' },
            { q: 'Bieten Sie für Gießener Kunden Smart-Garden-Systeme an?', a: 'Ja, Mähroboter, app-gesteuerte Premium-Beleuchtung und smarte Bewässerungssysteme integrieren wir nahtlos in unsere urbanen Gartenkonzepte.' },
            { q: 'Gestalten Sie auch Vorgärten an dicht befahrenen Gießener Straßen um?', a: 'Wir schaffen repräsentative, aber pflegeleichte Vorgärten, die durch moderne Mülltonnenhäuschen (oft Aluminium oder Holz) und smarte Beleuchtung die Straßenseite stark aufwerten.' },
            { q: 'Wie lange beträgt die Wartezeit auf ein Projekt in Gießen?', a: 'Für Erstberatungen in Gießen sind wir meist in derselben Woche vor Ort. Der Baubeginn richtet sich nach dem Material und liegt meist bei 4 bis 8 Wochen.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.584, lng: 8.674, radius: 10000 }
        },
        internalLinks: ['linden', 'langgoens', 'wetzlar', 'heuchelheim']
    },
    {
        slug: 'linden',
        name: 'Linden',
        plz: '35440',
        region: 'Landkreis Gießen',
        einwohner: 'ca. 13.000',
        entfernungKm: 18,
        fahrzeitMin: 18,
        geoCoordinates: [50.531, 8.649],

        heroVariant: 1,
        layoutProfile: 'B',
        motionProfile: 'dynamic',
        accentShift: -2,
        imageStyle: 'grid',

        headline: 'Garten-Exzellenz in Linden – modern, wertbeständig, präzise',
        subheadline: 'Vor den Toren Gießens realisieren wir in Großen-Linden und Leihgestern anspruchsvolle Premium-Außenanlagen für junge Familien und Genießer.',
        metaTitle: 'Landschaftsbau & Gartengestaltung Linden | Memo BauT',
        metaDescription: 'Ihr Partner für Garten- & Landschaftsbau in Linden (35440). Terrassen, Pflasterarbeiten, Rollrasen & Vorgartengestaltung. Direkt aus der Region.',
        story: 'Linden liegt an der Nahtstelle zwischen der Betriebsamkeit Gießens und ruhigerer, dörflicher Struktur. Hier treffen gewachsene Wohnviertel auf neue Familiensiedlungen. Unsere Gartenkonzepte für Linden verbinden beide Welten: Wir bauen pflegeleichte, kindgerechte und dennoch absolut hochklassige Wohlfühloasen. Eine breite Holzterrasse für lange Sommerabende, eingefasst von klaren Mauerabschlüssen, die den Wert der Immobilie langfristig steigern.',
        topografie: 'Leicht hügelig bis flach, eingebettet zwischen dem Gleiberger Land und der fruchtbaren Wetterau.',
        gartenStil: 'Moderner Familiengarten ("Modern Family"). Ausgedehnte, flache Premium-Rollrasenflächen treffen auf hochwertige WPC- oder Keramik-Terrassen ohne harte Ecken.',
        wohnstruktur: 'Viele neue, großflächige Einfamilienhaus-Siedlungen, umgeben von gepflegten älteren Wohnbeständen.',
        lokalerBezug: ['Großen-Linden', 'Leihgestern', 'Luhbachtal', 'Grenze zur Wetterau'],
        fokusLeistungen: ['Familien- & Spielgärten', 'Breite Terrassenanlagen', 'Pflaster-Sanierung'],

        ctaPrimary: 'Projekt in Linden besprechen',
        ctaSecondary: 'Terrassen-Beispiele ansehen',
        testimonialLocal: {
            text: 'Für unseren Neubau in Leihgestern brauchten wir quasi einmal "alles". Memo BauT hat vom groben Erdaushub über die 80qm Edelpflaster-Einfahrt bis zum Rollrasen fantastisch und zügig abgeliefert.',
            author: 'Familie D.',
            location: 'Linden-Leihgestern',
            rating: 5
        },
        projektAnzahl: 64,

        faqItems: [
            { q: 'Bauen Sie in Linden auch Gabionenwände zur Grundstücksabgrenzung?', a: 'Ja, als schneller und extrem pflegeleichter Sichtschutz sind Gabionen (Natursteinkörbe), gemischt mit Holzelementen, in Lindener Wohngebieten sehr gefragt.' },
            { q: 'Verwenden Sie kindgerechte, ungiftige Pflanzen?', a: 'Absolut. Bei Projekten für Familien in Linden steht Sicherheit an oberster Stelle. Wir verzichten auf stark giftige Pflanzen (wie Eibe oder Oleander) zugunsten blühender Stauden und Gräser.' },
            { q: 'Pflastern Sie auch die komplett neuen Zuwegungen für Wohnbauprojekte in Linden?', a: 'Unser Leistungsspektrum umfasst die volle Infrastruktur des Grundstücks: Randsteine, Regenrinnen, Hauszugänge und Parkplätze in professioneller Ausführung.' },
            { q: 'Lassen Sie nach Abschluss des Rasenlegens eine Anleitung da?', a: 'Jeder Kunde in Linden, dem wir Rollrasen oder Premium-Gewächse setzen, erhält von uns konkrete Pflege- und Bewässerungstipps für die erste Anwachsphase.' },
            { q: 'Bearbeiten Sie in Linden auch kleinere Vorgärten?', a: 'Selbstverständlich. Ein repräsentativer Vorgarten wertet eine Immobilie in Linden enorm auf, oft helfen schon moderne Briefkastenanlagen und clevere Pflanzkonzepte.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.531, lng: 8.649, radius: 5000 }
        },
        internalLinks: ['giessen', 'langgoens', 'heuchelheim', 'wetzlar']
    },
    {
        slug: 'langgoens',
        name: 'Langgöns',
        plz: '35428',
        region: 'Landkreis Gießen',
        einwohner: 'ca. 11.600',
        entfernungKm: 22,
        fahrzeitMin: 22,
        geoCoordinates: [50.496, 8.663],

        heroVariant: 4,
        layoutProfile: 'D',
        motionProfile: 'organic',
        accentShift: 4,
        imageStyle: 'fullbleed',

        headline: 'Natürliche Premiumgärten am Rande der Wetterau',
        subheadline: 'Zwischen Taunusausläufern und Gießener Becken erschaffen wir für Langgöns und seine Ortsteile hochwertige Außenanlagen, die mit der Landschaft harmonieren.',
        metaTitle: 'Gartengestaltung & Landschaftsbau Langgöns | Memo BauT',
        metaDescription: 'Maßgeschneiderter Garten- & Landschaftsbau in Langgöns (35428). Natursteinarbeiten, Hanggärten und Premium-Terrassen für Dornholzhausen, Niederkleen & Co.',
        story: 'Langgöns markiert geografisch das südliche Tor des Landkreises Gießen zur Wetterau. Die weitläufigere, landwirtschaftlich geprägte Struktur verlangt nach Gärten, die auf atmen können. Hier dominieren nicht enge Mauern, sondern großzügige Naturstein-Arrangements, weite Rasenflächen und organische Terrassen, die den Blick ins Grüne (Richtung Taunus oder Kleebachtal) nicht versperren. Memo BauT inszeniert das ländliche Premium-Lebensgefühl.',
        topografie: 'Weite Senken und sanfte Steigungen, besonders in den Ortsteilen (z.B. Espa, Cleeberg), die teils schon Taunus-Charakteristik aufweisen.',
        gartenStil: 'Moderner Country-Style. Viele geschwungene Linien, grober Naturstein, weiche Beete mit prächtigen Solitärgehölzen und warme, wetterbeständige WPC- oder Lärchen-Terrassen.',
        wohnstruktur: 'Große Familien-Anwesen, sanierte landwirtschaftliche Höfe und naturnahe Neubaugebiete.',
        lokalerBezug: ['Kleebachtal', 'Lückenbach', 'Ausläufer Taunus', 'Espa'],
        fokusLeistungen: ['Natursteingärten', 'Stützmauern am Hang', 'Großflächiges Pflastern'],

        ctaPrimary: 'Gartenwunsch in Langgöns äußern',
        ctaSecondary: 'Natursteingärten entdecken',
        testimonialLocal: {
            text: 'Unser abfallendes Grundstück in Niederkleen war schwer nutzbar. Memo BauT hat in zwei Wochen wunderschöne, geschwungene Trockenmauern aus Basalt gezogen. Der Garten ist nun auf drei Ebenen ein absolutes Highlight.',
            author: 'Heinrich M.',
            location: 'Langgöns-Niederkleen',
            rating: 5
        },
        projektAnzahl: 32,

        faqItems: [
            { q: 'Arbeiten Sie in allen Langgönser Ortsteilen (wie Cleeberg oder Espa)?', a: 'Ja, Langgöns mitsamt aller Ortsteile (Oberkleen, Niederkleen, Dornholzhausen, Cleeberg, Espa) gehört zu unserer regulären Service-Region. Es gibt keine versteckten Anfahrtskosten.' },
            { q: 'Haben Sie Erfahrung mit Hangabsicherungen in Waldnähe (wie in Espa)?', a: 'Die Topografie Richtung Taunus erfordert solide Expertise. Wir stützen Hänge langfristig sicher mit Schwergewichtsmauern (L-Steinen) oder mehrstufigen Natursteinwällen ab.' },
            { q: 'Pflastern Sie in den Langgönser Dörfern auch weitläufige Hofeinfahren?', a: 'Absolut. Das ländlichere Umfeld erfordert oft sehr große befestigte Flächen. Wir kalkulieren und verbauen Großformatpflaster mit professionellem Unterbau für hohe Belastungen.' },
            { q: 'Wie schnell ist das Team von Aßlar/Wetzlar aus in Langgöns?', a: 'Über die A45 und B3 sind unsere Teams in knapp 20 Minuten auf den Baustellen in Langgöns, wodurch wir sehr wirtschaftlich und flexibel agieren können.' },
            { q: 'Gestalten Sie auch Vorgärten zu bestehenden Altbauten?', a: 'Ein sensibler Umgang mit dem Bestand ist uns wichtig. Wir werten alte Hofeinfahrten oder Vorgärten durch moderne, pflegeleichte Pflanzbeete maßgeblich auf, ohne den Charme des Hauses zu zerstören.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.496, lng: 8.663, radius: 6000 }
        },
        internalLinks: ['linden', 'butzbach', 'giessen', 'huettenberg']
    },
    {
        slug: 'butzbach',
        name: 'Butzbach',
        plz: '35510',
        region: 'Wetteraukreis',
        einwohner: 'ca. 27.200',
        entfernungKm: 30,
        fahrzeitMin: 28,
        geoCoordinates: [50.435, 8.672],

        heroVariant: 2,
        layoutProfile: 'A',
        motionProfile: 'cinematic',
        accentShift: 8,
        imageStyle: 'asymmetric',

        headline: 'Premium-Gartenarchitektur in der Perle der Wetterau',
        subheadline: 'Wo historisches Fachwerk auf moderne Wohnkultur trifft. Wir erschaffen in Butzbach exklusive Gartenlandschaften und repräsentative Hofeinfahrten.',
        metaTitle: 'Gartengestaltung & Landschaftsbau Butzbach | Memo BauT',
        metaDescription: 'Exklusiver Garten- und Landschaftsbau in Butzbach (35510). Terrassen, Pflasterarbeiten und Vorgärten auf höchstem Niveau für die gesamte Wetterau.',
        story: 'Butzbachs historischer Marktplatz und die Fachwerk-Herrlichkeit sind weit über die Wetterau hinaus bekannt. Wer hier baut oder saniert, legt Wert auf Qualität und Ästhetik. Ein Garten von Memo BauT in Butzbach ist nicht nur eine Grünfläche, er ist das Outdoor-Statement eines kultivierten Lebensstils. Von edel gepflasterten Zufahrten bis hin zu minimalistischen Pool-Umrandungen im Butzbacher Umland – wir verbinden traditionelles Handwerk mit ultramodernem Design.',
        topografie: 'Übergang zwischen dem fruchtbaren, flacheren Wetterauer Land und den bewaldeten, ansteigenden Ausläufern des Taunus (Richtung Hoch-Weisel).',
        gartenStil: 'Eine elegante Liaison aus klassisch-formalen Elementen (wie architektonischen Wasserbecken) und üppigen, modernen Staudenpflanzungen. Großformat-Keramik dominiert bei Terrassen.',
        wohnstruktur: 'Traditionsreiche Altbau-Quartiere wechseln mit ausgedehnten, sehr hochwertigen Neubaugebieten (z.B. Limespark).',
        lokalerBezug: ['Historischer Marktplatz', 'Landgräfliches Schloss', 'Limes-Verlauf', 'Taunus-Waldrand'],
        fokusLeistungen: ['Premium Pflasterung', 'Pool- & Loungebereiche', 'Regenwassermanagement'],

        ctaPrimary: 'Premium-Garten Butzbach planen',
        ctaSecondary: 'Designlinien ansehen',
        testimonialLocal: {
            text: 'Für unser neues Architektenhaus brauchten wir eine Außenanlage, die das reduzierte Design des Hauses fortführt. Memo BauT hat mit riesigen Betonplatten und exakten Splittbeeten ein Meisterwerk geschaffen.',
            author: 'Katharina H.',
            location: 'Butzbach Kernstadt',
            rating: 5
        },
        projektAnzahl: 55,

        faqItems: [
            { q: 'Planen Sie in Butzbach auch Regenwasser-Versickerungsanlagen in den Garten ein?', a: 'Da die Versiegelung vielerorts in der Wetterau reglementiert ist, integrieren wir smarte Zisternen, Eco-Pflaster oder Retentions-Mulden nahtlos und unsichtbar in das Gartendesign.' },
            { q: 'Kann ich in Butzbach auch eine Keramik-Terrasse in Holzoptik bekommen?', a: 'Das ist derzeit einer der größten Trends. Wir verbauen in Butzbach regelmäßig hochwertige 2cm-Keramikplatten in extrem realistischer Holzdekor-Optik – massiv witterungsbeständig und splitterfrei.' },
            { q: 'Gestalten Sie auch komplett umfriedete Hofinnenanlagen im Butzbacher Altstadtkern?', a: 'Hinterhofgärten in historischen Strukturen verlangen Maßarbeit. Mit kleinen Baggern und smarter Logistik verwandeln wir auch versteckte Butzbacher Innenhöfe in grüne Lounges.' },
            { q: 'Lassen sich große Grundstücke in den Butzbacher Randorten (Griedel, Pohl-Göns) günstig einfrieden?', a: 'Wir berechnen individuell. Für weite Strecken bieten hochwertige Doppelstabmatten-Systeme – auf Wunsch mit efeuberanktem Sichtschutz – die eleganteste und sicherste Lösung.' },
            { q: 'Verwenden Sie regionale Pflanzen, die das Wetterauer Klima vertragen?', a: 'Butzbach ist sehr sonnenverwöhnt. Wir wählen für Butzbacher Gärten klimaresiliente Gehölze (oft südeuropäischen Ursprungs) oder extrem robuste Gräser, die den Hitzesommern trotzen.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.435, lng: 8.672, radius: 8000 }
        },
        internalLinks: ['langgoens', 'bad-nauheim', 'friedberg', 'giessen']
    },
    {
        slug: 'bad-nauheim',
        name: 'Bad Nauheim',
        plz: '61231',
        region: 'Wetteraukreis',
        einwohner: 'ca. 33.300',
        entfernungKm: 38,
        fahrzeitMin: 32,
        geoCoordinates: [50.366, 8.742],

        heroVariant: 5,
        layoutProfile: 'C',
        motionProfile: 'elegant',
        accentShift: 12,
        imageStyle: 'circular',

        headline: 'Jugendstil, Kurparks & private Gartenpaläste in Bad Nauheim',
        subheadline: 'Der hohe Anspruch der Gesundheitsstadt verlangt exklusive Maßstäbe. Wir kreieren Gartenlandschaften von aristokratischer Eleganz bis hin zur modernen Smart-Lounge.',
        metaTitle: 'Premium Gartengestaltung & Landschaftsbau Bad Nauheim | Memo BauT',
        metaDescription: 'Memo BauT bringt exklusiven Landschaftsbau in die Kurstadt Bad Nauheim (61231). Dachterrassen, Natursteinmauern und Smart-Home-Gärten in Premium-Qualität.',
        story: 'Bad Nauheim atmet Geschichte – vom Sprudelhof bis zur prachtvollen Jugendstil-Architektur. Das Bewusstsein für Ästhetik, Parkanlagen und Erholung ist in der DNA der Stadt verankert. Die privaten Gärten Bad Nauheimer Kunden zeichnen sich durch den Wunsch nach exklusiven Rückzugsorten, formvollendeter Linienführung und dem Einsatz teuerster Baumaterialien aus (z.B. heller Travertin, Quarzit, Maßanfertigungen in Cortenstahl). Memo BauT liefert diese Premium-Exzellenz.',
        topografie: 'Umgeben von Ausläufern des Taunus im Westen, öffnet sich Bad Nauheim sanft zur Wetterau-Ebene im Osten. Herrliche Hanglagen (z.B. Johannisberg-Nähe).',
        gartenStil: 'Von klassischen "Neo-Barocken" Gartenformen bei den Villen im Kurgebiet bis hin zu minimalistischen "Zen"-Gärten vor hochmodernen Penthouses.',
        wohnstruktur: 'Hohe Dichte an kernsanierten Altbau-Villen, großbürgerlichen Anwesen und sehr hochwertigen, modernen Wohnkomplexen am Stadtrand.',
        lokalerBezug: ['Sprudelhof', 'Kurpark', 'Johannisberg', 'Goldsteintal'],
        fokusLeistungen: ['Smart Home Gartentechnik', 'Keramik- & Edelpflaster', 'Repräsentative Vorgärten'],

        ctaPrimary: 'Villen-Garten in Bad Nauheim planen',
        ctaSecondary: 'Premium-Leistungen',
        testimonialLocal: {
            text: 'Der Anspruch an unseren Garten nahe dem Kurpark war enorm. Memo BauT hat ein Licht- und Natursteinkonzept umgesetzt, das die Architektur unserer Jugendstil-Villa nachts wie ein Museum anstrahlt. Ein Meisterwerk.',
            author: 'Dr. von A.',
            location: 'Bad Nauheim',
            rating: 5
        },
        projektAnzahl: 61,

        faqItems: [
            { q: 'Bieten Sie die Konzeption kompletter Villen-Auffahrten mit Edelpflaster in Bad Nauheim an?', a: 'Der repräsentative Empfang (oft mit Natursteinpflasterbögen, integrierter Bodenbeleuchtung und Tor-Elektronik-Vorbereitung) gehört bei Bad Nauheimer Villen zu unserer absoluten Paradedisziplin.' },
            { q: 'Verlegen Sie Travertin oder Marmor für Bad Nauheimer Terrassen?', a: 'Ja, helle, südeuropäische Natursteine wie Travertin passen stilistisch hervorragend nach Bad Nauheim. Wir wählen stets absolut frostbeständige Selektionen für unsere Projekte.' },
            { q: 'Konzipieren Sie Bewässerung und Pflege direkt so, dass der Garten autark sein kann?', a: 'Ein "Smart Garden" ist der Standard im Premium-Segment Bad Nauheims. Unterflur-Bewässerungen von Hunter oder Gardena werden per App gesteuert und arbeiten mit lokalen Wetterdaten.' },
            { q: 'Können Sie den Denkmalschutz bei historischen Bad Nauheimer Gärten berücksichtigen?', a: 'Wir haben ein hohes Gespür für die Historie des Ortes und passen Sichtschutz- oder Mauerwerke (oft mit historischem Klinker oder Naturstein) gefühlvoll an das Gesamtbild an, ohne modernste Baustandards zu missachten.' },
            { q: 'Deckt Memo BauT auch die Ortsteile wie Schwalheim oder Nieder-Mörlen ab?', a: 'Absolut. Wir betreuen exklusive Gartenprojekte im gesamten Bad Nauheimer Stadtgebiet und den umliegenden Wetterau-Gemeinden.' }
        ],
        schemaServiceArea: {
            type: 'GeoCircle',
            circle: { lat: 50.366, lng: 8.742, radius: 7000 }
        },
        internalLinks: ['butzbach', 'friedberg', 'oberursel', 'bad-homburg']
    }
];
