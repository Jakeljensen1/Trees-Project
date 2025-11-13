/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe"
console.log(destination);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 We can't reassign or redeclare a varible that was declared with const
 */
const travelDate = "2024-03-15";
console.log(travelDate);
// travelDate = "blah" won't work and give an "assignment to constant variable" type error

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
console.log(timeMachineModel); // This is not defined yet, so gives an error. Once the below variable is declared with var, it is no longer an error but an undefined variable in the console.log. This is called hoisting, the console knows the variable exists somewhere in the file
var timeMachineModel = "T-800";
