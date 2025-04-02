import React from 'react';
import { Button } from '../components/ui/button';

interface ZoneData {
    name: string;
    altitudeRange: [number, number];
    soilType: string;
    idealSpecies: string[];
}

interface SidebarContentProps {
    zoneData: ZoneData;
    onViewDashboard: () => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ zoneData, onViewDashboard }) => {
    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-lg font-medium text-primary">{zoneData.name}</h2>
                <p className="text-sm text-muted-foreground">
                    {zoneData.altitudeRange[0]}-{zoneData.altitudeRange[1]}m altitude
                </p>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-1">Soil Type:</h3>
                <p className="text-sm">{zoneData.soilType}</p>
            </div>

            <div>
                <h3 className="text-sm font-medium mb-1">Ideal Species:</h3>
                <ul className="text-sm list-disc pl-5">
                    {zoneData.idealSpecies.map((species, index) => (
                        <li key={index}>{species}</li>
                    ))}
                </ul>
            </div>

            <Button
                className="w-full mt-2"
                onClick={onViewDashboard}
            >
                View Dashboard
            </Button>
        </div>
    );
};

export default SidebarContent;
