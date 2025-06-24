import React from "react";
import { useLocation, Link } from "react-router-dom";
import './custom.css'; // Make sure this file is created

const ThankYouPage = () => {
  const location = useLocation();
  const { orderId, cartItems = [] } = location.state || {};

  // Calculate total price
  const total = cartItems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  // Calculate delivery date
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const formattedDelivery = deliveryDate.toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          alt="Success"
          className="success-icon"
        />

        <h1 className="thank-you-heading">Thank You for Your Order!</h1>
        <p className="thank-you-text">
          We’ve received your order. A confirmation has been sent to your email.
        </p>

        <p className="order-id">
          <strong>Order ID:</strong>{" "}
          <span className="highlighted">#{orderId}</span>
        </p>

        <div className="table-wrapper">
          <h3 className="table-title">Products:</h3>
          <div className="table-scroll">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.quantity || 1}</td>
                    <td>£{item.price.toFixed(2)}</td>
                    <td>£{(item.price * (item.quantity || 1)).toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan="4" className="text-right">Total:</td>
                  <td className="highlighted">£{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="delivery-info">
          Estimated Delivery by: <span className="delivery-date">{formattedDelivery}</span>
        </p>

        <Link to="/" className="home-button">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
