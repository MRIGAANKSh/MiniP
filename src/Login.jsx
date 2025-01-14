import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState(""); // Email input field
  const [password, setPassword] = useState(""); // Password input field
  const [error, setError] = useState(""); // Error message
  const [successMessage, setSuccessMessage] = useState(""); // Success message
  const [areButtonsEnabled, setAreButtonsEnabled] = useState(false); // State to enable/disable buttons
  const navigate = useNavigate();

  // Default credentials (for testing purposes)
  const DEFAULT_EMAIL = "prabhat@gmail.com";
  const DEFAULT_PASSWORD = "saviour52";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccessMessage("");

    // Check if default values are entered
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      // Simulate a successful login for default credentials
      setSuccessMessage("Login successful! Redirecting...");
      setAreButtonsEnabled(true); // Enable all buttons
      onLogin(); // Call the onLogin function passed from App.jsx
      setTimeout(() => navigate("/home"), 2000); // Redirect to home page
    } else {
      // Display error message if credentials are invalid
      setError("Invalid credentials. Please use the default values.");
      setAreButtonsEnabled(false); // Disable all buttons
    }
  };

  // Handle header button clicks
  const handleHeaderButtonClick = (path) => {
    if (areButtonsEnabled) {
      navigate(path); // Only allow navigation if buttons are enabled
    } else {
      setError("Invalid credentials. Cannot access this page.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
       

        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
 >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          {/* Success Message */}
          {successMessage && (
            <div className="text-green-500 text-sm mt-2">{successMessage}</div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out mt-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => handleHeaderButtonClick("/signup")}
              className={`text-blue-500 hover:underline font-medium ${
                !areButtonsEnabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!areButtonsEnabled} // Disable button if credentials are incorrect
            >
              Sign up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;