// Styles
import styles from "./CartItem.module.css";

export default function CartItem({ productInfo }) {
  return (
    <li className={styles.cartItem}>
      <img src={productInfo.image} alt="Impressora Canon" />

      <p id="item-name">{productInfo.name}</p>

      {productInfo.available ? (
        <>
          <p id="quantity">Qtd: {productInfo.quantity}</p>
          <p id="price">{productInfo.bestPriceFormated}</p>
        </>
      ) : (
        <p id="unavailable">Indisponível</p>
      )}
    </li>
  );
}
