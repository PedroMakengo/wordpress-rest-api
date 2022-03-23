import control from "../../assets/banner/controle-xbox.svg";

import styles from "./index.module.css";

function ControlXbox() {
  return (
    <div className={`${styles.controlContent} container`}>
      <div className={styles.controlInfo}>
        <h2>
          <span>Desempenho</span> aperfeiçoado
        </h2>
        <p>
          O controle sem fio Xbox traz um design elegante, conforto refinado e
          compartilhamento instantâneo para um favorito comum.
        </p>
      </div>
      <div className={styles.controlSection}>
        <img src={control} alt="" />
      </div>
    </div>
  );
}

export default ControlXbox;
