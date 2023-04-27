import React, { useState } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { recipeHandler } from "../Handlers/recipeHandler";
import { alergenHandler } from "../Handlers/alergenHandler";
import { useLoaderData } from "react-router-dom";
import { alergenService } from "../Service/alergenService";

function RecipeForm() {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [observations, setObservations] = useState("");
  const [materials, setMaterials] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [alergens, setAlergens] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      const allAlergens = await alergenService.getAlergens();
      setAlergens(allAlergens);
    }
    fetchData();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const handleObservationsChange = (event) => {
    setObservations(event.target.value);
  };
  const handleMaterialsChange = (event) => {
    setMaterials(event.target.value);
  };
  const handlePostedByChange = (event) => {
    setPostedBy(event.target.value);
  };

  const handleAlergensChange = (event) => {
    setAlergens(event.target.value);
  };
 console.log (ingredients)

  const handleAdd = () => {
    const newIngredient = {
      ingredient: ingredient,
      amount: amount,
      unit: unit
    };
    setIngredients([...ingredients, newIngredient]);
    setIngredient('');
    setAmount('');
    setUnit('');

  };
  const handleSubmit = async(event) => {
   
    event.preventDefault();

    let newRecipe = {name, instructions, category, author, observations, materials, posterName: postedBy,
       ingredients: 
        ingredients,
       
        alergens: [
          {name: alergens},
        ] };
        console.log("componente",newRecipe)
   await recipeHandler.addRecipe(newRecipe);
   
  };
 

  return (
    <div className="recipe-form-container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" value={name} onChange={handleNameChange} required />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Instructiones</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Usuarios" value={instructions} onChange={handleInstructionsChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control type="text" placeholder="Categoría" value={category} onChange={handleCategoryChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Autor</Form.Label>
              <Form.Control type="text" placeholder="Autor" value={author} onChange={handleAuthorChange} required />
            </Form.Group>

            <p>Servicio para 4 personas</p>
            <Form.Group className="mb-3">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Observaciones" value={observations} onChange={handleObservationsChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Materiales</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Materiales" value={materials} onChange={handleMaterialsChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text"  placeholder="Usuarios" value={postedBy} onChange={handlePostedByChange} required />
            </Form.Group>

          </Col>
          <Col>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ingrediente</th>
            <th>Cantidad</th>
            <th>Unidad</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>{ingredient.ingredient}</td>
              <td>{ingredient.amount}</td>
              <td>{ingredient.unit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
        <Form.Group controlId="ingrediente">
          <Form.Label>Ingrediente</Form.Label>
          <Form.Control type="text" value={ingredient} onChange={e => setIngredient(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="cantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="text" value={amount} onChange={e => setAmount(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="unidad">
          <Form.Label>Unidad</Form.Label>
          <Form.Control type="text" value={unit} onChange={e => setUnit(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleAdd}>
          Agregar
        </Button>

    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Alérgenos</Form.Label>
        <Form.Control as="select" value={selectedAlergen} onChange={handleAlergenChange}>
          {alergens.map((alergen, index) => (
            <option key={index} value={alergen.id}>
              {alergen.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>

            <Button variant="primary" type="submit">Añadir receta</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default RecipeForm;