import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar/index.jsx";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import Card1 from "./components/Card1";


function Rotas() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Cadastrar />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Rotas;