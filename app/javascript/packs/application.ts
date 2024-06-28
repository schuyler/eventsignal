// Entry point for the build script in your package.json
import "../stylesheets/application.css";
import "@hotwired/turbo-rails";
import "../controllers";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(React.createElement(App));
  }
});
