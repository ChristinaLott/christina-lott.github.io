// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

function makeContact(id, nameFirst, nameLast) {
    var obj = {};
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;
    return obj;
} 

//list/collection = the contacts array that is an array populated with objects, reference back to line 37 obj
//the parts of it will be named after methods, and need to create functions that do the thing, lines 54 to 57 were provided and are the first part of it as referenced in the  instructions

function makeContactList() {
   

    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            return contacts.push(contact);
        },
        findContact: function(fullname){ //takes fullName, will instead concatenate the comparison
          for(var i = 0; i <= contacts.length - 1; i++){
            //console.log(contacts[i]);
            // console.log(fullname,contacts[i].nameFirst + " " + contacts[i].nameLast);
            if (fullname === contacts[i].nameFirst + " " + contacts[i].nameLast){
                  return contacts[i];//needs to loop over 1st and last name and return the contact it matches with
          } else {
              return undefined;
        } 
    }  
    },
        //need to take contact obj argument, search contacts, and remove contact obj from contacts list
        //I think it needs to loop through the contacts array
        //then look for a match
        //then .splice out the match...somehow...did it on my own!!!
        removeContact: function(contact){
            for(var i = 0; i <= contacts.length - 1; i++){ //using this to search through the array of contact objs
                if (contact === contacts[i]){ //telling it to look for the matching contact object
                    return contacts.splice(i, 1); //splicing out the iterated object when there is a match
                }
            }
        }
        //not sure why I'm having an issue adding more code here
        //should return all contacts full names
        //should print full names as a string
        //should have a new line break
        //last entry should not have new line break
        
        //loop through to grab each full name
        //likely will need a container for each name, make new output var to hold
        //use console.log to print
        //add \n to each iterations, EXCEPT last iterations

        printAllContactNames: function(){
            var outputContactNames = "";
            for(var i = 0; i < contacts.length - 1; i++){
                outputContactNames.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            }
            return outputContactNames.join("\n");
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
