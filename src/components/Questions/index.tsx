import { useState, useEffect } from "react";
import styles from "./index.module.css";
import ItemQuestion from "./ItemQuestion";

const arrayQuestions = [
  {
    id: 1,
    question: "Meus jogos anteriores do XBOX vão funcionar no XBOX Séries X ?",
    response:
      "É claro que irão funcionar simplesmente terás de testar a nova versão",
  },
  {
    id: 2,
    question: "O que está incluído no XBOX Series X?",
    response: "Está incluído quase todas as funções a versão anterior",
  },
  {
    id: 3,
    question: "Como sei se minha TV é compátivel com 4k?",
    response: "Tens de testar com o cabo HDMI",
  },
];

interface ITarrayQuestions {
  id: number;
  question: string;
  response: string;
}

function Questions() {
  const [questions, setQuestions] =
    useState<ITarrayQuestions[]>(arrayQuestions);

  return (
    <section className={styles.contentQuestions}>
      <div className="container">
        <h2>
          <span>Perguntas</span> frequentes
        </h2>
        <div className={styles.questions}>
          {questions.map(({ id, question, response }) => (
            <ItemQuestion id={id} question={question} response={response} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;
