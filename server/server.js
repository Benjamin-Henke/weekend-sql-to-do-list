// Setup server connections
// Connect route connections
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const toDoRouter = require('./routes/todo.router')

/*
Chris added to server:
He didn't use a pool.js file:

const pool = new pg.Pool({database: tasks})

app.get('/todo', (req, res) => {
      const queryText = `SELECT * FROM "todo" ORDER BY "complete", "id" LIMIT 100;`; 
  pool.query(queryText).then((results) => {res.send(results.rows)}
  ).catch((error) => {console.log(error); res.sendStatus(500);})
 })
 Why did he add this here? Where am i using this?
*/

// Allows our post to understand out form data
app.use(bodyParser.urlencoded({ extended: true }));
// Serves up static files
app.use(express.static('server/public'));

// Routes
app.use('/todo', toDoRouter);

// Start listening for requests on PRT
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});