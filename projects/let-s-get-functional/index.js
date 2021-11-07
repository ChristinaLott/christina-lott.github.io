// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

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
 *    npm start --prefix ./npm start --prefix ./christina-lott.github.io/projects/let-s-get-functional/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

};

    //# of male customers
    //input: array
    //output: number
    //use filter


var femaleCount = function(array){

};

    //# of female customers
    //input: array
    //output: number
    //use reduce



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

};

    //average balance of all customers
    //input: array
    //output: number
        //can use whatever works, I guess?



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
