import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const MonthArrow = styled.div`
  width: 2.5rem;
  text-align: center;
  font-size: 1.563rem;
  cursor: pointer;
`;
export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;
export const ResumeArea = styled.div`
  display: flex;
  flex: 2; //para ter o doblo da area do que o monthArea
  justify-content: space-around;
`;
