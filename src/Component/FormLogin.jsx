import "../Style/FormLogin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { loginService } from "../Service/loginService";
import React, { useState, useEffect, useContext } from "react";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import jwtDecode from 'jwt-decode';



function FormLogin() {
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

  // const handleLogin = () => {
  //   // setIsLoginFormSubmitted(true);
  //   // Realizar una solicitud al servidor de autenticación para iniciar sesión
  //   fetch('https://localhost:7286/api/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: userData.email,
  //       password: userData.password,
  //     }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error('Credenciales incorrectas');
  //       }
  //     })
  //     .then((data) => {
  //       // Guardar el token en el almacenamiento local
  //       localStorage.setItem('authToken', data.Token);
  //       // Redirigir al usuario a la página de inicio
  //       navigate('/home');
  //     })
  //     .catch((error) => {
  //       console.error('Error al iniciar sesión:', error);
  //       // Swal.fire('Error', 'Credenciales incorrectas', 'error');
  //     });
  // };

// comento para probar jwToken
  const handleLogin = async (formData) => {
    try {
      const data = await loginService(formData);
      setUserStorage(data);

      const token = data.token;
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role; // Asume que el claim del rol es "role"
      
      console.log(userRole);

      if (userRole && userRole == 1) {
        navigate('/AdminUser');

      } if (userRole && userRole == 2) {
        navigate('/TeacherUser');

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

    <>
    <div className="FormLoginBox">
    <div className="registration-form-container">
      <div className="registration-form-title"></div>
      <Form onSubmit={handleSubmit} className="center-form">
        <h2 style={{ marginBottom: '40px' }}>Iniciar sesión</h2>
        <Form.Group className="mb-3" style={{ width: '300px' }}><Form.Label>
          <FontAwesomeIcon icon={faEnvelope} /> Nombre de Usuario</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu nombre de Usuario" value={userName} onChange={handleUserNameChange} required style={{ border: 'none' }} /><hr className="my-3" />
        </Form.Group><Form.Group className="mb-3" style={{ width: '300px' }}><Form.Label>
          <FontAwesomeIcon icon={faLock} /> Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Introduce tu contraseña" value={userPassword} onChange={handleUserPasswordChange} required style={{ border: 'none' }} />
          <hr className="my-3" /></Form.Group>
          <div className="center-button" style={{alignItems:'center'}}>
      <Button variant="primary" type="submit" style={{ background: '#F2AA85', border: 'none' , alignItems:'center'}}>Iniciar sesión</Button> 
    </div>
      </Form>
    </div>
    </div>
    </>
  );
}

export default FormLogin;