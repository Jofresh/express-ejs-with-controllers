const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.use('/', routes)

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) {
        console.log('Error in server setup')
        return
    }
    console.log(`App listening on http://localhost:${port}/`)
})
