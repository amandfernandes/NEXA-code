import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from "react-icons/hi";
import { DSection, Section, H2, Cards, Button, SectionHalf, SectionHalfContent, LinkButton} from './Style';
import CardSolicitacao from '../CardSolicitacao/CardSolicitacao';
import HistoricoCard from '../HistoricoCard/HistoricoCard';
import RequestStatus from '../RequestStatus/RequestStatus'; // Importe o componente RequestStatus
import { TiArrowMaximise } from 'react-icons/ti';

const DashboardSection = ({ filteredSolicitacao, filteredHistorico, originalSolicitacao }) => ( 
  // Adicione originalSolicitacao como prop
  <DSection> {/* Agora DSection está definido */}
    <Section>
      <H2>ÚLTIMAS SOLICITAÇÕES
        <LinkButton to={"/servicos"}><Button><TiArrowMaximise size={'25'} /></Button></LinkButton>
      </H2>
      <Cards>
        {filteredSolicitacao.map((item) => (
          <CardSolicitacao
            key={item.date} // Use a data como chave
            id={item.id}
            client={item.client}
            date={item.date}
            status={item.status}
            forms={item.forms}
          />
        ))}
      </Cards>
    </Section>

    <SectionHalf>
      <SectionHalfContent>
        <H2>ÚLTIMAS ATUALIZAÇÕES</H2>
        <Cards>
          {filteredHistorico.map((itens) => (
            <HistoricoCard
              key={itens.date}
              id={itens.id}
              action={itens.action}
              status={itens.status}
              time={itens.date}
              forms={itens.forms}
            />
          ))}
        </Cards>
      </SectionHalfContent>

      <SectionHalfContent>
        <H2>STATUS DAS SOLICITAÇÕES</H2>
        <RequestStatus requestsData={originalSolicitacao} /> {/* Passe originalSolicitacao */}
      </SectionHalfContent>
    </SectionHalf>

  </DSection>
);

export default DashboardSection;