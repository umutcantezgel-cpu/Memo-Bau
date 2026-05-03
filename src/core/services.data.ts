/**
 * ═══════════════════════════════════════════════════════════════
 * MEMO BAUT — SERVICE DETAIL DATA
 * Tiefe, einzigartige Inhalte für jede Leistungs-Detailseite.
 * Geschrieben aus der Perspektive eines erfahrenen GaLaBau-Meisters.
 * ═══════════════════════════════════════════════════════════════
 */

export interface ServiceDetail {
    slug: string;
    serviceId: number;
    title: string;
    metaTitle: string;
    metaDescription: string;
    heroImage: string;
    breadcrumbLabel: string;

    // Content blocks — each is a standalone section
    intro: string;
    detailBlocks: {
        heading: string;
        text: string;
        listItems?: string[];
    }[];
    materialien?: {
        name: string;
        beschreibung: string;
    }[];
    ablauf: {
        schritt: string;
        beschreibung: string;
    }[];
    faqs: { q: string; a: string }[];
    ctaText: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
    // ──────────────────────────────────────────────────────────
    // 1. GARTENDESIGN & ARCHITEKTUR
    // ──────────────────────────────────────────────────────────
    {
        slug: 'gartendesign',
        serviceId: 1,
        title: 'Gartendesign & Architektur',
        metaTitle: 'Gartenplanung & 3D-Design Wetzlar | Memo-BauT',
        metaDescription: 'Professionelle Gartenplanung mit 3D-Visualisierung in Wetzlar. Wir entwerfen Ihren Traumgarten – von der Skizze bis zum fertigen Ausführungsplan. Jetzt Erstberatung.',
        heroImage: '/images/final/service-planning.webp',
        breadcrumbLabel: 'Gartendesign',

        intro: `Die meisten Kunden kommen zu uns mit einem Gefühl, nicht mit einem fertigen Plan. "Irgendwas Schönes mit Terrasse und ein bisschen Grün drumherum" — das hören wir oft beim ersten Telefonat. Und genau das ist unser Job: aus diesem Gefühl eine konkrete Vision zu machen. Keine Standardlösung aus dem Katalog, sondern etwas, das zu Ihrem Grundstück passt, zu Ihrem Haus, zu Ihrem Alltag. Wir stehen dann bei Ihnen im Garten, schauen uns an, wie die Sonne wandert, wo der Nachbar reinschaut, wo der Boden feucht bleibt. Erst danach setzen wir uns an den Rechner.`,

        detailBlocks: [
            {
                heading: 'Warum eine professionelle Gartenplanung den Unterschied macht',
                text: `Mal ehrlich: Jeder kann ein paar Platten verlegen und eine Hecke setzen. Aber dann stehen die Platten nach zwei Wintern schief, weil der Unterbau nicht gepasst hat, und die Hecke wächst in die falsche Richtung, weil niemand den Sonnenverlauf berücksichtigt hat. Eine saubere Planung spart am Ende Geld — weil man nicht zweimal baut. Wir planen in 3D. Das heißt, Sie sehen Ihren Garten auf dem Bildschirm, bevor wir den ersten Bagger bestellen. Sie können die Terrasse verschieben, den Sichtschutz höher machen, das Layout ändern. Alles ohne dass auch nur ein Euro für Material ausgegeben wurde.`,
            },
            {
                heading: 'Was wir uns bei der Erstbegehung anschauen',
                text: `Kein Grundstück ist wie das andere. Selbst in derselben Straße in Wetzlar oder Aßlar können die Bodenverhältnisse komplett unterschiedlich sein. Bei der Erstbegehung prüfen wir:`,
                listItems: [
                    'Sonnenverlauf und Schattenfall über den gesamten Tag',
                    'Bodenbeschaffenheit — Lehm, Sand, Fels oder Mischboden',
                    'Gefälle und Entwässerungssituation',
                    'Bestehende Gartenelemente, die erhalten werden sollen',
                    'Sichtachsen zum Nachbarn und zur Straße',
                    'Zugangsmöglichkeiten für schweres Gerät',
                    'Lage von Versorgungsleitungen (Wasser, Strom, Gas)',
                ],
            },
            {
                heading: 'Von der Skizze zum fertigen Konzept',
                text: `Nach der Begehung erarbeiten wir zunächst eine Handskizze — ja, wirklich mit Bleistift und Papier. Das geht schneller als jede Software und gibt Ihnen sofort ein Gefühl für die Raumaufteilung. Erst wenn die Grundstruktur stimmt, gehen wir in die digitale 3D-Planung. Dort arbeiten wir mit realistischen Texturen und Materialmodellen. Sie können virtuell durch Ihren zukünftigen Garten spazieren, bevor auch nur ein Spatenstich gesetzt wurde. Das bedeutet für Sie: keine teuren Überraschungen auf der Baustelle.`,
            },
        ],

        ablauf: [
            { schritt: 'Erstgespräch vor Ort', beschreibung: 'Wir kommen zu Ihnen, schauen uns alles an und hören vor allem zu. Was wünschen Sie sich? Was stört Sie am aktuellen Zustand? Wie nutzen Sie Ihren Garten?' },
            { schritt: 'Entwurf & Konzept', beschreibung: 'Innerhalb von 7-14 Tagen erhalten Sie einen ersten Entwurf mit Handskizze und Beschreibung unserer Idee. Kostenlos und unverbindlich.' },
            { schritt: '3D-Visualisierung', beschreibung: 'Nach Freigabe des Grundkonzepts erstellen wir eine fotorealistische 3D-Ansicht Ihres Gartens. Änderungen sind jederzeit möglich.' },
            { schritt: 'Detailplanung & Angebot', beschreibung: 'Materialspezifikation, Unterbaudetails — alles wird festgelegt. Sie erhalten ein transparentes Festpreisangebot.' },
            { schritt: 'Umsetzung', beschreibung: 'Unser eigenes Team setzt den Plan um. Keine Subunternehmer, keine Überraschungen. Der Bauleiter ist jeden Tag vor Ort.' },
        ],

        faqs: [
            { q: 'Was kostet eine professionelle Gartenplanung?', a: 'Die Erstberatung vor Ort ist kostenlos. Eine vollständige 3D-Planung mit Ausführungsplan beginnt bei ca. 800€ und wird bei Auftragserteilung zu 100% mit den Baukosten verrechnet. Sie zahlen also die Planung effektiv nicht extra.' },
            { q: 'Wie lange dauert die Planungsphase?', a: 'Vom ersten Termin bis zum fertigen Konzept rechnen wir mit 2-4 Wochen. Die reine 3D-Visualisierung dauert etwa 5-7 Arbeitstage nach Freigabe des Entwurfs.' },
            { q: 'Planen Sie auch kleine Gärten unter 100m²?', a: 'Gerade kleine Flächen profitieren enorm von professioneller Planung. Wir gestalten auch Reihenhausgärten ab 30m² — dort ist jeder Zentimeter entscheidend.' },
            { q: 'Berücksichtigen Sie das Thema Nachhaltigkeit?', a: 'Immer. Wir arbeiten grundsätzlich mit versickerungsfähigen Belägen und wassersparenden Bewässerungslösungen. Schottergärten machen wir nicht — das ist auch in vielen hessischen Kommunen mittlerweile verboten.' },
        ],

        ctaText: 'Gartenplanung starten',
    },

    // ──────────────────────────────────────────────────────────
    // 2. LANDSCHAFTSBAU & TOPOGRAPHIE
    // ──────────────────────────────────────────────────────────
    {
        slug: 'landschaftsbau',
        serviceId: 2,
        title: 'Landschaftsbau & Geländemodellierung',
        metaTitle: 'Landschaftsbau & Erdarbeiten Wetzlar | Memo-BauT',
        metaDescription: 'Professioneller Landschaftsbau im Lahn-Dill-Kreis. Erdarbeiten, Hangsicherung, Drainage und Geländemodellierung. Eigener Fuhrpark, eigenes Team.',
        heroImage: '/images/final/service-landscaping.webp',
        breadcrumbLabel: 'Landschaftsbau',

        intro: `Bevor irgendetwas Schönes passieren kann, muss der Untergrund stimmen. Das ist im Gartenbau nicht anders als beim Hausbau. Der Teil, den man am Ende nicht mehr sieht — Unterbau, Drainage, Tragschicht — entscheidet darüber, ob Ihre Terrasse in fünf Jahren noch gerade ist oder ob die Pflastersteine anfangen zu tanzen. Im Dilltal und rund um Wetzlar arbeiten wir oft mit Hanglagen, lehmigen Böden und schwierigen Zufahrten. Das kennen wir. Dafür haben wir den Fuhrpark und die Erfahrung.`,

        detailBlocks: [
            {
                heading: 'Erdarbeiten — mehr als nur Bagger fahren',
                text: `Wer glaubt, Erdarbeiten seien simples Ausheben und Verfüllen, der hatte noch nie ein Grundstück am Hang in Dillenburg oder eine Senke in Lahnau. Die Herausforderung liegt im Detail: Wie tief muss der Oberboden abgetragen werden? Wo landet das Material — kostet die Entsorgung extra oder kann der Aushub vor Ort wiederverwendet werden? Wie schützen wir den bestehenden Baumbestand? Wir planen die Erdmassen vor Baubeginn exakt und kalkulieren Transport und Entsorgung transparent in das Angebot ein. Keine versteckten Kosten.`,
            },
            {
                heading: 'Hangsicherung im Lahn-Dill-Kreis',
                text: `Die Topografie unserer Region ist einzigartig. Wer in Wetzlar-Stoppelberg, Herborn oder Dillenburg wohnt, weiß: Hier ist fast nichts eben. Für die Hangsicherung setzen wir je nach Situation auf unterschiedliche Systeme:`,
                listItems: [
                    'Naturstein-Trockenmauern — die Königsdisziplin, langlebig und wunderschön',
                    'L-Steine aus Beton — wirtschaftliche Lösung für größere Höhenunterschiede',
                    'Gabionen — modern, flexibel und sofort belastbar',
                    'Böschungsanker und Geokunststoffe — für extreme Steigungen',
                ],
            },
            {
                heading: 'Drainage & Entwässerung',
                text: `Wasser ist der größte Feind jeder Außenanlage. Staunässe lässt Pflaster absacken, Wurzeln faulen und Terrassen kippen. Besonders auf den lehmigen Böden im Lahntal ist eine saubere Drainage unverzichtbar. Wir verlegen Drainagerohre, bauen Sickergruben und Rigolen und sorgen dafür, dass das Oberflächenwasser kontrolliert abgeleitet wird — und nicht in Ihren Keller läuft. Bei Neubaugrundstücken stimmen wir uns direkt mit dem Tiefbauer ab, um die Entwässerung in ein Gesamtkonzept einzubinden.`,
            },
        ],

        ablauf: [
            { schritt: 'Bestandsaufnahme', beschreibung: 'Vermessung des Geländes, Bodenproben, Klärung der Zufahrtssituation für schweres Gerät.' },
            { schritt: 'Erdbauplan', beschreibung: 'Detaillierter Plan mit Höhenlinien, Abtragsflächen, Aufschüttungsbereichen und Massenberechnung.' },
            { schritt: 'Erdarbeiten', beschreibung: 'Maschineller Abtrag und Aufbau mit eigenem Fuhrpark: Minibagger, Radlader, Dumper.' },
            { schritt: 'Unterbau & Drainage', beschreibung: 'Frostschutzschicht, Tragschicht und Entwässerungsleitungen — alles nach RStO und ZTV-Wegebau.' },
            { schritt: 'Feinplanum', beschreibung: 'Millimetergenaue Oberfläche als Basis für Pflaster, Terrasse oder Rasen.' },
        ],

        faqs: [
            { q: 'Was kostet eine Geländemodellierung ungefähr?', a: 'Das hängt stark von der Menge des zu bewegenden Erdreichs ab. Als grobe Orientierung: Eine komplette Neumodellierung eines 200m²-Grundstücks inklusive Abtransport liegt zwischen 3.000€ und 8.000€. Wir machen Ihnen gerne ein konkretes Angebot nach Erstbegehung.' },
            { q: 'Können Sie auch im Winter Erdarbeiten durchführen?', a: 'Bei Frost arbeiten wir nicht im Erdbau — das wäre technisch unsauber. In milden Wintermonaten können wir aber durchaus tätig sein. Die beste Zeit für Erdarbeiten ist März bis November.' },
            { q: 'Was passiert mit dem vorhandenen Mutterboden?', a: 'Guter Mutterboden ist wertvoll. Wir lagern ihn separat auf Ihrem Grundstück und verwenden ihn nach den Bauarbeiten wieder für Grünflächen und Rasenansaat — das spart Ihnen Kosten und Transportwege.' },
            { q: 'Brauche ich eine Genehmigung für Stützmauern?', a: 'Je nach Höhe und Gemeinde kann eine Baugenehmigung erforderlich sein. In der Regel sind Stützmauern bis 1,50m genehmigungsfrei. Wir klären das für Sie mit der zuständigen Baubehörde im Lahn-Dill-Kreis.' },
        ],

        ctaText: 'Erdarbeiten anfragen',
    },

    // ──────────────────────────────────────────────────────────
    // 3. STONEWORK & TERRASSEN
    // ──────────────────────────────────────────────────────────
    {
        slug: 'pflasterarbeiten',
        serviceId: 3,
        title: 'Pflasterarbeiten & Terrassenbau',
        metaTitle: 'Pflasterarbeiten & Terrassenbau Wetzlar | Memo-BauT',
        metaDescription: 'Pflasterarbeiten in Profi-Qualität: Einfahrten, Terrassen, Gehwege aus Naturstein, Betonstein oder Keramik. Fachbetrieb aus Aßlar. Festpreisgarantie.',
        heroImage: '/images/final/service-paving.webp',
        breadcrumbLabel: 'Pflasterarbeiten',

        intro: `Pflasterarbeiten sind unser tägliches Brot. Klingt vielleicht unspektakulär, ist aber die Leistung, die unsere Kunden am meisten spüren — buchstäblich. Jeden Tag laufen Sie über Ihre Terrasse, fahren über die Einfahrt, gehen den Gartenweg entlang. Wenn hier geschludert wurde, merken Sie das. Wir merken das auch. Deshalb sind wir bei Pflaster- und Plattenarbeiten besonders penibel. Der Unterbau wird nach DIN-Norm verdichtet, die Fugen sauber befüllt, das Gefälle kontrolliert mit der Wasserwaage eingestellt. Kein „passt schon", sondern „passt perfekt".`,

        detailBlocks: [
            {
                heading: 'Naturstein, Betonstein oder Keramik - was passt wohin?',
                text: `Die Materialwahl hängt von der Nutzung, dem Budget und dem gewünschten Look ab. Kurz zusammengefasst: Naturstein (Granit, Basalt, Grauwacke) ist unverwüstlich, wird mit den Jahren schöner und passt perfekt zu den Dillenburger und Wetzlarer Häusern. Betonstein ist die wirtschaftliche Alternative - modern, vielfältig und in Großformaten erhältlich. Keramikplatten sind der Premium-Standard: kratzfest, frostbeständig, fleckenunempfindlich und in riesigen 80×80 oder 120×60 Formaten verfügbar. Wir beraten Sie, welches Material für Ihr Projekt das richtige ist - ohne Ihnen das Teuerste aufzuschwatzen.`,
            },
            {
                heading: 'Der Unterbau entscheidet alles',
                text: `80% der Arbeit bei Pflasterarbeiten sieht man am Ende nicht. Und genau das ist das Problem: Viele Anbieter sparen hier. Wir nicht. Unser Standard-Aufbau für Terrassen und Einfahrten:`,
                listItems: [
                    'Aushub bis auf tragfähigen Boden (in der Regel 30-40cm)',
                    'Frostschutzschicht 0/32 oder 0/45, lagenweise verdichtet',
                    'Splittbett 2-5mm, höhenkontrolliert abgezogen',
                    'Randeinfassung mit Betonkantsteinen oder Stahlkanten',
                    'Pflasterverlegung im Mörtelbett oder ungebunden, je nach System',
                    'Verfugung mit Pflasterfugenmörtel (gebunden) oder Brechsand (ungebunden)',
                ],
            },
            {
                heading: 'Einfahrten - belastbar und repräsentativ',
                text: `Eine Einfahrt muss mehr aushalten als eine Terrasse. Hier fahren Autos drüber, manchmal auch der Lieferwagen von Hermes. Der Unterbau muss entsprechend dimensioniert sein - Tragschichtdicke, Verbandverlegung und Randeinfassung entscheiden darüber, ob die Einfahrt nach ein paar Jahren Spurrillen bekommt oder nicht. Wir dimensionieren den Aufbau nach der tatsächlichen Belastung und verwenden für befahrene Flächen ausschließlich Materialien, die dafür zugelassen sind. Das klingt selbstverständlich, ist es aber leider nicht bei jedem Anbieter.`,
            },
        ],

        materialien: [
            { name: 'Granit (hellgrau/anthrazit)', beschreibung: 'Der Klassiker. Frostbeständig, rutschfest, für Ewigkeit gebaut. Ideal für Einfahrten und repräsentative Flächen.' },
            { name: 'Basalt (schwarz)', beschreibung: 'Edel und modern. Passt hervorragend zu zeitgenössischer Architektur und hellen Fassaden.' },
            { name: 'Grauwacke (regional)', beschreibung: 'Heimischer Naturstein aus dem Westerwald. Perfekt für Gärten, die sich ins Landschaftsbild einfügen sollen.' },
            { name: 'Keramik (Terrassenplatten)', beschreibung: 'Hightech-Oberfläche: Betonoptik, Holzoptik, Marmoroptik. Pflegeleicht, kratzfest und in XXL-Formaten.' },
            { name: 'Betonstein (modern)', beschreibung: 'Vielseitig und wirtschaftlich. Von klassischem Rechteckpflaster bis zu modernen Großformaten mit glatter Oberfläche.' },
        ],

        ablauf: [
            { schritt: 'Materialberatung', beschreibung: 'Wir bringen Muster mit zu Ihnen nach Hause. Sie können die Steine direkt neben Ihrem Haus und Ihrer Fassade sehen - das ist was anderes als im Baumarkt.' },
            { schritt: 'Aufmaß & Angebot', beschreibung: 'Exakte Flächenberechnung, Materialbestellung und Festpreisangebot. Was im Angebot steht, gilt.' },
            { schritt: 'Aushub & Unterbau', beschreibung: 'Altes Pflaster raus, Boden verdichten, Tragschichten aufbauen. Das dauert in der Regel 2-3 Tage.' },
            { schritt: 'Verlegung', beschreibung: 'Unser Pflasterteam verlegt je nach Fläche 15-30m² pro Tag - sauber, im Verband, mit kontrolliertem Gefälle.' },
            { schritt: 'Verfugung & Abnahme', beschreibung: 'Gemeinsame Abnahme, Pflegehinweise und Gewährleistungsübergabe. Fertig.' },
        ],

        faqs: [
            { q: 'Was kosten Pflasterarbeiten pro Quadratmeter?', a: 'Inklusive Unterbau und Material liegen wir bei Betonpflaster bei 80-120€/m², bei Naturstein bei 120-200€/m² und bei Premium-Keramik bei 150-250€/m². Die Spanne hängt vor allem vom Material und den örtlichen Gegebenheiten ab.' },
            { q: 'Können Sie auch nur die Terrasse machen, oder muss es ein Komplettpaket sein?', a: 'Natürlich machen wir auch einzelne Leistungen. Ob nur eine Terrasse, nur eine Einfahrt oder ein ganzer Gartenweg - wir kommen genauso gerne für Teilprojekte.' },
            { q: 'Wie lange dauert eine durchschnittliche Terrassenverlegung?', a: 'Eine Terrasse mit 25-35m² dauert mit Unterbau und Verlegung etwa 4-6 Arbeitstage. Bei einer Einfahrt mit 40-60m² rechnen wir mit 6-8 Tagen. Wir arbeiten durchgehend, keine halben Tage.' },
            { q: 'Was machen Sie mit dem alten Pflaster?', a: 'Wir entfernen das alte Material komplett, inklusive Unterbau. Der Bauschutt wird fachgerecht entsorgt. Die Kosten dafür sind im Angebot enthalten.' },
            { q: 'Haben Sie Pflaster zum Anfassen oder nur Kataloge?', a: 'Wir haben eine große Musterauswahl an unserem Standort in Aßlar. Zusätzlich bringen wir zu jedem Beratungstermin passende Materialproben direkt zu Ihnen mit.' },
        ],

        ctaText: 'Pflasterprojekt anfragen',
    },


    // ──────────────────────────────────────────────────────────
    // 5. SMART GARDEN & WASSER
    // ──────────────────────────────────────────────────────────
    {
        slug: 'bewaesserung',
        serviceId: 5,
        title: 'Bewässerungssysteme & Smart Garden',
        metaTitle: 'Automatische Bewässerung Wetzlar | Smart Garden | Memo-BauT',
        metaDescription: 'Automatische Gartenbewässerung mit App-Steuerung, Bodensensoren und Zisternen. Installation vom Fachbetrieb in Wetzlar. Wasser sparen, Garten genießen.',
        heroImage: '/images/final/service-water.webp',
        breadcrumbLabel: 'Bewässerung',

        intro: `Hand aufs Herz: Wer hat schon Lust, jeden Abend im Sommer mit dem Gartenschlauch durch den Garten zu laufen? Und im Urlaub den Nachbarn bitten, mal eben den Garten zu gießen? Automatische Bewässerung löst das Problem ein für alle Mal. Und nein, das ist kein Luxus nur für Villenbesitzer. Ein vernünftiges Bewässerungssystem für einen 200m²-Garten kostet weniger als ein guter Rasenmähroboter. Seit ein paar Jahren verbauen wir fast nur noch smarte Systeme mit App-Steuerung und Bodenfeuchtesensoren. Die gießen genau dann, wenn es nötig ist - und nicht nach Zeitplan.`,

        detailBlocks: [
            {
                heading: 'Versenkregner, Tropfschläuche und Micro-Drip',
                text: `Je nach Bereich im Garten setzen wir unterschiedliche Bewässerungstechniken ein. Rasenflächen bekommen Versenkregner - die verschwinden bei Nichtgebrauch unter der Erde und stören weder optisch noch beim Mähen. Beete und Hecken werden über Tropfschläuche bewässert - langsam, direkt an der Wurzel, mit minimalem Wasserverlust. Für Kübel auf der Terrasse gibt es Micro-Drip-Systeme mit einzeln einstellbaren Tropfern. Alles wird unterirdisch verlegt, nichts sieht man.`,
            },
            {
                heading: 'Steuerung per App',
                text: `Die modernen Controller verbinden sich über WLAN mit Ihrem Smartphone. Sie können Bewässerungszeiten einstellen, einzelne Zonen steuern und sehen genau, wie viel Wasser verbraucht wurde. Die besten Systeme beziehen sogar lokale Wetterdaten ein und passen die Bewässerung automatisch an. Wenn es morgen regnet, wird heute nicht gegossen. So einfach ist das. Wir installieren überwiegend Systeme von Hunter und Rain Bird - bewährte Profi-Marken, die auch im professionellen Sportplatzbau eingesetzt werden.`,
            },
            {
                heading: 'Regenwasser nutzen mit Zisternen',
                text: `In Hessen regnet es genug - warum also teures Trinkwasser zum Gießen verwenden? Eine unterirdische Zisterne sammelt das Regenwasser vom Dach und speichert es für trockene Phasen. Typische Größen für Einfamilienhäuser: 3.000 bis 6.000 Liter. Die Zisterne wird in den Garten gesetzt (häufig im Rahmen einer Neugestaltung gleich mit erledigt), an die Fallrohre angeschlossen und mit einer kleinen Pumpe versehen. Zusammen mit der automatischen Bewässerung ergibt das ein System, das fast zum Nulltarif Ihren Garten grün hält.`,
            },
        ],

        ablauf: [
            { schritt: 'Bedarfsanalyse', beschreibung: 'Welche Flächen müssen bewässert werden? Wie hoch ist der Wasserdruck? Gibt es einen Wasseranschluss im Garten?' },
            { schritt: 'Hydraulikplanung', beschreibung: 'Berechnung von Durchflussmengen, Leitungsquerschnitten und Zona-Aufteilung.' },
            { schritt: 'Erdarbeiten', beschreibung: 'Rohre und Leitungen werden in 25-30cm Tiefe verlegt. Bei bestehenden Gärten minimalinvasiv mit schmalen Gräben.' },
            { schritt: 'Installation', beschreibung: 'Regner setzen, Ventilboxen anschließen, Controller programmieren. Alles wird Zone für Zone getestet.' },
            { schritt: 'Einweisung', beschreibung: 'Sie bekommen eine persönliche Einweisung in die App-Steuerung und eine schriftliche Bedienungsanleitung.' },
        ],

        faqs: [
            { q: 'Was kostet eine automatische Bewässerung?', a: 'Für einen Standardgarten mit 150-250m² Rasenfläche und 30-50m Beet liegen wir bei 2.500-4.500€ komplett installiert. Eine Zisterne mit 4.000L Fassungsvermögen kostet zusätzlich ca. 2.000-3.500€ inklusive Einbau.' },
            { q: 'Kann man eine Bewässerung auch nachträglich einbauen?', a: 'Ja, das machen wir regelmäßig. Bei bestehendem Rasen arbeiten wir mit einem Rohrpflug, der schmale Schlitze in den Boden fräst. Der Rasen erholt sich innerhalb von 2-3 Wochen vollständig.' },
            { q: 'Muss die Anlage im Winter entleert werden?', a: 'Ja. Wir bieten einen Winterservice an, bei dem wir die Leitungen mit Druckluft ausblasen. Das dauert ca. 30 Minuten und kostet einen Bruchteil dessen, was eine Frostreparatur kosten würde.' },
            { q: 'Reicht mein Wasserdruck im Haus für eine Bewässerung?', a: 'In den meisten Fällen ja. Wir messen den Druck und die Durchflussmenge beim Ersttermin. Falls der Druck nicht reicht, können wir eine Druckerhöhungspumpe einbauen oder mit einer Zisterne + Pumpe arbeiten.' },
        ],

        ctaText: 'Bewässerung planen',
    },

    // ──────────────────────────────────────────────────────────
    // 6. GARTEN-CONCIERGE
    // ──────────────────────────────────────────────────────────
    {
        slug: 'gartenpflege',
        serviceId: 6,
        title: 'Gartenpflege & Wartung',
        metaTitle: 'Gartenpflege & Wartung Wetzlar | Pflegevertrag | Memo-BauT',
        metaDescription: 'Professionelle Gartenpflege im Lahn-Dill-Kreis: Rasenmähen, Heckenschnitt, Beetpflege und Winterdienst. Individuelle Pflegeverträge ab 150€/Monat.',
        heroImage: '/images/final/service-maintenance.webp',
        breadcrumbLabel: 'Gartenpflege',

        intro: `Einen Garten anzulegen ist das eine. Ihn über Jahre in Form zu halten, ist das andere. Wir sehen das oft: Der Garten wurde für viel Geld angelegt, und nach zwei Jahren sieht er aus wie... naja, wie ein Garten ohne Pflege eben aussieht. Die Hecke wuchert über den Gehweg, die Beete sind zugewachsen, der Rasen hat mehr Moos als Gras. Das muss nicht sein. Unsere Pflegeverträge starten bei 150€ im Monat, und dafür kommt unser Team regelmäßig und kümmert sich um alles. Sie müssen nur noch den Garten genießen.`,

        detailBlocks: [
            {
                heading: 'Was beinhaltet ein typischer Pflegevertrag?',
                text: `Das kommt auf Ihren Garten und Ihre Ansprüche an. Die Basis-Pflege umfasst in der Regel:`,
                listItems: [
                    'Rasenmähen (2-4× monatlich in der Saison)',
                    'Heckenschnitt (2× jährlich: Juni und September)',
                    'Beetpflege und Unkrautkontrolle (monatlich)',
                    'Strauchschnitt und Formgehölzpflege',
                    'Laub entfernen im Herbst',
                    'Düngung (3× jährlich: Frühjahr, Sommer, Herbst)',
                    'Bewässerungscheck und Winterservice für Bewässerungsanlagen',
                ],
            },
            {
                heading: 'Saisonale Schwerpunkte',
                text: `Jede Jahreszeit hat ihre eigenen Aufgaben. Im Frühjahr geht es um Rückschnitt, Düngung und die Startpflege nach dem Winter. Im Sommer stehen Rasenpflege, Bewässerungskontrolle und Formschnitt im Vordergrund. Der Herbst ist die Zeit für Laubbeseitigung, Heckenschnitt und die Wintervorbereitung. Im Winter kümmern wir uns auf Wunsch auch um Winterdienst auf Ihren Wegen und der Einfahrt - Räumen und Streuen inklusive.`,
            },
        ],

        ablauf: [
            { schritt: 'Gartenbegehung', beschreibung: 'Wir schauen uns Ihren Garten an und besprechen, was regelmäßig gemacht werden soll.' },
            { schritt: 'Individuelles Pflegekonzept', beschreibung: 'Sie erhalten einen Jahrespflegeplan mit konkreten Terminen und Leistungen.' },
            { schritt: 'Regelmäßige Einsätze', beschreibung: 'Unser Team kommt nach Plan - in der Regel alle 2-4 Wochen. Sie müssen nicht mal zu Hause sein.' },
            { schritt: 'Saisonale Sonderleistungen', beschreibung: 'Vertikutieren im Frühjahr, Winterdienst, Ergänzungen - alles ist planbar und kalkulierbar.' },
        ],

        faqs: [
            { q: 'Ab welcher Gartengröße lohnt sich ein Pflegevertrag?', a: 'Eigentlich immer - aber besonders ab 200m² aufwärts wird es spürbar. Viele unserer Kunden haben Grundstücke zwischen 300-800m² und schätzen es einfach, sich am Wochenende nicht um den Garten kümmern zu müssen.' },
            { q: 'Sind Pflegeverträge monatlich kündbar?', a: 'Wir bieten Jahresverträge mit 3 Monaten Kündigungsfrist. Der Vorteil: Sie bekommen einen gleichbleibenden Monatsbetrag, auch wenn wir im Frühjahr deutlich mehr tun als im Winter.' },
            { q: 'Muss ich zu Hause sein, wenn Ihr Team kommt?', a: 'Nein. Die meisten unserer Pflegekunden sind bei den Einsätzen nicht zu Hause. Wir brauchen lediglich Zugang zum Garten und teilen Ihnen per Nachricht mit, wenn wir fertig sind.' },
            { q: 'Bieten Sie auch Einzelleistungen ohne Vertrag an?', a: 'Ja, wir übernehmen auch Einzeleinsätze wie Heckenschnitt, Frühjahrspflege oder Winterservice. Allerdings sind unsere Vertragskunden bei der Terminvergabe bevorzugt.' },
        ],

        ctaText: 'Pflegevertrag anfragen',
    },
];
