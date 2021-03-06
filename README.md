# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

This web app is designed for users to create a To Do List for everyday tasks. 

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


### Setup - git branch feature/setup
[x] server folder
    [x] modules folder
        [x] pool.js
    [x] public folder
        [x] html
        [x] scripts folder
            [x] client.js
        [x] vendors folder
            [x] JQ
        [x] styles
            [x] CSS
    [x] routes folder
        [x] todo.router.js
    [x] server.js
[x] .gitignore

[x] html basic layout
[x] link html w/ JQ, client.js, CSS
[x] npm init --yes
[x] npm install
[x] npm install express
[x] npm install -body-parser
[x] npm install pg
[x] npm install sweetalert --save

[x] package.json "start": "node server/server.js"

[x] link files together


### Interface - git branch feature/interface
[x] create *Task* input fields
[x] create *Add Task* btn
[x] create table with current tasks
    [] tasks should have *Complete* and *Delete* btn when appended

### Database - git branch feature/db
[x] create sql file
[x] create db *tasks*
[x] create db table *tasks*
    [x] columns: task, completed[boolean]
[x] copy sql code in database.sql
[x] link db

### Client
[x] *Add Task* btn click handler
    [x] grabs user inputs 
[x] GET - feature/GET
    [x] render tasks to DOM
[x] POST - feature/POST
[x] PUT - feature/PUT
    [x] need to register complete btn clicks after they have been appended
[x] DELETE - feature/DELETE
    [x] need to register del btn clicks after they have been appended

### Router
[x] GET - feature/GET
[x] POST - feature/POSt
[x] PUT - feature/PUT
    [x] update boolean in database
    [x] updates DOM from false to true and vis versa if user desires
[x] DELETE - feature/DELETE
    [x] delete item and renders the DOM with correct tasks

### Styling
[] when complete button is pressed, change color of task (or something like that)
[x] change font
[x] change alignment
[x] change background color