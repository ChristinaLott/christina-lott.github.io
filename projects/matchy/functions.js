/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * X 1. Open up the file `functions.js` in your editor.
 2. Implement a function declaration called `search` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String, the name of an animal on which to perform a search.
   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
   - Returns `null` if no animal with that name exists
 3. Use the search bar at the top of the page to make sure your function work
 * 
 */

 //make function search
    //needs to take/input para animals, that will be an array
    //needs to take/input para name of an animal, that will be a string - used for the search
    //looks through animals array, returns animal's object if an animal with name exists
        //for loop? if else statement? return null if no animal with name exists

function search(animals, animalName){
    for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name){
        return animals[i];
    }
}
    return null;
}

/**
 * NOT DONE YET...think I'm missing things
 * 
 *  var newStr = string.toLowerCase();
        var endsWithLowerCase = endsWith.toLowerCase();
        if (newStr[newStr.length - 1] === endsWithLowerCase){
 * 
 */

 

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 *  1. Write a function declaration called `replace` with a 
 * signature of `replace(animals, name, replacement) { //... } ` that:
   - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
   - If an animal with that name exists within the `
   animals` Array, replace it's entire Object with the replacement Object.
   - Otherwise do nothing.
 2. Preview the `index.html` page to test it on the website.
 */

//make function replace...with a signature of "replace(animals, name, replace){//...}" ---what is a signature?
    //needs to take/input of 3 para: array of animals, string of name of an animal to search, and object animal to replace with
    //If animal exists with that name in animals array, replace entire object with replacement object
    //if not, just return animals and do nada to it
      //func, loop to search for animal to replace animal object, then have an if statement if a match 

    function replace(animals, name, replace){
        for(var i = 0; i <= animals.length; i++){
          if (name === animals[i].name){ 
            return animals.splice(i, 1, replace);
          } else {
            return animals;
          }
        }
    }
  

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * # Step 3 - Remove
 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.
 */

 //make function remove with a signature of "remove(animals, name)"
    //needs to take/input 2 paras: array of animals and name of animal to do search
    //if an animal with name exists in animals array remove it

    function remove(animals, name){
      for(var i = 0; i < animals.length; i++){
      if(name === animals[i].name){
        return animals.splice(i, 1); 
      } else {
        return animals;
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 *  1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works.
 */

   //make a func named add
   //signature of add(animals, animal)
      //animals is an array of animals
      //animal is a new animal obj to add
   //checks that name property in animal obj length > 0
   //checks that species property in animal obj length > 0
   //checks that no other animals have same name !==
   //adds new animal obj ONLY if all above conditions && are met

   //func, if: name in animal obj > 0 && species in animal obj > 0 && name !== another animal name
   //then ADD new given animal obj

   function add(animals, animal){
    for (var i = 0; i < animals.length; i++){
       if (animal.name.length > 0 && animal.species.length > 0 && animal.name === animals[i].name){ //I'm pretty sure I'm off with the unqiue name search
        return animals;
       } else if (animal.name.length > 0 && animal.species.length > 0 && animal.name !== animals[i].name){
         return animals.push(animal);
       }
     }


    /**return {
      nameCheck: function()
    }*/
    
   }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
