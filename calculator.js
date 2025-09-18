
var validResults = [];


document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");


do {
    
    var x = prompt("Enter first number (x):");
    if (x === null) break; 
    
    
    var operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break; 
    
   
    var y = prompt("Enter second number (y):");
    if (y === null) break; 
    
    var result;
    
    
    if (isNaN(x) || isNaN(y)) {
        result = "error: invalid number";
    } 
   
    else if (operator === "+") {
        result = parseFloat(x) + parseFloat(y);
        validResults.push(result);
    } 
    else if (operator === "-") {
        result = parseFloat(x) - parseFloat(y);
        validResults.push(result);
    } 
    else if (operator === "*") {
        result = parseFloat(x) * parseFloat(y);
        validResults.push(result);
    } 
    else if (operator === "/") {
        result = parseFloat(x) / parseFloat(y);
        validResults.push(result);
    } 
    else if (operator === "%") {
        result = parseFloat(x) % parseFloat(y);
        validResults.push(result);
    } 
    else {
        result = "error: invalid operator";
    }
    

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    
} while (confirm("Continue? Click OK to continue or Cancel to finish."));


document.write("</table>");


if (validResults.length > 0) {
    var min = Math.min(...validResults);
    var max = Math.max(...validResults);
    var total = validResults.reduce((sum, val) => sum + val, 0);
    var avg = total / validResults.length;
    
   
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
