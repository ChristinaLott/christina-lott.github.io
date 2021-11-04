
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
 */

function triangles(num) {
  for(var i = "#"; i.length < num; i += "#"){
    console.log(i);
  }
}

//Not passing test, but it looks like it works in repl...is test weird?
//passes 1 of the tests when I hardcode the num in the for loop, but obvy doesn't pass any input tests


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(var i = 1; i <= 15; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    } else if (i % 3 === 0){
        console.log("fizz");
    } else if (i % 5 === 0){
        console.log("buzz");
    } else {
        console.log(i)
    }
    
} 
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* 
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

//use newline to seperate each line
//use either a space " " or "#" in grid
//should first work with binding size of 8 then later any number/size
//output: console.log 8x8 grid of "#" and " "

function drawChessboard() {
  for(var i = " #"; i.length < 8; i += " #"){
   // console.log (i + \n); 
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
