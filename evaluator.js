(function() {
  var testResultsDiv = document.getElementById("test_results");

  // We really should use templates for this, but we haven't learned those yet. 
  var setBlock = function(id, text, status) {
    var element = document.getElementById(id);
    var prefix = status ? "Succeeded: " : "Failed: ";
    var newClass = status ? "succeeded" : "failed";
    var newText = prefix + text;

    if (element === null) {
      element = document.createElement("p");  
      var node = document.createTextNode(newText);
      element.appendChild(node);
      testResultsDiv.appendChild(element);
    }

    element.id = id;
    element.innerHTML = newText;
    element.className = newClass;
  }

  var checkFn = function(fnName, text, checker) {
    if (!window.Solution.hasOwnProperty(fnName)) {
      setBlock(fnName, text, false);
    } else {
      var status = false;
      try {
        status = checker(window.Solution[fnName]);
      } catch (ex) {
        console.log(ex);
      }
      setBlock(fnName, text, status);
    }
  }

  checkFn("simpleFunction", "Return true", function(fn) {
    return fn();
  });

  checkFn("computeSum", "Create a variable", function(fn){
    return fn(7, 6) === 13;
  });

  checkFn("toRadians", "Create a Number variable", function(fn) {
    return Math.abs(fn(180) - 3.14159) <= 0.1;
  });

  checkFn("overflow", "Overflow a Number", function(fn) {
    return fn(9999) === Infinity;
  });

  checkFn("numCheck", "Use isNaN() and isFinite()", function(fn) {
    return fn(NaN) === "x is NaN" 
            && fn(Infinity) === "x is Infinity" 
            && fn(2) === "x is neither NaN nor Infinity"; 
  }); 

  checkFn("doubleQuotesInString", "Use double quotes within string", function(fn) {
    return fn() === 'JavaScript says "Hello World!"';
  });

  checkFn("escapeChar", "Escape a character", function(fn) {
    return fn() === "JavaScript's \"escaping\" is helpful.";
  });

  checkFn("len4Substring", "Compute a substring", function(fn) {
    return fn("JavaScript") === "Java";
  });

  checkFn("makeArray", "Create an array", function(fn) {
    var arr = fn();
    return arr[0] === "Hello!" && arr[1] === 123 && arr[2] === true;
  });

  checkFn("add101AndSort", "Append to array and sort", function(fn) {
    var arr = fn([202, 1]);
    return arr[0] === 1 && arr[1] === 101 && arr[2] === 202;
  });

  checkFn("nullAndUndefined", "Return null and undefined", function(fn) {
    return fn()[0] === undefined && fn()[1] === null; 
  });

  checkFn("makeMathStuff", "Get and set an object property", function(fn) {
    return Math.abs(3.14 - fn({twoPi: 6.28}).pi) <= 0.1;
  });

  checkFn("bracketNotation", "Access a value with bracket notation", function(fn) {
    return fn({"secret value": 10101}) === 10101;
  });

  checkFn("fizzBuzzHelper", "Use a conditional", function(fn) {
    return fn(6) === "Fizz" 
            && fn(30) === "FizzBuzz" 
            && fn(10) === "Buzz"
            && fn(7) === "Normal";
  });

  checkFn("equalsWithoutTypeCoersion", "Avoid type coersion", function(fn) {
    return fn(1, 1) === true && fn(1, "1") === false && fn(1, 2) === false;
  });

  checkFn("isStringOrBoolean", "Use typeof", function(fn) {
    return !fn(1) && fn("1") && !fn(null) && fn(false) && !fn({});
  });

  checkFn("countNumItems", "Write a while loop", function(fn) {
    var i = 0;
    var numRepeats = Math.floor(Math.random()*100);
    var hasMoreItems = function() {
      return i++ < numRepeats;
    }
    return fn(hasMoreItems) === numRepeats;
  });

  checkFn("sumOfSquares", "Write a For-loop", function(fn) {
    return fn(10, 13) === 534;
  });

  checkFn("mutation", "Mutate objects and array", function(fn) {
    var res = fn();
    return res.pi === 3.14159 && res.primesLessThan10[res.primesLessThan10.length - 1] === 7;
  });

  checkFn("globalVar", "Make a global variable", function(fn) {
    fn();
    return areGlobalsBad;
  });

  checkFn("fibonacci", "Write a function", function(fn) {
    var prev = 0;
    var prevPrev = 1;
    var fib;
    for (var n = 1; n < 10; n++) {
      fib = prev + prevPrev;
      prevPrev = prev;
      prev = fib;
      if (fn(n) !== fib) {
        return false;
      }
    }
    return true;
  });

  checkFn("thrice", "Write a functional", function(fn) {
    var i = 0;
    var incI = function() { i++; }
    fn(incI);
    return i === 3;
  });

  checkFn("ntimesMaker", "Return a function", function(fn) {
    var i = 0;
    var incI = function() { i++; }
    fn(10)(incI);
    return i === 10;
  });

  checkFn("checkFn", "Final functional", function(fn) {
    var obj = {
      "doubler": function(x) { return x * 2; },
      "badDoubler": function(x) { return x; }
    }
    var doublerSucceeded = false;
    var badDoublerSucceeded = true;
    var doublerCheck = function(fn) {
      return fn(2) === 4;
    } 
    fn(obj, "doubler", doublerCheck, function(result) {
      doublerSucceeded = result;
    });
    fn(obj, "badDoubler", doublerCheck, function(result) {
      badDoublerSucceeded = result;
    });
    return doublerSucceeded && !badDoublerSucceeded;
  });
})();