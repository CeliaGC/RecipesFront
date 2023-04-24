import Carousel from 'react-bootstrap/Carousel';
import "../Style/Carousel.css"

function CarouselFadeExample() {
  return (
    <Carousel fade id="CarouselContainer">
      <Carousel.Item>
        <img 
          id="CarouselFirstImg"
          className="d-block w-100"
          src="src/Img/_21x_9lqi913b4_Candle-Design-Wallpaper.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sukha</h3>
          <p id="CarrouselText">Nuestro trabajo es tu calma</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="CarouselFirstImg"
          className="d-block w-100"
          src="src\Img\esencias aromaticas aromaterapia.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Productos artesanales</h3>
          <p id="CarrouselText">Prueba nuestra selección de articulos artesanales: velas de soja, inciensos artesanales, esencias aromáticas... </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="CarouselFirstImg"
          className="d-block w-100"
          src="src\Img\s-l1600 (1).jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>¿Quieres saber más?</h3>
          <p id="CarrouselText">
            Si estás interesado en conectar con tu paz interior te invitamos a que revises nuestros cursos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;