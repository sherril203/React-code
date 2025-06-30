import { PureComponent, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppComponent from "./App";
import CardSection from "./components/CardSection";
import ReactFragmentsExakmple from "./components/ReactFragmentsExakmple";
import StateComponent from "./components/StateComponent";
import List from "./components/ListAndKeys";
import MemoExample from "./components/MemoExample";
import Parent from "./components/LifeCycleOfComponents";
import ConditionalRenderingExample from "./components/ConditionalRendering";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ConditionalRenderingExample />

  // </StrictMode>
);
