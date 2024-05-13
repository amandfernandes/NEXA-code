// Style.js
import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 20px;
  padding: 8px 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  
  input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 5px;
    font-size: 16px;

    &::placeholder {
      color: #999;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    color: #001354;

    svg {
      font-size: 20px;
    }
  }
`;
