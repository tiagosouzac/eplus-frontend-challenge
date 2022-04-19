// Styles
import styles from "./HeaderButton.module.css";

export default function HeaderButton({ icon }) {
  return (
    <button id={icon} className={styles.headerButton}>
      <img src={`./icons/${icon}.svg`} alt="Pesquisar no site" />
    </button>
  );
}
