import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar/index.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import Card1 from "./components/Card1";


export default function Rotas() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Entrar" exact element={<Entrar />}></Route>
        <Route path="/Cadastrar" exact element={<Cadastrar />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};
