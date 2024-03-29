import { useEffect, useState } from "react";
import * as C from "./home_style";
import { InfoArea } from "../../components/InfoArea";
import { InputArea } from "../../components/InputArea";
import { TableArea } from "../../components/TableArea";
import { categories } from "../../data/categories";
import { getCurrentYearMonth } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { api } from "../../lib/axios";
import { Header } from "../../components/Header";
import Swal from "sweetalert2";
import { QRcode } from "../../components/QRCoder";

export const Home = () => {
  const [list, setList] = useState<null | Item[]>(); // lista com todos os item
  const [currentMonth, setCurrentMonth] = useState(getCurrentYearMonth()); //return o ano-mes atual
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [openReaderQrCode, setOpenReaderQrCode] = useState<boolean>(false);

  useEffect(() => {
    api.get(`/list_by_date/${currentMonth}`).then((response) => {
      setList(response.data.events);
    }).catch((err)=>{
      Swal.fire({
        position: "center",
        icon: "error",
        title: err.data.message,
        showConfirmButton: true,
      });
    })
  }, [currentMonth])

  useEffect(() => {
    let expenseCount = 0;
    let incomeCount = 0;

    list?.map((item) => {

      if (categories[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value;
      }
      return 0

    })
    setExpense(expenseCount);
    setIncome(incomeCount);

  }, [list]);


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };


  const handleAddItem = async (item: Item) => {

    await api
      .post("/add_event", item)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(()=>{
          window.location.reload()

        },2000)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.data.message,
          showConfirmButton: true,
        });
      });
  };


  return (
    <C.Container>
      <Header/>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAddItem={handleAddItem} />
        <button 
          id="btn_reader_qrcode"
          onClick={()=>setOpenReaderQrCode(old => !old)}
        >Ler QR Code</button>
        {openReaderQrCode &&(
          <QRcode/>
        )}
        {list && list.length > 0 ? (
          <TableArea list={list} />
        ) : (
          <h3 className="noResult">Sem eventos...</h3>
        )}
      </C.Body>
    </C.Container>


  );
};


