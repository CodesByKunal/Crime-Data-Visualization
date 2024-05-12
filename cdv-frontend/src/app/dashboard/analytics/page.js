"use client";
import ChartContainer from "@/Components/ChartContainer";
import Linechart from "@/Components/Charts/LineChart.js";
import Piechart from "@/Components/Charts/PieChart";
import Radarchart from "@/Components/Charts/RadarChart";
import Barchart from "@/Components/Charts/BarChart";
import { useFetchData } from "@/hooks/useFetchData";

export default function Chart() {
  const { data, error } = useFetchData();

  const data_3 = [
    { name: "Heinous", value: 8918 },
    { name: "Non-Heinous", value: 91082 },
  ];

  return (
    <>
      <div className="bg-gray-950 w-full h-full mt-2 rounded-lg p-2 grid sm:grid-cols-12 gap-2">
        {Object.keys(data).length > 0 ? (
          <>
            <ChartContainer>
              <Linechart records={data.dataYearCase} />
            </ChartContainer>

            <ChartContainer>
              <Piechart records={data_3} />
            </ChartContainer>

            <ChartContainer>
              <Radarchart records={data.dataPSCases} />
            </ChartContainer>

            <ChartContainer>
              <Barchart records={data.dataYearCase} />
            </ChartContainer>
          </>
        ) : (
          <div className="absolute top-2/4 left-2/4 ">
            {error ? (
              <span className="text-3xl text-red-600">Fetch Failed !</span>
            ) : (
              <div
                className="inline-block sm:h-16 sm:w-16 h-8 w-8 animate-spin rounded-full border-4 border-solid border-violet-500 border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
