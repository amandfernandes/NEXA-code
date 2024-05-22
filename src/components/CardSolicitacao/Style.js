import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5; /* Cor de fundo do container */
  width: 100%; /* Largura do container */
  height: 100%; /* Altura do container */
  padding: 20px; /* Espaçamento interno do container */
`;

export const ContainerCard = styled.div`
    width: 205px;
    height: 80px;
    border-radius: 10px;
    background-color: #F9F9F9; 
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export const DataDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 30px);
    grid-template-areas: 
    "a a b"
    "c c c"
    "d d e";
`;

export const Span = styled.span`
   &#id {
       font-weight: bold;
       color: #333; 
       font-size :15px ;
       grid-area: a;
   }

   &#status {
    display: inline-block;
    font-size: 12px;
    text-align: center;
    width: 100px;
    height: 15px;
    border: 1px solid;
    border-radius: 20px;
    align-self: flex-start;
    grid-area: b;
   }

   &#forms {
     color:#666; 
     font-size :12px ;
     grid-area: c;
   }

   &#date {
     color:#666; 
     font-size :12px ;
     text-align:right ;
     align-self: center;
     grid-area: e;
   }
`;

export const Button = styled.button`
    border-radius :15px ;  
    background-color: #003154; 
    color: white;
    padding: 5px 10px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    grid-area: d;
    width: 75px;
    height: 25px;
`;
