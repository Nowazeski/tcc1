import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './cadastro.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Cadastrar() {
  return (
    <>

      <bold1>Cadastro do Professor</bold1>
    
      <Col xs={3}>
      <><Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="name"
          placeholder="name"
          size="lg" 
        />
        <label htmlFor="floatingInputCustom">Nome</label>
      </Form.Floating></></Col>

      <Col xs={3}>
      <><Form.Floating>
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email</label>
      </Form.Floating></></Col>

      <Col xs={3}>
      <div><Form.Floating className="mb-3">
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingPasswordCustom">Senha</label>
      </Form.Floating></div></Col>

      <Col xs={3}>
      <div><Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Confirme a Senha</label>
      </Form.Floating></div></Col>

      <Col xs={3}>
     <div><Form.Floating>
        <Form.Control
          id="ffloatingInputCustom"
          type="date"
          placeholder="DD/MM/YYYY"
        />
        <label htmlFor="floatingInputCustom">Data de Cadastro</label>
      </Form.Floating></div></Col>

      <div> <Button variant="primary">Enviar</Button>{' '}</div>
      
    </>



  );
};

export default Cadastrar;
