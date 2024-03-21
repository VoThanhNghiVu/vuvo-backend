// Task 2: Creating backend
// Task 5: Create delete method, that receives id as query parameter (e.g., http://localhost:3001/delete/1).
// Task 6: Creating a separate module for managing database connection and executing query
// Task 7: Change the app for the router (./routes/todo.js)

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { todoRouter } = require('./routes/todo.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', todoRouter);

const port = process.env.PORT; //const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});