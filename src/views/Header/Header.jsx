import React from "react";
//react bootstrap components
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import HeaderForm from "../../components/HeaderForm/HeaderForm";
//css
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        className={classes.Nav}
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container fluid className={classes.Container}>
          <Navbar.Brand href="/" className={classes.Logo}>
            Nemahairs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/" className={classes.Link}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" className={classes.Link}>
                About
              </Nav.Link>
              <Nav.Link href="/advertise" className={classes.Link}>
                Advertise
              </Nav.Link>
              <Nav.Link href="/allpost" className={classes.Link}>
                All Post
              </Nav.Link>
              <Nav.Link href="/contact" className={classes.Link}>
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <HeaderForm
                searchText={props.searchText}
                setSearchText={props.setSearchText}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
