"use client";

import { useEffect } from "react";

export default function Heatmap({ map }) {
  useEffect(() => {
    let heat = L.heatLayer(
      [
        [50.5, 30.5, 520],
        [50.6, 30.4, 600],
      ],
      { radius: 25 }
    ).addTo(map.current);
  }, [map]);

  return;
}
