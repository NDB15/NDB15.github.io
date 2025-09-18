// Simple JavaScript Calculator - Assignment 3

// Array to store valid results for summary calculations
var validResults = [];

// Start the main table
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

// Main loop for user input
do {
    // Prompt for first number
    var x = prompt("Enter first number (x):");
    if (x === null) break; // User clicked Cancel
    
    // Prompt for operator
    var operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break; // User clicked Cancel
    
    // Prompt for second number
    var y = prompt("Enter second number (y):");
    if (y === null) break; // User clicked Cancel
    
    var result;
    
    // Check if x and y are valid numbers
    if (isNaN(x) || isNaN(y)) {
        result = "error: invalid number";
    } 
    // Check if operator is valid and perform calculation
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
    
    // Add row to table
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    
} while (confirm("Continue? Click OK to continue or Cancel to finish."));

// Close the main table
document.write("</table>");

// Calculate and display summary if there are valid results
if (validResults.length > 0) {
    var min = Math.min(...validResults);
    var max = Math.max(...validResults);
    var total = validResults.reduce((sum, val) => sum + val, 0);
    var avg = total / validResults.length;
    
    // Summary table
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
