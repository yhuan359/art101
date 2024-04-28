// Author: Yifeng Huang <yhuan359@ucsc.edu
// Created: 4/26/24

// Define Variables
myTransport = ["Ford Taurus", "bike", "rides from friends", "Lime Scooter"] ;

// create an object for my main ride
myMainRide = {
    make: "Ford",
    model: "Taurus",
    color: "Rusty" ,
    year: 1995,
    // we can define a function within our object (called a method)
    // that uses the value of year above (using this.year)
    age: function () {
        return 2022 - this.year;
    }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>")
// this little trick allows us to to write an object to the document
document.writeln("My Main Ride:<pre>" + 
   JSON.stringify(myMainRide, null, '\t') + "</pre>");