import image from "../assets/stud.webp";
import react from "../assets/react.svg";
import { memo, useState } from "react";

export const Card = memo(({ id, image, name, email, handleDelete }) => {
  console.log("render");
  return (
    <div className="border border-emerald-300 bg-emerald-100 rounded p-4 space-y-3">
      <img src={image} alt={`${name} profile`} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button
        className="px-4 py-1.5 bg-red-500 rounded text-white"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
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

  const handleDelete = (id) => {
    const filteredData = list.filter((value) => value.id !== id);
    setList(filteredData);
  };

  const handleAdd = () => {
    setList((prevlist) => [
      ...prevlist,
      {
        id: 6,
        name: "Vignesh",
        email: "vignesh@gmail.com",
        image,
      },
      {
        id: 7,
        name: "vicky",
        email: "vignesh@gmail.com",
        image,
      },
    ]);
  };

  console.log(list, "lisr");

  return (
    <div className="w-full min-h-screen flex flex-col p-5 gap-5">
      <div className="w-full grid grid-cols-4 gap-5">
        {list.map((value) => (
          <Card
            key={value.id}
            id={value.id}
            image={value.image}
            name={value.name}
            email={value.email}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default List;

// import image from "../assets/stud.webp";
// import react from "../assets/react.svg";
// import { memo, useState } from "react";

// export const Card = memo(({ id, image, name, email, list, setList }) => {
//   console.log("render");

//   const handleDelete = () => {
//     const filteredData = list.filter((value) => value.id !== id);
//     setList(filteredData);
//   };

//   return (
//     <div className="border border-emerald-300 bg-emerald-100 rounded p-4 space-y-3">
//       <img src={image} alt={`${name} profile`} />
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//       <button
//         className="px-4 py-1.5 bg-red-500 rounded text-white"
//         onClick={handleDelete}
//       >
//         Delete
//       </button>
//     </div>
//   );
// });

// const List = () => {
//   const data = [
//     { id: 1, name: "Sudhir", email: "sudhir@gmail.com", image },
//     { id: 2, name: "Thamarai", email: "thamarai@gmail.com", image: react },
//     { id: 3, name: "Dhinesh", email: "dhinesh@gmail.com", image },
//     { id: 4, name: "Charumathi", email: "charumathi@gmail.com", image },
//     { id: 5, name: "Suresh", email: "suresh@gmail.com", image },
//   ];

//   const [list, setList] = useState(data);

//   return (
//     <div className="w-full min-h-screen flex flex-col p-5 gap-5">
//       <div className="w-full grid grid-cols-4 gap-5">
//         {list.map((value) => (
//           <Card
//             key={value.id}
//             id={value.id}
//             image={value.image}
//             name={value.name}
//             email={value.email}
//             list={list}
//             setList={setList}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default List;

// // memo - used for memoize the component;
