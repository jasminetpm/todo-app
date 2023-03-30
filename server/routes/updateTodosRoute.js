const Todo = require('../models/Todo');

module.exports = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.complete = req.body.complete;
    todo.text = req.body.text;
    await todo.save();
    res.json(todo);
}