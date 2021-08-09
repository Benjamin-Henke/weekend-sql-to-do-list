$(document).ready(() => {
    getTasks();
    clickHandlers();
}); // document start up

// Handles all btn clicks
function clickHandlers() {
    // Calls the add task btn
    $('#addTaskBtn').on('click', () => {
        console.log('addTaskBtn');
        // Grab user inputs
        let taskToSend = {
            task: $('#taskIn').val(),
        };
        // Clear input field
        $('#taskIn').val('').focus();
        console.log(taskToSend);
        // Function below will send user input for POST
        postTask(taskToSend)
    }); // end #addTaskBtn function

    // Calls the del btn
    $('#viewTask').on('click', '.delBtn', deleteTask);

    // Calls complete btn
    $('#viewTask').on('click', '.completeBtn', putTask);
} // end clickHandlers

// Request data from server
function getTasks() {
    console.log('getTasks');
    $.ajax({
        method: "GET",
        url: "/todo"
    }).then((response) => {
        console.log(response);
        renderTasks(response);
    }).catch((error) => {
        console.log('GET Error', error);
    })
} // end getTasks

function postTask(newTask) {
    console.log('postTasks');
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTask
    }).then((response)=> {
        console.log(response);
        getTasks();
    }).catch((error)=> {
        console.log('POST Error', error);
    })
} // end postTasks

function putTask() {
    let taskId = $(this).parents('tr').data('id')
    console.log('putTask', 'id', taskId, $(this));

    $.ajax({
        method: 'PUT',
        url: `/todo/${taskId}`
    }).then((response)=> {
        console.log(response);
        getTasks();
    }).catch((error)=> {
        console.log('PUT Error', error);
    })
} // end putTask

function deleteTask() {
    let taskId = $(this).parents('tr').data('id')
    console.log('deleteTask', 'id', taskId, $(this));
    
    $.ajax({
        method: 'DELETE',
        url: `/todo/${taskId}`,
    }).then((response)=> {
        console.log(response);
        // Get updated database
        getTasks();
    }).catch((error)=> {
        console.log('DELETE Error', error);
        alert('Delete Task Failed')
    })
} // end deleteTask

// Renders tasks to the DOM
function renderTasks(response) {
    console.log('renderTasks');
    // Defines our table element where tasks will go
    // Clear out the old data to prepare for new data
    let renderElement = $('#viewTask');
    renderElement.empty();
    // Loop through response
    for (const task of response) {
        console.log(task);
        renderElement.append(`
            <tr data-id=${task.id}>
                <td class="taskText"> ${task.task} </td>
                <td> ${task.completed} </td>
                <td class="completeBtn"><button>&#10003</button></td>
                <td class="delBtn"><button>X</button></td>
            </tr>
        `); // end append
        // Unsure on how to target elements that we add to the DOM
        let completed = `<td> ${task.completed} </td>`;
        if (completed === true) {
            `<tr data-id=${task.id}></tr>`.classList.add(".completed")
        }   
    }; // end for loop
} // end renderTasks

