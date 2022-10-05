import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './cadastro.css'

function Cadastrar() {
  return (
    <>
    <div className="Auth-form-container  w-100 form-cadastro">
      <Form className="container h-100 w-80 formCadastro ">
      <Form.Group className="mb-3 col-4 offset-4 offset-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="col-4 offset-4 offset-4 mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 col-4 offset-4 offset-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembre-me" />
      </Form.Group>
      <Button className="col-4 offset-4 offset-4" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
};

export default Cadastrar;