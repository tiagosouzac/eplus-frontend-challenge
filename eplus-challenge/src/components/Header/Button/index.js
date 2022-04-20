// Styles
import styles from "./HeaderButton.module.css";

export default function HeaderButton({ icon, ...props }) {
  return (
    <button id={icon} className={styles.headerButton} {...props}>
      <img src={`./icons/${icon}.svg`} alt="Pesquisar no site" />
    </button>
  );
}
