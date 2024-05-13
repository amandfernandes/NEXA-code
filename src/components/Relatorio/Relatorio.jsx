// Relatorio.jsx
import React, { useState } from 'react';
import { FileUploaderContainer, InputFile, FileName, UploadButton, CancelButton } from './style';
import { CiCirclePlus } from 'react-icons/ci';

const Relatorio = ({ solicitacaoId, onReportSent }) => {
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
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileData = {
          id: solicitacaoId,
          file: reader.result,
        };
        localStorage.setItem(`file-${solicitacaoId}`, JSON.stringify(fileData));
        setFile(null);
        setLoading(false);

        // Dispara o evento 'reportSent' com solicitacaoId no detalhe
        const event = new CustomEvent('reportSent', { detail: { solicitacaoId: solicitacaoId } });
        document.dispatchEvent(event);

        // Chama onReportSent após disparar o evento
        onReportSent && onReportSent(solicitacaoId);
      };

      reader.onerror = (error) => {
        console.error("Error uploading file:", error);
        setUploadError(`Error uploading file: ${error.message}`);
        setLoading(false);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(`Error uploading file: ${error.message}`);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setUploadError(null);
  };

  return (
    <>
      <FileUploaderContainer>
        ANEXAR ARQUIVOS
        <label htmlFor="file-upload">
          <CiCirclePlus size={25} />
        </label>
        <InputFile id="file-upload" type="file" onChange={handleFileChange} />
        {file && <FileName>{file.name}</FileName>}
      </FileUploaderContainer>
      {file && (
        <div>
          <UploadButton onClick={handleUpload} disabled={loading}>
            {loading ? "Uploading..." : "ENVIAR"}
          </UploadButton>
          <CancelButton onClick={handleCancel}>cancelar</CancelButton>
        </div>
      )}
      {uploadError && <div>{uploadError}</div>}
    </>
  );
};

export default Relatorio;