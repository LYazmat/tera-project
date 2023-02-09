import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import Default from "../templates/Default";

import { Row, Col, Card, Button, Accordion } from "react-bootstrap";

import blank from "../assets/blank.png";
import "../../styles/coursedetail.css";

import { useAxios } from "../../utils/useAxios";

import AuthContext from "../../context/AuthContext";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const api = useAxios(!!user);

  const fetchData = async () => {
    await api
      .get(`/course/course/${id}/`)
      .then(function (response) {
        if (response.status === 200) setCourse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enrollCourse = async () => {
    // If user context not found => navigate to login page and don't call the API
    if (!user) {
      navigate("/login");
      return;
    }

    if (!!course?.enrolled) return;

    // Do not call API if a request is still on going
    if (loading) return;

    setLoading(true);

    /**
     * Post request needs course and user id, returns status 201 - created
     * Delete request needs enroll id, returns status 204 - no content
     **/

    await api
      .post("/course/enroll/", {
        user: user.user_id,
        course: course?.id,
      })
      .then(function (response) {
        if (response.status === 201) {
          fetchData();
          navigate("/enroll");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    setLoading(false);
  };

  return (
    <Default my={false}>
      <Row>
        <Col as={Card} xs={12} className="mb-3 mx-auto my-auto h-100 border-0">
          <Row className="h-100">
            <Col xs={12} md={8} className="text-center mt-4">
              <img
                id="data-image"
                src={course?.image || blank}
                className="img-fluid rounded-start w-100"
                alt="..."
              />
              <Card.Body>
                <Button
                  variant="dark"
                  onClick={enrollCourse}
                  className="fw-bold form-control mb-3"
                >
                  <h4 as={Card.Title}>{course?.title}</h4>
                  {!course?.enrolled ? (
                    <h4 className="text-warning">MATRICULE-SE AGORA!</h4>
                  ) : (
                    <h4 className="text-info">ASSISTA AGORA!</h4>
                  )}
                </Button>
                <Card.Text className="text-justify">
                  {course?.description}
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
