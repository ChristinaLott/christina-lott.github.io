// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
        //need to return true if a value is an array
            //tricky because array's are classified as an object
        //use method Array.isArray(varNameHere) to identify if an array, returns a boolean
    
       return (Array.isArray(value));
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
        //need to discern if value is a collection/collects key value pairs {}
        //need to get a boolean response of either true or false
        //so we're checking that different conditions are NOT true
            //if the typeof is an object
                //AND NOT equal to null
                //AND NOT equal to an array
                //AND NOT equal to a date

        if (typeof value === "object" && value !== null && Array.isArray(value) !== true && !(value instanceof Date)){
            return true;
        } else {
            return false;
        }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
        //want to know if input value is an array OR and object with boolean response
        //return a boolean of either true or false
        //REMEMBER that once a return is able to be hit, it will stop, so having the right order is crucial!
    if (Array.isArray(value) === true || typeof value === "object" && value !== null && !(value instanceof Date)) {
        return true;
    } else {
        return false;
    }
 
    /**
     * NOT DONE YET...I'm not sure why this does't work...maybe I need to break it out?
     */
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
        //will need a conditional statement, need to section off objects - cause array, null, etc. are labeled as objects
        //first assign values to everything NOT an object, use typeof to discern that AND to bring back string name of typeof data
        //second use Array.isArray to identify if an array
        //third see if typeof is an object, that it is NOT an array, that it's NOT null, AND NOT a date
            //do all of the above to rule out other objects, to get back the collection object
        //fourth see if it's null
        //if none of the above then it's date
    
        if (typeof value !== "object"){
        return typeof value;
    } else if (Array.isArray(value) === true){
        return "array";
    } else if (typeof value === "object" && Array.isArray(value) !== true && value !== null && !(value instanceof Date)){
        return "object";
    } else if (value === null){
        return "null";
    } else {
        return "date";
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
