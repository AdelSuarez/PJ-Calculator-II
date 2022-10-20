let titleNumber = document.getElementById('number');
const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnFour = document.getElementById('four');
const btnFive = document.getElementById('five');
const btnSix = document.getElementById('six');
const btnSeven = document.getElementById('seven');
const btnEight = document.getElementById('eight');
const btnNine = document.getElementById('nine');
const btnZero = document.getElementById('zero');
const AC = document.getElementById('ac');
const c = document.getElementById('c');
const sum = document.getElementById('sum');
const res = document.getElementById('res');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const result = document.getElementById('result');
let numOne;
let operation;
let resultOpt

const printNumber = (number) => {
    /* Number checker */ 
    if (titleNumber.textContent === '0') {
        titleNumber.innerHTML = '';
        titleNumber.innerHTML = number.textContent;
    } else {
        titleNumber.innerHTML = titleNumber.textContent + number.textContent;
    }
}

const calculator = (num, opt) => {
    if (opt === '+') {
        resultOpt = parseInt(num) + parseInt(titleNumber.textContent);
        titleNumber.innerHTML = resultOpt.toString();
    } else if (opt === '-') {
        resultOpt = parseInt(num) - parseInt(titleNumber.textContent);
        titleNumber.innerHTML = resultOpt.toString();
    } else if (opt === 'x') {
        resultOpt = parseInt(num) * parseInt(titleNumber.textContent);
        titleNumber.innerHTML = resultOpt.toString();
    } else if (opt === '/') {
        if (titleNumber.textContent == '0') {
            titleNumber.style.textAlign = 'center'
            titleNumber.innerHTML = 'No se puede dividir por 0';
            setTimeout(function (){
                titleNumber.innerHTML = '0';
                titleNumber.style.textAlign = null;
            }, 1000);

        } else {
            resultOpt = parseInt(num) / parseInt(titleNumber.textContent);
            titleNumber.innerHTML = resultOpt.toString();
        }
    }
}

const variables = () => {
    numOne = titleNumber.textContent;
    titleNumber.innerHTML = '0';
}

const limitedNumber = () => {
    if (titleNumber.textContent.length === 23) {
        titleNumber.innerHTML = titleNumber.textContent.substring(0, titleNumber.textContent.length - 1);
        
    }
}


window.onload = () => {

    /* Buttons function  */
    btnOne.onclick = () => {
        printNumber(btnOne);
        limitedNumber();
    } 
    btnTwo.onclick = () => {
        printNumber(btnTwo);
        limitedNumber();
    }
    btnThree.onclick = () => {
        printNumber(btnThree);
        limitedNumber();
    }
    btnFour.onclick = () => {
        printNumber(btnFour);
        limitedNumber();
    }
    btnFive.onclick = () => {
        printNumber(btnFive);
        limitedNumber();
    }
    btnSix.onclick = () => {
        printNumber(btnSix);
        limitedNumber();
    }
    btnSeven.onclick = () => {
        printNumber(btnSeven);
        limitedNumber();
    }
    btnEight.onclick = () => {
        printNumber(btnEight);
        limitedNumber();
    }
    btnNine.onclick = () => {
        printNumber(btnNine);
        limitedNumber();
    }
    btnZero.onclick = () => {
        printNumber(btnZero);
        limitedNumber();
    }

    /* Functions to clean the text output */
    AC.onclick = () => {
        titleNumber.innerHTML = '0';
    }

    c.onclick = () => {
        if (titleNumber.textContent.length == 1){
            titleNumber.innerHTML = '0';
        } else {
            titleNumber.innerHTML = titleNumber.textContent.substring(0, titleNumber.textContent.length - 1);
        }
    }

    /* Funtions to perform arithmetic operations */
    res.onclick = () => {
        variables();
        operation = '-';
    }

    sum.onclick = () => {
        variables();
        operation = '+';
    }

    mul.onclick = () => {
        variables();
        operation = 'x'
    }

    div.onclick = () => {
        variables();
        operation = '/'
    }

    result.onclick = () => {
        calculator(numOne, operation);
    }
}
