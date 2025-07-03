import { NavLink } from "react-router";

const Sidebar = () => {
  const items = [
    { path: "/main", itemName: "List" },
    { path: "/main/greeting", itemName: "Greeting" },
    { path: "/main/card", itemName: "Card" },
  ];
  return (
    <div className="w-[20%] h-full fixed left-0 top-0 bottom-0 bg-amber-400">
      <div className="h-20 bg-blue-300"></div>
      <div className="h-full bg-blue-950 flex flex-col gap-4 p-4">
        {items.map(({ itemName, path }, index) => (
          <NavLink
            to={path}
            key={index}
            className={({ isActive }) =>
              `w-full py-2 ${
                isActive ? "bg-red-500" : "bg-orange-400"
              } text-white rounded text-center`
            }
            end
          >
            {itemName}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
