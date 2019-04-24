document.getElementById('calorie-form').onsubmit = calculate;

function calculate(event) {
  event.preventDefault();
  clearOutput();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => {
      accumulator + currentValue;
    }, 0);

  const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

  const difference = maxCalories - total;
  const surplusOrDeficit = difference < 0 ? 'Surplus' : 'Deficit';

  const output = document.getElementById('output');

  const result = document.createElement('h3');
  result.className = 'green-text';
  const resultText = document.createTextNode(
    `${Math.abs(difference)} Calorie ${surplusOrDeficit}`,
  );
  result.appendChild(resultText);
  output.appendChild(result);

  const line = document.createElement('hr');
  output.appendChild(line);

  const recommended = document.createElement('h4');
  const recommendedText = document.createTextNode(
    `${maxCalories} Recommended Calories`,
  );
  recommended.appendChild(recommendedText);
  output.appendChild(recommended);

  const consumed = document.createElement('h4');
  consumed.innerHTML = `${total} Consumed Calories`;
  output.appendChild(consumed);

  output.setAttribute('class', 'border');
  output.style.backgroundColor = '#FFF9C4';
}

document.getElementById('clear').onclick = function() {
  clearOutput();
  clearForm();
};

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

const clearOutput = () => {
  document.getElementById('output').innerHTML = '';
  document.getElementById('output').classList.remove('border');
};

const clearForm = () => {
  const foodInputs = document.getElementsByClassName('food-control');
  while (foodInputs[0]) {
    foodInputs[0].parentNode.removeChild(foodInputs[0]);
  }

  const calInputs = document.getElementsByClassName('extra-cal-control');
  while (calInputs[0]) {
    calInputs[0].parentNode.removeChild(calInputs[0]);
  }

  document.getElementById('calorie-form').reset();
};