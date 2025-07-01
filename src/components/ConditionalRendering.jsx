import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ConditionalRenderingExample = () => {
  const [condition, setCondition] = useState(true);

  if (!condition) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p>Condition is false</p>
        <button onClick={() => setCondition(true)}>Change</button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p>Condition is true</p>
      <button onClick={() => setCondition(false)}>Update</button>
    </div>
  );
};

const ConditionalRenderingExample2 = () => {
  const [role, setRole] = useState("admin");

  console.log("role", role);

  if (role === "admin") {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p>Admin Dashboard</p>
        <button onClick={() => setRole("student")}>Change</button>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p>Student Dashboard</p>
        <button onClick={() => setRole("admin")}>Change</button>
      </div>
    );
  }
};

const ConditionalRenderingExample3 = () => {
  const [role, setRole] = useState("admin");

  console.log("role", role);

  switch (role) {
    case "faculty":
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <p>Faculty Dashboard</p>
          <button onClick={() => setRole("student")}>Change</button>
        </div>
      );
    case "student":
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <p>Student Dashboard</p>
          <button onClick={() => setRole("admin")}>Change</button>
        </div>
      );
    default:
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <p>Admin Dashboard</p>
          <button onClick={() => setRole("faculty")}>Change</button>
        </div>
      );
  }
};

const ConditionalRenderingExample4 = () => {
  const [role, setRole] = useState("admin");

  return role === "faculty" || role === "student" ? (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p>Common Dashboard</p>
      <button onClick={() => setRole("admin")}>Change</button>
    </div>
  ) : (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p>Admin Dashboard</p>
      <button onClick={() => setRole("faculty")}>
        Faculty Dashboard button
      </button>
      <button onClick={() => setRole("student")}>
        Student Dashboard button
      </button>
    </div>
  );
};

// export default ConditionalRenderingExample4;

// Traditional way of conditional rendering - if, if else, else if, switch

// Ternary operator - condition ? true : false

// Logical operator -&&, ||, !

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return <p className="text-2xl font-semibold">{time.toLocaleTimeString()}</p>;
};

function SimpleGreeting() {
  const date = new Date();
  const hour = date.getHours();

  // 1. IF condition
  let greeting = "Hello!";
  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  // 2. Ternary for AM/PM
  const period = hour >= 12 ? "PM" : "AM";

  // 3. Logical operator
  const showSleepMessage = hour >= 22;

  console.log("parent render");

  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <h2>{greeting}</h2>
      <p>Period: {period}</p>
      <Timer />
      {showSleepMessage && <p>It’s late! Go to bed 😴</p>}
      <Link to={"/list"}>Navigate</Link>
    </div>
  );
}

export default SimpleGreeting;
