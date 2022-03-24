import { useState } from "react";
import styles from "./index.module.css";

import iconeUp from "../../assets/icones/icone-up.svg";
import iconeDown from "../../assets/icones/icone-down.svg";

interface ItemQuestion {
  id: number;
  question: string;
  response: string;
}

function ItemQuestion({ id, question, response }: ItemQuestion) {
  const [itemQuestion, setItemQuestion] = useState(true);

  function handleChange() {
    setItemQuestion((itemQuestion) => !itemQuestion);
  }
  return (
    <div className={styles.itemQuestion} key={id} onClick={handleChange}>
      <div className={styles.questionImg}>
        <h3>{question}</h3>
        {itemQuestion ? (
          <img src={iconeDown} alt="Pergunta Fechado" />
        ) : (
          <img src={iconeUp} alt="Pergunta aberta" />
        )}
      </div>
      {itemQuestion && <p>{response}</p>}
    </div>
  );
}

export default ItemQuestion;
