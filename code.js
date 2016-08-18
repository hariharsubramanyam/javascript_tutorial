(function() {
  var thrice = function() {};
  var fibonacci = function() {};
  var ntimesMaker = function() {};
  var checkFn = function() {};
  // DO NOT MODIFY ABOVE.


  // Exercise 0:
  //
  // Below is the code for creating a JavaScript function.
  // Fill it in so that it simply returns the boolean literal: true.
  function simpleFunction() {
    // YOUR CODE HERE
  }


  // Exercise 1:
  // 
  // You can create a variable in JavaScript using var.
  // var <variable_name> = <variable_value>;
  // Create a variable called mySum that holds the sum of x and y.
  var computeSum = function(x, y) {
    // YOUR CODE HERE

    // DO NOT MODIFY BELOW
    return mySum;
  }

  // Exercise 2a:
  //
  // JavaScript doesn't distinguish between integers and floating point
  // numbers. There is a single type called Number.
  // Write a function with a variable called PI set to 3.14159, a Number.
  var toRadians = function(degrees) {
    // YOUR CODE HERE

    // DO NOT MODIFY BELOW
    return (degrees / 180) * PI;
  }

  // Exercise 2b:
  //
  // Like in other programming languages, JavaScript numbers can overflow.
  // Try to make x^power overflow.
  var overflow = function(x) {
    // YOUR CODE HERE

    // DO NOT MODIFY BELOW
    return Math.pow(x, power);
  }

  // Exercise 2c:
  //
  // JavaScript has a special value called NaN (not a number). We detect
  // it with the isNaN() function. 
  // It also has a special value called Infinity, which we can detect with
  // isFinite() (however isFinite(NaN) returns true, so watch out).
  //
  // Call isNaN() and isFinite() below.
  var numCheck = function(x) {
    // YOUR CODE HERE

    // DO NOT MODIFY BELOW
    if (xIsNaN) {
      return "x is NaN";
    } else if (!xIsFinite) {
      return "x is Infinity";
    } else {
      return "x is neither NaN nor Infinity";
    }
  }

  // Exercise 3a:
  //
  // A string is enclosed in single quotes, like 'Hello world!'
  // or double quotes, like "Hello world!".
  //
  // Write a function that returns the string
  //  JavaScript says "Hello World!"
  var doubleQuotesInString = function() {
    // YOUR CODE HERE
  }

  // Exercise 3b:
  //
  // You can escape a character in a string by using the
  // backslash character. Try returning the string
  //  JavaScript's "escaping" is helpful.
  var escapeChar = function() {
    // YOUR CODE HERE
  }

  // Exercise 3c:
  //
  // JavaScript strings support useful operations like length,
  // indexOf, and substring.
  //
  // Given string str, return the length 4 substring beginning at index x. 
  // See: http://www.tutorialspoint.com/java/java_string_substring.htm
  var len4Substring = function(str, x) {
    // YOUR CODE HERE
  }

  // Exercise 4a:
  //
  // JavaScript arrays are enclosed in square brackets [].
  // They can hold items of different types. Return an array
  // containing the values "Hello!", 123, and true.
  var makeArray = function() {
    // YOUR CODE HERE
  }

  // Exercise 4b:
  //
  // JavaScript arrays can change size and they provide useful functions.
  // Add the value 101 to the array arr and then sort it.
  //
  // See: 
  // http://www.w3schools.com/jsref/jsref_sort.asp
  // http://www.w3schools.com/jsref/jsref_push.asp
  var add101AndSort = function(arr) {
    // YOUR CODE HERE
    
    // DO NOT MODIFY BELOW
    return arr;
  }

  // Exercise 5:
  //
  // JavaScript has two keywords called null and undefined.
  // null is a special value, while undefined indicates
  // that a variable is declared but has not been assigned a value.
  //
  // Make a variable called undefinedVar that is undefined.
  // Make another variable called nullVar that has value null.
  var nullAndUndefined = function() {
    // YOUR CODE HERE

    // DO NOT MODIFY BELOW
    return [undefinedVar, nullVar];
  }

  // Exercise 6a:
  //
  // JavaScript has dynamic objects to which you can add properties.
  // You can get or set these properties with "dot" notation:
  //
  // myObject.myProperty
  //
  // Properties can be simple, like numbers and strings. They can also be
  // functions and even other objects!
  //
  // In the function below, set a property on mathStuff called pi which is equal
  // to half of the twoPi property of the function argument.
  var makeMathStuff = function(arg) {
    // Make object.
    var mathStuff = {};

    // Set some properties.
    mathStuff.e = 2.718;
    mathStuff.is4Prime = false;
    mathStuff.famousMathematician = "Pythagoras"; 
    mathStuff.square = function(x) {
      return x * x;
    }
    mathStuff.origin = [0, 0];
    // DO NOT MODIFY ABOVE

    // YOUR CODE HERE
    

    // DO NOT MODIFY BELOW
    return mathStuff;
  }

  // Exercise 6b:
  //
  // Above, we saw how to access properties using "dot" notation.
  // However, JavaScript also lets you access properies using "bracket"
  // notation, which is like how we index arrays.
  //
  // myObject[myProperty]
  //
  // Above, myPropery has to be a string. This notation is helpful
  // when the property name has a space character in it.
  //
  // Below, return the value of the "secret value" property of 
  // the function argument.
  var bracketNotation = function(arg) {
    // YOUR CODE HERE
  }

  // Exercise 7:
  //
  // if-else statements in JavaScript resemble what you saw in Java.
  //
  // if (condition1) {
  //   // Do stuff...
  // } else if (condition2) {
  //   // Do other stuff...
  // } else {
  //   // Do other "other stuff"
  // }
  //
  // In the function below, return "Fizz" if x is a multiple of 3, "Buzz" if it is a multiple of 5
  // and "FizzBuzz" if it is a multiple of both 3 and 5. If it is a multiple of neither 3 nor 5,
  // return "Normal".
  //
  // You may find the modulus operator % useful:
  // https://msdn.microsoft.com/en-us/library/9f59bza0(v=vs.94).aspx
  var fizzBuzzHelper = function(x) {
    // YOUR CODE HERE.
  }

  // Exercise 8:
  //
  // There are two ways to check equality in JavaScript: == and ===.
  // There are two ways to check inequality as well: != and !==.
  // 
  // x === y (or x !== y) is what you should be using. This checks if
  // x and y contain the same (or different, in the case of !==) values.
  //
  // If you do x == y (or x != y) will use type coersion, where it will
  // try transforming x and y into the same type before comparing them.
  //
  // Fix the function below so that it does not use type coersion.
  var equalsWithoutTypeCoersion = function(x, y) {
    // FIX LINE BELOW
    return x == y;
  }

  // Exercise 9:
  //
  // You may have noticed above that we've never written the types of our variables.
  // That's because JavaScript is dynamically typed. If you want to know the type of 
  // a variable, use the typeof operator.
  //
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  //
  // Fill in the function below so that it returns true only if x is either a string or
  // boolean. You may find the boolean operator || (meaning "or"), useful:
  // http://www.w3schools.com/js/js_comparisons.asp
  var isStringOrBoolean = function(x) {
    // YOUR CODE HERE

  }

  // Exercise 10a:
  //
  // JavaScript has while loops which take the form:
  //
  // while (condition) {
  //   // do stuff.
  // }
  //
  // The function below receives ANOTHER function called hasMoreItems as an argument
  // (passing functions around is a cool JavaScript feature that we'll learn a LOT about in class).
  //
  // Create a while loop that counts how many times hasMoreItems() returns true.
  var countNumItems = function(hasMoreItems) {
    // YOUR CODE HERE
  }

  // Exercise 10b:
  //
  // JavaScript also has for-loops. They take the form:
  //
  // for (<initial condition>; <condition>; <update>) {
  //   // Do stuff.
  // }
  // 
  // So, looping the value i from 0 to n-1 in increments of 1 would be:
  // for (var i = 0; i < n; i++) {
  //   // Do stuff.
  // }
  //
  // In the function below, compute the sum of squares of the integers in the interval 
  //  [inclusiveLower, inclusiveUpper]
  // where inclusiveLower and inclusiveUpper are both integers 
  // with inclusiveUpper > inclusiveLower.
  //
  // In class, we'll learn about the map(), filter(), and reduce() functionals. 
  //  (functional = function that accepts another function as an argument, 
  //      more on that later in class),
  // These three are great tools for iterating over collections. When you learn them, you won't
  // be using for-loops much, if at all.
  var sumOfSquares = function(inclusiveLower, inclusiveUpper) {
  }

  // Exercise 11:
  //
  // JavaScript numbers, strings, and booleans are immutable.
  // JavaScript arrays and objects ARE mutable however.
  // 
  // In the function below, "an evildoer" has redefined mathStuff.pi as -3.14159,
  // please redefine it as 3.14159. They have also removed 7 from the list of primes below 10,
  // please put it back at the end of the array. Do not erase the code of the "evildoer".
  //
  // See: http://www.w3schools.com/jsref/jsref_push.asp
  var mutation = function() {
    var mathStuff = {};
    mathStuff.pi = 3.14159;
    mathStuff.primesLessThan10 = [2, 3, 5, 7];
    
    // An "evildoer" comes along...
    mathStuff.pi *= -1;
    mathStuff.primesLessThan10.pop();

    // DO NOT MODIFY ABOVE

    // YOUR CODE HERE

    // DO NOT MODIFY BELOW
    return mathStuff;
  }

  // Exercise 12:
  //
  // If you omit the var keyword, a variable is made globally accessible.
  // This should be avoided because global variables can be mistakenly
  // accessed from other files - this is hard to debug.
  //
  // In the function below, create a global variable called areGlobalsBad and Given
  // it the value true.
  var globalVar = function() {
    // YOUR CODE HERE
  }

  // Exercise 13a:
  //
  // Now let's talk about functions. Based on the examples you've seen above,
  // can you create a function called fibonacci which accepts an argument n 
  // and returns the nth Fibonacci number (n > 0). 
  // The first few Fibonacci numbers are shown below:
  // 
  // n = 1, fibonacci(n) = 1
  // n = 2, fibonacci(n) = 1
  // n = 3, fibonacci(n) = 2,
  // n = 4, fibonacci(n) = 3,
  // n = 5, fibonacci(n) = 5,
  // n = 6, fibonacci(n) = 8,
  // n > 6, fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
  //
  // Although it's more efficient to implement fibonacci iteratively, please implement
  // this function recursively.
  //
  // Notice that we aren't giving you a template for the fibonacci function, 
  // you'll need to write it.

  // YOUR CODE HERE

  // Exercise 13b:
  //
  // Now we'll look at a more interesting type of function called a functional.
  // A functional is a function that takes ANOTHER function as an argument.
  //
  // Below, define a function called thrice(fn), which executes the given argument 
  // (a function called fn), three times. Again, we won't give you any template for this.

  // YOUR CODE HERE

  // Exercise 13c:
  //
  // This time, make a function called ntimesMaker(n) that RETURNS a function that
  // ACCEPTS a function called fn and executes fn() n times. So, for example:
  //
  // var thrice = ntimesMaker(3);
  // thrice(fn) // Executes fn() 3 times.
  //
  // This will require you to define a function inside ntimesMaker and return that function.

  // YOUR CODE HERE
  

  // Exercise 14:
  //
  // To wrap up, you'll create something very close to code that has been used to check your
  // solutions so far. It will be a function called checkFn(obj, fnName, checker, resultHandler).
  //
  // Arguments: 
  //    obj -> An object with a bunch of properties (like the window.Solution object below).
  //    fnName -> The name (string) of a function (like "simpleFunction" in the object below) that
  //                is a property of obj.                  
  //    checker -> A function that accepts a single function argument and returns true or false
  //                  (we use this to check your solution against our test
  //                    cases and return true if your solution gives the right answer).
  //    resultHandler -> A function that should be called with the result from the checker
  //                      (we use this to update the UI based on whether your solution was correct)
  //
  // Here's what you need to do: read the fnName property of obj, this will be a function. Pass that
  // function to checker and execute checker. Pass the result of this execution to resultHandler and
  // execute resultHandler.

  // YOUR CODE HERE
  

  
  // DO NOT MODIFY BELOW.
  window.Solution = {
    "simpleFunction": simpleFunction,
    "computeSum": computeSum,
    "toRadians": toRadians,
    "overflow": overflow,
    "numCheck": numCheck,
    "doubleQuotesInString": doubleQuotesInString,
    "escapeChar": escapeChar,
    "len4Substring": len4Substring,
    "makeArray": makeArray,
    "add101AndSort": add101AndSort,
    "nullAndUndefined": nullAndUndefined,
    "makeMathStuff": makeMathStuff,
    "bracketNotation": bracketNotation,
    "fizzBuzzHelper": fizzBuzzHelper,
    "equalsWithoutTypeCoersion": equalsWithoutTypeCoersion,
    "isStringOrBoolean": isStringOrBoolean,
    "countNumItems": countNumItems,
    "sumOfSquares": sumOfSquares,
    "mutation": mutation,
    "globalVar": globalVar,
    "fibonacci": fibonacci,
    "thrice": thrice,
    "ntimesMaker": ntimesMaker,
    "checkFn": checkFn
  }
})();