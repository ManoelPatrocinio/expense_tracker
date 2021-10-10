import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
`;
export const Header = styled.header`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 1%,
    rgba(9, 9, 121, 1) 46%,
    rgba(0, 35, 255, 1) 100%
  );
  height: 9.375rem;
  text-align: center;
`;
export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #eee;
  padding-top: 1.875rem;
`;
export const Body = styled.div`
  margin: 0 auto 30px auto;
  max-width: 980px;
  background-color: #fff;
  border-radius: 10px;
`;
