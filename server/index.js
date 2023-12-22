const express = require('express')

const cors = require('cors')

//const path = require('path')

const db = require('./db')

const app = express()

const port = 3000

//const clientPath = path.resolve(__dirname,'../client/dist')

app.use(express.json())
app.use(cors())

app.get('/api/links', db.getLinks)

// app.use(express.static(clientPath))

// app.get('/', (req, res) => {
    // we'll do some stuff here
//    res.sendFile(path.resolve(__dirname,'../client/dist','index.html'))
// })

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})