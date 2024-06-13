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