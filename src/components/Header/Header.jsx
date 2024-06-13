/* Esse componente vai tratar do header */

import { Link } from "react-router-dom";
import { Top } from "./Style"; // Importa o estilo do arquivo Style.js
import { HiUser } from "react-icons/hi"; // Importa o ícone de usuário
import Dropdown from '../Dropdown/Dropdown.jsx'; // Importa o componente Dropdown

const Header = () => (
  <Top>
    <img src="https://www.dosimagem.com/static/media/Dosimagem%20azul.643f996138318fd20aa8.png" alt="25" width={185}/>
    <div id="Nave">
      <Link to="/">Home</Link>
      <Link to="/servicos">Serviços</Link>
    </div>

    <div id="Login">
      <Dropdown /> {/* Renderiza o componente Dropdown */}
      {/* { window.sessionStorage.getItem('accessToken')
          ? <Link to="/logout">Logout</Link>
          : <Link to="/login">Login</Link>
          }*/}
    </div>
  </Top>
)
export default Header;