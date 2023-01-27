import React, { useState } from "react";
import Default from "../templates/Default";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Alert,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    console.log(token?.message);
    console.log(token?.token);
    !!token.token ? navigate("/") : setLogin(false);
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
                  <InputGroup.Text>&nbsp;&nbsp;&nbsp;Email</InputGroup.Text>
                  <Form.Control
                    type="email"
                    id="username"
                    placeholder="Informe seu email"
                    aria-label="Email de usuário"
                    onChange={(e) => setEmail(e.target.value)}
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
                {!login && (
                  <Alert variant="danger" id="login-error">
                    Usuário ou senha incorreto(s)
                  </Alert>
                )}
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
              <Link className="text-decoration-none" to="/create/user">
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
