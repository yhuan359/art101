 // * Author: Wes Modes <wmodes@csumb.edu>
 // * Edited by: Yifeng Huang
 // * Created: 5/23/2024
 // * License: Public Domain
 
maxFactors = 3;

outputEl = document.getElementById("output");

// get the values from the inputs in the webpage and write them in an object
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if there is no value, do not use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

// create the output line
function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}


function ThreeFactors(maxNums, factorObj) {
    // loop over all of output numbers
    for (var num=0; num<maxNums; num++) {
        debugger;
        // initial the output string
        var outputStr = "";
        // iterate over the factors from the html
        for (var factor in factorObj) {
            // if the num is a multiple of factors, add the text to output string.
            // otherwise, print as it.
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }
        // format the output string to " - xxxxxxx!"
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
    ThreeFactors(max, factorObj);
    outputEl.classList.add("cols");
})
