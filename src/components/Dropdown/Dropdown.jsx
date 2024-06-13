// Dropdown.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; 
import { DropdownContent, DropdownItem, DropdownTrigger } from './Style.js'; 

// --- User.js ---
const User = () => {
  return <div>Usuário</div>;
};

const UserImg = () => {
  return <img src="https://via.placeholder.com/150" alt="Imagem do usuário" />;
};

// --- Dropdown.js ---
const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenuStyled isOpen={isOpen}> 
      <DropdownTrigger onClick={toggleDropdown}>
        <FaBars /> {/* Ícone do menu hambúrguer */}
      </DropdownTrigger>
      {isOpen && ( // Adiciona isOpen para mostrar o menu
        <DropdownContent>
          <User /> 
          <UserImg />
          {children} 
        </DropdownContent>
      )}
    </DropdownMenuStyled>
  );
};

const DropdownMenuStyled = styled.div`
  position: relative;
  display: inline-block;
  &.isOpen { // Ajuste do seletor CSS
    .dropdown-content {
      display: block; // Mostrar o menu quando isOpen for true
    }
  }
`;

export default DropdownMenu;

export { User, UserImg }; // Exporta as constantes User e UserImg

