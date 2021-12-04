const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

const todoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

const targetSchema = new mongoose.Schema({
    target: String,
    hoursNeeded: Number,
    hoursCompleted: Number,
    subTargets: Array,
});

const Target = mongoose.model('Target', targetSchema);




mongoose.connect('mongodb://localhost:27017/targets', {
    useNewUrlParser: true
});

app.post('/api/targets', async (req, res) => {

    let target = new Target({
        target: req.body.target,
        hoursNeeded: req.body.hoursNeeded,
        hoursCompleted: req.body.hoursCompleted,
        subTargets: req.body.subTargets,
    });
    console.log(req.body)
    try {
        await target.save();
        res.send(target);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/targets', async (req, res) => {
    try {
        let targets = await Target.find();
        res.send(targets);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/todos', async (req, res) => {

    let todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });
    try {
        await todo.save();
        res.send(todo);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});



app.get('/api/todos', async (req, res) => {
    try {
        let todos = await Todo.find();
        res.send(todos);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


app.put('/api/todos/:id', async (req, res) => {
    var todo = await Todo.findOne({ _id: req.params.id })
    todo.text = req.body.text
    todo.completed = req.body.completed
    // console.log(JSON.stringify(req.body))
    try {
        await todo.save();
        res.send(todo);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/todos/:id', async (req, res) => {
    try {
        await Todo.deleteOne({
            _id: req.params.id
        })
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
