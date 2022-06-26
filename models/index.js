const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
}

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await res.json()
    return data
}

module.exports = {
    fetchUsers,
    fetchPosts
}