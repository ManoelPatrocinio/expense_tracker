import { Category } from "../types/Category";

export const categories: Category = {
  expense: { title: "Despesa", color: "red", expense: true },
  income: { title: "Renda", color: "green", expense: false },
  food: { title: "Alimentação", color: "blue", expense: true },
  leisure: { title: "Lazer", color: "aqua", expense: true },
  transport: { title: "Transporte", color: "gray", expense: true },
  investment: { title: "Investimento", color: "lime", expense: true },
};
