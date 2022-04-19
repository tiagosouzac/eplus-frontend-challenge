// Style
import styles from "./Menu.module.css";

// Components
import MenuItem from "./Item";

export default function Menu() {
  return (
    <nav className={`${styles.mainMenu}`} style={{ display: "none" }}>
      <ul>
        <MenuItem>Lorem Ipsum</MenuItem>
        <MenuItem>Lorem Ipsum</MenuItem>
        <MenuItem>Lorem Ipsum</MenuItem>
        <MenuItem>Lorem Ipsum</MenuItem>
        <MenuItem>Lorem Ipsum</MenuItem>
      </ul>
    </nav>
  );
}
