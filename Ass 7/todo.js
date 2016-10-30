/*

	Assignment 7
	Herman Slyngstadli

*/

// Init
var tasks = [];
var list = document.getElementById('taskList');
var output = document.getElementsByTagName('output')[0];
var completeCounter = 0;

// Task object
function task(timestamp, description) {
	this.timestamp = timestamp;
	this.description = description;
}

window.onload = function() {
	// Add event listener to button when the site is fully loaded
	document.getElementById('addButton').addEventListener('click', function() {
		addTask();
	});
}

function addTask() {
	// Make the checkbox
	var check = document.createElement('input');
	check.type = 'checkbox';

	// Add event listener to checkbox
	check.addEventListener('change', function() {
		changeStatus(this);
	});

	// Make input field and corresponding text node
	var inputText = document.getElementById('inputField').value;
	var taskDescription = document.createTextNode(inputText);

	// Make list element
	var newListElement = document.createElement('li');

	// Append checkbox and text to list element
	newListElement.appendChild(check);
	newListElement.appendChild(taskDescription);

	// Make a new task from object and push it to the array
	var newTask = new task(Date.now(), taskDescription);
	tasks.push(newTask);

	// Set id of checkbox to timestamp of task and append to list
	check.id = newTask.timestamp;
	list.insertBefore(newListElement, list.childNodes[0]);

	// Update the output field
	updateCounter();
}

function changeStatus(checkbox) {
	var checkIndex = findIndex(checkbox.id);

	// Set or remove line-through
	if (list.children[checkIndex].style.textDecoration == 'line-through') {
		list.children[checkIndex].style.textDecoration = 'none';
		updateCounter('remove');
	} else {
		list.children[checkIndex].style.textDecoration = 'line-through';
		updateCounter('add');
	}
}

function findIndex(checkId) {
	// Finding index that mathces id of checkbox field and returning it
	for (var i = 0; i < tasks.length; i++) {
		if (tasks[i].timestamp == checkId) {
			return (tasks.length - (i+1)); // Reversed order because elements are added to the top
		}
	}
}

function updateCounter(command) {
	// add or subtract from completeCounter
	if (command == 'add') {
		completeCounter++;
	} else if (command == 'remove') {
		completeCounter--;
	}
	
	// Update output field
	output.innerHTML = completeCounter + '/' + tasks.length + ' completed';
}