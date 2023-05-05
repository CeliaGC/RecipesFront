
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button, Navbar,Nav } from 'react-bootstrap';
import React from "react";  
import "../Style/AdminUser.css";
import { usersHandler } from "../Handlers/userHandler";
import NavbarView from "../Component/NavbarView";
import {BsTrashFill} from 'react-icons/bs';




function User() {
 
  const { users } = useLoaderData();

  async function deleteUser (id) {
    await usersHandler.deleteUser(id) 
  };


  return (
    <Container fluid>
      <Row>
      <Col xs={12} sm={2}>
         <NavbarView/> 
        </Col>
        <Col xs={12} sm={10}>
        <div className="user-table-container" style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto"}}>
        <h4 style={{marginBottom:'30px', textAlign:'center'}}>Lista de Usuarios</h4>
            <Table striped bordered hover style={{ background: "#A4A694", textAlign: "center", borderRadius:'15px'}} responsive>
              <thead>
                <tr style={{ color: "#334122" }}>
                  <th>Id Rol</th>
                  <th>Usuario</th>
                  <th>Email</th>  
                  <th>Teléfono</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td style={{ color: "#334122" }}>{user.idRol}</td>
                    <td style={{ color: "#334122" }}>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.userPhone}</td>
                    <td style={{textAlign:'center'}}>
                      <Button variant="primary" className="mx-2" style={{ backgroundColor: "transparent", border: "none", width: "40px",  color: "#334122", margin: 'auto'}} onClick={() => deleteUser(user.id)}>
                      < BsTrashFill className="my-icon mr-2" style={{ backgroundColor: "none", color:' #334122', marginBottom: "10px", size: "4em" }} />
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
