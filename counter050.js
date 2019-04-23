document.getElementById('calorie-form').onsubmit = calculate;

/*
<I don't know why we have to .preventDefault()...>
*/

function calculate(event) {
  event.preventDefault();
}
