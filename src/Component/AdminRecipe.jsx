import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import AdminRecipe from "../Component/AdminRecipe";

const AdminRecipe = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Pasta Alfredo",
      category: "Pasta",
      ingredients: ["pasta", "butter", "garlic", "parmesan cheese", "cream"],
      instructions: "Cook pasta according to package instructions...",
      imageUrl: "https://example.com/pasta-alfredo.jpg",
      isPublished: true,
    },
    {
      id: 2,
      name: "Chicken Tacos",
      category: "Mexican",
      ingredients: ["chicken", "tortillas", "avocado", "salsa", "cheese"],
      instructions: "Grill chicken until cooked through...",
      imageUrl: "https://example.com/chicken-tacos.jpg",
      isPublished: false,
    },
  ]);

  const handleDeleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Manage Recipes</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Ingredients</th>
                <th>Instructions</th>
                <th>Image</th>
                <th>Published</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.id}>
                  <td>{recipe.name}</td>
                  <td>{recipe.category}</td>
                  <td>{recipe.ingredients.join(", ")}</td>
                  <td>{recipe.instructions}</td>
                  <td>
                    <img src={recipe.imageUrl} alt={recipe.name} />
                  </td>
                  <td>{recipe.isPublished ? "Yes" : "No"}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteRecipe(recipe.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminRecipe;

  