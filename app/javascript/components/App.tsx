import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home: React.FC = () => <h1 className="text-3xl font-bold">Home</h1>;
const About: React.FC = () => <h1 className="text-3xl font-bold">About</h1>;

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{/* <Link to="/about">About</Link> */}</li>
        </ul>
      </nav>

      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </div>
  </Router>
);

export default App;
