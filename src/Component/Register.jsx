import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../Style/Register.css"

function Register({handleSubmit}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError(true);
      return;
    }
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    setError(false);
    handleSubmit({name, email, password});
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form-title">
      </div>
      <Form onSubmit={handleSubmitForm} className="center-form">
        <h2 style={{marginBottom: '40px'}}>Registro de usuario</h2>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faUser} /> Nombre completo</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu nombre completo" value={name} onChange={handleNameChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Introduce tu correo electrónico" value={email} onChange={handleEmailChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faLock} /> Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Introduce tu contraseña" value={password} onChange={handlePasswordChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faLock} /> Confirmar contraseña</Form.Label>
          <Form.Control type="password" placeholder="Repite tu contraseña" value={password} onChange={handleConfirmPasswordChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">Registrarse</Button>
      </Form>
      <div className="registration-form-footer">
        <p>Already Registered?</p>
        <a href="#">Login</a>
      </div>
    </div>
  );
}

export default Register;
