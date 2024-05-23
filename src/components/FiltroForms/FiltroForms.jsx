import React, { useState } from 'react';
import { Filtro } from './Style'; // Assumindo que o estilo está em um arquivo separado Style.js

const FiltroForms = ({ requests, setFilteredRequests }) => {
  const [selectedForms, setSelectedForms] = useState([]);

  const handleButtonClick = (form) => {
    // Se o form já estiver selecionado, remove da lista, caso contrário, adiciona.
    const newSelectedForms = selectedForms.includes(form)
      ? selectedForms.filter((f) => f !== form)
      : [...selectedForms, form];

    setSelectedForms(newSelectedForms);

    // Filtra os requests com base nos forms selecionados
    const filtered = requests.filter((request) => {
      // Se nenhum form estiver selecionado, retorna todos os requests
      if (newSelectedForms.length === 0) return true;
      // Verifica se o request.forms inclui algum dos forms selecionados
      return newSelectedForms.some((selectedForm) => request.forms.includes(selectedForm));
    });

    setFilteredRequests(filtered);
  };

  return (
    <div>
      <Filtro>
        {['Dosimetria Clínica', 'Dosimetria Pré-Clínica', 'Modelagem Computacional', 'Segmentação e Quantificação', 'Radiosinoviortese'].map(
          (form) => (
            <button
              key={form}
              onClick={() => handleButtonClick(form)}
              className={selectedForms.includes(form) ? 'active' : ''}
            >
              {form}
            </button>
          )
        )}
      </Filtro>
    </div>
  );
};

export default FiltroForms;