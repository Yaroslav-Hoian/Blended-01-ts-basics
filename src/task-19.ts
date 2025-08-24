import axios from "axios";

interface User {
  name: string;
  id: number;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { name, id } = response.data;
  return { name, id };
};

const getUserName = async (id: number) => {
  const user = await fetchUser(id);
  console.log(user);
};

getUserName(1);
