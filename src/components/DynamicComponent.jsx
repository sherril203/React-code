import React from "react";
import { useParams } from "react-router";

const DynamicComponent = () => {
  const { id } = useParams();
  return <div>DynamicComponent - {id}</div>;
};

export default DynamicComponent;
