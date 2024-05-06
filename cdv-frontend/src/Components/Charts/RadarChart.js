"use client"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
export default function Radarchart({ records, height, width }) {
  return (
    <>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={records}
        height={height}
        width={width}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="policeStation" />
        <PolarRadiusAxis type="number" />
        <Radar
          name="Case Count"
          dataKey="Case"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.8}
        />
        <Legend />
      </RadarChart>
    </>
  );
}
