
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