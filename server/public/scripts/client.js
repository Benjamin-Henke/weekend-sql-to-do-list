$(document).ready(() => {
    console.log('JS');
    console.log('JQ');
    clickHandlers();
}); // document start up

// Handles all btn clicks
function clickHandlers () {
    $('#addTaskBtn').on('click', () => {
        console.log('addTaskBtn');
        
    }); // end #addTaskBtn function
} // end clickHandlers



// Make request to server
function getTasks () {

} // end getTasks