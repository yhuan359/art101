/*
* Author: Yifeng Huang
* Created: 5/3/24
* License: Public Domain
*/

function isEven(x) {
    return (x % 2 == 0);
}

//test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

var array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array:", array);

var result = array.map(isEven);
// should return [true, false, true, true,true ,true,true]
console.log("test of eveness of array:", result);

var result = array.map(function(x){
   return x ** 0.5;
})

//should return [10 ,9 ,2 ,4, ...] 
console.log("Squareroot of array:", result);