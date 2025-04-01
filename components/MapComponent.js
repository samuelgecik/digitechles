import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet library

// Fix for default icon issue with Webpack/Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapComponent({ points, onPointSelect }) {
  return (
    <MapContainer center={[48.669, 19.699]} zoom={7} style={{ height: '80vh', width: '100%' }}>
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
            {point.name} - Click marker for details
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}