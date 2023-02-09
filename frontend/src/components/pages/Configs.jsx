import React from "react";
import Default from "../templates/Default";
import DefaultModal from "../organisms/DefaultModal";

import "../../styles/configs.css";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  Modal,
} from "react-bootstrap";

export default function Configs() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modal, setModal] = React.useState(
    <DefaultModal id={1} handleClose={handleClose} />
  );

  const handleModal = () => {
    setModal(<DefaultModal id={2} handleClose={handleClose} />);
    handleShow();
  };

  return (
    <Default my={false}>
      <Container fluid className="py-5 mx-auto h-100">
        <Row className="d-flex justify-content-center">
          <Col xs={11} md={9} lg={8} xl={7} className="text-center">
            <Card className="p-4">
              <div className="d-flex mx-auto mb-5">
                <i className="bi bi-gear fs-1"></i>
                <span className="fs-2 ms-3 align-self-center">
                  Configurações
                </span>
              </div>
              <Form className="" onSubmit={(e) => e.preventDefault()}>
                <div className="d-flex mb-3">
                  <i className="bi bi-envelope fs-3"></i>
                  <span className="fs-5 ms-2 align-self-center">
                    Acesso - Email
                  </span>
                </div>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Email Atual</InputGroup.Text>
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="Email Atual"
                    aria-label="Email Atual"
                    aria-describedby="span-email"
                    readOnly
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Novo Email</InputGroup.Text>
                  <Form.Control
                    id="novo-email"
                    type="email"
                    placeholder="Novo Email"
                    aria-label="Novo Email"
                    aria-describedby="span-novo-email"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>&nbsp;&nbsp;Confirmar</InputGroup.Text>
                  <Form.Control
                    id="confirma-email"
                    type="email"
                    placeholder="Confirmar Email"
                    aria-label="Confirmar Email"
                    aria-describedby="span-confirma-email"
                  />
                </InputGroup>
                <Button
                  variant="primary"
                  id="btn-alterar-email"
                  data="email"
                  className="float-end mb-3"
                >
                  Alterar e-mail
                </Button>
              </Form>
              <Form className="" onSubmit={(e) => e.preventDefault()}>
                <div className="d-flex mb-3">
                  <i className="bi bi-phone fs-3"></i>
                  <span className="fs-5 ms-2 align-self-center">
                    Acesso - Celular
                  </span>
                </div>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Número Atual</InputGroup.Text>
                  <Form.Control
                    id="numero"
                    type="text"
                    placeholder="Número Atual"
                    aria-label="Número Atual"
                    aria-describedby="span-numero"
                    readOnly
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Novo Número</InputGroup.Text>
                  <Form.Control
                    id="novo-numero"
                    type="text"
                    placeholder="Novo Número"
                    aria-label="Novo Número"
                    aria-describedby="span-novo-numero"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Confirmar
                  </InputGroup.Text>
                  <Form.Control
                    id="confirma-numero"
                    type="text"
                    placeholder="Confirmar Número"
                    aria-label="Confirmar Número"
                    aria-describedby="span-confirma-numero"
                  />
                </InputGroup>
                <Button
                  variant="primary"
                  id="btn-alterar-numero"
                  data="numero"
                  className="float-end mb-3"
                >
                  Alterar número
                </Button>
              </Form>
              <Form className="" onSubmit={(e) => e.preventDefault()}>
                <div className="d-flex mb-3">
                  <i className="bi bi-shield-lock fs-3"></i>
                  <span className="fs-5 ms-2 align-self-center">Segurança</span>
                </div>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    className="d-none d-sm-inline-block"
                    id="span-senha"
                  >
                    Senha Atual
                  </InputGroup.Text>
                  <Form.Control
                    id="senha"
                    type="password"
                    placeholder="Senha Atual"
                    aria-label="Senha Atual"
                    aria-describedby="span-senha"
                  />
                  <InputGroup.Text>
                    <Button
                      variant=""
                      size="sm"
                      className="border-0 btn-view"
                      data="password"
                      data-target="#senha"
                    >
                      <i className="bi bi-eye-fill"></i>
                    </Button>
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    className="d-none d-sm-inline-block"
                    id="span-nova-senha"
                  >
                    Nova Senha
                  </InputGroup.Text>
                  <Form.Control
                    id="nova-senha"
                    type="password"
                    placeholder="Nova Senha"
                    aria-label="Nova Senha"
                    aria-describedby="span-nova-senha"
                  />
                  <InputGroup.Text>
                    <Button
                      variant=""
                      size="sm"
                      className="border-0 btn-view"
                      data="password"
                      data-target="#nova-senha"
                    >
                      <i className="bi bi-eye-fill"></i>
                    </Button>
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    className="d-none d-sm-inline"
                    id="span-confima-senha"
                  >
                    &nbsp;&nbsp;&nbsp;Confirmar
                  </InputGroup.Text>
                  <Form.Control
                    id="confima-senha"
                    type="password"
                    placeholder="Confirmar Senha"
                    aria-label="Confirmar Senha"
                    aria-describedby="span-confima-senha"
                  />
                  <InputGroup.Text>
                    <Button
                      variant=""
                      size="sm"
                      className="border-0 btn-view"
                      data="password"
                      data-target="#confima-senha"
                    >
                      <i className="bi bi-eye-fill"></i>
                    </Button>
                  </InputGroup.Text>
                </InputGroup>
                <Button
                  variant="primary"
                  id="btn-alterar-senha"
                  data="senha"
                  className="float-end mb-3"
                >
                  Alterar senha
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Button variant="primary" onClick={handleModal}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        {modal}
      </Modal>
    </Default>
  );
}
