// Connect with server
const { Router } = require('express');
const express = require('express');
const { builtinModules } = require('module');
const toDoRouter = express.Router();

// DB connection
const pool = require('../modules/pool');

// Receive GET request from client
// Grab data from database
toDoRouter.get('/', (req, res)=> {
    let sqlQuery = `
        SELECT "id", "task", "completed" FROM "tasks" ORDER BY "id";
    `;
    pool.query(sqlQuery).then((response)=> {
        // Sends back data from database
        res.send(response.rows)
    }).catch((error)=> {
        console.log('GET Error', error);
        res.sendStatus(500); // Send server error
    })
}) // end toDoRouter.get

toDoRouter.post('/', (req, res)=> {
    let newTask = req.body;
    console.log('New task:', newTask);

    let sqlQuery = ` INSERT INTO "tasks" ("task") VALUES ($1);`;

    let sqlParams = [
        newTask.task,   // $1
    ];
    console.log('Params:', sqlParams);
    pool.query(sqlQuery, sqlParams).then((dbRes)=> {
        res.sendStatus(201); // Created
    }).catch((error)=> {
        console.log('POST Error');
        res.sendStatus(500); // Send server error 
    })
}) // end toDoRouter.post





// Export to server
module.exports = toDoRouter;