import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Cadastrar from "./pages/Cadastrar/index.jsx";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import EsqueceuSenha from "./pages/EsqueceuSenha/esqueceuSenha.jsx";
import NovaSenha from "./pages/NovaSenha/novaSenha.jsx";
import CadastroAluno from "./pages/CadastroAluno/index.jsx";
import InicioTeste from "./pages/InicioTeste/inicioTeste.jsx";
import Metricas from "./pages/Metricas/metricas.jsx";


function Rotas() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastro" element={<Cadastrar />}></Route>
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />}></Route>
        <Route path="/nova-senha" element={<NovaSenha />}></Route>
        <Route path="/cadastro-aluno" element={<CadastroAluno />}></Route>
        <Route path="/inicio-teste" element={<InicioTeste />}></Route>
        <Route path="/metricas" element={<Metricas />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Rotas;