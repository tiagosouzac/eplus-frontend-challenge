import CartItem from "./Item";

export default function DropdownCart() {
  return (
    <section>
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
