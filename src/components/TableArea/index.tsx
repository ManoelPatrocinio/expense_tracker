import { Item } from "../../types/Item";
import * as C from "./styles";

import { TableItem } from "../TableItem";

type Props = {
  list: Item[];
};
export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={25}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={25}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn width={25}>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={25}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
