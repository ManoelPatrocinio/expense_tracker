export type Item = {
  _id?:string;
  date: string;
  category: string;
  title: string;
  value: number;
};


export type totalPercategory ={
  category:string, value:number 
}

export type expensePerMonth ={
  month:string, total:number 
}