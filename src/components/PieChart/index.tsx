import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as C from "./styler";
import { categories } from '../../data/categories';


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
  const colors = labels.map(item => categories[item].color);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Por Categoria',
        data: values,
        backgroundColor: colors,
      },

    ],

  };
  return (
    <C.Container>
      <Pie data={data} />
    </C.Container>
  )
}
