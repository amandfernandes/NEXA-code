import styled from "styled-components";


export const borderRadius = '5px';
export const boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

export const FileUploader = styled.div`
  max-width: 300px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
`;

export const InputFile = styled.input`
  display: block;
  margin: 10px 0;
`;

export const UploadButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: ${borderRadius};
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
