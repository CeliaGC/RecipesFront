import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/AdminList.css'

export default function ListAdmin() {
  const {orders} = useLoaderData();
  console.log  (orders)
  const handleSendEmail = () => {
    window.location.href = 'mailto:cooksmart56@gmail.com';
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="row">
      {orders.map((order) => (
        <div key={order.id} className="col col-4">
            
            <Card style={{ width: '13rem' }} className="m-4">
             
              <Card.Body>
                <Card.Text>
                  Uduario
                  {order.idUser}
                </Card.Text>
                <Card.Text>
                  Ingrediente
                  {order.idIngredient}
                </Card.Text>
                <Card.Text>
                  Cantidad
                  {order.amount}
                </Card.Text>
                <Card.Text>
                  Unidad
                  {order.unit}
                </Card.Text>
              </Card.Body>
            </Card>
          
        </div>
      ))}
     <div className="col col-12 d-flex justify-content-center">
     <button className="btnSendEmail" onClick={handleSendEmail}>Enviar correo electrónico</button>
        </div>
      </div>
    </div>
  );
}



// import React, { useState } from 'react';
// import { Card, Accordion, Table } from 'react-bootstrap';

// const IngredientList = ({ professors }) => {
//   const [activeProfessor, setActiveProfessor] = useState(null);

//   const handleAccordionClick = (professor) => {
//     setActiveProfessor(professor);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-6">
//           <Accordion activeKey={activeProfessor} onSelect={handleAccordionClick}>
//             {professors.map((professor) => (
//               <Card key={professor.id}>
//                 <Accordion.Toggle as={Card.Header} eventKey={professor.id}>
//                   {professor.name}
//                 </Accordion.Toggle>
//                 <Accordion.Collapse eventKey={professor.id}>
//                   <Card.Body>
//                     <ul>
//                       {professor.ingredients.map((ingredient) => (
//                         <li key={ingredient.id}>{ingredient.name}</li>
//                       ))}
//                     </ul>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//             ))}
//           </Accordion>
//         </div>
//         <div className="col-md-6">
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Ingredientes</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeProfessor &&
//                 activeProfessor.ingredients.map((ingredient) => (
//                   <tr key={ingredient.id}>
//                     <td>{ingredient.name}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IngredientList;
