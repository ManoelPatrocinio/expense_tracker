import styled from "styled-components";

export const TableLine = styled.tr`
  button{
    width: 2rem;
    height: 2rem;
    
    padding: 0;
    margin: 0;

    border: 0;
    background: transparent;
    cursor:pointer;
  }

`;
export const TableColumn = styled.td`
  width: 20%;
  padding: 10px 0;
  text-align: center;
`;

export const Category = styled.div<{ color: string }>`
  width: 6rem;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
  

  @media (max-width: 768px) {
    width: 3rem;
    white-space: nowrap;
    overflow: hidden; /* "overflow" value must be different from "visible" */
  
    text-overflow: ellipsis;
  }
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
