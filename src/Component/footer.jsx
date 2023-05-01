import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import FooterBoostrap from 'react-bootstrap/Footer';
import "../Style/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className=" bg-dark text-light mt-8 py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>ABC Company. 123 East, 17th Street, St. Louis 10001</p>
            <p>(123) 456-7890</p>
            <div className="d-flex">
              <a href="#" className="me-3">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="me-3">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="me-3">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="me-3">
              <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </Col>
          <Col md={2}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about-us" className="text-light">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-light">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-light">
                  Help
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/privacy-policy" className="text-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-light">
                  Disclaimer
                </Link>
              </li>
              <li>
                <p>Copyright © 2022 • ABC Company.</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
