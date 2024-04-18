import React, { useState } from 'react';
import { Filtro } from './Style';

const FiltroComponent = ({ requests, setFilteredRequests }) => {
  const [selectedForms, setSelectedForms] = useState('');

  const handleButtonClick = (event) => {
    setSelectedForms(event.target.value);
    const filtered = requests.filter((request) => request.forms === event.target.value);
    setFilteredRequests(filtered);
  };

  const handleClearFilter = () => {
    setSelectedForms('');
    setFilteredRequests(requests);
  };

  return (
    <div>
      <Filtro>
        <button onClick={handleClearFilter}>Todos</button>
        <button value="Dosimetria Clínica" onClick={handleButtonClick}>Dosimetria Clínica</button>
        <button value="Dosimetria Pré-Clínica" onClick={handleButtonClick}>Dosimetria Pré-Clínica</button>
        <button value="Modelagem Computacional" onClick={handleButtonClick}>Modelagem Computacional</button>
        <button value="Segmentação e Quantificação" onClick={handleButtonClick}>Segmentação e Quantificação</button>
        <button value="Radiosinoviortese" onClick={handleButtonClick}>Radiosinoviortese</button>
      </Filtro>
    </div>
  );
};

export default FiltroComponent;