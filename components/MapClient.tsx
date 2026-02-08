"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { spots } from "@/lib/spots";

export default function MapClient() {
  return (
    <MapContainer center={[43.5, -1.5]} zoom={7} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {spots.map((s) => (
        <Marker key={s.id} position={[s.lat, s.lng]}>
          <Popup>
            <div className="text-black">
              <div className="font-bold">{s.name}</div>
              <div>🌊 {s.wave} m</div>
              <div>💨 {s.wind} km/h</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
