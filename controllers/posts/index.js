const { fetchPosts } = require('./../../models')

const findAll = async (req, res) => {
    const posts = await fetchPosts()
    res.render('posts', { posts })
}

const find = async (req, res) => {
    const id = parseInt(req.params.id)

    const posts = await fetchPosts()
    const post = posts.find(elt => elt.id === id)

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const comments = await response.json()

    res.render('post', { post, comments })
}

module.exports = {
    findAll,
    find
}