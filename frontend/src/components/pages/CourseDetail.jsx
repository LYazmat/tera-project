import React from "react";
import { Link, useParams } from "react-router-dom";

import Default from "../templates/Default";

import { Row, Col, Card, Button, Accordion } from "react-bootstrap";

import blank from "../assets/blank.png";
import "../../styles/cursoapresentacao.css";

async function getCurso(id) {
  return fetch(`http://localhost:8000/course/${id}`).then((data) =>
    data.json()
  );
}

/** 
$.get(`https://marcustera.pythonanywhere.com/curso/${id}`, function (data) {
  console.log(JSON.stringify(data));
  $("#data-image").attr("src", data.image);
  $("#data-title").html(data.title);
  $("#data-description").html(
    `<span style="white-space: pre-wrap;">${data.description}</span>`
  );
});
*/

export default function CourseDetail(props) {
  const { id } = useParams();
  const [curso, setCurso] = React.useState();

  React.useEffect(() => {
    const handleCurso = async () => {
      setCurso(await getCurso(id));
    };
    handleCurso();
  }, [id]);

  return (
    <Default my={false}>
      <Row>
        <Col as={Card} xs={12} className="mb-3 mx-auto my-auto h-100 border-0">
          <Row className="h-100">
            <Col xs={12} md={8} className="text-center mt-4">
              <img
                id="data-image"
                src={curso?.image || blank}
                className="img-fluid rounded-start w-100"
                alt="..."
              />
              <Card.Body>
                <Button
                  variant="dark"
                  as={Link}
                  to="/#"
                  className="fw-bold form-control mb-3"
                >
                  <h4 as={Card.Title}>{curso?.title}</h4>
                  <h4 className="text-warning">MATRICULE-SE AGORA!</h4>
                </Button>
                <Card.Text className="text-justify">
                  {curso?.description}
                </Card.Text>
              </Card.Body>
            </Col>
            <Col xs={12} md={4}>
              <Button variant="dark" className="form-control mt-4 mb-3">
                <h3 className="my-auto">CONTEÚDO</h3>
              </Button>
              <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Tópico #1</h5>
                  </Accordion.Header>
                  <Accordion.Body className="small">
                    <span>Subtopico 1</span>
                    <hr />
                    <span>Subtopico 2</span>
                    <hr />
                    <span>Subtopico 3</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h5>Tópico #2</h5>
                  </Accordion.Header>
                  <Accordion.Body className="small">
                    <span>Subtopico 1</span>
                    <hr />
                    <span>Subtopico 2</span>
                    <hr />
                    <span>Subtopico 3</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h5>Tópico #3</h5>
                  </Accordion.Header>
                  <Accordion.Body className="small">
                    <span>Subtopico 1</span>
                    <hr />
                    <span>Subtopico 2</span>
                    <hr />
                    <span>Subtopico 3</span>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Col>
      </Row>
    </Default>
  );
}
