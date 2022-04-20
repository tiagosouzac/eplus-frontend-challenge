import { useEffect, useState } from "react";

// Style
import styles from "./Cart.module.css";

// Components
import CartItem from "./Item";

export default function DropdownCart() {
  const [productsInCart, setProductsInCart] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProductsInCart(data))
      .catch((error) => console.log(error));
  }, []);

  const totalPrice = () => {
    const price = productsInCart.cart.item.reduce(
      (total, item) => item.available && total + item.bestPrice,
      0
    );

    return `R$${price / 100}`;
  };

  return (
    <section className={`${styles.cart}`}>
      <ul>
        {productsInCart &&
          productsInCart.cart.item.map((productInfo) => (
            <CartItem productInfo={productInfo} key={productInfo.productId} />
          ))}
      </ul>

      <p>
        Total do pedido: <strong>{productsInCart && totalPrice()}</strong>
      </p>
      <button>FINALIZAR COMPRA</button>
    </section>
  );
}
