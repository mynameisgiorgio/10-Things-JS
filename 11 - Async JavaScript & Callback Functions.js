// Async JavaScript & Callback Functions -- Tutorial for Beginners

// Synchronous example

let pizza

function orderPizza() {
    console.log('Order pizza')
    pizza = '🍕'
    console.log('Pizza was ordered')
}

orderPizza()
console.log(`Eat ${pizza}`)

/* When we run it

Order Pizza 
Pizza was Ordered
Eat 🍕

*/ 

// Same example with setTimeout

let pizza

function orderPizza() {
    console.log('Order pizza')
    setTimeout(() => {
        pizza = '🍕'
    }, 2000)
    console.log('Pizza was ordered')
}

orderPizza()
console.log(`Eat ${pizza}`)

/* When we run it

Order Pizza 
Pizza was Ordered
Eat undefined

*/ 

//-----------------------------------------------------------

// Asynchronous example

let pizza

function orderPizza() {
    console.log('Order pizza')
    setTimeout(() => {
        pizza = '🍕'
    }, 2000)
    console.log('Pizza was ordered')
}

orderPizza()
console.log('Call Qoli')
console.log(`Eat ${pizza}`)

/* When we run it

Order Pizza 
Pizza was Ordered
Call Qoli
Eat undefined

*/ 

// let's modify whis example

let pizza

function orderPizza() {
    console.log('Order pizza')
    setTimeout(() => {
        pizza = '🍕'
        console.log(`${pizza} is ready`)
    }, 2000)
    console.log('Pizza was ordered')
}

orderPizza()
console.log('Call Qoli')
console.log(`Eat ${pizza}`)


/* When we run it

Order Pizza 
Pizza was Ordered
Call Qoli
Eat undefined
                                //After 2 seconds
🍕 is ready

*/ 


//-----------------------------------------------------------

// Callback Functions

function orderPizza(callback) {
    setTimeout(() => {
        const pizza = '🍕'
        callback()
    }, 2000)
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log('Call Qoli')

/* When we run it

Call Qoli

                                //After 2 seconds
Eat the 🍕 

*/ 

//-----------------------------------------------------------

// Callback Hell

function thing1(callback) {
    // Call pizza shop
    callback()
}

function thing2(callback) {
    // Order the pizza
    callback()
}

function thing3(callback) {         // Each callback is scoped within each function, so it's doesn't matter whether I use the same term
    // Eat the pizza
    callback()
}

thing1(() => {
    thing2(() => {
        thing3( () => {
            //do something
        })
    })
})

