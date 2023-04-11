import Card from 'react-bootstrap/Card';

function CardMenu() {
  return (
    <>
      <Card style={{ width: '13rem'}}>
        <Card.Img style={{ width: '12rem' }} src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body >
          <Card.Text style={{ width: '13rem'}}>
           <h4>Postres</h4> 
          </Card.Text>
        </Card.Body>
      </Card>  
      
    </>
  );
}

export default CardMenu;