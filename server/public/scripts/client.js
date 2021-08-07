$(document).ready(() => {
    getTasks();
    clickHandlers();
}); // document start up

// Handles all btn clicks
function clickHandlers() {
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
            // saveTask(taskToSend)
    }); // end #addTaskBtn function
} // end clickHandlers


// Make request to server
function getTasks() {
    console.log('getTasks');

    $.ajax({
        method: "GET",
        url: "/tasks"
    }).then((response) => {
        console.log(response);
        renderTasks(response);
    }).catch((error) => {
        console.log('GET Error', error);
    })
} // end getTasks


// Renders tasks to the DOM
function renderTasks() {
    console.log('renderTasks');
} // end renderTasks