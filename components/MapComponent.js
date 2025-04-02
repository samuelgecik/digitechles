import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Keep Leaflet's base CSS
import L from 'leaflet';
import { cn } from '../lib/utils'; // Import the cn utility

// Fix for default icon issue with Webpack/Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Default map center (Slovakia) and zoom
const defaultCenter = [48.669, 19.699];
const defaultZoom = 7;

export default function MapComponent({ points, onPointSelect, className }) {
  return (
    // Use cn utility to merge default classes with any passed className
    // Apply Tailwind classes for sizing, border, rounded corners, overflow
    <div className={cn("h-[60vh] md:h-[70vh] w-full rounded-md border border-border overflow-hidden", className)}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        // style prop is removed as Tailwind handles sizing via the parent div
        // className="w-full h-full" // Ensure MapContainer fills the div
        scrollWheelZoom={true} // Enable scroll wheel zoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
            <Popup>
              <span className="font-semibold">{point.name}</span><br/>
              Click marker for details
            </Popup>
          </Marker>
        ))}
        {/* Add ZoomControl if needed, React-Leaflet might add it by default */}
        {/* <ZoomControl position="topright" /> */}
      </MapContainer>
    </div>
  );
}