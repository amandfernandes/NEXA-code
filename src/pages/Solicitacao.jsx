import React from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";
import data from '../data/Solicitacoes.json';

export default function Solicitacao() {
  const { id } = useParams();

  return (
    <Base>
      <div className="title">
        <h4>Solicitacao {id}</h4>
        <SolicitacaoEspecifica props={data} />
      </div>      
    </Base>
  );
}
