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

// Receive POST request from client
// Insert data into database
toDoRouter.post('/', (req, res)=> {
    let newTask = req.body;
    console.log('New task:', newTask);

    let sqlQuery = ` INSERT INTO "tasks" ("task") VALUES ($1);`;

    let sqlParams = [
        newTask.task,   // $1
    ];
    console.log('Params:', sqlParams);
    // Send new data to the database
    pool.query(sqlQuery, sqlParams).then((dbRes)=> {
        res.sendStatus(201); // Created
    }).catch((error)=> {
        console.log('POST Error');
        res.sendStatus(500); // Send server error 
    })
}) // end toDoRouter.post

// Receive DELETE request from client
// Delete data from database
toDoRouter.delete('/:id', (req, res)=> {
    let sqlQuery = `DELETE FROM "tasks" WHERE "id" = $1`;
    let sqlParams = [req.params.id];  // $1 -> this is the id
    pool.query(sqlQuery, sqlParams).then((dbRes)=> {
        res.sendStatus(200); // OK
    }).catch((error)=> {
        console.log('DELETE Error', error);
        res.sendStatus(500); // Send serer error
    })
}) // end toDoRouter.delete

// Export to server
module.exports = toDoRouter;