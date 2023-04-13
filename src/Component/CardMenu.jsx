import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardMenu() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card style={{ width: '13rem' }} className="m-2"> 
      <Card.Img
        style={{ width: '100%' }} 
        src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card.Body>
        <Card.Text style={{ width: '13rem' }}>
          <h4>Postres</h4> 
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' }} className="m-2"> 
      <Card.Img
        style={{ width: '100%' }} 
        src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card.Body>
        <Card.Text style={{ width: '13rem' }}>
          <h4>Postres</h4> 
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' }} className="m-2"> 
      <Card.Img
        style={{ width: '100%' }} 
        src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card.Body>
        <Card.Text style={{ width: '13rem' }}>
          <h4>Postres</h4> 
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
}
