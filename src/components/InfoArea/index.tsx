import { formatCurrentMonth, getCurrentYearMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import * as C from "./styler";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentData = new Date(parseInt(year), parseInt(month) - 1, 1); //crio um date com a data atual
    currentData.setMonth(currentData.getMonth() - 1); //diminuo um mes
    onMonthChange(getCurrentYearMonth(currentData));
  };
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentData = new Date(parseInt(year), parseInt(month) - 1, 1); //crio um date com a data atual
    currentData.setMonth(currentData.getMonth() + 1); //adiciona um mes
    onMonthChange(getCurrentYearMonth(currentData));

  };
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title={"Receitas"} value={income}  color={"green"}/>
        <ResumeItem title={"Despesas"} value={expense} color={"red"}/>
        <ResumeItem
          title={"Balanço"}
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
