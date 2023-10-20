//funções relacionadas  a data


export const getCurrentMonth = () => {
  let now = new Date();

  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

// filtra a lista pelo mes
// export const filterListByMonth = (list: Item[], date: string): Item[] => {
//   let newList: Item[] = [];

//   let [year, month] = date.split("-");

//   //verifica se a data do item é igual a data desejada

//   for (let i in list) {
//     if (
//       list[i].date.getFullYear() === parseInt(year) &&
//       list[i].date.getMonth() + 1 === parseInt(month)
//     ) {
//       newList.push(list[i]);
//     }
//   }

//   return newList;
// };

// formatar a data para o padrão brasileiro
export const FormatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

// formatar a data para o padrão yy/mm/dd
export const FormatDateYYMMDD = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();

  return `${year}-${addZeroToDate(month)}-${addZeroToDate(day)}`;
};

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");

  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};
