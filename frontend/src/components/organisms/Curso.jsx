import React from "react";
import { Link } from "react-router-dom";

import { Col, Card, Button } from "react-bootstrap";
import TagCurso from "../atoms/TagCurso";

export default function Curso(props) {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="pt-4">
      <Card className="h-100">
        <img src={props.curso.image} className="card-img-top" alt="..." />
        <Card.Body>
          <Button
            to={`/curso/apresentacao/${props.curso.id}`}
            as={Link}
            variant="warning"
            className="fw-bold form-control mb-3"
          >
            MATRICULE-SE
          </Button>
          <Card.Title>
            <h5 className="text-center">{props.curso.title}</h5>
          </Card.Title>
          <div className="text-center">
            {props.curso.areas_obj.map((area, i) => {
              return <TagCurso area={area} key={i} />;
            })}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
