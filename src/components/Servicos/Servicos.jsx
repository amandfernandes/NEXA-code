import React, { useState } from 'react';
import { DashboardContainer, Title, RequestsContainer, RequestTitle, ButtonsContainer, Button, RequestDetailsContainer, Detail, RequestInfo, RequestStatus } from './Style';

const Servicos = () => {
    const [requests, setRequests] = useState([
        { id: 1, user: 'Clinic', date: '02/04/2024', status: 'Pending' },
        { id: 2, user: 'Clinic', date: '02/04/2024', status: 'Completed' },
        // Adicione mais dados conforme necessário
    ]);

    return (
        <DashboardContainer>
            <Title>Últimas solicitações</Title>
            <RequestsContainer>
                <ButtonsContainer>
                    <Button>Dosimetria Clínica</Button>
                    <Button>Dosimetria Pré-Clínica</Button>
                    <Button>Modelagem Computacional</Button>
                    <Button>Radiosinoviortese</Button>
                    <Button>Segmentação e Quantificação</Button>
                </ButtonsContainer>
            </RequestsContainer>

            <RequestDetailsContainer>
                {requests.map((request, index) => (
                    <Detail key={request.id}>
                        <RequestInfo>ID: {request.id}</RequestInfo>
                        <RequestInfo>User: {request.user}</RequestInfo>
                        <RequestInfo>Data da solicitação: {request.date}</RequestInfo>
                        <RequestStatus>Status: {request.status}</RequestStatus>
                        <ButtonsContainer>
                            {["Acessar"].map((action, i) => (
                                <Button key={i} onClick={() => console.log(`Request ${index + 1} ${action === 'Acessar'}`)}>{action}</Button>
                            ))}
                        </ButtonsContainer>
                    </Detail>
                ))}
            </RequestDetailsContainer>
        </DashboardContainer>
    );
};

export default Servicos;
