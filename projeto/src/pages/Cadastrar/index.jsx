import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './cadastro.css'


function Cadastrar() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div class="col-6 text-center">
            <bold1 className="titulo">Cadastro do Professor</bold1>
          </div>
          <div className="col-3" />
        </div>

        <div className="row">
          <div className="col-3"/>

          <div className="col-6">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="name"
                size="lg" 
              />
              <label htmlFor="floatingInputCustom">Nome:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>

        <div className="row">
          <div className="col-3"/>
          
          <div className="col-6">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                size="lg"
              />
              <label htmlFor="floatingInputCustom">Email:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>

        <div className="row">
          <div className="col-3"/>
          
          <div className="col-6">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
              />
              <label htmlFor="floatingPasswordCustom">Senha:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>
        
        <div className="row">
          <div className="col-3"/>
          
          <div className="col-6">
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Confirme a Senha:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>

        <div className="row">
          <div className="col-3"/>
          
          <div className="col-6">
            <Form.Floating>
              <Form.Control
                id="ffloatingInputCustom"
                type="date"
                placeholder="DD/MM/YYYY"
              />
              <label htmlFor="floatingInputCustom">Data de Cadastro:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>
      
        <div className="row">
          <div className="col-3"/>
          <div className="col-3"><Button className="w-100" variant="primary">Enviar</Button></div>
          <div className="col-3"><Button className="w-100" variant="danger">Limpar</Button></div>
          <div className="col-3"/>
        </div>
      </div>
    </>



  );
};

export default Cadastrar;
