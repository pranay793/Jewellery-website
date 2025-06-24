import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          {/* Cart Table */}
          <div className="col-md-8">
            <table className="table cart-table">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td style={{ width: '120px' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <strong>{item.name}</strong>
                      <p className="mb-0">{item.productdescrib}</p>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="mx-2">{item.quantity || 1}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="col-md-4">
          <div className="card cart-summary-card">
            <h4>Cart Summary</h4>
            <p>Total Items: {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}</p>
            <p>Total Price: <strong>${getTotalPrice()}</strong></p>
            <button
              className="btn process-btn btn-success w-100 my-2"
              onClick={() => navigate('/checkout', { state: { cartData: cartItems } })}
            >
              Proceed to Checkout
            </button>
            <button className="btn shopping-btn btn-outline-primary w-100" onClick={() => navigate('/shop')}>
              Continue Shopping
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
