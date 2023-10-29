import * as C from "./styler";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { api } from "../../lib/axios";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  async function handleRemoveItem(itemID: string) {

    await api.delete(`/remove_by_id/${itemID}`).then(() => {
      window.location.reload()
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <C.TableLine>
      <C.TableColumn>{item.date}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
      <button onClick={() => handleRemoveItem(item._id!)}>
        <svg width="18" height="20" viewBox="0 0 18 20"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.9989 4C17.2538 4.00028 17.4989 4.09788 17.6843 4.27285C17.8696 4.44782 17.9811 4.68695 17.9961 4.94139C18.011 5.19584 17.9282 5.44638 17.7646 5.64183C17.601 5.83729 17.369 5.9629 17.1159 5.993L16.9989 6H16.9179L15.9989 17C15.9989 17.7652 15.7066 18.5015 15.1816 19.0583C14.6566 19.615 13.9388 19.9501 13.1749 19.995L12.9989 20H4.99889C3.40089 20 2.09489 18.751 2.00689 17.25L2.00189 17.083L1.07889 6H0.998892C0.744013 5.99972 0.49886 5.90212 0.313524 5.72715C0.128188 5.55218 0.0166572 5.31305 0.00172004 5.05861C-0.0132171 4.80416 0.0695667 4.55362 0.233157 4.35817C0.396747 4.16271 0.628796 4.0371 0.881892 4.007L0.998892 4H16.9989ZM10.9989 0C11.5293 0 12.038 0.210714 12.4131 0.585786C12.7882 0.960859 12.9989 1.46957 12.9989 2C12.9986 2.25488 12.901 2.50003 12.726 2.68537C12.5511 2.8707 12.3119 2.98223 12.0575 2.99717C11.8031 3.01211 11.5525 2.92933 11.3571 2.76574C11.1616 2.60214 11.036 2.3701 11.0059 2.117L10.9989 2H6.99889L6.99189 2.117C6.96179 2.3701 6.83618 2.60214 6.64072 2.76574C6.44527 2.92933 6.19473 3.01211 5.94029 2.99717C5.68585 2.98223 5.44671 2.8707 5.27174 2.68537C5.09677 2.50003 4.99918 2.25488 4.99889 2C4.99873 1.49542 5.1893 1.00943 5.53239 0.639452C5.87548 0.269471 6.34574 0.0428433 6.84889 0.00500011L6.99889 0H10.9989Z" fill="#FF0000" />
        </svg>
      </button>

    </C.TableLine>
  );
};
