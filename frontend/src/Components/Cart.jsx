import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, setCartItems } = useCart();

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const increaseQty = (id) => {
    const updatedCart = cartItems.map(item =>

      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 && <p>Cart is Empty</p>}

      {cartItems.map(item => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span>{item.name}</span>

          <div style={{ display: "inline-block", marginLeft: "10px" }}>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
