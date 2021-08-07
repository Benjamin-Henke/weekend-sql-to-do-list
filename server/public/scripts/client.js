$(document).ready(() => {
    console.log('JS');
    console.log('JQ');
    clickHandlers();
}); // document start up

// Handles all btn clicks
function clickHandlers () {
    $('#addTaskBtn').on('click', () => {
        console.log('addTaskBtn');
        // Grab user inputs
        let taskToSend = {
            task: $('#taskIn').val(),
        };
        // Clear input field
        $('#taskIn').val('');
        console.log(taskToSend);
        readyToSend (taskToSend)
    }); // end #addTaskBtn function
} // end clickHandlers



// Make request to server
function getTasks () {

} // end getTasks