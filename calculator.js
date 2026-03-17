function calculator(operator ,a,b) {
    if (operator == "+") {
        return a + b;
    }
    if (operator == "-") {
        return a - b;
    }
    if (operator == "*") {
        return a * b;
    }
    if (operator == "/") {
        return a / b;
    }

   

}
console.log(calculator( "+", 150, 200));
console.log(calculator( "-", 150, 200));
console.log(calculator( "*", 150, 200));``
console.log(calculator( "/", 150, 200));
