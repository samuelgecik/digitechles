// Point data structure for map markers
export interface PointData {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  zoneId: string;
  areaSize: number;
  metadata?: {
    altitudeRange?: [number, number];
    soilType?: string;
    idealSpecies?: string[];
    [key: string]: any;
  };
}

export interface PredefinedPointsData {
  points: PointData[];
}