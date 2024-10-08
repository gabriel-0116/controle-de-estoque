import { Link, Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

export default function RootLayout() {
  return (
    <>
      <header className={styles.header}>
        <p>Controle de Estoque</p>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link to="/">
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link to="/items">
                <a>Itens</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <p>© Feito por Gabriel Santos 2024</p>
      </footer>
    </>
  );
}