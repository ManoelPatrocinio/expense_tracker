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
          <C.TableHeadColumn width={20}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={20}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn width={20}>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={20}>Valor</C.TableHeadColumn>
          <C.TableHeadColumn width={4}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25001 22L8.85001 18.8C8.63335 18.7167 8.42901 18.6167 8.23701 18.5C8.04501 18.3833 7.85768 18.2583 7.67501 18.125L4.70001 19.375L1.95001 14.625L4.52501 12.675C4.50835 12.5583 4.50001 12.4457 4.50001 12.337V11.663C4.50001 11.5543 4.50835 11.4417 4.52501 11.325L1.95001 9.375L4.70001 4.625L7.67501 5.875C7.85835 5.74167 8.05001 5.61667 8.25001 5.5C8.45001 5.38333 8.65001 5.28333 8.85001 5.2L9.25001 2H14.75L15.15 5.2C15.3667 5.28333 15.571 5.38333 15.763 5.5C15.955 5.61667 16.1423 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.5543 19.5 11.663V12.337C19.5 12.4457 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.25001ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2373 8.84167 9.56201 9.525C8.88668 10.2083 8.54935 11.0333 8.55001 12C8.55001 12.9667 8.88735 13.7917 9.56201 14.475C10.2367 15.1583 11.066 15.5 12.05 15.5Z" fill="black" />
          </svg>
          </C.TableHeadColumn>
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
