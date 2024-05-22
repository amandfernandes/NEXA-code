// DashboardSolicitacao.js
import React from 'react';
import SolicitacaoEspecifica from '../SolicitacaoEspecifica/SolicitacaoEspecifica';
import HistoricoCard from "../HistoricoCard/HistoricoCard"
import { Section, SSolicitacao, H2, SHistorico } from './Style';

const DashboardSolicitacao = ({ solicitacoes, historicos }) => (
  <Section>
    <SSolicitacao>
      {solicitacoes && solicitacoes.map((solicitacao) => (
        <SolicitacaoEspecifica
          key={solicitacao.id}
          id={solicitacao.id}
          client={solicitacao.client}
          date={solicitacao.date}
          status={solicitacao.status}
          forms={solicitacao.forms}
        />
      ))}
    </SSolicitacao>
    <SHistorico>
      {historicos && historicos.map((historico) => (
        <HistoricoCard
          key={historico.id}
          id={historico.id}
          action={historico.action} 
          time={historico.time} 
          status={historico.status}
          forms={historico.forms}
        />
      ))}
    </SHistorico>
  </Section>
);

export default DashboardSolicitacao;
