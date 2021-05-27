keys = document.querySelector(".key");
resultDisplay = document.querySelector(".result").querySelector('span');
calculator = document.querySelector('body');

keys.addEventListener("click", e => {
    if(e.target.matches('button'))
    {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = resultDisplay.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;


        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));

        if(!action){
            if (displayedNum === '0' || previousKeyType === 'operator') {
                resultDisplay.textContent = keyContent;
            }

            else{
                    resultDisplay.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number'
        }

        else if (
            action === 'multiply' ||
            action === 'add' ||
            action === 'subtract' ||
            action === 'divide'
        ) {

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue);
                resultDisplay.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            } else{
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                resultDisplay.textContent = displayedNum + '.';
            }
            if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                resultDisplay.textContent = '0.';
            }

            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action === 'reset') {
            resultDisplay.textContent = 0;            
            calculator.dataset.firstValue = '';
            calculator.dataset.modValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';

            calculator.dataset.previousKeyType = 'reset'
        }

        if (action === 'delete') {
            const displayedNumDel = displayedNum.substring(0, displayedNum.length -1); 
            console.log(displayedNumDel)
            resultDisplay.textContent = displayedNumDel;
            calculator.dataset.firstValue = displayedNumDel;

            calculator.dataset.previousKeyType = 'delete';

        }

        if (action === 'calculate') {

            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = displayedNum;

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                resultDisplay.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.modValue = secondValue;
            console.log(secondValue)
            calculator.dataset.previousKeyType = 'calculate';

        }
    }
})

const calculate = (firstValue, operator, secondValue) => {
    let result = '';
    const firstNum = parseFloat(firstValue);
    const secondNum = parseFloat(secondValue);

    if (operator === 'add') {
        result = firstNum + secondNum;
    }
    
    if (operator === 'subtract') {
        result = firstNum + secondNum;
    }

    if (operator === 'multiply') {
        result = firstNum + secondNum;
    }

    if (operator === 'divide') {
        result = firstNum + secondNum;
    }

    return result;
}