import React, { useState } from 'react';
import Layout from '../components/Layout';
import MapComponent from '../components/MapComponent'; // Changed from VegetationZoneMap
import SidebarContent from '../components/SidebarContent';
import ExpandedSidebarContent from '../components/ExpandedSidebarContent';
import type { PointData } from '../lib/types'; // Add this import

// Keep this for backward compatibility
interface ZoneData {
  name: string;
  altitudeRange: [number, number];
  soilType: string;
  idealSpecies: string[];
}

// Mock point data for demonstration (you should replace this with actual data)
const mockPoints: PointData[] = [
  {
    id: '1',
    name: 'Oak-Hornbeam Zone',
    coordinates: [48.7, 19.5],
    zoneId: 'Oak-Hornbeam',
    areaSize: 250,
    metadata: {
      altitudeRange: [300, 500],
      soilType: 'Loamy soil with good drainage',
      idealSpecies: ['European Oak', 'Common Hornbeam']
    }
  }
];

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<ZoneData | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<PointData | null>(null);

  const handlePointSelect = (pointData: PointData) => {
    setSelectedPoint(pointData);

    // For backward compatibility, create a ZoneData from the PointData
    const zoneData: ZoneData = {
      name: pointData.name,
      altitudeRange: pointData.metadata?.altitudeRange || [0, 0],
      soilType: pointData.metadata?.soilType || '',
      idealSpecies: pointData.metadata?.idealSpecies || []
    };

    setSelectedZone(zoneData);
  };

  const handleMoreDetails = () => {
    // This function will be called when "View More Details" is clicked in a popup
    console.log('More details requested for:', selectedPoint?.name);
  };

  // Regular sidebar content when a zone is selected
  const sidebarContent = selectedZone ? (
    <SidebarContent
      zoneData={selectedZone}
      onViewDashboard={() => { }} // This would trigger expansion in a real implementation
    />
  ) : (
    <div className="text-sm text-muted-foreground">
      Select a vegetation zone on the map to view details.
    </div>
  );

  // Expanded sidebar content for dashboard view
  const expandedContent = selectedZone ? (
    <ExpandedSidebarContent zoneName={selectedZone.name} />
  ) : null;

  return (
    <Layout
      sidebarContent={sidebarContent}
      expandedContent={expandedContent}
    >
      <MapComponent
        points={mockPoints}
        onPointSelect={handlePointSelect}
        onMoreDetails={handleMoreDetails}
      />
    </Layout>
  );
}