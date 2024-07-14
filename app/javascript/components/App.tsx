import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import EnterCode from "./EnterCode";

const Home: React.FC = () => <h1 className="text-3xl font-bold">Home</h1>;
const About: React.FC = () => <h1 className="text-3xl font-bold">About</h1>;

const App: React.FC = () => (
  <Router>
    <div className="max-w-4xl mx-auto px-4">
      <nav className="bg-gray-800 text-white p-4 rounded-md">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enter-code" element={<EnterCode />} />
      </Routes>
    </div>
  </Router>
);

export default App;
