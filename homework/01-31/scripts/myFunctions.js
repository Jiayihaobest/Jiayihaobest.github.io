
            var num = 10;

            // Printing command: displays/prints the value of a variable
            console.log(num);

            // Arithmetic operations
	    // https://www.w3schools.com/js/js_arithmetic.asp
            var addition = num + 10;

            num = num + 10;

            console.log(num);

            // Arithmetic operations within you return function of log
            console.log(num + 10);

            // Concatenation of strings of symbols
	    // https://www.w3schools.com/js/js_strings.asp
	    // https://masteringjs.io/tutorials/fundamentals/string-concat
            var name = "ARTG";

            console.log(name + " 5330");

            // Boolean values: True or False, Yes or No, 1 or 0
	    // https://www.w3schools.com/js/js_booleans.asp

            // Let's check if num is bigger (>) or smaller (<) than another value
            var isBigger = num < 100;

            console.log(isBigger);

            // Increment operator
            var i = 1;
            i--; // shortcut for increasing value by one

            console.log(i);

            // Initializes an array called users, which has 4 items
            // Array data types are 0-indexed.
	    // https://www.w3schools.com/js/js_arrays.asp
            var users = ["Northeastern", 10, "ARTG", 100];

            console.log(users[0]);

            // This is a JavaScript Object which consists of name:value pairs
	    // and values can also be functions.
	    // https://www.w3schools.com/js/js_objects.asp
	    // https://www.w3schools.com/js/js_functions.asp
            var newObject = {
                name: "Holmes Building",
                color: "Green",
                street: "Huntington Avenue 700",
                zip: 53719,
                greetings: function(name) {
                    console.log("Hey " + name + "!")
                }
            };

            console.log(newObject.greetings("Alex"));

            // Working with functions
	    // https://www.w3schools.com/js/js_functions.asp

            //A function without an input variable
            var printHello = function(){
                console.log("Hello, world!");
            }

            printHello();

            //A function without with a string input
            var printName = function(name) {
                console.log("Hello " + name);
            }

            printName("Sir");

            // A function with a numerical return value
            // Note: Do not add any lines after the return statement.
            // The code after the return statement will not be read,
            // and it will be considered an unreachable statement.
            var addValues = function(val1, val2) {
                // Add two values
                let sum = val1 + val2;
                // Return their sum
                return sum;
            }

            var mySum = addValues(10, 10);

            console.log(mySum);

            var expValues = function(val) {
                // Exponentiates the given value using 2 (I.e., squares val)
                let exp = val**2;
                // Return their sum
                return exp;
            }

            var myExp = expValues(10);

            console.log(myExp);

            // Conditional Statements are if/else statements
	    // https://www.w3schools.com/js/js_if_else.asp
            var condVal = 12;
            if (condVal <= 10) {
                console.log("This is not so bad.");
            } else if (condVal == 15) {
                console.log("This is bad.");
            } else {
                console.log("I don't know what to do.");
            }

            // Combine functions with conditional statements
            function greaterThanTen(val) {

                if (val > 10) {
                    console.log("Yes!");
                } else if (val == 10){
                    console.log("No!");
                } else {
                    val++;
                }

                console.log(val);
                return val;
            }

            var checker = greaterThanTen(100);
            console.log(checker);

	    // Solutions for In-Class Coding Problems (see page 14 of Week 3 slides)
            // Return square root
            function returnsSq(val) {
                if (isNaN(val)) {
                    console.log("Not a number.")
                } else {
                    return Math.sqrt(val);
                }
                // a function without a return will
                // print "undefined" in the console
            }

            // prints the square root of 9
            console.log(returnsSq(9));

            // Return all numbers from an input value all the way down to 0; 
            // Check if the input is a number and is greater than 0
            function decreasing(val) {
                if (isNaN(val)) {
                    console.log("Not a number.");
                } else {
                    // There are a few different ways to implement this.
                    // The following is a simple implementation with a for loop

                    for (let i=val; i >= 0; i--) {
                        console.log(i);
                    }
                }
                // a function without a return will
                // print "undefined" in the console
            }

            // prints all numbers from 10 to 0 
            console.log(decreasing(10));

 function sumAB(A,B) {
    return A+B;

 }
 function randomPosition() {

    return Math.random() * 140 + 70;
 }

