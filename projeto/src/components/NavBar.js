import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container className="container">
          {/* <DropdownButton className="col-8" id="dropdown-basic-button" title="Cursos">
            <Dropdown.Item href="#/action-1">Português</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ingles</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Matemática</Dropdown.Item>
          </DropdownButton> */}
          <Nav className="me-auto subMenu">
            {/* <Nav.Link href="../pages/Home/">Inicio</Nav.Link> */}
            <Nav.Link href="/">Entrar</Nav.Link>
            <Nav.Link href="/cadastro">Cadastre-se</Nav.Link>
          </Nav>
        </Container>
      </Navbar >
    </>
  );
}


export default NavBar;