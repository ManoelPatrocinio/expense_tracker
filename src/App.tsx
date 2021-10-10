import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories, categories as dataCategories } from "./data/categories";
import { items as dataItems } from "./data/Items";
import { getCorrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
const App = () => {
  const [list, setList] = useState(dataItems); // lista com todos os item
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCorrentMonth()); //retorn o mes atual
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // monitora a inserção de novo item(despesa, ou renda) e troca de mês
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let expenseCount = 0;
    let incomeCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setExpense(expenseCount);
    setIncome(incomeCount);
  }, [filteredList]);

  const hendleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };
  const hendleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistemas Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={hendleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAddItem={hendleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
