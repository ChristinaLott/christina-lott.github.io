// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
    //input is an array
    //look forward -> through that array
    //print its values to console.log()


  for (var i = 0; i <= array.length - 1; i++){
    console.log(array[i]);
  }

    //refresher needed on why it's bracket notation instead of ()
    //REMEMBER to do <= otherwise if just do < it'll stop BEFORE the last element in the array

  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
    //input is an array
    //loop backwards/reverse over array
    //print values to console.log()
  
  for (var i = array.length - 1; i >= 0; i--){
  console.log(array[i]);
  }

  
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    return Object.keys(object);
    
    //so Object.keys is a method. Remember to make keys plural
    //to use Object.keys use the method name and then put in para the name of the object working with/the parameter if in a function
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    //input is an object
    //loop over the object
    //print its keys

  for (var key in object){
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    //input is an object
    //want to return an array of the values

    return Object.values(object);

    //this method grabs the values and puts them into an array

  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
      //given input of an object
      //loop over the object, use for-in loop
      //to PRINT its VALUES to console.log

  for (var key in object){
    console.log(object[key]);
  }
      //still struggling a bit with this...
      //I think we're telling it to go through each key/pair AND print it
      //need the argument/object for looking into, then need to tell it key with bracket notation
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
      //given input object
      //return the # of key/value pairs in that given object

    return Object.keys(object).length;
  
      //use the method Object.keys, specify the given object, add .length
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
    //given input object
    //loop through an object with for-in loop
    //loop in REVERSE by using .length - 1? Need to add onto an array instead of actual object?
    //print values using console.log()

    for (var key in object){
      console.log(key);
      
    }

    //right...objects are UNordered lists...hrm
    
  /*
  *
  * NOT DONE YET */
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
