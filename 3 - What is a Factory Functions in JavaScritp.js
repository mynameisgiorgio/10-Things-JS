// Factory Functions in JavaScrit 
 

function personFactory(name) {
    return {                          // factory functions return an object
        name,
        talk() {
            return 'Hello I am ${name}'
        }
    }
}

/* Alternatively

function personFactory(name) {
    const object = {
        name,
        talk() {
            return 'Hello I am ${name}'
        }
    }
    return object;
}
 
*/

const me = personFactory('Sina')
me.talk() // 'Hello I am Sina'

const ben = personFactory('Ben')
me.talk() // 'Hello I am Ben'

const jill = personFactory('Dr. Jill')
me.talk() // 'Hello I am Dr. Jill'

// Benefits
// 1 Simple (no constructor or class required)
// 2 No duplicates
// 3 Data privacy (I can't change the name of any of these objects even if I wanted to)


// Another example

function createElement(type, text, color) {
    const el = document.createElement(type)
    el.innerText = text
    el.style.color= color
    document.body.append(el)
    return {
        el,
        setText(text) {
            el.innerText = text
        },
        setColor(color) {
            el.style.color = color
        }
    }
}

const firstElement = createElement('h1', 'Hey guys', 'red')

//let's use one of the methods

firstElement.setText('Goodbyefellas')

const secondElement = createElement('p', 'Hey guys', 'blue')