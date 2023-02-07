import React, { useContext } from "react";

import { Col, Nav } from "react-bootstrap";

import UserOption from "../molecules/UserOption";
import EnterLogin from "../molecules/EnterLogin";

import { BsFillHeartFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import "../../styles/menu.css";

import AuthContext from "../../context/AuthContext";

export default function Menu() {
  const { user } = useContext(AuthContext);
  return (
    <Col
      xs={12}
      sm={3}
      xl={2}
      className="px-sm-2 px-0 bg-dark d-flex sticky-top"
    >
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <Link
          to="/"
          className="d-flex align-items-center pb-sm-3 pt-sm-3 mb-md-0 mx-auto text-white text-decoration-none"
        >
          <span className="fs-3">
            <span className="d-flex d-sm-none">LOGO.PNG</span>
            <span className="d-none d-sm-inline ps-2">X Cursos</span>
          </span>
        </Link>
        <Nav
          variant="pills"
          className="w-100 flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="menu"
        >
          <Nav.Item className="w-100">
            <Nav.Link as={Link} to="/" className="px-sm-0 px-2">
              <i className="text-info fs-5 bi bi-globe me-2"></i>
              <span className="ms-1 d-none d-sm-inline">Cursos</span>
            </Nav.Link>
          </Nav.Item>
          {user && (
            <React.Fragment>
              <Nav.Item>
                <Nav.Link as={Link} to="/enroll/" className="px-sm-0 px-2">
                  <i className="text-primary fs-5 bi bi-mortarboard-fill me-2"></i>
                  <span className="ms-1 d-none d-sm-inline">Meus Cursos</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/favorite/" className="px-sm-0 px-2">
                  <BsFillHeartFill className="text-danger fs-5 me-2" />
                  <span className="ms-1 d-none d-sm-inline">Favoritos</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to="#" className="px-sm-0 px-2">
                  <i className="text-success fs-5 bi bi-chat-dots-fill me-2"></i>
                  <span className="ms-1 d-none d-sm-inline">Mensagens</span>
                </Nav.Link>
              </Nav.Item>
            </React.Fragment>
          )}
        </Nav>
        {user ? <UserOption /> : <EnterLogin />}
      </div>
    </Col>
  );
}
