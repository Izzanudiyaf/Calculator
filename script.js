const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    });
});



let prevNumber = "";
let calculatorOperator = "";
let currentNumber = "";

const inputNumber = (number) => {
    if(currentNumber === "0"){
        currentNumber = number
    }else{
        currentNumber += number
    }
}
numbers.forEach((number)=>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((oper) => {
    oper.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (oper) =>{
    prevNumber = currentNumber
    calculatorOperator = oper
    currentNumber = ""

    if(calculatorOperator === ""){
        prevNumber = currentNumber
    }
    calculatorOperator = oper
    currentNumber = "0"
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", ()=>{
    calculate()
    updateScreen(currentNumber)
})

const calculate = () =>{
    let result = ""
    switch(calculatorOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break    
    }
    currentNumber = result
    calculatorOperator = ""
}

const clearAll = () =>{
    prevNumber = ""
    calculatorOperator = ""
    currentNumber = "0"
}
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () =>{
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})



const persentages = document.querySelector(".percentage");
persentages.addEventListener("click", ()=>{
    calculate_percentage()
    updateScreen(currentNumber);
})

const calculate_percentage = () =>{
    let result = ""
    if (prevNumber === "") {
        result = currentNumber/100;
    }else if (prevNumber !== "") {
        result = (prevNumber * currentNumber)/100;
    }
    currentNumber = result
}
