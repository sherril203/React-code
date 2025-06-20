import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppComponent from "./App";
import CardSection from "./components/CardSection";
import ReactFragmentsExakmple from "./components/ReactFragmentsExakmple";
import StateComponent from "./components/StateComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateComponent />
  </StrictMode>
);
