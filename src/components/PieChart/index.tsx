import { Chart as ChartJS, ArcElement, Tooltip, Legend,Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as C from "./styler";


ChartJS.register(ArcElement, Tooltip, Legend,Title);

export const data = {
  labels: ['Renda', 'Transporte', 'Despesas', 'Alimentação', 'lazer'],
  datasets: [
    {
      label: 'Por Categoria',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        '#008000',
        '#808080',
        '#ff0000',
        '#0000ff',
        '#00ffff',
      ],
      
    },
   
  ],

};

export function PirChart() {

  return (
    <C.Container>
        <Pie data={data} />
    </C.Container>
  )
}
