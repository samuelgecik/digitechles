import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { cn } from '../lib/utils';
import type { PointData } from '../lib/types';

// Fix for default icon issue with Webpack/Next.js
// @ts-ignore - Workaround for Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
// @ts-ignore - Workaround for Leaflet type issue
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Default map center (Slovakia) and zoom
const defaultCenter: L.LatLngExpression = [48.669, 19.699];
const defaultZoom = 7;

interface MapComponentProps {
  points: PointData[];
  onPointSelect: (point: PointData) => void;
  className?: string;
}

export default function MapComponent({ points, onPointSelect, className }: MapComponentProps) {
  return (
    <div className={cn("h-[60vh] md:h-[70vh] w-full rounded-md border border-border overflow-hidden", className)}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points && points.map(point => (
          <Marker
            key={point.id}
            position={point.coordinates}
            eventHandlers={{
              click: () => {
                onPointSelect(point);
              },
            }}
          >
            <Popup className="leaflet-popup-content-wrapper">
              <div className="leaflet-popup-content p-2">
                <h3 className="font-semibold text-primary">{point.name}</h3>
                <p className="text-sm my-1">Zone: {point.zoneId}</p>
                <p className="text-sm my-1">Area: {point.areaSize} ha</p>
                <button
                  className="text-sm text-blue-600 hover:underline mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPointSelect(point);
                  }}
                >
                  More Details →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}