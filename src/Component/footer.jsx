import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col lg={12} className="text-center text-muted">
            <p>© 2023 My Awesome Website. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
