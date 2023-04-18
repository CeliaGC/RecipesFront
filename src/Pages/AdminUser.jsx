<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "../Style/AdminUser.css";

const AdminUser = () => {
  // Array de usuarios de ejemplo
  const initialUsers = [
    {
      id: 1,
      name: "Juan",
      email: "juan@mail.com",
      role: "admin",
    },
    {
      id: 2,
      name: "María",
      email: "maria@mail.com",
      role: "user",
    },
    {
      id: 3,
      name: "Pedro",
      email: "pedro@mail.com",
      role: "user",
    },
  ];
  // Estado que almacena la lista de usuarios
  const [users, setUsers] = useState(initialUsers);
  // Función para eliminar un usuario de la lista
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1>Administrar usuarios</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Eliminar
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
export default AdminUser;
=======


function NotFound() {
    return (
      <div className='App'>
      
          <h1>AdminUser</h1>
        </div>
    )
  }
  
  export default NotFound
>>>>>>> dev
