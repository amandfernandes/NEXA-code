/* Componente trata dos cards de pré visualização */

import React from "react";
import { ContainerCard , DataDiv, Span, Button } from './Style';
import { Link } from "react-router-dom";

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

const CardSolicitacao = (props) => (
    <ContainerCard>
        <DataDiv id="data">
            <Span id="id"> {props.id} {props.client} </Span>
            <Span id="status" style={{ color: getColor(props.status) }}> {props.status} </Span>
            <Span id="forms"> {props.forms} </Span>
            <Link to={"/solicitacao/"+props.id}><Button>Acessar</Button></Link>
            <Span id="date"> {props.date} </Span>
        </DataDiv>
    </ContainerCard>
)

export default CardSolicitacao;
