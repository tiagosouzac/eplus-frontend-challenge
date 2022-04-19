// Styles
import styles from "./MenuItem.module.css";

export default function MenuItem({ children }) {
  return (
    <li className={styles.menuItem}>
      <a href="/">{children}</a>
    </li>
  );
}
