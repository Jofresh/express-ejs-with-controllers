const router = require('express').Router()
const usersRoute = require('./users')
const postsRoute = require('./posts')

router.use('/users', usersRoute)
router.use('/posts', postsRoute)

router.get('/', (req, res) => {
    res.render('index', { title: "My page" })
})

router.get('*', (req, res) => {
    res.render('404', { url: req.url })
})

module.exports = router