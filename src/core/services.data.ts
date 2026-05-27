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
    // 2. LANDSCHAFTSBAU & TOPOGRAPHIE
    // ──────────────────────────────────────────────────────────
    {
        slug: 'landschaftsbau',
        serviceId: 2,
        title: 'Landschaftsbau & Geländemodellierung',
        metaTitle: 'Landschaftsbau & Erdarbeiten Wetzlar | Memo BauT',
        metaDescription: 'Professioneller Landschaftsbau im Lahn Dill Kreis. Erdarbeiten, Hangsicherung, Drainage und Geländemodellierung. Eigener Fuhrpark, eigenes Team.',
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
                text: `Die Topografie unserer Region ist einzigartig. Wer in Wetzlar Stoppelberg, Herborn oder Dillenburg wohnt, weiß: Hier ist fast nichts eben. Für die Hangsicherung setzen wir je nach Situation auf unterschiedliche Systeme:`,
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

            { q: 'Können Sie auch im Winter Erdarbeiten durchführen?', a: 'Bei Frost arbeiten wir nicht im Erdbau — das wäre technisch unsauber. In milden Wintermonaten können wir aber durchaus tätig sein. Die beste Zeit für Erdarbeiten ist März bis November.' },
            { q: 'Was passiert mit dem vorhandenen Mutterboden?', a: 'Guter Mutterboden ist wertvoll. Wir lagern ihn separat auf Ihrem Grundstück und verwenden ihn nach den Bauarbeiten wieder für Grünflächen und Rasenansaat — das spart Ihnen Kosten und Transportwege.' },
            { q: 'Brauche ich eine Genehmigung für Stützmauern?', a: 'Je nach Höhe und Gemeinde kann eine Baugenehmigung erforderlich sein. In der Regel sind Stützmauern bis 1,50m genehmigungsfrei. Wir klären das für Sie mit der zuständigen Baubehörde im Lahn Dill Kreis.' },
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
        metaTitle: 'Pflasterarbeiten & Terrassenbau Wetzlar | Memo BauT',
        metaDescription: 'Pflasterarbeiten in Profi Qualität: Einfahrten, Terrassen, Gehwege aus Naturstein, Betonstein oder Keramik. Fachbetrieb aus Aßlar. Qualitätsgarantie.',
        heroImage: '/images/final/service-paving.webp',
        breadcrumbLabel: 'Pflasterarbeiten',

        intro: `Pflasterarbeiten sind unser tägliches Brot. Klingt vielleicht unspektakulär, ist aber die Leistung, die unsere Kunden am meisten spüren — buchstäblich. Jeden Tag laufen Sie über Ihre Terrasse, fahren über die Einfahrt, gehen den Gartenweg entlang. Wenn hier geschludert wurde, merken Sie das. Wir merken das auch. Deshalb sind wir bei Pflaster  und Plattenarbeiten besonders penibel. Der Unterbau wird nach DIN Norm verdichtet, die Fugen sauber befüllt, das Gefälle kontrolliert mit der Wasserwaage eingestellt. Kein „passt schon", sondern „passt perfekt".`,

        detailBlocks: [
            {
                heading: 'Naturstein, Betonstein oder Keramik - was passt wohin?',
                text: `Die Materialwahl hängt von der Nutzung, dem Budget und dem gewünschten Look ab. Kurz zusammengefasst: Naturstein (Granit, Basalt, Grauwacke) ist unverwüstlich, wird mit den Jahren schöner und passt perfekt zu den Dillenburger und Wetzlarer Häusern. Betonstein ist die wirtschaftliche Alternative   modern, vielfältig und in Großformaten erhältlich. Keramikplatten sind der Premium Standard: kratzfest, frostbeständig, fleckenunempfindlich und in riesigen 80×80 oder 120×60 Formaten verfügbar. Wir beraten Sie, welches Material für Ihr Projekt das richtige ist   ohne Ihnen das Teuerste aufzuschwatzen.`,
            },
            {
                heading: 'Der Unterbau entscheidet alles',
                text: `80% der Arbeit bei Pflasterarbeiten sieht man am Ende nicht. Und genau das ist das Problem: Viele Anbieter sparen hier. Wir nicht. Unser Standard Aufbau für Terrassen und Einfahrten:`,
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
                text: `Eine Einfahrt muss mehr aushalten als eine Terrasse. Hier fahren Autos drüber, manchmal auch der Lieferwagen von Hermes. Der Unterbau muss entsprechend dimensioniert sein   Tragschichtdicke, Verbandverlegung und Randeinfassung entscheiden darüber, ob die Einfahrt nach ein paar Jahren Spurrillen bekommt oder nicht. Wir dimensionieren den Aufbau nach der tatsächlichen Belastung und verwenden für befahrene Flächen ausschließlich Materialien, die dafür zugelassen sind. Das klingt selbstverständlich, ist es aber leider nicht bei jedem Anbieter.`,
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
            { schritt: 'Aufmaß & Angebot', beschreibung: 'Exakte Flächenberechnung, Materialbestellung und Angebot.' },
            { schritt: 'Aushub & Unterbau', beschreibung: 'Altes Pflaster raus, Boden verdichten, Tragschichten aufbauen. Das dauert in der Regel 2-3 Tage.' },
            { schritt: 'Verlegung', beschreibung: 'Unser Pflasterteam verlegt je nach Fläche 15-30m² pro Tag - sauber, im Verband, mit kontrolliertem Gefälle.' },
            { schritt: 'Verfugung & Abnahme', beschreibung: 'Gemeinsame Abnahme, Pflegehinweise und Gewährleistungsübergabe. Fertig.' },
        ],

        faqs: [

            { q: 'Können Sie auch nur die Terrasse machen, oder muss es ein Komplettpaket sein?', a: 'Natürlich machen wir auch einzelne Leistungen. Ob nur eine Terrasse, nur eine Einfahrt oder ein ganzer Gartenweg   wir kommen genauso gerne für Teilprojekte.' },
            { q: 'Wie lange dauert eine durchschnittliche Terrassenverlegung?', a: 'Eine Terrasse mit 25 35m² dauert mit Unterbau und Verlegung etwa 4 6 Arbeitstage. Bei einer Einfahrt mit 40 60m² rechnen wir mit 6 8 Tagen. Wir arbeiten durchgehend, keine halben Tage.' },
            { q: 'Was machen Sie mit dem alten Pflaster?', a: 'Wir entfernen das alte Material komplett, inklusive Unterbau. Der Bauschutt wird fachgerecht entsorgt. Die Kosten dafür sind im Angebot enthalten.' },
            { q: 'Haben Sie Pflaster zum Anfassen oder nur Kataloge?', a: 'Wir haben eine große Musterauswahl an unserem Standort in Aßlar. Zusätzlich bringen wir zu jedem Beratungstermin passende Materialproben direkt zu Ihnen mit.' },
        ],

        ctaText: 'Pflasterprojekt anfragen',
    },



];
