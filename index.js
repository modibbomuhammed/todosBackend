const express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    Todo = require('./models'),
    routes = require('./routes'),
    port = 3000;





app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
// model


app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed
    await todo.save()
    res.json(todo);
});

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ successfull: true });
});

app.listen(port, () => {
    console.log('listening on Port 300')
})