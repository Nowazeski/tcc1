import React from 'react';
import Button from 'react-bootstrap/Button';

import "./css/card.css";

export default function Card1() {

  return (
    <>
      <div className='row'>
        <div className='col-sm'>
          
        </div>

        <div className='col-sm'>
          
        </div>

        <div className='col-sm'>
          <div className='row'>
            <div className='col-6'>
              <Button className="botao w-100" variant="primary">Cadastrar</Button>
            </div>
            <div className='col-6'>
              <Button className="botao w-100" variant="primary">Entrar</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='row home-imagem'>
        <div className='col-sm'>

        </div>
      </div>
      <div className="row">
        <div className="col-sm centered">
          <Button className="mx-auto w-50 botao" variant="primary">Português</Button>
        </div>
        <div className="col-sm centered">
          <Button className="mx-auto w-50 botao" variant="primary">Inglês</Button>
        </div>
        <div className="col-sm centered">
          <Button className="mx-auto w-50 botao" variant="primary">Matemática</Button>
        </div>
      </div>
    </>
  );

};