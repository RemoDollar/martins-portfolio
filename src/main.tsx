import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import App from "./App.tsx";

document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
