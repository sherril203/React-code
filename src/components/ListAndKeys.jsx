import image from "../assets/stud.webp";
import react from "../assets/react.svg";
import { memo, useState } from "react";

export const Card = memo(({ image, name, email }) => {
  console.log("render", name);
  return (
    <div className="border border-emerald-300 bg-emerald-100 rounded p-4 space-y-3">
      <img src={image} alt={`${name} profile`} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
});

const List = () => {
  const data = [
    { id: 1, name: "Sudhir", email: "sudhir@gmail.com", image },
    { id: 2, name: "Thamarai", email: "thamarai@gmail.com", image: react },
    { id: 3, name: "Dhinesh", email: "dhinesh@gmail.com", image },
    { id: 4, name: "Charumathi", email: "charumathi@gmail.com", image },
    { id: 5, name: "Suresh", email: "suresh@gmail.com", image },
  ];

  const [list, setList] = useState(data);

  const handleDelete = () => {
    const filteredData = data.filter((value) => value.id !== 1);
    setList(filteredData);
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-5 gap-5">
      <div className="w-full grid grid-cols-4 gap-5">
        {list.map((value) => (
          <Card
            key={value.id}
            image={value.image}
            name={value.name}
            email={value.email}
          />
        ))}
      </div>
      <div>
        <button
          className="px-4 py-1.5 bg-red-500 rounded text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;

// memo - used for memoize the component;
