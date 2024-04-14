// Style.js
import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f5f5f5;
`;

export const Title = styled.h1`
    color: #333;
    font-size: 24px;
`;

export const RequestsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const RequestTitle = styled.h2`
    color: #666;
    font-size: 20px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;

export const Button = styled.button`
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

export const RequestDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Detail = styled.div`
    margin-bottom: 10px;
    padding: 10px;
    background-color: #ddd;
`;

export const RequestInfo = styled.p`
    margin: 0;
    color: #333;
`;

export const RequestStatus = styled.p`
    margin: 0;
    color: ${props => props.children.includes('Pending') ? 'red' : 'green'};
`;
