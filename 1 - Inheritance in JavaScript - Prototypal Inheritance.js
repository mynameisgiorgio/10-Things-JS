// Inheritance using Classes
class Person {
  talk() {
    return 'Talking';
  }
}

const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking


Person.prototype === me.__proto__;
// true
me.__proto__.talk // is a actually the 'talk' function that's on the prototype of Person


// To update the function for both instances you only have to do it once:
Person.prototype.talk = function () {
  return 'New and improved Talking';
}; 


// -----------------------------------------
// Inheritance using a Constructor Function
function Person() {};
Person.prototype.talk = function () {
  return 'Talking';
}

const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking

/* alternatively I could create
 function Person () {
    this.talk = function () {
    return 'Talking';
  }
 }

 const me = new Person();
 const you  = new Person();

However there's a difference here: if I console.log the 'me' object
the 'talk' function is directly in the Person and NOT in the _proto_ 

In this case 'talk' won't be regarded as a method, but it is regarded as a proprerty just like a string or a number.
'talk' is copied inside the child object, in this case the 'me' object as one of its properties.
it sort of defeats the purpose of inheritance.

If 'talk' is added to the prototype is considered a method. 
 
Let's look at another example with properties and inheritance:

function Person () {
  this.age = 12; 
}
 const me = new Person();

 Person.age does not exist! it's not even on the prototype. 
 It's just a property of the object which is an instance of the function 'Person'

 if do 
 Person.age = 40;

 me.age is still 12

*/

// -----------------------------------------
// Inheritance using pure objects with Object.create
const person = {
  talk() {
    return 'Talking';
  }
}
const me = Object.create(person);
me.talk(); // Talking


// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf
const person = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me = {};
Object.setPrototypeOf(me, person);
me.talk(); // Talking


// -----------------------------------------
// Extending a Class using 'extends'
class Person {
  talk() {
    return 'talking';
  }
}

class SuperHuman extends Person {
  fly() {
    return 'flying';
  }
}
const me = new Person();
console.log(me.talk); // talk exists
console.log(me.fly); // fly does NOT exists

const you = new SuperHuman();
console.log(you.fly); // fly exists
console.log(you.talk); // talk also exists!

