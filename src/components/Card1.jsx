import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "./css/card.css";

export default function Card1() {

  return (
    <>
      <div className="container-card row justify-content-around w-100 h-50">

        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="row align-items-center">
            <Card.Title>Português</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="mx-auto w-50 botao" variant="primary">Saiba Mais</Button>
          </Card.Body>
        </Card>
        <Card className="card-img" style={{ width: '18rem' }}>
          <Card.Img variant="top" />
          <Card.Body className="row align-items-center">
            <Card.Title>Inglês</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="mx-auto w-50 botao" variant="primary">Saiba Mais</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="row align-items-center">
            <Card.Title>Matematica</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="mx-auto w-50 botao" variant="primary">Saiba Mais</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );

};