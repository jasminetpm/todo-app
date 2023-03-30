const Todo = require('../models/Todo');

module.exports =  async (req, res) => {
    const todos = await Todo.find();
    // this gives us back every todo model in the database
    res.json(todos);
    //send it back to the user
};