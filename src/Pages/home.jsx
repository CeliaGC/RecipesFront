import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css';
import Image16 from '../assets/image16.jpg';
import Image17 from '../assets/image17.jpg';
import Image5 from '../assets/rectangle5.jpg';
import image21 from '../assets/image21.jpg';
import image20 from '../assets/image20.jpg';
import image19 from '../assets/image19.jpg';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';




const CarouselComponent = () => {
  return (
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
  );
};

const Buttons = () => {
  return (
    <div className="container">
 <ButtonGroup aria-label="Buttons" className="myButtonGroup">
  <Button variant="primary" >Botón 1</Button>
  <Button variant="secondary">Botón 2</Button>
  <Button variant="success">Botón 3</Button>
</ButtonGroup>


    <div>
      <br/>
      <p className="paragraph">Bienvenidos a nuestra web de recetas de cocina, donde encontrarás una gran variedad de deliciosas recetas para satisfacer tu paladar y el de tus seres queridos. Desde platos principales hasta postres, tenemos algo para todos los gustos.

Además, no solo los aficionados pueden compartir sus recetas favoritas, sino que también los profesionales de la industria culinaria pueden contribuir con sus creaciones únicas. Nos preocupamos por la salud y el bienestar de nuestros lectores, por lo que toda receta publicada incluye información detallada sobre los ingredientes y los posibles alérgenos que puedan contener.

Únete a nuestra comunidad y descubre nuevas ideas culinarias, comparte tus creaciones y aprende trucos y técnicas de expertos de la industria. ¡Vamos a cocinar juntos!</p>
</div> 
    </div>
  );
};

const ImageContainers = () => {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Image src={image21} fluid />
        </Col>
        <Col sm={6}>
          <Image src={image20} fluid />
        </Col>
      </Row>
    </Container>
  );
};

const MyComponent = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Image src={image19} fluid />
        </Col>
        <Col md={6}>
        <div>
         <div> 
         <br/>
         <br/>
          <h3>Timbal de verduras con queso de cabra</h3>
          <br/>
          <h7>INGREDIENTES</h7>
            <ul>Pimiento rojo</ul>
            <ul>Pimiento verde</ul>
            <ul>Berenjena</ul>
            <ul>Cebollas</ul>
            <ul>Ajo</ul>
            <ul>Aove</ul>
            <ul>Queso de cabra</ul>
      </div>
      <br/>
      <div>
        <h7>ELABORACIÓN</h7>
          <ul>Asaremos las verduras a fuego directo para que
            cojan sabor ahumado. Terminamos de asar en
            horno.
            Cortamos en tiras, mezclamos con los ajos
            cortados y aliñamos con aove y sal.
            Cortamos rodajas de queso de cabra,
            caramelizamos.</ul>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>ALÉRGENOS: Lácteos</div>
    </div>  
        </Col>
      </Row>
    </Container>
  );
};

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <Buttons />
      <ImageContainers />
      <MyComponent />
      
    </div>
  )
}

export default Home;
