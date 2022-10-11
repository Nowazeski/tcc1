import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container className="container">
          <Nav className="me-auto subMenu">
            <Nav.Link href="/">Entrar</Nav.Link>
            <Nav.Link href="/cadastro">Cadastre-se</Nav.Link>
            <Nav.Link href="/esqueceu-senha">Recuperar Senha</Nav.Link>
            <Nav.Link href="/nova-senha">Nova Senha</Nav.Link>
            <Nav.Link href="/cadastro-aluno">Cadastro Aluno</Nav.Link>
            <Nav.Link href="/inicio-teste">Inicio Teste</Nav.Link>
            <Nav.Link href="/metricas">Métricas</Nav.Link>
          </Nav>
        </Container>
      </Navbar >
    </>
  );
}


export default NavBar;