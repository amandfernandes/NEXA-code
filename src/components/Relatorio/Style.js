import styled from 'styled-components';

export const FileUploaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 8px 12px;
  margin-bottom: 10px;

  label {
    cursor: pointer;
    margin-right: 10px;
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const FileName = styled.span`
  font-size: 14px;
  color: #333;
`;

export const UploadButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  color: #6c757d;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;