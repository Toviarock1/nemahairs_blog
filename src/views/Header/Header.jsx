import React from 'react'
//react bootstrap components
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
//css
import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect className={classes.Nav} expand="lg" bg="dark" variant="dark">
                <Container fluid className={classes.Container}>
                    <Navbar.Brand href="#home">Nemahairs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Advertise</Nav.Link>
                            <NavDropdown title="All Post" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                           <HeaderForm />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
