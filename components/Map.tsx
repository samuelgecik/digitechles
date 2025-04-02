'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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
            delete (L.Icon.Default.prototype as any)._getIconUrl;

            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            });
        })();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <MapContainer
            center={defaultCenter}
            zoom={defaultZoom}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
                    <Popup>
                        <h3 className="font-semibold text-sm text-primary mb-1">{point.name}</h3>
                        <p className="text-xs my-0.5">Zone: {point.zoneId}</p>
                        <p className="text-xs my-0.5">Area: {point.areaSize} ha</p>
                        {onMoreDetails && (
                            <button
                                className="text-xs text-blue-600 hover:underline mt-1.5 w-full text-left"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onMoreDetails();
                                }}
                            >
                                View More Details &rarr;
                            </button>
                        )}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
