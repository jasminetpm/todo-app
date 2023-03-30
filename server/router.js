const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const createTodosRoute = require("./routes/createTodosRoute");
const readTodosRoute = require("./routes/readTodosRoute");
const updateTodosRoute = require("./routes/updateTodosRoute");
const deleteTodosRoute = require("./routes/deleteTodosRoute");

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.post('/todos', isLoggedIn, createTodosRoute);
router.get('/todos', isLoggedIn, readTodosRoute);
router.put('/todos/:id', isLoggedIn, updateTodosRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodosRoute);
// NEXT: update
// NEXT: delete

module.exports = router;