import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet's default icon path issues in some bundlers
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const ServiceAreaMap: React.FC = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapInstanceRef.current) return; // Map already initialized

        // Fix Icons
        const DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41]
        });
        L.Marker.prototype.options.icon = DefaultIcon;

        // Init Map
        const map = L.map(mapContainerRef.current, {
            center: [50.5855, 8.4605],
            zoom: 11,
            scrollWheelZoom: false,
            attributionControl: false
        });

        // Dark Matter Tiles for that Premium Look
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: ''
        }).addTo(map);

        // Service Area Circle
        L.circle([50.5529, 8.5074], {
            color: '#d4a574', // Gold
            fillColor: '#d4a574',
            fillOpacity: 0.1,
            radius: 15000,
            weight: 1,
            dashArray: '5, 10'
        }).addTo(map);

        // Cities for Orientation (Radius markers)
        const cities = [
            { name: 'Wetzlar', coords: [50.5529, 8.5074] as [number, number] },
            { name: 'Gießen', coords: [50.5841, 8.6784] as [number, number] },
            { name: 'Herborn', coords: [50.6834, 8.3175] as [number, number] }
        ];

        cities.forEach(city => {
            const cityMarker = L.circleMarker(city.coords, {
                radius: 4,
                fillColor: '#ffffff',
                color: '#d4a574',
                weight: 2,
                opacity: 0.8,
                fillOpacity: 1
            }).addTo(map);

            cityMarker.bindTooltip(city.name, {
                permanent: true,
                direction: 'bottom',
                className: 'bg-transparent border-0 shadow-none text-white font-serif text-xs font-bold tracking-wider mt-1'
            });
        });

        // Custom Gold Marker using DivIcon
        const customIcon = L.divIcon({
            className: 'custom-map-icon',
            html: `<div class="relative flex items-center justify-center w-12 h-12" style="animation: pinDrop var(--motion-dramatic-duration) var(--motion-dramatic-easing) forwards;">
                 <div class="absolute w-full h-full bg-amber-500/30 rounded-full animate-ping"></div>
                 <div class="absolute w-8 h-8 bg-amber-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-primary z-20 hover:scale-110 transition-transform duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
               </div>`,
            iconSize: [48, 48],
            iconAnchor: [24, 24],
            popupAnchor: [0, -24],
        });

        // Coordinates for Wetzlar (Manufakturstraße 1 approx location)
        const marker = L.marker([50.5529, 8.5074], { icon: customIcon }).addTo(map);

        const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Manufakturstraße+1,+35578+Wetzlar";

        const popupContent = `
            <div class="text-center p-2 font-sans min-w-[200px]">
                <h3 class="font-bold text-slate-900 mb-0 text-base">Memo-BauT</h3>
                <p class="text-xs text-slate-500 font-medium uppercase tracking-wide m-0 mb-2">Garten- & Landschaftsbau</p>
                <div class="text-sm text-slate-700 mb-3 bg-slate-50 p-2 rounded border border-slate-100">
                    Manufakturstraße 1<br>35578 Wetzlar
                </div>
                <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" 
                   class="inline-flex items-center justify-center w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors no-underline">
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg>
                   Route planen
                </a>
            </div>
        `;
        marker.bindPopup(popupContent);

        mapInstanceRef.current = map;

        return () => {
            map.remove();
            mapInstanceRef.current = null;
        };
    }, []);

    return (
        <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-0 group">
            <div ref={mapContainerRef} className="h-full w-full bg-slate-900" />
            <div className="absolute bottom-4 right-4 z-[1000]">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Manufakturstraße+1,+35578+Wetzlar" target="_blank" rel="noopener noreferrer"
                    className="flex items-center bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl font-bold text-sm hover:bg-gray-50 transition-colors border-2 border-amber-500 no-underline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 text-amber-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    Auf Google Maps öffnen
                </a>
            </div>
        </div>
    );
};
