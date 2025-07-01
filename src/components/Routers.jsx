import { Routes, Route } from "react-router";
import SimpleGreeting from "./ConditionalRendering";
import List from "./ListAndKeys";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SimpleGreeting />} />
      <Route path="/list" element={<List />} />
      <Route path="*" element={<h1>Page 404 not found</h1>} />
    </Routes>
  );
};

export default Routers;
