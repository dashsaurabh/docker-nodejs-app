const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World Yet Again from Docker NodeJS App")
})

app.listen(8080, () => {
    console.log("Listening to requests on Port 8080")
})