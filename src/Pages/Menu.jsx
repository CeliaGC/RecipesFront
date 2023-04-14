import React from 'react';
import NavbarMenu from "../Component/NavbarMenu";
import CardMenu from "../Component/CardMenu";

import Imagecarne from '../assets/carne.jpg';
import Imagepasta from '../assets/pasta.jpg';
import Imageensalada from '../assets/ensalada.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
  return (
    <div >
    <NavbarMenu/>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={Imagecarne} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={Imagepasta} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={Imageensalada} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    <h3>Menu</h3>
    <CardMenu/>

    
       
    </div>
  )
}

export default Menu

