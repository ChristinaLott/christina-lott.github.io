// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
        //use given/created function called range
        //range takes 2 integers/whole numbers as parameters
        //range should return an Array containing all integers between the two parameters
            //para1 -(para#, para#, para#) para2
        //if first parameter/argument is greater than the second return it in reverse order
        //need a container for the outputs from loop, will use loop, will use push() on array

        //I think this may need a nested function? I need a conditional statement to guage whether
        //or not start > end, if false then it needs to loop in reverse
        //need to loop over both start > end and start < end, but need to discern which direction to loop
        //it feels possibly cumbersome to build 2 additional functions to decide if it's greater than or not...and then I'm a bit stuck on how to return the give strings

    var outputArr = []; //making the container for the output array
    function range (start, end){
        start > end;
        return start, end;
    }
    if (start > end){
    
    }

    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
