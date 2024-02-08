import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Body = styled.div`
  display:flex;
  flex-direction:column;
  align-items:start;
  margin: 0 auto 30px auto;
  max-width: 980px;
  background-color: #fff;
  border-radius: 10px;

  .noResult{
    width:100%;

    font-size:1.5rem;
    text-align:center;
    color:#050342;
  }

  #btn_reader_qrcode{
    border: none;
    color:#050342;
    cursor: pointer;
    font-size:1rem;
    font-weight:500;
    background-color:transparent;

    margin: 1rem auto;
  }
`;



