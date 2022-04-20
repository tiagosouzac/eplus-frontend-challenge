// Styles
import styles from "./HeaderButton.module.css";

export default function HeaderButton({ icon, altText, ...props }) {
  return (
    <button id={icon} className={styles.headerButton} {...props}>
      <img src={`./icons/${icon}.svg`} alt={altText} />
    </button>
  );
}
