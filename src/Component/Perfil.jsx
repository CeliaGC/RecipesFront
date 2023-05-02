import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useLoaderData } from "react-router-dom";


const Perfil = () => {

    const { user } = useLoaderData();
    console.log("Hola" + user);


  return (
    <Container>
      <Row>
        <Col key={user.id} className="my-3" style={{ width: '18rem', marginLeft:'20em'}} md={3}>
        </Col>
        <Col md={9}>
          <h2>{user.userName}</h2>
          <p>{user.userEmail}</p>
          <p>{user.userPhone}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
