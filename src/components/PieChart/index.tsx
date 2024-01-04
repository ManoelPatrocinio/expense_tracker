import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as C from "./styler";


ChartJS.register(ArcElement, Tooltip, Legend, Title);

type totalPercategory = {
  category: string, value: number
}

interface IPirChartProps {
  datas: totalPercategory[];
}
export function PirChart({ datas }: IPirChartProps) {
  const labels = datas.map(item => item.category);
  const values = datas.map(item => item.value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Por Categoria',
        data: values,
        backgroundColor: [
          '#008000',
          '#808080',
          '#0000ff',
          '#ff0000',
          '#00ffff',
        ],

      },

    ],

  };
  return (
    <C.Container>
      <Pie data={data} />
    </C.Container>
  )
}
