import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../Style/AdminRecipe.css";

const AdminRecipe = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Ensalada César", category: "Ensaladas" },
    { id: 2, name: "Lasaña de Carne", category: "Pastas" },
    { id: 3, name: "Tarta de Limón", category: "Postres" },
    { id: 4, name: "Sopa de Calabaza", category: "Sopas" },
    { id: 5, name: "Hamburguesa con queso", category: "Carnes" },
    { id: 6, name: "Arroz con mariscos", category: "Arroces" }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(3);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const renderRecipes = currentRecipes.map((recipe) => {
    return (
      <Col xs={4} key={recipe.id}>
        <Card className="mb-4 recipe-card">
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>{recipe.category}</Card.Text>
            <div className="btn-group">
              <Button variant="warning" size="sm" style={{backgroundColor: "rgba(252, 163, 117, 1)"}}>
                Editar
              </Button>
              <Button variant="danger" size="sm" style={{backgroundColor: "rgba(220, 197, 167, 1)"}}>
                Eliminar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
        <Button variant="link" className="page-link" onClick={() => setCurrentPage(number)}>
          {number}
        </Button>
      </li>
    );
  });

  return (
    <Container>
      <Row>
        <Col>
          <h1>Recetas</h1>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control type="text" placeholder="Buscar por receta" style={{backgroundColor: "rgba(255, 236, 227, 1)"}}>
              </Form.Control>
            </Form.Group>
          </Form>
          <hr />
          <Row>{renderRecipes}</Row>
          <nav>
          <ul className="pagination justify-content-center" style={{marginBottom: "0.5rem"}}>
  {renderPageNumbers}
</ul>

          </nav>
          <hr />
          <h3>Añadir categoría</h3>
          <Form>
            <Form.Group controlId="formBasicCategory">
              <Form.Label>Receta</Form.Label>
              <Form.Control type="text" placeholder="Introduce una receta" style={{backgroundColor: "rgba(255, 236, 227, 1)"}}>

              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" style={{backgroundColor: "rgba(252, 163, 117, 1)", marginTop: "1rem"}}>
              Añadir
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminRecipe;