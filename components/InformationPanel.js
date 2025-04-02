import React from 'react';
import { cn } from '../lib/utils'; // Import cn utility

export default function InformationPanel({ selectedPoint, className }) {
  return (
    // Use cn for merging classes, apply card-like styling with Tailwind
    <div className={cn("p-4 border border-border rounded-md bg-card text-card-foreground shadow-sm", className)}>
      {!selectedPoint ? (
        <p className="text-muted-foreground italic">Click a point on the map to see details.</p>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">{selectedPoint.name}</h3>
          <div className="space-y-2 text-sm"> {/* Use spacing utility */}
            <p>
              <strong className="text-foreground/80">Coordinates:</strong>{' '}
              {selectedPoint.coordinates.join(', ')}
            </p>
            <p>
              <strong className="text-foreground/80">Area Size:</strong>{' '}
              {selectedPoint.areaSize} ha
            </p>
            <p>
              <strong className="text-foreground/80">Soil Type:</strong>{' '}
              {selectedPoint.soilType}
            </p>
            <p>
              <strong className="text-foreground/80">Ideal Trees:</strong>{' '}
              {selectedPoint.idealTreeSpecies.join(', ')}
            </p>
            <p>
              <strong className="text-foreground/80">Baseline Credits:</strong>{' '}
              {selectedPoint.baselineCredits}
            </p>
            <p>
              <strong className="text-foreground/80">Zone ID:</strong>{' '}
              <span className="font-mono bg-muted px-1.5 py-0.5 rounded">{selectedPoint.zoneId}</span> {/* Example mono font usage */}
            </p>
            {/* More details and zone-specific info will be added in later phases */}
          </div>
        </div>
      )}
    </div>
  );
}