/* Part 2 */
console.log('PART 2');

for(var i = 1; i < 21; i++)  {
	console.log(i);
}

/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] % 5 == 0 && numbers[i] % 3 == 0) {
		console.log('eplekake');
	} else if (numbers[i] % 5 == 0) {
		console.log('kake');
	} else if (numbers[i] % 3 == 0) {
		console.log('eple');
	} else {
		console.log(numbers[i]);
	}
}

/* Part 4 */
var title = document.getElementById('title');
title.innerHTML = 'Hello, JavaScript';
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

for (var i = 0; i < technologies.length; i++) {
	techytech.innerHTML += '<li>' + technologies[i] + '</li>';
	/*
	Eventuetlt
	
	var lisp = document.createElement('li');
	var innhold = document.createTextNode(technologies[i]);
	lisp.appendChild(innhold);
	
	techytech.appendChild(lisp);
	*/
}
