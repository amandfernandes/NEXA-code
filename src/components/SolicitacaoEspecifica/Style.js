import styled from 'styled-components';

export const Solicitacao = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
`;

export const Cliente = styled.h1`
  color: #000;
  width: 407px;
  font-size: 32px;
`;

export const Data = styled.p`
  color: #000;
`;

export const Historico = styled.button`
  background-color: transparent;
  border: solid 2px #000;
`;

export const Status = styled.p`
    font-size: 12px;
    color: #219177;
    text-align: center;
    width: 110px;
    height: 20px;
    border: 1px solid #219177;
    border-radius: 25px;
    align-self: flex-start;
    font-size: 15px;
`;

export const Forms = styled.form`
    color: #000;
    font-size: 24px;
    padding-top:50px;
`;

export const Dados = styled.section`
    color: #000;
    font-size: 24px;
    padding-top:50px;
`;

export const Botao = styled.button`
 background-color: blue; // Supondo que o azul seja a cor principal do botão
 color: white;
 border-radius: 5px; 
 padding:10px; 
 margin-top :10px; 
 border:none; 
 cursor:pointer;

 &:hover {
   background-color :darkblue; // Um tom mais escuro para o efeito de hover
 }
`;


export const Button = styled.button`
  background-color: #003154; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px; /* Ajuste este valor conforme necessário */
`;

export const Client = styled.span`
width: 407px;
color: rgba(0,0,0,1);
font-family: Lexend Exa;
font-weight: Regular;
font-size: 32px;`
;
export const Date = styled.span`
width: 337px;
    color: rgba(0,0,0,1);
    padding-left: 100px;
    top: 120px;
    font-family: Lexend Exa;
    font-weight: Regular;
    font-size: 20px;
    `;

export const History = styled.span`
width: 480px;
    color: rgba(0,0,0,1);
    padding-left: 100px;
    top: 120px;
    font-family: Lexend Exa;
    font-weight: Regular;
    font-size: 20px;
    opacity: 1;
    text-align: center;
    `;

export const Status1 = styled.div`
    color: rgba(33,145,119,1);
    top: 20px;
    font-family: Lexend Exa;
    font-weight: Regular;
    font-size: 20px;
    `;
    
export const Form = styled.div`
    color: rgba(0,0,0,1);
    font-family: Lexend Exa;
    font-weight: Regular;
    font-size: 24px;
    padding-top:50px;
    `; 

export const Datas = styled.div`
    color: rgba(0,0,0,1);
    font-family: Lexend Exa;
    font-weight: Regular;
    font-size: 24px;
    padding-top:50px;
    `;
  
  export const bt_download = styled.div`
  width: 287px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 20px;
    left: 23px;
    font-family: Duru Sans;
    font-weight: Regular;
    font-size: 24px;
    opacity: 1;
    text-align: left;
    `; 

export const bt_relatorio = styled.div`
width: 239px;
    color: rgba(0,49,84,1);
    position: absolute;
    top: 20px;
    left: 47px;
    font-family: Duru Sans;
    font-weight: Regular;
    font-size: 24px;
    opacity: 1;
    text-align: left;
    `;

    export const Solicitacoes = styled.div`
    width: 407px;
    position: relative;
    top: 30px;
    left: 300px;`
    ;

    export const Botoes = styled.div`
    padding-top:50px`
    ;