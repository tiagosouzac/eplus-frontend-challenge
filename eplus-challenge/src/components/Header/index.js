import { useState } from "react";

// Styles
import styles from "./Header.module.css";

// Components
import DropdownCart from "../Cart";
import Menu from "../Menu";
import HeaderButton from "./Button";
import AsideMenu from "../AsideMenu";

export default function Header() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [asideMenuVisibility, setAsideMenuVisibility] = useState(false);

  const toggleCartVisibility = () => {
    !cartVisibility && setAsideMenuVisibility(false);
    setCartVisibility(!cartVisibility);
  };

  const toggleAsideMenuVisibility = () => {
    !asideMenuVisibility && setCartVisibility(false);
    setAsideMenuVisibility(!asideMenuVisibility);
  };

  return (
    <>
      <header className={styles.mainHeader}>
        <HeaderButton icon="menu" onClick={() => toggleAsideMenuVisibility()} />

        <img
          src="./images/logo/agencia-eplus-n-logo.png"
          alt="Agência E-Plus, especialista em Ecommerce e Marketing Digital"
          className={styles.logo}
        />

        <Menu className="mainMenu" />

        <section className={styles.buttons}>
          <HeaderButton icon="search" altText="Pesquisar no site" />
          <HeaderButton icon="user" altText="Minha conta" />
          <HeaderButton
            icon="cart"
            altText="Meu carrinho"
            onClick={() => toggleCartVisibility()}
          />
        </section>

        {cartVisibility && <DropdownCart />}
      </header>

      {asideMenuVisibility && (
        <AsideMenu toggleVisibility={toggleAsideMenuVisibility} />
      )}
    </>
  );
}
