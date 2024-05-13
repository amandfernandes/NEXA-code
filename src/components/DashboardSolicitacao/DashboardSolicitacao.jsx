import React from 'react';
import SolicitacaoEspecifica from '../SolicitacaoEspecifica/SolicitacaoEspecifica';
import { Section, SSolicitacao, H2, SHistorico } from './Style'

export const DashboardSolicitacao = ({solicitacoes}) => (
  <Section>
    <SSolicitacao>
        {solicitacoes.map(solicitacao => (
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
      <H2>Histórico</H2>
    </SHistorico>
  </Section>
)
