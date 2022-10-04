import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import "./css/index.css";
import Home from '../pages/Home/Home';
import Entrar from "../pages/Entrar";
import "./css/NavBar.css";
import rotas from "../rotas";


export default function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbar col-12">
        <Container className="col-md-6">
          {/* <DropdownButton className="col-8" id="dropdown-basic-button" title="Cursos">
            <Dropdown.Item href="#/action-1">Português</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ingles</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Matemática</Dropdown.Item>
          </DropdownButton> */}
          <Nav className="me-auto subMenu justify-content-between col-3">
            {/* <Nav.Link href="../pages/Home/">Inicio</Nav.Link> */}
          
            <Nav.Link className="col-sm-4" href="/">Inicio</Nav.Link>
            <Nav.Link className="btnEntrar col-sm-4" href="/Entrar">Entrar</Nav.Link>
            <Nav.Link className="col-sm-4" href="/Cadastrar">Cadastrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar >
    </>
  );
}
