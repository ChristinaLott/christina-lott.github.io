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
//(7, 2) -> []
var range = function(x, y, arr = []) { //added a default parameter, with the array literal
  //base ...when we stop and what value we may need to return
  if(x + 1 === y || x === y){ //need to see if x is actually a number BELOW y, so add 1 to it and see if === y
    return arr;               //if x === y on its own, then there is no range so just return the array
  } else if (x - 1 === y){
    return arr;
  }
  //recursion
  if (x < y){
  arr.push(x + 1); //make sure to put this within the recursion, vs outside of it because there is a condition here
  return range(x + 1, y, arr); //(4, y) ...remember to bring back array, so that the values carry on
} else if (x > y){
  arr.push(x - 1);
  return range(x - 1, y, arr);
}

// if (x - y === 0) {
//   return [x];
// } else if (x <= y) {
//   var numbers = range (x, y - 1);
//   arr.push(y);
//   return arr;
// }

     //should work if x is LESS than y, countup
    //should work on if x is GREATER than y, countdown
  
}
  //in your return range
  // try doing x, y -1
  // and change the first else if to x <= y


  //need to get this to work for negative numbers and ranges that are the same x and y
    //probably need conditional

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




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
if(exp === 1){//counting down number of exp remaining, when get to 1 return base to finish recursion
  return base;
} else if (exp === 0){ 
  return 1;
}
  //recursion
 if(exp < 0){
   return 1/base * exponent(base, exp + 1).toFixed(4); //works on negs because dividing...? multipling a negative number gives a positive...the test is looking for few numbers after the decimal, which .toFixed handles by limiting # of places after decimal
 } else {
  return base * exponent(base, exp - 1); //have base times the recursion if a whole positive integer
  }
}

  //somehwere .toFixed should be used  to accomodate less decimal numbers
//-1 numbers in exponents = turning it into a fraction, multiplied by however many times the exponentional numbers is
//compute negative and non negative integers
//return 1 when exponeent === 0
//returns base when exponent === 1, so stop



// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
if(n === 1){    //16/2=8, 8/2=4, 4/2=2...then it ends at 1, so a power of 2
  return true;
} else if (n < 1) { //but if it's not a power of two then the last recursion will come back as less than 1, so NOT a power of two
  return false;
}
  //recursion
return powerOfTwo(n / 2); //not sure why can't reach code...probably because activating base right off the bat...
};
  
  //Refresh on powers of two mathings...maybe like squaring?
  //return a boolean
    //return true for powers of two




// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, outputStr = "") { //I added default of outputStr
  //base
if(string.length === 1){ //or maybe string === "";
  return string;
}
  //recursion
  outputStr += string[string.length - 1]; //need to call upon default str to keep it and use
  return outputStr + reverse(string.slice(0, - 1)); //use negative number to go backwards
};

  //return a string in reverse
    //can use .length - 1 because also works on strings 0th index "list"
    //can also use .slice on the string
  //use nothing fancy

  //could either use a default string or have the string itialized in the recursion return
      //would need to return/call upon 
  //can i use the index within the string...? or split?
  //my example: input of "christina" -> to output of "anitsirhc"
    //""
    //"a"
    //"an"
    //"ani"
    //"anit"
    //"anits"
    //"anitsi"
    //"anitsir"
    //"anitsirh"
    //"anitsirhc" <-what I want to return/so base case


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
string = string.toLowerCase().split(" ").join(""); // making case insensitive, then splitting up all the words at the spaces, then REjoining them without the spaces
  //base
  if (string.length <= 1){
return true;
} else if(string[0] != string[string.length - 1]){ //how we compare index 0 and the last index
return false;
} 
  //recursion   //give me everything from index 1 UNTIL/END BEFORE the last index      
                                                       //0123456   -> acoca < - snatching the inside
return palindrome(string.slice(1, string.length - 1)); //TacocaT...when goes through at first looks at the start and end characters in the base. Then rolls through 
};
  //ex: tacocat = palindrome

  //palindromes: read the same backwords
    //string === string in reverse?
  //return a boolean
    //return true for palindromes
    //return false if not
    //ignore spaces and capital letters - so make case insenitive...not sure about spaces

  //think this might use the above reverse string recursion to see if the outputStr === old string...but wait that requires taking letters out
  //think I should make two outputStr? that way one can hold a copy of the string input to compare against if it ends up with the recursive string being the same backwards?



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
 if(x < 0 && y < 0){
   x = -x;
   y = -y;
 }


 if (x === 0 || y === 0){
   return 0;
 } else if (y === 1 || y === -1){
   return x;
 }
  
var helperCountDownToBase = y > 0 ? y - 1 : y + 1;

if (x > 0 && y > 0 || x < 0 && y > 0){
  return x + multiply(x, helperCountDownToBase);
} else if (x > 0 && y < 0){
  return x - multiply(x, helperCountDownToBase);
}
};

//now getting 0 from -275, -502 being ran in the test. Failing at test 3 subtest 5
  //remember can't use complex math...need to somehow account for the mathatical need to have - time - = +
  //maybe if check if both signs are negative then < 0 ...somehow change to positive...

// if (x > 0 && y > 0|| x < 0 && y < 0){
//   return x + multiply(x, helperNeg);
// } else if (x < 0 || y < 0){
//   return x - multiply(x, helperNeg);
// }

//2+2
//  -2 + -2 + -2
//use addition and subtraction to get the effects of multiplication, can not use * or /
//return a number
//if(exp < 0){
 // return 1/base * exponent(base, exp + 1).toFixed(4); //works on negs because dividing...? multipling a negative number gives a positive...the test is looking for few numbers after the decimal, which .toFixed handles by limiting # of places after decimal
//} else {
 //return base * exponent(base, exp - 1); //have base times the recursion if a whole positive integer
 //}



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
  //base
if(str1.length <= 1 && str2.length <= 1){ //checking if at the last character to know when to stop
  if(str1[0] === str2[0]){ //if at the last character checking if the characters are the same at index 0
  return true; //if both ifs are met then we know that the strings are identical
  }
}
  //recursion
if(str1[0] === str2[0]){ //not sure how to tell it to check for matching empty strings...doing === "" for both did not work here
  return compareStr(str1.slice(1), str2.slice(1)); //just adding the recursion, has no edits yet
  }
if(str1[0] != str2[0]){ //str1 === undefined || str2 === undefined, removed this because not test relevant here, but helpful in actual coding. Here could break test because not checking in base for undefined, error: "can not read length of undefined" Undefined has no length
  return false;
  }
};

//tried to add [length - 1] to rule out if not the same length...but still having the same issue

  //compare each character of two strings
  //returns a boolean
    //true for identical strings, false if not

  //go through each index of both of the strings?
  //roll through them until reach their length/end
  //make the false statement first? so have it check if any characters are index are not strictly equal kick out false
  



// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, outputArr = []){ //added a default array...eeeh
  //base
if(str.length === 0){
  return outputArr;
}
  //recursion
  outputArr.push(str.slice(0, 1)); //0, 1 basically is GIVE ME from 0 to 1 that thing. And just .slice(1) means give me EVERYTHING after index 1
  //or could do: outputArr.push(str[0]);
  return createArray(str.slice(1), outputArr); //lost on how to get this to actually pull each letter
};


  //returns an array from a string
    //in array each index is a letter of the string
  
    //my example: input of "wazzup" -> ["w", "a", "z", "z", "u", "p"]
      //convert the string into an array
      //split up each part of the string by letter
      //base when at end of string/string is empty?...think I need to probably manually pull each letter out

// 17. Reverse the order of an array
var reverseArr = function (array, outputArr = []) {
//base
if(array.length === 0){
  return outputArr;
}
//recursion
outputArr.push(array.pop());
return reverseArr(array, outputArr); 
};

  //return an array
    //reversed order
  //could probably pop each item off into a new array...don't think that actually worked? not sure how to do
  //stop once given array is emptied



// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, outputArr = []) {
  //base
if(length === 0){
  return outputArr;
}
  //recursion
  outputArr.push(value);
  return buildList(value, length - 1, outputArr); //remember to include the output array so can keep collecting in it
};

  //return an array
    //array should have given length with given value at each index
        //think I can count down from the 2nd num that tells how many needed of 1st num
        //each occurance put into an empty default array
        //push the 1st num into the array as an element, so probably don't use +?




// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, outputCount = 0) {
  //base
  if(array.length === 0){; //need to get to the end of the array by removing the things to get to stop
    return outputCount;
  }
    //recursion
  
  if(array[0] === value){
  outputCount += 1; //I feel like this is the way to count???   
  }
  return countOccurrence(array.slice(1), value, outputCount); //want to keep ahold of whatever variable use
};

  //return a number
    //number should be number of occurances of the value
      //need to look through given array for matches of the given value and then return count
      //maybe create a variable to assign the count to and to keep counting with?
        //if index = value, then push + 1 into outputVar?
        //stop...when at the end of the array


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, outputArr = []) {
  //base
if(array.length === outputArr.length){ //so we stop when the two array's length's match because have gone through completely
  return outputArr;
}
  //recursion
outputArr.push(callback(array[outputArr.length])); // < --- using outputArr as the recursing index number, becaue it's changing with each push
return rMap(array, callback, outputArr);
};

//as move through the recursions, the .length number/property will change as more things are added into that outputArr, 
//therefore, we're just moving along with it
//outputArr is holding values and the index

  //can't use native of map
  //return new array without mutating
  //apply function at every value in array

  
        //map code below
  /**_.map = function(collection, func){
    var outputArr = [];
   if(Array.isArray(collection) === true){
       for(var i = 0; i < collection.length; i++){
        outputArr.push(func(collection[i], i, collection)); //functions evaluate to their RESULT. so can expect that outcome, and therefore slip it into an array
       }
   } else {
        for(var key in collection){
            outputArr.push(func(collection[key], key, collection)); //so like, indexes and keys or whatever kinda work the same because they're both properties in their collections
        }
   }
    return outputArr;
} */



// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};
  //SKIP DO NOT DO

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};
  //SKIP DO NOT DO

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};
  //SKIP DO NOT DO

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};
  //SKIP DO NOT DO

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base
if (n < 0){
  return null;
} else if (n < 2){ //base? n === 0, return 0. n === 1, return 1. or n < 2, return n - because first and second numbers in fibonacci are not the prior sums
  return n; //I think this would bring back the value at n
}
  //recursion
//var fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21];// fibo-1 + fibo-2???
if(n > 0){
  return nthFibo(n - 1) + nthFibo(n - 2); //return the function twice to get two previous terms in the fibonacci sequence
} else {
  return null;
  }
};

//I don't understand how it moves through/counts down from the given n
//https://sebhastian.com/fibonacci-recursion-javascript/

//return the Fibonacci...basically, return the number at n index...wow.
//wait...maybe I need to get it to calculate the fibnoacci to then match with n?
  //Not sure if I should be creating my own array with the fibonacci numbers within it?
    //need to cycle through each index until get to n index and then return value at n index
      //return a number/the number value at n index
      //should return null for negative integers/n
      //start at index 0 and work way up until n === ...
//Fibonacci number is a series of numbers where the two previous numbers are the sum of next number
  //ex: 1, 1, 2, 3, 5, 8



// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, index = 0, outputArr = []) {
  //base
  if(index === input.length){ //stop once have copied all elements into new outputArr
    return outputArr;
  }
    //recursion
    outputArr.push(input[index].toUpperCase());
    return capitalizeWords(input, index + 1, outputArr); //could also do index++ this is so can move through index
};

  //caps every character in an every element in the given array
  //think I need to make sure I've gone through the start [0] of each element until that length
  //then make sure I've gone through the whole length of the array
  //use toUpperCase on them - would I be able to just use this on the element to effect all characters?


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //base
if(array.length === 0){ //stop once given array is empty
return [];
}
  //recursion     //[car, poop, etc] - > helperArr to array[0].split("") - > [c, a, r], pulls 1st index element -> [helper.join("")] -> [Car]
  var helperArr = array[0].split(""); //splits the element at index 0 on the recursion
  helperArr[0] = helperArr[0].toUpperCase(); //then we focus on the first index of that word and caps it
  return [helperArr.join("")].concat(capitalizeFirst(array.slice(1))); //[helperArr.join("")] is an actual array that I've brought back with the string joined/rejoined //the slicing happening here is to remove items from array to meet base
};       //makes an array to work with methods    //concat is concating the rest of the characters BACK ONTO the now caps 1st letter
//

  //take an array and within it caps the index [0] of each element
  //take an array and return an array
  //use toUpperCase on [0]...do I also need to slice(1) in the rest of the word?
  //recourse by moving through each element, [0] and going until reach length - 1?


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
//SKIP

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};
//SKIP

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, outputObj = {}) {
  //base
if(str.length === 0){
  return outputObj;
}
  //recursion
  var firstLetter = str[0];
  outputObj[firstLetter] = outputObj[firstLetter] ? outputObj[firstLetter] + 1 : 1; //asks if outputObj[firstLetter] has a value? if YES: add 1 to existing value. If NO then give key the value of 1.
  return letterTally(str.slice(1), outputObj); //slicing off index 0 to rotate through and then working with the next NEW index 0
};

    //does outputObj have firstLetter? is check we're doing

  //make a string return as an object
    //object contains tallies of each letter - counting
      //my ex: "Christina" -> {C:1, h:1, r:1, i:2, s:1, t:1, n:1, a:1}
    //base the length - 1 of the str? recourse to the next index?
    //is the obj empty? I think I'm gonna assume so, cause I don't want hardcode the indexes...
    //not sure how I would find letter matches AND add their tally where needed...
      //maybe looking if thereis no match, then add that letter to the object as a key
      //should I split up the string? eeeh...


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, outputArr = []) {
  //base
if(list.length === 0){
  return outputArr;
}
  //recursion
  
  if(list[0] != outputArr[outputArr.length - 1]){ //checking if index 0 of the list we're slicing from IS NOT/is falsy IS NOT equal to the LAST element added to outputArr - this is to dodge consecutive duplicates
    outputArr.push(list[0]);
  }
  return compress(list.slice(1), outputArr);
};

  //input an array, output/return an array
  //remove consecutive duplicates...huh
  //don't change elements order
  //maybe use something like seed? compare past value to current, if a match splice/slice it out?


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};
//SKIP!!!!

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, outputArr = []) {
  //base
if(array.length === 0){
  return outputArr;
}
  //recursion
  if(array[0] != 0 || array[0] != outputArr[outputArr.length - 1]){ //pushing in anything that is not zero, after get first zero (letting in ANYTHING that isn't a zero)
    outputArr.push(array[0]);
  }
  return minimizeZeroes(array.slice(1), outputArr);
};


  //need to merge/collapse reoccuring 0's down to one 0
  //takes an array, returns an array
  //perhaps pulling each number from the array and putting into a new array?
    //if number does not exist then add it to new array? else do nothing?
  //base at array's length - 1? --- NAH, base  at .length
  //recourse by checking condition of if number element exists in empty array
  //make a default array, to hold non dup numbers


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, outputArr = []) {
  //base
if(array.length === 0){
  return outputArr;
}
  //recursion
  //(# % 2 === 0) even, else odd        //[the brackets here allow us to work on the ACTUAL array]
if(outputArr.length === 0 || outputArr[outputArr.length - 1] < 0){ //first checking if outputArr is empty, if so push in the number set to positive. OR if the PRIOR number was NEGATIVE, then push in a positive number.
  outputArr.push(Math.abs(array[0]));
} else {
 outputArr.push(-Math.abs(array[0])); //having the negative in front of Math.abs is making sure it's ALWAYS set to negative. If tried to make the array negative and the value was negative already it would then become positive by mathing. Not wanted here
}
  //if(array.length % 2 === 0){

return alternateSign(array.slice(1), outputArr);
};

//read up more on Math.abs - takes a number and always returns the positive. When put a minus in front of it it NOW ALWAYS MAKES A NEGATIVE number

  //change to positive/negative and alternate
  //first number has to be positive
  //change -+ regardless of original sign
  //if [0] make positive?, if even index make negative??? how do I change the sign of a value?


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var obj = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"}; 
  //base
  if(str.length === 0){
  return "";
}
  //recursion
  var arr = str.split(" "); //think I'm off...not sure how to make it a string again and swap number to word
  var firstWord = arr[0];
  if(obj[firstWord]){
    firstWord = obj[firstWord];
  }
 return firstWord + " " + numToText(arr.splice(1).join(" ")).trim();
}

        //** BELOW is a neato way of to work more on the array. Uses concat like in capitalizeFirst. On each
        //recursion was concating the words and then joining with spaces. Inner join puts the full sentence back together
        //with the right amount of spaces, sans first word. Outter join made the final sentence returned without that surplus hanging space */
// var numToText = function(str) {
//   var obj = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"}; 
//   //base
//   if(str.length === 0){
//   return "";
// }
//   var arr = str.split(" "); //think I'm off...not sure how to make it a string again and swap number to word
//   var firstWord = arr[0];
//   if(obj[firstWord]){
//     firstWord = obj[firstWord];
//   }
//   return [firstWord].concat(numToText(arr.splice(1).join(" "))).join(" ");
// }
  //input is a string, return string that converts digits to word version
  //all numbers are < 10, single digits
  //look for numbers and change to word version
    //could I use loosely equals? or should I somehow write out each digit to words?
      //??? 1:one, 2:two, 3:three, 4:four, 5:five, 6:six, 7:seven, 8:eight, 9:nine ???
        //could I add this as a default obj???



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
