import react from "react";
import RecoveryPass from "../EsqueceuSenha";
import axios from 'axios';

import "../css/login.css";
import Rotas from "../../rotas";

export default function Login1(){
    return (
        <>
            

    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn bg-dark" href="" onClick={Logout}>
            <a href="./EspacoProfessor"  onClick={Evento}>Login?</a>
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="./EsqueceuAsenha"  onClick={Evento}>password?</a>
          </p>
        </div>
      </form>
    </div>
   
        </>



    );

    function Evento(){
      <Rotas></Rotas>
    }

    function Logout(){

      // authService.CleanLoggerUser();
      window.location.reload();

    }
};