// Entry point for the build script in your package.json
import "./stylesheets/application.css";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  console.log("looking for the root element");
  const container = document.getElementById("root");
  if (container) {
    console.log("found container");
    const root = createRoot(container);
    root.render(React.createElement(App));
  }
});
