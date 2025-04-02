'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import type { PointData } from '../lib/types';

interface MapProps {
    points: PointData[];
    onPointSelect: (point: PointData) => void;
    onMoreDetails?: () => void;
    defaultCenter: [number, number];
    defaultZoom: number;
}

export default function Map({ points, onPointSelect, onMoreDetails, defaultCenter, defaultZoom }: MapProps) {
    // Initialize Leaflet icons inside useEffect to make sure it only runs client-side
    useEffect(() => {
        // Dynamically import Leaflet to avoid window not defined errors
        (async () => {
            const L = (await import('leaflet')).default;

            // Fix for default icon issue with Webpack/Next.js
            // Using a type-safe approach to avoid TypeScript errors
            // Fix for default icon issue with Webpack/Next.js by bypassing type check for private property
            delete (L.Icon.Default.prototype as any)._getIconUrl;

            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            });
        })();
    }, []);

    return (
        <MapContainer
            center={defaultCenter}
            zoom={defaultZoom}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {points && points.map(point => (
                <Marker
                    key={point.id}
                    position={point.coordinates}
                    eventHandlers={{
                        click: () => {
                            onPointSelect(point);
                        },
                    }}
                >
                    <Popup className="leaflet-popup-content-wrapper">
                        <div className="leaflet-popup-content p-2">
                            <h3 className="font-semibold text-primary">{point.name}</h3>
                            <p className="text-sm my-1">Zone: {point.zoneId}</p>
                            <p className="text-sm my-1">Area: {point.areaSize} ha</p>
                            <button
                                className="text-sm text-blue-600 hover:underline mt-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onMoreDetails?.();
                                }}
                            >
                                More Details →
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
