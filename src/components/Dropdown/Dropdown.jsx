{/*
import React, { useState } from 'react';
import { HiUser } from "react-icons/hi";
import { DropdownItem, DropdownMenu, DropdownPages, DropdownToggle, UserDropdownContainer, UserInfo } from './Style';

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Substitua esta função com a lógica real para buscar informações do usuário
    const getUserData = () => {
      // Lógica para buscar informações do usuário
      const userData = {
        name: 'João Silva',
        profilePicture: 'https://example.com/profile-picture.jpg',
        email: 'joao.silva@example.com',
      };
      return userData;
    };
  
    const userData = getUserData();
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <UserDropdownContainer>
        <DropdownToggle onClick={toggleDropdown}>
          <HiUser size={20} />
        </DropdownToggle>
        {isOpen && (
          <DropdownMenu>
            <UserInfo>
              <img src={userData.profilePicture} alt="Foto de Perfil" className="profile-picture" />
              <div>
                <p className="user-name">{userData.name}</p>
                <p className="user-email">{userData.email}</p>
              </div>
            </UserInfo>
            <DropdownPages>
                <DropdownItem to="/servicos">Serviços</DropdownItem>
                <DropdownItem href="#">Calibrações</DropdownItem>
            </DropdownPages>
            
            <DropdownItem href="#">Sair</DropdownItem>

          </DropdownMenu>
        )}
      </UserDropdownContainer>
    );
  };
  
export default UserDropdown; */}
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
