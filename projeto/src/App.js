import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './rotas';
import React from 'react';

export  default function App() {
  return (
    <>
      <div className="app">
          <div className="app-header">
          <Rotas></Rotas>
          </div>
      </div>
      
    </>
  );
}