import React from "react";
import { Link } from "react-router-dom";

import { Col, Card, Button } from "react-bootstrap";
import TagCourse from "../atoms/TagCourse";

export default function Course({ course }) {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="pt-4">
      <Card className="h-100">
        <img src={course.image} className="card-img-top" alt="..." />
        <Card.Body>
          <Button
            to={`/course/${course.id}`}
            as={Link}
            variant="warning"
            className="fw-bold form-control mb-3"
          >
            MATRICULE-SE
          </Button>
          <Card.Title>
            <h5 className="text-center">{course.title}</h5>
          </Card.Title>
          <div className="text-center">
            {course.tags_obj.map((tag, i) => {
              return <TagCourse tag={tag} key={i} />;
            })}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
