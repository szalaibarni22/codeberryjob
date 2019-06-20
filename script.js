
// todoList function - to get user input and store user value
function todoList() {
	
	var item    = document.getElementById('todoInput').value;// Create a text node from the user input
	var text    = document.createTextNode(item);// Create a li tag
	var newItem = document.createElement('li');// Add the user input to the li tag
	newItem.appendChild(text); // Append the li to the html todoList id tag
		if (item === '') {						// Make sure that empty field is not "submittable"
			alert("Valamit be kell írnod!");
	  	} else {
			document.getElementById('todoList').appendChild(newItem);
			newItem.className = 'newItem'; // Adds a class to the list items
	  	}
	
	// Create the remove button

    var removeButton = document.createElement('button'); // Creates the button.
    removeButton.textContent = 'Törlés'; // Sets its text.
	removeButton.className = 'removeButton'; // Adds a class to it.
	if (item != '') {
		document.getElementById('todoList').appendChild(removeButton) // Appends it to the list items
	}
	
	removeButton.addEventListener('click', function(){   // Connect item removal to  Remove button click event
		newItem.parentNode.removeChild(newItem);
		removeButton.classList.add('hide');
		completeButton.classList.add('hide')
	});

	// Create the complete button
	var completeButton = document.createElement('button'); // Creates the button.
    completeButton.textContent = 'Kész van!'; // Sets its text.
	completeButton.className = 'completeButton'; // Adds a class to it.
		
	if (item != '') {
		document.getElementById('todoList').appendChild(completeButton); //Appends it to the list items
	}

	// hide the Complete button after it is pressed
	completeButton.addEventListener('click', function(){
		newItem.classList.add('completed');
		completeButton.classList.add('hide');
	});
};	// the todoList function closing tag is here

// Add the function to the click event
document.getElementById('add-btn').addEventListener('click', todoList);

// Link the Enter key press on the input field to the click event
document.getElementById('todoInput').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
		event.preventDefault();
        document.getElementById('add-btn').click();
    }
});