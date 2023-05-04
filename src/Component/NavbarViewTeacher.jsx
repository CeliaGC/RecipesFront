import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import MediaQuery from "react-responsive";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillHome } from 'react-icons/ai';
import { MdFoodBank } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import {TbChefHat} from 'react-icons/tb';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {AiOutlinePlus} from 'react-icons/ai';


function NavbarViewTeacher() {
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
                {/* barra lateral en pantallas grandes */}
                <div className="sidebar" style={{ position: "relative", width: "9vw", overflow: "hidden", backgroundColor: "#8B8961", borderRadius: '15px', width: '170px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', maxHeight: '80vh', overflowY: 'auto' }}>
                    <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", fontSize: '20px'}} /> Home
                    </Nav.Link>
                    <Nav.Link href='/TeacherMenu' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdFoodBank className="my-icon mr-2" style={{ backgroundColor: "none", color: "white",  marginBottom: "10px", fontSize: '22px' }} /> Recetas por categorías
                    </Nav.Link>
                    <Nav.Link href='/MyRecipe' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <TbChefHat className="my-icon mr-2" style={{ backgroundColor: "none", color: "white",  marginBottom: "10px", fontSize: '22px' }} /> Mis recetas
                    </Nav.Link>
                    <Nav.Link href='/AddRecipeTeacher' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdOutlineRestaurantMenu className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",fontSize: '20px' }} /><AiOutlinePlus className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", fontSize: '10px'}} /> Añadir recetas
                    </Nav.Link>
                    <Nav.Link href='/TeacherList' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", fontSize: '20px' }} /> Haz un Pedidos
                    </Nav.Link>
                    <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <HiOutlineLogout className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", fontSize: '25px' }} onClick={handleLogout} /> Cerrar sesión
                    </Nav.Link>
                </div>
            </MediaQuery>

          <MediaQuery maxWidth={767}>
                {/* sub-navbar en pantallas pequeñas */}
                <Navbar expand="lg" variant="light" style={{ marginTop: '20px', marginBottom: '-20px', backgroundColor: "#8B8961", borderRadius: '15px' }} >
                    <Container className="d-flex flex-column flex-md-row">
                        <Nav className="w-100 justify-content-around flex-row">

                            <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem" }}>
                                <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",  fontSize: '20px' }} />
                            </Nav.Link>
                            <Nav.Link href='/TeacherMenu' style={{ color: "white", marginBottom: "1rem" }}>
                                <MdFoodBank className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",  fontSize: '22px' }} />
                            </Nav.Link>
                            <Nav.Link href='/MyRecipe' style={{ color: "white", marginBottom: "1rem" }}>
                                <TbChefHat className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",  fontSize: '22px' }} />
                            </Nav.Link>
                            <Nav.Link href='/AddRecipeTeacher' style={{ color: "white", marginBottom: "1rem", marginLeft: '20px' }}>
                        <MdOutlineRestaurantMenu className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",fontSize: '20px' }} /><AiOutlinePlus className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", fontSize: '10px'}} />
                    </Nav.Link>
                            <Nav.Link href='/TeacherList' style={{ color: "white", marginBottom: "1rem" }}>
                                <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",  fontSize: '20px'}} />
                            </Nav.Link>
                            <Nav.Link href='/' style={{ color: "white", marginBottom: "1rem" }}>
                                <HiOutlineLogout className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px",  fontSize: '25px'}} onClick={handleLogout} />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </MediaQuery>
        </div>
    );
}

export default NavbarViewTeacher;