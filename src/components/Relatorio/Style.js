import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "uploader uploader"
    "cancel send"; 
  grid-template-columns: 1fr 1fr; 
  gap: 10px;                
`;

export const FileUploaderContainer = styled.div`
  grid-area: uploader; 
  background-color: #fff;
  border: 1px solid #001354;
  border-radius: 5px;
  padding: 8px 12px;  // Add padding to the container
`;

export const LabelContainer = styled.label`
  display: flex;
  align-items: center; 
  cursor: pointer; 
  justify-content: space-between; 
  width: 100%;       // Make sure label takes full width

  span { 
    font-size: 14px; 
    color: #001354;
  }
`;

export const InputFile = styled.input`
  display: none; 
`;

export const FileName = styled.span`
  font-size: 14px;
  color: #333;     
  display: block;   // To make it occupy the full width
  width: 100%;
  overflow: hidden; // Handle potential text overflow
  text-overflow: ellipsis; // Add ellipsis if text is too long
  white-space: nowrap; // Prevent text wrapping
`;

export const UploadButton = styled.button`
  grid-area: send; 
  background-color: #003154;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    background-color: #003154;
    cursor: not-allowed;
  }
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