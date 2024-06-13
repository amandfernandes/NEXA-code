{/*
import styled from 'styled-components';

export const UserDropdownContainer = styled.div`
position: relative;
display: inline-block;
`;

export const DropdownToggle = styled.button`
background-color: transparent;
border: none;
padding: 8px;
cursor: pointer;
display: flex;
align-items: center;

&:hover {
  background-color: #f2f2f2;
}
`;

export const DropdownMenu = styled.div`
position: absolute;
top: 100%;
right: 0;
background-color: #fff;
border: 1px solid #ddd;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 10px;
z-index: 10;
`;

export const UserInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;

.profile-picture {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}
`;

export const DropdownPages = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const DropdownItem = styled.link`
padding: 8px 12px;
border-bottom: 1px solid #ddd;
cursor: pointer;

&:hover {
  background-color: #f2f2f2;
}

&:last-child {
  border-bottom: none;
}
`;

Link = styled.link`
padding: 8px 12px;
border-bottom: 1px solid #ddd;
cursor: pointer;

&:hover {
  background-color: #f2f2f2;
}

&:last-child {
  border-bottom: none;
}
`;
*/}
import styled from 'styled-components';

const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownTrigger = styled.button`
  /* Adicione estilos para o gatilho do menu, como background, cor, etc. */
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const DropdownContent = styled.ul`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  list-style: none;
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
`;

export { 
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
  DropdownItem 
};
