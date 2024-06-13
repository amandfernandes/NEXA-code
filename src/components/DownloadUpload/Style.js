import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const InputFile = styled.input`
  display: none; /* Esconde o input de arquivo */
`;

export const Button = styled.button` 
  background-color: transparent;
  border: none;
  color:#001354;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px; 
`;

export const FileInfo = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px; /* Define uma altura para o loading */
`;

export const LoadingIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid #f3f3f3; /* Cor da borda do loading */
  border-radius: 50%;
  border-top-color: #007bff; /* Cor da borda superior do loading */
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;