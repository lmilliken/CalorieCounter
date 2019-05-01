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
}

document.getElementById('add').onclick = function() {
  const foodInput = document.createElement('input');
  foodInput.placeholder = 'food name';
  foodInput.classList.add('food-control');
  document.getElementById('entries').appendChild(foodInput);

  const calorieInput = document.createElement('input');
  calorieInput.setAttribute('type', 'number');
  calorieInput.setAttribute('min', '0');
  calorieInput.classList.add('cal-control');
  calorieInput.classList.add('extra-cal-control');
  document.getElementById('entries').appendChild(calorieInput);
};

document.getElementById('clear').onclick = function() {
  clearOutput();
  clearForm();
};

const clearOutput = () => {
  document.getElementById('output').innerHTML = '';
  document.getElementById('output').classList.remove('bordered-class');
};

/*
The `clearOutput` function is called when the user clicks the "Clear" button.

It also need to be be run when the user clicks the  "Calculate" button.

In the `calculate() function, right after `event.preventDefault()`, run the `clearOutput` function.

Create a variable name `clearForm` and set it equal to a function using arrow function notation, like

`const myFunction = () => {}`

which is the same as

`function myFunction () {}`
*/