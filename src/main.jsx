import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { App } from "./App.jsx";
import "./styles.css";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
