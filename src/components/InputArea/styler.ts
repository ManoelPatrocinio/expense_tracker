import styled from "styled-components";

export const Container = styled.form`
    width:100%;

    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    

  @media (max-width: 540px) {
    flex-direction: column !important;
    
  }
  
`;
export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
  @media (max-width: 540px) {
    width: 80% !important;
  }
`;
export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`;
export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`;
export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
  @media (max-width: 540px) {
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    height: auto !important;
  }
`;
