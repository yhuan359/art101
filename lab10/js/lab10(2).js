function generateRandomText() {
    const text = "Loren ipsum dolor sit amet";
    const min = 3;
    const max = 10; // Make sure you define 'max'
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

    // Get a random starting index to slice the Lorem Ipsum text
       const randStart =
      Math.floor(Math.random()) * (text.length - randLen);

      return text.slice(randStart, randStart + randLen);
    
}

// click listener for button
$("#my-button").click(function () {

console.log("the button is clicked");

// get new fake dialogue
var newText = generateRandomText();

console.log("newText: " + newText);

// append a new div to our output div
$("#output").append('<div class="text"><p>' +
newText )
'</p></div>';

});