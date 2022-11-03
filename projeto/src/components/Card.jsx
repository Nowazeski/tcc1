import React from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import elefante from '../img/elefante.jpg'


import "./css/card.css";

export default function Carde() {

  return (
    <>
      <Card style={{ width: '15vw' }} className="container d-fluid mt-5">
        <Card.Img variant="top" src={elefante}/>
        <Card.Body>
          <Card.Title>Escreva o nome deste animal.</Card.Title>
          <Card.Text>
           
          </Card.Text>
            <input style={{ width: '100%' }} type="text"></input>
            <input style={{ width: '100%' }} className="mt-2" type="Submit"></input>
        </Card.Body>
      </Card>
    </>
  );

};