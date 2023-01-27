import React from "react";
import Footer from "../organisms/Footer";
import Menu from "../organisms/Menu";
import { Container, Row, Col } from "react-bootstrap";

export default function Default(props) {
  const vertical = `pb-4 ${props.my ? "my-auto" : ""}`;

  return (
    <div className="wrapper">
      <Container fluid className="overflow-hidden">
        <Row className="vh-100 overflow-auto">
          <Menu />
          <Col className="d-flex flex-column h-sm-100">
            <main className={vertical}>
              <Container>{props.children}</Container>
            </main>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Default.defaultProps = {
  my: true,
};
