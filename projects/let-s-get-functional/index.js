// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");
const { filter } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./christina-lott.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */



//TESTS - for recap check week 3 day 4 recording at 44 minutes in
// Let's Get Functional
// maleCount()
//   ✓ is a function
//   1) should return a number
//   2) should find number of males
// femaleCount()
//   ✓ is a function
//   3) should return a number
//   4) should find number of females
// oldestCustomer()
//   ✓ is a function
//   5) should return a string
//   6) should find oldest customer name
// youngestCustomer()
//   ✓ is a function
//   7) should return a string
//   8) should find youngest customer name
// averageBalance()
//   ✓ is a function
//   9) should return a number
//   10) should find average balance of customers
// firstLetterCount()
//   ✓ is a function
//   11) should return a number
//   ✓ should work if uppercase or lowercase
//   12) should find 1 customer with a name starting with B
//   13) should find 2 customer with a name starting with D
//   14) should find 0 customer with a name starting with F
// friendFirstLetterCount()
//   ✓ is a function
//   15) should return a number
//   ✓ should work if uppercase or lowercase
//   16) should find Doris Smith has 1 friend with an B name
//   17) should find Adele Mullen has 2 friend with an J name
//   18) should find Olga Newton has 2 friend with an C name
// friendsCount()
//   ✓ is a function
//   19) should return an array
//   20) should find all customers that are friends with Olga Newton
//   21) should find all customers that are friends with Doyle Erickson
//   22) should find all customers that are friends with Bucker Kennedy
//   23) should find all customers that are friends with Shelly Walton
// topThreeTags()
//   ✓ is a function
//   24) should return an array
//   25) should find three of the top tags
// genderCount()
//   ✓ is a function
//   26) should return an object
//   27) should return a summary of customer genders


// 12 passing (29ms)
// 27 failing

// 1) Let's Get Functional maleCount() should return a number:
//  ReferenceError: array is not defined
//   at maleCount (index.js:26:24)
//   at Context.<anonymous> (spec/index.spec.js:17:14)
//   at processImmediate (internal/timers.js:464:21)

// 2) Let's Get Functional maleCount() should find number of males:
//  ReferenceError: array is not defined
//   at maleCount (index.js:26:24)
//   at Context.<anonymous> (spec/index.spec.js:21:14)
//   at processImmediate (internal/timers.js:464:21)

// 3) Let's Get Functional femaleCount() should return a number:
//  AssertionError: expected undefined to be a number
//   at Context.<anonymous> (spec/index.spec.js:35:39)
//   at processImmediate (internal/timers.js:464:21)

// 4) Let's Get Functional femaleCount() should find number of females:
//  AssertionError: expected undefined to equal 4
//   at Context.<anonymous> (spec/index.spec.js:39:36)
//   at processImmediate (internal/timers.js:464:21)

// 5) Let's Get Functional oldestCustomer() should return a string:
//  AssertionError: expected undefined to be a string
//   at Context.<anonymous> (spec/index.spec.js:53:42)
//   at processImmediate (internal/timers.js:464:21)

// 6) Let's Get Functional oldestCustomer() should find oldest customer name:
//  AssertionError: expected undefined to equal 'Buckner Kennedy'
//   at Context.<anonymous> (spec/index.spec.js:57:39)
//   at processImmediate (internal/timers.js:464:21)

// 7) Let's Get Functional youngestCustomer() should return a string:
//  AssertionError: expected undefined to be a string
//   at Context.<anonymous> (spec/index.spec.js:71:44)
//   at processImmediate (internal/timers.js:464:21)

// 8) Let's Get Functional youngestCustomer() should find youngest customer name:
//  AssertionError: expected undefined to equal 'Doyle Erickson'
//   at Context.<anonymous> (spec/index.spec.js:75:41)
//   at processImmediate (internal/timers.js:464:21)

// 9) Let's Get Functional averageBalance() should return a number:
//  AssertionError: expected undefined to be a number
//   at Context.<anonymous> (spec/index.spec.js:89:42)
//   at processImmediate (internal/timers.js:464:21)

// 10) Let's Get Functional averageBalance() should find average balance of customers:

//   AssertionError: expected false to equal true
//   + expected - actual

//   -false
//   +true
  
//   at Context.<anonymous> (spec/index.spec.js:95:23)
//   at processImmediate (internal/timers.js:464:21)

// 11) Let's Get Functional firstLetterCount() should return a number:
//  AssertionError: expected undefined to be a number
//   at Context.<anonymous> (spec/index.spec.js:110:28)
//   at processImmediate (internal/timers.js:464:21)

// 12) Let's Get Functional firstLetterCount() should find 1 customer with a name starting with B:
//  AssertionError: expected undefined to equal 1
//   at Context.<anonymous> (spec/index.spec.js:121:25)
//   at processImmediate (internal/timers.js:464:21)

// 13) Let's Get Functional firstLetterCount() should find 2 customer with a name starting with D:
//  AssertionError: expected undefined to equal 2
//   at Context.<anonymous> (spec/index.spec.js:126:25)
//   at processImmediate (internal/timers.js:464:21)

// 14) Let's Get Functional firstLetterCount() should find 0 customer with a name starting with F:
//  AssertionError: expected undefined to equal 0
//   at Context.<anonymous> (spec/index.spec.js:131:25)
//   at processImmediate (internal/timers.js:464:21)

// 15) Let's Get Functional friendFirstLetterCount() should return a number:
//  AssertionError: expected undefined to be a number
//   at Context.<anonymous> (spec/index.spec.js:146:28)
//   at processImmediate (internal/timers.js:464:21)

// 16) Let's Get Functional friendFirstLetterCount() should find Doris Smith has 1 friend with an B name:
//  AssertionError: expected undefined to equal 1
//   at Context.<anonymous> (spec/index.spec.js:157:25)
//   at processImmediate (internal/timers.js:464:21)

// 17) Let's Get Functional friendFirstLetterCount() should find Adele Mullen has 2 friend with an J name:
//  AssertionError: expected undefined to equal 2
//   at Context.<anonymous> (spec/index.spec.js:162:25)
//   at processImmediate (internal/timers.js:464:21)

// 18) Let's Get Functional friendFirstLetterCount() should find Olga Newton has 2 friend with an C name:
//  AssertionError: expected undefined to equal 2
//   at Context.<anonymous> (spec/index.spec.js:167:25)
//   at processImmediate (internal/timers.js:464:21)

// 19) Let's Get Functional friendsCount() should return an array:
//  AssertionError: expected false to be true
//   at Context.<anonymous> (spec/index.spec.js:185:27)
//   at processImmediate (internal/timers.js:464:21)

// 20) Let's Get Functional friendsCount() should find all customers that are friends with Olga Newton:
//  TypeError: Cannot read property 'sort' of undefined
//   at Context.<anonymous> (spec/index.spec.js:195:55)
//   at processImmediate (internal/timers.js:464:21)

// 21) Let's Get Functional friendsCount() should find all customers that are friends with Doyle Erickson:
//  TypeError: Cannot read property 'sort' of undefined
//   at Context.<anonymous> (spec/index.spec.js:201:58)
//   at processImmediate (internal/timers.js:464:21)

// 22) Let's Get Functional friendsCount() should find all customers that are friends with Bucker Kennedy:
//  TypeError: Cannot read property 'sort' of undefined
//   at Context.<anonymous> (spec/index.spec.js:207:59)
//   at processImmediate (internal/timers.js:464:21)

// 23) Let's Get Functional friendsCount() should find all customers that are friends with Shelly Walton:
//  TypeError: Cannot read property 'sort' of undefined
//   at Context.<anonymous> (spec/index.spec.js:213:57)
//   at processImmediate (internal/timers.js:464:21)

// 24) Let's Get Functional topThreeTags() should return an array:
//  AssertionError: expected false to be true
//   at Context.<anonymous> (spec/index.spec.js:231:27)
//   at processImmediate (internal/timers.js:464:21)

// 25) Let's Get Functional topThreeTags() should find three of the top tags:
//  TypeError: Cannot read property 'sort' of undefined
//   at Context.<anonymous> (spec/index.spec.js:236:40)
//   at processImmediate (internal/timers.js:464:21)

// 26) Let's Get Functional genderCount() should return an object:
//  AssertionError: expected undefined to be an object
//   at Context.<anonymous> (spec/index.spec.js:254:28)
//   at processImmediate (internal/timers.js:464:21)

// 27) Let's Get Functional genderCount() should return a summary of customer genders:
//  AssertionError: expected undefined to deeply equal { female: 4, male: 3, 'non-binary': 1 }
//   at Context.<anonymous> (spec/index.spec.js:260:25)
//   at processImmediate (internal/timers.js:464:21)





var maleCount = function() {
    var males = _.filter(array, function(customer, index, array){ //customer stands in current value passing through the array
        if (customer.gender === "male"){
            return true;
        } else {
            return false;
        }
    });
    return males.length; //this uses the filter's return value that is an array, and uses .length to get the count
}; 

//not passing the test for some reason??


//I want to get the number of males
//use filter to filter/nab just those with gender male
    //# of male customers
    //input: array
    //output: number
    //use filter

    // maleCount()
//   ✓ is a function
//   1) should return a number
//   2) should find number of males


var femaleCount = function(array){
    var female = _.reduce(customer, function(/**need to figure out the paramets for this tester function */), seed)
    
    //var female = _.reduce(customer, func){
    //if(customer.gender === "female")
   // }, 0);
};

//want the count/# of females
//use reduce function

    //# of female customers
    //input: array
    //output: number
    //use reduce


    // _.reduce = function(arr, func, seed){
    //     if(seed === undefined){
    //       seed = arr[0];
    //         for(var i = 1; i < arr.length; i++){  //start iterating at 1 because no seed given so move to the next element
    //             seed = func(seed, arr[i], i);
    //               }
    //         } else {
    //             for (var i = 0; i < arr.length; i++){
    //                 seed = func(seed, arr[i], i);
    //             }
    //         }
    //      return seed;
    //  }
     



var oldestCustomer = function(array){

};

    //oldest customer name
    //input: array
    //output: string
        //can use whatever works, I guess?



var youngestCustomer = function(array){

};

   //youngest customer name
    //input: array
    //output: string
        //can use whatever works, I guess?


var averageBalance = function(array){
    var average = _.reduce(array, function(previous, current){
        var removeDollarSign = current.balance.slice(1); //removing dollar sign from string
        var removeComma = removeDollarSign.replace(",", ""); //removing , from string
        var numNum = parseFloat(removeComma); //making the string into a number using method
        return previous += numNum;
    }, 0); //the 0 is our seed that is needed as the starting previous balance
    var avgBalance = average / array.length;
    return avgBalance;
};

    //balance data type is a string, need to convert?
        //drop the $...slice(1) out the $ because it's at the 0 index
            //parseInt(num) = changes a string number into its base value (so drops decimals)
            //pasteFloat(num) = changes a string of number with decimals into a number with the decimals still

    //average balance of all customers
    //input: array
    //output: number
        //can use whatever works, I guess?
        //reduce??? to add upon previous balance with current?



var firstLetterCount = function(array, letter){

};

    //how many customers names begin with given letter
    //input: array, letter
    //output: number
        //use whatevs?



var friendFirstLetterCount = function (array, customer, letter){

};

    //how many friends of a customer has have names that start with given letter
    //input: array, customer(obj?), letter
    //output: number
        //notes

var friendsCount = function (array, name){

};

    //find customers that have given customer's name in their friends
    //input: array, name (str?)
    //output: array



var topThreeTags = function(array){

};


    //find three most common tags among customers
    //input: array
    //output: array



var genderCount = function(array){

};


    //summary of genders
        //male: 1
        //female: 3
        //non-binary: 2
    //input: array
    //output: object
    //use reduce
        //notes

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
