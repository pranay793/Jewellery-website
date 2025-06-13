import React, { useState } from 'react';
import './CheckoutPage.css';
import './custom.css';

const sampleOrderItems = [
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

const CheckoutPage = () => {
  const [form, setForm] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    state: '',
    zip: '',
    payment: 'cod'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed with ${form.payment === 'cod' ? 'Cash on Delivery' : 'Online Payment'}`);
  };

  const subtotal = sampleOrderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <section className='inner-banner'>
        <div className='container'>
          <h1>Shop</h1>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><i className="fa-solid fa-angle-right"></i></li>
            <li>Checkout</li>
          </ul>
        </div>
      </section>

      <section className="checkout-page">
        <div className="container">
          <h2>Checkout</h2>
          <div className="checkout-wrapper">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h3>Billing Information</h3>

              <div className="form-group full-width">
                <label>Country *</label>
                <input type="text" name="country" required onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Address *</label>
                <input type="text" name="address" required onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" name="phone" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>State / County *</label>
                  <input type="text" name="state" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Postcode / Zip *</label>
                  <input type="text" name="zip" required onChange={handleChange} />
                </div>
              </div>

              <h3>Payment Method</h3>
              <label className="radio">
                <input type="radio" name="payment" value="cod" checked={form.payment === 'cod'} onChange={handleChange} />
                Cash on Delivery
              </label>
              <label className="radio">
                <input type="radio" name="payment" value="online" checked={form.payment === 'online'} onChange={handleChange} />
                Online Payment (Coming Soon)
              </label>

              <button type="submit" className="place-order">Place Order</button>
            </form>

            <div className="order-summary">
              <h3>Order Summary</h3>
              {sampleOrderItems.map(item => (
                <div key={item.id} className="summary-product">
                  <div className="summary-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="summary-details">
                    <p className="product-name">{item.name}</p>
                    <p className="product-qty">Qty: {item.quantity}</p>
                    <p className="product-price">£{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <div className="summary-item">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-total">
                <strong>Total</strong>
                <strong>£{total.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
