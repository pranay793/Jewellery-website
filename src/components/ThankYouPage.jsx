import React from "react";
import { useLocation, Link } from "react-router-dom";
import './custom.css';

const ThankYouPage = () => {
  const location = useLocation();
  const { orderId, cartItems = [] } = location.state || {};

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  ).toFixed(2);

  // Calculate delivery date (7 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const formattedDelivery = deliveryDate.toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="thank-you-page bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="thank-box bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 md:p-10 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          alt="Success"
          className="w-16 md:w-20 mx-auto mb-4"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-4">
          We’ve received your order. A confirmation has been sent to your email.
        </p>

        <p className="text-md mb-4">
          <strong className="text-gray-700">Order ID:</strong>{" "}
          <span className="text-pink-500 font-semibold">#{orderId}</span>
        </p>

        <div className="text-left bg-gray-50 p-4 rounded-md shadow-inner mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Products:</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            {cartItems.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <div className="mt-3 font-semibold text-right text-gray-800">
            Total: £{total}
          </div>
        </div>

        <p className="text-sm md:text-base mb-6">
          <span className="font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
            Estimated Delivery by: {formattedDelivery}
          </span>
        </p>

        <Link
          to="/"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
