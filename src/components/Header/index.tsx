import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo"></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/jogos">Jogos</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/unbox">Unbox</Link>
          <Link to="/disponibilidade">Ver Disponbilidade</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
