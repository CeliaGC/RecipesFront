
import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

const CardRecipe = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <h3>Ensaladas</h3> 
        <div className="col-md-6">
         
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Receta</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">4 Personas</Card.Subtitle>
            <Card.Text>
              Esto es una ensalada
            </Card.Text>
            <Card.Link href="#">Añadir receta</Card.Link>
            <Card.Link href="#">Favorito</Card.Link>
          </Card.Body>
        </Card>
        
        </div>
        
      </div>
    </div>
  );
};

export default CardRecipe;



