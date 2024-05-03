// Author: Yifeng Huang <yhuan359@ucsc.edu>
// Created: 5/3/24


// Sort username - fucntion that takes user input and sorts the letter 
//of their name

// Sort username - function that takes user input and sorts the letters of their name
function sortUserName() {
    var username = window.prompt("Hi. What's your name?");
    console.log("username =", username);
    // Split string to array
    var nameArray = username.split('');
    console.log("nameArray =", nameArray)
    // sort the array
    var nameArraySort = nameArray.sort();
    // Join the array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
    // and return it
    //return "Here's your sorted\n" + "Name: " + username ;
}

// Output
document.writeln("oh hey, I've fixed your name: ", sortUserName(), "<br>");
