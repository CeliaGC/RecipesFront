// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import "../Style/AdminRecipe.css";

// const AdminRecipe = () => {
//   const [recipes] = useState([
//     { id: 1, name: "Ensalada César", category: "Ensaladas" },
//     { id: 2, name: "Lasaña de Carne", category: "Pastas" },
//     { id: 3, name: "Tarta de Limón", category: "Postres" },
//     { id: 4, name: "Sopa de Calabaza", category: "Sopas" },
//     { id: 5, name: "Hamburguesa con queso", category: "Carnes" },
//     { id: 6, name: "Arroz con mariscos", category: "Arroces" }
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [recipesPerPage] = useState(3);

//   const indexOfLastRecipe = currentPage * recipesPerPage;
//   const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
//   const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

//   const renderRecipes = currentRecipes.map((recipe) => {
//     return (
//       <Col xs={4} key={recipe.id}>
//         <Card className="mb-4 recipe-card">
//           <Card.Body>
//             <Card.Title>{recipe.name}</Card.Title>
//             <Card.Text>{recipe.category}</Card.Text>
//             <div className="btn-group">
//               <Button variant="warning" size="sm" style={{backgroundColor: "rgba(252, 163, 117, 1)"}}>
//                 Editar
//               </Button>
//               <Button variant="danger" size="sm" style={{backgroundColor: "rgba(220, 197, 167, 1)"}}>
//                 Eliminar
//               </Button>
//             </div>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   });

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const renderPageNumbers = pageNumbers.map((number) => {
//     return (
//       <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
//         <Button variant="link" className="page-link" onClick={() => setCurrentPage(number)}>
//           {number}
//         </Button>
//       </li>
//     );
//   });

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1>Recetas</h1>
//           <Form>
//             <Form.Group controlId="formBasicSearch">
//               <Form.Control type="text" placeholder="Buscar por receta" style={{backgroundColor: "rgba(255, 236, 227, 1)"}}>
//               </Form.Control>
//             </Form.Group>
//           </Form>
//           <hr />
//           <Row>{renderRecipes}</Row>
//           <nav>
//           <ul className="pagination justify-content-center" style={{marginBottom: "0.5rem"}}>
//   {renderPageNumbers}
// </ul>
//           </nav>
//          </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminRecipe;

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
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({ id: null, name: '', category: '' });

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
              <Button variant="warning" size="sm" style={{ backgroundColor: "rgba(252, 163, 117, 1)" }}>
                Editar
              </Button>
              <Button variant="danger" size="sm" style={{ backgroundColor: "rgba(220, 197, 167, 1)" }}>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = recipes.length + 1;
    setRecipes([...recipes, { ...newRecipe, id }]);
    setShowAddRecipeForm(false);
    setNewRecipe({ id: null, name: '', category: '' });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Recetas</h1>

          <Row>{renderRecipes}</Row>
          <nav>
            <ul className="pagination">{renderPageNumbers}</ul>
          </nav>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="recipeName">
                  <Form.Label>Nombre de la receta</Form.Label>
                  <Form.Control type="text" value={newRecipe.name} onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })} placeholder="Escriba el nombre de la receta" />
                </Form.Group>
                <Form.Group controlId="recipeIngredients">
                  <Form.Label>Ingredientes</Form.Label>
                  <Form.Control type="text" value={newRecipe.ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} placeholder="Escriba los ingredientes" />
                </Form.Group>
                <Form.Group controlId="recipeCategory">
                  <Form.Label>Categoría de la receta</Form.Label>
                  <Form.Control as="select" value={newRecipe.category} onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}>
                    <option value="">Seleccionar una categoría</option>
                    <option value="Ensaladas">Ensaladas</option>
                    <option value="Pastas">Pastas</option>
                    <option value="Postres">Postres</option>
                    <option value="Sopas">Sopas</option>
                    <option value="Carnes">Carnes</option>
                    <option value="Arroces">Arroces</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="recipeInstructions">
                  <Form.Label>Modo de preparación</Form.Label>
                  <Form.Control as="textarea" value={newRecipe.instructions} onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })} rows={4} placeholder="Escriba el modo de preparación" />
                  <p>Servicio: 4 personas</p>
                </Form.Group>
                <Form.Group controlId="recipeAllergens">
                  <Form.Label>Alérgenos</Form.Label>
                  <Form.Control type="text" value={newRecipe.allergens} onChange={(e) => setNewRecipe({ ...newRecipe, allergens: e.target.value })} placeholder="Escriba los alérgenos" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" style={{ backgroundColor: "rgba(252, 163, 117, 1)" }}>Agregar</Button>{' '}
            <Button variant="secondary" style={{ backgroundColor: "rgba(252, 163, 117, 1)" }} onClick={() => setShowAddRecipeForm(false)}>Cancelar</Button>
          </Form>
        </Col>
      </Row>
    </Container>

  );
};

export default AdminRecipe;
