// What is THIS keyword in JavaScript


// THIS in Global scope

this                                // returns the window object

if (true) {
    console.log(this)               // returns the window object, it's not really a block that matters. it's really function or not function so
}                                   // if we're outside the function this is always going to be window 




// -------------------------------------------------------------------------

// THIS inside functions (methods)

function talk() {
    console.log(this)
}

const me =  {
    name: 'Sina',
    talk: talk                      // or alternatively in this case just: talk
}

me.talk()                           // returns the me object

talk()                              // return the window object, talk is on the window object. In strict mode  javascript doesn't allow calling
                                    // window inside a function by just using this

// Another example 

function talk() {
    return `I am ${this.name}`
}

const me = {
    name: 'Sina',
    talk
}

const you  = {
    name: 'Qoli'
    talk
}

me.talk()                              // returns Sina
you.talk()                             // returns Qoli




// -------------------------------------------------------------------------

// function.bind

function talk() {
    return `I am ${this.name}`
}

const me = {
    name: 'Sina',
}

talk.bind(me)                           // me object assumes the role of THIS inside talk, returns a functions that console.log 'I am Sina'

const meTalk = talk.bind(me)

meTalk()                                // returns 'I am Sina'. This process is called binding.
talk.bind(me)()                         // returns 'I am Sina' . When I change parameter, the new object will overwrite the value of THIS




// -------------------------------------------------------------------------

// function.call

talk.call(me)                           // returns 'I am Sina', it executes the function, doesn't return another function

//another example with parameter 

function talk(lang) {
    if (lang === 'en') {
        return `I am ${this.name}`
    } else if (lang === 'it') {
        return `Io sono ${this.name}`
    }
}

const me = {
    name: 'Sina'
}

talk.call(me, 'en')                     // returns 'I am Sina'
talk.call(me, 'it')                     // returns 'Io sono Sina'


// or multiple parameters

function talk(lang, isPolite) {
    if(isPolite){
        if (lang === 'en') {
        return `Hello, I am ${this.name}`
        } else if (lang === 'it') {
        return `Ciao bella, sono ${this.name}`
        }
    }
    if(!isPolite){
        if (lang === 'en') {
        return `${this.name}, what you want?`
        } else if (lang === 'it') {
        return `Sono ${this.name}, 🤌`
        }
    }
}

const me = {
    name: 'Sina'
}

talk.call(me, 'en', true)                  // returns 'Hello, I am Sina'




// -------------------------------------------------------------------------

// function.apply - same example as above


talk.apply(me, ['en', true])                // returns 'Hello, I am Sina'. It works like function.call with the only difference
                                            // that you pass the other parameters inside an array




// -------------------------------------------------------------------------

// THIS inside Contructor functions                                            

// the constructor functions automatically creates a binding
// between the object that's being created using the new keyword
// and the THIS keyword on the inside of the function

function Person(n) {
    this.name = n
    console.log(this)
}

const me = new Person('Sina')               // returns the me object {name: 'Sina'}


// Another example

function Person(n) {
    this.name = n,
    this.talk = function () {
        console.log(this)
    }
}

const me = new Person('Sina') 

me.talk()                                   // returns the me object {name: 'Sina', talk: f} 
                                            // the binding happens automatically




// -------------------------------------------------------------------------

// THIS inside callback functions 

function Person(n) {
    this.name = n,
    this.talk = function () {
        console.log(this)
    }
    setTimeout(function() {
        console.log(this)
    }, 100)
}

const me = new Person('Sina')   //after 100 milliseconds we see the result on the console.log of setTimeout which is 
                                // the window object! Callback functions are run in an entirely different context.
                                // the binding happens only for functions (methods) defined and executed within the
                                // context of constructor function, not as callback

// Two ways to fix this:

// 1)

function Person(n) {
    this.name = n,
    this.talk = function () {
        console.log(this)
    }
    setTimeout(function() {
        console.log(this)
    }.bind(this), 100)           // as soon as the bracket closes we're back inside the context of the constructor. In this case, 
}                                // this is pointing to the same this that we have been using


// 2) THIS inside Arrow functions

function Person(n) {
    this.name = n,
    this.talk = function () {
        console.log(this)
    }
    setTimeout(() => {
        console.log(this)
    }, 100)           
}

const me = new Person('Sina')      // after 100 milliseconds we see the me object, Person {name: 'Sina', talk: f}
