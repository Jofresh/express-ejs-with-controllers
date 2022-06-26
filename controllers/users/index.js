const { fetchUsers } = require('./../../models')

const findAll = async (req, res) => {
    const users = await fetchUsers()
    res.render('users', { users })
}

module.exports = {
    findAll
}