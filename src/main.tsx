import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Router from "./router";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Router />
  </HelmetProvider>,
);
