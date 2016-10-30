/*

	Assignment 7
	Herman Slyngstadli

*/

var tasks = [];
var list = document.getElementById('taskList');
var output = document.getElementsByTagName('output')[0];
var completeCounter = 0;

// Task objekt
function task(timestamp, description) {
	this.timestamp = timestamp;
	this.description = description;
}

window.onload = function() {
	// 
	document.getElementById('addButton').addEventListener('click', function() {
		addTask();
	});
}

function addTask() {
	//
	var check = document.createElement('input');
	check.type = 'checkbox';

	//
	check.addEventListener('change', function() {
		changeStatus(this);
	});

	//
	var inputText = document.getElementById('inputField').value;
	var taskDescription = document.createTextNode(inputText);

	//
	var newListElement = document.createElement('li');

	//
	newListElement.appendChild(check);
	newListElement.appendChild(taskDescription);

	//
	var newTask = new task(Date.now(), taskDescription);
	tasks.push(newTask);

	//
	check.id = newTask.timestamp;
	list.appendChild(newListElement);

	//
	updateCounter();
}

function changeStatus(checkbox) {
	//
	var checkIndex = findIndex(checkbox.id);

	//
	if (list.children[checkIndex].style.textDecoration == 'line-through') {
		list.children[checkIndex].style.textDecoration = 'none';
		updateCounter('remove');
	} else {
		list.children[checkIndex].style.textDecoration = 'line-through';
		updateCounter('add');
	}
}

function findIndex(checkId) {
	//
	for (var i = 0; i < tasks.length; i++) {
		if (tasks[i].timestamp == checkId) {
			return i;
		}
	}
}

function updateCounter(command) {
	//
	if (command == 'add') {
		completeCounter++;
	} else if (command == 'remove') {
		completeCounter--;
	}
	
	//
	output.innerHTML = completeCounter + '/' + tasks.length;
}