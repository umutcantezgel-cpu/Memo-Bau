import React from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { HeroVariant } from './HeroVariant';
import { LocalStorySection } from './LocalStorySection';
import { FeatureGridSection } from './FeatureGridSection';
import { LocalProjectShowcase } from './LocalProjectShowcase';
import { LocalFAQSection } from './LocalFAQSection';
import { PremiumContactBanner } from './PremiumContactBanner';
import { ProcessTimelineSection } from './ProcessTimelineSection';
import { ValuePropositionSection } from './ValuePropositionSection';

interface SectionRendererProps {
    config: CityConfig;
}

export const LocationSectionRenderer: React.FC<SectionRendererProps> = ({ config }) => {
    // =========================================================================
    // LAYOUT PROFILE ROUTING ENGINE
    // Hier entscheidet sich, welche Architektur die Stadt bekommt (A-E)
    // =========================================================================

    // Alle Layouts starten zwingend mit dem individuellen Hero
    const renderHero = () => <HeroVariant config={config} variant={config.heroVariant} />;

    switch (config.layoutProfile) {
        // ---------------------------------------------------------------------
        // PROFIL A: "Der Narrator" - Fokus auf starkes Storytelling und Werte
        // ---------------------------------------------------------------------
        case 'A':
            return (
                <>
                    {renderHero()}
                    <LocalStorySection config={config} />
                    <ValuePropositionSection config={config} variant="elegant" />
                    <FeatureGridSection config={config} />
                    <ProcessTimelineSection config={config} />
                    <LocalFAQSection config={config} />
                    <PremiumContactBanner config={config} />
                </>
            );

        // ---------------------------------------------------------------------
        // PROFIL B: "Der Proof-Giver" - Fokus auf harte Fakten und Projekte
        // ---------------------------------------------------------------------
        case 'B':
            return (
                <>
                    {renderHero()}
                    <ValuePropositionSection config={config} variant="stats-heavy" />
                    <FeatureGridSection config={config} />
                    <LocalProjectShowcase config={config} />
                    <LocalStorySection config={config} reversed={true} />
                    <LocalFAQSection config={config} />
                    <PremiumContactBanner config={config} />
                </>
            );

        // ---------------------------------------------------------------------
        // PROFIL C: "Der Visualist" - Sehr bildlastig, große Flächen
        // ---------------------------------------------------------------------
        case 'C':
            return (
                <>
                    {renderHero()}
                    <LocalProjectShowcase config={config} layout="masonry" />
                    <LocalStorySection config={config} />
                    <FeatureGridSection config={config} highlightFirst={true} />
                    <ValuePropositionSection config={config} variant="minimal" />
                    <LocalFAQSection config={config} />
                    <PremiumContactBanner config={config} />
                </>
            );

        // ---------------------------------------------------------------------
        // PROFIL D: "Der Lokale" - Extrem starker Fokus auf den Ort selbst
        // ---------------------------------------------------------------------
        case 'D':
            return (
                <>
                    {renderHero()}
                    <LocalStorySection config={config} highlightLocalReferences={true} />
                    <FeatureGridSection config={config} />
                    <ValuePropositionSection config={config} variant="elegant" />
                    <LocalProjectShowcase config={config} limit={3} />
                    <ProcessTimelineSection config={config} />
                    <LocalFAQSection config={config} />
                    <PremiumContactBanner config={config} />
                </>
            );

        // ---------------------------------------------------------------------
        // PROFIL E: "Der Convincer" - Kurz, prägnant, höchste Conversion
        // ---------------------------------------------------------------------
        case 'E':
            return (
                <>
                    {renderHero()}
                    <FeatureGridSection config={config} compact={true} />
                    <ValuePropositionSection config={config} variant="stats-heavy" />
                    <LocalStorySection config={config} compact={true} />
                    <PremiumContactBanner config={config} highlightCTA={true} />
                    <LocalFAQSection config={config} />
                </>
            );

        default:
            return (
                <>
                    {renderHero()}
                    <LocalStorySection config={config} />
                    <PremiumContactBanner config={config} />
                </>
            );
    }
};
