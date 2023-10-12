//Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//// ----------------------------------------------

function writeCards(names, event) {
  let messagesArray = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messagesArray.push(message);
  }
  return messagesArray;
}

//calling the function
let thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thankYouMessages); // logs the array of thank you messages

// function countDown(n)
function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}
//calling the function
countDown(10);
