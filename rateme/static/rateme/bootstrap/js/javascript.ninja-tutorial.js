/*alert("hello ninja");
console.log("hello ninja from log console");
assert(1 == 1, "Testing the assert feature");
*/

/* difference between constructor functions
and normal functions
 */
/*
function Ninja() {
    this._value1 = "value1";
    this._value2 = "value2";
}

var ninja = new Ninja();
alert(ninja._value1);

var ninja2 = Ninja;
ninja2();
alert(ninja2._value2) this will yield a undefined value*/


/*
function MethodTest() {
    this._someState = undefined;
    this.notAPrototypeMethod = function() {
        this._someState = "in the airport";
    }
}

var methodTest = new MethodTest();
methodTest.notAPrototypeMethod();
alert(methodTest._someState);


MethodTest.prototype = {
    prototypeMethod: function() {
        this._someState = "still in the airport";
    }
};
alert(methodTest._someState);*/