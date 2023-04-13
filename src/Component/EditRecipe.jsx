// import React, { useState } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import "../Style/EditRecipe.css";

// function EditRecipeForm() {
//     const [name, setName] = useState("");
//     const [ingredients, setIngredients] = useState("");
//     const [preparationTime, setPreparationTime] = useState("");
//     const [category, setCategory] = useState("");
//     const [preparationMethod, setPreparationMethod] = useState("");
//     const [allergens, setAllergens] = useState("");

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };

//     const handleIngredientsChange = (event) => {
//         setIngredients(event.target.value);
//     };

//     const handlePreparationTimeChange = (event) => {
//         setPreparationTime(event.target.value);
//     };

//     const handleCategoryChange = (event) => {
//         setCategory(event.target.value);
//     };

//     const handlePreparationMethodChange = (event) => {
//         setPreparationMethod(event.target.value);
//     };

//     const handleAllergensChange = (event) => {
//         setAllergens(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Enviar datos al servidor
//     };

//     return (
//         <div className="recipe-form-container">
//             <Form onSubmit={handleSubmit}>
//                 <Row>
//                     <Col md={6}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Nombre</Form.Label>
//                             <Form.Control type="text" placeholder="Nombre" value={name} onChange={handleNameChange} required />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Ingredientes</Form.Label>
//                             <Form.Control type="text" placeholder="Ingredientes" value={ingredients} onChange={handleIngredientsChange} required />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Tiempo de preparación</Form.Label>
//                             <Form.Control type="text" placeholder="Tiempo de preparación" value={preparationTime} onChange={handlePreparationTimeChange} required />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Categoría</Form.Label>
//                             <Form.Control type="text" placeholder="Categoría" value={category} onChange={handleCategoryChange} required />
//                         </Form.Group>
//                         <p>Servicio para 4 personas</p>
//                     </Col>
//                     <Col md={6}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Modo de preparación</Form.Label>
//                             <Form.Control as="textarea" rows={3} placeholder="Modo de preparación" value={preparationMethod} onChange={handlePreparationMethodChange} required />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Alérgenos</Form.Label>
//                             <Form.Control type="text" placeholder="Alérgenos" value={allergens} onChange={handleAllergensChange} />
//                         </Form.Group>
//                         <Row>
//                             <Col xs="auto" className="text-end">
//                                 <Button variant="primary" type="submit">Editar receta</Button>
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//             </Form>
//         </div>
//     );
// }

// export default EditRecipeForm;


/*export function FormLogin({setUser}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = (event) => {
      event.preventDefault()
      if (name === "" || password === "") {
          setError(true)
          return
      }
      setError(false)
      setUser([name])
  }
    return (
        <section>
            <h1>Login</h1>
            <form className="formulario"
            onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    onChange={event => setName(event.target.value)} />
                <input type="password"
                value={password}
                onChange={event => setPassword(event.target.value)} />
                <button>Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
} */

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faList, faEdit, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function EditRecipe({handleSubmit}) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [preparation, setPreparation] = useState('');
  const [allergens, setAllergens] = useState('');
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handlePreparationChange = (event) => {
    setPreparation(event.target.value);
  };
  const handleAllergensChange = (event) => {
    setAllergens(event.target.value);
  };
  
  return (
    <div className="registration-form-container">
      <div className="registration-form-title">
      </div>
      <Form onSubmit={handleSubmit} className="center-form">
        <h2 style={{marginBottom: '40px'}}>Crear receta</h2>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faEdit} /> Nombre de la receta</Form.Label>
          <Form.Control type="text" placeholder="Introduce el nombre de la receta" value={name} onChange={handleNameChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faList} /> Ingredientes</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Introduce los ingredientes" value={ingredients} onChange={handleIngredientsChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faClock} /> Tiempo de preparación</Form.Label>
          <Form.Control type="text" placeholder="Introduce el tiempo de preparación" value={time} onChange={handleTimeChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faList} /> Categoría</Form.Label>
          <Form.Control type="text" placeholder="Introduce la categoría" value={category} onChange={handleCategoryChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faCheckSquare} /> Modo de preparación</Form.Label>
          <Form.Control type="text" placeholder="Introduce la preparación" value={preparation} onChange={handlePreparationChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
            <Form.Label><FontAwesomeIcon icon={faCheckSquare} /> Alérgenos</Form.Label>
            <Form.Control type="text" placeholder="Introduce los alérgenos" value={allergens} onChange={handleAllergensChange} required style={{ border: 'none'}}/>
            <hr className="my-3"/>
        </Form.Group>
        <Button variant="primary" type="submit" style={{background:'#F2AA85', border: 'none'}}>Editar receta</Button>
        {error && <p>Todos los campos son obligatorios</p>}
      </Form>
    </div>
  );
}
export default EditRecipe;


