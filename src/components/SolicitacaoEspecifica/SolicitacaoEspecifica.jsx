/* Esse componente vai tratar da solicitação detalhada */
import React, { useState } from "react";
import { Cliente, Data, Historico, Status, Forms, Dados, Botao, bt_download, bt_relatorio, Solicitacao, Button, Botoes } from "./Style";
import FileUploader from "../Relatorio/Relatorio";

const ErrorMessage = ({ error }) => {
  return <p style={{ color: "red" }}>{error}</p>;
};

// Use destructuring to extract props
const SolicitacaoEspecifica = ({ id, client, date, status, forms }) => {
  const [uploadError, setUploadError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUploader = async (uploadedFile) => {
    setIsLoading(true);
    try {
      await FileUploader(uploadedFile);
      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading relatorio:", error);
      setUploadError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Solicitacao>
      <Cliente>{id} {client}</Cliente>
      <Data>{date}</Data>
      <Historico>Histórico</Historico>
      <Status>{status}</Status>
      <Forms>{forms}</Forms>
      <Dados>Dados do Cliente</Dados>
      <Botoes>
        <FileUploader onUpload={handleFileUploader} />
        <Button>Download</Button>
      </Botoes>
      {uploadError && <ErrorMessage error={uploadError} />}
      {isLoading && <p>Uploading...</p>}
    </Solicitacao>
  );
};

export default SolicitacaoEspecifica;
