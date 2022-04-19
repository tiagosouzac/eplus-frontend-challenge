// Style
import styles from "./Cart.module.css";

// Components
import CartItem from "./Item";

export default function DropdownCart() {
  return (
    <section className={`${styles.cart}`}>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>

      <p>
        Total do pedido: <strong>R$3000,00</strong>
      </p>
      <button>FINALIZAR COMPRA</button>
    </section>
  );
}
