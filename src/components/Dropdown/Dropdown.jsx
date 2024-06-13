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
            {/* Adicionar outros itens do menu aqui */}
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
  
  export default UserDropdown;