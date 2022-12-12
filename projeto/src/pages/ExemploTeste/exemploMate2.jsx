import React from 'react';

import Card from 'react-bootstrap/Card';


export default function exemploMate2() {

  return (
    <>
      <Card style={{ width: '15vw' }} className="container d-fluid mt-5">
        <Card.Body>
          <Card.Title>Quanto é 20-5?</Card.Title>
          <Card.Text>
           
          </Card.Text>
            <input style={{ width: '100%' }} type="text"></input>
            <input style={{ width: '100%' }} className="mt-2" type="Submit"></input>
        </Card.Body>
      </Card>
    </>
  );

};