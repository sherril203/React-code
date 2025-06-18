import React from "react";

const ChildComponent = () => {
  return (
    <>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </>
  );
};

const ReactFragmentsExakmple = () => {
  const data = ["vignesh", "vicy", "faisal", "tharun"];

  const getData = data.map((value) => {
    if (value == "faisal") {
      return "faisal khan";
    } else {
      return value;
    }
  });

  console.log(getData);

  return (
    <ul>
      <ChildComponent />
    </ul>
  );
};

export default ReactFragmentsExakmple;
