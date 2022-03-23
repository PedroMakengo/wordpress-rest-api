import React from "react";

import xbox from "../../assets/banner/xbox.svg";

import styles from "./index.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1>Xbox series X</h1>
        <p>Pedido Antecipado</p>
      </div>
      <div className={styles.ubox}>
        <img src={xbox} alt="" />
      </div>
    </div>
  );
}

export default Banner;
