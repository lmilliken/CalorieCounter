document.getElementById('calculate').onclick = function() {
  clearOutput();

  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(input => Number(input.value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(total);

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
};

document.getElementById('clear').onclick = function() {
  clearOutput();
  clearForm();
};

const clearOutput = () => {
  document.getElementById('output').innerHTML = '';
  document.getElementById('output').classList.remove('border');
};

const clearForm = () => {
  document.getElementById('calorie-form').reset();
};
