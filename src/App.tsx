import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
import { TableArea } from "./components/TableArea";
import { categories } from "./data/categories";
import {getCurrentMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";
import { api } from "./lib/axios";
import Chart from 'chart.js/auto'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Despesas A.A',
      data:[12,20,33,98,23,32,42,34,35,20,34,25],
      backgroundColor: 'rgba(9, 9, 121, 1)',
      
    },
    
  ],
};

const App = () => {
  const [list, setList] = useState<null | Item[]>(); // lista com todos os item
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //return o mes atual
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    api.get(`/list_by_date/${currentMonth}`).then((response)=>{
      setList(response.data.events);
      console.log("response.data.events",response.data.events)
    })
  },[currentMonth])

  useEffect(() => {
    let expenseCount = 0;
    let incomeCount = 0;

    list?.map((item)=>{

      if (categories[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value;
      }
      return 0

    })
    setExpense(expenseCount);
    setIncome(incomeCount);

  }, [list]);


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };
  const handleAddItem = async (item: Item) => {
   
    await api
    .post("/add_event",item)
    .then((response) => {
      window.location.reload()
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  };
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAddItem={handleAddItem} />
        {list ? (
          <TableArea list={list} />
        ):(
          <p>Sem lançamento</p>
        )} 
      </C.Body>

      <Bar options={options} data={data} />;
    </C.Container>
  );
};

export default App;
