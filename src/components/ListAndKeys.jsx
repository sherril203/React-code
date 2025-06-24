import React from "react";

const List = () => {
  const data = [
    "Sudhir",
    "Thamarai",
    "Dhinesh",
    "Naveen",
    "Charumathi",
    "Suresh",
  ];

  const data2 = [
    { id: 1, name: "Sudhir", email: "sudhir@gmail.com" },
    { id: 2, name: "Thamarai", email: "thamarai@gmail.com" },
    { id: 3, name: "Dhinesh", email: "dhinesh@gmail.com" },
    { id: 4, name: "Charumathi", email: "charumathi@gmail.com" },
    { id: 5, name: "Suresh", email: "suresh@gmail.com" },
  ];

  return (
    <div>
      {/* {data.map((value, index) => (
        <li key={index}>{value}</li>
      ))} */}
      <div className="w-full h-[40vh] grid grid-cols-4 gap-5 p-5">
        {data2.map((value) => (
          <div
            key={value.id}
            className="border border-emerald-300 bg-emerald-100 rounded p-4 space-y-3"
          >
            <p>Name: {value.name}</p>
            <p>Email: {value.email}</p>
            <button className="px-4 py-1.5 bg-red-500 rounded text-white">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
