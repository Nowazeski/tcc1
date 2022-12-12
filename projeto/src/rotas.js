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
import Exemplo from "./pages/ExemploTeste/exemplo"
import Exemplo2 from "./pages/ExemploTeste/exemplo2"
import ExemploMate from "./pages/ExemploTeste/exemploMate"
import ExemploMate2 from "./pages/ExemploTeste/exemploMate2"
import ExemploIngle from "./pages/ExemploTeste/exemploIngle"
import ExemploIngle2 from "./pages/ExemploTeste/exemploIngle2"


export default function Rotas() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/cadastro" exact element={<Cadastrar />}></Route>
        <Route path="/esqueceu-senha" exact element={<EsqueceuSenha />}></Route>
        <Route path="/nova-senha" exact element={<NovaSenha />}></Route>
        <Route path="/cadastro-aluno" exact element={<CadastroAluno />}></Route>
        <Route path="/inicio-teste" exact element={<InicioTeste />}></Route>
        <Route path="/metricas" exact element={<Metricas />}></Route>
        <Route path="/exemplo" exact element={<Exemplo />}></Route>
        <Route path="/exemplo2" exact element={<Exemplo2 />}></Route>
        <Route path="/ExemploMate" exact element={<ExemploMate />}></Route>
        <Route path="/ExemploMate2" exact element={<ExemploMate2 />}></Route>
        <Route path="/ExemploIngle" exact element={<ExemploIngle />}></Route>
        <Route path="/ExemploIngle2" exact element={<ExemploIngle2 />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};
