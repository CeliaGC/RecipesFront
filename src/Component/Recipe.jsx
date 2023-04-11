import Card from 'react-bootstrap/Card';
import Ingredients from "../Component/Ingredients";

function CardRecipe() {
  return (
    <Card style={{ backgroundColor: '#DCC5A7'}}>
      <Card.Body>
        <Card.Title>Nombre</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">4 personas</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Nivel de dificultad</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Categoria</Card.Subtitle>
        <Card.Text>
         <h4>Ingredientes </h4> 
         <Ingredients/>
        </Card.Text>
        <Card.Text>
         <h4>Elaboración </h4> 
         <p>uhañrugóanrengñkjsnñkegjnlkjgalhbo</p>
        </Card.Text>
        <Card.Text>
         <h4>Comentarios </h4> 
         <p>uhañrugóanrengñkjsnñkegjnlkjgalhbo</p>
        </Card.Text>
        <Card.Text>
         <h4>Alergenos </h4> 
         
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default CardRecipe;