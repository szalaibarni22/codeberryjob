
// todoList function - to get user input and store user value
function todoList() {
	
	var item    = document.getElementById('todoInput').value;// create a text node from the user input
	
	var text    = document.createTextNode(item);// create a li tag
	
	var newItem = document.createElement('li');// add the user input to the li tag
	
	newItem.appendChild(text); // append the li to the html todoList id tag
	
    
    document.getElementById('todoList').appendChild(newItem)
	
	// Create the remove button

    var removeButton = document.createElement('button'); 
    // Creates the button.
    removeButton.textContent = 'Törlés'; // Sets its text.
    
	removeButton.className = 'removeButton'; // Adds a class to it.
    	
	document.getElementById('todoList').appendChild(removeButton) //Appends it to the list items

	removeButton.addEventListener('click', function(){
		newItem.parentNode.removeChild(newItem);
		removeButton.classList.add('hide');
		completeButton.classList.add('hide')
	});

	// Create the complete button
	var completeButton = document.createElement('button'); // Creates the button.
    
    completeButton.textContent = 'Kész van!'; // Sets its text.
    
	completeButton.className = 'completeButton'; // Adds a class to it.
    	
	document.getElementById('todoList').appendChild(completeButton); //Appends it to the list items

	// hide the Complete button after it is pressed
	completeButton.addEventListener('click', function(){
		newItem.classList.add('completed');
		completeButton.classList.add('hide');
	});
};

// Add the function to the click event
document.getElementById('add-btn').addEventListener('click', todoList);

// Link the Enter key press on the input field to the click event - IT IS STILL NOT WORKING
document.getElementById('todoInput').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
		event.preventDefault();
        document.getElementById('add-btn').click();
    }
});