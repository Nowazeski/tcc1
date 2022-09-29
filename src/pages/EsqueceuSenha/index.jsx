import React from "react"

import './esqueceuASenha.css';

export default function RecoveryPass() {

    return (
        <>
            <div className="Auth-form-container w-100">
                <form className="Auth-form recoveryPass">
                    <div className="Auth-form-content ">
                        <h3 className="Auth-form-title">Esqueceu A Senha?</h3>
                        <div className="form-group mt-3">
                            <label>E-mail</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Entre com seu E-mail"
                            />
                        </div>
                        {/* <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div> */}
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};