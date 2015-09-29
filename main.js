
// Grab my elements

var num1 = document.querySelector ('#num_one');
var num2 = document.querySelector ('#num_two');
var btn = document.querySelector ('#calculateBtn');
var ansr = document.querySelector ('#answer');


// Functions to perform the calculations

function sum() {
var result = Number(num1.value) + Number(num2.value);
ansr.textContent= result;
};






btn.addEventListener('click', sum);