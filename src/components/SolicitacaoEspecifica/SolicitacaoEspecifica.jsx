import React, { useState } from "react";
import Relatorio from "../Relatorio/Relatorio"; // Importar componente Relatorio
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
} from "./Style"; // Importar componentes de estilo

const SolicitacaoEspecifica = ({ id, client, date, status, forms }) => {
  // Definir estados para gerenciar upload, carregamento e exibição do relatório
  const [uploadError, setUploadError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showRelatorio, setShowRelatorio] = useState(false);

  // Função para lidar com o upload do relatório
  const handleRelatorio = async (uploadedFile) => {
    setIsLoading(true); // Indicar carregamento em andamento
    try {
      // Chamar a função de upload do relatório (implementação específica em Relatorio.js)
      await Relatorio(uploadedFile);
      setIsLoading(false); // Upload concluído
      setShowRelatorio(true); // Exibir o relatório após o upload
    } catch (error) {
      console.error("Erro ao carregar relatório:", error);
      setUploadError(error.message); // Exibir mensagem de erro
      setIsLoading(false); // Carregamento finalizado
    }
  };

  return (
    <Container>
      <Header>
        <Cliente>{id} {client}</Cliente>
        <Data>{date}</Data>
      </Header>

      <Status>{status}</Status>
      <Forms>{forms}</Forms>

      <Dados>Dados do Cliente</Dados>

      <BotoesContainer>
        <Button id="Relatorio" onClick={() => setShowRelatorio(true)}>
          Enviar Relatório
        </Button>
        {showRelatorio && (
          <Relatorio
            onUpload={handleRelatorio}
            setShowRelatorio={setShowRelatorio}
          />
        )}
        <DownloadButton id="Arquivos Download">Download</DownloadButton>
      </BotoesContainer>

      {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}
      {isLoading && <LoadingMessage>Carregando...</LoadingMessage>}
    </Container>
  );
};

export default SolicitacaoEspecifica;
