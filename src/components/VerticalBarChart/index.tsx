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
import { expensePerMonth } from "../../types/Item";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props ={
    apiData: expensePerMonth[];
}
export const VerticalBarChart = ({apiData}:Props) => {

  const labels = apiData.map(item => item.month);
  const values = apiData.map(item => item.total);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Despesas A.A",
        data: values ,
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
