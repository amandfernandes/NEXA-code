import React from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";
import data from '../data/Solicitacoes.json';
import action from '../data/Historico.json';
import client from '../data/Clientes.json';
import DashboardSolicitacao from "../components/DashboardSolicitacao/DashboardSolicitacao";
import DownloadImages from "../components/Download/Download";

const SolicitacaoComponent = () => {
  const { id } = useParams();
  const solicitacao = data.find((solicitacao) => solicitacao.id === id);
  const historicos = action.filter((historico) => historico.id === id);
  const clientes = client.filter((clientes) => clientes.idSolicitacao === id);

  if (!solicitacao) {
    return <p>Solicitação não encontrada</p>;
  }

  return (
    <Base>
      <DashboardSolicitacao 
        solicitacoes={[solicitacao]} // Passa um array com a solicitação
        historicos={historicos}
        clientes={clientes}
      />
    </Base>
  );
};

export default SolicitacaoComponent;