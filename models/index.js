const mongoose = require('mongoose');
const { Schema, model } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected To Mongo Server'))
    .catch(err => console.log({ err }));

const TodoSchema = new Schema({
    title: String,
    completed: Boolean,
    date: Date
});

module.exports = model('todo', TodoSchema);
