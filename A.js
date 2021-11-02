
//think of function that is passed into pluck and the arguments 


_.map = function(collection, func){ //map takes and returns an array, values will differ without affecting the og array
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
}


_.pluck = function(arrObj, property){
    function func(element, i, co){ //<-- this is an example of a callback function
        return element[property]; 
    }
    return _.map(arrObj, func); //<--map invokes func here (even though it's a given argument...???), so calling back
 }



 /**
  * Below is an example of using recursion
  */
 
var nums = [1, 2, 3, 4];

function nonrecursiveSum(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function recursiveSum(arr){
  //base case - condition for when function should stop
  if(arr.length === 0){
    return 0; //returning 0 because don't want to throw off sum so use 0 to not effect sum
    //OR could return arr[0] AND have the length === 1, because [0] has no value
  }

  //recursion
  return arr[0] + recursiveSum(arr.slice(1)); //this is a return chain
}


//return 1 + recursiveSum([2, 3, 4])
//return 1 + 2 + recursiveSum ([3, 4])
//return 1 + 2 + 3 + recursiveSum([4])
//return
    //each time call array use slice to nab stuff
