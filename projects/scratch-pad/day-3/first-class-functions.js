// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
        //testing against a base (input) that can either be a string or number
        //RETURN a FUNCTION
        //the function needs to test if a GIVEN VALUE is greater than the base
        //this test should work with both a string and a number
            //(value) > base
    function testGreaterThan(value){
        var greaterTest = value > base
        return greaterTest;
    }
    return testGreaterThan;
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
        //return a function
        //function needs to test against input base if given value is < base
    
    function testLessThan(value){
        var lessTest = value < base;
        return lessTest
    }
    return testLessThan;
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
        //RETURN a FUNCTION
        //Function tests if given string starts with the startsWith single character
            // givenStr[0] === startsWith 
    function testStartsWith(string){
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }
    return testStartsWith;

        //remember  to include () for the code block for .toLowerCase
        //probably better practice would be to make new vars to assign the .toLowerCase updates to and then work with the new vars 
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
        //need to compare endsWith to string.length - 1
        //return a function
    function testEndsWith (string){
        var newStr = string.toLowerCase();
        var endsWithLowerCase = endsWith.toLowerCase();
        if (newStr[newStr.length - 1] === endsWithLowerCase){
            return true;
        } else {
            return false;
        } 
    }
    return testEndsWith;
    
    /* Okaaay...so I tried at first to use dot notation to use .length - 1. That doesn't do a thing
    *Instead I had to use bracket notation
    *the bracket notation for .length - 1 is whateverDaHeck[whateverDaHeck.length - 1]
    *so I think how this works is that you tell it the thing to look at, 
    *then remind it about the thing looking at and plop .length - 1 on it...
    * so it knows to return a value */
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
        //input [array of strings] && a function to modify a string
        //RETURN [the array of the strings], but modified
            //what kind of modification do we need to do? check the tests?
        //looping over the array of strings; need to collect their looped values in something
    
    var outputArr = [];
        for (var i = 0; i <= strings.length - 1; i++){
            outputArr.push(modify(strings[i]));
        }
        return outputArr;
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
        //input Array of Strings
        //use function given to test string in some way
        //RETURN a boolean - true if ALL strings pass the test
       // var testResult = []; //does it actually even need a container?
    for (i = 0; i < strings.length; i++){
       // testResult.push(test(strings[i])); //passing looped values to the test?
        if(test(strings[i]) === false){
          return false;
        }
    }
        return true;
    /**
     * NOT DONE YET..followed exmaple but unclear why failing...
     */
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
