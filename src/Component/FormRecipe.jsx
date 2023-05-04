import React, { useState } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { recipeHandler } from "../Handlers/recipeHandler";


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

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newRecipe = {
      name, instructions, category, author, observations, materials, posterName: postedBy,
      ingredients:
        ingredients,
      alergens: [
        { name: alergens },
      ]
    };
    await recipeHandler.addRecipe(newRecipe);

  };

  return (
    <div className="recipe-form-container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" style={{marginTop:'40px'}}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" value={name} onChange={handleNameChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Instructiones</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Para preparar la receta..." value={instructions} onChange={handleInstructionsChange} required />
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
              <Form.Control type="text" placeholder="Usuario" value={postedBy} onChange={handlePostedByChange} required />
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
              <Form.Control as="select" value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="">Seleccione una unidad</option>
                <option value="gr">gr</option>
                <option value="ml">ml</option>
                <option value="unidad">ud</option>
                <option value="c/s">cs</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={handleAdd}>
              Agregar
            </Button>
            <Form.Group className="mb-3">
              <Form.Label>Alérgenos</Form.Label>
              <Form.Control type="text"  placeholder="Alérgenos" value={alergens} onChange={handleAlergensChange} />
            </Form.Group> 
            <Button variant="primary" type="submit">Añadir receta</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default RecipeForm;