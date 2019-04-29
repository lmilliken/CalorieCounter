document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();
  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

  const difference = total - maxCalories;
  const surplusOrDeficit = difference > 0 ? 'Surplus' : 'Deficit';

  const output = document.getElementById('output');

  const result = document.createElement('h3');
  result.className = 'green-text';
  const resultText = document.createTextNode(
    `${Math.abs(difference)} Calorie ${surplusOrDeficit}`
  );

  result.appendChild(resultText);
  output.appendChild(result);

  const line = document.createElement('hr');
  output.appendChild(line);

  const recommended = document.createElement('h4');
  const recommendedText = document.createTextNode(
    `${maxCalories} Recommended Calories`
  );

  recommended.appendChild(recommendedText);
  output.appendChild(recommended);

  const consumed = document.createElement('h4');
  consumed.innerHTML = `${total} Consumed Calories`;
  output.appendChild(consumed);

  output.setAttribute('class', 'bordered-class');
  output.style.backgroundColor = '#FFF9C4';
}

/*
Next we heed to specify what to do when the user clicks the "Clear" button.

Get a reference to the `document` element with the id of `clear` and set its `onclick` property  it equal to a blank function `function(){}`

*/

/*
Inside the `function` body, instruct your code to call two other functions, ` clearOutput()` and `clearForm()`.  We will create these functions shortly.

*/

/*
Create a variable name `clearOutput` and set it equal to a function using arrow function notation, like

`const myFunction = () => {}`

which is the same as

`function myFunction () {}`
*/

/*
Create a variable name `clearOutput` and set it equal to a function using arrow function notation, like

`const myFunction = () => {}`

which is the same as

`function myFunction () {}`
*/
