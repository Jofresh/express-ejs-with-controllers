require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', { title: "My app" })
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in server setup")
        return
    }
    console.log(`App listening on ${PORT}`)
})