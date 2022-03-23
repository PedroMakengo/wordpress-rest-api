import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-xbox.svg";

import styles from "./index.module.css";

function Header() {
  return (
    <header>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo UNBOX" />
        </div>
        <nav>
          <Link to="/">Visão Geral</Link>
          <Link to="/jogos">Jogos</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/unbox">Unbox</Link>
        </nav>
        <div className={styles.disponibilidade}>
          <Link to="/disponibilidade">Ver Disponbilidade</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
