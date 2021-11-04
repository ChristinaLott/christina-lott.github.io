// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120


var factorial = function(n) {
  //base
if(n === 1){
  return 1;
} else if (n === 0){ //edge case: how to handle given 0
  return 1;
} else if (n < 0){ //this takes care of negative values
  return null;
}

  //recursion
 return n * factorial(n - 1);
  //      5 * factorial(4)
  //      5 * 4 * factorial(3)
  //      5 * 4 * 3 * factorial(2)
  //      5 * 4 * 3 * 2 factorial(1)
  //      5 * 4 * 3 * 2 * 1 = 120

};

//return 5 * 4 * 3 * 2 * 1



// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

  //need to add/sum up each integer together
  //Base at last value?
  //start at index 0?

var sum = function(array) {
  //base
if(array.length === 0){
  return 0;
}
  //recursion
  return array[0] + sum(array.slice(1));
};



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
    //array.flat() <-- allows you to turn a list of arrays into values

  //need to add/sum up all values within the nested arrays
  //base/end/stop at last value in array??
  //start at index 0??

var arraySum = function(array) {
};


// 4. Check if a number is even.
  //num % 2 = 0 CAN'T USE b/c MODULO//use to see if even
  //If statement?? need to return true or false
  //base/stop when num is 0 or 1??
  //recursion ...by 2?

var isEven = function(n) {
  //base
  if(n === 0){
    return true;
  } else if (n === 1){
    return false;
  }

  //recursion
if(n > 0){ //this is checking if it's a whole integer
  return isEven(n - 2);
} else {
  return isEven(n + 2); //this is checking if it's a negative integer
}
}
    //for even?
    //n = 10 
      // n - 2 = 8
      //reassign n to 8?
        // n - 2 = 6
        //reassign n to 6
          //...
          //n - 2 = 2
          //reassign n to 2
            //n - 2 = 0
            //reassign n to 0 <- 

    //for odd?
    //n = 9
      
      // n - 2 = 1


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
  //add up everything below the < n
var sumBelow = function(n) {
//base
  //return 0 WHEN AT THE END ???
  if(n === 0){
    return n;
  } 
 
//recursion - what do we do when NOT hitting the base case
  if(n > 0){
    return n - 1 + sumBelow(n - 1) //we minus 1 to remove the given number so can work below
  } else {
    return n + 1 + sumBelow(n + 1); //handles any negative values, have to add them to get towards 0
  }
};

  //sumBelow(7)
    //6 + 5 + 4 + 3 + 2 + 1 = 21  || < 7  
      //grab all integers BELOW n(7)
      //ADD/sum all of those integers together
        //STOP before use/count n(7)???
        //STOP at 0???




// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, arr = []) { //added a default parameter, with the array literal
  //base ...when we stop and what value we may need to return
  if(x + 1 === y){ //need to see if x is actually a number BELOW y, so add 1 to it and see if === y
    return arr; 
  }
  //recursion
  arr.push(x + 1); //[4]
  return range(x + 1, y, arr); //(4, y) ...remember to bring back array, so that the values carry on
 
     //should work if x is LESS than y, countup
    //should work on if x is GREATER than y, countdown
  
}


  //need to get this to work for negative numbers and ranges that are the same x and y
    //probably need conditional branching

  //[]
  //[2]
  //[2, 3]
  //[2, 3, 4]
  //[2, 3, 4, 5]

  //output/return is to push/add/unshift to array
    //grab only numbers inbetween x and y
    //return empty array if no integers in range (??) - check test to see what this looks like
    //should work on negatives
    //should work if starting integer/x is greater than y


    //if x < y then count up x + 1
    //if x > y then count down x - 1
    //stop when x = y? or a little before then?




  /**
   * 
   * NOT DONE YET
   * 
   */


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
if(exp === 0){
  return 1;
} else if (exp === 1){ //counting down number of exp remaining, when get to 1 return base to finish recursion
  return base;
}
  //recursion
 return exponent(base + base, exp - 1); //have base add upon itself until reach exp?
};

//-1 numbers in exponents = turning it into a fraction, multiplied by however many times the exponentional numbers is
//compute negative and non negative integers
//return 1 when exponeent === 0
//returns base when exponent === 1, so stop


/**
 * 
 * NOT DONE YET...it doesn't seem to be even working on positive integers...not sure what's happening. Think issue is with recursion
 * 
 */


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
if(n === 0){
  return true;
} else {
  return false;
}
  //recursion
return powerOfTwo(n % 2); //not sure why can't reach code...probably because activating base right off the bat...
};
  
  //Refresh on powers of two mathings...maybe like squaring?
  //return a boolean
    //return true for powers of two


/**
 * NOT DONE YET
 * 
 */


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base

  //recursion

};

  //return a string in reverse
  //use nothing fancy

  //can i use the index within the string...? or split?


/**
 * NOT DONE YET 
 * 
 * */

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base

  //recursion

};

  //palindromes: read the same backwords
    //string === string in reverse?
  //return a boolean
    //return true for palindromes
    //return false if not
    //ignore spaces and capital letters - so make case insenitive...not sure about spaces




/** 
 * NOT DONE YET
 * 
 */

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

//SKIP! Has been blued out! Do not have to do!!!

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  2+2
  -2 + -2 + -2
};


//use addition and subtraction to get the effects of multiplication, can not use * or /
//return a number


/**
 * 
 * NOT DONE YET
 * 
 */

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};
//SKIP! DO NOT DO! IN BLUE

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};
//SKIP! DO NOT DO! IN BLUE

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

  //returns a boolean
    //true for identical strings


  /**
   * 
   * NOT DONE YET
   * 
   */  

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
};

  //returns an array
    //in array each index is a letter of the string
  

   /**
   * 
   * NOT DONE YET
   * 
   */ 

// 17. Reverse the order of an array
var reverseArr = function (array) {
};

  //return an array
    //reversed order


  /**
   * 
   * NOT DONE YET
   * 
   */

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

  //return an array
    //array should have given length with given value at each index


/**
   * 
   * NOT DONE YET
   * 
   */


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

  //return a number
    //number should be number of occurances of the value


/**
   * 
   * NOT DONE YET
   * 
   */

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

  //can't use native of map
  //return new array without mutating
  //apply function at every value in array


  /**
   * 
   * NOT DONE YET
   * 
   */

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
