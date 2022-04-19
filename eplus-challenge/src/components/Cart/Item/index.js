// Styles
import styles from "./CartItem.module.css";

export default function CartItem() {
  return (
    <li className={styles.cartItem}>
      <img
        src="./images/products/impressora-canon-160-160.jpg"
        alt="Impressora Canon"
      />

      <p id="item-name">
        Impressora Canon canon canon canon canon canon sadsa dsa dad
      </p>
      <p id="quantity">Qtd: 1</p>
      <p id="price">R$1000,00</p>
    </li>
  );
}
