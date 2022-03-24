import { Link } from "react-router-dom";

import styles from "../../components/Header/index.module.css";

function NotFound() {
  return (
    <section className="notFound">
      <div className="container">
        <h1>Página Não Encontrada</h1>
        <div className={styles.disponibilidade}>
          <Link to="/">Voltar para Home</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
