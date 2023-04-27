import React from 'react';
import NavbarMenu from "../Component/NavbarMenu";
import CardMenu from "../Component/CardMenu";
import { Carousel } from 'react-bootstrap';
import M20 from "../assets/M20.jpg";
import M18 from "../assets/M18.jpg";
import M14 from "../assets/M14.jpg";
import M15 from "../assets/M15.jpg";
import M9 from "../assets/M9.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {

  const isLogged = JSON.parse(localStorage.getItem("userData"));
  console.log(isLogged);
    

  return (
    <div >
        {isLogged ? <h1>estoy loggeado</h1> : <h1>no estoy loggeado</h1>}
    <NavbarMenu/>
    <Carousel>
    <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={M15} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={M9} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={M20} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={M14} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={M18} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
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

