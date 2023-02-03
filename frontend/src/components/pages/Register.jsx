import React, { useState, useContext } from "react";
import Default from "../templates/Default";
// import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Alert,
} from "react-bootstrap";

import AuthContext from "../../context/AuthContext";

export default function Register() {
  const { registerUser } = useContext(AuthContext);
  const [alert, setAlert] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    credentials.password === credentials.password2
      ? registerUser(credentials)
      : setAlert(<Alert variant="danger">Passwords não conferem!</Alert>);
  };

  return (
    <Default>
      <Row>
        <Col xs={10} md={8} lg={6} xl={5} xxl={4} className="pt-3 mx-auto">
          <Card>
            <Card.Body>
              <h4 className="text-center py-3">NOVO USUÁRIO</h4>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Informe seu email"
                    aria-label="Email de usuário"
                    onChange={handleChange}
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>&nbsp;&nbsp;&nbsp;Usuário</InputGroup.Text>
                  <Form.Control
                    required
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nome de usuário"
                    aria-label="Nome de usuário"
                    onChange={handleChange}
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    aria-label="Senha"
                    onChange={handleChange}
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>Confirmar</InputGroup.Text>
                  <Form.Control
                    required
                    type="password"
                    id="password2"
                    name="password2"
                    placeholder="Confirme a senha"
                    aria-label="Confirme a senha"
                    onChange={handleChange}
                  ></Form.Control>
                </InputGroup>
                <div id="create-error">{alert}</div>
                <div className="text-end">
                  <Button type="submit" variant="success" id="btn-cadastrar">
                    Cadastrar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Default>
  );
}
