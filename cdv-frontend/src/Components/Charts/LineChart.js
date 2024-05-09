"use client";
import { LineChart, CartesianGrid, XAxis, Tooltip, YAxis, Legend, Line, } from "recharts";

export default function Linechart({ records,height, width }) {

  console.log(records)
  return (
    <>
      <LineChart
        data={records}
        height={height}
        width={width}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          name="Case Count"
          type="monotone"
          dataKey="case"
          stroke="#8884d8"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
}
