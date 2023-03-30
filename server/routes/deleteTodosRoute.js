const Todo = require('../models/Todo');

// module.exports = async (req, res) => {
//     const {id} = req.params;
//     const todo = await TodoModel.findById(id);
//     await todo.remove();
//     res.status(204).json(todo);
// }

module.exports = async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
}