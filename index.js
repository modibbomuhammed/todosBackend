const express = require("express"),
    app = express();
port = 3000;


app.get('/', (req, res) => {
    console.log({ app })
    res.send({ greeting: 'Hello World!!' })
});

app.listen(port, () => {
    console.log('listening on Port 300')
})