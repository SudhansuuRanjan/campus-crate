import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
// import { FilecoinHyperspaceTestnet } from '@thirdweb-dev/chains'


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);