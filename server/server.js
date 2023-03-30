const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const router = require('./router');

dotenv.config();

const app = express();

// Configure the app

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(router);


// mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("Connected to DB"))
//     .catch(console.error);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to DB"))
.catch(console.error);

const Todo = require('./models/Todo');

// READ TODOS
// app.get('/todos', async (req, res) => {
//     const todos = await Todo.find();

//     res.json(todos);
// });

// CREATE TODOS
// app.post('/todo/new', (req, res) => {
//     const todo = new Todo({
//         text: req.body.text
//     });

//     todo.save();

//     res.json(todo);
// });

// DELETE TODOS
// app.delete('/todo/delete/:id', async (req, res) => {
//     const result = await Todo.findByIdAndDelete(req.params.id);

//     res.json(result);
// })

// COMPLETE TODOS
// app.get('/todo/complete/:id', async (req, res) => {
//     const todo = await Todo.findById(req.params.id);

//     todo.complete = !todo.complete;

//     todo.save();

//     res.json(todo);
// })

app.listen(3001, () => console.log("Server started on port 3001"));