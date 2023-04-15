import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.css"; // Importa tu archivo de estilos si es necesario

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; 2023 Cook Smart</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;