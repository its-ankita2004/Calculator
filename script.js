let expressionInput = document.getElementById('expression');
let resultDisplay = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let lastAnswer = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const val = button.textContent;

    if (val === 'clear') {
      expressionInput.value = '';
      resultDisplay.textContent = '0';
    } else if (val === 'del') {
      expressionInput.value = expressionInput.value.slice(0, -1);
    } else if (val === 'ans') {
      expressionInput.value += lastAnswer;
    } else if (val === 'ENTER') {
      try {
        let expr = expressionInput.value.replace(/√/g, 'Math.sqrt');
        let result = eval(expr);
        resultDisplay.textContent = result;
        lastAnswer = result;
      } catch {
        resultDisplay.textContent = 'Error';
      }
    } else {
      expressionInput.value += val;
    }
  });
});
