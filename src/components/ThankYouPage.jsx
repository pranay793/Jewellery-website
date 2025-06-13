import React from "react";
import { Link } from "react-router-dom";
import './custom.css';

const ThankYouPage = () => {
  return (
    <div className="flex thank-you items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md text-center w-full">
        <img
          src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          alt="Success"
          className="w-20 mx-auto mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Thank You!
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          Your order has been successfully placed. We’ll send you a confirmation shortly.
        </p>
        <Link
          to="/"
          className="inline-block mt-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
