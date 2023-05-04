import { Modal, Form, Button } from 'react-bootstrap';
import '../Style/LoginModal.css'; // Importar los estilos CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { loginService } from "../Service/loginService";
import React, { useState, useEffect, useContext } from "react";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";


const LoginModal =(props) => {
  const { userStorage, setUserStorage } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();
  const userData = localStorage.getItem('userData');
  const parsedUserData = JSON.parse(userData);
  const IdRol = parsedUserData && parsedUserData.item2;


  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleLogin = async (formData) => {
    try {
      const data = await loginService(formData);
      setUserStorage(data);

      if (IdRol && IdRol == 1) {
        navigate('/AdminUser');

      } if (IdRol && IdRol === 2) {
        navigate('/Menu');

      }

    } catch (error) {
 
  handleResponseError(error.response); 
      
    }
  };

  const handleResponseError = (response) => {
    if (response.status === 401 || response.status === 422 || response.status === 400) {
      swal(response.data);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      userName: userName,
      userPassword: userPassword,
    };

    handleLogin(loginData);
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group  controlId="formBasicUsername">
          <FontAwesomeIcon icon={faEnvelope} /><Form.Control type="text" placeholder="Introduzca su nombre de usuario"  value={userName} onChange={handleUserNameChange} required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="*******" value={userPassword} onChange={handleUserPasswordChange} required/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Cerrar
        </Button>
        <Form.Text className="text-muted">
          ¿No está registrado aún? <a href="/Register">Regístrese aquí</a>
        </Form.Text>
      </Modal.Footer>
    </Modal>
  );
};

const Login = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowLoginModal(true)}>Iniciar sesión</Button>

      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
    </div>
  );
};

export default Login;
