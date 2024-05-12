import React from "react";
import SolicitacaoEspecifica from "../components/SolicitacaoEspecifica/SolicitacaoEspecifica";
import { useParams } from "react-router-dom";
import Base from "./Base";
import data from '../data/Solicitacoes.json';

const TitleComponent = ({ id }) => {
  return (
    <div className="title">
      <h4>Solicitacao {id}</h4>
    </div>
  );
};

const SolicitacaoComponent = () => {
  const { id } = useParams();
  const solicitacao = data.find((solicitacao) => solicitacao.id === id);

  if (!solicitacao) {
    return <p>Solicitacao not found</p>;
  }

  return (
    <Base>
      <TitleComponent id={id} />
      <SolicitacaoEspecifica {...solicitacao} />
    </Base>
  );
};

export default SolicitacaoComponent;