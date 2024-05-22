import React from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";
import data from '../data/Solicitacoes.json';
import action from '../data/Historico.json'
import { DashboardSolicitacao } from "../components/DashboardSolicitacao/DashboardSolicitacao";


const SolicitacaoComponent = () => {
  const { id } = useParams();
  const solicitacao = data.find((solicitacao) => solicitacao.id === id);
  const historico = action.find((historico) => historico.id === id);

  if (!solicitacao) {
    return <p>Solicitacao not found</p>;
  }

  if (!historico){
    return <p>Historico not found</p>
  }

  return (
    <Base>
      <DashboardSolicitacao 
        solicitacoes={[solicitacao]}
        historicos={[historico]}
        />
    </Base>
  );
};

export default SolicitacaoComponent;