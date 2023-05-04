import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import MediaQuery from "react-responsive";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { MdFoodBank } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { PersonCircle } from 'react-bootstrap-icons';
import { PeopleFill } from 'react-bootstrap-icons';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import {TbChefHat} from 'react-icons/tb';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {AiOutlinePlus} from 'react-icons/ai';


function NavbarView() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { userStorage, setUserStorage } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUserStorage("");
        navigate('/');
    };


    return (
        <div>
            <MediaQuery minWidth={768}>
                <div className="sidebar" style={{ position: "relative", width: "9vw", overflow: "hidden", backgroundColor: "#8B8961", borderRadius: '15px', width: '150px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', maxHeight: '80vh', overflowY: 'auto' }}>
                    <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "4em" }} /> Home
                    </Nav.Link>
                    <Nav.Link href= '/PerfilAdmin' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <PersonCircle className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "4em" }} /> Mi perfil
                    </Nav.Link>
                    <Nav.Link href='/UserList' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <PeopleFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "4em" }} /> Usuarios
                    </Nav.Link>
                    <Nav.Link href='/Register' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <BsFillPersonPlusFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "4em" }} /> Añadir Usuarios
                    </Nav.Link>
                    <Nav.Link href='AdminRecipe' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdFoodBank className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Recetas
                    </Nav.Link>
                    <Nav.Link href='/AdminMyRecipes' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <TbChefHat className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Mis recetas
                    </Nav.Link>
                    <Nav.Link href='/AddRecipeUser' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdOutlineRestaurantMenu className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",fontSize: '20px' }} /><AiOutlinePlus className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", fontSize: '10px'}} /> Añadir recetas
                    </Nav.Link>
                    <Nav.Link href='/AdminList' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Lista de Pedidos
                    </Nav.Link>
                    <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <HiOutlineLogout className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} onClick={handleLogout} /> Cerrar sesión
                    </Nav.Link>
                </div>
            </MediaQuery>

          <MediaQuery maxWidth={767}>
                <Navbar expand="lg" variant="light" style={{ marginTop: '20px', marginBottom: '-20px', backgroundColor: "#8B8961", borderRadius: '15px' }} >
                    <Container className="d-flex flex-column flex-md-row">
                        <Nav className="w-100 justify-content-around flex-row">
                            <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem" }}>
                                <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} />
                            </Nav.Link>
                            <Nav.Link href='/PerfilAdmin' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                                <PersonCircle className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} />
                            </Nav.Link>
                            <Nav.Link href='/UserList' style={{ color: "white", marginBottom: "1rem" }}>
                                <BsPersonFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} />
                            </Nav.Link>
                            <Nav.Link href='/Register' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <BsFillPersonPlusFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "4em" }} />
                    </Nav.Link>
                            <Nav.Link href='AdminRecipe' style={{ color: "white", marginBottom: "1rem" }}>
                                <MdFoodBank className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} />
                            </Nav.Link>
                            <Nav.Link href='/AdminMyRecipes' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <TbChefHat className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} />
                    </Nav.Link>
                    <Nav.Link href='/AddRecipeUser' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdOutlineRestaurantMenu className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",fontSize: '20px' }} /><AiOutlinePlus className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", fontSize: '10px'}} />
                    </Nav.Link>
                            <Nav.Link href='/AdminList' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <TbChefHat className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} />
                    </Nav.Link>
                            <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem" }}>
                                <HiOutlineLogout className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} onClick={handleLogout} />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </MediaQuery>
        </div>
    );
}

export default NavbarView;