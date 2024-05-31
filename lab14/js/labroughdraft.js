// print all the numbers from 1 to 120.
for (let i = 1; i <= 120; i++) {
  
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
    
    
    let str = "";
    if (i % 3 == 0){
      str += "Fizz";
    }
  if (i % 5 == 0) {
      str += "Buzz";
  }
  if (i % 7 == 0) {
      str += "Boom";
  }
  
    if (str == "") {
      console.log(i);
      $("#output").append("<p class='num'>" + i);
    } else {
      console.log(str + '!');
      $("#output").append("<p class='text'>" + str + '!');
    }
    
  }
  
  
  
  
  