// HistoricoDados.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Container, Title, ListItem, ListItemText } from './Style';
import Relatorio from "../Relatorio/Relatorio";

const HistoricoDados = (props) => {
  const [history, setHistory] = useState([]);
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('Historico');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
    fetch('Solicitacoes.json')
      .then(response => response.json())
      .then(data => setSolicitacoes(data));
  }, []);

  const handleDownloadCompleted = useCallback(() => {
    setHistory((prevHistory) => [...prevHistory, { id: props.id, action: 'Download completed' }]);
  }, [props.id]);

  const saveHistoryToFile = (historyData) => {
    try {
      localStorage.setItem('Historico', JSON.stringify(historyData));
      console.log('History saved to file!');
    } catch (error) {
      console.error('Error saving history to file:', error);
    }
  };

  const handleReportSent = useCallback(async (solicitacaoId) => {
    const newHistory = [...history, { id: solicitacaoId, action: 'Report sent', status: 'concluido' }];

    setHistory(newHistory);
    updateSolicitacaoStatus(solicitacaoId, 'concluido');

    // Salvar o histórico no arquivo
    saveHistoryToFile(newHistory); 
  }, [history]);

  useEffect(() => {
    document.addEventListener('downloadCompleted', handleDownloadCompleted);
    document.addEventListener('reportSent', (event) => handleReportSent(event.detail.solicitacaoId));
    return () => {
      document.removeEventListener('downloadCompleted', handleDownloadCompleted);
      document.removeEventListener('reportSent', (event) => handleReportSent(event.detail.solicitacaoId));
    };
  }, [handleDownloadCompleted, handleReportSent]);

  const updateSolicitacaoStatus = (id, status) => {
    const solicitacaoIndex = solicitacoes.findIndex((solicitacao) => solicitacao.id === id);
    if (solicitacaoIndex !== -1) {
      solicitacoes[solicitacaoIndex].status = status;
      localStorage.setItem('Solicitacoes', JSON.stringify(solicitacoes));
    }
  };

  const renderHistoryItem = ({ id, action, status }, index) => (
    <ListItem key={index}>
      <ListItemText>
        {id} - {action} - {status || ''}
      </ListItemText>
    </ListItem>
  );

  return (
    <Container>
      <Title>Histórico</Title>
      <ul>
        {history.map(renderHistoryItem)}
      </ul>
      {solicitacoes.map((solicitacao) => (
        <Relatorio
          key={solicitacao.id}
          solicitacaoId={solicitacao.id}
          onReportSent={handleReportSent}
        />
      ))}
    </Container>
  );
};

export default HistoricoDados;
