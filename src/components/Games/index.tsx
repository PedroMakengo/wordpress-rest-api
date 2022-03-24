import ItemGamer from "../ItemGamer";
import styles from "./index.module.css";

import farcry6 from "../../assets/logo/logo-farcry6.svg";
import forza from "../../assets/logo/logo-forza.svg";
import fifa from "../../assets/logo/logo-fifa.svg";
import minecraft from "../../assets/logo/logo-minecraft.svg";

const arrayImagem = [
  { id: 1, src: farcry6, alt: "Farcry6" },
  { id: 2, src: forza, alt: "Farcry6" },
  { id: 3, src: fifa, alt: "Farcry6" },
  { id: 4, src: minecraft, alt: "Farcry6" },
];

function Games() {
  return (
    <section className={styles.games}>
      {arrayImagem.map(({ id, src, alt }) => (
        <ItemGamer id={id} src={src} alt={alt} className={styles.cardGame} />
      ))}
    </section>
  );
}

export default Games;
