import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container className="container">
          <Nav className="me-auto subMenu">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/entrar">Login</Nav.Link>
            <Nav.Link href="/cadastro">Cadastre-se</Nav.Link>
            <Nav.Link href="/esqueceu-senha">Recuperar Senha</Nav.Link>
            <Nav.Link href="/nova-senha">Nova Senha</Nav.Link>
            <Nav.Link href="/cadastro-aluno">Cadastro Aluno</Nav.Link>
            <Nav.Link href="/inicio-teste">Inicio Teste</Nav.Link>            
            <Nav.Link href="/exemplo">ExemploTeste</Nav.Link>
            <Nav.Link href="/exemplo2">ExemploTeste2</Nav.Link>
            <Nav.Link href="/ExemploMate">ExemploMate</Nav.Link>
            <Nav.Link href="/ExemploMate2">ExemploMate2</Nav.Link>
            <Nav.Link href="/ExemploIngle">ExemploIng</Nav.Link>
            <Nav.Link href="/ExemploIngle2">ExemploIngles2</Nav.Link>
            <Nav.Link href="/metricas">Métricas</Nav.Link>
          </Nav>
        </Container>
      </Navbar >
    </>
  );
}

