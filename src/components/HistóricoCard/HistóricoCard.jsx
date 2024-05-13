/* Esse componente vai tratar do histórico de interação */
import React, { useState, useEffect } from "react";
import HistoricoDados from "../HistoricoDados/HistoricoDados";

const HistoricoCard = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('Historico');
    if (storedHistory) {
      try {
        const parsedHistory = JSON.parse(storedHistory);
        setHistory(parsedHistory);
      } catch (error) {
        console.error("Error parsing stored history:", error);
      }
    }
  }, []);

  return (
    <div>
      <h2>Histórico</h2>
      {history.map((item) => (
        <HistoricoDados
          key={item.id}
          id={item.id}
          status={item.status}
          action={item.action}
          time={item.timestamp} // Use the stored timestamp
        />
      ))}
    </div>
  );
};

export default HistoricoCard;
