"use client";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export default function Barchart({ records, height, width }) {
  return (
    <>
      <BarChart
        height={height}
        width={width}
        data={records}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Case Count" dataKey="case" fill="#8884d8" />
      </BarChart>
    </>
  );
}
