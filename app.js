const express = require('express')
const app = express()

const pitchers = require('./routes/pitchers')
const batters = require('./routes/batters')


// static assets
// app.use(express.static('./methods-public'))
// parse form data
// app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/pitchers', pitchers)
app.use('/api/batters', batters)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}....`)
})