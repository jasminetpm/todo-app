const Todo = require('../models/Todo');

function getToken (header) { 
    if(header.startsWith("Bearer ")) {
   
    token = header.substring(7, header.length);

    } else {
    console.log("error with getToken function");
    }

    return token;
}

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

module.exports = async (req, res) => {
    const token = getToken(req.headers['authorization']);
    
    const todo = new Todo({
        user: (parseJwt(token)).user,
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