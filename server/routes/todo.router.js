// Connect with server
const { Router } = require('express');
const express = require('express');
const { builtinModules } = require('module');
const toDoRouter = express.Router();

// DB connection
const pool = require('../modules/pool');





// Export to server
module.exports = toDoRouter;