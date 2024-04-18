import styled from 'styled-components';

export const Filtro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: #ffffff; // Cor de fundo é branca
    color: #003154; // Cor do texto é #003154
    border: solid 1px #dcdcdc;
    border-radius: 10px; // Bordas mais achatadas
    padding: 10px 20px;
    margin: 0 10px; // Mais espaço entre os botões
    cursor: pointer;

    &:hover {
      background-color: #003154; // Cor de fundo muda para #003154 quando passado sobre
      color: #ffffff; // Cor do texto muda para branca quando passado sobre
    }
    
    &:active, &:focus {
      background-color: #003154; // Cor de fundo muda para #003154 quando clicado ou focado
      color: #ffffff; // Cor do texto muda para branca quando clicado ou focado
    }
  }
`;
