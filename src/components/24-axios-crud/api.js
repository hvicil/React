import axios from "axios";

const getUsers = () => {
  return axios.get("https://631f92a722cefb1edc4e941f.mockapi.io/api/v1/users");
};

const updateUser = (user) => {
  return axios.put(
    `https://631f92a722cefb1edc4e941f.mockapi.io/api/v1/users/${user.id}`,
    user
  );
};

const createUser = (user) => {
  return axios.post(
    "https://631f92a722cefb1edc4e941f.mockapi.io/api/v1/users",
    user
  );
};

const deleteUser = (id) => {
  return axios.delete(
    `https://631f92a722cefb1edc4e941f.mockapi.io/api/v1/users/${id}`
  );
};

export { getUsers, updateUser, createUser, deleteUser };
