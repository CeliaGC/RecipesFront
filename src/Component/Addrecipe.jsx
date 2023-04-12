import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../Style/Addrecipe.css";

function RecipeForm() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparationTime, setPreparationTime] = useState("");
    const [category, setCategory] = useState("");
   // const [servings, setServings] = useState("");
    const [preparationMethod, setPreparationMethod] = useState("");
    const [allergens, setAllergens] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    };

    const handlePreparationTimeChange = (event) => {
        setPreparationTime(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    // const handleServingsChange = (event) => {
    //     setServings(event.target.value);
    // };

    const handlePreparationMethodChange = (event) => {
        setPreparationMethod(event.target.value);
    };

    const handleAllergensChange = (event) => {
        setAllergens(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Enviar datos al servidor
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
                            <Form.Label>Ingredientes</Form.Label>
                            <Form.Control type="text" placeholder="Ingredientes" value={ingredients} onChange={handleIngredientsChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Tiempo de preparación</Form.Label>
                            <Form.Control type="text" placeholder="Tiempo de preparación" value={preparationTime} onChange={handlePreparationTimeChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control type="text" placeholder="Categoría" value={category} onChange={handleCategoryChange} required />
                        </Form.Group>

                        <p>Servicio para 4 personas</p>
                    </Col>
        
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Modo de preparación</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Modo de preparación" value={preparationMethod} onChange={handlePreparationMethodChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Alérgenos</Form.Label>
                            <Form.Control type="text" placeholder="Alérgenos" value={allergens} onChange={handleAllergensChange} />
                        </Form.Group>

                        <Row>
                            <Col xs="auto" className="text-end">
                                <Button variant="primary" type="submit">Añadir receta</Button>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default RecipeForm;




