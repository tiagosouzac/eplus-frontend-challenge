import { useState } from "react";

// Styles
import styles from "./Header.module.css";

// Components
import DropdownCart from "../Cart";
import Menu from "../Menu";
import HeaderButton from "./Button";

export default function Header() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const toggleCartVisibility = () => setCartVisibility(!cartVisibility);

  return (
    <header className={styles.mainHeader}>
      <HeaderButton icon="menu" />

      <img
        src="./images/logo/agencia-eplus-n-logo.png"
        alt="Agência E-Plus, especialista em Ecommerce e Marketing Digital"
        className={styles.logo}
      />

      <Menu />

      <section className={styles.buttons}>
        <HeaderButton icon="search" />
        <HeaderButton icon="user" />
        <HeaderButton icon="cart" onClick={() => toggleCartVisibility()} />
      </section>

      {cartVisibility && <DropdownCart />}
    </header>
  );
}
