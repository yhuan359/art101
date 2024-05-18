/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Yifeng Huang
   Date: 05/17/2024
*/
function generateRandomText() {
  const text = "Hello Friendly Stay Come Nice Okay Good Cool Wow Awesome";
  const min = 5;
  const max = 20; // Make sure you define 'max'
   
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Get a random starting index to slice the Hello text
  const randStart = Math.floor(Math.random()) * (text.length - randLen);
  // Generate the random Hello-like text
  return text.slice(randStart, randStart + randLen)
}

// click listener for button
$("#make-convo").click(function()
 {

// get new fake dialogue
console.log("the button is clicked");

// get new fake dialogue
var newText = generateRandomText();

console.log("newText: " + newText);

// append a new div to our output div
/* use newText instead of newTExt */
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});