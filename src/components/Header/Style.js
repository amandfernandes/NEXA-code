import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9; // Cor de fundo clara
  padding: 10px 50px;

  h2 {
    color: #003154; // Cor do texto #03154
    text-align: right; // Alinhado à direita
  }

  #Nave {
    display: flex;
    justify-content: center; // Centralizado
    flex-grow: 1;

    a {
      background-color: '#003154'; // Cor de fundo é #003154 quando o filtro está ativo
      color: '#ffffff'; // Cor do texto é branca quando o filtro está ativo
      text-decoration: none;
      margin: 0 15px;

      &:active, &:focus {
        background-color: '#ffffff'; // Cor de fundo é #003154 quando o filtro está ativo
        color: '#ffffff'; // Cor do texto é branca quando o filtro está ativo
      }
    }
  }

  #Login {
    a {
      background-color: '#003154'; // Cor de fundo é #003154 quando o filtro está ativo
      color: '#ffffff'; // Cor do texto é branca quando o filtro está ativo
      text-decoration: none;
      display: flex;
      justify-content: center; // Centralizado
      flex-grow: 1;
      padding: 10px 10px;
      cursor: pointer;
      &:active, &:focus {
        background-color: '#fffffff'; // Cor de fundo é #003154 quando o filtro está ativo
        color: '#003154'; // Cor do texto é branca quando o filtro está ativo
      }
    }
  }
`;