// Connect with server
const { Router } = require('express');
const express = require('express');
const { builtinModules } = require('module');
const toDoRouter = express.Router();

// DB connection
const pool = require('../modules/pool');

// Receive GET request from client
// Grab data from database
router.get('/', (req, res) => {
    let sqlQuery = `
        SELECT "id", "task", "completed" * FROM "tasks" ORDER BY "id";
    `;
    pool.query(sqlQuery).then((response)=> {
        // Sends back data from database
        res.send(response.rows)
    }).catch((error)=> {
        console.log('GET Error', error);
        res.sendStatus(500); // send server error
    })
}) // end router.get






// Export to server
module.exports = toDoRouter;