import React from 'react';
import { Button } from '../components/ui/button';

interface MapPopupProps {
    title: string;
    description: string;
    onViewDetails: () => void;
}

const MapPopup: React.FC<MapPopupProps> = ({ title, description, onViewDetails }) => {
    return (
        <div className="bg-white p-3 rounded-md shadow-md max-w-[250px]">
            <h3 className="text-sm font-medium text-primary mb-1">{title}</h3>
            <p className="text-xs mb-2">{description}</p>
            <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={onViewDetails}
            >
                View More Details
            </Button>
        </div>
    );
};

export default MapPopup;
