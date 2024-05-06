"use client";
import { ResponsiveContainer } from "recharts";
export default function ChartContainer({ children }) {
  return (
    <>
      <div className="border-2 sm:col-span-6  h-full rounded-md">
        <ResponsiveContainer width="100%" height="100%" debounce={1}>
          {children}
        </ResponsiveContainer>
      </div>
    </>
  );
}
