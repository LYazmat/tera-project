import React from "react";

import { Button } from "react-bootstrap";

export default function TagCourse({ tag }) {
  return (
    <Button size="sm" variant="dark" className="mt-1 me-1">
      {tag.title}
    </Button>
  );
}
