//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var outputArray = Object.values(object); // used Object.values(nameOfThing) to grab values in an obj and put them into an array
    return outputArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var outputKeyString = Object.keys(object);  //this is grabbing all of the KEYS in the obj
        return outputKeyString.join(" ");      //this is joining all of the keys with a SPACE between them, need to do at return- at least for this exercise
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //think that value means keypair value found in an obj. Can use some kind of code to convert to a string
    //what kind of method converts? Do I need to change it into an array to then pluck out into a string?
        //take an obj return values as a string seperated by a space

function valuesToString(object){
    var outputValuesString = Object.values(object);
    var actualString = [];
    for(var i = 0; i <= outputValuesString.length - 1; i++){
        if (typeof outputValuesString[i] === "string"){
            actualString.push(outputValuesString[i]);
        }
    }
        return actualString.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//have seen this before. need to use conditional statement, typeof, isArray...reference past function to double check
    //return argument as either an "array" or as an "object"

function arrayOrObject(collection) {
    if(typeof collection === "object" && collection === Array.isArray){
        return "array";
    } else if (typeof collection === "object" && collection !== null && !(value instanceof date)){
        return "object";
    }
}

/**
 * NOT DONE YET... think I'm really close...not sure what's wrong. Previously passed 1 of 2 tests when just had an if else
 */

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//one worded string, caps first letter
//toUpperCase

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); //call upon string twice, first time to make first char upper and 2nd to slice out index 0 and add what's behind that to the first char
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //make containers for output string, string into array, & iteration
    //use .split() convert string into an array for looping
    //loop through new array with the values given in string
    // make iteration container within for loop
    //code block to be ran on each iteration is to look at iterated array index,
        //replace within that iteration element the 0 index character,
        //replace it with the iterated element in the array's 0 index character
        //that has been made to uppercase
    //reassign output string with the iteration container concatenated with a space
    //return output string outside of loop and use trim() to remove space at the end
    

function capitalizeAllWords(string) {
var outputCaps = "";
var newString = string.split(" ");
for(var i = 0; i < newString.length; i++){   
var replacement = newString[i].replace(newString[i][0], newString[i][0].toUpperCase());
//need to concat each of the words together. REMEMBER can't use .join because var is a string not an array use
outputCaps += replacement + " ";
}
return outputCaps.trim(); //use to remove spaces from begining and end of a string
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //take obj and pluck out name property to return below statement
    //concatnate to include "Welcome <name>!"

//function welcomeMessage(object) {
    var outputName = "";
    return "Welcome" + object.name;
    //for(var key in object){
    //    outputName = object[key]["name"];
   // }
    //outputName = object.keys(object).find;
    //console.log(outputName);
    //console.log("Welcome" + outputName, "what's printing for welcomeMessage");
   // return "Welcome" + outputName;
}

/**
 * 
 * this is wrong...I think this one is pretty simple...either for in loop or use keywords or referencing the specfic key
 */

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //take obj with a name and species
    //return "<Name> is a <Species>"

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //takes an obj
        //if obj has noises return oit as a STRING seperated by SPACE
        //if NO noises then return "there are no noises"

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //takes arguments of a string and a word
        //should return TRUE if <word> is in <string>
        //else return false if <word> not in <string>

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //takes a name and an object
        //ADD the name to the object's friends array
        //return the object

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //takes a name and an object
        //return TRUE if <name> is a friend of <object>
        //else return FALSE

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //takes a name and a list/array of people
        //return a list/array of all names that <name> is NOT friends with

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //takes an object, a key, and a value
        //if there is a key in object then update proptery <key> on <object> with new <value>
        //else if NO <key> in <object> then CREATE IT

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //.splice?
    //takes an object and an array of STRINGS
    //REMOVE any properties on <objecT> that are in <array>

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //takes and array
        //return an array with ALL duplicates REMOVED


function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}