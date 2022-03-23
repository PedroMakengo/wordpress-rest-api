import farcry from "../../assets/logo/logo-farcry6.svg";
import forza from "../../assets/logo/logo-forza.svg";
import fifa from "../../assets/logo/logo-fifa.svg";
import minecraft from "../../assets/logo/logo-minecraft.svg";

import styles from "./index.module.css";

function Games() {
  return (
    <section className={styles.games}>
      <div className={styles.cardGame}>
        <img src={farcry} alt="" />
      </div>
      <div className={styles.cardGame}>
        <img src={forza} alt="" />
      </div>
      <div className={styles.cardGame}>
        <img src={fifa} alt="" />
      </div>
      <div className={styles.cardGame}>
        <img src={minecraft} alt="" />
      </div>
    </section>
  );
}

export default Games;
