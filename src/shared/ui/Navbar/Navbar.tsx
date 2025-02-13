import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
  console.log("Navbar рендерится");
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.nav_link}>
          Главная 
        </Link>
        <Link to="/news" className={styles.nav_link}>
          Новости
        </Link>
        <Link to="/login" className={styles.nav_link}> 
          Вход
        </Link>
        <Link to="/profile" className={styles.nav_link}>
          Профиль 
        </Link>
      </nav> 
    </header>
  );
};
