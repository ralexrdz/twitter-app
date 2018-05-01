const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const viewRoutes = require('./routes/views/index')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

viewRoutes(app)

app.listen(4000, () => console.log('Example app listening on port 3000!'))
