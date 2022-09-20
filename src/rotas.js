import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar/index.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import Login1 from "./pages/Login/index.jsx";

function Rotas() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" exact element={<Login1/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
        //<Route path="/pages/Entrar/index.jsx" exact element={<Entrar />}></Route>
        //<Route path="/pages/Cadastrar/index.jsx" exact element={<Cadastrar />}></Route>
  );
};

export default Rotas;