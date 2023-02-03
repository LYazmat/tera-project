import { Dropdown } from "react-bootstrap";
import Avatar from "../atoms/Avatar";
import { Link } from "react-router-dom";
import { useContext } from "react";

import "../../styles/userOption.css";

import AuthContext from "../../context/AuthContext";

export default function UserOption() {
  const { logoutUser, user } = useContext(AuthContext);
  return (
    <Dropdown
      className="py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1 w-100"
      drop="up"
      id="dropdown-user"
    >
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-toogle-user"
        className="d-flex align-items-center text-white text-decoration-none m-0 w-100"
      >
        <Avatar width="28" height="28" className="rounded-circle me-2" />
        <span className="d-none d-sm-inline mx-1 ms-2">{user.username}</span>
        <div id="div-menu-toogle-sep" className="text-end w-100"></div>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark" className="text-small shadow">
        <Dropdown.Item as={Link} to="/config">
          Configurações
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/profile">
          Perfil
        </Dropdown.Item>
        <Dropdown.Divider className="bg-secondary" />
        <Dropdown.Item onClick={logoutUser}>Sair</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
