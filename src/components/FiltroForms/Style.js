import styled from 'styled-components';

export const Filtro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: '#ffffff'; // Cor de fundo é #003154 quando o filtro está ativo, e branca quando não está
    color: '#003154'; // Cor do texto é branca quando o filtro está ativo, e #003154 quando não está
    border: solid 1px #dcdcdc;
    border-radius: 10px; // Bordas mais achatadas
    padding: 10px 20px;
    margin: 0 10px; // Mais espaço entre os botões
    cursor: pointer;

    &.active {
      background-color: '#003154'; // Cor de fundo é #003154 quando o filtro está ativo
      color: '#ffffff'; // Cor do texto é branca quando o filtro está ativo
    }

    &:hover {
      background-color: ${props => props.isActive ? '#ffffff' : '#003154'}; // Cor de fundo é #003154 quando o filtro está ativo, e branca quando não está
      color: ${props => props.isActive ? '#003154' : '#ffffff'}; // Cor do texto é branca quando o filtro está ativo, e #003154 quando não está
    }

    &:active, &:focus {
      background-color: ${props => props.isActive ? '#ffffff' : '#003154'}; // Cor de fundo é #003154 quando o filtro está ativo, e branca quando não está
      color: ${props => props.isActive ? '#003154' : '#ffffff'}; // Cor do texto é branca quando o filtro está ativo, e #003154 quando não está
    }
  }
`;
