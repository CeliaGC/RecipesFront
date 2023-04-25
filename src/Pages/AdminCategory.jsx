import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../Style/AdminCategory.css";
import { useLoaderData } from 'react-router';

const AdminCategory = () => {
    const { categories } = useLoaderData();
  // const [categories] = useState([
    // { id: 1, name: "Verduras" },
    // { id: 2, name: "Legumbres" },
    // { id: 3, name: "Carne" },
    // { id: 4, name: "Pescado" },
    // { id: 5, name: "Pasta" },
    // { id: 6, name: "Arroces" }
  // ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(3);

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  const renderCategories = currentCategories.map((category) => {
    return (
      <div>
       {categories.map((category) => (
      <Col xs={4} key={category.id}>
        <Card className="mb-4 category-card">
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
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
      ))}
      </div>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(categories.length / categoriesPerPage); i++) {
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
          <h1>Categorías</h1>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control type="text" placeholder="Buscar por categoría" style={{backgroundColor: "rgba(255, 236, 227, 1)"}}>
              </Form.Control>
            </Form.Group>
          </Form>
          <hr />
          <Row>{renderCategories}</Row>
          <nav>
          <ul className="pagination justify-content-center" style={{marginBottom: "0.5rem"}}>
  {renderPageNumbers}
</ul>

          </nav>
          <hr />
          <h3>Añadir categoría</h3>
          <Form>
            <Form.Group controlId="formBasicCategory">
              <Form.Label>Categoría</Form.Label>
              <Form.Control type="text" placeholder="Introduce una categoría" style={{backgroundColor: "rgba(255, 236, 227, 1)"}}>

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

export default AdminCategory;
