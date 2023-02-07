import React, { useContext } from "react";

import Default from "../templates/Default";
import Course from "../organisms/Course";
import CoursePagination from "../organisms/CoursePagination";

import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

import { useAxios } from "../../utils/useAxios";

import AuthContext from "../../context/AuthContext";

export default function Enrolls() {
  const [description, setDescription] = React.useState("");
  const [courses, setCourses] = React.useState([]);

  const { user } = useContext(AuthContext);

  // Inform to "useAxios()' if authentication is needed
  const api = useAxios(!!user);

  const fetchData = async () => {
    await api
      .get(`/course/course/enroll/?description=${description}`)
      .then(function (response) {
        if (response.status === 200) setCourses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <CoursePagination />
    </Default>
  );
}
