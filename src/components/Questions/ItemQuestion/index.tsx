import styles from "./index.module.css";

interface ItemQuestion {
  id: number;
  question: string;
  response: string;
}

function ItemQuestion({ id, question, response }: ItemQuestion) {
  return (
    <div className={styles.itemQuestion} key={id}>
      <div>
        <h3>{question}</h3>
        <img src="" alt="" />
      </div>
      <h4>{response}</h4>
    </div>
  );
}

export default ItemQuestion;
