// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    return string.length

    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
        //make string/value lowercase
            //make string/value have dashes between words
    string = string.toLowerCase();  //test is looking for this, even though not explicit     
    string = string.split(" ").join("-");
    return string;
    /*string = string.split(" "); 
    *string = string.join("-"); this works too, though basic */
        // return(string.replace(/\s+/g, "-")); this works, but I don't get why just putting " " instead of the pattern for space doesn't
            //regular expression / and / marks begining and end of pattern, \s+ matches one space charcter, g to search all occurances of pattern in string
                //return string(string.replace(" ", "-")); DOES NOT WORK like the above does

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
        //input is a string and a single character
        //need to return a boolean of true if string starts with the character
        //use indexing? so like if the index 0 of the string = the single character
        //it's a string, need to get to the specfic parts of it with indexing
   
        /*string = string.toLowerCase(); 
        *char = char.toLowerCase(); this works too, but is breaking up the below step by step */
    return string[0].toLowerCase() === char.toLowerCase();

//indexing is always bracket notation! Can't use dot notation

    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
        //same as above except accessing the last index
        //need to COMPARE char against last index to see if they're the same
        //need to also change the case of both given parameters
        /*string = string.toUpperCase();
        *char = char.toUpperCase(); this also works, just breaking up the steps below */
        
        return string[string.length - 1].toUpperCase() === char.toUpperCase();
        
        //can NOT use .length - 1 with just dot notation, need to use bracket notation


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
        //combine two strings into one
            //use the + sign also known as an operator t o concatenate
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}


/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
        //concatenate all given strings with NO spaces
        //use .join method on the given array that is collecting the strings
                
       return args.join("");


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
        //input two strings, output the longest string
        //compare string length? 

   var longestStr = (stringOne.length > stringTwo.length) ?  stringOne: stringTwo;
    return longestStr;

        //don't need if when using ternary 
        
        /*
        *
        * NOT DONE YET */


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
        //input two strings, return a number value of either 1, 0, -1
            //if first string higher alphabetically return 1
                //if second string is higher return -1
                    //if both strings are equal return 0
                        //comparing the first index of 0 between two strings
                            //need to figure out how compare order of alphabets
            /*
            *
            *NOT DONE  YET */


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
        //doing the same as above, but in reverse
            //input given two strings
                //output number value based upon comparison of the strings
                    //if first string is lower in alpha order return 1
                        //if the second is lower in alphabetical order than return -1
                            //return 0 if they two strings are equal 
        /*
        *
        * NOT DONE YET */


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
