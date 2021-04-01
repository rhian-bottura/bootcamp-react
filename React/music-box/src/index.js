import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './componentes/NavBar'
import HomePage from './componentes/HomePage'
import './assets/css/style.css';
import './assets/css/reset.css';
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);


