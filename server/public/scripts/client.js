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
} // end clickHandlers


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


function deleteTask() {
    let taskId = $(this).parents('tr').data('id')
    console.log('deleteTask', 'id', taskId, $(this));
    
    $.ajax({
        method: 'DELETE',
        url: '/todo',
        data: taskId
    }).then((response)=> {
        console.log(response);
        // Get updated database
        getTasks();
    }).catch((error)=> {
        console.log('DELETE Error', error);
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
        renderElement.append(`
            <tr data-id=${task.id}>
                <td> ${task.task} </td>
                <td> ${task.completed} </td>
                <td class="completeBtn"><button>Complete</button></td>
                <td class="delBtn"><button>X</button></td>
            </tr>
        `); // end append
    }; // end for loop
} // end renderTasks