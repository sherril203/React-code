import { Routes, Route, Outlet } from "react-router";
import List from "./ListAndKeys";
import Layout from "./Layout";
import Home from "./Home";
import AdminLayout from "./AdminLayout";
import CardSection from "./CardSection";
import SimpleGreeting from "./ConditionalRendering";
import DynamicComponent from "./DynamicComponent";
import UsersComponent, { UserDetails } from "./DynamicRouteExample";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<h1>Page 404 not found</h1>} />
      </Route>
      <Route path="/main" element={<AdminLayout />}>
        <Route index element={<List />} />
        <Route path="/main/card" element={<CardSection />} />
        <Route path="/main/greeting" element={<SimpleGreeting />} />
        <Route path="*" element={<h1>Page 404 not found</h1>} />
      </Route>
      <Route path="/cards/:id" element={<DynamicComponent />} />
      <Route path="/users" element={<UsersComponent />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default Routers;
