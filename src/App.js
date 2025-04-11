import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { facilities } from "./data/facilities";

const getIcon = (type) => {
  if (type.toLowerCase().includes("crushing")) {
    return L.icon({
      iconUrl: "/crushing.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  } else {
    return L.icon({
      iconUrl: "/refinery.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  }
};

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[20, 0]} // Global view with good coverage of Europe, Argentina, Brazil
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; OpenStreetMap contributors'
          url="https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=XmaHIv1FUPKsjE50mQHV"
        />
        {facilities.map((site, index) => (
          <Marker
          key={index}
          position={[site.lat, site.lon]}
          icon={getIcon(site.type)}
        >
          <Popup>
            <strong>{site.name}</strong><br />
            Type: {site.type}<br />
            Location: {site.city}, {site.country}<br />
            Capacity: {site.capacity}<br />
            Commodity: {site.commodity}
          </Popup>
        </Marker>
      
        ))}
      </MapContainer>
    </div>
  );
}

export default App;