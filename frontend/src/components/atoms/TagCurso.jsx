import React from "react";

import { Button } from "react-bootstrap";

export default function TagCurso(props) {
  return (
    <Button size="sm" variant="dark" className="mt-1 me-1">
      {props.area.title}
    </Button>
  );
}
