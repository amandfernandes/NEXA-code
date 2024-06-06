import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #003154;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
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

export const Loading = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: #fff;
`;

export const CancelButton = styled.button`
  grid-area: cancel; 
  background-color: transparent;
  color: #003154;
  border: none;
  text-decoration: underline; 
  padding: 8px 16px; 
  font-size: 14px;
  cursor: pointer; 
`;
