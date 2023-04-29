
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button, Navbar,Nav } from 'react-bootstrap';
import React from "react";  
import {BsPersonFill} from 'react-icons/bs';
import {MdFoodBank} from "react-icons/md";
import {MdBorderColor} from "react-icons/md";
import "../Style/AdminUser.css";
import {AiFillHome} from 'react-icons/ai';
import { usersHandler } from "../Handlers/userHandler";





function User() {
 
  const { users } = useLoaderData();

  async function deleteUser (id) {
    await usersHandler.deleteUser(id) 
  };


  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={2}>
        
          <Navbar expand="lg" style={{ backgroundColor: "#8B8961", flexDirection: "column" , borderRadius:'15px'}}>
              <Nav className="flex-column">
              <Nav.Link  href='/' style={{ color: "white", marginBottom: "1rem" }}>
                  <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} /> Home
                </Nav.Link>
                <Nav.Link href='/User' style={{ color: "white", marginBottom: "1rem" }}>
                  <BsPersonFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} /> Usuarios
                </Nav.Link>
                <Nav.Link href='AdminRecipeView' style={{ color: "white", marginBottom: "1rem" }}>
                  <MdFoodBank className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Recetas
                </Nav.Link>
                <Nav.Link href= '/List' style={{ color: "white", marginBottom: "1rem" }}>
                  <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Lista de Pedidos
                </Nav.Link>
              </Nav>
          </Navbar>
        </Col>
        <Col xs={12} sm={10}>
        <div style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}>
            <Table striped bordered hover style={{ background: "#A4A694", textAlign: "center", borderRadius:'15px'}}>
              <thead>
                <tr style={{ color: "#334122" }}>
                  <th>Id</th>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td style={{ color: "#334122" }}>{user.id}</td>
                    <td style={{ color: "#334122" }}>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.userPhone}</td>
                    <td style={{textAlign:'center'}}>
                      <Button variant="primary" className="mx-2" style={{ backgroundColor: "transparent", border: "none", width: "40px",  color: "#334122", margin: 'auto'}} onClick={() => deleteUser(user.id)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
