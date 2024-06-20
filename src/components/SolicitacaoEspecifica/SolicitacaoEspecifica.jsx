import React, { useState } from "react";
import Relatorio from "../Relatorio/Relatorio";
import DownloadImages from "../Download/Download";
import {
  Container,
  Header,
  Cliente,
  Data,
  Status,
  Forms,
  Dados,
  BotoesContainer,
  Button,
  DownloadButton,
  ErrorMessage,
  LoadingMessage,
} from "./Style";

const getColor = (status) => {
  switch (status) {
    case "Concluded":
      return "green";
    case "Pending":
      return "red";
    case "Progress":
      return "orange";
    default:
      return "#003154";
  }
};

const SolicitacaoEspecifica = ({ id, client, date, status, forms, nome, contato, endereco }) => {
  const [uploadError, setUploadError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showRelatorio, setShowRelatorio] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const handleRelatorio = async (uploadedFile) => {
    setIsLoading(true);
    try {
      // Simulate uploading the file (replace with actual logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("File uploaded:", uploadedFile);

      setIsLoading(false);
      setShowRelatorio(false); // Hide Relatorio after upload
    } catch (error) {
      console.error("Erro ao carregar relatório:", error);
      setUploadError(error.message);
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    setShowDownload(true);
  };

  const handleCancel = () => {
    setShowDownload(false);
  };

  return (
    <Container>
      <Header>
        <Cliente>{id} {client}</Cliente>
        <Data>{date}</Data>
      </Header>

      <Status style={{ color: getColor(status) }}>{status}</Status>

      <Forms>{forms}</Forms>

      <Dados> Dados do Cliente </Dados>
      <Forms><strong>Injetected: </strong>40</Forms>


      <BotoesContainer>
        {!showRelatorio && (
          <Button id="Relatorio" onClick={() => setShowRelatorio(true)}>
            Enviar Relatório
          </Button>
        )}

        {showRelatorio && (
          <Relatorio onUpload={handleRelatorio} setShowRelatorio={setShowRelatorio} />
        )}

        {!showDownload && (
          <DownloadButton id="Arquivos Download" onClick={handleDownload}>
            Download
          </DownloadButton>
        )}

        {showDownload && (
          <DownloadImages handleCancel={handleCancel} />
        )}
      </BotoesContainer>

      {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}
      {isLoading && <LoadingMessage>Carregando...</LoadingMessage>}
    </Container>
  );
};

export default SolicitacaoEspecifica;