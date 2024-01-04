//funções relacionadas  a data


export const getCurrentYearMonth = (date?:Date) => {
  let now = !date ? new Date() : date;
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  return `${year}-${month}`;
};
/*
  padStart() é uma função de string em JavaScript que permite adicionar caracteres à esquerda de uma string
   até que ela atinja um determinado comprimento 
*/



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
