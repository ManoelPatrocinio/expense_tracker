import { useEffect, useState } from "react";
import * as C from "./chats_style";
import { InfoArea } from "../../components/InfoArea";

import { categories } from "../../data/categories";
import {getCurrentMonth } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { api } from "../../lib/axios";
import { VerticalBarChart } from "../../components/VerticalBarChart";
import { PirChart } from "../../components/PieChart";
import { Header } from "../../components/Header";

type totalPercategory ={
  category:string, value:number 
}
export const Charts = () => {
  const [list, setList] = useState<null | Item[]>(); // lista com todos os item
  const [datasBycategory, setListByCategory] = useState<null | totalPercategory[]>(); 
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //return o mes atual
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    api.get(`/list_by_date/${currentMonth}`).then((response)=>{
      setList(response.data.events);
      console.log("response.data.events",response.data.events)
    })
  },[currentMonth])



  useEffect(()=>{
    api.get(`/balance_by_category/${currentMonth}`).then((response)=>{
      setListByCategory(response.data.balanceCategory);
      console.log("response.data.events",response.data.balanceCategory)
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

  return (
    <C.Container>
      <Header/>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <C.ChartsContainer>
          <C.VerticalChart>
            <VerticalBarChart apiData={[12, 20, 33, 98, 23, 32, 42, 34, 35, 20, 34, 25]}/>
          </C.VerticalChart>
          <C.PizzaChart>

         { datasBycategory && <PirChart datas={datasBycategory}/>}
          </C.PizzaChart >
        </C.ChartsContainer>
       
      </C.Body>
    </C.Container>

    
  );
};


