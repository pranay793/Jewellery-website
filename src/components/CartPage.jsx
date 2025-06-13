import React, { useState } from 'react';
import './CartPage.css';
import './custom.css';

const initialCartItems = [
  {
    id: 1,
    name: 'JWDA Pendant Lamp',
    price: 29.99,
    quantity: 2,
    image: '/images/product1.png'
  },
  {
    id: 2,
    name: 'Minimalist Ring',
    price: 15.50,
    quantity: 1,
    image: '/images/product2.png'
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
    <section className='inner-banner'>
        <div className='container'>
          <h1>Shop</h1>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><i className="fa-solid fa-angle-right"></i></li>
            <li>Cart</li>
          </ul>
        </div>
      </section>

    <section className="cart-page container">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-wrapper">
      <div className="cart-items">
  {cartItems.length === 0 ? (
    <p className="empty-cart">Your cart is empty.</p>
  ) : (
    <>
      <div className="cart-heading">
        <span className="head-image">Product</span>
        <span className="head-name">Name</span>
        <span className="head-price">Price</span>
        <span className="head-quantity">Quantity</span>
        <span className="head-subtotal">Subtotal</span>
        <span className="head-remove">Remove</span>
      </div>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-image-box">
            <img src={item.image} alt={item.name} className="cart-image" />
          </div>
          <div className="cart-name">{item.name}</div>
          <div className="cart-price">£{item.price.toFixed(2)}</div>
          <div className="quantity-control">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <input type="text" readOnly value={item.quantity} />
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
          <div className="cart-subtotal">£{(item.price * item.quantity).toFixed(2)}</div>
          <button className="remove-btn" onClick={() => removeItem(item.id)}>×</button>
        </div>
      ))}
    </>
  )}
</div>

<div className="cart-summary">
  <h3>Summary</h3>

  <div className="coupon-box">
    <input type="text" id="coupon" placeholder="Enter coupon" />
    <button className="apply-btn">Apply</button>
  </div>

  <p className='price-text'>Total: <strong>£{totalPrice.toFixed(2)}</strong></p>
  <button className="checkout-btn">Proceed to Checkout</button>
</div>

      </div>
    </section>
    </>
  );
};

export default CartPage;
