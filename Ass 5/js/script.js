/* Part 2 */
console.log('PART 2');
// Starts at 1 and stops at 20
for(var i = 1; i < 21; i++)  {
	console.log(i);
}

/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Cycles through the numbers in the array, and checks its divisibility
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] % 5 == 0 && numbers[i] % 3 == 0) {
		console.log('eplekake'); // Stops here if the number is divisible by both 5 and 3
	} else if (numbers[i] % 5 == 0) {
		console.log('kake');	// Stops here if the number is divisible by both 5
	} else if (numbers[i] % 3 == 0) {
		console.log('eple'); // Stops here if the number is divisible by both 3
	} else {
		console.log(numbers[i]); // If there is no special case, it just logs the number
	}
}

/* Part 4 */
var title = document.getElementById('title');
title.innerHTML = 'Hello, JavaScript. Wadduuup?!'; // wubba lubba dub dub!!!!
/* Part 5 */
var magic = document.getElementById('magic');

function changeDisplay(){
	magic.style.display = 'none';
}

function changeVisibility(){
	magic.style.visibility = 'hidden';
	magic.style.display = 'block';
}

function reset(){
	magic.style.visibility = 'visible';
	magic.style.display = 'block';
}

/*Comment: Who said I got out of bed?!*/

/* Part 6 */
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'Java',
  'AJAX',
  'JSON',
  'React',
  'Angular',
  'Bootstrap',
  'Node.js'
];

var techytech = document.getElementById('tech');

// Cycle through technologies and push it to the list as a new element
for (var i = 0; i < technologies.length; i++) {
	techytech.innerHTML += '<li>' + technologies[i] + '</li>';
	/*
	Alternatively
	
	var lisp = document.createElement('li');
	var innhold = document.createTextNode(technologies[i]);
	lisp.appendChild(innhold);
	
	techytech.appendChild(lisp);
	*/
}
