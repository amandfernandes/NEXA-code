/* Esse componente vai tratar do histórico de interação */
import React from "react";
import { ContainerCard , DataDiv, Span } from './Style';

const HistoricoCard = (props) => (
    <ContainerCard>
        <DataDiv id="data">
            <Span id="id"> {props.id} </Span>
            <Span id="status"> {props.status} </Span>
            <Span id="action"> {props.action} </Span>
            <Button>Acessar</Button>
            <Span id="time"> {props.time} </Span>
        </DataDiv>
    </ContainerCard>
)

export default HistoricoCard;