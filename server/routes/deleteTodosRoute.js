const Todo = require('../models/Todo');

module.exports = async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
}