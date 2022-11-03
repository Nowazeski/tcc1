import React from 'react';

import Card from 'react-bootstrap/Card';
import doge from '../../img/passaros.jpg';


export default function Carde() {

  return (
    <>
      <Card style={{ width: '15vw' }} className="container d-fluid mt-5">
        <Card.Img variant="top" src={doge}/>
        <Card.Body>
          <Card.Title>Como é Passaro em inglês?</Card.Title>
          <Card.Text>
           
          </Card.Text>
            <button style={{ width: '100%' }} className="h-50 mt-2" type="text">BIRD</button>
            <button style={{ width: '100%' }} className="h-50 mt-2" type="text">BIRDE</button>
            <button style={{ width: '100%' }} className="h-50 mt-2" type="text">BRINDE</button>
        </Card.Body>
      </Card>
    </>
  );

};