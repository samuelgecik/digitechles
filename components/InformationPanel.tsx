import React from 'react';
import { cn } from '../lib/utils';
import type { PointData } from '../lib/types';

interface InformationPanelProps {
  selectedPoint: PointData | null;
  className?: string;
}

interface InformationPanelProps {
  selectedPoint: PointData | null;
  className?: string;
  isExpanded?: boolean;
}

export default function InformationPanel({ selectedPoint, className, isExpanded = false }: InformationPanelProps) {
  return (
    <div className={cn(
      "p-4 border border-border rounded-md bg-card text-card-foreground shadow-sm",
      isExpanded ? "space-y-6" : "space-y-2",
      className
    )}>
      {!selectedPoint ? (
        <p className="text-muted-foreground italic">Click a point on the map to see details.</p>
      ) : (
        <div>
          <h3 className={cn(
            "font-semibold text-primary",
            isExpanded ? "text-2xl mb-6" : "text-lg mb-3"
          )}>
            {selectedPoint.name}
          </h3>
          
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-muted-foreground">Coordinates</h4>
                <p className="font-mono text-sm">{selectedPoint.coordinates.join(', ')}</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-muted-foreground">Area Size</h4>
                <p>{selectedPoint.areaSize} ha</p>
              </div>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-muted-foreground">Soil Type</h4>
              <p>{selectedPoint.soilType}</p>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-muted-foreground">Ideal Tree Species</h4>
              <ul className="list-disc list-inside">
                {selectedPoint.idealTreeSpecies.map(species => (
                  <li key={species}>{species}</li>
                ))}
              </ul>
            </div>

            {isExpanded && (
              <>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-muted-foreground">Carbon Sequestration</h4>
                  <p className="text-2xl font-bold text-primary">
                    {selectedPoint.baselineCredits} tons CO₂
                  </p>
                  <p className="text-sm mt-1">Projected over 30 years</p>
                </div>

                <div className="bg-muted/50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-muted-foreground">Environmental Impact</h4>
                  <p className="text-sm mt-1">Detailed impact analysis coming soon</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}