// frontend/src/pages/PaymentFailed.tsx
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p className="mb-4">Your payment could not be processed. Please try again.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
  );
};

export default PaymentFailed;
