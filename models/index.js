const axios = require("axios");

const users = [];

const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return data;
};

module.exports = {
  fetchUsers,
  fetchPosts,
};
