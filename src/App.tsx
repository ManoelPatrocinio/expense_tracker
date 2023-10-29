import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
import { TableArea } from "./components/TableArea";
import { categories } from "./data/categories";
import {getCurrentMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";
import { api } from "./lib/axios";
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
    </C.Container>
  );
};

export default App;
