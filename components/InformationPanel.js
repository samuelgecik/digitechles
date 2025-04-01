import React from 'react';

export default function InformationPanel({ selectedPoint }) {
  if (!selectedPoint) {
    return <div>Click a point on the map to see details.</div>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h2>{selectedPoint.name}</h2>
      <p><strong>Coordinates:</strong> {selectedPoint.coordinates.join(', ')}</p>
      <p><strong>Area Size:</strong> {selectedPoint.areaSize} ha</p>
      <p><strong>Soil Type:</strong> {selectedPoint.soilType}</p>
      <p><strong>Ideal Trees:</strong> {selectedPoint.idealTreeSpecies.join(', ')}</p>
      <p><strong>Baseline Credits:</strong> {selectedPoint.baselineCredits}</p>
      <p><strong>Zone ID:</strong> {selectedPoint.zoneId}</p>
      {/* More details and zone-specific info will be added in later phases */}
    </div>
  );
}