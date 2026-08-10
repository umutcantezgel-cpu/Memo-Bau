import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTheme } from 'next-themes';
import { COMPANY_INFO } from '../../core/constants';
import { Navigation, X, Target, Search, Maximize, Minus, Plus, MapPin } from 'lucide-react';
import { LOCATIONS, LegacyLocationData } from '../../core/locations';
import { CookieBlocker } from '../common/CookieBlocker';

// Memo-BauT HQ Coordinates (Aßlar)
const HQ_COORDS: [number, number] = [50.605, 8.441]; // Aßlar Hauptsitz
const RADIUS_METERS = 35000; // 35km Einzugsgebiet

const hqIcon = L.divIcon({
    className: 'bg-transparent border-none',
    html: `
        <div class="relative flex items-center justify-center w-16 h-16 -ml-8 -mt-8 cursor-pointer group">
            <div class="absolute w-full h-full bg-primary-base/30 rounded-full animate-pulse"></div>
            <div class="absolute w-10 h-10 bg-primary-base rounded-full shadow-elevation-3 flex items-center justify-center border-2 border-neutral-white group-hover:brightness-110 transition-all duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
        </div>
    `,
    iconSize: [64, 64],
    iconAnchor: [32, 32],
    popupAnchor: [0, -32],
});

// Custom Overlay map controls wrapper
const CustomMapControls: React.FC = () => {
    const map = useMap();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Filter locations for autocomplete
    const filteredLocations = LOCATIONS.filter(loc =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.zipCode.includes(searchQuery)
    ).slice(0, 5); // Max 5 suggestions

    const handleZoomIn = () => map.zoomIn();
    const handleZoomOut = () => map.zoomOut();

    const handleFullscreen = () => {
        const elem = document.querySelector('.interactive-map-wrapper');
        if (!elem) return;
        if (!document.fullscreenElement) {
            elem.requestFullscreen().catch(err => console.error(err));
        } else {
            document.exitFullscreen();
        }
    };

    const handleLocate = () => {
        map.locate().on("locationfound", function (e) {
            map.flyTo(e.latlng, 12);
        });
    };

    const handleSelectLocation = (loc: LegacyLocationData) => {
        setSearchQuery('');
        setShowSuggestions(false);
        map.flyTo([loc.coordinates.lat, loc.coordinates.lng], 13, {
            duration: 1.5,
            easeLinearity: 0.25
        });
    };

    return (
        <>
            {/* Floating Search Bar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-sm px-4">
                <div className="relative">
                    <div className="flex relative items-center bg-neutral-white/95 backdrop-blur-md rounded-full shadow-elevation-3 border border-neutral-lightgray/50 px-4 py-3 focus-within:ring-2 focus-within:ring-primary-base focus-within:border-transparent transition-all">
                        <Search className="w-5 h-5 text-neutral-midgray mr-3" />
                        <input
                            type="text"
                            placeholder="Standort suchen (z.B. Wetzlar)"
                            className="bg-transparent border-none outline-none w-full text-sm font-sans text-neutral-darkgray placeholder:text-neutral-midgray"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                        />
                        {searchQuery && (
                            <button onClick={() => { setSearchQuery(''); setShowSuggestions(false); }} className="p-1 hover:bg-neutral-lightgray rounded-full ml-2 transition-colors">
                                <X className="w-4 h-4 text-neutral-midgray" />
                            </button>
                        )}
                    </div>

                    {/* Suggestions Dropdown */}
                    {showSuggestions && searchQuery && filteredLocations.length > 0 && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-neutral-white/95 backdrop-blur-md rounded-[var(--radius-lg)] shadow-elevation-4 overflow-hidden border border-neutral-lightgray/50 animate-fade-in-up">
                            {filteredLocations.map(loc => (
                                <button
                                    key={loc.id}
                                    onClick={() => handleSelectLocation(loc)}
                                    className="w-full text-left px-4 py-3 hover:bg-neutral-offwhite border-b border-neutral-lightgray/30 last:border-0 flex items-center justify-between transition-colors group"
                                >
                                    <span className="font-sans text-sm font-bold text-neutral-darkgray group-hover:text-primary-base transition-colors">{loc.name}</span>
                                    <span className="text-xs font-normal text-neutral-midgray">{loc.zipCode}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Standard Overlay Controls */}
            <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
                <div className="flex flex-col bg-neutral-white/90 backdrop-blur-sm rounded-[var(--radius-md)] shadow-elevation-2 overflow-hidden border border-neutral-lightgray">
                    <button onClick={handleZoomIn} className="p-2 hover:bg-neutral-offwhite hover:text-primary-base transition-colors border-b border-neutral-lightgray text-neutral-darkgray" aria-label="Hineinzoomen">
                        <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={handleZoomOut} className="p-2 hover:bg-neutral-offwhite hover:text-primary-base transition-colors text-neutral-darkgray" aria-label="Herauszoomen">
                        <Minus className="w-5 h-5" />
                    </button>
                </div>

                <button onClick={handleLocate} className="p-2 bg-neutral-white/90 backdrop-blur-sm hover:bg-neutral-offwhite hover:text-primary-base transition-colors rounded-[var(--radius-md)] shadow-elevation-2 border border-neutral-lightgray text-neutral-darkgray mt-2" aria-label="Mein Standort">
                    <Target className="w-5 h-5" />
                </button>

                <button onClick={handleFullscreen} className="p-2 bg-neutral-white/90 backdrop-blur-sm hover:bg-neutral-offwhite hover:text-primary-base transition-colors rounded-[var(--radius-md)] shadow-elevation-2 border border-neutral-lightgray text-neutral-darkgray block sm:hidden md:block" aria-label="Vollbild">
                    <Maximize className="w-5 h-5" />
                </button>
            </div>
        </>
    );
};

export const InteractiveMap: React.FC = () => {
    const { resolvedTheme } = useTheme();
    const [hqPanelOpen, setHqPanelOpen] = useState(false);

    // Select Tiles based on Theme
    const tileUrl = resolvedTheme === 'dark'
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY_INFO.address.street + ', ' + COMPANY_INFO.address.zip + ' ' + COMPANY_INFO.address.city)}`;

    return (
        <div className="w-full h-[600px] rounded-[var(--radius-xl)] overflow-hidden shadow-elevation-2 border border-neutral-lightgray/20 relative z-0 interactive-map-wrapper">
            <CookieBlocker
                type="marketing"
                title="Interaktive Karte aktivieren"
                description="Um unsere Standorte komfortabel auf einer interaktiven Karte zu betrachten, laden wir Kartendaten von externen Servern (CARTO/OpenStreetMap). Dabei wird Ihre IP-Adresse übertragen. Bitte erteilen Sie Ihre Einwilligung."
            >
                <MapContainer
                    center={HQ_COORDS}
                    zoom={10}
                    scrollWheelZoom={false}
                    zoomControl={false} // We will add custom controls later in B6
                    className="w-full h-full z-0 font-sans"
                >
                    <CustomMapControls />
                    <TileLayer
                        url={tileUrl}
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    />

                    {/* Catchment Area Blob */}
                    <Circle
                        center={HQ_COORDS}
                        radius={RADIUS_METERS}
                        pathOptions={{
                            color: 'var(--color-primary-base)',
                            fillColor: 'var(--color-primary-base)',
                            fillOpacity: 0.05,
                            weight: 1,
                            dashArray: '4 8'
                        }}
                    />

                    {/* Central Anchor Pin */}
                    <Marker
                        position={HQ_COORDS}
                        icon={hqIcon}
                        eventHandlers={{
                            click: () => setHqPanelOpen(true)
                        }}
                    />

                    {/* Animated Connecting Lines (Vernetzung) */}
                    {LOCATIONS.map((loc) => (
                        <Polyline
                            key={`line-${loc.id}`}
                            positions={[HQ_COORDS, [loc.coordinates.lat, loc.coordinates.lng]]}
                            pathOptions={{
                                color: 'var(--color-primary-base)',
                                weight: 1.5,
                                opacity: 0.3,
                                dashArray: '5, 10',
                                className: 'animate-draw-line'
                            }}
                        />
                    ))}

                    {/* Regional Pins */}
                    {LOCATIONS.map((loc, idx) => {
                        const iconHtml = `
                        <div class="relative flex items-center justify-center w-8 h-8 cursor-pointer group" style="animation: pinDrop var(--motion-dramatic-duration) var(--motion-dramatic-easing) forwards; animation-delay: ${idx * 50}ms; opacity: 0; transform: translateY(-40px);">
                            <div class="absolute w-6 h-6 bg-secondary-base rounded-full shadow-elevation-2 flex items-center justify-center border-2 border-neutral-white group-hover:scale-110 group-hover:bg-primary-base transition-[transform,background-color] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] z-10">
                            </div>
                        </div>
                    `;
                        const locationIcon = L.divIcon({
                            className: 'bg-transparent border-none',
                            html: iconHtml,
                            iconSize: [32, 32],
                            iconAnchor: [16, 16],
                            popupAnchor: [0, -16],
                        });

                        return (
                            <Marker key={loc.id} position={[loc.coordinates.lat, loc.coordinates.lng]} icon={locationIcon}>
                                <Popup className="memobau-popup border-0 p-0 m-0 shadow-elevation-3 rounded-[var(--radius-lg)] overflow-hidden">
                                    <div className="p-space-4 bg-neutral-white min-w-[200px]">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-base block mb-1">Einsatzgebiet</span>
                                        <h3 className="text-h4 font-sans font-bold text-neutral-darkgray mb-1">{loc.zipCode} {loc.name}</h3>
                                        <p className="text-xs font-normal text-neutral-midgray mb-space-4">
                                            Nur {loc.distanceFromHQ} km von unserem Hauptsitz entfernt.
                                        </p>

                                        <a
                                            href={`/standorte/${loc.id}`}
                                            className="flex items-center justify-center w-full py-2 bg-neutral-offwhite hover:bg-secondary-base hover:text-neutral-white text-neutral-darkgray text-xs font-bold uppercase tracking-widest rounded-[var(--radius-md)] transition-colors duration-[var(--default-transition-duration)]"
                                        >
                                            Zur Standortseite
                                        </a>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}

                </MapContainer>

                {/* Slide-In HQ Panel Overlay */}
                <div
                    className={`absolute top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-neutral-white/95 backdrop-blur-md shadow-elevation-4 z-[1010] border-l border-neutral-lightgray/20 transition-transform duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)] will-change-transform ${hqPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-space-6 h-full flex flex-col overflow-y-auto">
                        <div className="flex justify-between items-center mb-space-6 shrink-0">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary-base">Zentrale</span>
                            <button
                                onClick={() => setHqPanelOpen(false)}
                                className="p-2 bg-neutral-offwhite hover:bg-neutral-lightgray rounded-full transition-colors text-neutral-darkgray"
                                aria-label="Schließen"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <img
                            src="/images/final/about-hero.webp"
                            alt="Memo BauT HQ"
                            className="w-full h-40 object-cover rounded-[var(--radius-md)] mb-space-6 shadow-elevation-1 shrink-0"
                        />

                        <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-2">Memo BauT</h3>
                        <p className="text-sm text-neutral-midgray leading-body mb-space-6">
                            Ihr Premium Partner für Garten  und Landschaftsbau. Unser Hauptstandort in Wetzlar steuert alle Projekte der gesamten Region.
                        </p>

                        <div className="bg-neutral-offwhite p-space-4 rounded-[var(--radius-md)] mb-auto">
                            <div className="flex items-start gap-3 text-sm text-neutral-darkgray">
                                <MapPin className="w-5 h-5 text-primary-base shrink-0 mt-0.5" />
                                <div>
                                    <strong>Anschrift</strong><br />
                                    {COMPANY_INFO.address.street}<br />
                                    {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                                </div>
                            </div>
                        </div>

                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-space-6 flex items-center justify-center w-full py-4 bg-primary-base hover:bg-primary-hover shadow-elevation-2 text-neutral-white text-xs font-bold uppercase tracking-widest rounded-[var(--radius-lg)] transition-all hover:-translate-y-1 duration-[var(--default-transition-duration)]"
                        >
                            <Navigation className="w-4 h-4 mr-2" />
                            In Google Maps öffnen
                        </a>
                    </div>
                </div>
            </CookieBlocker>
        </div>
    );
};

export default InteractiveMap;
