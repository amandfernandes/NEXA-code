import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Cliente = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Data = styled.div`
  font-size: 16px;
`;

export const Status = styled.div`
  display: inline-block;
  font-size: 12px;
  color: #219177;
  text-align: center;
  width: 100px;
  height: 15px;
  border: 1px solid #219177;
  border-radius: 20px;
`;

export const Forms = styled.div`
  font-size: 16px;
  padding: 10px;
`;

export const Dados = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BotoesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Button = styled.button`
  background-color: #001354; 
  border: 1px solid #001354;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #001354; /* Darker green */
    color:#ffff;
  }
`;

export const Relatorio = styled.div`
  background-color: #fff; 
  border: 1px solid #001354;
  color: #001354;
`;

export const DownloadButton = styled(Button)`
  background-color: #001354; /* Blue */
  font-color:# ffff;

`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const LoadingMessage = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;