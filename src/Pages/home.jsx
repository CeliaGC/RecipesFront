import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css';
import C1 from "../assets/C1.jpg";
import C12 from "../assets/C12.jpg";
import C3 from "../assets/C3.jpg";
import C4 from "../assets/C4.jpg";
import C5 from "../assets/C5.jpg";
import C6 from "../assets/C6.jpg";
import C9 from "../assets/C9.jpg";
import C8 from "../assets/C8.jpg";
import C13 from "../assets/C13.jpg";
import C7A from "../assets/C7A.jpg";
import { ButtonGroup, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';




const CarouselImg = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={C1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={C12} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={C3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={C4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={C5} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={C6} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={C9} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

const Buttons = () => {
  return (
    <div style={{ padding: "2rem"}} >
      <ButtonGroup >
        <Button variant="primary">Misión</Button>
        <Button variant="secondary">Objetivos</Button>
        <Button variant="success">Aprendizaje</Button>
      </ButtonGroup>


      <div>
        <br />
        <p className="paragraph">Bienvenidos a nuestra web de recetas de cocina, donde encontrarás una gran variedad de deliciosas recetas para satisfacer tu paladar y el de tus seres queridos. Desde platos principales hasta postres, tenemos algo para todos los gustos.

          Además, no solo los aficionados pueden compartir sus recetas favoritas, sino que también los profesionales de la industria culinaria pueden contribuir con sus creaciones únicas. Nos preocupamos por la salud y el bienestar de nuestros lectores, por lo que toda receta publicada incluye información detallada sobre los ingredientes y los posibles alérgenos que puedan contener.

          Únete a nuestra comunidad y descubre nuevas ideas culinarias, comparte tus creaciones y aprende trucos y técnicas de expertos de la industria. ¡Vamos a cocinar juntos!</p>
      </div>
    </div>
  );
};

const ImageContainers = () => {
  const styles = {
    container: {
      backgroundColor: "#8B8961",
      width: '100%',
      padding: "2rem"
    },
    image: {
      boxShadow: "0px 15px 10px rgba(0, 0, 0, 0.25)"
    }
  }

  return (
    <Container style={styles.container}>
      <Row>
        <Col sm={6}>
          <Image src={C8} fluid style={styles.image} />
        </Col>
        <Col sm={6}>
          <Image src={C13} fluid style={styles.image} />
        </Col>
      </Row>
    </Container>
  );
};


const Recipe = () => {
  const styles = {
    container: {
      backgroundColor: "#DCC5A7",
      padding: "2rem",

    },
    image: {
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)"
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem"
    },
    subtitle: {
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      textTransform: "uppercase"
    },
    list: {
      listStyleType: "none",
      margin: 0,
      paddingLeft: "1rem"
    },
    instructions: {
      marginTop: "1rem",

    }
  }

  return (
    <Container style={styles.container}>
      <Row>
        <Col md={6}>
          <Image src={C7A} fluid style={styles.image} />
        </Col>
        <Col md={4}>
          <div>
            <div>
              <h2 style={styles.title}>Timbal de verduras con queso de cabra</h2>
              <h4 style={styles.subtitle}>Ingredientes:</h4>
              <ul style={styles.list}>
                <li>Pimiento rojo</li>
                <li>Pimiento verde</li>
                <li>Berenjena</li>
                <li>Cebollas</li>
                <li>Queso de cabra</li>
                <li>Ajo</li>
                <li>Aove</li>
              </ul>
            </div>
            <div style={styles.instructions}>
              <h4 style={styles.subtitle}>Elaboración:</h4>
              <ul style={styles.list}>
                <li>Asaremos las verduras a fuego directo para que cojan sabor ahumado. Terminamos de asar en horno.</li>
                <li>Cortamos en tiras, mezclamos con los ajos cortados y aliñamos con aove y sal.</li>
                <li>Cortamos rodajas de queso de cabra, caramelizamos.</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};




const Home = () => {
  return (
    <div>
      <CarouselImg />
      <Buttons />
      <ImageContainers />
      <Recipe />

    </div>
  )
}

export default Home;
