import { memo, useState } from "react";

const Todos = memo(({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    // anonymous function
    setCount(function (count) {
      return count + 2;
    });
    // anonymous arrow function
    setCount((count) => {
      return count + 1;
    });
    // arrow function
    const callback = (count) => {
      return count + 2;
    };
    setCount(callback);
    // named function
    function callback2(count) {
      return count + 1;
    }
    setCount(callback2);
    // callback function
    setCount((count) => count + 1);
  };

  console.log("Parent render");

  return (
    <>
      {/* <Todos todos={todos} /> */}
      {/* <hr /> */}
      <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

export default MemoExample;
