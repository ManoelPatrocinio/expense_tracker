import { formatCurrentMonth } from "../../helpers/dateFilter";
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
  const hendlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentData = new Date(parseInt(year), parseInt(month) - 1, 1); //crio um date com a data atual
    currentData.setMonth(currentData.getMonth() - 1); //diminuo um mes
    onMonthChange(`${currentData.getFullYear()}-${currentData.getMonth() + 1}`);
  };
  const hendleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentData = new Date(parseInt(year), parseInt(month) - 1, 1); //crio um date com a data atual
    currentData.setMonth(currentData.getMonth() + 1); //diminuo um mes
    onMonthChange(`${currentData.getFullYear()}-${currentData.getMonth() + 1}`);
  };
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={hendlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={hendleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title={"Receitas"} value={income} />
        <ResumeItem title={"Despesas"} value={expense} />
        <ResumeItem
          title={"Balanço"}
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
