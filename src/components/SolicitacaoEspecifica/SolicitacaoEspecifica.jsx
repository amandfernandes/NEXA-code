/* Esse componente vai tratar da solicitação detalhada */
import React, { useState } from "react";
import { Cliente, Data, Historico, Status, Dosimetria, Dados, Botao, bt_download, bt_relatorio, Solicitacao, Button, Botoes  } from "./Style";
import FileUploader from "../Relatorio/Relatorio";

const SolicitacaoEspecifica = () => {
  const [uploadError, setUploadError] = useState(null);

  const handleFileUploader = async (file) => {
    try {
      await FileUploader(file);
    } catch (error) {
      console.error("Error uploading relatorio:", error);
      setUploadError(error.message);
    }
  };
  return (
    <Solicitacao>
      <Cliente>Cliente</Cliente>
      <Data>28/04/2024</Data>
      <Historico>Histórico</Historico>
      <Status>Status</Status>
      <Dosimetria>Dosimetria Clínica</Dosimetria>
      <Dados>Dados do Cliente</Dados>
      <Botoes>
        <FileUploader onUpload={handleFileUploader} />
        <Button>Download</Button>
      </Botoes>
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
    </Solicitacao>
  );
};

export default SolicitacaoEspecifica;
