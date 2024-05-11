"use client";
import Heatmap from "@/Components/Maps/Heatmap";
import MapIntializer from "@/Components/Maps/MapIntializer";
import { useRef } from "react";

export default function Map() {
  const map = useRef();

  return (
    <>
      <MapIntializer map={map} />
      <Heatmap map={map} />
    </>
  );
}
