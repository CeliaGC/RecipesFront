import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css';
import Imagecarne from '../assets/carne.jpg';
import Imagepasta from '../assets/pasta.jpg';
import Imageensalada from '../assets/ensalada.jpg';
import { Carousel } from 'react-bootstrap';
import NavbarMenu from "../Component/NavbarMenu"

function ViewMenu() {
    return (
      <div className='App'>
    <NavbarMenu></NavbarMenu>
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

        </div>
    )
  }
  
  export default ViewMenu