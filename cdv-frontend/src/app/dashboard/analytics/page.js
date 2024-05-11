"use client";
import ChartContainer from "@/Components/ChartContainer";
import Linechart from "@/Components/Charts/LineChart.js";
import Piechart from "@/Components/Charts/PieChart";
import Radarchart from "@/Components/Charts/RadarChart";
import Barchart from "@/Components/Charts/BarChart";
import { useFetchData } from "@/hooks/useFetchData";

export default function Chart() {
  
  const { data, error } = useFetchData();

  const data_1 = [
    {
      policeStation: "Annapoorneshwari Nagar PS",
      Case: 102,
    },
    {
      policeStation: "Adugodi Traffic PS",
      Case: 116,
    },
    {
      policeStation: "Airport PS",
      Case: 201,
    },
    {
      policeStation: "Airport Traffic PS",
      Case: 137,
    },
    {
      policeStation: "Ashoknagar PS",
      Case: 31,
    },
  ];
  const data_3 = [
    { name: "Heinous", value: 8918 },
    { name: "Non-Heinous", value: 91082 },
  ];

  return (
    <>
      <div className="bg-gray-950 w-full h-full mt-2 rounded-lg p-2 grid sm:grid-cols-12 gap-2">
        {data.length > 0 ? (
          <>
            <ChartContainer>
              <Linechart records={data} />
            </ChartContainer>

            <ChartContainer>
              <Piechart records={data_3} />
            </ChartContainer>

            <ChartContainer>
              <Radarchart records={data_1} />
            </ChartContainer>

            <ChartContainer>
              <Barchart records={data} />
            </ChartContainer>
          </>
        ) : (
          <h1 className="absolute top-2/4 left-2/4 text-3xl text-violet-700">
            {error ? (
              <span className="text-red-600">Fetch Failed !</span>
            ) : (
              "Loading...."
            )}
          </h1>
        )}
      </div>
    </>
  );
}
