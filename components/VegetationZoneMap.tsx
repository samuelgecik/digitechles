import React, { useCallback } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface VegetationZoneMapProps {
    onZoneSelect: (zoneData: any) => void;
}

const VegetationZoneMap: React.FC<VegetationZoneMapProps> = ({ onZoneSelect }) => {
    // This is just a placeholder for demonstration
    const handleZoneClick = useCallback((e: any) => {
        // In a real implementation, this would extract zone data from the GeoJSON properties
        const mockZoneData = {
            name: "Oak-Hornbeam Zone",
            altitudeRange: [300, 500],
            soilType: "Loamy soil with good drainage",
            idealSpecies: ["European Oak", "Common Hornbeam"]
        };

        // For now, just call onZoneSelect directly
        // In a real implementation, this would show a popup first
        onZoneSelect(mockZoneData);
    }, [onZoneSelect]);

    return (
        <div className="w-full h-full">
            <MapContainer
                center={[48.7, 19.5]}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
                onClick={handleZoneClick}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* GeoJSON layers would be added here */}
            </MapContainer>
        </div>
    );
};

export default VegetationZoneMap;
