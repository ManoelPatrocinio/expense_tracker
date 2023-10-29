import { Item } from "../../types/Item";
import * as C from "./styler";

import { categories } from "../../data/categories";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
  onAddItem: (item: Item) => void;
};

export const InputArea = ({ onAddItem }: Props) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<Item>({
    mode: "onTouched",
  });
  let categoryKeys: string[] = Object.keys(categories);

  async function handleAddEvent  (item: Item)  {
    const valueFormated = item.value?.toString().replace(",", ".");
    onAddItem({
      ...item,
      value: parseFloat( valueFormated)
    });
    reset()
  };

  return (
    <C.Container  onSubmit={handleSubmit(handleAddEvent)} >
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          {...register("date", {
            required: "Obrigatório",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="date"
          render={({ message }) => (
            <small style={{color:"red"}}>
              {message}
            </small>
          )}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          {...register("category", {
            required: "Obrigatório",
          })}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
        <ErrorMessage
          errors={errors}
          name="category"
          render={({ message }) => (
            <small style={{color:"red"}}>
              {message}
            </small>
          )}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type="text"
          {...register("title", {
            required: "Obrigatório",
            minLength: {
              value: 3,
              message: "Min. 3 caracteres",
            },
            maxLength: {
              value: 100,
              message: "Limite  atingido",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => (
            <small style={{color:"red"}}>
              {message}
            </small>
          )}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="text"
          {...register("value", {
            required: "Obrigatório",
            pattern: {
              value: /^[\d,?!]+$/,
              message:
                "formato: 1,50 ou 1200,50",
            }
          })}
        />
        <ErrorMessage
          errors={errors}
          name="value"
          render={({ message }) => (
            <small style={{color:"red"}}>
              {message}
            </small>
          )}
        />
      </C.InputLabel>
      <C.InputLabel id="btnAdd">
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button type="submit">Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
