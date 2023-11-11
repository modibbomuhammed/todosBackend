const express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected To Mongo Server'))
    .catch(err => console.log({ err }));



app.use(bodyParser.urlencoded({ extended: true }));
// model
const { Schema, model } = mongoose;


const TodoSchema = new Schema({
    title: String,
    completed: Boolean,
    date: Date
});

const Todo = model('todo', TodoSchema);

app.get('/', async (req, res) => {
    const todos = await Todo.find({});
    res.json({ greeting: 'Hello World!!', todos })
});

app.post('/todo', async (req, res) => {
    const { message } = req.body;
    const newTodo = await Todo.create({ title: message, completed: false });
    res.json(newTodo);
});

app.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed
    await todo.save()
    res.json(todo);
});

app.listen(port, () => {
    console.log('listening on Port 300')
})