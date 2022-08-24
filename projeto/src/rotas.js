import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar/index.jsx";
import NavBar from "./components/NavBar.js";


export default function Rotas() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/pages/Entrar" exact element={<Entrar />}></Route>
        <Route path="/pages/Cadastrar" exact element={<Cadastrar />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
