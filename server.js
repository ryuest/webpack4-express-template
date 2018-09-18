const express = require('express')
const app = express()
const path = require('path');
const port = 9091

app.use(express.static('dist'))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + 'index.html'));
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})