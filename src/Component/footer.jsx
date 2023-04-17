import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube, } from "@fortawesome/free-brands-svg-icons";
//import Foot from 'react-bootstrap/Foot';
import Footer from 'react-bootstrap/Footer';
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>ABC Company</h4>
            <p>123 East, 17th Street, St. louis 10001</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h4>Social Media</h4>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">
          Copyright © 2022 • ABC Company.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
