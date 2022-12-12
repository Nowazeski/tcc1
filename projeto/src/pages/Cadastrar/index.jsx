import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './cadastro.css'
import api from "../../services/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

export default function Cadastrar() {

  var nome, email, senha, repeteSenha  = '';

  function cadastraProfessor() {
    if (validarCadastro()) {
      api.post("/professores", {
          'nome': nome,
          'email': email,
          'password': senha
      })
      .then((response) => {
        toast.success('cadastro realizado com sucesso', {
          position: toast.POSITION.TOP_RIGHT
        });
        limparCampos();
        $("#form-cadastro-professor").trigger("reset");
      })
      .catch((err) => {
        toast.error('erro ao tentar salvar o cadastro: ' + err.response.data.error, {
          position: toast.POSITION.TOP_RIGHT
        });
      });
    }
  }

  function validarCadastro() {
    var cadastroValido = true;

    if (!nome || nome.trim() === "") {
      cadastroValido = false;
      toast.error('campo nome é obrigatório', {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (!email || email.trim() === "") {
      cadastroValido = false;
      toast.error('campo email é obrigatório', {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (!senha || senha.trim() === "") {
      cadastroValido = false;
      toast.error('campo senha é obrigatório', {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (!repeteSenha || repeteSenha.trim() === "") {
      cadastroValido = false;
      toast.error('campo confirmar senha é obrigatório', {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if (senha !== repeteSenha) {
      cadastroValido = false;
      toast.error('campo senha e confirmar senha, não são iguais', {
        position: toast.POSITION.TOP_RIGHT
      });
    }


    return cadastroValido;
  }

  function setNome(event) {
    nome = event.target.value;
  }

  function setEmail(event) {
    email = event.target.value;
  }

  function setSenha(event) {
    senha = event.target.value;
  }

  function setConfirmarSenha(event) {
    repeteSenha = event.target.value;
  }

  function limparCampos() {
    nome = ""
    email = ""
    senha = ""
    repeteSenha = ""
  }

  return (
    <>
      <div className="container">
        <ToastContainer />
        <form id="form-cadastro-professor">
          <div className="row">
            <div className="col-3" />
            <div className="col-6 text-center">
              <h2 className="titulo">Cadastro do Professor</h2>
            </div>
            <div className="col-3" />
          </div>

          <div className="row">
            <div className="col-3"/>

            <div className="col-6">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="nome"
                  type="name"
                  size="lg"
                  value={nome}
                  onChange={e => setNome(e)} 
                />
                <label htmlFor="nome">Nome:</label>
              </Form.Floating>
            </div>

            <div className="col-3"/>
          </div>

          <div className="row">
            <div className="col-3"/>
            
            <div className="col-6">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="email"
                  type="email"
                  size="lg"
                  value={email}
                  onChange={e => setEmail(e)}
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
                  value={senha}
                  onChange={e => setSenha(e)}
                />
                <label htmlFor="senha">Senha:</label>
              </Form.Floating>
            </div>

            <div className="col-3"/>
          </div>
          
          <div className="row">
            <div className="col-3"/>
            
            <div className="col-6">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="confirma-senha"
                  type="password"
                  value={senha}
                  onChange={e => setConfirmarSenha(e)}
                />
                <label htmlFor="confirma-senha">Senha:</label>
              </Form.Floating>
            </div>

            <div className="col-3"/>
          </div>
        
          <div className="row">
            <div className="col-3"/>
            <div className="col-3"><Button className="w-100" variant="primary" onClick={cadastraProfessor}>Enviar</Button></div>
            <div className="col-3"><Button className="w-100" variant="danger"  type="reset" onClick={limparCampos}>Limpar</Button></div>
            <div className="col-3"/>
          </div>
        </form>
      </div>
    </>
  );
}
