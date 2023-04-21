let number = document.getElementById('number');

let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let addBtn = document.getElementById('addBtn');

let btnFour = document.getElementById('btnFour');
let btnFive = document.getElementById('btnFive');
let btnSix = document.getElementById('btnSix');
let subtractBtn = document.getElementById('subtractBtn');

let btnSeven = document.getElementById('btnSeven');
let btnEight = document.getElementById('btnEight');
let btnNine = document.getElementById('btnNine');
let multiplyBtn = document.getElementById('multiplyBtn');

let clearBtn = document.getElementById('clearBtn');
let btnZero = document.getElementById('btnZero');
let equalBtn = document.getElementById('equalBtn');
let divideBtn = document.getElementById('divideBtn');

let num1 = 0;
let num2 = 0;
let answer = 0;
let operator = '';


btnOne.addEventListener('click', function(e){
    number.value += '1';

});
btnTwo.addEventListener('click', function(e){
    number.value += '2';

});

btnThree.addEventListener('click', function(e){
    number.value += '3';

});
addBtn.addEventListener('click', function(e){
    if (operator === '') {
        num1 = parseFloat(number.value);
        operator = '+';
        number.value = num1 + operator;
      }
    else if(operator === '+'){
        num2 = parseFloat(number.value);
        number.value = num1 + operator + num2
    }
});
btnFour.addEventListener('click', function(e){
    number.value += '4';

});
btnFive.addEventListener('click', function(e){
    number.value += '5';

});
btnSix.addEventListener('click', function(e){
    number.value += '6';

});
subtractBtn.addEventListener('click', function(e){
    if (operator === '') {
        num1 = parseFloat(number.value);
        operator = '-';
        number.value = num1 + operator;
      }
    else if(operator === '-'){
        num2 = parseFloat(number.value);
        number.value = num1 + operator + num2
    }
    
});
btnSeven.addEventListener('click', function(e){
    number.value += '7';

});
btnEight.addEventListener('click', function(e){
    number.value += '8';

});
btnNine.addEventListener('click', function(e){
    number.value += '9';

});
multiplyBtn.addEventListener('click', function(e){
    if (operator === '') {
        num1 = parseFloat(number.value);
        operator = '*';
        number.value = num1 + operator;
      }
    else if(operator === '*'){
        num2 = parseFloat(number.value);
        number.value = num1 + operator + num2
    }
   
});
clearBtn.addEventListener('click', function(e){
     num1 = 0;
     num2 = 0;
     answer = 0;
     operator = '';
     number.value = '';

});
btnZero.addEventListener('click', function(e){
    number.value += '0';

});
equalBtn.addEventListener('click', function(e){
    answer = eval(number.value);
    number.value = answer; 

});
divideBtn.addEventListener('click', function(e){
    if (operator === '') {
        num1 = parseFloat(number.value);
        operator = '/';
        number.value = num1 + operator;
      }
    else if(operator === '/'){
        num2 = parseFloat(number.value);
        number.value = num1 + operator + num2
    }
   
});


//Grab all buttons and event listeners
//Create variables for for first num, second num, operater and answer
//Grab operators and add event listener
//Handle equal button and clear button(set to null or empty string)
//Grab eaquation box
