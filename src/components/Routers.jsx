import { Routes, Route } from "react-router";
import List from "./ListAndKeys";
import Layout from "./Layout";
import Home from "./Home";
import AdminLayout from "./AdminLayout";
import CardSection from "./CardSection";
import SimpleGreeting from "./ConditionalRendering";
import DynamicComponent from "./DynamicComponent";
import UsersComponent, { UserDetails } from "./DynamicRouteExample";
import ControlledComponents from "./ControlledComponents";
import UncontrolledComponents from "./UncontrolledComponents";
import CreateProduct from "./CRUD/CreateProduct";
import GetProduct from "./CRUD/GetProduct";
import UpdateProduct from "./CRUD/UpdateProduct";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import PrivateRoute from "./PrivateRoute";

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
      <Route path="/controlled" element={<ControlledComponents />} />
      <Route path="/uncontrolled" element={<UncontrolledComponents />} />
      {/* CRUD */}
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/get-product" element={<GetProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
      </Route>
    </Routes>
  );
};

export default Routers;
