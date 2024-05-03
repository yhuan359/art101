
function getNameandSort() {
    const userName = window.prompt
("what is your name?");
    return userName.split('').sort().join('');

}
 
console.log(getNameandSort());


// Sort username - fucntion that takes user input and sorts the letter 
//of their name

// Sort username - function that takes user input and sorts the letters of their name
function sortUserName() {
    var username = window.prompt("Hi. What's your name?");
    console.log("username =", username);
    // Split string to array
    var nameArray = username.split('');
    console.log("nameArray =", nameArray)
    // Join the array back to a string and return it
    return "Here's your sorted\n" + "Name: " + username ;
}

// Output
