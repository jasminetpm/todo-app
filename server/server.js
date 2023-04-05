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

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to DB"))
.catch(console.error);

const Todo = require('./models/Todo');

app.listen(3001, () => console.log("Server started on port 3001"));