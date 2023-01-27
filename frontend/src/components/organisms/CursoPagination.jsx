import React from "react";
import { Pagination } from "react-bootstrap";

export default function CursoPagination() {
  return (
    <div aria-label="Paginação" className="my-4 d-flex">
      <Pagination className="mx-auto">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
