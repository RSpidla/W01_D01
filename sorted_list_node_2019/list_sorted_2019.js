// PROBLEM - A local research group has tasked you with building their new web application! They want to be able to input numerical data and sort it accordingly. For this application, you're going to need a custom module for sorting data.
    // Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.
    // Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module.
    // Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.

// STEP 1 - Initialize function expression and require sorted_list_function_2019.js
let sortFunction = require('./sorted_list_function_2019');

// STEP 2 - Grab numbers individually from list in module
let num = process.argv.slice(2);

// STEP 3 - Execute function 'addToList' on number variable
sortFunction.addToList(num);

// STEP 4 - Initialize function expression and then execute 'sortList' function
let sorted = sortFunction.sortList();

// STEP 5 - Print 'sorted' function expression and then print to standard output
console.log(sorted);