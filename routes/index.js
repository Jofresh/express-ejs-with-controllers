const router = require('express').Router()
const usersRoute = require('./users')

router.get('/', (req, res) => {
    res.render('index', { title: "My page" })
})

router.use('/users', usersRoute)

module.exports = router