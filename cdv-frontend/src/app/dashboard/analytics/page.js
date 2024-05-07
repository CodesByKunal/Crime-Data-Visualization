import ChartContainer from "@/Components/ChartContainer";
import Linechart from "@/Components/Charts/LineChart.js";
import Piechart from "@/Components/Charts/PieChart";
import Radarchart from "@/Components/Charts/RadarChart";
import Barchart from "@/Components/Charts/BarChart";
import fetchRecord from "@/utils/fetchRecords";

export default async function Chart(request) {
  try {
    const records = await fetchRecord();
    console.log(records);
  } catch (error) {
    console.error("Failed to fetch records:", error.message);
  }
  
  const data = [
    {
      name: "2016",
      Cases: 390,
    },
    {
      name: "2017",
      Cases: 100,
    },
    {
      name: "2018",
      Cases: 37,
    },
    {
      name: "2019",
      Cases: 28,
    },
    {
      name: "2020",
      Cases: 20,
    },
    {
      name: "2021",
      Cases: 43,
    },
    {
      name: "2022",
      Cases: 79,
    },
    {
      name: "2023",
      Cases: 185,
    },
    {
      name: "2024",
      Cases: 118,
    },
  ];
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
    { name: "Heinous", value: 73 },
    { name: "Non-Heinous", value: 927 },
  ];

  return (
    <>
      <div className="bg-gray-950 w-full h-full mt-2 rounded-lg p-2 grid sm:grid-cols-12 gap-2">
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
      </div>
    </>
  );
}
