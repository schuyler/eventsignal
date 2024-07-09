import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const updateCode = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Ensure only one character per input
    setCode(newCode);
  };

  const handleSubmit = () => {
    // Redirect to home page if login is successful
    navigate("/");
    console.log(code.join("")); // Example: logging the code
  };

  return (
    <div className="enter-code-container">
      <h2>Please Enter Login Code</h2>
      <div className="code-inputs">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => updateCode(index, e.target.value)}
            className="code-input"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </div>
  );
};

export default EnterCode;
