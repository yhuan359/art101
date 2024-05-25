/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Edited by: Yifeng Huang
 * Created: 5/23/2024
 * License: Public Domain
 */

maxFactors = 4;

outputEl = document.getElementById("output");

// get the values from the webpage and write them in an object
// this expects to have input fields with ids num0, text0, num1, text1, etc
// returns an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

  
    //   // For numbers which are multiples of both 3 and 5, print “FizzBuzz”
    //   if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
    //     console.log("FizzBuzzBoom");
    //   } 
    //   // For numbers which are multiples of both 3 and 5, print “FizzBuzz”
    //   if ((i % 3 == 0) && (i % 5 == 0)) {
    //     console.log("FizzBuzz");
    //   } 
    //   // For numbers which are multiples of both 3 and 5, print “FizzBuzz”
    //   if ((i % 3 == 0) && (i % 7 == 0)) {
    //     console.log("FizzBoom");
    //   }
    //   // For numbers which are multiples of both 3 and 5, print “FizzBuzz”
    //   if ((i % 5 == 0) && (i % 7 == 0)) {
    //     console.log("BuzzBoom");
    //   }
    //   // If the number is a multiple of 3, print “Fizz” instead of the number.
    //   else if (i % 3 == 0) {
    //     console.log("Fizz");
    //   } 
    //   // If the number is a multiple of 5, print “Buzz” instead of the number.
    //   else if (i % 5 == 0) {
    //     console.log("Buzz");
    //   }
    //   // If the number is a multiple of 7, print “Boom” instead of the number.
    //   else if (i % 7 == 0) {
    //     console.log("Boom");
    //   }
    //   else {
    //     console.log(i);
    //   }
      
function fizzBuzzBoom(maxNums, factorObj) {
    // iterate over all of out numbers
    for (var num=0; num<maxNums; num++) {
        debugger;
        // reset output string
        var outputStr = "";
        // iterate over the factors we got from the html
        for (var factor in factorObj) {
            // check to see if this num is a multiple of factor
            if (num % factor == 0) {
                // if yes, than add the text to output string
                outputStr += factorObj[factor];
            }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You need to provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You need to provide at least one factor and text");
        return;
    }
    // clear error if there is one
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})
