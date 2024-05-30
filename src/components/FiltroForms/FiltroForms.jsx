import React, { useState } from 'react';
import { Filtro } from './Style'; // Assumindo que o estilo está em um arquivo separado Style.js

const FiltroForms = ({ requests, setFilteredRequests, onFilterRemove, selectedForm }) => {

  const handleFilterChange = (event, form) => {
    setFilteredRequests(event, form);
  };

  return (
    <div>
      <Filtro>
        {['Dosimetria Clínica', 'Dosimetria Pré-Clínica', 'Modelagem Computacional', 'Segmentação e Quantificação', 'Radiosinoviortese'].map(form => (
          <button
            key={form}
            value={form}
            onClick={(e) => handleFilterChange(e, form)} // Chamar a função correta
            isActive={selectedForm === form}
          >
            {form}
          </button>
        ))}
        {selectedForm && (
          <button onClick={onFilterRemove}>Remover Filtro</button>

        )}
      </Filtro>
    </div>
  );
};

export default FiltroForms;