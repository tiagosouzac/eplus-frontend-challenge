// Components
import DropdownCart from "../Cart";
import MenuButton from "./Menu/Button";
import MenuItem from "./Menu/Item";

export default function Header() {
  return (
    <header>
      <img
        src="./images/logo/agencia-eplus-n-logo.png"
        alt="Agência E-Plus, especialista em Ecommerce e Marketing Digital"
      />

      <nav>
        <ul>
          <MenuItem>Lorem Ipsum</MenuItem>
          <MenuItem>Lorem Ipsum</MenuItem>
          <MenuItem>Lorem Ipsum</MenuItem>
          <MenuItem>Lorem Ipsum</MenuItem>
          <MenuItem>Lorem Ipsum</MenuItem>
        </ul>
      </nav>

      <section>
        <MenuButton icon="search" />
        <MenuButton icon="user" />
        <MenuButton icon="cart" />
      </section>

      <DropdownCart />
    </header>
  );
}
