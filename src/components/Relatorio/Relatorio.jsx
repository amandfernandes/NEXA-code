// Relatorio.jsx
import React, { useState } from 'react';
import { FileUploaderContainer, InputFile, UploadButton, CancelButton, LabelContainer, FileName, Container } from './Style';
import { CiCirclePlus } from 'react-icons/ci';

const Relatorio = ({ onUpload, setShowRelatorio }) => {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadError("No file selected.");
      return;
    }

    setLoading(true);
    try {
      await onUpload(file);
      setFile(null);
      setLoading(false);
      setShowRelatorio(false); 
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(`Error uploading file: ${error.message}`);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setUploadError(null);
    setShowRelatorio(false);
  };

  return (
    <Container>
      <FileUploaderContainer>
        <LabelContainer htmlFor="file-upload">
          {/* Show filename or "ANEXAR ARQUIVO" */}
          {file ? (
            <FileName>{file.name}</FileName>
          ) : (
            <span>ANEXAR ARQUIVO</span>
          )}
          <CiCirclePlus size={25} />
          <InputFile id="file-upload" type="file" onChange={handleFileChange} />
        </LabelContainer> 
      </FileUploaderContainer>

      <div>
        <CancelButton onClick={handleCancel}>cancelar</CancelButton>
        <UploadButton onClick={handleUpload} disabled={!file}>
          {loading ? "Uploading..." : "ENVIAR"}
        </UploadButton>
        {uploadError && <div>{uploadError}</div>}
      </div>
    </Container>
  );
};

export default Relatorio;