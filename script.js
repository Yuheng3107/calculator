 
 const add = (a,b) => +a + +b;
 const subtract = (a,b) => +a - +b;
 const multiply = (a,b) => +a*+b;
 const divide = (a,b) => parseFloat(+a/+b).toFixed(2);

 function operate(operator, a, b) {
     if (operator === '+') return add(a,b);
     else if (operator === '-') return subtract(a,b);
     else if (operator === 'x') return multiply(a,b);
     else if (operator === '÷') return divide(a,b);
 }

 function operatorCheck(text) {
    if (operator !== "") {
        bottomNum = toString(operate(operator, topNum, bottomNum)); 
    }
    operator = text;
    topNum = bottomNum;
    bottomNum = 0;
 }
 const buttons = document.querySelectorAll('button');
 const bottom = document.querySelector('#bottom');
 const above = document.querySelector('#top');
 let operator = "";
 let bottomNum = "";
 let topNum = "";
 buttons.forEach(button => button.addEventListener('click', (e) => {
     const text = e.target.textContent;
     num = Number(text);
    
     if (!isNaN(num)) {
            if (bottomNum == 0) bottomNum = "";
            bottomNum += num;
         
     }
     else {
        if (text === 'CLEAR') {
            bottom.textContent = "";
            above.textContent = "";
            bottomNum = "";
            operator = "";
        }
        else if (text === 'DELETE') bottomNum = bottomNum.slice(0,bottomNum.length-1);

        else if (text === '=') {
            if (operator !== "") {
                bottomNum = operate(operator, topNum, bottomNum);
                operator = ""; 
                topNum = "";
            }
            
        }
        else if (text === '.') {

        }
        else {
            
            operatorCheck(text);

        };
     }

     bottom.textContent = bottomNum;
     above.textContent = topNum + ` ${operator}`;
 }))

