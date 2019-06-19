
// todoList function used on button click to get user input and 
function todoList() {
	// store user value
	var item    = document.getElementById('todoInput').value;
	// create a text node from the user input
	var text    = document.createTextNode(item);
	// create a li tag
	var newItem = document.createElement('li');
	// add the user input to the li tag
	newItem.appendChild(text);
	// append the li to the html todoList id tag
    
    document.getElementById('todoList').appendChild(newItem)
	
	// Create the delete button

    var deleteButton = document.createElement('button'); // Creates the button.
    
    deleteButton.textContent = 'Törlés'; // Sets its text.
    
	deleteButton.className = 'deleteButton'; // Adds a class to it.
    	
	document.getElementById('todoList').appendChild(deleteButton)

	deleteButton.addEventListener('click', function(){
		newItem.parentNode.removeChild(newItem);
		deleteButton.classList.add('hide');
		completeButton.classList.add('hide')
	});

	// Create the complete button
	var completeButton = document.createElement('button'); // Creates the button.
    
    completeButton.textContent = 'Kész van!'; // Sets its text.
    
	completeButton.className = 'completeButton'; // Adds a class to it.
    	
	document.getElementById('todoList').appendChild(completeButton);

	completeButton.addEventListener('click', function(){
		newItem.classList.add('completed');
		completeButton.classList.add('hide');
	});
};

// Add the function to the click event
document.getElementById('add-btn').addEventListener('click', todoList);

// Link the Enter key press on the input field to the click event
document.getElementById('todoInput').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
		event.preventDefault();
        document.getElementById('add-btn').click();
    }
});