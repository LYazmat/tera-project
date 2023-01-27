import React from "react";

import Default from "../templates/Default";
import Curso from "../organisms/Curso";
import CursoPagination from "../organisms/CursoPagination";

import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

async function getCursos(description) {
  return fetch(
    `https://marcustera.pythonanywhere.com/curso/?descricao=${description}`
  )
    .then((data) => data.json())
    .catch({
      msg: "Não foi possível realizar a busca.",
    });
}

export default function CursoIn() {
  const [description, setDescription] = React.useState("");
  const [cursos, setCursos] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCursos(await getCursos(description));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setCursos(await getCursos(""));
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <Default my={false}>
      <Row>
        <Col xs={12} md={6} lg={4} className="pt-3 mx-auto">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                id="pesquisar"
                name="pesquisar"
                type="text"
                placeholder="Pesquisar"
                aria-label="Caixa de busca"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button variant="dark" type="submit" id="btn-pesquisar">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Row id="content" className="overflow-auto mx-auto">
          {cursos.map((curso, i) => {
            return <Curso key={curso.id} curso={curso} />;
          })}
        </Row>
      </Row>
      <CursoPagination />
    </Default>
  );
}
