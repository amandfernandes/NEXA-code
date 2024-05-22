/* Esse componente vai tratar do histórico de interação */
import React from 'react';
import { ContainerCard, DataDiv, Span } from './Style';

const getColor = (status) => {
  switch(status) {
    case 'Concluded':
      return 'green';
    case 'Pending':
      return 'red';
    case 'Progress':
      return 'orange';
    default:
      return '#003154';
  }
}

const HistoricoCard = (props) => (
  <ContainerCard>
    <DataDiv id="data">
      <Span id="id">{props.id}</Span>
      <Span id="status" style={{ color: getColor(props.status) }}>{props.status}</Span>
      <Span id="action">{props.action}</Span>
      <Span id="time">{props.time}</Span>
    </DataDiv>
  </ContainerCard>
);

export default HistoricoCard;
