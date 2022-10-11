import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './cadastro.css'


function CadastroAluno() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div class="col-6 text-center">
            <h2 className="titulo">Cadastro do Aluno</h2>
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
                type="input"
                size="lg"
              />
              <label htmlFor="floatingInputCustom">Número Chamada:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>

        <div className="row">
          <div className="col-3"/>
          
          <div className="col-6">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingSerieCustom"
                type="input"
              />
              <label htmlFor="floatingSerieCustom">Série:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>
        
        <div className="row">
          <div className="col-3"/>
          
          <div className="col-6">
            <Form.Floating>
              <Form.Control
                id="floatingTurmaCustom"
                type="input"
              />
              <label htmlFor="floatingTurmaCustom">Turma:</label>
            </Form.Floating>
          </div>

          <div className="col-3"/>
        </div>

        <div className="row">
          <div className="col-3"/>
          
          <div className="col-6">
            <Form.Floating>
              <Form.Control
                id="floatingDataCustom"
                type="date"
                placeholder="DD/MM/YYYY"
              />
              <label htmlFor="floatingDataCustom">Data de Cadastro:</label>
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

export default CadastroAluno;
