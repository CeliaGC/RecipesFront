import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css';
import Image16 from '../assets/image16.jpg';
import Image17 from '../assets/image17.jpg';
import Image5 from '../assets/rectangle5.jpg';
import { Carousel } from 'react-bootstrap';

function ViewMenu() {
    return (
      <div className='App'>

    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={Image16} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={Image17} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={Image5} alt="Third slide" />
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