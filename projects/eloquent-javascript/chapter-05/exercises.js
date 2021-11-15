// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the 
// original arrays.

// let arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]

  //use reduce and concat -> flatten array of arrays
  //output single array
    //has all elements of original arrays
  //use reduce to grab each indexed array and return its own value?
  //then concat each iteration/reduction so get back one full array -> think instructions made
  //overly confusing by stating to use the concat method...don't need here because of the use of 
  //bracketed return of the priorFlat and currentArray I think? otherwise could concat those same 
  //values with like priorFlat.concat(currentArray) after calling reduce;
  //with only one element in it of all arrays?

function flatten(array) {
  var arrFlat = array.reduce(function(priorFlat, currentArray){ //only using the first two params 
    return [...priorFlat, ...currentArray];
  }, []); //make seed an empty array, so can start with/store
  return arrFlat;
}

 

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//Write a higher-order function loop that provides something like a for loop statement. 
//It takes a value, a test function, an update function, and a body function. Each iteration, 
//it first runs the test function on the current loop value and stops if that returns false. 
//Then it calls the body function, giving it the current value. Finally, it calls the update 
//function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.

// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1

  //make higher-order function loop...make a loop statement
    //inputs value, test function, update function, body function
  //should run test function on current loop value, stop if returns false on each iteration
  //then calls body function to give current value
  //last call update function to create new value and start from beginning
          //test func used current loop val, if false stops.
             // -> body func on current val 
                //-> update func make new value, restart

function loop(startValue, testFunc, updateFunc, bodyFunc) {
 for(var value = startValue; testFunc(value); value = updateFunc(value)){ //use the starting value to set value/i. 
    bodyFunc(value);                                                //Need to stop when get false from testFunc, 
 }                                                                        //so use value as the argument for test func as the stopping condition.                                                    // Have value equal updateFunc and pass in value as the argument to increment/make updates with.
}

  //pass in the startValue as the arguments for each function (assigned value to that intial startValue)



// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Analogous to the some method, arrays also have an every method. This one returns true when 
// the given function returns true for every element in the array. In a way, some is a version 
// of the || operator that acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters. 
// Write two versions, one using a loop and one using the some method.
    // predicate function just means tester function

// function every(array, test) {
// }

// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
// // → true

function every(array, test) {

}

  //revisit recording?

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Write a function that computes the dominant writing direction in a string of text. 
// Remember that each script object has a direction property that can be "ltr" (left to right), 
// "rtl" (right to left), or "ttb" (top to bottom).
// The dominant direction is the direction of a majority of the characters that have a script 
// associated with them. The characterScript and countBy functions defined earlier in the chapter 
// are probably useful here.

// function dominantDirection(text) {
//   // Your code here.
// }

// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl

function dominantDirection(text) {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
