import { Bar } from "react-chartjs-2";
import * as C from "./styler";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props ={
    apiData: number[];
}
export const VerticalBarChart = ({apiData}:Props) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Despesas A.A",
        data: apiData ,
        backgroundColor: "rgba(9, 9, 121, 1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      
    },
 
  };

  return (
    <C.Container>
      <Bar options={options} data={data} />
    </C.Container>
  );
};
