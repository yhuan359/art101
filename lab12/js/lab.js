/*
* Author: Yifeng Huang
* Created: 5/21/24
* License: Public Domain
* 
*/

//Return Leo Barnes, Dante Bishop, Charlie Roan and Carmelo Johns
//depending on length mod 4 
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 1 ) {
        return "Leo Barnes"
    }
    else if (mod == 2) {
        return "Dante Bishop"
    }
    else if (mod == 3) {
        return "Charlie Roan"
    }
    else if (mod == 4) {
        return "Carmelo Johns"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById
    var partner = sortingHat(name);
    newText = "<p> You have been partnered with " + partner + "</p>";
    document.getElementById("output").innerHTML = newText;
})