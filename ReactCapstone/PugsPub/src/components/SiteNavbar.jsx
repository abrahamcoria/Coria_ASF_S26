import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {useCart}from '../data/useCart.js'
import defaultImage from '../assets/pugspub.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faCalendar, faHouse, faShoppingCart} from "@fortawesome/free-solid-svg-icons";


function SiteNavbar() {
    const { getTotalItems } = useCart();

    const itemCount = getTotalItems();

    return (
        <Navbar
            expand="xxl"
            bg="dark"
            data-bs-theme="dark"
            sticky="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                    alt={"Pugs Pub"}
                    src={defaultImage}
                    width={30}
                    height={30}
                    className={"d-inline-block align-top"}/>
                    Pugs Pub
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" >
                            <FontAwesomeIcon icon={faHouse} className="me-2" />
                            Home</Nav.Link>
                        <Nav.Link as={Link} to="/menu">
                            <FontAwesomeIcon icon={faBook} className="me-2" />
                            Menu</Nav.Link>
                        <Nav.Link as={Link} to="/reservation">
                            <FontAwesomeIcon icon={faCalendar} className="me-2" />
                            Reservation</Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                            Cart
                            {itemCount > 0 && (
                                <span className="position-absolute top-60 start-90  badge rounded-pill bg-warning text-light">
                                    {itemCount}
                                </span>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNavbar;