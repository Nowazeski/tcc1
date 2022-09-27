import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Login1 from "./pages/Login";
import Cadastrar from "./pages/Cadastrar/index.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import Card1 from "./components/Card1";
import RecoveryPass from "./pages/EsqueceuSenha/index.jsx";


export default function Rotas() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Entrar" exact element={<Login1 />}></Route>
        <Route path="/Cadastrar" exact element={<Cadastrar />}></Route>
        <Route path="/EsqueceuAsenha" exact element={<RecoveryPass />}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};
