import React from "react";

import Default from "../templates/Default";
import Course from "../organisms/Course";
import CursoPagination from "../organisms/CoursePagination";

import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

async function getCursos(description) {
  return fetch(`http://localhost:8000/course/?description=${description}`)
    .then((data) => data.json())
    .catch({
      msg: "Não foi possível realizar a busca.",
    });
}

export default function Courses() {
  const [description, setDescription] = React.useState("");
  const [courses, setCourses] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCourses(await getCursos(description));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setCourses(await getCursos(""));
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
          {courses.map((course, i) => {
            return <Course key={course.id} course={course} />;
          })}
        </Row>
      </Row>
      <CursoPagination />
    </Default>
  );
}
