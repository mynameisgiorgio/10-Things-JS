//What is Constructor Function in JavaScript

//First Example

function Person(name) {
    this.name = name
    this.talk = function () {
        return 'Hello I am ${this.name}';
    }
}

const sina = new Person('Sina')
const ben = new Person('Ben')
const sam = new Person('Sam')

/* When you put the keyword New in front of a function call, JavaScript does automatically two things:
 

in this case

function Person(name) {
    const this = {}              Create an object inside the function itself and  calls it this
    this.name = name
    return this                  then return the object this to the statement where was invoked
}

*/

// Second Example

function SuperElement(type, content) {
    this.el = document.createElement(type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListner('click', () => {
        console.log(this.el)
    })
}

const h = new SuperElement('h1' , 'Hellooo!')

const array = ['a' , 'b' , 'c']

const myElements = array.map(item => {
    return new SuperElement('p', item)
})

