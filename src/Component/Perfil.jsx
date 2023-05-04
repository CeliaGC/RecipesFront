import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from "react-router-dom";


const Perfil = () => {

    const { user } = useLoaderData();

  return (
    <Container>
      <Row>
        <Col key={user[0].id} style={{ width: '18rem', marginLeft:'20em'}} >
        </Col>
        <Col md={9}>
        <h4>Nombre de Usuario</h4>
          <p style={{fontSize:'22px'}}>{user[0].userName}</p>
          <h4>Id Rol</h4>
          <p> {user[0].idRol}</p>
          <h4>Correo electrónico</h4>
          <p> {user[0].userEmail}</p>
          <h4>Teléfono de contacto</h4>
          <p>{user[0].userPhone}</p>
        
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
