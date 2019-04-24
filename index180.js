document.getElementById('calorie-form').onsubmit = calculate;

function calculate(e) {
  e.preventDefault();
  const total = Array.from(document.getElementsByClassName('cal-control'))
    .map(meal => Number(meal.value))
    .reduce((accumulator, currentValue) => {
      /*code to run*/
    }, 0);
}
/*
The reduce method takes a callback function as well as an optional initial value, its function signature is as follow:

`Array.reduce(callback[, initialValue])`

Note that the square brackets `[]` around `initialValue` indicates that it's an optional parameter.

Provide the initial value of `0` as the second argument to the `reduce()` function.

In our situation, we want to add the `currentValue`, which is the `meal.value` value returned from the previous `.map()` function.
*/
