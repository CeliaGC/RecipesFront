import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../Style/Register.css"
import { usersHandler } from "../Handlers/userHandler";
import { Form, Row, Col,Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import NavbarView from "../Component/NavbarView";


function Register() {

 const [idRol, setIdRol] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();


/*   const handleIdRolChange = (event) => {
    setIdRol(event.target.value);
  }; */
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const handleUserPhoneChange = (event) => {
    setUserPhone(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let newUser = {/* idRol , */ userName,  password, confirmPassword, userEmail, userPhone };
    usersHandler.addUser(newUser);
    navigate('/FormLogin');
  };

  return (
    <div >
     <Row>
      <Col xs={12} sm={2} style={{marginTop: '80px'}}>
         <NavbarView/> 
        </Col>
        <Col xs={12} sm={10}>
<Form onSubmit={handleSubmit} className="center-form">
<h2 style={{marginTop:'120px', marginLeft:'70px'}}>Registro de usuario</h2>
    <Row style={{marginTop: '50px'}}>
      <Col >
        <Form.Group controlId="formUserName" >
        <Form.Label><FontAwesomeIcon icon={faUser} /> Nombre de Usuario</Form.Label>
          <Form.Control type="text" placeholder="Introduce usuario elegido" value={userName} onChange={handleUserNameChange} required />
        </Form.Group>
   {/*      <Form.Group controlId="formIdRol">
          <Form.Label><FontAwesomeIcon icon={faUser} /> Introduce el Rol</Form.Label>
          <Form.Control type="text" placeholder="Introduce el Rol" value={idRol} onChange={handleIdRolChange} required />
        </Form.Group> */}
        <Form.Group controlId="formEmail">
          <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={handleUserEmailChange} required />
        </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="formPhone">
          <Form.Label><FontAwesomeIcon icon={faPhone} /> Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="Introduce un teléfono" value={userPhone} onChange={handleUserPhoneChange} required />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label><FontAwesomeIcon icon={faLock} /> Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña"  value={password} onChange={handlePasswordChange} required />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label><FontAwesomeIcon icon={faLock} /> Confirma Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirma contraseña"  value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        </Form.Group>
      </Col>
    </Row>
    <Form.Group controlId="formTerms">
      <Form.Check className="custom-checkbox" type="checkbox" style={{color:'grey'}} label="I agree to the terms and conditions" />
    </Form.Group>
    <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-primary" style={{marginTop:'40px'}}>Añadir usuario</button>
  </div>
  </Form>
  </Col>
  </Row>
</div>
  );
}

export default Register;
