import React, { useState } from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";
import FileUploader from "../components/Relatorio/Relatorio";
import data from '../data/Solicitacoes.json';

const SolicitacaoComponent = () => {
  const { id } = useParams();
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
    <Base>
      <div className="title">
        <h4>Solicitacao {id}</h4>
        <SolicitacaoEspecifica />
      </div>
      <div className="buttons">
        <FileUploader onUpload={handleFileUploader} />
        <button>Download</button>
      </div>
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
    </Base>
  );
};

export default SolicitacaoComponent;