import React, { useState } from 'react';
import Layout from '../components/Layout';
import VegetationZoneMap from '../components/VegetationZoneMap';
import SidebarContent from '../components/SidebarContent';
import ExpandedSidebarContent from '../components/ExpandedSidebarContent';

interface ZoneData {
  name: string;
  altitudeRange: [number, number];
  soilType: string;
  idealSpecies: string[];
}

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<ZoneData | null>(null);

  const handleZoneSelect = (zoneData: ZoneData) => {
    setSelectedZone(zoneData);
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
      <VegetationZoneMap onZoneSelect={handleZoneSelect} />
    </Layout>
  );
}