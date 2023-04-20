import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function NotFoundPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>404 - Página no encontrada</h1>
          <p>Lo sentimos, la página que buscas no existe.</p>
          <Button as={Link} to="/" variant="primary">Volver a la página principal</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;
