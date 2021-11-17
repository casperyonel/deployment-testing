const express = require('express')
const path = require('path')

const app = express() 

const port = process.env.PORT || 4005

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

app.listen(port, () => {
    console.log(`Docked at port ${port}`)
})