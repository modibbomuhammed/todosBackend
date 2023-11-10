const express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    port = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected To Mongo Server'))
    .catch(err => console.log({ err }));


app.get('/', (req, res) => {
    console.log({ app })
    res.json({ greeting: 'Hello World!!' })
});

app.listen(port, () => {
    console.log('listening on Port 300')
})