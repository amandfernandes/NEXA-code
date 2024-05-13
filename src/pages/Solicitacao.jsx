import React from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";
import data from '../data/Solicitacoes.json';
import { DashboardSolicitacao } from "../components/DashboardSolicitacao/DashboardSolicitacao";


const SolicitacaoComponent = () => {
  const { id } = useParams();
  const solicitacao = data.find((solicitacao) => solicitacao.id === id);

  if (!solicitacao) {
    return <p>Solicitacao not found</p>;
  }

  return (
    <Base>
      <DashboardSolicitacao solicitacoes={[solicitacao]}/>
    </Base>
  );
};

export default SolicitacaoComponent;