export interface PointData {
  id: string;
  name: string;
  coordinates: [number, number];
  zoneId: string;
  areaSize: number;
  soilType: string;
  idealTreeSpecies: string[];
  baselineCredits: number;
}

export interface PredefinedPointsData {
  points: PointData[];
}