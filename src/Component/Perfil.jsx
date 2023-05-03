import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useLoaderData } from "react-router-dom";


const Perfil = () => {

    const { user } = useLoaderData();
    console.log(user);


  return (
    <Container>
      <Row>
        <Col key={user[0].id} className="my-3" style={{ width: '18rem', marginLeft:'20em'}} md={3}>
        </Col>
        <Col md={9}>
          <h2>{user[0].userName}</h2>
          <p>{user[0].userEmail}</p>
          <p>{user[0].userPhone}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
