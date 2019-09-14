import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">

        <a className="navbar-brand" href="#"><i className="fab fa-react"></i>&nbsp;Full-Stack Developer Vinicius C.</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> // botao responsivo
        </button>

        <section className="collapse" id="navbarMainToggler">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Channel</a>
            <a className="nav-item nav-link" href="#">Login</a>
          </div>
        </section>



      </nav>
    </div>
  );
}

export default App;
