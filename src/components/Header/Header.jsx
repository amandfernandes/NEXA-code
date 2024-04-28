/* Esse componente vai tratar do header */

import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <img src="https://www.dosimagem.com/static/media/Dosimagem%20azul.643f996138318fd20aa8.png" alt="25" width={185}/>
    <div id="Nave">
      <Link to="/">Home</Link>
      <Link to="/servicos">Serviços</Link>
    </div>

    <div id="Login">
      { window.sessionStorage.getItem('accessToken')
          ? <Link to="/logout">Logout</Link>
          : <Link to="/login">Login</Link>
          }
    </div>

  </Top>
)

export default Header;