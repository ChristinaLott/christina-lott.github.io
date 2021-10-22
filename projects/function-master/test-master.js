(function(){

  QUnit.test( "Our First Test", function( assert ) {
    var value = "hello tests";
    var some_number = 484;

    //                     ┌ Change this to what it should be
    assert.equal( value, "hello tests");
    //                           ┌ Change this to what it should be
    assert.equal( some_number, 484);
  });

  QUnit.test("Functions can access/modify variables in parent scope.", function(assert){
    var outside_the_function = null;
    function yay(){
      var inside_the_function = "can you see me?";
      outside_the_function = inside_the_function;
    }

    yay();

    assert.equal(outside_the_function, "can you see me?"); //looked for it to return value of inside_the_function
  });

  QUnit.test("Function Parameters become scoped to the function.", function(assert){

    function yay(param){
      assert.equal(param, "a fine kettle of fish"); //looked for yay value to equal param
    }

    yay("a fine kettle of fish");
  });

  QUnit.test("A functions local scope is not available in an outer scope.", function(assert){
    function yay(){
      var kix = "kid tested mother approved";
      assert.equal(kix, "kid tested mother approved");
    }
    yay();
    
    var has_kix;
    // NOTE:
    // "this" is a special object that by default represents the global scope.
    // variables declared globally are stored as a property on the object: this.<variable>
    // if the variable is not global then this.<variable> will be undefined
    if(this.kix !== undefined){
      has_kix = kix;
    } else {
      has_kix = "i prefer cheerios";
    }
    assert.equal(has_kix, "i prefer cheerios"); //the if else is looking at if there is a global kix, there isn't one defined globally, so the else statement is true
  });

  QUnit.test("Functions don't have access to eachothers scope", function(assert){
    function yay(){
      var from_yay = "i'm inside yay;";
    }

    function foo(){
      var in_foo = "i'm in foo";
      if(this.from_yay !== undefined){
        in_foo = this.from_yay;
      }
      assert.equal(in_foo, "i'm in foo"); //looked to prove that in_foo's if statement could not happen because of it being out of scope
      assert.equal(this.from_yay, undefined); //looked to prove from_yay is not a global value, therefore undefined because in a local/block scope
    }
    yay();
    foo();
  });

  QUnit.test("Inner scope variables override outter scope variables.", function(assert){

    var peanuts = 300;

    function yay(){
      var peanuts = "roasted";

      assert.equal(peanuts, "roasted"); //demonstrating that local/inner scope overrides outter scope
    }
    yay();

    assert.equal(peanuts, 300); //demonstrating that peanuts value still 300 when in outter scope
  });

  QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){
    function yay(){
      if(this.counter !== undefined){
        counter = counter + 1;
      } else {
        var counter = 10;
      }
    }

    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
  });

  QUnit.test("Inner scope can access outer scope", function(assert){
    var im_outside = "alpha";
    function yay(){
      var im_inside = "omega";
      return im_outside + im_inside;
    }

    assert.equal(yay(), "alphaomega");
  });

  QUnit.test("Functions retain outer scope references between calls.", function(assert){
    var im_outside = 13;
    function yay(){
      im_outside += 1;
    }

    yay();
    assert.equal(im_outside, 14); //the function reassigns im_outside's value to be itself and adds 1
    yay();
    assert.equal(im_outside, 15); //I guess the function recalls that im_outside now equals its value plus 1, and it was already called so now it's 14 plus 1
  });

  QUnit.test("We can do goofy stuff with outer scope", function(assert){

    var hello = "greg";
    var name = "";

    function yay(){
      name += hello;
    }

    yay();
    assert.equal(name, "greg"); //remember that name has no string values
    yay();
    assert.equal(name, "greggreg");
    yay();
    assert.equal(name, "greggreggreg");
  });

  QUnit.test("We can pass functions to other functions and then run them.", function(assert){
    var im_outter = 10;
    function yay(){
      im_outter /= 5;
    }
    function something(whatever){
      im_outter *= 20;
      whatever();
    }
    something(yay);
    assert.equal(im_outter, 40);// func yay reassigned im_outter to 2. then func something reassigned it to the result of 2 * 20, so 40. the whatever() was a decoy

  });

  QUnit.test("We can get crazy with returns.", function(assert){
    function yay(){
      return " is dog";
    }
    function foo(whatever){
      return "hello, this" + whatever();
    }
    assert.equal(foo(yay), "hello, this is dog"); //returning the func yay concatenated with foo's return values
  });

})();
