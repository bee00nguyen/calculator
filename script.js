const sum = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

const operation = (operator,x,y) => (operator(x,y));


const showDisplay = document.getElementById('display');
const selections = document.querySelectorAll('.digit');
const operants = document.querySelectorAll('.operation');
const eButton = document.getElementById('equal');
const cButton = document.getElementById('clear');
const dButton = document.getElementById('dot');
const storeValue = [];
const variableArray = [];


let displayValue;
let sign;
let result;
let digits;
let decimal;

//show number buttons on the display when click,
operants.forEach(operant => operant.addEventListener('click', (e) =>
{
    sign = e.target.id;
    variableArray.splice(0,variableArray.length);
    showDisplay.innerHTML = sign;
    storeValue[0] = digits;

}
))

selections.forEach(selection => selection.addEventListener('click', (e) =>
{
    displayValue = e.target.id;// get value from button 
    
    variableArray.push(displayValue);

    digits = variableArray.join('');

    showDisplay.innerHTML = digits;

    digits = parseFloat(digits);

    storeValue[1] = digits;

}        
))

dButton.addEventListener ('click',() => {
        variableArray.push(".");
        })


cButton.addEventListener ('click',() => {
    showDisplay.innerHTML = "";
    variableArray.splice(0,variableArray.length);
    storeValue.splice(0,2);
})



eButton.addEventListener('click', () => {


    
    if (sign === "+")
    {
        result = operation(sum,storeValue[0],storeValue[1]);
        if (result - parseInt(result) > 0 )
        { 
            result = parseFloat(result.toFixed(2));
        } 
              
    } else if (sign === "-")
    {
        result = operation(subtract,storeValue[0],storeValue[1]);
        if (result - parseInt(result) > 0 )
        { 
            result = parseFloat(result.toFixed(2));
        } 

    } else if (sign === "*")
    {
        result = operation(multiply,storeValue[0],storeValue[1]);
        if (result - parseInt(result) > 0 )
        { 
            result = parseFloat(result.toFixed(2));
        } 
       
    } else if (sign === "/")
    {
        if (storeValue[1] == 0){
            result = "cannot divide by 0 dummy";
        } else {
        result = operation(divide,storeValue[0],storeValue[1]);}
        if (result - parseInt(result) > 0 )
        { 
            result = parseFloat(result.toFixed(2));
        } 
    }


    
    showDisplay.innerHTML = result;
    digits = result;
    
})

