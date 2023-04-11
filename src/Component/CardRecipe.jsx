import Card from 'react-bootstrap/Card';

function CardRecipe() {
  return (
    <Card style={{ width: '14rem', backgroundColor: '#DCC5A7'}}>
      <Card.Body>
        <Card.Title>Nombre</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">4 personas</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Nivel de dificultad</Card.Subtitle>
        <Card.Text>
          Breve descripción
        </Card.Text>
        <Card.Link href="#">Ver receta</Card.Link>
        <Card.Link href="#">Favorito</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardRecipe;