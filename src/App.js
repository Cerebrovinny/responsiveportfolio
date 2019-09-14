import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#"><i class="fab fa-react"></i>&nbsp;Full-Stack Developer Vinicius C.</a>
       <div className="navbar-nav">
       <a className="nav-item nav-link" href="#">Home</a>
       <a className="nav-item nav-link" href="#">Channel</a>
       <a className="nav-item nav-link" href="#">Login</a>
       </div> 
       <button className="navbar-toggler" type="button" data-togler="collapse" data-target="#navbarMainToggler"
      aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span> // botao responsivo
      </button>
     </nav>
    </div>
  );
}

export default App;
