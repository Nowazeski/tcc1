import React from 'react';

import Card from 'react-bootstrap/Card';
import doge from '../../img/dogecoin.jpg';


export default function Carde() {

  return (
    <>
      <Card style={{ width: '15vw' }} className="container d-fluid mt-5">
        <Card.Img variant="top" src={doge}/>
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