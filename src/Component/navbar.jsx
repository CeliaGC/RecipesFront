import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Style/Navbar.css'
import { BsPerson } from 'react-icons/bs';

const NavbarLog = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navb" className='ms-auto'>
        <Button variant="primary " size="lg" href="/FormLogin" style={{ backgroundColor: 'transparent', border: 'none' }}>
                      < BsPerson style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }} />
                    </Button>
          <Form className="d-flex col-xs-6 col-md-4 ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLog;