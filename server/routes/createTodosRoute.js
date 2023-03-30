const Todo = require('../models/Todo');

module.exports = async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        complete: false
    });

    // console.log(todo.text);

    //added "async" and "await"
    await todo.save();
    res.json(todo);
};

// module.exports = (req, res) => {
//     const {text} = req.body;
//     console.log(text);
// };