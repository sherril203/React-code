import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";

const getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const getUserById = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"></div>
    </div>
  );
};

export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchUserById() {
      setLoader(true);
      try {
        const data = await getUserById(id);
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchUserById();
  }, [id]);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="truncate">
        Name: {user?.username ? user?.username : "User"}
      </p>
      <p className="truncate">Email: {user?.email}</p>
      <p className="truncate">Phone: {user?.phone}</p>
    </div>
  );
};

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      setLoader(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchUsers();
  }, []);

  if (loader) {
    return <Loader />;
  }

  const handleNavigate = (id) => {
    if (1 == 2) {
      navigate(`/user/${id}`);
    } else {
      navigate(`/main`);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center p-5 flex-col gap-4">
      <h1 className="text-2xl font-semibold">Users List</h1>
      <div className="grid grid-cols-3 gap-6">
        {users.map((value) => (
          <div
            key={value.id}
            className="p-5 rounded border border-yellow-400 bg-yellow-100 flex flex-col gap-2 shadow"
          >
            <p className="truncate">Name: {value.username}</p>
            <p className="truncate">Email: {value.email}</p>
            <button
              className="px-4 py-2 rounded bg-blue-500 text-white text-center"
              onClick={() => handleNavigate(value.id)}
            >
              View more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersComponent;
