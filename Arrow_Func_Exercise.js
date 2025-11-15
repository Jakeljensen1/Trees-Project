/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.

const activateHyperdrive = () => {
  console.log("Hyperdrive activated!")
}

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.

// My Answer:

const scanForLife = () => console.log("No lifeforms detected");
print(scanForLife());
/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.

//My answer:

const currentCoordinates = (x, y, z) => ({ xcoordinate: x, ycoordinate: y, zcoordinate: z })




/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */

const spacecraft = {
  name: Juicemobile,
  receiveMessage: (message) => {
    console.log(`Message received: ${message}`)
  }
}
spacecraft.receiveMessage();