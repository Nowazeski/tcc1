import React from 'react';

import Card from 'react-bootstrap/Card';
import gato from '../../img/gato.jpg';


export default function Carde() {

  return (
    <>
      <Card style={{ width: '15vw' }} className="container d-fluid mt-5">
        <Card.Img variant="top" src={gato}/>
        <Card.Body>
          <Card.Title>Como é Gato em Inglês?</Card.Title>
          <Card.Text>
           
          </Card.Text>
            <button style={{ width: '100%' }} className="h-50 mt-2" type="text">GAT</button>
            <button style={{ width: '100%' }} className="h-50 mt-2" type="text">CAT</button>
            <button style={{ width: '100%' }} className="h-50 mt-2" type="text">CATE</button>
        </Card.Body>
      </Card>
    </>
  );

};