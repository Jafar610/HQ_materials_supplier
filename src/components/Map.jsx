import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon broken by webpack/vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Addis Ababa coordinates
const POSITION = [9.0107, 38.7613];

export default function Map() {
  return (
    <MapContainer
      center={POSITION}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "200px" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={POSITION}>
        <Popup>
          <strong>Rebar Building Center</strong>
          <br />
          Addis Ababa, Ethiopia
        </Popup>
      </Marker>
    </MapContainer>
  );
}
