import React from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";
import data from '../data/Solicitacoes.json';
import action from '../data/Historico.json';
import DashboardSolicitacao from "../components/DashboardSolicitacao/DashboardSolicitacao";
import Download from "../components/Download/Download";

const SolicitacaoComponent = () => {
  const { id } = useParams();
  const solicitacao = data.find((solicitacao) => solicitacao.id === id);
  const historicos = action.filter((historico) => historico.id === id);

  if (!solicitacao) {
    return <p>Solicitação não encontrada</p>;
  }

  return (
    <Base>
      <DashboardSolicitacao 
        solicitacoes={[solicitacao]}
        historicos={historicos}
      />
      <Download/>
    </Base>
  );
};

export default SolicitacaoComponent;
