import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import './custom.css';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartData || [];

  // Redirect to /cart if no cart data
  useEffect(() => {
    if (!location.state?.cartData) {
      navigate('/cart');
    }
  }, [location, navigate]);

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
  const orderId = Math.floor(Math.random() * 1000000);
  navigate('/thank-you', {
    state: {
      orderId,
      cartItems,
      customer: form
    }
  });
};


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
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
            {/* Billing Form */}
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h3>Billing Information</h3>

              <div className="form-group full-width">
                <label className="required">Country</label>
                <input type="text" name="country" placeholder="Enter your country" required onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="required">First Name </label>
                  <input type="text" name="firstName" placeholder="Enter your First Name" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="required">Last Name </label>
                  <input type="text" name="lastName" placeholder="Enter your Last Name" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-group full-width">
                <label className="required">Address </label>
                <input type="text" name="address" placeholder="Enter your address" required onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="required">Email Address </label>
                  <input type="email" name="email" placeholder="Enter your email address" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="required">Phone </label>
                  <input type="tel" name="phone" placeholder="Enter your phone number" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="required">State / County </label>
                  <input type="text" name="state" placeholder="Enter your state or county" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="required">Postcode / Zip </label>
                  <input type="text" name="zip" placeholder="Enter your ZIP/postcode" required onChange={handleChange} />
                </div>
              </div>

              <h3>Payment Method</h3>
              <label className="radio">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === 'cod'}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
              {/* <label className="radio">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={form.payment === 'online'}
                  onChange={handleChange}
                />
                Online Payment (Coming Soon)
              </label> */}

              <div className="d-flex justify-content-between align-items-center mt-3">
                <button type="submit" className="place-order btn btn-success">
                  Place Order
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate('/cart')}
                >
                  Return to Cart
                </button>
              </div>
            </form>

            {/* Order Summary */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              {cartItems.map(item => (
                <div key={item.id} className="summary-product">
                  <div className="summary-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="summary-details">
                    <p className="product-name">{item.name}</p>
                    <p className="product-qty">Qty: {item.quantity || 1}</p>
                    <p className="product-price">£{(item.price * (item.quantity || 1)).toFixed(2)}</p>
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
