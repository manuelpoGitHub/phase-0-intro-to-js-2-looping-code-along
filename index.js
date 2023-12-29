
// This function takes an array of names and an event name, and returns an array of custom thank you messages.
function writeCards(names, event) {
  let messagesArray = []; // An array to store the messages.
  for (let i = 0; i < names.length; i++) {
    // For each name in the names array,
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; // create a custom message.
    messagesArray.push(message); // Add the custom message to the messagesArray.
  }
  return messagesArray; // Return the array of messages after the loop finishes.
}

// Example usage of the function:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
// Expected output:
// [
//   "Thank you, Charlie, for the wonderful birthday gift!",
//   "Thank you, Samip, for the wonderful birthday gift!",
//   "Thank you, Ali, for the wonderful birthday gift!",
// ];

// This function takes a positive integer n and counts down to zero, logging each number.
function countDown(n) {
  while (n >= 0) { // While n is greater than or equal to 0,
    console.log(n); // log the current value of n.
    n--; // Decrement n.
  }
}

// Example usage of the function:
countDown(10);
// Expected logs:
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0