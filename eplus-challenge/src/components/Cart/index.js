// Style
import styles from "./Cart.module.css";

// Components
import CartItem from "./Item";

export default function DropdownCart() {
  return (
    <section className={`${styles.cart}`} style={{ display: "none" }}>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>

      <p>Total do pedido: R$3000,00</p>
      <button>FINALIZAR COMPRA</button>
    </section>
  );
}
