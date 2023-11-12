const { Router } = require('express');
const Todo = require('../models');

Router.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
});

Router.post('/todos', async (req, res) => {
    const { message } = req.body;
    const newTodo = await Todo.create({ title: message, completed: false });
    res.json(newTodo);
});


module.export = Router;