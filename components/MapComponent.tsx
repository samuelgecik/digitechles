'use client';

import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import type { PointData } from '../lib/types';
import dynamic from 'next/dynamic';

// Dynamically import the map components with no SSR
const MapWithNoSSR = dynamic(
  () => import('../components/Map').then(mod => mod.default),
  {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center">Loading map...</div>
  }
);

// Default map center (Slovakia) and zoom
const defaultCenter: [number, number] = [48.669, 19.699];
const defaultZoom = 7;

interface MapComponentProps {
  points: PointData[];
  onPointSelect: (point: PointData) => void;
  onMoreDetails?: () => void;
  className?: string;
}

export default function MapComponent({ points, onPointSelect, onMoreDetails, className }: MapComponentProps) {
  return (
    <div className={cn("h-[80vh] md:h-[70vh] w-full rounded-md border border-border overflow-hidden", className)}>
      <MapWithNoSSR
        points={points}
        onPointSelect={onPointSelect}
        onMoreDetails={onMoreDetails}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      />
    </div>
  );
}