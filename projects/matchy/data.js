/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**1. [X] Open up the file data.js.
 2. [X] Create a variable named `animal` and assign it to an empty object.
 3. [X] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
 4. [X] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
 5. [X] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
 6. [X] Print your `animal` Object to the console by adding, `console.log(animal);`,
 7. [X] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
*/
var animal = {};
animal.species = "dog";
animal["name"] = "Cookie Monster";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**1. [X] Create a variable named `noises` and assign it to an empty array.
 2. [] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
 3. [X] Using an array function add another noise to the end of `noises`.
 4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 5. [X] Look through the functions until you find the one that will place an element at the begining of the array.
 6. [X] Add an element to `noises` using this function.
 7. [ X] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
 8. [X] `console.log` the length of `noises`
 9. [ X] `console.log` the last element in `noises` again without hard coding the index.
 10. [X ] `console.log` the whole array.
 11. [X] Does it look right?
 */

var noises = [];
noises[0] = "woof";
noises.push("growl"); 
noises.unshift("bark");
noises[noises.length]="howl"; //.length - 1 = IS NOT IT because it REPLACES that LAST value with whatever
console.log (noises.length - 1); //this is actually pulling the VALUE not the number
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
2. [X] Using any syntax add another noise to the `noises` property on `animal`.
3. [X] `console.log` `animal`.
4. [ ] Does it look right?
*/
    //need to use bracket notation
    //then add another noises property to the animal object, using any syntax
    //print animal

  animal["noises"] = noises;
  animal.noises.push("snore");
  console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
  //You can use dot notation and bracket notation
  //...this I'm trying to understand more of... :/

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**1. [X] Create a variable named `animals` and assign it to an empty array.
 2. [X?] `push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
 3. [X?] `console.log` `animals`. What does it look like?
 4. [X] Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 5. [X] `push` `duck` to `animals`
 6. [X] `console.log` `animals`. What does it look like?
 7. [X] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 8. [X] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?
*/

var animals = [];
animals.push(animal);
console.log(animals); //probably not right...looks like a giant array somehow...that is an obj

var duck = {
  species: "duck", 
  name: "Jerome", 
  noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);
console.log(animals);

var cat = {
  species: "cat",
  name: "Luna",
  noises: ["purr", "scold", "meow", "hiss"]
}

var sloth = {
  species: "sloth",
  name: "Perky",
  noises: ["yawn", "hum", "grumble","mumble"]
}

animals.push(cat, sloth);
console.log(animals[length]);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 1. [X] Choose a data structure for this **list** of friends.
 2. [X] Write a comment in your code that explains why you chose this data structure.
 3. [X] Create a variable called `friends` and assign it to the data structure that you chose.
 4. [X] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 5. [X] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
 7. [X] `console.log` `friends`.
 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
 9. [ ] `console.log` your work.
 */

//1. & 2 Chosen data structure is an array (one of the basic types)
    //choosing an array because it is a LIST, will be ordered, can use indexing

  var friends = []; //assigning array data structure to var friends
  function getRandom(animals){
    return Math.floor(Math.random() * animals.length); //using animals.length to not hard code 4 like below
    //return friends.push(Math.floor(Math.random() * 4 + 1)); //using Math.floor to set range for random number. * 4 because have 4 animals. + 1 to round it up to a whole number
  }

//array   rando# func      key value     
animals[getRandom(animals)]["name"]; //looking in the animal array, at index 0 -
                      // which is the first object in the array, and then returning the value of the name key in that specfic animal
                      //pull name value from animal object; push that value into friends
                      //getRandom(animals) <- this is returning a NUMBER value/data type, because it's the INDEX


  //friends = animals.push(getRandom["name"]); <- this ain't it
  //friends[0] = animals[getRandom(animals)]["name"]; <- NOPE

  
  //need to use a random index from getRandom to get a random animal to add its NAME to FRIENDS
  console.log(friends);
  //bracket notation to add friends list as a property named FRIENDS on one of the animals in the animals array
  console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}