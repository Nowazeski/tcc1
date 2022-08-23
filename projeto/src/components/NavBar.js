import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/NavBar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Entrar from "../pages/Entrar";
import rotas from "../rotas";


function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container className="container">
          <DropdownButton className="col-9" id="dropdown-basic-button" title="Cursos">
            <Dropdown.Item href="#/action-1">Português</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ingles</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Matemática</Dropdown.Item>
          </DropdownButton>
          <Nav className="me-auto">
            <Nav.Link href="../pages/Entrar">Entrar</Nav.Link>
            <Nav.Link href="../pages/Cadastrar">Cadastre-se</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavBar;