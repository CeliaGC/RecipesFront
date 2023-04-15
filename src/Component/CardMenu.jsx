// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { useLoaderData } from 'react-router';
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function CardMenu() {
//   const {recipe} = useLoaderData();
//   console.log(recipe);

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//     {recipe.map((recipe) => (
//     <Card style={{ width: '13rem' }} className="m-2"> 
//       {/* <Card.Img
//         style={{ width: '100%' }} 
//         src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       /> */}
//       <Card.Body>
//         {/* <Card.Text style={{ width: '13rem' }}> {recipe.category} </Card.Text> */}
//         <Card.Text > {recipe.category} </Card.Text>
//         <Card.Text > {recipe.name} </Card.Text>
//       </Card.Body>
//     </Card>
//    ))} 
//  </div>
//   );
// }
// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { useLoaderData } from 'react-router';
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function CardMenu() {
//   const { recipe } = useLoaderData();
//   console.log(recipe);

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       {recipe.map((recipeItem) => (
//         <Card key={recipeItem.id} style={{ width: '13rem' }} className="m-2">
//           <Card.Body>
//             <Card.Text>
//               {recipeItem.category}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardMenu() {
  const { recipe } = useLoaderData();
  console.log(recipe);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    
        <Card key={recipe.id} style={{ width: '13rem' }} className="m-2">
          <Card.Body>
            <Card.Text>
              {recipe.category}
            </Card.Text>
          </Card.Body>
        </Card>
    
    </div>
  );
}