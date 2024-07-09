import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"; // Step 1

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // event: React.FormEvent<HTMLFormElement>
    // event.preventDefault();
    // Submit form data to /login path
    // You can use fetch or axios to POST data to your backend
    navigate("/enter-code");
    console.log("Submitting:", inputValue);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <form className="bg-white p-6 my-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="userInput"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email or Phone Number
          </label>
          <input
            type="text"
            id="userInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email or phone"
          />
        </div>
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
