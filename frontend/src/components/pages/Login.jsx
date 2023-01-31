import React, { useState, useContext } from "react";
import Default from "../templates/Default";
import { Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";

import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

export default function Login() {
  const { loginUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    username.length > 0 && loginUser(username, password);
  };

  return (
    <Default>
      <Row>
        <Col xs={10} md={8} lg={6} xl={5} xxl={4} className="pt-3 mx-auto">
          <Card>
            <Card.Body>
              <h4 className="text-center py-3">LOGIN</h4>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>Usuário</InputGroup.Text>
                  <Form.Control
                    type="text"
                    id="username"
                    placeholder="Informe seu nome de usuário"
                    aria-label="Nome de usuário"
                    onChange={(e) => setUsername(e.target.value)}
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>&nbsp;&nbsp;Senha</InputGroup.Text>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Senha"
                    aria-label="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </InputGroup>
                <div className="text-end">
                  <Button type="submit" variant="success" id="btn-login">
                    Entrar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
          <div className="small text-end p-1">
            <span>
              Novo usuário?{" "}
              <Link className="text-decoration-none" to="/register">
                Cadastre aqui
              </Link>
              .
            </span>
          </div>
        </Col>
      </Row>
    </Default>
  );
}
