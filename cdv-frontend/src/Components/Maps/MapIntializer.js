"use client";
import { useEffect, useRef } from "react";

export default function MapIntializer({ map, children }) {
  useEffect(() => {
    if (map.current) return;

    map.current = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.current);
  });

  return (
    <>
      <div className="h-full rounded-md" id="map"></div>
    </>
  );
}
