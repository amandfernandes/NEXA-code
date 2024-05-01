import React from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";

export default function Solicitacao() {
  const { id } = useParams();
  return (
    <Base>
      <div className="title">
        <h4>Solicitacao {id}</h4>
        <SolicitacaoEspecifica />
      </div>
      <div>
        <button>Enviar Relatório</button>
        <button>Download</button>
      </div>
    </Base>
  );
}
