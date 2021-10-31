// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


_.identity = function(value){
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(typeof value !== "object"){
        return typeof value;
    } else if (Array.isArray(value)){
        return "array";
    } else if (typeof value === "object" && Array.isArray(value) !== true && value !== null && !(value instanceof Date)){
        return "object";
    } else if (value === null){
        return "null";
    } else {
        return "date";
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//conditional chain, with 3 possible returns
    //if array !== arr ? return [] and if number === NaN return the first element in array
    //otherwise return first number items of array
//Edge cases: number negative? number greater than array.length?

//need to check if array is an array
    //if an array should be able to check the number against array
    //if NOT an array return []
//need to check if number is a number
    //if a number return that many number of things in the array
    //if NOT a number NaN nor given return first element of array

_.first = function(array, number){
console.log(array, number, "argument values");
    var outputArr = [];
if(!Array.isArray(array) || number <= 0){
      return [];
  } else if(number === undefined || number === NaN){
      return array[0];
  } else if (number > array.length) {
      return array;
  } else {
    return array.slice(0, number);
  }
}
    //} else if(number !== "undefined" && number !== NaN && number > 0){
   // for(var i = 0; i <= array.length; i++){
   // outputArr.push(array[i]);
    //console.log(outputArr, "what is in this darn array?");
  //  console.log(outputArr, "where art thou array?")
  //  return outputArr;
 // } else {
 //     return array[0]; //not sure if I should have this be an else if before trying to pull numbers
 // }



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num){
if(!Array.isArray(arr) || num < 0){
    return [];
} else if (num === undefined || num === NaN){
    return arr[arr.length - 1];
} else if (num > arr.length) {
    return arr;
} else {
    return arr.slice(-num); //using - before a number/parameter with slice will remove everything before that number
}
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


//return index[#] of array at first occurance/iteration of <value>
    //looping through most likely
//return -1 IF <value> !Array.isArray/<array> not the thing
//NO [].indexOf()



_.indexOf = function(array, value){
    for(var i = 0; i <= array.length - 1; i++){
        if(array[i] === value){
            return i; //returning the index number where the match is at
        } 
     } return -1; //have this outside of the for loop because otherwise when iterate it would hit this on the first loop and exit out
 }




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

 //IF <array> has <value> return TRUE
 //Else return FALSE (<value> is undefined, array does NOT have value)
 //use ternary operator

_.contains = function(array, value){
    for(var i = 0; i <= array.length; i++){ //includes doesn't need i, for some reason
       return array.includes(value) ? true : false;  //I don't know why  return array[i] === value ? true : false;  couldn't pass one of the tests...
    }
} 



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//if <collection> === array, run <function> ONCE on EACH element that has arguments (element, index, <collection>)
//if <collection> === object, run <function> ONCE on EACH property that has arguments (property's value, key, <collection>)


_.each = function (collection, func){
    if(Array.isArray(collection) === true){
        for(var i = 0; i < collection.length; i++)
        func(collection[i], i , collection);
    } else {
        for(var key in collection){
           func(collection[key], key, collection)
        }
    }   
}

//
//Is this actually complete? No returns? pulled from class example...not done yet, reference either notes or recording from 10/26 to see code example
//



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


//return NEW ARRAY with ALL elements from <array> && remove duplicates
    //~~need to loop...when looping need to check for duplicate elements...then remove 'em
//need to use _.indexOf(), this returns the index number of when first hit value or -1 if not in the array

//underscore's version of unique uses === AND returns just the 1st value of it and not the second
    //look for match;
        //push 1st instance to new array
    //keep going, so don't return (??)
    //if match again IGNORE
//can I slice out i when there is a match??

//only pull

//var container for nabbed 1st values, then loop to grab those 1st values with an if statement (if not in array then add, if in array/theres a match then do nothing)

_.unique = function(arr){
    var outputArr = [];
    for(var i = 0; i < arr.length; i++){
        if(-1 === _.indexOf(outputArr, arr[i])){ //indexOf is looking for matches, if NO match then it returns -1. Which means it's NOT in the array. So we can use -1 to determine when to ADD elements into our array
            outputArr.push(arr[i]);          //then return the value of that iterated element in the given array
        }
        }
        return outputArr;
    }

//this one is nifty and head hurter! But DONE!




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

    //use function on EACH element in <array> - looping
        //use element, element's index, <array> as arguments
    //RETURN NEW array of elements when <function> returns true 
        //(func outcome === true, then return a NEW array with same values)
    //what do if array returns something other than t/f??? idk
    //special credit if use _.each...eeeeh

_.filter = function(arr, func){
    var outputArr = []; //..think I need a container for the func'd values
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === true){ //if condition AUTOMATICALLY checks for truthy, so could drop === true
            outputArr.push(arr[i]); //thought this was new array elements? but undefined??
        }
    }
    return outputArr;
}



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


//use function on EACH element in array = loop
    //use element, element's  index, array as arguments
//RETURN NEW array of elements when using function results in FALSE
    //protip: filter method in reverse


_.reject = function(arr, func){
    var outputArr = []; 
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === false){
            outputArr.push(arr[i]);
        }
    }
    return outputArr;
}




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


//use function on EACH element in array
    //use element, key, array as arguments func(element, key, arr)
//RETURN array with 2 sub arrays
    //0 array (1st array) has ALL values for func returned truthy (> 0, true, all else)
    //1 array (2nd array) has ALL values for func returned falsy (null, 0, false, undefined, NaN, "")
        //this is an array WITH arrays within it... so maybe something like: arr = [[1,2,3], ["a","b',"c"], [false, true, NaN]]


_.partition = function(arr, func){
    return [_.filter(arr, func), _.reject(arr, func)]; //referenced back prior methods cause they do the thing of resulting in arrays that correspond to if the condition was true or false..
}
    /* var outputArr = []; //would I need to outputArrs? need to check the test args to see what use
    var outputArr2 = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === true){
            outputArr.push(arr[i]);
        } else if (arr[i] === false){
            outputArr2.push(arr[i]);
        }
    }
    return outputArr; //not sure if I should have two different outputArrs that return for each condition
} */




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


//use func on EACH element in the collection
    //IF an ARRAY    
        //use element, element's index, collection as arguments: func(collection[i], [i], collection)
    //IF an OBJECT
        //use value, key, collection as arguments: func(collection[i]??, [i]?? ,collection)
//make a container array for new value of each function
        //var outputArr = [];
        //outputArr.push(arr[i])???
        //return outputArr;

_.map = function(collection, func){
    var outputArr = [];
   if(Array.isArray(collection) === true){
       for(var i = 0; i < collection.length; i++){
        outputArr.push(func(collection[i], i, collection)); //functions evaluate to their RESULT. so can expect that outcome, and therefore slip it into an array
       }
   } else {
        for(var key in collection){
            outputArr.push(func(collection[key], key, collection));
        }
   }
    return outputArr;
}


    //for(var i = 0; i < collection.length; i++){
      //  if(Array.isArray(collection) === true){
           // func(collection[i], i, collection);
            //outputArr.push(collection[i]);
       // } else if (object === true /*grab that long arse code to distinigush between arr/obj or finish that prior func to plop in */){
    //         func(/*I'm kinda stumped on the arguments to plug in here...*/);
    //         outputArr2.push(collection[i]); //eeeeh, how would we update the array with the value? guess we could push the obj/key/value into the array still??
    //     }
    // }




/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


//RETURN array with property's value for EVERY element in array = looping
    //make a new container??
//use map!


_.pluck = function(arrObj, property){

}


/**
 * NOT DONE YET, just started lightly psuedocoding
 */



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){

}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


_.some = function(collection, func){

}



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(arr, func, seed){

}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(obj1, obj2, moreobjssomehowpossibly){

}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
