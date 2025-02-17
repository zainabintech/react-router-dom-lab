import { createRoot } from "react-dom/client";
import { Router as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");

createRoot(root).render(
    <Router>
      <App />
    </Router>
);
