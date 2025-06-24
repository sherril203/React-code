import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppComponent from "./App";
import CardSection from "./components/CardSection";
import ReactFragmentsExakmple from "./components/ReactFragmentsExakmple";
import StateComponent from "./components/StateComponent";
import List from "./components/ListAndKeys";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <List />
  // </StrictMode>
);
