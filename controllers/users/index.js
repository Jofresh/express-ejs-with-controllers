const { users } = require('./../../models')

const findAll = (req, res) => {
    res.render('users', { users })
}

module.exports = {
    findAll
}