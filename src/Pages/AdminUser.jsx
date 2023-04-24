
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../Style/AdminUser.css";




const AdminUser = () => {
  const [users] = useState([
    { id: 1, username: "JuanLu", role: "Admin" },
    { id: 2, username: "Ainhoa", role: "User" },
    { id: 3, username: "Anyi", role: "User" },
    { id: 4, username: "Celia", role: "User" },
    { id: 5, username: "Jenny", role: "User" },
    { id: 6, username: "Rose", role: "User" }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  

  const renderUsers = currentUsers.map((user) => {
    return (
      <Col xs={4} key={user.id}>
        <Card className="mb-4 user-card">
          <Card.Header>{user.username}</Card.Header>
          <Card.Body>
            <Card.Text>{user.role}</Card.Text>
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
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
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
          <h1>Usuarios</h1>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control type="text" placeholder="Buscar por usuario" style={{backgroundColor: "rgba(255, 236, 227, 1)"}}>
              </Form.Control>
              </Form.Group>
          </Form>
          <hr />
          <Row>{renderUsers}</Row>
          <nav>
          <ul className="pagination justify-content-center" style={{marginBottom: "0.5rem"}}>
  {renderPageNumbers}
</ul>
          </nav>
         </Col>
      </Row>
    </Container>
  );
};

export default AdminUser;