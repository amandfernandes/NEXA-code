import React, { useState } from 'react';
import { Filtro } from './Style';

const FiltroForms = ({ requests, setFilteredRequests }) => {
  const [selectedForm, setSelectedForm] = useState('');

  const handleButtonClick = (event, form) => {
    const value = event.target.value;
    if (selectedForm === value) {
      setSelectedForm('');
      setFilteredRequests(requests);
    } else {
      setSelectedForm(value);
      const filtered = requests.filter((request) => request.forms === value);
      setFilteredRequests(filtered);
    }
  };

  return (
    <div>
      <Filtro>
        {['Dosimetria Clínica', 'Dosimetria Pré-Clínica', 'Modelagem Computacional', 'Segmentação e Quantificação', 'Radiosinoviortese'].map(form => (
          <button
            key={form}
            value={form}
            onClick={(e) => handleButtonClick(e, form)}
            isActive={selectedForm === form}
          >
            {form}
          </button>
        ))}
      </Filtro>
    </div>
  );
};

export default FiltroForms;