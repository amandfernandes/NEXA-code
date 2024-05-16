import React from 'react';
import SolicitacaoEspecifica from '../SolicitacaoEspecifica/SolicitacaoEspecifica';
import { Section, SSolicitacao, H2, SHistorico } from './Style'
import HistoricoCard from '../HistoricoCard/HistoricoCard';

export const DashboardSolicitacao = ({solicitacoes, historicos}) => (
  <Section>
    <SSolicitacao>
        {solicitacoes && solicitacoes.map(solicitacao => (
          <SolicitacaoEspecifica 
            key={solicitacao.id}
            id={solicitacao.id}
            client={solicitacao.client}
            date={solicitacao.date}
            status={solicitacao.status}
            forms={solicitacao.forms}
            />))}
    </SSolicitacao>
    <SHistorico>
    {historicos && historicos.map(historico => (
          <HistoricoCard
            key={historico.id}
            id={historico.id}
            client={historico.action}
            date={historico.time}
            status={historico.status}
            forms={historico.forms}
            />))}
    </SHistorico>
  </Section>
)
