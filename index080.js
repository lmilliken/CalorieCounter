document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();
  document.getElementsByClassName('cal-control');
}
/*
No assign the document object  you just created to a variable name `total`.  Since this variable will not change, use `const` create it.
*/
