import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./entrar.css";
import { ToastContainer, toast } from 'react-toastify';

export default function Entrar() {
  return (
    <>

<div className="container">
        <ToastContainer />
        <form id="form-login">
          <div className="row">
            <div className="col-3" />
            <div className="col-6 text-center">
              <h2 className="titulo">Login</h2>
            </div>
            <div className="col-3" />
          </div>

          <div className="row">
            <div className="col-3"/>
            
            <div className="col-6">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="email"
                  type="email"
                  size="lg"
                  />
                <label htmlFor="email">Email:</label>
              </Form.Floating>
            </div>

            <div className="col-3"/>
          </div>

          <div className="row">
            <div className="col-3"/>
            
            <div className="col-6">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="senha"
                  type="password"
                />
                <label htmlFor="senha">Senha:</label>
              </Form.Floating>
            </div>

            <div className="col-3"/>
          </div>        
  
          <div className="row">
            <div className="col-3"/>
            <div className="col-3"><Button className="w-100" variant="primary">Enviar</Button></div>
            <div className="col-3"><Button className="w-100" variant="danger"  type="reset">Limpar</Button></div>
            <div className="col-3"/>
          </div>
        </form>
      </div>
    </>
  );
}