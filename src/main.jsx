import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppComponent from "./App";
import CardSection from "./components/CardSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardSection />
  </StrictMode>
);
