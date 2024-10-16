import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { PrimeReactProvider } from "primereact/api";

import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";

const value = {
  ripple: true,
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider value={value}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PrimeReactProvider>
  </StrictMode>
);
