// Style
import styles from "./Menu.module.css";

// Components
import MenuItem from "./Item";

export default function Menu({ className }) {
  console.log(className);
  return (
    <nav className={styles.mainMenu}>
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
