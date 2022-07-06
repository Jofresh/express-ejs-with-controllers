const { fetchPosts } = require("./../../models");
const axios = require("axios");

const findAll = async (req, res) => {
  const posts = await fetchPosts();
  res.render("posts", { posts });
};

const find = async (req, res) => {
  if (isNaN(req.params.id)) {
    res.render("404", { url: req.url });
  } else {
    const id = parseInt(req.params.id);

    const posts = await fetchPosts();
    const post = posts.find((elt) => elt.id === id);

    if (post) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const comments = data;

      res.render("post", { post, comments });
    } else {
      res.render("404", { url: req.url });
    }
  }
};

module.exports = {
  findAll,
  find,
};
