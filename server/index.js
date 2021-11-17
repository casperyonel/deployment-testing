const express = require('express')
const path = require('path')

const app = express() 

const port = process.env.PORT || 4005

app.use('/', express.static(path.join(__dirname, "../index.html")))

app.listen(port, () => {
    console.log(`Docked at port ${port}`)
})