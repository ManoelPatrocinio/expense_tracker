import styled from "styled-components";


export const Header = styled.header`

  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 1%,
    rgba(9, 9, 121, 1) 46%,
    rgba(0, 35, 255, 1) 100%
  );
  max-width:100vw;
  height: 9.375rem;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 3.5rem;

  @media(max-width:580px){
    padding: 0 1.5rem !important;
  }
`;
export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #eee;
`;