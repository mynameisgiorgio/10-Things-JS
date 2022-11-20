// prototype chain

const dude = {}; // empty object

// let's a couple of properties

dude.name = 'SINAAAA';
dude.age = 34;

/* 
 in the console 

 > dude
   {name: 'SINAAAA', age: 34}
   age: 34
   name: "SINAAAA"
   __proto__: Object

*/

dude.talk //undefined
dude.walk // undefined

dude.toString //Exists and it's a function
dude.valueOf // Exists and it's a function

/* 

Objects and variables, no matter how you create,
 get a proto property that proto is pointing to another object 
that has all the stuff 
that your variable is going to be inheriting from.

Nearly every object in javascript
is an instance of 'Object' with capital o
so it inherits all this stuff that the object constructor, the object class.

*/

//let's take another example

const myBrothers = ['Ben' , 'Sam']; 

/*

in the console 

> myBrothers
  0: "Ben"
  1: "Sam"
  length: 2
  __proto__: Array(0)       // the prototype of myBrothers, Array in front of __proto__ means we are an instance of an Array constructor
  at: ƒ at()
  concat: ƒ concat()
  constructor: ƒ Array()
  copyWithin: ƒ copyWithin()
  entries: ƒ entries()
  every: ƒ every()
  fill: ƒ fill()
  filter: ƒ filter()
  find: ƒ find()
  findIndex: ƒ findIndex()
  findLast: ƒ findLast()
  findLastIndex: ƒ findLastIndex()
  flat: ƒ flat()
  flatMap: ƒ flatMap()
  ....
  ....
  ....
  ...

*/

// another example with a longer prototype chain

const human = {
    kind: 'Human',
}

const sina = Object.create(human); 

// sina is an object with no properties on it
// but its proto has the properties that human have

sina.age = 34; // we add a property directly to sina 
sina.kind // returns 'Human'

const ben =Object.create(sina); // ben is not really an instance from sina but it inherits from sina

ben.age = 12;

ben.age //returns 12
ben.kind //returns 'Human'

/*  

in the console

ben 
{age:12}
 age:12
 __proto__:
  age: 34
  __proto__: Object

ben.age returns 12 and not 34 
because if we take a look at the ben object we
immediately have access to age,  we don't have to go any further 
in the prototype chain to find age. 
So as soon as we find it
that's the value that's going to get returned.

When you look up a property on an object
if it can't find it there it will look on its pro its prototype.

If it can't find it on that proto then
it would look at the proto of the proto and it will
keep going down the chain of prototypes until it finds it.

In our example if we look for something
that doesn't exist, say bend.address for example,
it will go down two three levels until
it reaches the base object and if you can't find
it there it will return undefined. 

*/

//--------------------------------------------------------------------

// difference between 'prototype' and '__proto__' 

/*

__proto__  is a property of every variable 
that's pointing to the parent object that it's inheriting from,
whereas prototype is a property on the constructor function that
contains all the stuff that will be inherited by its instance.

So in essence they're exactly the same thing but
accessed from different ends.

*/

//Example

class Person {
    talk() {
      return 'Talking';
    }
  }
  
const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking
  
Person.prototype === me.__proto__; //true

// Another example

function dude(name) {
    this.name = name;
}

const Sina = new dude('Sina');

/*

in the console 

Sina
> dude {name: 'Sina'}
  name: "Sina"
  > __proto__: Object

Sina.prototype is undefined

Dude.prototype does exist

*/

Sina.__proto__ == dude.prototype; // true

/* 

const me = {};
 is the same thing as  
const me = new Object();

*/



