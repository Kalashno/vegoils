import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { facilities } from "./data/facilities";

// Default fallback icon (optional)
const defaultIcon = L.icon({
  iconUrl: "/default.png", // Replace with your default icon if you have one
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const getIcon = (type) => {
  if (!type) return defaultIcon;
  const t = type.toLowerCase();
  if (t.includes("crushing")) {
    return L.icon({
      iconUrl: "/crushing.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  } else if (t.includes("refinery")) {
    return L.icon({
      iconUrl: "/refinery.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  }
  return defaultIcon;
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[20, 0]} // Global view
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=XmaHIv1FUPKsjE50mQHV"
        />
        {facilities.map((site, index) => {
          const lat = site.Latitude ?? site.lat;
          const lon = site.Longitude ?? site.lon;
          const type = site.Type ?? site.type;
          const name = site.Name ?? site.name;

          // Only render if coordinates are valid
          if (!lat || !lon) return null;

          return (
            <Marker
              key={index}
              position={[lat, lon]}
              icon={getIcon(type)}
            >
              <Popup>
                <strong>{site.name}</strong><br />
                Type: {type}<br />
                Location: {site.City || site.city}, {site.Country || site.country}<br />
                Capacity: {site.Capacity || site.capacity}<br />
                Commodity: {site.Commodity || site.commodity}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default App;
